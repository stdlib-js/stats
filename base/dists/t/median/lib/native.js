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
* Returns the median for a Student's t-distribution with degrees of freedom `v`.
*
* @private
* @param {number} v - degrees of freedom
* @returns {number} median
*
* @example
* var y = median( 5.0 );
* // returns 0.0
*
* @example
* var y = median( 3.0 );
* // returns 0.0
*
* @example
* var y = median( NaN );
* // returns NaN
*
* @example
* var y = median( -1.0 );
* // returns NaN
*/
function median( v ) {
	return addon( v );
}


// EXPORTS //

module.exports = median;
