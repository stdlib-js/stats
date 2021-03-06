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
var incrmsum = require( './../../../incr/msum' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes a moving sum of products.
*
* @param {PositiveInteger} W - window size
* @throws {TypeError} must provide a positive integer
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrmsumprod( 3 );
*
* var sum = accumulator();
* // returns null
*
* sum = accumulator( 2.0, 3.0 );
* // returns 6.0
*
* sum = accumulator( -5.0, 2.0 );
* // returns -4.0
*
* sum = accumulator( 3.0, -2.0 );
* // returns -10.0
*
* sum = accumulator( 5.0, 3.0 );
* // returns -1.0
*
* sum = accumulator();
* // returns -1.0
*/
function incrmsumprod( W ) {
	var sum;
	if ( !isPositiveInteger( W ) ) {
		throw new TypeError( format( 'invalid argument. Must provide a positive integer. Value: `%s`.', W ) );
	}
	sum = incrmsum( W );
	return accumulator;

	/**
	* If provided a value, the accumulator function returns an updated sum. If not provided a value, the accumulator function returns the current sum.
	*
	* @private
	* @param {number} [x] - input value
	* @param {number} [y] - input value
	* @returns {(number|null)} sum or null
	*/
	function accumulator( x, y ) {
		if ( arguments.length === 0 ) {
			return sum();
		}
		return sum( x*y );
	}
}


// EXPORTS //

module.exports = incrmsumprod;
