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
var isArrayLike = require( '@stdlib/assert/is-array-like-object' );
var incrmminmax = require( './../../../incr/mminmax' );
var abs = require( '@stdlib/math/base/special/abs' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes moving minimum and maximum absolute values.
*
* @param {Collection} [out] - output array
* @param {PositiveInteger} window - window size
* @throws {TypeError} output argument must be array-like
* @throws {TypeError} window size must be a positive integer
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrmminmaxabs( 3 );
*
* var mm = accumulator();
* // returns null
*
* mm = accumulator( 2.0 );
* // returns [ 2.0, 2.0 ]
*
* mm = accumulator( -5.0 );
* // returns [ 2.0, 5.0 ]
*
* mm = accumulator( 3.0 );
* // returns [ 2.0, 5.0 ]
*
* mm = accumulator( 5.0 );
* // returns [ 3.0, 5.0 ]
*
* mm = accumulator();
* // returns [ 3.0, 5.0 ]
*/
function incrmminmaxabs( out, window ) {
	var minmax;
	var o;
	var W;
	if ( arguments.length === 1 ) {
		o = [ 0.0, 0.0 ];
		W = out;
	} else {
		if ( !isArrayLike( out ) ) {
			throw new TypeError( format( 'invalid argument. Output argument must be an array-like object. Value: `%s`.', out ) );
		}
		o = out;
		W = window;
	}
	if ( !isPositiveInteger( W ) ) {
		throw new TypeError( format( 'invalid argument. Window size must be a positive integer. Value: `%s`.', W ) );
	}
	minmax = incrmminmax( o, W );
	return accumulator;

	/**
	* If provided a value, the accumulator function returns updated minimum and maximum absolute values. If not provided a value, the accumulator function returns the current minimum and maximum absolute values.
	*
	* @private
	* @param {number} [x] - input value
	* @returns {(ArrayLikeObject|null)} output array or null
	*/
	function accumulator( x ) {
		if ( arguments.length === 0 ) {
			return minmax();
		}
		return minmax( abs( x ) );
	}
}


// EXPORTS //

module.exports = incrmminmaxabs;
