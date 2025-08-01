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
* Computes the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using ordinary recursive summation with extended accumulation.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float32Array} x - input array
* @param {integer} strideX - stride length
* @returns {number} arithmetic mean
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
*
* var v = sdsnanmeanors( x.length, x, 1 );
* // returns ~0.3333
*/
function sdsnanmeanors( N, x, strideX ) {
	return addon( N, x, strideX );
}


// EXPORTS //

module.exports = sdsnanmeanors;
