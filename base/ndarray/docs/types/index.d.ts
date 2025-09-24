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

/* eslint-disable max-lines */

import covarmtk = require( './../../../../base/ndarray/covarmtk' );
import cumax = require( './../../../../base/ndarray/cumax' );
import cumin = require( './../../../../base/ndarray/cumin' );
import dcovarmtk = require( './../../../../base/ndarray/dcovarmtk' );
import dcumax = require( './../../../../base/ndarray/dcumax' );
import dcumin = require( './../../../../base/ndarray/dcumin' );
import dmax = require( './../../../../base/ndarray/dmax' );
import dmaxabs = require( './../../../../base/ndarray/dmaxabs' );
import dmaxsorted = require( './../../../../base/ndarray/dmaxsorted' );
import dmean = require( './../../../../base/ndarray/dmean' );
import dmin = require( './../../../../base/ndarray/dmin' );
import dminabs = require( './../../../../base/ndarray/dminabs' );
import dnanmax = require( './../../../../base/ndarray/dnanmax' );
import dnanmean = require( './../../../../base/ndarray/dnanmean' );
import dnanmin = require( './../../../../base/ndarray/dnanmin' );
import drange = require( './../../../../base/ndarray/drange' );
import dztest = require( './../../../../base/ndarray/dztest' );
import dztest2 = require( './../../../../base/ndarray/dztest2' );
import max = require( './../../../../base/ndarray/max' );
import maxBy = require( './../../../../base/ndarray/max-by' );
import maxabs = require( './../../../../base/ndarray/maxabs' );
import maxsorted = require( './../../../../base/ndarray/maxsorted' );
import mean = require( './../../../../base/ndarray/mean' );
import min = require( './../../../../base/ndarray/min' );
import minBy = require( './../../../../base/ndarray/min-by' );
import minabs = require( './../../../../base/ndarray/minabs' );
import nanmax = require( './../../../../base/ndarray/nanmax' );
import nanmean = require( './../../../../base/ndarray/nanmean' );
import nanmin = require( './../../../../base/ndarray/nanmin' );
import range = require( './../../../../base/ndarray/range' );
import scovarmtk = require( './../../../../base/ndarray/scovarmtk' );
import scumax = require( './../../../../base/ndarray/scumax' );
import scumin = require( './../../../../base/ndarray/scumin' );
import smax = require( './../../../../base/ndarray/smax' );
import smaxabs = require( './../../../../base/ndarray/smaxabs' );
import smaxsorted = require( './../../../../base/ndarray/smaxsorted' );
import smean = require( './../../../../base/ndarray/smean' );
import smin = require( './../../../../base/ndarray/smin' );
import sminabs = require( './../../../../base/ndarray/sminabs' );
import snanmax = require( './../../../../base/ndarray/snanmax' );
import snanmean = require( './../../../../base/ndarray/snanmean' );
import snanmin = require( './../../../../base/ndarray/snanmin' );
import srange = require( './../../../../base/ndarray/srange' );
import sztest = require( './../../../../base/ndarray/sztest' );
import sztest2 = require( './../../../../base/ndarray/sztest2' );
import ztest = require( './../../../../base/ndarray/ztest' );
import ztest2 = require( './../../../../base/ndarray/ztest2' );

/**
* Interface describing the `ndarray` namespace.
*/
interface Namespace {
	/**
	* Computes the covariance of two one-dimensional ndarrays provided known means and using a one-pass textbook algorithm.
	*
	* ## Notes
	*
	* -   The function expects the following ndarrays in order:
	*
	*     -   first one-dimensional input ndarray.
	*     -   second one-dimensional input ndarray.
	*     -   a zero-dimensional ndarray specifying the degrees of freedom adjustment. Setting this parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the covariance according to `N-c` where `c` corresponds to the provided degrees of freedom adjustment and `N` corresponds to the number of elements in each input ndarray. When computing the population covariance, setting this parameter to `0` is the standard choice (i.e., the provided arrays contain data constituting entire populations). When computing the unbiased sample covariance, setting this parameter to `1` is the standard choice (i.e., the provided arrays contain data sampled from larger populations; this is commonly referred to as Bessel's correction).
	*     -   a zero-dimensional ndarray specifying the mean of the first one-dimensional ndarray.
	*     -   a zero-dimensional ndarray specifying the mean of the second one-dimensional ndarray.
	*
	* @param arrays - array-like object containing input ndarrays
	* @returns covariance
	*
	* @example
	* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var opts = {
	*     'dtype': 'generic'
	* };
	*
	* var xbuf = [ 1.0, -2.0, 2.0 ];
	* var x = new ndarray( opts.dtype, xbuf, [ 3 ], [ 1 ], 0, 'row-major' );
	*
	* var ybuf = [ 2.0, -2.0, 1.0 ];
	* var y = new ndarray( opts.dtype, ybuf, [ 3 ], [ 1 ], 0, 'row-major' );
	*
	* var correction = scalar2ndarray( 1.0, opts );
	* var meanx = scalar2ndarray( 1.0/3.0, opts );
	* var meany = scalar2ndarray( 1.0/3.0, opts );
	*
	* var v = ns.covarmtk( [ x, y, correction, meanx, meany ] );
	* // returns ~3.8333
	*/
	covarmtk: typeof covarmtk;

