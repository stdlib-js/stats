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
* Computes a two-sample Z-test using alternative indexing semantics.
*
* @param {PositiveInteger} NX - number of indexed elements in `x`
* @param {PositiveInteger} NY - number of indexed elements in `y`
* @param {(integer|string)} alternative - alternative hypothesis
* @param {number} alpha - significance level
* @param {number} diff - difference in means under the null hypothesis
* @param {PositiveNumber} sigmax - known standard deviation of `x`
* @param {Collection} x - first input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {PositiveNumber} sigmay - known standard deviation of `y`
* @param {Collection} y - second input array
* @param {integer} strideY - stride length for `y`
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @param {Object} out - output results object
* @returns {Object} results object
*
* @example
* var Results = require( '@stdlib/stats/base/ztest/two-sample/results/float64' );
*
* var x = [ 4.0, 4.0, 6.0, 6.0, 5.0 ];
* var y = [ 3.0, 3.0, 5.0, 7.0, 7.0 ];
*
* var results = new Results();
* var out = ztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 2.0, y, 1, 0, results );
* // returns {...}
*
* var bool = ( out === results );
* // returns true
*/
function ztest2( NX, NY, alternative, alpha, diff, sigmax, x, strideX, offsetX, sigmay, y, strideY, offsetY, out ) { // eslint-disable-line max-len, max-params
	var pValue;
	var stderr;
	var xmean;
	var ymean;
	var xvar;
	var yvar;
	var stat;
	var alt;
	var q;

	alt = resolveStr( alternative );
	if (
		NX <= 0 ||
		NY <= 0 ||
		isnan( alpha ) ||
		isnan( diff ) ||
		isnan( sigmax ) ||
		isnan( sigmay ) ||
		sigmax <= 0.0 ||
		sigmay <= 0.0 ||
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
		out.xmean = NaN;
		out.ymean = NaN;
		return out;
	}
	// Compute the standard error of the mean:
	xvar = sigmax * sigmax;
	yvar = sigmay * sigmay;
	stderr = sqrt( ( xvar / NX ) + ( yvar / NY ) );

	// Compute the arithmetic means of the input arrays:
	xmean = mean( NX, x, strideX, offsetX );
	ymean = mean( NY, y, strideY, offsetY );

	// Compute the test statistic (i.e., the z-score, which is the standardized difference between the sample means of x and y, adjusted by the hypothesized difference, in units of the standard error):
	stat = ( xmean - ymean - diff ) / stderr;

	// Compute the p-value and confidence interval...
	if ( alt === 'less' ) {
		pValue = normalCDF( stat );
		q = normalQuantile( 1.0 - alpha );
		WORKSPACE[ 0 ] = NINF;
		WORKSPACE[ 1 ] = diff + ( ( stat + q ) * stderr );
	} else if ( alt === 'greater' ) {
		pValue = 1.0 - normalCDF( stat );
		q = normalQuantile( 1.0 - alpha );
		WORKSPACE[ 0 ] = diff + ( ( stat - q ) * stderr );
		WORKSPACE[ 1 ] = PINF;
	} else { // alt == 'two-sided'
		pValue = 2.0 * normalCDF( -abs( stat ) );
		q = normalQuantile( 1.0 - ( alpha / 2.0 ) );
		WORKSPACE[ 0 ] = diff + ( ( stat - q ) * stderr );
		WORKSPACE[ 1 ] = diff + ( ( stat + q ) * stderr );
	}
	// Return test results:
	out.rejected = ( pValue <= alpha );
	out.alpha = alpha;
	out.pValue = pValue;
	out.statistic = stat;
	out.ci = WORKSPACE;
	out.alternative = alt;
	out.nullValue = diff;
	out.xmean = xmean;
	out.ymean = ymean;
	return out;
}


// EXPORTS //

module.exports = ztest2;
