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
* Evaluates the cumulative distribution function (CDF) for a triangular distribution with lower limit `a` and upper limit `b` and mode `c` at a value `x`.
*
* @private
* @param {number} x - input value
* @param {number} a - lower limit
* @param {number} b - upper limit
* @param {number} c - mode
* @returns {Probability} evaluated CDF
*
* @example
* var y = cdf( 0.5, -1.0, 1.0, 0.0 );
* // returns 0.875
*
* @example
* var y = cdf( 0.5, -1.0, 1.0, 0.5 );
* // returns 0.75
*
* @example
* var y = cdf( -10.0, -20.0, 0.0, -2.0 );
* // returns ~0.278
*
* @example
* var y = cdf( -2.0, -1.0, 1.0, 0.0 );
* // returns 0.0
*
* @example
* var y = cdf( NaN, 0.0, 1.0, 0.5 );
* // returns NaN
*
* @example
* var y = cdf( 0.0, NaN, 1.0, 0.5 );
* // returns NaN
*
* @example
* var y = cdf( 0.0, 0.0, NaN, 0.5 );
* // returns NaN
*
* @example
* var y = cdf( 2.0, 1.0, 0.0, NaN );
* // returns NaN
*
* @example
* var y = cdf( 2.0, 1.0, 0.0, 1.5 );
* // returns NaN
*/
function cdf( x, a, b, c ) {
	return addon( x, a, b, c );
}


// EXPORTS //

module.exports = cdf;
