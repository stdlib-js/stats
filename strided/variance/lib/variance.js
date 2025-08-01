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

var variancepn = require( './../../../strided/variancepn' );


// MAIN //

/**
* Computes the variance of a strided array.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} correction - degrees of freedom adjustment
* @param {NumericArray} x - input array
* @param {integer} strideX - stride length
* @returns {number} variance
*
* @example
* var x = [ 1.0, -2.0, 2.0 ];
*
* var v = variance( x.length, 1, x, 1 );
* // returns ~4.3333
*/
function variance( N, correction, x, strideX ) {
	return variancepn( N, correction, x, strideX );
}


// EXPORTS //

module.exports = variance;
