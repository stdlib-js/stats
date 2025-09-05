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

import cdf = require( './../../../../../base/dists/bradford/cdf' );
import entropy = require( './../../../../../base/dists/bradford/entropy' );
import mean = require( './../../../../../base/dists/bradford/mean' );
import median = require( './../../../../../base/dists/bradford/median' );
import mode = require( './../../../../../base/dists/bradford/mode' );
import pdf = require( './../../../../../base/dists/bradford/pdf' );
import quantile = require( './../../../../../base/dists/bradford/quantile' );
import skewness = require( './../../../../../base/dists/bradford/skewness' );
import stdev = require( './../../../../../base/dists/bradford/stdev' );
import variance = require( './../../../../../base/dists/bradford/variance' );

/**
* Interface describing the `bradford` namespace.
*/
interface Namespace {
	/**
	* Bradford distribution cumulative distribution function (CDF).
	*
	* @param x - input value
	* @param c - shape parameter
	* @returns evaluated CDF
	*
	* @example
	* var y = ns.cdf( 0.5, 5.0 );
	* // returns ~0.699
	*
	* var mycdf = ns.cdf.factory( 5.0 );
	* y = mycdf( 0.5 );
	* // returns ~0.699
	*
	* y = mycdf( 1.0 );
	* // returns 1.0
	*/
	cdf: typeof cdf;

	/**
	* Returns the differential entropy of a Bradford distribution.
	*
	* ## Notes
	*
	* -   If `c <= 0`, the function returns `NaN`.
	*
	* @param c - shape parameter
	* @returns differential entropy
	*
	* @example
	* var v = ns.entropy( 0.2 );
	* // returns ~-0.001
	*
	* @example
	* var v = ns.entropy( 0.5 );
	* // returns ~-0.007
	*
	* @example
	* var v = ns.entropy( 10.0 );
	* // returns ~-0.229
	*
	* @example
	* var v = ns.entropy( 0.0 );
	* // returns NaN
	*
	* @example
	* var v = ns.entropy( -1.0 );
	* // returns NaN
	*
	* @example
	* var v = ns.entropy( NaN );
	* // returns NaN
	*/
	entropy: typeof entropy;

	/**
	* Returns the expected value of a Bradford distribution.
	*
	* ## Notes
	*
	* -   If `c <= 0`, the function returns `NaN`.
	*
	* @param c - shape parameter
	* @returns expected value
	*
	* @example
	* var v = ns.mean( 0.1 );
	* // returns ~0.492
	*
	* @example
	* var v = ns.mean( 0.5 );
	* // returns ~0.466
	*
	* @example
	* var v = ns.mean( 10.0 );
	* // returns ~0.317
	*
	* @example
	* var v = ns.mean( 0.0 );
	* // returns NaN
	*
	* @example
	* var v = ns.mean( -1.0 );
	* // returns NaN
	*
	* @example
	* var v = ns.mean( NaN );
	* // returns NaN
	*/
	mean: typeof mean;

	/**
	* Returns the median of a Bradford distribution.
	*
	* ## Notes
	*
	* -   If `c <= 0`, the function returns `NaN`.
	*
	* @param c - shape parameter
	* @returns median
	*
	* @example
	* var v = ns.median( 0.1 );
	* // returns ~0.488
	*
	* @example
	* var v = ns.median( 0.5 );
	* // returns ~0.449
	*
	* @example
	* var v = ns.median( 10.0 );
	* // returns ~0.232
	*
	* @example
	* var v = ns.median( 0.0 );
	* // returns NaN
	*
	* @example
	* var v = ns.median( -1.0 );
	* // returns NaN
	*
	* @example
	* var v = ns.median( NaN );
	* // returns NaN
	*/
	median: typeof median;

	/**
	* Returns the mode of a Bradford distribution.
	*
	* ## Notes
	*
	* -   If `c <= 0`, the function returns `NaN`.
	*
	* @param c - shape parameter
	* @returns mode
	*
	* @example
	* var v = ns.mode( 0.1 );
	* // returns 0.0
	*
	* @example
	* var v = ns.mode( 0.5 );
	* // returns 0.0
	*
	* @example
	* var v = ns.mode( 10.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.mode( 0.0 );
	* // returns NaN
	*
	* @example
	* var v = ns.mode( -1.0 );
	* // returns NaN
	*
	* @example
	* var v = ns.mode( NaN );
	* // returns NaN
	*/
	mode: typeof mode;

	/**
	* Bradford distribution probability density function (PDF).
	*
	* @param x - input value
	* @param c - shape parameter
	* @returns evaluated PDF
	*
	* @example
	* var y = ns.pdf( 0.5, 5.0 );
	* // returns ~0.797
	*
	* var mypdf = ns.pdf.factory( 5.0 );
	* y = mypdf( 0.5 );
	* // returns ~0.797
	*
	* y = mypdf( 1.0 );
	* // returns ~0.465
	*/
	pdf: typeof pdf;

	/**
	* Bradford distribution quantile function.
	*
	* @param p - input value
	* @param c - shape parameter
	* @returns evaluated quantile function
	*
	* @example
	* var y = ns.quantile( 0.1, 0.1 );
	* // returns ~0.096
	*
	* y = ns.quantile( 0.5, 5.0 );
	* // returns ~0.290
	*
	* var myquantile = ns.quantile.factory( 5.0 );
	* y = myquantile( 0.4 );
	* // returns ~0.210
	*
	* y = myquantile( 0.8 );
	* // returns ~0.639
	*
	* y = myquantile( 1.0 );
	* // returns 1.0
	*/
	quantile: typeof quantile;

	/**
	* Returns the skewness of a Bradford distribution.
	*
	* ## Notes
	*
	* -   If provided `c <= 0`, the function returns `NaN`.
	*
	* @param c - shape parameter
	* @returns skewness
	*
	* @example
	* var v = ns.skewness( 9.0 );
	* // returns ~0.772
	*
	* @example
	* var v = ns.skewness( 1.0 );
	* // returns ~0.239
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
	* Returns the standard deviation of a Bradford distribution.
	*
	* ## Notes
	*
	* -   If `c <= 0`, the function returns `NaN`.
	*
	* @param c - shape parameter
	* @returns standard deviation
	*
	* @example
	* var v = ns.stdev( 0.1 );
	* // returns ~0.289
	*
	* @example
	* var v = ns.stdev( 0.5 );
	* // returns ~0.288
	*
	* @example
	* var v = ns.stdev( 10.0 );
	* // returns ~0.276
	*
	* @example
	* var v = ns.stdev( 0.0 );
	* // returns NaN
	*
	* @example
	* var v = ns.stdev( -1.0 );
	* // returns NaN
	*
	* @example
	* var v = ns.stdev( NaN );
	* // returns NaN
	*/
	stdev: typeof stdev;

	/**
	* Returns the variance of a Bradford distribution.
	*
	* ## Notes
	*
	* -   If `c <= 0`, the function returns `NaN`.
	*
	* @param c - shape parameter
	* @returns variance
	*
	* @example
	* var v = ns.variance( 0.1 );
	* // returns ~0.083
	*
	* @example
	* var v = ns.variance( 0.5 );
	* // returns ~0.083
	*
	* @example
	* var v = ns.variance( 10.0 );
	* // returns ~0.076
	*
	* @example
	* var v = ns.variance( 0.0 );
	* // returns NaN
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
* Bradford distribution.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
