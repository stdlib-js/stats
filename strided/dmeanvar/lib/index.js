/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Compute the mean and variance of a double-precision floating-point strided array.
*
* @module @stdlib/stats/strided/dmeanvar
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dmeanvar = require( '@stdlib/stats/strided/dmeanvar' );
*
* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
* var out = new Float64Array( 2 );
*
* var v = dmeanvar( x.length, 1, x, 1, out, 1 );
* // returns <Float64Array>[ ~0.3333, ~4.3333 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dmeanvar = require( '@stdlib/stats/strided/dmeanvar' );
*
* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
* var out = new Float64Array( 2 );
*
* var v = dmeanvar.ndarray( 4, 1, x, 2, 1, out, 1, 0 );
* // returns <Float64Array>[ 1.25, 6.25 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var dmeanvar;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	dmeanvar = main;
} else {
	dmeanvar = tmp;
}


// EXPORTS //

module.exports = dmeanvar;

// exports: { "ndarray": "dmeanvar.ndarray" }
