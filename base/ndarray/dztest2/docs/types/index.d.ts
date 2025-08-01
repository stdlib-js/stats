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

import { float64ndarray, ndarray } from '@stdlib/types/ndarray';

/**
* Computes a two-sample Z-test for two one-dimensional double-precision floating-point ndarrays.
*
* ## Notes
*
* -   The function expects the following ndarrays in order:
*
*     -   first one-dimensional input ndarray.
*     -   second one-dimensional input ndarray.
*     -   a zero-dimensional output ndarray containing a results object.
*     -   a zero-dimensional ndarray specifying the alternative hypothesis.
*     -   a zero-dimensional ndarray specifying the significance level.
*     -   a zero-dimensional ndarray specifying the difference in means under the null hypothesis.
*     -   a zero-dimensional ndarray specifying the known standard deviation of the first one-dimensional input ndarray.
*     -   a zero-dimensional ndarray specifying the known standard deviation of the second one-dimensional input ndarray.
*
* @param arrays - array-like object containing ndarrays
* @returns output ndarray
*
* @example
* var Float64Results = require( '@stdlib/stats/base/ztest/two-sample/results/float64' );
* var resolveEnum = require( '@stdlib/stats/base/ztest/alternative-resolve-enum' );
* var structFactory = require( '@stdlib/array/struct-factory' );
* var Float64Array = require( '@stdlib/array/float64' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* var opts = {
*     'dtype': 'float64'
* };
*
* // Define one-dimensional input ndarrays:
* var xbuf = new Float64Array( [ 4.0, 4.0, 6.0, 6.0, 5.0 ] );
* var x = new ndarray( opts.dtype, xbuf, [ 5 ], [ 1 ], 0, 'row-major' );
*
* var ybuf = new Float64Array( [ 3.0, 3.0, 5.0, 7.0, 7.0 ] );
* var y = new ndarray( opts.dtype, ybuf, [ 5 ], [ 1 ], 0, 'row-major' );
*
* // Specify the alternative hypothesis:
* var alt = scalar2ndarray( resolveEnum( 'two-sided' ), {
*     'dtype': 'int8'
* });
*
* // Specify the significance level:
* var alpha = scalar2ndarray( 0.05, opts );
*
* // Specify the difference in means under the null hypothesis:
* var diff = scalar2ndarray( 0.0, opts );
*
* // Specify the known standard deviations:
* var sigmax = scalar2ndarray( 1.0, opts );
* var sigmay = scalar2ndarray( 2.0, opts );
*
* // Create a zero-dimensional results ndarray:
* var ResultsArray = structFactory( Float64Results );
* var out = new ndarray( Float64Results, new ResultsArray( 1 ), [], [ 0 ], 0, 'row-major' );
*
* // Perform a Z-test:
* var v = dztest2( [ x, y, out, alt, alpha, diff, sigmax, sigmay ] );
* // returns <ResultsArray>
*
* console.log( v.get().toString() );
*/
declare function dztest2<T extends ndarray>( arrays: [ float64ndarray, float64ndarray, T, float64ndarray, float64ndarray, float64ndarray, float64ndarray, float64ndarray ] ): T;


// EXPORTS //

export = dztest2;
