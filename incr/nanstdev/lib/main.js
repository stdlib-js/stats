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
var incrstdev = require( './../../../incr/stdev' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes a corrected sample standard deviation, ignoring `NaN` values.
*
* @param {number} [mean] - mean value
* @throws {TypeError} must provide a number
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrnanstdev();
*
* var s = accumulator();
* // returns null
*
* s = accumulator( 2.0 );
* // returns 0.0
*
* s = accumulator( -5.0 );
* // returns ~4.95
*
* s = accumulator( NaN );
* // returns ~4.95
*
* s = accumulator();
* // returns ~4.95
*
* @example
* var accumulator = incrnanstdev( 3.0 );
*/
function incrnanstdev( mean ) {
	var stdev;
	if ( arguments.length ) {
		stdev = incrstdev( mean );
	} else {
		stdev = incrstdev();
	}
	return accumulator;

	/**
	* If provided a value, the accumulator function returns an updated corrected sample standard deviation. If not provided a value, the accumulator function returns the current corrected sample standard deviation.
	*
	* @private
	* @param {number} [x] - new value
	* @returns {(number|null)} corrected sample standard deviation or null
	*/
	function accumulator( x ) {
		if ( arguments.length === 0 || isnan( x ) ) {
			return stdev();
		}
		return stdev( x );
	}
}


// EXPORTS //

module.exports = incrnanstdev;
