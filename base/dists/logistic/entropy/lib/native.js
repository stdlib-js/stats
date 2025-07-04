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
* Returns the differential entropy for a logistic distribution with location `mu` and scale `s`.
*
* @private
* @param {number} mu - location parameter
* @param {PositiveNumber} s - scale parameter
* @returns {number} entropy
*
* @example
* var y = entropy( 0.0, 1.0 );
* // returns 2.0
*
* @example
* var y = entropy( 5.0, 2.0 );
* // returns ~2.693
*
* @example
* var y = entropy( NaN, 1.0 );
* // returns NaN
*
* @example
* var y = entropy( 0.0, NaN );
* // returns NaN
*
* @example
* var y = entropy( 0.0, 0.0 );
* // returns NaN
*/
function entropy( mu, s ) {
	return addon( mu, s );
}


// EXPORTS //

module.exports = entropy;
