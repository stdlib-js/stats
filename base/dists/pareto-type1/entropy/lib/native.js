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
* Returns the differential entropy of a Pareto (Type I) distribution.
*
* @private
* @param {PositiveNumber} alpha - shape parameter
* @param {PositiveNumber} beta - scale parameter
* @returns {number} differential entropy
*
* @example
* var v = entropy( 1.0, 1.0 );
* // returns 2.0
*
* @example
* var v = entropy( 4.0, 12.0 );
* // returns ~2.349
*
* @example
* var v = entropy( 8.0, 2.0 );
* // returns ~-0.261
*
* @example
* var v = entropy( 1.0, -0.1 );
* // returns NaN
*
* @example
* var v = entropy( -0.1, 1.0 );
* // returns NaN
*
* @example
* var v = entropy( 2.0, NaN );
* // returns NaN
*
* @example
* var v = entropy( NaN, 2.0 );
* // returns NaN
*/
function entropy( alpha, beta ) {
	return addon( alpha, beta );
}


// EXPORTS //

module.exports = entropy;
