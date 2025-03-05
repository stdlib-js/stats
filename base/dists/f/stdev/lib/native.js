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
* Returns the standard deviation of an F distribution.
*
* @private
* @param {PositiveNumber} d1 - numerator degrees of freedom
* @param {PositiveNumber} d2 - denominator degrees of freedom
* @returns {PositiveNumber} standard deviation
*
* @example
* var v = stdev( 3.0, 5.0 );
* // returns ~3.333
*
* @example
* var v = stdev( 4.0, 12.0 );
* // returns ~1.122
*
* @example
* var v = stdev( 8.0, 5.0 );
* // returns ~2.764
*
* @example
* var v = stdev( 1.0, 4.0 );
* // returns NaN
*
* @example
* var v = stdev( 1.0, -0.1 );
* // returns NaN
*
* @example
* var v = stdev( -0.1, 1.0 );
* // returns NaN
*
* @example
* var v = stdev( 2.0, NaN );
* // returns NaN
*
* @example
* var v = stdev( NaN, 2.0 );
* // returns NaN
*/
function stdev( d1, d2 ) {
	return addon( d1, d2 );
}


// EXPORTS //

module.exports = stdev;
