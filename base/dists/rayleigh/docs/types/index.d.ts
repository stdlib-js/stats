/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import cdf = require( './../../../../../base/dists/rayleigh/cdf' );
import Rayleigh = require( './../../../../../base/dists/rayleigh/ctor' );
import entropy = require( './../../../../../base/dists/rayleigh/entropy' );
import kurtosis = require( './../../../../../base/dists/rayleigh/kurtosis' );
import logcdf = require( './../../../../../base/dists/rayleigh/logcdf' );
import logpdf = require( './../../../../../base/dists/rayleigh/logpdf' );
import mean = require( './../../../../../base/dists/rayleigh/mean' );
import median = require( './../../../../../base/dists/rayleigh/median' );
import mgf = require( './../../../../../base/dists/rayleigh/mgf' );
import mode = require( './../../../../../base/dists/rayleigh/mode' );
import pdf = require( './../../../../../base/dists/rayleigh/pdf' );
import quantile = require( './../../../../../base/dists/rayleigh/quantile' );
import skewness = require( './../../../../../base/dists/rayleigh/skewness' );
import stdev = require( './../../../../../base/dists/rayleigh/stdev' );
import variance = require( './../../../../../base/dists/rayleigh/variance' );

/**
* Interface describing the `rayleigh` namespace.
*/
interface Namespace {
	/**
	* Rayleigh distribution cumulative distribution function (CDF).
	*
	* @param x - input value
	* @param sigma - scale parameter
	* @returns evaluated CDF
	*
	* @example
	* var y = ns.cdf( 2.0, 0.0, 1.0 );
	* // returns ~0.977
	*
	* var myCDF = ns.cdf.factory( 10.0, 2.0 );
	* y = myCDF( 10.0 );
	* // returns 0.5
	*/
	cdf: typeof cdf;

	/**
	* Rayleigh distribution.
	*/
	Rayleigh: typeof Rayleigh;

	/**
	* Returns the differential entropy of a Rayleigh distribution.
	*
	* ## Notes
	*
	* -   If provided `σ < 0`, the function returns `NaN`.
	*
	* @param sigma - scale parameter
	* @returns entropy
	*
	* @example
	* var v = ns.entropy( 9.0 );
	* // returns ~3.139
	*
	* @example
	* var v = ns.entropy( 2.0 );
	* // returns ~1.635
	*
	* @example
	* var v = ns.entropy( -0.2 );
	* // returns NaN
	*
	* @example
	* var v = ns.entropy( NaN );
	* // returns NaN
	*/
	entropy: typeof entropy;

	/**
	* Returns the excess kurtosis of a Rayleigh distribution.
	*
	* ## Notes
	*
	* -   If provided `σ < 0`, the function returns `NaN`.
	*
	* @param sigma - scale parameter
	* @returns excess kurtosis
	*
	* @example
	* var v = ns.kurtosis( 9.0 );
	* // returns ~0.245
	*
	* @example
	* var v = ns.kurtosis( 5.0 );
	* // returns ~0.245
	*
	* @example
	* var v = ns.kurtosis( 3.0 );
	* // returns ~0.245
	*
	* @example
	* var v = ns.kurtosis( -0.2 );
	* // returns NaN
	*
	* @example
	* var v = ns.kurtosis( NaN );
	* // returns NaN
	*/
	kurtosis: typeof kurtosis;

	/**
	* Rayleigh distribution logarithm of cumulative distribution function (CDF).
	*
	* @param x - input value
	* @param sigma - scale parameter
	* @returns evaluated logCDF
	*
	* @example
	* var y = ns.logcdf( 2.0, 5.0 );
	* // returns ~-2.564
	*
	* var mylogcdf = ns.logcdf.factory( 0.5 );
	* y = mylogcdf( 1.0 );
	* // returns ~-0.145
	*
	* y = mylogcdf( 0.5 );
	* // returns ~-0.934
	*/
	logcdf: typeof logcdf;

	/**
	* Rayleigh distribution natural logarithm of probability density function (logPDF).
	*
	* @param x - input value
	* @param sigma - scale parameter
	* @returns evaluated logPDF
	*
	* @example
	* var y = ns.logpdf( 2.0, 4.0 );
	* // returns ~-2.207
	*
	* var mylogpdf = ns.logpdf.factory( 4.0 );
	*
	* y = mylogpdf( 6.0 );
	* // returns ~-2.104
	*
	* y = mylogpdf( 4.0 );
	* // returns ~-1.884
	*/
	logpdf: typeof logpdf;

	/**
	* Returns the expected value of a Rayleigh distribution.
	*
	* ## Notes
	*
	* -   If provided `σ < 0`, the function returns `NaN`.
	*
	* @param sigma - scale parameter
	* @returns expected value
	*
	* @example
	* var v = ns.mean( 9.0 );
	* // returns ~11.28
	*
	* @example
	* var v = ns.mean( 2.0 );
	* // returns ~2.507
	*
	* @example
	* var v = ns.mean( -0.2 );
	* // returns NaN
	*
	* @example
	* var v = ns.mean( NaN );
	* // returns NaN
	*/
	mean: typeof mean;

