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

var constantFunction = require( '@stdlib/utils/constant-function' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var expm1 = require( '@stdlib/math/base/special/expm1' );
var log1p = require( '@stdlib/math/base/special/log1p' );


// MAIN //

/**
* Returns a function for evaluating the quantile function for a Bradford distribution with shape parameter `c`.
*
* @param {PositiveNumber} c - shape parameter
* @returns {NonNegativeNumber} quantile function
*
* @example
* var quantile = factory( 5.0 );
* var y = quantile( 0.4 );
* // returns ~0.210
*
* y = quantile( 0.8 );
* // returns ~0.639
*
* y = quantile( 1.0 );
* // returns 1.0
*/
function factory( c ) {
	if (
		isnan( c ) ||
		c <= 0.0
	) {
		return constantFunction( NaN );
	}
	return quantile;

	/**
	* Evaluates the quantile function for a Bradford distribution.
	*
	* @private
	* @param {Probability} p - input value
	* @returns {number} evaluated quantile function
	*
	* @example
	* var y = quantile( 0.3 );
	* // returns <number>
	*/
	function quantile( p ) {
		if (
			isnan( p ) ||
			p < 0.0 ||
			p > 1.0
		) {
			return NaN;
		}
		return expm1( p * log1p( c ) ) / c;
	}
}


// EXPORTS //

module.exports = factory;
