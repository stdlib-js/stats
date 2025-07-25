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

/**
* Compute the covariance of two double-precision floating-point strided arrays provided known means and using a one-pass textbook algorithm.
*
* @module @stdlib/stats/strided/dcovarmtk
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dcovarmtk = require( '@stdlib/stats/strided/dcovarmtk' );
*
* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
*
* var v = dcovarmtk( x.length, 1, 1.0/3.0, x, 1, 1.0/3.0, x, 1 );
* // returns ~4.3333
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dcovarmtk = require( '@stdlib/stats/strided/dcovarmtk' );
*
* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var v = dcovarmtk.ndarray( 4, 1, 1.25, x, 2, 1, 1.25, x, 2, 1 );
* // returns 6.25
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var dcovarmtk;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	dcovarmtk = main;
} else {
	dcovarmtk = tmp;
}


// EXPORTS //

module.exports = dcovarmtk;

// exports: { "ndarray": "dcovarmtk.ndarray" }
