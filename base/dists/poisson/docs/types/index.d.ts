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

import cdf = require( './../../../../../base/dists/poisson/cdf' );
import Poisson = require( './../../../../../base/dists/poisson/ctor' );
import entropy = require( './../../../../../base/dists/poisson/entropy' );
import kurtosis = require( './../../../../../base/dists/poisson/kurtosis' );
import logpmf = require( './../../../../../base/dists/poisson/logpmf' );
import mean = require( './../../../../../base/dists/poisson/mean' );
import median = require( './../../../../../base/dists/poisson/median' );
import mgf = require( './../../../../../base/dists/poisson/mgf' );
import mode = require( './../../../../../base/dists/poisson/mode' );
import pmf = require( './../../../../../base/dists/poisson/pmf' );
import quantile = require( './../../../../../base/dists/poisson/quantile' );
import skewness = require( './../../../../../base/dists/poisson/skewness' );
import stdev = require( './../../../../../base/dists/poisson/stdev' );
import variance = require( './../../../../../base/dists/poisson/variance' );

/**
* Interface describing the `poisson` namespace.
*/
interface Namespace {
	/**
	* Poisson distribution cumulative distribution function (CDF).
	*
	* @param x - input value
	* @param lambda - mean parameter
	* @returns evaluated CDF
	*
	* @example
	* var y = ns.cdf( 2.0, 0.5 );
	* // returns ~0.986
	*
	* y = ns.cdf( 2.0, 10.0 );
	* // returns ~0.003
	*
	* y = ns.cdf( -1.0, 4.0 );
	* // returns 0.0
	*
	* var mycdf = ns.cdf.factory( 5.0 );
	* y = mycdf( 3.0 );
	* // returns ~0.265
	*
	* y = mycdf( 8.0 );
	* // returns ~0.932
	*/
	cdf: typeof cdf;

	/**
	* Poisson distribution.
	*/
	Poisson: typeof Poisson;

	/**
	* Returns the entropy of a Poisson distribution.
	*
	* ## Notes
	*
	* -   If provided a negative value for `λ`, the function returns `NaN`.
	*
	* @param lambda - mean parameter
	* @returns entropy
	*
	* @example
	* var v = ns.entropy( 9.0 );
	* // returns ~2.508
	*
	* @example
	* var v = ns.entropy( 1.0 );
	* // returns ~1.305
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
	* Returns the excess kurtosis of a Poisson distribution.
	*
	* ## Notes
	*
	* -   If provided a non-positive value for `λ`, the function returns `NaN`.
	*
	* @param lambda - mean parameter
	* @returns excess kurtosis
	*
	* @example
	* var v = ns.kurtosis( 9.0 );
	* // returns ~0.111
	*
	* @example
	* var v = ns.kurtosis( 1.0 );
	* // returns 1.0
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
	* Poisson distribution natural logarithm of probability mass function (PMF).
	*
	* @param x - input value
	* @param lambda - mean parameter
	* @returns evaluated logPMF
	*
	* @example
	* var y = ns.logpmf( 4.0, 3.0 );
	* // returns ~-1.784
	*
	* y = ns.logpmf( 1.0, 3.0 );
	* // returns ~-1.901
	*
	* y = ns.logpmf( -1.0, 2.0 );
	* // returns -Infinity
	*
	* var mylogpmf = ns.logpmf.factory( 1.0 );
	* y = mylogpmf( 3.0 );
	* // returns ~-2.797
	*
	* y = mylogpmf( 1.0 );
	* // returns ~-1.0
	*/
	logpmf: typeof logpmf;

