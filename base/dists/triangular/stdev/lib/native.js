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
* Returns the standard deviation of a triangular distribution.
*
* @private
* @param {number} a - minimum support
* @param {number} b - maximum support
* @param {number} c - mode
* @returns {PositiveNumber} standard deviation
*
* @example
* var v = stdev( 0.0, 1.0, 0.5 );
* // returns ~0.204
*
* @example
* var v = stdev( 4.0, 12.0, 9.0 );
* // returns ~1.65
*
* @example
* var v = stdev( -4.0, 4.0, -1.0 );
* // returns ~1.65
*
* @example
* var v = stdev( 1.0, -0.1, 0.5 );
* // returns NaN
*
* @example
* var v = stdev( 0.0, 1.0, 2.0 );
* // returns NaN
*
* @example
* var v = stdev( NaN, 4.0, 2.0 );
* // returns NaN
*
* @example
* var v = stdev( 0.0, NaN, 2.0 );
* // returns NaN
*
* @example
* var v = stdev( 0.0, 4.0, NaN );
* // returns NaN
*/
function stdev( a, b, c ) {
	return addon( a, b, c );
}


// EXPORTS //

module.exports = stdev;