	/**
	* Computes the cumulative maximum value of a one-dimensional ndarray.
	*
	* @param arrays - array-like object containing an input ndarray and an output ndarray
	* @returns output ndarray
	*
	* @example
	* var ndarray2array = require( '@stdlib/ndarray/to-array' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = [ 1.0, 3.0, 4.0, 2.0 ];
	* var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var ybuf = [ 0.0, 0.0, 0.0, 0.0 ];
	* var y = new ndarray( 'generic', ybuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.cumax( [ x, y ] );
	* // returns <ndarray>
	*
	* var bool = ( v === y );
	* // returns true
	*
	* var arr = ndarray2array( v );
	* // returns [ 1.0, 3.0, 4.0, 4.0 ]
	*/
	cumax: typeof cumax;

	/**
	* Computes the cumulative minimum value of a one-dimensional ndarray.
	*
	* @param arrays - array-like object containing an input ndarray and an output ndarray
	* @returns output ndarray
	*
	* @example
	* var ndarray2array = require( '@stdlib/ndarray/to-array' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = [ 1.0, 3.0, 4.0, 2.0 ];
	* var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var ybuf = [ 0.0, 0.0, 0.0, 0.0 ];
	* var y = new ndarray( 'generic', ybuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.cumin( [ x, y ] );
	* // returns <ndarray>
	*
	* var bool = ( v === y );
	* // returns true
	*
	* var arr = ndarray2array( v );
	* // returns [ 1.0, 1.0, 1.0, 1.0 ]
	*/
	cumin: typeof cumin;

	/**
	* Computes the covariance of two one-dimensional double-precision floating-point ndarrays provided known means and using a one-pass textbook algorithm.
	*
	* ## Notes
	*
	* -   The function expects the following ndarrays in order:
	*
	*     -   first one-dimensional input ndarray.
	*     -   second one-dimensional input ndarray.
	*     -   a zero-dimensional ndarray specifying the degrees of freedom adjustment. Setting this parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the covariance according to `N-c` where `c` corresponds to the provided degrees of freedom adjustment and `N` corresponds to the number of elements in each input ndarray. When computing the population covariance, setting this parameter to `0` is the standard choice (i.e., the provided arrays contain data constituting entire populations). When computing the unbiased sample covariance, setting this parameter to `1` is the standard choice (i.e., the provided arrays contain data sampled from larger populations; this is commonly referred to as Bessel's correction).
	*     -   a zero-dimensional ndarray specifying the mean of the first one-dimensional ndarray.
	*     -   a zero-dimensional ndarray specifying the mean of the second one-dimensional ndarray.
	*
	* @param arrays - array-like object containing input ndarrays
	* @returns covariance
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var opts = {
	*     'dtype': 'float64'
	* };
	*
	* var xbuf = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var x = new ndarray( opts.dtype, xbuf, [ 3 ], [ 1 ], 0, 'row-major' );
	*
	* var ybuf = new Float64Array( [ 2.0, -2.0, 1.0 ] );
	* var y = new ndarray( opts.dtype, ybuf, [ 3 ], [ 1 ], 0, 'row-major' );
	*
	* var correction = scalar2ndarray( 1.0, opts );
	* var meanx = scalar2ndarray( 1.0/3.0, opts );
	* var meany = scalar2ndarray( 1.0/3.0, opts );
	*
	* var v = ns.dcovarmtk( [ x, y, correction, meanx, meany ] );
	* // returns ~3.8333
	*/
	dcovarmtk: typeof dcovarmtk;