	/**
	* Returns the expected value of a Poisson distribution.
	*
	* ## Notes
	*
	* -   If provided a negative value for `λ`, the function returns `NaN`.
	*
	* @param lambda - mean parameter
	* @returns expected value
	*
	* @example
	* var v = ns.mean( 9.0 );
	* // returns 9.0
	*
	* @example
	* var v = ns.mean( 1.0 );
	* // returns 1.0
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
	* Returns the median of a Poisson distribution.
	*
	* ## Notes
	*
	* -   If provided a negative value for `λ`, the function returns `NaN`.
	*
	* @param lambda - mean parameter
	* @returns median
	*
	* @example
	* var v = ns.median( 9.0 );
	* // returns 9
	*
	* @example
	* var v = ns.median( 1.0 );
	* // returns 1
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
	* Poisson distribution moment-generating function (MGF).
	*
	* @param t - input value
	* @param lambda - mean parameter
	* @returns evaluated MGF
	*
	* @example
	* var v = ns.mgf( 0.5, 0.5 );
	* // returns ~1.383
	*
	* var mymgf = ns.mgf.factory( 2.0 );
	* y = mymgf( 0.1 );
	* // returns ~1.234
	*/
	mgf: typeof mgf;

	/**
	* Returns the mode of a Poisson distribution.
	*
	* ## Notes
	*
	* -   If provided a negative value for `λ`, the function returns `NaN`.
	*
	* @param lambda - mean parameter
	* @returns mode
	*
	* @example
	* var v = ns.mode( 9.0 );
	* // returns 9
	*
	* @example
	* var v = ns.mode( 1.0 );
	* // returns 1
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
	* Poisson distribution probability mass function (PMF).
	*
	* @param x - input value
	* @param lambda - mean parameter
	* @returns evaluated PMF
	*
	* @example
	* var y = ns.pmf( 4.0, 3.0 );
	* // returns ~0.168
	*
	* y = ns.pmf( 1.0, 3.0 );
	* // returns ~0.149
	*
	* y = ns.pmf( -1.0, 2.0 );
	* // returns 0.0
	*
	* var mypmf = ns.pmf.factory( 1.0 );
	* y = mypmf( 3.0 );
	* // returns ~0.061
	*
	* y = mypmf( 1.0 );
	* // returns ~0.368
	*/
	pmf: typeof pmf;

	/**
	* Poisson distribution quantile function.
	*
	* @param p - input value
	* @param lambda - mean parameter
	* @returns evaluated quantile function
	*
	* @example
	* var y = ns.quantile( 0.5, 2.0 );
	* // returns 2
	*
	* y = ns.quantile( 0.9, 4.0 );
	* // returns 7
	*
	* y = ns.quantile( 0.1, 200.0 );
	* // returns 182
	*
	* var myquantile = ns.quantile.factory( 5.0 );
	* y = myquantile( 0.4 );
	* // returns 4
	*
	* y = myquantile( 0.8 );
	* // returns 7
	*
	* y = myquantile( 1.0 );
	* // returns Infinity
	*/
	quantile: typeof quantile;

	/**
	* Returns the skewness of a Poisson distribution.
	*
	* ## Notes
	*
	* -   If provided a non-positive value for `λ`, the function returns `NaN`.
	*
	* @param lambda - mean parameter
	* @returns skewness
	*
	* @example
	* var v = ns.skewness( 9.0 );
	* // returns ~0.33
	*
	* @example
	* var v = ns.skewness( 1.0 );
	* // returns 1.0
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
	* Returns the standard deviation of a Poisson distribution.
	*
	* ## Notes
	*
	* -   If provided a negative value for `λ`, the function returns `NaN`.
	*
	* @param lambda - mean parameter
	* @returns standard deviation
	*
	* @example
	* var v = ns.stdev( 9.0 );
	* // returns 3.0
	*
	* @example
	* var v = ns.stdev( 1.0 );
	* // returns 1.0
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
	* Returns the variance of a Poisson distribution.
	*
	* ## Notes
	*
	* -   If provided a negative value for `λ`, the function returns `NaN`.
	*
	* @param lambda - mean parameter
	* @returns variance
	*
	* @example
	* var v = ns.variance( 9.0 );
	* // returns 9.0
	*
	* @example
	* var v = ns.variance( 1.0 );
	* // returns 1.0
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
* Poisson distribution.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
