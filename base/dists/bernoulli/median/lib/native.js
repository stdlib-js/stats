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
* Returns the median of a Bernoulli distribution.
*
* @private
* @param {Probability} p - success probability
* @returns {PositiveNumber} median
*
* @example
* var v = median( 0.1 );
* // returns 0.0
*
* @example
* var v = median( 0.8 );
* // returns 1.0
*
* @example
* var v = median( 1.1 );
* // returns NaN
*
* @example
* var v = median( NaN );
* // returns NaN
*/
function median( p ) {
	return addon( p );
}


// EXPORTS //

module.exports = median;