	/**
	* Computes the cumulative maximum value of a one-dimensional double-precision floating-point ndarray.
	*
	* @param arrays - array-like object containing an input ndarray and an output ndarray
	* @returns output ndarray
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var ndarray2array = require( '@stdlib/ndarray/to-array' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = new Float64Array( [ 1.0, 3.0, 4.0, 2.0 ] );
	* var x = new ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var ybuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	* var y = new ndarray( 'float64', ybuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.dcumax( [ x, y ] );
	* // returns <ndarray>
	*
	* var bool = ( v === y );
	* // returns true
	*
	* var arr = ndarray2array( v );
	* // returns [ 1.0, 3.0, 4.0, 4.0 ]
	*/
	dcumax: typeof dcumax;

	/**
	* Computes the cumulative minimum value of a one-dimensional double-precision floating-point ndarray.
	*
	* @param arrays - array-like object containing an input ndarray and an output ndarray
	* @returns output ndarray
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var ndarray2array = require( '@stdlib/ndarray/to-array' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = new Float64Array( [ 1.0, 3.0, 4.0, 2.0 ] );
	* var x = new ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var ybuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	* var y = new ndarray( 'float64', ybuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.dcumin( [ x, y ] );
	* // returns <ndarray>
	*
	* var bool = ( v === y );
	* // returns true
	*
	* var arr = ndarray2array( v );
	* // returns [ 1.0, 1.0, 1.0, 1.0 ]
	*/
	dcumin: typeof dcumin;

	/**
	* Computes the maximum value of a one-dimensional double-precision floating-point ndarray.
	*
	* @param arrays - array-like object containing an input ndarray
	* @returns maximum value
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = new Float64Array( [ 1.0, 3.0, 4.0, 2.0 ] );
	* var x = new ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.dmax( [ x ] );
	* // returns 4.0
	*/
	dmax: typeof dmax;

	/**
	* Computes the maximum absolute value of a one-dimensional double-precision floating-point ndarray.
	*
	* @param arrays - array-like object containing an input ndarray
	* @returns maximum absolute value
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = new Float64Array( [ -1.0, 3.0, -4.0, 2.0 ] );
	* var x = new ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.dmaxabs( [ x ] );
	* // returns 4.0
	*/
	dmaxabs: typeof dmaxabs;

	/**
	* Computes the maximum value of a sorted one-dimensional double-precision floating-point ndarray.
	*
	* @param arrays - array-like object containing an input ndarray
	* @returns maximum value
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	* var x = new ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.dmaxsorted( [ x ] );
	* // returns 4.0
	*/
	dmaxsorted: typeof dmaxsorted;

	/**
	* Computes the arithmetic mean of a one-dimensional double-precision floating-point ndarray.
	*
	* @param arrays - array-like object containing an input ndarray
	* @returns arithmetic mean
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = new Float64Array( [ 1.0, 3.0, 4.0, 2.0 ] );
	* var x = new ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.dmean( [ x ] );
	* // returns 2.5
	*/
	dmean: typeof dmean;

	/**
	* Computes the minimum value of a one-dimensional double-precision floating-point ndarray.
	*
	* @param arrays - array-like object containing an input ndarray
	* @returns minimum value
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = new Float64Array( [ 1.0, 3.0, 4.0, 2.0 ] );
	* var x = new ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.dmin( [ x ] );
	* // returns 1.0
	*/
	dmin: typeof dmin;

	/**
	* Computes the minimum absolute value of a one-dimensional double-precision floating-point ndarray.
	*
	* @param arrays - array-like object containing an input ndarray
	* @returns minimum absolute value
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = new Float64Array( [ -1.0, 3.0, -4.0, 2.0 ] );
	* var x = new ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.dminabs( [ x ] );
	* // returns 1.0
	*/
	dminabs: typeof dminabs;

	/**
	* Computes the maximum value of a one-dimensional double-precision floating-point ndarray, ignoring `NaN` values.
	*
	* @param arrays - array-like object containing an input ndarray
	* @returns maximum value
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	* var x = new ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.dnanmax( [ x ] );
	* // returns 2.0
	*/
	dnanmax: typeof dnanmax;

