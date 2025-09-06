/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import cdf = require( './../../../../../base/dists/planck/cdf' );
import entropy = require( './../../../../../base/dists/planck/entropy' );
import kurtosis = require( './../../../../../base/dists/planck/kurtosis' );
import logcdf = require( './../../../../../base/dists/planck/logcdf' );
import logpmf = require( './../../../../../base/dists/planck/logpmf' );
import mean = require( './../../../../../base/dists/planck/mean' );
import median = require( './../../../../../base/dists/planck/median' );
import mgf = require( './../../../../../base/dists/planck/mgf' );
import mode = require( './../../../../../base/dists/planck/mode' );
import pmf = require( './../../../../../base/dists/planck/pmf' );
import quantile = require( './../../../../../base/dists/planck/quantile' );
import skewness = require( './../../../../../base/dists/planck/skewness' );
import stdev = require( './../../../../../base/dists/planck/stdev' );
import variance = require( './../../../../../base/dists/planck/variance' );

/**
* Interface describing the `planck` namespace.
*/
interface Namespace {
	/**
	* Planck distribution cumulative distribution function (CDF).
	*
	* @param x - input value
	* @param lambda - shape parameter
	* @returns evaluated CDF
	*
	* @example
	* var y = ns.cdf( 2.0, 0.5 );
	* // returns ~0.7769
	*
	* y = ns.cdf( 2.0, 1.5 );
	* // returns ~0.9889
	*
	* var mycdf = ns.cdf.factory( 1.5 );
	* y = mycdf( 3.0 );
	* // returns ~0.9975
	*
	* y = mycdf( 1.0 );
	* // returns ~0.9502
	*/
	cdf: typeof cdf;

	/**
	* Returns the differential entropy of a Planck distribution.
	*
	* ## Notes
	*
	* -   If `lambda <= 0`, the function returns `NaN`.
	*
	* @param lambda - shape parameter
	* @returns differential entropy
	*
	* @example
	* var v = ns.entropy( 0.1 );
	* // returns ~3.3030
	*
	* @example
	* var v = ns.entropy( 1.5 );
	* // returns ~0.6833
	*
	* @example
	* var v = ns.entropy( 2.9 );
	* // returns ~0.2255
	*
	* @example
	* var v = ns.entropy( -1.1 );
	* // returns NaN
	*
	* @example
	* var v = ns.entropy( NaN );
	* // returns NaN
	*/
	entropy: typeof entropy;

	/**
	* Returns the excess kurtosis of a Planck distribution.
	*
	* ## Notes
	*
	* -   If `lambda <= 0`, the function returns `NaN`.
	*
	* @param lambda - shape parameter
	* @returns kurtosis
	*
	* @example
	* var v = ns.kurtosis( 0.1 );
	* // returns ~6.0100
	*
	* @example
	* var v = ns.kurtosis( 1.5 );
	* // returns ~8.7048
	*
	* @example
	* var v = ns.kurtosis( -1.1 );
	* // returns NaN
	*
	* @example
	* var v = ns.kurtosis( NaN );
	* // returns NaN
	*/
	kurtosis: typeof kurtosis;

	/**
	* Evaluates the logarithm of the cumulative distribution function (CDF) for a Planck distribution with shape parameter `lambda`.
	*
	* @param x - input value
	* @param lambda - shape parameter
	* @returns evaluated logCDF
	*
	* @example
	* var y = ns.logcdf( 2.0, 0.5 );
	* // returns ~-0.2525
	*
	* y = ns.logcdf( 2.0, 1.5 );
	* // returns ~-0.0112
	*
	* var mylogcdf = ns.logcdf.factory( 1.5 );
	* y = mylogcdf( 3.0 );
	* // returns ~-0.0025
	*
	* y = mylogcdf( 1.0 );
	* // returns ~-0.0511
	*/
	logcdf: typeof logcdf;

	/**
	* Evaluates the natural logarithm of the probability mass function (PMF) for a Planck distribution.
	*
	* @param x - input value
	* @param lambda - shape parameter
	* @returns evaluated logPMF
	*
	* @example
	* var y = ns.logpmf( 4.0, 0.3 );
	* // returns ~-2.5502
	*
	* y = ns.logpmf( 2.0, 1.7 );
	* // returns ~-3.6017
	*
	* var mylogpmf = ns.logpmf.factory( 0.5 );
	* y = mylogpmf( 3.0 );
	* // returns ~-2.4327
	*
	* y = mylogpmf( 1.0 );
	* // returns ~-1.4327
	*/
	logpmf: typeof logpmf;

	/**
	* Returns the expected value of a Planck distribution.
	*
	* ## Notes
	*
	* -   If `lambda <= 0`, the function returns `NaN`.
	*
	* @param lambda - shape parameter
	* @returns expected value
	*
	* @example
	* var v = ns.mean( 0.1 );
	* // returns ~9.5083
	*
	* @example
	* var v = ns.mean( 0.5 );
	* // returns ~1.5415
	*
	* @example
	* var v = ns.mean( 1.1 );
	* // returns ~0.4989
	*
	* @example
	* var v = ns.mean( NaN );
	* // returns NaN
	*/
	mean: typeof mean;

