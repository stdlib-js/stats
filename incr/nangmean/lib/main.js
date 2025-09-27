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

var incrgmean = require( './../../../incr/gmean' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes a geometric mean, ignoring `NaN` values.
*
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrnangmean();
*
* var v = accumulator();
* // returns null
*
* v = accumulator( 2.0 );
* // returns 2.0
*
* v = accumulator( NaN );
* // returns 2.0
*
* v = accumulator( 5.0 );
* // returns ~3.16
*
* v = accumulator();
* // returns ~3.16
*/
function incrnangmean() {
	var gmean = incrgmean();
	return accumulator;

	/**
	* If provided a value, the accumulator function returns an updated geometric mean. If not provided a value, the accumulator function returns the current geometric mean.
	*
	* @private
	* @param {number} [x] - new value
	* @returns {(number|null)} geometric mean or null
	*/
	function accumulator( x ) {
		if ( arguments.length === 0 || isnan( x ) ) {
			return gmean();
		}
		return gmean( x );
	}
}


// EXPORTS //

module.exports = incrnangmean;