	/**
	* Computes the arithmetic mean of a one-dimensional double-precision floating-point ndarray, ignoring `NaN` values.
	*
	* @param arrays - array-like object containing an input ndarray
	* @returns arithmetic mean
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = new Float64Array( [ 1.0, 3.0, NaN, 2.0 ] );
	* var x = new ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.dnanmean( [ x ] );
	* // returns 2.0
	*/
	dnanmean: typeof dnanmean;

	/**
	* Computes the minimum value of a one-dimensional double-precision floating-point ndarray, ignoring `NaN` values.
	*
	* @param arrays - array-like object containing an input ndarray
	* @returns minimum value
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	* var x = new ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.dnanmin( [ x ] );
	* // returns -2.0
	*/
	dnanmin: typeof dnanmin;

	/**
	* Computes the range of a one-dimensional double-precision floating-point ndarray.
	*
	* @param arrays - array-like object containing an input ndarray
	* @returns range
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = new Float64Array( [ 1.0, 3.0, 4.0, 2.0 ] );
	* var x = new ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.drange( [ x ] );
	* // returns 3.0
	*/
	drange: typeof drange;

	/**
	* Computes a one-sample Z-test for a one-dimensional double-precision floating-point ndarray.
	*
	* ## Notes
	*
	* -   The function expects the following ndarrays in order:
	*
	*     -   a one-dimensional input ndarray.
	*     -   a zero-dimensional output ndarray containing a results object.
	*     -   a zero-dimensional ndarray specifying the alternative hypothesis.
	*     -   a zero-dimensional ndarray specifying the significance level.
	*     -   a zero-dimensional ndarray specifying the mean under the null hypothesis.
	*     -   a zero-dimensional ndarray specifying the known standard deviation.
	*
	* @param arrays - array-like object containing ndarrays
	* @returns output ndarray
	*
	* @example
	* var Float64Results = require( './../../../../base/ztest/one-sample/results/float64' );
	* var resolveEnum = require( './../../../../base/ztest/alternative-resolve-enum' );
	* var structFactory = require( '@stdlib/array/struct-factory' );
	* var Float64Array = require( '@stdlib/array/float64' );
	* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
	* var ndarray = require( '@stdlib/ndarray/ctor' );
	*
	* var opts = {
	*     'dtype': 'float64'
	* };
	*
	* // Define a one-dimensional input ndarray:
	* var xbuf = new Float64Array( [ 1.0, 3.0, 4.0, 2.0 ] );
	* var x = new ndarray( opts.dtype, xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* // Specify the alternative hypothesis:
	* var alt = scalar2ndarray( resolveEnum( 'two-sided' ), {
	*     'dtype': 'int8'
	* });
	*
	* // Specify the significance level:
	* var alpha = scalar2ndarray( 0.05, opts );
	*
	* // Specify the mean value under the null hypothesis:
	* var mu = scalar2ndarray( 0.0, opts );
	*
	* // Specify the known standard deviation:
	* var sigma = scalar2ndarray( 1.0, opts );
	*
	* // Create a zero-dimensional results ndarray:
	* var ResultsArray = structFactory( Float64Results );
	* var out = new ndarray( Float64Results, new ResultsArray( 1 ), [], [ 0 ], 0, 'row-major' );
	*
	* // Perform a Z-test:
	* var v = ns.dztest( [ x, out, alt, alpha, mu, sigma ] );
	* // returns <ResultsArray>
	*
	* console.log( v.get().toString() );
	*/
	dztest: typeof dztest;

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
	* var Float64Results = require( './../../../../base/ztest/two-sample/results/float64' );
	* var resolveEnum = require( './../../../../base/ztest/alternative-resolve-enum' );
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
	* var v = ns.dztest2( [ x, y, out, alt, alpha, diff, sigmax, sigmay ] );
	* // returns <ResultsArray>
	*
	* console.log( v.get().toString() );
	*/
	dztest2: typeof dztest2;

	/**
	* Computes the maximum value of a one-dimensional ndarray.
	*
	* @param arrays - array-like object containing an input ndarray
	* @returns maximum value
	*
	* @example
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = [ 1.0, 3.0, 4.0, 2.0 ];
	* var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.max( [ x ] );
	* // returns 4.0
	*/
	max: typeof max;

