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
* Computes a two-sample Z-test for two double-precision floating-point strided arrays.
*
* @param {PositiveInteger} NX - number of indexed elements in `x`
* @param {PositiveInteger} NY - number of indexed elements in `y`
* @param {(integer|string)} alternative - alternative hypothesis
* @param {number} alpha - significance level
* @param {number} diff - difference in means under the null hypothesis
* @param {PositiveNumber} sigmax - known standard deviation of `x`
* @param {Float64Array} x - first input array
* @param {integer} strideX - stride length for `x`
* @param {PositiveNumber} sigmay - known standard deviation of `y`
* @param {Float64Array} y - second input array
* @param {integer} strideY - stride length for `y`
* @param {Object} out - output results object
* @returns {Object} results object
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var Results = require( '@stdlib/stats/base/ztest/two-sample/results/float64' );
*
* var x = new Float64Array( [ 4.0, 4.0, 6.0, 6.0, 5.0 ] );
* var y = new Float64Array( [ 3.0, 3.0, 5.0, 7.0, 7.0 ] );
*
* var results = new Results();
* var out = dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 2.0, y, 1, results );
* // returns {...}
*
* var bool = ( out === results );
* // returns true
*/
function dztest2( NX, NY, alternative, alpha, diff, sigmax, x, strideX, sigmay, y, strideY, out ) { // eslint-disable-line max-len, max-params
	return ndarray( NX, NY, alternative, alpha, diff, sigmax, x, strideX, stride2offset( NX, strideX ), sigmay, y, strideY, stride2offset( NY, strideY ), out ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = dztest2;
