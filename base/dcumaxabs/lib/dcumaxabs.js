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

var stride2offset = require( '@stdlib/strided/base/stride2offset' );
var ndarray = require( './ndarray.js' );


// MAIN //

/**
* Computes the cumulative maximum absolute value of double-precision floating-point strided array elements.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {Float64Array} y - output array
* @param {integer} strideY - `y` stride length
* @returns {Float64Array} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
* var y = new Float64Array( x.length );
* var N = x.length;
*
* var v = dcumaxabs( N, x, 1, y, 1 );
* // returns <Float64Array>[ 1.0, 2.0, 2.0 ]
*/
function dcumaxabs( N, x, strideX, y, strideY ) {
	var ox = stride2offset( N, strideX );
	var oy = stride2offset( N, strideY );
	return ndarray( N, x, strideX, ox, y, strideY, oy );
}


// EXPORTS //

module.exports = dcumaxabs;