	/**
	* Computes the maximum value of a one-dimensional ndarray via a callback function.
	*
	* @param arrays - array-like object containing an input ndarray
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns maximum value
	*
	* @example
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* function clbk( value ) {
	*     return value * 2.0;
	* }
	*
	* var xbuf = [ 1.0, 3.0, 4.0, 2.0 ];
	* var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.maxBy( [ x ], clbk );
	* // returns 8.0
	*/
	maxBy: typeof maxBy;

	/**
	* Computes the maximum absolute value of a one-dimensional ndarray.
	*
	* @param arrays - array-like object containing an input ndarray
	* @returns maximum absolute value
	*
	* @example
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = [ -1.0, 3.0, -4.0, 2.0 ];
	* var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.maxabs( [ x ] );
	* // returns 4.0
	*/
	maxabs: typeof maxabs;

	/**
	* Computes the maximum value of a sorted one-dimensional ndarray.
	*
	* @param arrays - array-like object containing an input ndarray
	* @returns maximum value
	*
	* @example
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	* var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.maxsorted( [ x ] );
	* // returns 4.0
	*/
	maxsorted: typeof maxsorted;

	/**
	* Computes the arithmetic mean of a one-dimensional ndarray.
	*
	* @param arrays - array-like object containing an input ndarray
	* @returns arithmetic mean
	*
	* @example
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = [ 1.0, 3.0, 4.0, 2.0 ];
	* var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.mean( [ x ] );
	* // returns 2.5
	*/
	mean: typeof mean;

	/**
	* Computes the minimum value of a one-dimensional ndarray.
	*
	* @param arrays - array-like object containing an input ndarray
	* @returns minimum value
	*
	* @example
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = [ 1.0, 3.0, 4.0, 2.0 ];
	* var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.min( [ x ] );
	* // returns 1.0
	*/
	min: typeof min;

	/**
	* Computes the minimum value of a one-dimensional ndarray via a callback function.
	*
	* @param arrays - array-like object containing an input ndarray
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns minimum value
	*
	* @example
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* function clbk( value ) {
	*     return value * 2.0;
	* }
	*
	* var xbuf = [ 1.0, 3.0, 4.0, 2.0 ];
	* var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.minBy( [ x ], clbk );
	* // returns 2.0
	*/
	minBy: typeof minBy;

	/**
	* Computes the minimum absolute value of a one-dimensional ndarray.
	*
	* @param arrays - array-like object containing an input ndarray
	* @returns minimum absolute value
	*
	* @example
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = [ -1.0, 3.0, -4.0, 2.0 ];
	* var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.minabs( [ x ] );
	* // returns 1.0
	*/
	minabs: typeof minabs;

	/**
	* Computes the maximum value of a one-dimensional ndarray, ignoring `NaN` values.
	*
	* @param arrays - array-like object containing an input ndarray
	* @returns maximum value
	*
	* @example
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = [ 1.0, -2.0, NaN, 2.0 ];
	* var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.nanmax( [ x ] );
	* // returns 2.0
	*/
	nanmax: typeof nanmax;

	/**
	* Computes the arithmetic mean of a one-dimensional ndarray, ignoring `NaN` values.
	*
	* @param arrays - array-like object containing an input ndarray
	* @returns arithmetic mean
	*
	* @example
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = [ 1.0, 3.0, NaN, 2.0 ];
	* var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.nanmean( [ x ] );
	* // returns 2.0
	*/
	nanmean: typeof nanmean;

	/**
	* Computes the minimum value of a one-dimensional ndarray, ignoring `NaN` values.
	*
	* @param arrays - array-like object containing an input ndarray
	* @returns minimum value
	*
	* @example
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = [ 1.0, -2.0, NaN, 2.0 ];
	* var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.nanmin( [ x ] );
	* // returns -2.0
	*/
	nanmin: typeof nanmin;

	/**
	* Computes the range of a one-dimensional ndarray.
	*
	* @param arrays - array-like object containing an input ndarray
	* @returns range
	*
	* @example
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = [ 1.0, 3.0, 4.0, 2.0 ];
	* var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.range( [ x ] );
	* // returns 3.0
	*/
	range: typeof range;

