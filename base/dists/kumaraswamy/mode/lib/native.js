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
* Returns the mode of a Kumaraswamy's double bounded distribution.
*
* @private
* @param {PositiveNumber} a - first shape parameter
* @param {PositiveNumber} b - second shape parameter
* @returns {PositiveNumber} mode
*
* @example
* var v = mode( 1.5, 1.5 );
* // returns ~0.543
*
* @example
* var v = mode( 4.0, 12.0 );
* // returns ~0.503
*
* @example
* var v = mode( 12.0, 2.0 );
* // returns ~0.94
*
* @example
* var v = mode( 1.0, 1.0 );
* // returns NaN
*
* @example
* var v = mode( 1.5, -0.1 );
* // returns NaN
*
* @example
* var v = mode( -0.1, 1.5 );
* // returns NaN
*
* @example
* var v = mode( 2.0, NaN );
* // returns NaN
*
* @example
* var v = mode( NaN, 2.0 );
* // returns NaN
*/
function mode( a, b ) {
	return addon( a, b );
}


// EXPORTS //

module.exports = mode;
