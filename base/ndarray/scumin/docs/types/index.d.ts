/*
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { float32ndarray } from '@stdlib/types/ndarray';

/**
* Computes the cumulative minimum value of a one-dimensional single-precision floating-point ndarray.
*
* @param arrays - array-like object containing an input ndarray and an output ndarray
* @returns output ndarray
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
*
* var xbuf = new Float32Array( [ 1.0, 3.0, 4.0, 2.0 ] );
* var x = new ndarray( 'float32', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
*
* var ybuf = new Float32Array( [ 0.0, 0.0, 0.0, 0.0 ] );
* var y = new ndarray( 'float32', ybuf, [ 4 ], [ 1 ], 0, 'row-major' );
*
* var v = scumin( [ x, y ] );
* // returns <ndarray>
*
* var bool = ( v === y );
* // returns true
*
* var arr = ndarray2array( v );
* // returns [ 1.0, 1.0, 1.0, 1.0 ]
*/
declare function scumin( arrays: [ float32ndarray, float32ndarray ] ): float32ndarray;


// EXPORTS //

export = scumin;
