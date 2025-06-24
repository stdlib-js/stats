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
* Evaluates the probability density function (PDF) for a gamma distribution with shape parameter `alpha` and rate parameter `beta` at a value `x`.
*
* @param {number} x - input value
* @param {NonNegativeNumber} alpha - shape parameter
* @param {PositiveNumber} beta - rate parameter
* @returns {number} evaluated PDF
*
* @example
* var y = pdf( 2.0, 0.5, 1.0 );
* // returns ~0.054
*
* @example
* var y = pdf( 0.1, 1.0, 1.0 );
* // returns ~0.905
*
* @example
* var y = pdf( -1.0, 4.0, 2.0 );
* // returns 0.0
*
* @example
* var y = pdf( NaN, 0.6, 1.0 );
* // returns NaN
*
* @example
* var y = pdf( 0.0, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = pdf( 0.0, 1.0, NaN );
* // returns NaN
*
* @example
* // Negative shape parameter:
* var y = pdf( 2.0, -1.0, 1.0 );
* // returns NaN
*
* @example
* // Negative rate parameter:
* var y = pdf( 2.0, 1.0, -1.0 );
* // returns NaN
*/
function pdf( x, alpha, beta ) {
	return addon( x, alpha, beta );
}


// EXPORTS //

module.exports = pdf;
