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

var floor = require( '@stdlib/math/base/special/floor' );


// VARIABLES //

// Blocksize for pairwise summation (NOTE: decreasing the blocksize decreases rounding error as more pairs are summed, but also decreases performance. Because the inner loop is unrolled eight times, the blocksize is effectively `16`.):
var BLOCKSIZE = 128;


// MAIN //

/**
* Computes the sum of a strided array elements, ignoring `NaN` values and using pairwise summation.
*
* ## Method
*
* -   This implementation uses pairwise summation, which accrues rounding error `O(log2 N)` instead of `O(N)`. The recursion depth is also `O(log2 N)`.
*
* ## References
*
* -   Higham, Nicholas J. 1993. "The Accuracy of Floating Point Summation." _SIAM Journal on Scientific Computing_ 14 (4): 783–99. doi:[10.1137/0914050](https://doi.org/10.1137/0914050).
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {NumericArray} out - two-element output array whose first element is the accumulated sum and whose second element is the accumulated number of summed values
* @param {Object} x - input array
* @param {Collection} x.data - input array
* @param {Array<Function>} x.accessors - array element accessor
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {NumericArray} output array
*
* @example
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
*
* var x = toAccessorArray( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ] );
*
* var out = [ 0.0, 0 ];
* var v = nansumpw( 5, out, arraylike2object( x ), 2, 1 );
* // returns [ 5.0, 4 ]
*/
function nansumpw( N, out, x, strideX, offsetX ) {
	var xbuf;
	var xget;
	var ix;
	var s0;
	var s1;
	var s2;
	var s3;
	var s4;
	var s5;
	var s6;
	var s7;
	var M;
	var s;
	var n;
	var v;
	var i;

	// Cache references to array data:
	xbuf = x.data;

	// Cache references to element accessors:
	xget = x.accessors[ 0 ];

	ix = offsetX;
	if ( N < 8 ) {
		// Use simple summation...
		s = 0.0;
		n = 0;
		for ( i = 0; i < N; i++ ) {
			v = xget( xbuf, ix );
			if ( v === v ) {
				s += v;
				n += 1;
			}
			ix += strideX;
		}
		out[ 0 ] += s;
		out[ 1 ] += n;
		return out;
	}
	if ( N <= BLOCKSIZE ) {
		// Sum a block with 8 accumulators (by loop unrolling, we lower the effective blocksize to 16)...
		s0 = 0.0;
		s1 = 0.0;
		s2 = 0.0;
		s3 = 0.0;
		s4 = 0.0;
		s5 = 0.0;
		s6 = 0.0;
		s7 = 0.0;
		n = 0;

		M = N % 8;
		for ( i = 0; i < N-M; i += 8 ) {
			v = xget( xbuf, ix );
			if ( v === v ) {
				s0 += v;
				n += 1;
			}
			ix += strideX;
			v = xget( xbuf, ix );
			if ( v === v ) {
				s1 += v;
				n += 1;
			}
			ix += strideX;
			v = xget( xbuf, ix );
			if ( v === v ) {
				s2 += v;
				n += 1;
			}
			ix += strideX;
			v = xget( xbuf, ix );
			if ( v === v ) {
				s3 += v;
				n += 1;
			}
			ix += strideX;
			v = xget( xbuf, ix );
			if ( v === v ) {
				s4 += v;
				n += 1;
			}
			ix += strideX;
			v = xget( xbuf, ix );
			if ( v === v ) {
				s5 += v;
				n += 1;
			}
			ix += strideX;
			v = xget( xbuf, ix );
			if ( v === v ) {
				s6 += v;
				n += 1;
			}
			ix += strideX;
			v = xget( xbuf, ix );
			if ( v === v ) {
				s7 += v;
				n += 1;
			}
			ix += strideX;
		}
		// Pairwise sum the accumulators:
		s = ((s0+s1) + (s2+s3)) + ((s4+s5) + (s6+s7));

		// Clean-up loop...
		for ( i; i < N; i++ ) {
			v = xget( xbuf, ix );
			if ( v === v ) {
				s += v;
				n += 1;
			}
			ix += strideX;
		}
		out[ 0 ] += s;
		out[ 1 ] += n;
		return out;
	}
	// Recurse by dividing by two, but avoiding non-multiples of unroll factor...
	n = floor( N/2 );
	n -= n % 8;
	return nansumpw( n, out, x, strideX, ix ) + nansumpw( N-n, out, x, strideX, ix+(n*strideX) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = nansumpw;
