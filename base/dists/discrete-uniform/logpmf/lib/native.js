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
* Evaluates the natural logarithm of the probability mass function (PMF) for a discrete uniform distribution with minimum support `a` and maximum support `b` at a value `x`.
*
* @private
* @param {number} x - input value
* @param {integer} a - minimum support
* @param {integer} b - maximum support
* @returns {number} evaluated logPMF
*
* @example
* var y = logpmf( 2.0, 0, 4 );
* // returns ~-1.609
*
* @example
* var y = logpmf( 5.0, 0, 4 );
* // returns -Infinity
*
* @example
* var y = logpmf( 2, 0, 8 );
* // returns ~-2.197
*
* @example
* var y = logpmf( NaN, 0.0, 1.0 );
* // returns NaN
*
* @example
* var y = logpmf( 2.0, 3.0, 1.0 );
* // returns NaN
*/
function logpmf( x, a, b ) {
	return addon( x, a, b );
}


// EXPORTS //

module.exports = logpmf;
