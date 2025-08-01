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

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Computes the covariance of two single-precision floating-point strided arrays provided known means and using a one-pass textbook algorithm.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} correction - degrees of freedom adjustment
* @param {number} meanx - mean of `x`
* @param {Float32Array} x - first input array
* @param {integer} strideX - stride length of `x`
* @param {number} meany - mean of `y`
* @param {Float32Array} y - second input array
* @param {integer} strideY - stride length of `y`
* @returns {number} covariance
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
*
* var v = scovarmtk( x.length, 1, 1.0/3.0, x, 1, 1.0/3.0, x, 1 );
* // returns ~4.3333
*/
function scovarmtk( N, correction, meanx, x, strideX, meany, y, strideY ) {
	return addon( N, correction, meanx, x, strideX, meany, y, strideY );
}


// EXPORTS //

module.exports = scovarmtk;
