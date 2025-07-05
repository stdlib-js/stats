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

var isCollection = require( '@stdlib/assert/is-collection' );
var isFunction = require( '@stdlib/assert/is-function' );
var strided = require( './../../../base/range-by' ).ndarray;
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Computes the range of an array via a callback function.
*
* @param {Collection} x - input array
* @param {Callback} clbk - callback
* @param {*} [thisArg] - execution context
* @throws {TypeError} first argument must be an array-like object
* @throws {TypeError} second argument must be a function
* @returns {number} range
*
* @example
* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
*
* function accessor( v ) {
*     return v * 2.0;
* }
*
* var v = rangeBy( x, accessor );
* // returns 18.0
*/
function rangeBy( x, clbk, thisArg ) {
	if ( !isCollection( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an array-like object. Value: `%s`.', x ) );
	}
	if ( !isFunction( clbk ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a function. Value: `%s`.', clbk ) );
	}
	return strided( x.length, x, 1, 0, wrapper );

	/**
	* Invokes a provided callback.
	*
	* @private
	* @param {*} value - current element
	* @param {NonNegativeInteger} aidx - current array index
	* @param {NonNegativeInteger} sidx - current strided index
	* @param {Collection} arr - input array
	* @returns {number} callback return value
	*/
	function wrapper( value, aidx, sidx, arr ) {
		return clbk.call( thisArg, value, aidx, arr );
	}
}


// EXPORTS //

module.exports = rangeBy;
