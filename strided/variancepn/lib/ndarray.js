/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var gsumpw = require( '@stdlib/blas/ext/base/gsumpw' ).ndarray;
var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
var accessors = require( './accessors.js' );


// MAIN //

/**
* Computes the variance of a strided array using a two-pass algorithm.
*
* ## Method
*
* -   This implementation uses a two-pass approach, as suggested by Neely (1966).
*
* ## References
*
* -   Neely, Peter M. 1966. "Comparison of Several Algorithms for Computation of Means, Standard Deviations and Correlation Coefficients." _Communications of the ACM_ 9 (7). Association for Computing Machinery: 496–99. doi:[10.1145/365719.365958](https://doi.org/10.1145/365719.365958).
* -   Schubert, Erich, and Michael Gertz. 2018. "Numerically Stable Parallel Computation of (Co-)Variance." In _Proceedings of the 30th International Conference on Scientific and Statistical Database Management_. New York, NY, USA: Association for Computing Machinery. doi:[10.1145/3221269.3223036](https://doi.org/10.1145/3221269.3223036).
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} correction - degrees of freedom adjustment
* @param {NumericArray} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {number} variance
*
* @example
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ];
*
* var v = variancepn( 4, 1, x, 2, 1 );
* // returns 6.25
*/
function variancepn( N, correction, x, strideX, offsetX ) {
	var mu;
	var ix;
	var M2;
	var o;
	var M;
	var d;
	var n;
	var i;

	n = N - correction;
	if ( N <= 0 || n <= 0.0 ) {
		return NaN;
	}
	if ( N === 1 || strideX === 0 ) {
		return 0.0;
	}
	o = arraylike2object( x );
	if ( o.accessorProtocol ) {
		return accessors( N, correction, o, strideX, offsetX );
	}
	// Compute an estimate for the mean:
	mu = gsumpw( N, x, strideX, offsetX ) / N;

	// Compute the variance...
	ix = offsetX;
	M2 = 0.0;
	M = 0.0;
	for ( i = 0; i < N; i++ ) {
		d = x[ ix ] - mu;
		M2 += d * d;
		M += d;
		ix += strideX;
	}
	return (M2/n) - ((M/N)*(M/n));
}


// EXPORTS //

module.exports = variancepn;
