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
* Returns the excess kurtosis of a Planck distribution.
*
* @private
* @param {number} lambda - shape parameter
* @returns {number} excess kurtosis
*
* @example
* var v = kurtosis( 0.1 );
* // returns ~6.0100
*
* @example
* var v = kurtosis( 1.5 );
* // returns ~8.7048
*
* @example
* var v = kurtosis( NaN );
* // returns NaN
*
* @example
* var v = kurtosis( -1.1 );
* // returns NaN
*/
function kurtosis( lambda ) {
	return addon( lambda );
}


// EXPORTS //

module.exports = kurtosis;
