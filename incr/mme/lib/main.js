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
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes a moving mean error.
*
* @param {PositiveInteger} W - window size
* @throws {TypeError} must provide a positive integer
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrmme( 3 );
*
* var m = accumulator();
* // returns null
*
* m = accumulator( 2.0, 3.0 );
* // returns 1.0
*
* m = accumulator( -5.0, 2.0 );
* // returns 4.0
*
* m = accumulator( 3.0, 2.0 );
* // returns ~2.33
*
* m = accumulator( 5.0, -2.0 );
* // returns ~-0.33
*
* m = accumulator();
* // returns ~-0.33
*/
function incrmme( W ) {
	var mean;
	if ( !isPositiveInteger( W ) ) {
		throw new TypeError( format( 'invalid argument. Must provide a positive integer. Value: `%s`.', W ) );
	}
	mean = incrmmean( W );
	return accumulator;

	/**
	* If provided input values, the accumulator function returns an updated mean error. If not provided input values, the accumulator function returns the current mean error.
	*
	* @private
	* @param {number} [x] - input value
	* @param {number} [y] - input value
	* @returns {(number|null)} mean error or null
	*/
	function accumulator( x, y ) {
		if ( arguments.length === 0 ) {
			return mean();
		}
		return mean( y-x );
	}
}


// EXPORTS //

module.exports = incrmme;