	/**
	* Computes the covariance of two one-dimensional single-precision floating-point ndarrays provided known means and using a one-pass textbook algorithm.
	*
	* ## Notes
	*
	* -   The function expects the following ndarrays in order:
	*
	*     -   first one-dimensional input ndarray.
	*     -   second one-dimensional input ndarray.
	*     -   a zero-dimensional ndarray specifying the degrees of freedom adjustment. Setting this parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the covariance according to `N-c` where `c` corresponds to the provided degrees of freedom adjustment and `N` corresponds to the number of elements in each input ndarray. When computing the population covariance, setting this parameter to `0` is the standard choice (i.e., the provided arrays contain data constituting entire populations). When computing the unbiased sample covariance, setting this parameter to `1` is the standard choice (i.e., the provided arrays contain data sampled from larger populations; this is commonly referred to as Bessel's correction).
	*     -   a zero-dimensional ndarray specifying the mean of the first one-dimensional ndarray.
	*     -   a zero-dimensional ndarray specifying the mean of the second one-dimensional ndarray.
	*
	* @param arrays - array-like object containing input ndarrays
	* @returns covariance
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var opts = {
	*     'dtype': 'float32'
	* };
	*
	* var xbuf = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	* var x = new ndarray( opts.dtype, xbuf, [ 3 ], [ 1 ], 0, 'row-major' );
	*
	* var ybuf = new Float32Array( [ 2.0, -2.0, 1.0 ] );
	* var y = new ndarray( opts.dtype, ybuf, [ 3 ], [ 1 ], 0, 'row-major' );
	*
	* var correction = scalar2ndarray( 1.0, opts );
	* var meanx = scalar2ndarray( 1.0/3.0, opts );
	* var meany = scalar2ndarray( 1.0/3.0, opts );
	*
	* var v = ns.scovarmtk( [ x, y, correction, meanx, meany ] );
	* // returns ~3.8333
	*/
	scovarmtk: typeof scovarmtk;

	/**
	* Computes the cumulative maximum value of a one-dimensional single-precision floating-point ndarray.
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
	* var v = ns.scumax( [ x, y ] );
	* // returns <ndarray>
	*
	* var bool = ( v === y );
	* // returns true
	*
	* var arr = ndarray2array( v );
	* // returns [ 1.0, 3.0, 4.0, 4.0 ]
	*/
	scumax: typeof scumax;

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
	* var v = ns.scumin( [ x, y ] );
	* // returns <ndarray>
	*
	* var bool = ( v === y );
	* // returns true
	*
	* var arr = ndarray2array( v );
	* // returns [ 1.0, 1.0, 1.0, 1.0 ]
	*/
	scumin: typeof scumin;

	/**
	* Computes the maximum value of a one-dimensional single-precision floating-point ndarray.
	*
	* @param arrays - array-like object containing an input ndarray
	* @returns maximum value
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = new Float32Array( [ 1.0, 3.0, 4.0, 2.0 ] );
	* var x = new ndarray( 'float32', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.smax( [ x ] );
	* // returns 4.0
	*/
	smax: typeof smax;

	/**
	* Computes the maximum absolute value of a one-dimensional single-precision floating-point ndarray.
	*
	* @param arrays - array-like object containing an input ndarray
	* @returns maximum absolute value
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = new Float32Array( [ -1.0, 3.0, -4.0, 2.0 ] );
	* var x = new ndarray( 'float32', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.smaxabs( [ x ] );
	* // returns 4.0
	*/
	smaxabs: typeof smaxabs;

	/**
	* Computes the maximum value of a sorted one-dimensional single-precision floating-point ndarray.
	*
	* @param arrays - array-like object containing an input ndarray
	* @returns maximum value
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	* var x = new ndarray( 'float32', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.smaxsorted( [ x ] );
	* // returns 4.0
	*/
	smaxsorted: typeof smaxsorted;

	/**
	* Computes the arithmetic mean of a one-dimensional single-precision floating-point ndarray.
	*
	* @param arrays - array-like object containing an input ndarray
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = new Float32Array( [ 1.0, 3.0, 4.0, 2.0 ] );
	* var x = new ndarray( 'float32', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.smean( [ x ] );
	* // returns 2.5
	*/
	smean: typeof smean;

	/**
	* Computes the minimum value of a one-dimensional single-precision floating-point ndarray.
	*
	* @param arrays - array-like object containing an input ndarray
	* @returns minimum value
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = new Float32Array( [ 1.0, 3.0, 4.0, 2.0 ] );
	* var x = new ndarray( 'float32', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.smin( [ x ] );
	* // returns 1.0
	*/
	smin: typeof smin;

