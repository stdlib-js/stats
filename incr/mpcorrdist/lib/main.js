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
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var incrmpcorr = require( './../../../incr/mpcorr' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes a moving sample Pearson product-moment correlation distance.
*
* ## Method
*
* -   The sample Pearson product-moment correlation distance is defined as
*
*     ```tex
*     d_{n} = 1 - r_{n} = 1 - \frac{\operatorname{cov}_n(x,y)}{\sigma_{x,n} \sigma_{y,n}}
*     ```
*
* -   The implementation thus computes the sample Pearson product-moment correlation coefficient \\(r_n\\) for each window \\(n\\) and subtracts the coefficient from 1.
*
* @param {PositiveInteger} W - window size
* @param {number} [meanx] - mean value
* @param {number} [meany] - mean value
* @throws {TypeError} first argument must be a positive integer
* @throws {TypeError} second argument must be a number
* @throws {TypeError} third argument must be a number
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrmpcorrdist( 3 );
*
* var d = accumulator();
* // returns null
*
* d = accumulator( 2.0, 1.0 );
* // returns 1.0
*
* d = accumulator( -5.0, 3.14 );
* // returns ~2.0
*
* d = accumulator( 3.0, -1.0 );
* // returns ~1.925
*
* d = accumulator( 5.0, -9.5 );
* // returns ~1.863
*
* d = accumulator();
* // returns ~1.863
*
* @example
* var accumulator = incrmpcorrdist( 3, -2.0, 10.0 );
*/
function incrmpcorrdist( W, meanx, meany ) {
	var pcorr;
	if ( !isPositiveInteger( W ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a positive integer. Value: `%s`.', W ) );
	}
	if ( arguments.length > 1 ) {
		if ( !isNumber( meanx ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must be a number. Value: `%s`.', meanx ) );
		}
		if ( !isNumber( meany ) ) {
			throw new TypeError( format( 'invalid argument. Third argument must be a number. Value: `%s`.', meany ) );
		}
		pcorr = incrmpcorr( W, meanx, meany );
	} else {
		pcorr = incrmpcorr( W );
	}
	return accumulator;

	/**
	* If provided a value, the accumulator function returns an updated sample correlation distance. If not provided a value, the accumulator function returns the current sample correlation distance.
	*
	* @private
	* @param {number} [x] - input value
	* @param {number} [y] - input value
	* @returns {(number|null)} sample correlation distance or null
	*/
	function accumulator( x, y ) {
		var r;
		if ( arguments.length === 0 ) {
			r = pcorr();
			if ( r === null ) {
				return r;
			}
			return 1.0 - r;
		}
		return 1.0 - pcorr( x, y );
	}
}


// EXPORTS //

module.exports = incrmpcorrdist;
