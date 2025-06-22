/**
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

'use strict';

// MODULES //

var resolveStr = require( './../../../base/ztest/alternative-resolve-str' );
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var quantile = require( './../../../base/dists/normal/quantile' ).factory;
var cdf = require( './../../../base/dists/normal/cdf' ).factory;
var smean = require( './../../../strided/smean' ).ndarray;
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var abs = require( '@stdlib/math/base/special/abs' );
var Float32Array = require( '@stdlib/array/float32' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );


// VARIABLES //

var normalCDF = cdf( 0.0, 1.0 );
var normalQuantile = quantile( 0.0, 1.0 );

// Initialize a workspace for storing confidence intervals:
var WORKSPACE = new Float32Array( 2 );


// MAIN //

/**
* Computes a one-sample Z-test for a single-precision floating-point strided array using alternative indexing semantics.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {(integer|string)} alternative - alternative hypothesis
* @param {number} alpha - significance level
* @param {number} mu - mean under the null hypothesis
* @param {PositiveNumber} sigma - known standard deviation
* @param {Float32Array} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @param {Object} out - output results object
* @returns {Object} results object
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var Results = require( '@stdlib/stats/base/ztest/one-sample/results/float32' );
*
* var x = new Float32Array( [ 4.0, 4.0, 6.0, 6.0, 5.0 ] );
*
* var results = new Results();
* var out = sztest( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, results );
* // returns {...}
*
* var bool = ( out === results );
* // returns true
*/
function sztest( N, alternative, alpha, mu, sigma, x, strideX, offsetX, out ) {
	var pValue;
	var stderr;
	var xmean;
	var stat;
	var alt;
	var q;

	alt = resolveStr( alternative );
	if (
		N <= 0 ||
		isnanf( alpha ) ||
		isnanf( mu ) ||
		isnanf( sigma ) ||
		sigma <= 0.0 ||
		alpha < 0.0 ||
		alpha > 1.0
	) {
		WORKSPACE[ 0 ] = NaN;
		WORKSPACE[ 1 ] = NaN;
		out.rejected = false;
		out.alternative = alt;
		out.alpha = NaN;
		out.pValue = NaN;
		out.statistic = NaN;
		out.ci = WORKSPACE;
		out.nullValue = NaN;
		out.sd = NaN;
		return out;
	}
	// "Cast" input values to single-precision:
	alpha = f32( alpha );
	mu = f32( mu );
	sigma = f32( sigma );

	// Compute the standard error of the mean:
	stderr = sigma / sqrt( N ); // note: intentionally evaluated in double-precision to avoid `N` exceeding max safe float32 integer

	// Compute the arithmetic mean of the input array:
	xmean = smean( N, x, strideX, offsetX );

	// Compute the test statistic (i.e., the z-score, which is the distance of the sample mean from the population mean in units of standard error):
	stat = ( xmean - mu ) / stderr;

	// Compute the p-value and confidence interval...
	if ( alt === 'less' ) {
		pValue = normalCDF( stat );
		q = normalQuantile( 1.0-alpha );
		WORKSPACE[ 0 ] = NINF;
		WORKSPACE[ 1 ] = mu + ( (stat+q)*stderr );
	} else if ( alt === 'greater' ) {
		pValue = 1.0 - normalCDF( stat );
		q = normalQuantile( 1.0-alpha );
		WORKSPACE[ 0 ] = mu + ( (stat-q)*stderr );
		WORKSPACE[ 1 ] = PINF;
	} else { // alt == 'two-sided'
		pValue = 2.0 * normalCDF( -abs( stat ) );
		q = normalQuantile( 1.0-(alpha/2.0) );
		WORKSPACE[ 0 ] = mu + ( (stat-q)*stderr );
		WORKSPACE[ 1 ] = mu + ( (stat+q)*stderr );
	}
	// Return test results:
	out.rejected = ( pValue <= alpha );
	out.alternative = alt;
	out.alpha = alpha;
	out.pValue = f32( pValue );
	out.statistic = f32( stat );
	out.ci = WORKSPACE;
	out.nullValue = mu;
	out.sd = f32( stderr );
	return out;
}


// EXPORTS //

module.exports = sztest;
