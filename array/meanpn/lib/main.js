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
var strided = require( './../../../base/meanpn' ).ndarray;
var format = require( '@stdlib/string/format' );


// VARIABLES //

var IDTYPES = dtypes( 'real_and_generic' );
var GENERIC_DTYPE = 'generic';


// MAIN //

/**
* Computes the arithmetic mean of an array using a two-pass error correction algorithm.
*
* @param {NumericArray} x - input array
* @throws {TypeError} first argument must be an array-like object
* @throws {TypeError} first argument must have a supported data type
* @returns {number} arithmetic mean
*
* @example
* var x = [ 1.0, -2.0, 2.0 ];
*
* var v = meanpn( x );
* // returns ~0.3333
*/
function meanpn( x ) {
	var dt;
	if ( !isCollection( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an array-like object. Value: `%s`.', x ) );
	}
	dt = dtype( x ) || GENERIC_DTYPE;
	if ( !contains( IDTYPES, dt ) ) {
		throw new TypeError( format( 'invalid argument. First argument must have one of the following data types: "%s". Data type: `%s`.', join( IDTYPES, '", "' ), dt ) );
	}
	return strided( x.length, x, 1, 0 );
}


// EXPORTS //

module.exports = meanpn;
