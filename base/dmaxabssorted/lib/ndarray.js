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


// MAIN //

/**
* Computes the maximum absolute value of a sorted double-precision floating-point strided array.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - sorted input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {number} maximum absolute value
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 2.0, -3.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var v = dmaxabssorted( 4, x, 2, 1 );
* // returns 4.0
*/
function dmaxabssorted( N, x, strideX, offsetX ) {
	var v1;
	var v2;

	if ( N <= 0 ) {
		return NaN;
	}
	if ( N === 1 || strideX === 0 ) {
		return x[ 0 ];
	}
	v1 = x[ offsetX ];
	v2 = x[ offsetX + ( ( N - 1 ) * strideX ) ];
	if ( isnan( v1 ) || isnan( v2 ) ) {
		return NaN;
	}
	v1 = abs( v1 );
	v2 = abs( v2 );
	if ( v1 > v2 ) {
		return v1;
	}
	return v2;
}


// EXPORTS //

module.exports = dmaxabssorted;
