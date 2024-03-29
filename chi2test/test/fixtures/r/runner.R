#!/usr/bin/env Rscript
#
# @license Apache-2.0
#
# Copyright (c) 2018 The Stdlib Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# Set the precision to 16 digits:
options( digits = 16L );

#' Generate test fixtures.
#'
#' @examples
#' main();
main <- function() {
	#' Get the script filepath.
	#'
	#' @return The absolute path of this script
	#'
	#' @examples
	#' filepath <- get_script_path();
	get_script_path <- function() {
		args <- commandArgs( trailingOnly = FALSE );
		needle <- "--file=";
		match <- grep( needle, args );
		if ( length( match ) > 0 ) {
			# Rscript:
			filepath <- sub( needle, "", args[match] );
		} else {
			ls_vars <- ls( sys.frames()[[1]] )
			if ( "fileName" %in% ls_vars ) {
				# Source'd via RStudio:
				filepath <- sys.frames()[[1]]$fileName; # nolint
			} else {
				# Source'd via R console:
				filepath <- sys.frames()[[1]]$ofile;
			}
		}
		return( normalizePath( filepath ) );
	}

	#' Convert a data structure to JSON.
	#'
	#' @param x A data structure to convert
	#' @return JSON blob
	#'
	#' @examples
	#' x <- seq( -6.5, 25, 0.5 );
	#' json <- to_json( x );
	to_json <- function( x ) {
		return( jsonlite::toJSON( x, digits = 16, auto_unbox = TRUE ) );
	}

	#' Generate an output absolute filepath based on the script directory.
	#'
	#' @param name An output filename
	#' @return An absolute filepath
	#'
	#' @examples
	#' filepath <- get_filepath( "data.json" );
	get_filepath <- function( name ) {
		return( paste( source_dir, "/", name, sep = "" ) );
	}

	# Get the directory of this script:
	source_dir <- dirname( get_script_path() );

	# Generate test fixture data:
	x <- matrix( c( 63, 88, 96, 31, 55, 55, 25, 33, 32 ), nrow = 3 );

	counts <- chisq.test( x = x );
	counts <- list( x = x, pValue = counts$p.value, statistic = counts$statistic );

	x <- matrix( c( 20, 30, 30, 20 ), nrow = 2 );

	corrected <- chisq.test( x = x, correct = TRUE );
	corrected <- list( x = x, pValue = corrected$p.value, statistic = corrected$statistic );

	uncorrected <- chisq.test( x = x, correct = FALSE );
	uncorrected <- list( x = x, pValue = uncorrected$p.value, statistic = uncorrected$statistic );

	x <- matrix( c( 15, 30, 5, 20, 35, 15 ), ncol = 3, byrow = TRUE );
	more_cols <- chisq.test( x = x );
	more_cols <- list( x = x, pValue = more_cols$p.value, statistic = more_cols$statistic );

	x <- matrix( c( 15, 30, 15, 20, 35, 15, 30, 45, 25, 35, 50, 30 ), ncol = 3, byrow = TRUE );
	more_rows <- chisq.test( x = x );
	more_rows <- list( x = x, pValue = more_rows$p.value, statistic = more_rows$statistic );

	# Convert fixture data to JSON:
	counts <- to_json( counts );
	corrected <- to_json( corrected );
	uncorrected <- to_json( uncorrected );
	more_cols <- to_json( more_cols );
	more_rows <- to_json( more_rows );

	# Write the data to file...
	filepath <- get_filepath( "counts.json" );
	write( counts, filepath );

	filepath <- get_filepath( "corrected.json" );
	write( corrected, filepath );

	filepath <- get_filepath( "uncorrected.json" );
	write( uncorrected, filepath );

	filepath <- get_filepath( "more_rows.json" );
	write( more_rows, filepath );

	filepath <- get_filepath( "more_cols.json" );
	write( more_cols, filepath );
}

main();
