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
* Evaluates the logarithm of the probability mass function (PMF) for a geometric distribution with success probability `p` at a value `x`.
*
* @private
* @param {number} x - input value
* @param {Probability} p - success probability
* @returns {NonPositiveNumber} logarithm of PMF
*
* @example
* var y = logpmf( 4.0, 0.3 );
* // returns ~-2.631
*
* @example
* var y = logpmf( 2.0, 0.7 );
* // returns ~-2.765
*
* @example
* var y = logpmf( -1.0, 0.5 );
* // returns -Infinity
*
* @example
* var y = logpmf( 0.0, NaN );
* // returns NaN
*
* @example
* var y = logpmf( NaN, 0.5 );
* // returns NaN
*
* @example
* // Invalid success probability:
* var y = logpmf( 2.0, 1.5 );
* // returns NaN
*/
function logpmf( x, p ) {
	return addon( x, p );
}


// EXPORTS //

module.exports = logpmf;
