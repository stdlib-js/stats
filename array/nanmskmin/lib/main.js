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
var dtypes = require( '@stdlib/array/dtypes' );
var dtype = require( '@stdlib/array/dtype' );
var contains = require( '@stdlib/array/base/assert/contains' );
var join = require( '@stdlib/array/base/join' );
var strided = require( './../../../base/nanmskmin' ).ndarray;
var format = require( '@stdlib/string/format' );


// VARIABLES //

var IDTYPES = dtypes( 'real_and_generic' );
var GENERIC_DTYPE = 'generic';


// MAIN //

/**
* Computes the minimum value of an array according to a mask, ignoring `NaN` values.
*
* @param {NumericArray} x - input array
* @param {NumericArray} mask - mask array
* @throws {TypeError} first argument must be an array-like object
* @throws {TypeError} first argument must have a supported data type
* @throws {TypeError} second argument must be an array-like object
* @throws {TypeError} second argument must have a supported data type
* @throws {RangeError} first and second arguments must have the same length
* @returns {number} minimum value
*
* @example
* var x = [ 1.0, -2.0, NaN, 2.0 ];
* var mask = [ 0, 1, 0, 0 ];
*
* var v = nanmskmin( x, mask );
* // returns 1.0
*/
function nanmskmin( x, mask ) {
	var dt;
	if ( !isCollection( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an array-like object. Value: `%s`.', x ) );
	}
	dt = dtype( x ) || GENERIC_DTYPE;
	if ( !contains( IDTYPES, dt ) ) {
		throw new TypeError( format( 'invalid argument. First argument must have one of the following data types: "%s". Data type: `%s`.', join( IDTYPES, '", "' ), dt ) );
	}
	if ( !isCollection( mask ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be an array-like object. Value: `%s`.', mask ) );
	}
	dt = dtype( mask ) || GENERIC_DTYPE;
	if ( !contains( IDTYPES, dt ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must have one of the following data types: "%s". Data type: `%s`.', join( IDTYPES, '", "' ), dt ) );
	}
	if ( x.length !== mask.length ) {
		throw new RangeError( format( 'invalid arguments. First and second arguments must have the same length.' ) );
	}
	return strided( x.length, x, 1, 0, mask, 1, 0 );
}


// EXPORTS //

module.exports = nanmskmin;
