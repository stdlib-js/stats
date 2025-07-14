/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Evaluates the probability density function (PDF) for a Rayleigh distribution with scale parameter `sigma` at a value `x`.
*
* @private
* @param {number} x - input value
* @param {NonNegativeNumber} sigma - scale parameter
* @returns {number} evaluated PDF
*
* @example
* var y = pdf( 0.3, 1.0 );
* // returns ~0.287
*
* @example
* var y = pdf( 2.0, 0.8 );
* // returns ~0.137
*
* @example
* var y = pdf( -1.0, 0.5 );
* // returns 0.0
*
* @example
* var y = pdf( 0.0, NaN );
* // returns NaN
*
* @example
* var y = pdf( NaN, 2.0 );
* // returns NaN
*
* @example
* // Negative scale parameter:
* var y = pdf( 2.0, -1.0 );
* // returns NaN
*/
function pdf( x, sigma ) {
	return addon( x, sigma );
}


// EXPORTS //

module.exports = pdf;