	/**
	* Computes the minimum absolute value of a one-dimensional single-precision floating-point ndarray.
	*
	* @param arrays - array-like object containing an input ndarray
	* @returns minimum absolute value
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = new Float32Array( [ -1.0, 3.0, -4.0, 2.0 ] );
	* var x = new ndarray( 'float32', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.sminabs( [ x ] );
	* // returns 1.0
	*/
	sminabs: typeof sminabs;

	/**
	* Computes the maximum value of a one-dimensional single-precision floating-point ndarray, ignoring `NaN` values.
	*
	* @param arrays - array-like object containing an input ndarray
	* @returns maximum value
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	* var x = new ndarray( 'float32', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.snanmax( [ x ] );
	* // returns 2.0
	*/
	snanmax: typeof snanmax;

	/**
	* Computes the arithmetic mean of a one-dimensional single-precision floating-point ndarray, ignoring `NaN` values.
	*
	* @param arrays - array-like object containing an input ndarray
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = new Float32Array( [ 1.0, 3.0, NaN, 2.0 ] );
	* var x = new ndarray( 'float32', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.snanmean( [ x ] );
	* // returns 2.0
	*/
	snanmean: typeof snanmean;

	/**
	* Computes the minimum value of a one-dimensional single-precision floating-point ndarray, ignoring `NaN` values.
	*
	* @param arrays - array-like object containing an input ndarray
	* @returns minimum value
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	* var x = new ndarray( 'float32', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.snanmin( [ x ] );
	* // returns -2.0
	*/
	snanmin: typeof snanmin;

	/**
	* Computes the range of a one-dimensional single-precision floating-point ndarray.
	*
	* @param arrays - array-like object containing an input ndarray
	* @returns range
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = new Float32Array( [ 1.0, 3.0, 4.0, 2.0 ] );
	* var x = new ndarray( 'float32', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.srange( [ x ] );
	* // returns 3.0
	*/
	srange: typeof srange;

	/**
	* Computes a one-sample Z-test for a one-dimensional single-precision floating-point ndarray.
	*
	* ## Notes
	*
	* -   The function expects the following ndarrays in order:
	*
	*     -   a one-dimensional input ndarray.
	*     -   a zero-dimensional output ndarray containing a results object.
	*     -   a zero-dimensional ndarray specifying the alternative hypothesis.
	*     -   a zero-dimensional ndarray specifying the significance level.
	*     -   a zero-dimensional ndarray specifying the mean under the null hypothesis.
	*     -   a zero-dimensional ndarray specifying the known standard deviation.
	*
	* @param arrays - array-like object containing ndarrays
	* @returns output ndarray
	*
	* @example
	* var Float32Results = require( './../../../../base/ztest/one-sample/results/float32' );
	* var resolveEnum = require( './../../../../base/ztest/alternative-resolve-enum' );
	* var structFactory = require( '@stdlib/array/struct-factory' );
	* var Float32Array = require( '@stdlib/array/float32' );
	* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
	* var ndarray = require( '@stdlib/ndarray/ctor' );
	*
	* var opts = {
	*     'dtype': 'float32'
	* };
	*
	* // Define a one-dimensional input ndarray:
	* var xbuf = new Float32Array( [ 1.0, 3.0, 4.0, 2.0 ] );
	* var x = new ndarray( opts.dtype, xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* // Specify the alternative hypothesis:
	* var alt = scalar2ndarray( resolveEnum( 'two-sided' ), {
	*     'dtype': 'int8'
	* });
	*
	* // Specify the significance level:
	* var alpha = scalar2ndarray( 0.05, opts );
	*
	* // Specify the mean value under the null hypothesis:
	* var mu = scalar2ndarray( 0.0, opts );
	*
	* // Specify the known standard deviation:
	* var sigma = scalar2ndarray( 1.0, opts );
	*
	* // Create a zero-dimensional results ndarray:
	* var ResultsArray = structFactory( Float32Results );
	* var out = new ndarray( Float32Results, new ResultsArray( 1 ), [], [ 0 ], 0, 'row-major' );
	*
	* // Perform a Z-test:
	* var v = ns.sztest( [ x, out, alt, alpha, mu, sigma ] );
	* // returns <ResultsArray>
	*
	* console.log( v.get().toString() );
	*/
	sztest: typeof sztest;