	/**
	* Returns the median of a Rayleigh distribution.
	*
	* ## Notes
	*
	* -   If provided `σ < 0`, the function returns `NaN`.
	*
	* @param sigma - scale parameter
	* @returns median
	*
	* @example
	* var v = ns.median( 9.0 );
	* // returns ~10.597
	*
	* @example
	* var v = ns.median( 2.0 );
	* // returns ~2.355
	*
	* @example
	* var v = ns.median( -0.2 );
	* // returns NaN
	*
	* @example
	* var v = ns.median( NaN );
	* // returns NaN
	*/
	median: typeof median;

	/**
	* Rayleigh distribution moment-generating function (MGF).
	*
	* @param t - input value
	* @param sigma - scale parameter
	* @returns evaluated MGF
	*
	* @example
	* var y = ns.mgf( 1.0, 3.0 );
	* // returns ~678.508
	*
	* y = ns.mgf( 1.0, 2.0 );
	* // returns ~38.65
	*
	* y = ns.mgf( -1.0, 4.0 );
	* // returns ~-0.947
	*
	* var myMGF = ns.mgf.factory( 0.5 );
	*
	* y = myMGF( 1.0 );
	* // returns ~2.715
	*
	* y = myMGF( 0.5 );
	* // returns ~1.888
	*/
	mgf: typeof mgf;

	/**
	* Returns the mode of a Rayleigh distribution.
	*
	* ## Notes
	*
	* -   If provided `σ < 0`, the function returns `NaN`.
	*
	* @param sigma - scale parameter
	* @returns mode
	*
	* @example
	* var v = ns.mode( 9.0 );
	* // returns 9.0
	*
	* @example
	* var v = ns.mode( 2.0 );
	* // returns 2.0
	*
	* @example
	* var v = ns.mode( -0.2 );
	* // returns NaN
	*
	* @example
	* var v = ns.mode( NaN );
	* // returns NaN
	*/
	mode: typeof mode;

	/**
	* Rayleigh distribution probability density function (PDF).
	*
	* @param x - input value
	* @param sigma - scale parameter
	* @returns evaluated PDF
	*
	* @example
	* var y = ns.pdf( 2.0, 4.0 );
	* // returns ~0.11
	*
	* var myPDF = ns.pdf.factory( 4.0 );
	*
	* y = myPDF( 6.0 );
	* // returns ~0.122
	*
	* y = myPDF( 4.0 );
	* // returns ~0.152
	*/
	pdf: typeof pdf;

	/**
	* Rayleigh distribution quantile function.
	*
	* @param p - input value
	* @param sigma - scale parameter
	* @returns evaluated quantile function
	*
	* @example
	* var y = ns.quantile( 0.5, 4.0 );
	* // returns ~4.71
	*
	* var myQuantile = ns.quantile.factory( 0.4 );
	*
	* y = myQuantile( 0.4 );
	* // returns ~0.404
	*
	* y = myQuantile( 1.0 );
	* // returns Infinity
	*/
	quantile: typeof quantile;

	/**
	* Returns the skewness of a Rayleigh distribution.
	*
	* ## Notes
	*
	* -   If provided `σ < 0`, the function returns `NaN`.
	*
	* @param sigma - scale parameter
	* @returns skewness
	*
	* @example
	* var v = ns.skewness( 9.0 );
	* // returns ~0.631
	*
	* @example
	* var v = ns.skewness( 2.0 );
	* // returns ~0.631
	*
	* @example
	* var v = ns.skewness( -0.2 );
	* // returns NaN
	*
	* @example
	* var v = ns.skewness( NaN );
	* // returns NaN
	*/
	skewness: typeof skewness;

	/**
	* Returns the standard deviation of a Rayleigh distribution.
	*
	* ## Notes
	*
	* -   If provided `σ < 0`, the function returns `NaN`.
	*
	* @param sigma - scale parameter
	* @returns standard deviation
	*
	* @example
	* var v = ns.stdev( 9.0 );
	* // returns ~5.896
	*
	* @example
	* var v = ns.stdev( 2.0 );
	* // returns ~1.31
	*
	* @example
	* var v = ns.stdev( -0.2 );
	* // returns NaN
	*
	* @example
	* var v = ns.stdev( NaN );
	* // returns NaN
	*/
	stdev: typeof stdev;

	/**
	* Returns the variance of a Rayleigh distribution.
	*
	* ## Notes
	*
	* -   If provided `σ < 0`, the function returns `NaN`.
	*
	* @param sigma - scale parameter
	* @returns variance
	*
	* @example
	* var v = ns.variance( 9.0 );
	* // returns ~34.765
	*
	* @example
	* var v = ns.variance( 2.0 );
	* // returns ~1.717
	*
	* @example
	* var v = ns.variance( -0.2 );
	* // returns NaN
	*
	* @example
	* var v = ns.variance( NaN );
	* // returns NaN
	*/
	variance: typeof variance;
}

/**
* Rayleigh distribution.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
