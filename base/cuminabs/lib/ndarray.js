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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var abs = require( '@stdlib/math/base/special/abs' );
var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
var accessors = require( './accessors.js' );


// MAIN //

/**
* Computes the cumulative minimum absolute value of a strided array.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {NumericArray} x - input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {NumericArray} y - output array
* @param {integer} strideY - stride length for `y`
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @returns {NumericArray} output array
*
* @example
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* var v = cuminabs( 4, x, 2, 1, y, 1, 0 );
* // returns [ 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0 ]
*/
function cuminabs( N, x, strideX, offsetX, y, strideY, offsetY ) {
	var min;
	var ix;
	var iy;
	var ox;
	var oy;
	var v;
	var i;

	if ( N <= 0 ) {
		return y;
	}
	ox = arraylike2object( x );
	oy = arraylike2object( y );
	if ( ox.accessorProtocol || oy.accessorProtocol ) {
		accessors( N, ox, strideX, offsetX, oy, strideY, offsetY );
		return y;
	}
	ix = offsetX;
	iy = offsetY;

	min = abs( x[ ix ] );
	y[ iy ] = min;

	iy += strideY;
	i = 1;
	if ( isnan( min ) === false ) {
		for ( i; i < N; i++ ) {
			ix += strideX;
			v = abs( x[ ix ] );
			if ( isnan( v ) ) {
				min = v;
				break;
			}
			if ( v < min ) {
				min = v;
			}
			y[ iy ] = min;
			iy += strideY;
		}
	}
	if ( isnan( min ) ) {
		for ( i; i < N; i++ ) {
			y[ iy ] = min;
			iy += strideY;
		}
	}
	return y;
}


// EXPORTS //

module.exports = cuminabs;
