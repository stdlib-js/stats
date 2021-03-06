/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var incrmmean = require( './../../../incr/mmean' );
var abs = require( '@stdlib/math/base/special/abs' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes a moving mean absolute percentage error.
*
* @param {PositiveInteger} W - window size
* @throws {TypeError} must provide a positive integer
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrmmape( 3 );
*
* var m = accumulator();
* // returns null
*
* m = accumulator( 2.0, 3.0 );
* // returns ~33.33
*
* m = accumulator( 5.0, 2.0 );
* // returns ~91.67
*
* m = accumulator( 3.0, 2.0 );
* // returns ~77.78
*
* m = accumulator( 2.0, 5.0 );
* // returns ~86.67
*
* m = accumulator();
* // returns ~86.67
*/
function incrmmape( W ) {
	var mean;
	if ( !isPositiveInteger( W ) ) {
		throw new TypeError( format( 'invalid argument. Must provide a positive integer. Value: `%s`.', W ) );
	}
	mean = incrmmean( W );
	return accumulator;

	/**
	* If provided input values, the accumulator function returns an updated mean absolute percentage error. If not provided input values, the accumulator function returns the current mean absolute percentage error.
	*
	* @private
	* @param {number} [f] - input value
	* @param {number} [a] - input value
	* @returns {(number|null)} mean absolute percentage error or null
	*/
	function accumulator( f, a ) {
		if ( arguments.length === 0 ) {
			return mean();
		}
		return mean( 100.0 * abs( (a-f)/a ) );
	}
}


// EXPORTS //

module.exports = incrmmape;
