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
* Evaluates the cumulative distribution function (CDF) for an inverse gamma distribution.
*
* @private
* @param {number} x - input value
* @param {PositiveNumber} alpha - shape parameter
* @param {PositiveNumber} beta - scale parameter
* @returns {Probability} evaluated CDF
*
* @example
* var y = cdf( 2.0, 1.0, 1.0 );
* // returns ~0.607
*
* @example
* var y = cdf( 2.0, 3.0, 1.0 );
* // returns ~0.986
*
* @example
* var y = cdf( -1.0, 2.0, 2.0 );
* // returns 0.0
*
* @example
* var y = cdf( NaN, 1.0, 1.0 );
* // returns NaN
*
* @example
* var y = cdf( 0.0, NaN, 1.0 );
* // returns NaN
*/
function cdf( x, alpha, beta ) {
	return addon( x, alpha, beta );
}


// EXPORTS //

module.exports = cdf;
