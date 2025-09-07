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

var numelDimension = require( '@stdlib/ndarray/base/numel-dimension' );
var getStride = require( '@stdlib/ndarray/base/stride' );
var getOffset = require( '@stdlib/ndarray/base/offset' );
var getData = require( '@stdlib/ndarray/base/data-buffer' );
var strided = require( './../../../../strided/snanmean' ).ndarray;


// MAIN //

/**
* Computes the arithmetic mean of a one-dimensional single-precision floating-point ndarray, ignoring `NaN` values.
*
* @param {ArrayLikeObject<Object>} arrays - array-like object containing an input ndarray
* @returns {number} arithmetic mean
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
*
* var xbuf = new Float32Array( [ 1.0, 3.0, NaN, 2.0 ] );
* var x = new ndarray( 'float32', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
*
* var v = snanmean( [ x ] );
* // returns 2.0
*/
function snanmean( arrays ) {
	var x = arrays[ 0 ];
	return strided( numelDimension( x, 0 ), getData( x ), getStride( x, 0 ), getOffset( x ) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = snanmean;
