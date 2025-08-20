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
var ndarraylike2scalar = require( '@stdlib/ndarray/base/ndarraylike2scalar' );
var strided = require( './../../../../strided/ztest2' ).ndarray;


// MAIN //

/**
* Computes a two-sample Z-test for two one-dimensional ndarrays.
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
* @param {ArrayLikeObject<Object>} arrays - array-like object containing ndarrays
* @returns {ndarrayLike} output ndarray
*
* @example
* var Float64Results = require( '@stdlib/stats/base/ztest/two-sample/results/float64' );
* var resolveEnum = require( '@stdlib/stats/base/ztest/alternative-resolve-enum' );
* var structFactory = require( '@stdlib/array/struct-factory' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* var opts = {
*     'dtype': 'generic'
* };
*
* // Define one-dimensional input ndarrays:
* var xbuf = [ 4.0, 4.0, 6.0, 6.0, 5.0 ];
* var x = new ndarray( opts.dtype, xbuf, [ 5 ], [ 1 ], 0, 'row-major' );
*
* var ybuf = [ 3.0, 3.0, 5.0, 7.0, 7.0 ];
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
* var out = new ndarray( 'generic', new ResultsArray( 1 ), [], [ 0 ], 0, 'row-major' );
*
* // Perform a Z-test:
* var v = ztest2( [ x, y, out, alt, alpha, diff, sigmax, sigmay ] );
* // returns <ResultsArray>
*
* console.log( v.get().toString() );
*/
function ztest2( arrays ) {
	var sigmax;
	var sigmay;
	var alpha;
	var diff;
	var alt;
	var out;
	var x;
	var y;

	x = arrays[ 0 ];
	y = arrays[ 1 ];
	out = ndarraylike2scalar( arrays[ 2 ] );

	alt = ndarraylike2scalar( arrays[ 3 ] );
	alpha = ndarraylike2scalar( arrays[ 4 ] );
	diff = ndarraylike2scalar( arrays[ 5 ] );
	sigmax = ndarraylike2scalar( arrays[ 6 ] );
	sigmay = ndarraylike2scalar( arrays[ 7 ] );

	strided( numelDimension( x, 0 ), numelDimension( y, 0 ), alt, alpha, diff, sigmax, getData( x ), getStride( x, 0 ), getOffset( x ), sigmay, getData( y ), getStride( y, 0 ), getOffset( y ), out ); // eslint-disable-line max-len

	return arrays[ 2 ];
}


// EXPORTS //

module.exports = ztest2;