	/**
	* Computes a two-sample Z-test for two one-dimensional single-precision floating-point ndarrays.
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
	* var Float32Results = require( './../../../../base/ztest/two-sample/results/float32' );
	* var resolveEnum = require( './../../../../base/ztest/alternative-resolve-enum' );
	* var structFactory = require( '@stdlib/array/struct-factory' );
	* var Float32Array = require( '@stdlib/array/float32' );
	* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
	* var ndarray = require( '@stdlib/ndarray/ctor' );
	*
	* var opts = {
	*     'dtype': 'float32'
	* };
	*
	* // Define one-dimensional input ndarrays:
	* var xbuf = new Float32Array( [ 4.0, 4.0, 6.0, 6.0, 5.0 ] );
	* var x = new ndarray( opts.dtype, xbuf, [ 5 ], [ 1 ], 0, 'row-major' );
	*
	* var ybuf = new Float32Array( [ 3.0, 3.0, 5.0, 7.0, 7.0 ] );
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
	* var ResultsArray = structFactory( Float32Results );
	* var out = new ndarray( Float32Results, new ResultsArray( 1 ), [], [ 0 ], 0, 'row-major' );
	*
	* // Perform a Z-test:
	* var v = ns.sztest2( [ x, y, out, alt, alpha, diff, sigmax, sigmay ] );
	* // returns <ResultsArray>
	*
	* console.log( v.get().toString() );
	*/
	sztest2: typeof sztest2;

	/**
	* Computes a one-sample Z-test for a one-dimensional ndarray.
	*
	* ## Notes
	*
	* -   The function expects the following ndarrays in order:
	*
	*     -   a one-dimensional input ndarray.
	*     -   a zero-dimensional output ndarray containing a results object.
	*     -   a zero-dimensional ndarray specifying the alternative hypothesis.
	*     -   a zero-dimensional ndarray specifying the significance level.
	*     -   a zero-dimensional ndarray specifying the mean under the null hypothesis.
	*     -   a zero-dimensional ndarray specifying the known standard deviation.
	*
	* @param arrays - array-like object containing ndarrays
	* @returns output ndarray
	*
	* @example
	* var Float64Results = require( './../../../../base/ns.ztest/one-sample/results/float64' );
	* var resolveEnum = require( './../../../../base/ns.ztest/alternative-resolve-enum' );
	* var structFactory = require( '@stdlib/array/struct-factory' );
	* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
	* var ndarray = require( '@stdlib/ndarray/ctor' );
	*
	* var opts = {
	*     'dtype': 'generic'
	* };
	*
	* // Define a one-dimensional input ndarray:
	* var xbuf = [ 1.0, 3.0, 4.0, 2.0 ];
	* var x = new ndarray( opts.dtype, xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* // Specify the alternative hypothesis:
	* var alt = scalar2ndarray( resolveEnum( 'two-sided' ), {
	*     'dtype': 'int8'
	* });
	*
	* // Specify the significance level:
	* var alpha = scalar2ndarray( 0.05, opts );
	*
	* // Specify the mean value under the null hypothesis:
	* var mu = scalar2ndarray( 0.0, opts );
	*
	* // Specify the known standard deviation:
	* var sigma = scalar2ndarray( 1.0, opts );
	*
	* // Create a zero-dimensional results ndarray:
	* var ResultsArray = structFactory( Float64Results );
	* var out = new ndarray( Float64Results, new ResultsArray( 1 ), [], [ 0 ], 0, 'row-major' );
	*
	* // Perform a Z-test:
	* var v = ns.ztest( [ x, out, alt, alpha, mu, sigma ] );
	* // returns <ResultsArray>
	*
	* console.log( v.get().toString() );
	*/
	ztest: typeof ztest;

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
	* @param arrays - array-like object containing ndarrays
	* @returns output ndarray
	*
	* @example
	* var Float64Results = require( './../../../../base/ztest/two-sample/results/float64' );
	* var resolveEnum = require( './../../../../base/ztest/alternative-resolve-enum' );
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
	* var out = new ndarray( Float64Results, new ResultsArray( 1 ), [], [ 0 ], 0, 'row-major' );
	*
	* // Perform a Z-test:
	* var v = ns.ztest2( [ x, y, out, alt, alpha, diff, sigmax, sigmay ] );
	* // returns <ResultsArray>
	*
	* console.log( v.get().toString() );
	*/
	ztest2: typeof ztest2;
}

/**
* Base ndarray statistical functions.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
