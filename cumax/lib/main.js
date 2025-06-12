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

/* eslint-disable array-element-newline */

'use strict';

// MODULES //

var dtypes = require( '@stdlib/ndarray/dtypes' );
var gcumax = require( './../../base/ndarray/cumax' );
var dcumax = require( './../../base/ndarray/dcumax' );
var scumax = require( './../../base/ndarray/scumax' );
var factory = require( '@stdlib/ndarray/base/unary-strided1d-dispatch-factory' );


// VARIABLES //

var idtypes = dtypes( 'real_and_generic' );
var odtypes = dtypes( 'real_and_generic' );
var policies = {
	'output': 'same',
	'casting': 'none'
};
var table = {
	'types': [
		'float64', 'float64', // input, output
		'float32', 'float32'  // input, output
	],
	'fcns': [
		dcumax,
		scumax
	],
	'default': gcumax
};


// MAIN //

/**
* Computes the cumulative maximum value along one or more ndarray dimensions.
*
* @name cumax
* @type {Function}
* @param {ndarray} x - input ndarray
* @param {Options} [options] - function options
* @param {IntegerArray} [options.dims] - list of dimensions over which to perform a reduction
* @param {string} [options.dtype] - output ndarray data type
* @throws {TypeError} first argument must be an ndarray-like object
* @throws {TypeError} options argument must be an object
* @throws {RangeError} dimension indices must not exceed input ndarray bounds
* @throws {RangeError} number of dimension indices must not exceed the number of input ndarray dimensions
* @throws {Error} must provide valid options
* @returns {ndarray} output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* // Create a data buffer:
* var xbuf = new Float64Array( [ 1.0, 2.0, -3.0, 4.0, -5.0, 6.0 ] );
*
* // Define the shape of the input array:
* var sh = [ 3, 1, 2 ];
*
* // Define the array strides:
* var sx = [ 2, 2, 1 ];
*
* // Define the index offset:
* var ox = 0;
*
* // Create an input ndarray:
* var x = new ndarray( 'float64', xbuf, sh, sx, ox, 'row-major' );
*
* // Perform operation:
* var out = cumax( x );
* // returns <ndarray>
*
* var arr = ndarray2array( out );
* // returns [ [ [ 1.0, 2.0 ] ], [ [ 2.0, 4.0 ] ], [ [ 4.0, 6.0 ] ] ]
*/
var cumax = factory( table, [ idtypes ], odtypes, policies );


// EXPORTS //

module.exports = cumax;
