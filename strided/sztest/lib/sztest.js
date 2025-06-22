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

var stride2offset = require( '@stdlib/strided/base/stride2offset' );
var ndarray = require( './ndarray.js' );


// MAIN //

/**
* Computes a one-sample Z-test for a single-precision floating-point strided array.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {string} alternative - alternative hypothesis
* @param {number} alpha - significance level
* @param {number} mu - mean under the null hypothesis
* @param {PositiveNumber} sigma - known standard deviation
* @param {Float32Array} x - input array
* @param {integer} strideX - stride length
* @param {Object} out - output results object
* @returns {Object} results object
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var Results = require( '@stdlib/stats/base/ztest/one-sample/results/float32' );
*
* var x = new Float32Array( [ 4.0, 4.0, 6.0, 6.0, 5.0 ] );
*
* var results = new Results();
* var out = sztest( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, results );
* // returns {...}
*
* var bool = ( out === results );
* // returns true
*/
function sztest( N, alternative, alpha, mu, sigma, x, strideX, out ) {
	return ndarray( N, alternative, alpha, mu, sigma, x, strideX, stride2offset( N, strideX ), out ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = sztest;
