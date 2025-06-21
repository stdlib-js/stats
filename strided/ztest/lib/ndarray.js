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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var quantile = require( './../../../base/dists/normal/quantile' ).factory;
var cdf = require( './../../../base/dists/normal/cdf' ).factory;
var mean = require( './../../../strided/mean' ).ndarray;
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var abs = require( '@stdlib/math/base/special/abs' );
var Float64Array = require( '@stdlib/array/float64' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );


// VARIABLES //

var normalCDF = cdf( 0.0, 1.0 );
var normalQuantile = quantile( 0.0, 1.0 );

// Initialize a workspace for storing confidence intervals:
var WORKSPACE = new Float64Array( 2 );


// MAIN //

/**
* Computes a one-sample Z-test for a strided array using alternative indexing semantics.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {string} alternative - alternative hypothesis
* @param {number} alpha - significance level
* @param {number} mu - mean under the null hypothesis
* @param {PositiveNumber} sigma - known standard deviation
* @param {Collection} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @param {Object} out - output results object
* @returns {Object} results object
*
* @example
* var Results = require( '@stdlib/stats/base/ztest/one-sample/results/float64' );
*
* var x = [ 4.0, 4.0, 6.0, 6.0, 5.0 ];
*
* var results = new Results();
* var out = ztest( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, results );
* // returns {...}
*
* var bool = ( out === results );
* // returns true
*/
function ztest( N, alternative, alpha, mu, sigma, x, strideX, offsetX, out ) {
	var pValue;
	var stderr;
	var xmean;
	var stat;
	var q;

	if (
		N <= 0 ||
		isnan( alpha ) ||
		isnan( mu ) ||
		isnan( sigma ) ||
		sigma <= 0.0 ||
		alpha < 0.0 ||
		alpha > 1.0
	) {
		WORKSPACE[ 0 ] = NaN;
		WORKSPACE[ 1 ] = NaN;
		out.rejected = false;
		out.alternative = alternative;
		out.alpha = NaN;
		out.pValue = NaN;
		out.statistic = NaN;
		out.ci = WORKSPACE;
		out.nullValue = NaN;
		out.sd = NaN;
		return out;
	}
	// Compute the standard error of the mean:
	stderr = sigma / sqrt( N );

	// Compute the arithmetic mean of the input array:
	xmean = mean( N, x, strideX, offsetX );

	// Compute the test statistic (i.e., the z-score, which is the distance of the sample mean from the population mean in units of standard error):
	stat = ( xmean - mu ) / stderr;

	// Compute the p-value and confidence interval...
	if ( alternative === 'less' ) {
		pValue = normalCDF( stat );
		q = normalQuantile( 1.0-alpha );
		WORKSPACE[ 0 ] = NINF;
		WORKSPACE[ 1 ] = mu + ( (stat+q)*stderr );
	} else if ( alternative === 'greater' ) {
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
	out.alternative = alternative;
	out.alpha = alpha;
	out.pValue = pValue;
	out.statistic = stat;
	out.ci = WORKSPACE;
	out.nullValue = mu;
	out.sd = stderr;
	return out;
}


// EXPORTS //

module.exports = ztest;
