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
* Evaluates the quantile function for a Rayleigh distribution with scale parameter `sigma` at a probability `p`.
*
* @private
* @param {Probability} p - input value
* @param {NonNegativeNumber} sigma - scale parameter
* @returns {number} evaluated quantile function
*
* @example
* var y = quantile( 0.8, 1.0 );
* // returns ~1.794
*
* @example
* var y = quantile( 0.5, 4.0 );
* // returns ~4.71
*
* @example
* var y = quantile( 1.1, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( -0.2, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( NaN, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( 0.0, NaN );
* // returns NaN
*
* @example
* // Negative scale parameter:
* var y = quantile( 0.5, -1.0 );
* // returns NaN
*/
function quantile( p, sigma ) {
	return addon( p, sigma );
}


// EXPORTS //

module.exports = quantile;
