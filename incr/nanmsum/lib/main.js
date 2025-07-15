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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var incrmsum = require( './../../../incr/msum' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes a moving sum, ignoring `NaN` values.
*
* @param {PositiveInteger} W - window size
* @returns {Function} accumulator function
*
* @example
* var nanmsum = require( '@stdlib/stats/incr/nanmsum' );
*
* var accumulator = incrnanmsum( 3 );
*
* var sum = accumulator();
* // returns null
*
* sum = accumulator( 2.0 );
* // returns 2.0
*
* sum = accumulator( NaN );
* // returns 2.0
*
* sum = accumulator( -5.0 );
* // returns -3.0
*
* sum = accumulator( 3.0 );
* // returns 0.0
*
* sum = accumulator( 5.0 );
* // returns 3.0
*
* sum = accumulator();
* // returns 3.0
*/
function incrnanmsum( W ) {
	var sum = incrmsum( W );
	return accumulator;

	/**
	* If provided a value, the accumulator function returns an updated sum. If not provided a value, the accumulator function returns the current sum.
	*
	* @private
	* @param {number} [x] - input value
	* @returns {(number|null)} sum or null
	*/
	function accumulator( x ) {
		if ( arguments.length === 0 || isnan( x ) ) {
			return sum();
		}
		return sum( x );
	}
}


// EXPORTS //

module.exports = incrnanmsum;
