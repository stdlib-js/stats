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

var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var incrpcorr = require( './../../../incr/pcorr' );
var abs = require( '@stdlib/math/base/special/abs' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes a sample absolute Pearson product-moment correlation coefficient.
*
* @param {number} [meanx] - mean value
* @param {number} [meany] - mean value
* @throws {TypeError} first argument must be a number
* @throws {TypeError} second argument must be a number
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrapcorr();
*
* var ar = accumulator();
* // returns null
*
* ar = accumulator( 2.0, 1.0 );
* // returns 0.0
*
* ar = accumulator( -5.0, 3.14 );
* // returns ~1.0
*
* ar = accumulator();
* // returns ~1.0
*
* @example
* var accumulator = incrapcorr( 2.0, -3.0 );
*/
function incrapcorr( meanx, meany ) {
	var acc;
	var N;
	if ( arguments.length ) {
		if ( !isNumber( meanx ) ) {
			throw new TypeError( format( 'invalid argument. First argument must be a number. Value: `%s`.', meanx ) );
		}
		if ( !isNumber( meany ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must be a number. Value: `%s`.', meany ) );
		}
		acc = incrpcorr( meanx, meany );
	} else {
		acc = incrpcorr();
	}
	N = 0;
	return accumulator;

	/**
	* If provided input values, the accumulator function returns an updated sample correlation coefficient. If not provided input values, the accumulator function returns the current sample correlation coefficient.
	*
	* @private
	* @param {number} [x] - new value
	* @param {number} [y] - new value
	* @returns {(number|null)} sample absolute correlation coefficient or null
	*/
	function accumulator( x, y ) {
		if ( arguments.length === 0 ) {
			if ( N === 0 ) {
				return null;
			}
			return abs( acc() );
		}
		N += 1;
		return abs( acc( x, y ) );
	}
}


// EXPORTS //

module.exports = incrapcorr;
