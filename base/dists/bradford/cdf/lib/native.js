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
* Evaluates the cumulative distribution function (CDF) for a Bradford distribution with shape parameter `c` at a value `x`.
*
* @private
* @param {number} x - input value
* @param {PositiveNumber} c - shape parameter
* @returns {Probability} evaluated CDF
*
* @example
* var v = cdf( 0.1, 0.1 );
* // returns ~0.104
*
* @example
* var v = cdf( 0.5, 5.0 );
* // returns ~0.699
*
* @example
* var v = cdf( 1.0, 10.0 );
* // returns 1.0
*
* @example
* var v = cdf( -1.0, 0.5 );
* // returns 0.0
*
* @example
* var v = cdf( 2.0, 0.5 );
* // returns 1.0
*
* @example
* var v = cdf( 0.5, 0.0 );
* // returns NaN
*
* @example
* var v = cdf( 0.5, -5.0 );
* // returns NaN
*
* @example
* var v = cdf( NaN, 1.0 );
* // returns NaN
*
* @example
* var v = cdf( 1.0, NaN );
* // returns NaN
*/
function cdf( x, c ) {
	return addon( x, c );
}


// EXPORTS //

module.exports = cdf;
