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
* Evaluates the logarithm of the cumulative distribution function (CDF) for a Lévy distribution with location parameter `mu` and scale parameter `c` at value `x`.
*
* @private
* @param {number} x - input value
* @param {number} mu - location parameter
* @param {PositiveNumber} c - scale parameter
* @returns {number} evaluated logCDF
*
* @example
* var y = logcdf( 2.0, 0.0, 1.0 );
* // returns ~-0.735
*
* @example
* var y = logcdf( 12.0, 10.0, 3.0 );
* // returns ~-1.51
*
* @example
* var y = logcdf( 9.0, 10.0, 3.0 );
* // returns -Infinity
*
* @example
* var y = logcdf( NaN, 0.0, 1.0 );
* // returns NaN
*
* @example
* var y = logcdf( 2, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = logcdf( 2.0, 0.0, NaN );
* // returns NaN
*
* @example
* // Negative scale parameter:
* var y = logcdf( 2.0, 0.0, -1.0 );
* // returns NaN
*/
function logcdf( x, mu, c ) {
	return addon( x, mu, c );
}


// EXPORTS //

module.exports = logcdf;