	/**
	* Returns the median of a Planck distribution.
	*
	* ## Notes
	*
	* -   If `lambda <= 0`, the function returns `NaN`.
	*
	* @param lambda - shape parameter
	* @returns median
	*
	* @example
	* var v = ns.median( 0.1 );
	* // returns 6
	*
	* @example
	* var v = ns.median( 1.5 );
	* // returns 0
	*
	* @example
	* var v = ns.median( -1.1 );
	* // returns NaN
	*
	* @example
	* var v = ns.median( NaN );
	* // returns NaN
	*/
	median: typeof median;

	/**
	* Planck distribution moment-generating function (MGF).
	*
	* @param t - input value
	* @param lambda - shape parameter
	* @returns evaluated MGF
	*
	* @example
	* var y = ns.mgf( 0.2, 0.5 );
	* // returns ~1.5181
	*
	* y = ns.mgf( 0.4, 1.5 );
	* // returns ~1.1645
	*
	* var mymgf = ns.mgf.factory( 0.8 );
	* y = mymgf( -0.2 );
	* // returns ~0.8711
	*/
	mgf: typeof mgf;

	/**
	* Returns the mode of a Planck distribution.
	*
	* ## Notes
	*
	* -   If `lambda <= 0`, the function returns `NaN`.
	*
	* @param lambda - shape parameter
	* @returns mode
	*
	* @example
	* var v = ns.mode( 0.1 );
	* // returns 0.0
	*
	* @example
	* var v = ns.mode( 1.5 );
	* // returns 0.0
	*
	* @example
	* var v = ns.mode( -1.1 );
	* // returns NaN
	*
	* @example
	* var v = ns.mode( NaN );
	* // returns NaN
	*/
	mode: typeof mode;

	/**
	* Planck distribution probability mass function (PMF).
	*
	* @param x - input value
	* @param lambda - shape parameter
	* @returns evaluated PMF
	*
	* @example
	* var y = ns.pmf( 4.0, 0.3 );
	* // returns ~0.0781
	*
	* y = ns.pmf( 2.0, 1.7 );
	* // returns ~0.0273
	*
	* y = ns.pmf( -1.0, 0.5 );
	* // returns 0.0
	*
	* var mypmf = ns.pmf.factory( 0.5 );
	* y = mypmf( 3.0 );
	* // returns ~0.0878
	*
	* y = mypmf( 1.0 );
	* // returns ~0.2387
	*/
	pmf: typeof pmf;

	/**
	* Evaluates the quantile function for a Planck distribution with shape parameter `lambda` at a probability `p`.
	*
	* @param p - input value
	* @param lambda - shape parameter
	* @returns evaluated quantile function
	*
	* @example
	* var y = ns.quantile( 0.8, 0.4 );
	* // returns 4.0
	*
	* y = ns.quantile( 0.5, 1.4 );
	* // returns 0.0
	*
	* var myquantile = ns.quantile.factory( 0.4 );
	* y = myquantile( 0.4 );
	* // returns 1.0
	*
	* y = myquantile( 0.8 );
	* // returns 4.0
	*
	* y = myquantile( 1.0 );
	* // returns Infinity
	*/
	quantile: typeof quantile;

	/**
	* Returns the skewness of a Planck distribution.
	*
	* ## Notes
	*
	* -   If `lambda <= 0`, the function returns `NaN`.
	*
	* @param lambda - shape parameter
	* @returns skewness
	*
	* @example
	* var v = ns.skewness( 0.1 );
	* // returns ~2.0025
	*
	* @example
	* var v = ns.skewness( 0.5 );
	* // returns ~2.5894
	*
	* @example
	* var v = ns.skewness( -1.1 );
	* // returns NaN
	*
	* @example
	* var v = ns.skewness( NaN );
	* // returns NaN
	*/
	skewness: typeof skewness;

	/**
	* Returns the standard deviation of a Planck distribution.
	*
	* ## Notes
	*
	* -   If `lambda <= 0`, the function returns `NaN`.
	*
	* @param lambda - shape parameter
	* @returns standard deviation
	*
	* @example
	* var v = ns.stdev( 0.1 );
	* // returns ~9.9958
	*
	* @example
	* var v = ns.stdev( 1.5 );
	* // returns ~0.6080
	*
	* @example
	* var v = ns.stdev( -1.1 );
	* // returns NaN
	*
	* @example
	* var v = ns.stdev( NaN );
	* // returns NaN
	*/
	stdev: typeof stdev;

	/**
	* Returns the variance of a Planck distribution.
	*
	* ## Notes
	*
	* -   If `lambda <= 0`, the function returns `NaN`.
	*
	* @param lambda - shape parameter
	* @returns variance
	*
	* @example
	* var v = ns.variance( 0.1 );
	* // returns ~99.9167
	*
	* @example
	* var v = ns.variance( 1.5 );
	* // returns ~0.3697
	*
	* @example
	* var v = ns.variance( -1.0 );
	* // returns NaN
	*
	* @example
	* var v = ns.variance( NaN );
	* // returns NaN
	*/
	variance: typeof variance;
}

/**
* Planck distribution.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
