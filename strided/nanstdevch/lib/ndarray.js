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

var nanvariancech = require( './../../../strided/nanvariancech' ).ndarray;
var sqrt = require( '@stdlib/math/base/special/sqrt' );


// MAIN //

/**
* Computes the standard deviation of a strided array ignoring `NaN` values and using a one-pass trial mean algorithm.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} correction - degrees of freedom adjustment
* @param {NumericArray} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {number} standard deviation
*
* @example
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ];
*
* var v = nanstdevch( 5, 1, x, 2, 1 );
* // returns 2.5
*/
function nanstdevch( N, correction, x, strideX, offsetX ) {
	return sqrt( nanvariancech( N, correction, x, strideX, offsetX ) );
}


// EXPORTS //

module.exports = nanstdevch;
