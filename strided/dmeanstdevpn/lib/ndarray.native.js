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

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Computes the mean and standard deviation of a double-precision floating-point strided array using a two-pass algorithm.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} correction - degrees of freedom adjustment
* @param {Float64Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - `x` starting index
* @param {Float64Array} out - output array
* @param {integer} strideOut - `out` stride length
* @param {NonNegativeInteger} offsetOut - `out` starting index
* @returns {Float64Array} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
* var out = new Float64Array( 2 );
*
* var v = dmeanstdevpn( 4, 1, x, 2, 1, out, 1, 0 );
* // returns <Float64Array>[ 1.25, 2.5 ]
*/
function dmeanstdevpn( N, correction, x, strideX, offsetX, out, strideOut, offsetOut ) { // eslint-disable-line max-len
	addon.ndarray( N, correction, x, strideX, offsetX, out, strideOut, offsetOut ); // eslint-disable-line max-len
	return out;
}


// EXPORTS //

module.exports = dmeanstdevpn;
