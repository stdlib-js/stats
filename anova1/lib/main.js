/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isNumberArray = require( '@stdlib/assert/is-number-array' ).primitives;
var isTypedArrayLike = require( '@stdlib/assert/is-typed-array-like' );
var isArray = require( '@stdlib/assert/is-array' );
var setReadOnly = require( '@stdlib/utils/define-read-only-property' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var format = require( '@stdlib/string/format' );
var cdf = require( './../../base/dists/f/cdf' );
var defaults = require( './defaults.js' );
var validate = require( './validate.js' );
var unique = require( './unique.js' );
var meanTable = require( './mean_table.js' );
var mean = require( './mean.js' );
var prettyPrint = require( './print.js' );


// MAIN //

/**
* Perform a one-way analysis of variance (ANOVA).
*
* @param {NumericArray} x - measured values
* @param {Array} factor - array of treatments
* @param {Options} [options] - function options
* @param {number} [options.alpha=0.05] - significance level
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {TypeError} first argument must be a numeric array
* @throws {TypeError} second argument must be an array
* @throws {RangeError} `factor` must contain at least two unique elements
* @throws {RangeError} length of `x` must be greater than or equal to two
* @throws {RangeError} `x` and `factor` must have the same length
* @returns {Object} test results
*/
function anova1( x, factor, options ) {
	var meanSumSqTreat; // Mean sum of squares
	var meanSumSqError;
	var ssTreatment;
	var sumSqTotal;
	var sumSqError;
	var treatment; // Index variable
	var grandMean;
	var nGroups;
	var fScore;
	var treats;
	var means;
	var numDf;
	var denDf;
	var nobs;
	var pVal;
	var opts;
	var err;
	var out;
	var sq;
	var i;

	if ( !isTypedArrayLike( x ) && !isNumberArray( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a numeric array. Value: `%s`.', x ) );
	}
	opts = defaults();
	if ( arguments.length > 2 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	nobs = x.length;
	if ( nobs <= 1 ) {
		throw new RangeError( format( 'invalid argument. First argument must contain at least two elements. Value: `%s`.', x ) );
	}
	if ( !isArray( factor ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be an array. Value: `%s`.', treats ) );
	}

	treats = unique( factor );
	nGroups = treats.length;
	if ( nGroups <= 1 ) {
		throw new RangeError( format( 'invalid argument. Second argument must contain at least two unique elements. Value: `%s`.', treats ) );
	}
	if ( nobs !== factor.length ) {
		throw new RangeError( 'invalid arguments. First and second arguments must be arrays having the same length.' );
	}

	sumSqTotal = 0.0;
	ssTreatment = 0.0;
	means = meanTable( x, factor, treats );
	grandMean = mean( x );

	// Now get total ss:
	for ( i = 0; i < nobs; i++ ) {
		sq = ( x[i] - grandMean ) * ( x[i] - grandMean );
		sumSqTotal += sq;
	}

	sq = 0.0;
	for ( treatment in means ) {
		if ( hasOwnProp( means, treatment ) ) {
			// Already have sq defined
			sq = ( means[treatment].mean - grandMean ) *
				( means[treatment].mean - grandMean );
			ssTreatment += means[treatment].sampleSize * sq;
		}
	}
	numDf = nGroups - 1;
	denDf = nobs - nGroups;
	sumSqError = sumSqTotal - ssTreatment;
	meanSumSqTreat = ssTreatment / numDf;
	meanSumSqError = sumSqError / denDf;
	fScore = meanSumSqTreat / meanSumSqError;

	pVal = 1.0 - cdf( fScore, numDf, denDf );

	out = {};

	treatment = {};
	setReadOnly( treatment, 'df', numDf );
	setReadOnly( treatment, 'ss', ssTreatment );
	setReadOnly( treatment, 'ms', meanSumSqTreat );
	setReadOnly( out, 'treatment', treatment );

	err = {};
	setReadOnly( err, 'df', denDf );
	setReadOnly( err, 'ss', sumSqError );
	setReadOnly( err, 'ms', meanSumSqError );
	setReadOnly( out, 'error', err );

	setReadOnly( out, 'statistic', fScore );
	setReadOnly( out, 'pValue', pVal );
	setReadOnly( out, 'means', means );
	setReadOnly( out, 'method', 'One-Way ANOVA' );
	setReadOnly( out, 'alpha', opts.alpha );
	setReadOnly( out, 'rejected', pVal <= opts.alpha );
	setReadOnly( out, 'print', prettyPrint( out ) );
	return out;
}


// EXPORTS //

module.exports = anova1;
