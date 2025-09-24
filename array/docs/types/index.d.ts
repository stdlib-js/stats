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

import max = require( './../../../array/max' );
import maxBy = require( './../../../array/max-by' );
import maxabs = require( './../../../array/maxabs' );
import maxsorted = require( './../../../array/maxsorted' );
import mean = require( './../../../array/mean' );
import meankbn = require( './../../../array/meankbn' );
import meankbn2 = require( './../../../array/meankbn2' );
import meanors = require( './../../../array/meanors' );
import meanpn = require( './../../../array/meanpn' );
import meanpw = require( './../../../array/meanpw' );
import meanwd = require( './../../../array/meanwd' );
import mediansorted = require( './../../../array/mediansorted' );
import min = require( './../../../array/min' );
import minBy = require( './../../../array/min-by' );
import minabs = require( './../../../array/minabs' );
import minsorted = require( './../../../array/minsorted' );
import mskmax = require( './../../../array/mskmax' );
import mskmin = require( './../../../array/mskmin' );
import mskrange = require( './../../../array/mskrange' );
import nanmax = require( './../../../array/nanmax' );
import nanmaxBy = require( './../../../array/nanmax-by' );
import nanmaxabs = require( './../../../array/nanmaxabs' );
import nanmean = require( './../../../array/nanmean' );
import nanmeanors = require( './../../../array/nanmeanors' );
import nanmeanpn = require( './../../../array/nanmeanpn' );
import nanmeanwd = require( './../../../array/nanmeanwd' );
import nanmin = require( './../../../array/nanmin' );
import nanminBy = require( './../../../array/nanmin-by' );
import nanminabs = require( './../../../array/nanminabs' );
import nanmskmax = require( './../../../array/nanmskmax' );
import nanmskmin = require( './../../../array/nanmskmin' );
import nanmskrange = require( './../../../array/nanmskrange' );
import nanrange = require( './../../../array/nanrange' );
import nanrangeBy = require( './../../../array/nanrange-by' );
import nanstdev = require( './../../../array/nanstdev' );
import nanstdevch = require( './../../../array/nanstdevch' );
import nanstdevpn = require( './../../../array/nanstdevpn' );
import nanstdevtk = require( './../../../array/nanstdevtk' );
import nanstdevwd = require( './../../../array/nanstdevwd' );
import nanstdevyc = require( './../../../array/nanstdevyc' );
import nanvariance = require( './../../../array/nanvariance' );
import nanvariancech = require( './../../../array/nanvariancech' );
import nanvariancepn = require( './../../../array/nanvariancepn' );
import nanvariancetk = require( './../../../array/nanvariancetk' );
import nanvariancewd = require( './../../../array/nanvariancewd' );
import nanvarianceyc = require( './../../../array/nanvarianceyc' );
import range = require( './../../../array/range' );
import rangeBy = require( './../../../array/range-by' );
import stdev = require( './../../../array/stdev' );
import stdevch = require( './../../../array/stdevch' );
import stdevpn = require( './../../../array/stdevpn' );
import stdevtk = require( './../../../array/stdevtk' );
import stdevwd = require( './../../../array/stdevwd' );
import stdevyc = require( './../../../array/stdevyc' );
import variance = require( './../../../array/variance' );
import variancech = require( './../../../array/variancech' );
import variancepn = require( './../../../array/variancepn' );
import variancetk = require( './../../../array/variancetk' );
import variancewd = require( './../../../array/variancewd' );
import varianceyc = require( './../../../array/varianceyc' );

/**
* Interface describing the `array` namespace.
*/
interface Namespace {
	/**
	* Computes the maximum value of an array.
	*
	* @param x - input array
	* @returns maximum value
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.max( x );
	* // returns 2.0
	*/
	max: typeof max;

	/**
	* Computes the maximum value of an array via a callback function.
	*
	* @param x - input array
	* @param clbk - callback
	* @param thisArg - execution context
	* @returns maximum value
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var v = ns.maxBy( x, accessor );
	* // returns 8.0
	*/
	maxBy: typeof maxBy;

	/**
	* Computes the maximum absolute value of an array.
	*
	* @param x - input array
	* @returns maximum absolute value
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.maxabs( x );
	* // returns 2.0
	*/
	maxabs: typeof maxabs;

	/**
	* Computes the maximum value of a sorted array.
	*
	* @param x - input array
	* @returns maximum value
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0 ];
	*
	* var v = ns.maxsorted( x );
	* // returns 3.0
	*/
	maxsorted: typeof maxsorted;

	/**
	* Computes the arithmetic mean of an array.
	*
	* @param x - input array
	* @returns arithmetic mean
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.mean( x );
	* // returns ~0.3333
	*/
	mean: typeof mean;

	/**
	* Computes the arithmetic mean of an array using an improved Kahan–Babuška algorithm.
	*
	* @param x - input array
	* @returns arithmetic mean
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.meankbn( x );
	* // returns ~0.3333
	*/
	meankbn: typeof meankbn;

	/**
	* Computes the arithmetic mean of an array using a second-order iterative Kahan–Babuška algorithm.
	*
	* @param x - input array
	* @returns arithmetic mean
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.meankbn2( x );
	* // returns ~0.3333
	*/
	meankbn2: typeof meankbn2;

	/**
	* Computes the arithmetic mean of an array using ordinary recursive summation.
	*
	* @param x - input array
	* @returns arithmetic mean
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.meanors( x );
	* // returns ~0.3333
	*/
	meanors: typeof meanors;

	/**
	* Computes the arithmetic mean of an array using a two-pass error correction algorithm.
	*
	* @param x - input array
	* @returns arithmetic mean
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.meanpn( x );
	* // returns ~0.3333
	*/
	meanpn: typeof meanpn;

	/**
	* Computes the arithmetic mean of an array using pairwise summation.
	*
	* @param x - input array
	* @returns arithmetic mean
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.meanpw( x );
	* // returns ~0.3333
	*/
	meanpw: typeof meanpw;

	/**
	* Computes the arithmetic mean of an array using Welford's algorithm.
	*
	* @param x - input array
	* @returns arithmetic mean
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.meanwd( x );
	* // returns ~0.3333
	*/
	meanwd: typeof meanwd;

	/**
	* Computes the median value of a sorted array.
	*
	* @param x - input array
	* @returns median value
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0 ];
	*
	* var v = ns.mediansorted( x );
	* // returns 2.0
	*/
	mediansorted: typeof mediansorted;

	/**
	* Computes the minimum value of an array.
	*
	* @param x - input array
	* @returns minimum value
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.min( x );
	* // returns -2.0
	*/
	min: typeof min;

	/**
	* Computes the minimum value of an array via a callback function.
	*
	* @param x - input array
	* @param clbk - callback
	* @param thisArg - execution context
	* @returns minimum value
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var v = ns.minBy( x, accessor );
	* // returns -10.0
	*/
	minBy: typeof minBy;

	/**
	* Computes the minimum absolute value of an array.
	*
	* @param x - input array
	* @returns minimum absolute value
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.minabs( x );
	* // returns 1.0
	*/
	minabs: typeof minabs;

	/**
	* Computes the minimum value of a sorted array.
	*
	* @param x - input array
	* @returns minimum value
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0 ];
	*
	* var v = ns.minsorted( x );
	* // returns 1.0
	*/
	minsorted: typeof minsorted;

	/**
	* Computes the maximum value of an array according to a mask.
	*
	* @param x - input array
	* @param mask - mask array
	* @returns maximum value
	*
	* @example
	* var x = [ 1.0, -2.0, 4.0, 2.0 ];
	* var mask = [ 0, 0, 1, 0 ];
	*
	* var v = ns.mskmax( x, mask );
	* // returns 2.0
	*/
	mskmax: typeof mskmax;

	/**
	* Computes the minimum value of an array according to a mask.
	*
	* @param x - input array
	* @param mask - mask array
	* @returns minimum value
	*
	* @example
	* var x = [ 1.0, -2.0, -4.0, 2.0 ];
	* var mask = [ 0, 0, 1, 0 ];
	*
	* var v = ns.mskmin( x, mask );
	* // returns -2.0
	*/
	mskmin: typeof mskmin;

	/**
	* Computes the range of an array according to a mask.
	*
	* @param x - input array
	* @param mask - mask array
	* @returns range
	*
	* @example
	* var x = [ 1.0, -2.0, 4.0, 2.0 ];
	* var mask = [ 0, 0, 1, 0 ];
	*
	* var v = ns.mskrange( x, mask );
	* // returns 4.0
	*/
	mskrange: typeof mskrange;

	/**
	* Computes the maximum value of an array, ignoring `NaN` values.
	*
	* @param x - input array
	* @returns maximum value
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanmax( x );
	* // returns 2.0
	*/
	nanmax: typeof nanmax;

	/**
	* Computes the maximum value of an array via a callback function, ignoring `NaN` values.
	*
	* @param x - input array
	* @param clbk - callback
	* @param thisArg - execution context
	* @returns maximum value
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, NaN, 0.0, -1.0, -3.0 ];
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var v = ns.nanmaxBy( x, accessor );
	* // returns 8.0
	*/
	nanmaxBy: typeof nanmaxBy;

	/**
	* Computes the maximum absolute value of an array, ignoring `NaN` values.
	*
	* @param x - input array
	* @returns maximum absolute value
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanmaxabs( x );
	* // returns 2.0
	*/
	nanmaxabs: typeof nanmaxabs;

	/**
	* Computes the arithmetic mean of an array, ignoring `NaN` values.
	*
	* @param x - input array
	* @returns arithmetic mean
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanmean( x );
	* // returns ~0.3333
	*/
	nanmean: typeof nanmean;

	/**
	* Computes the arithmetic mean of an array, ignoring `NaN` values and using ordinary recursive summation.
	*
	* @param x - input array
	* @returns arithmetic mean
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanmeanors( x );
	* // returns ~0.3333
	*/
	nanmeanors: typeof nanmeanors;

	/**
	* Computes the arithmetic mean of an array, ignoring `NaN` values and using a two-pass error correction algorithm.
	*
	* @param x - input array
	* @returns arithmetic mean
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanmeanpn( x );
	* // returns ~0.3333
	*/
	nanmeanpn: typeof nanmeanpn;

	/**
	* Computes the arithmetic mean of an array, ignoring `NaN` values and using Welford's algorithm.
	*
	* @param x - input array
	* @returns arithmetic mean
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanmeanwd( x );
	* // returns ~0.3333
	*/
	nanmeanwd: typeof nanmeanwd;

	/**
	* Computes the minimum value of an array, ignoring `NaN` values.
	*
	* @param x - input array
	* @returns minimum value
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanmin( x );
	* // returns -2.0
	*/
	nanmin: typeof nanmin;

	/**
	* Computes the minimum value of an array via a callback function, ignoring `NaN` values.
	*
	* @param x - input array
	* @param clbk - callback
	* @param thisArg - execution context
	* @returns minimum value
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, NaN, 0.0, -1.0, -3.0 ];
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var v = ns.nanminBy( x, accessor );
	* // returns -10.0
	*/
	nanminBy: typeof nanminBy;

	/**
	* Computes the minimum absolute value of an array, ignoring `NaN` values.
	*
	* @param x - input array
	* @returns minimum absolute value
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanminabs( x );
	* // returns 1.0
	*/
	nanminabs: typeof nanminabs;

	/**
	* Computes the maximum value of an array according to a mask, ignoring `NaN` values.
	*
	* @param x - input array
	* @param mask - mask array
	* @returns maximum value
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	* var mask = [ 0, 1, 0, 0 ];
	*
	* var v = ns.nanmskmax( x, mask );
	* // returns 2.0
	*/
	nanmskmax: typeof nanmskmax;

	/**
	* Computes the minimum value of an array according to a mask, ignoring `NaN` values.
	*
	* @param x - input array
	* @param mask - mask array
	* @returns minimum value
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	* var mask = [ 0, 1, 0, 0 ];
	*
	* var v = ns.nanmskmin( x, mask );
	* // returns 1.0
	*/
	nanmskmin: typeof nanmskmin;

	/**
	* Computes the range of an array according to a mask, ignoring `NaN` values.
	*
	* @param x - input array
	* @param mask - mask array
	* @returns range
	*
	* @example
	* var x = [ 1.0, -2.0, 4.0, 2.0, NaN, NaN ];
	* var mask = [ 0, 0, 1, 0, 0, 0 ];
	*
	* var v = ns.nanmskrange( x, mask );
	* // returns 4.0
	*/
	nanmskrange: typeof nanmskrange;

	/**
	* Computes the range of an array, ignoring `NaN` values.
	*
	* @param x - input array
	* @returns range
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanrange( x );
	* // returns 4.0
	*/
	nanrange: typeof nanrange;

	/**
	* Computes the range of an array via a callback function, ignoring `NaN` values.
	*
	* @param x - input array
	* @param clbk - callback
	* @param thisArg - execution context
	* @returns range
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, NaN, 0.0, -1.0, -3.0 ];
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var v = ns.nanrangeBy( x, accessor );
	* // returns 18.0
	*/
	nanrangeBy: typeof nanrangeBy;

	/**
	* Computes the standard deviation of an array ignoring `NaN` values.
	*
	* ## Notes
	*
	* -   Setting the correction parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the standard deviation according to `N-c` where `N` corresponds to the number of non-`NaN` array elements and `c` corresponds to the provided degrees of freedom adjustment. When computing the standard deviation of a population, setting the correction parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the corrected sample standard deviation, setting the correction parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
	*
	* @param x - input array
	* @param correction - degrees of freedom adjustment (default: 1.0)
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanstdev( x, 1.0 );
	* // returns ~2.0817
	*/
	nanstdev: typeof nanstdev;

	/**
	* Computes the standard deviation of an array ignoring `NaN` values and using a one-pass trial mean algorithm.
	*
	* ## Notes
	*
	* -   Setting the correction parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the standard deviation according to `N-c` where `N` corresponds to the number of non-`NaN` array elements and `c` corresponds to the provided degrees of freedom adjustment. When computing the standard deviation of a population, setting the correction parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the corrected sample standard deviation, setting the correction parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
	*
	* @param x - input array
	* @param correction - degrees of freedom adjustment (default: 1.0)
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanstdevch( x, 1.0 );
	* // returns ~2.0817
	*/
	nanstdevch: typeof nanstdevch;

	/**
	* Computes the standard deviation of an array ignoring `NaN` values and using a two-pass algorithm.
	*
	* ## Notes
	*
	* -   Setting the correction parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the standard deviation according to `N-c` where `N` corresponds to the number of non-`NaN` array elements and `c` corresponds to the provided degrees of freedom adjustment. When computing the standard deviation of a population, setting the correction parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the corrected sample standard deviation, setting the correction parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
	*
	* @param x - input array
	* @param correction - degrees of freedom adjustment (default: 1.0)
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanstdevpn( x, 1.0 );
	* // returns ~2.0817
	*/
	nanstdevpn: typeof nanstdevpn;

	/**
	* Computes the standard deviation of an array ignoring `NaN` values and using a one-pass textbook algorithm.
	*
	* ## Notes
	*
	* -   Setting the correction parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the standard deviation according to `N-c` where `N` corresponds to the number of non-`NaN` array elements and `c` corresponds to the provided degrees of freedom adjustment. When computing the standard deviation of a population, setting the correction parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the corrected sample standard deviation, setting the correction parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
	*
	* @param x - input array
	* @param correction - degrees of freedom adjustment (default: 1.0)
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanstdevtk( x, 1.0 );
	* // returns ~2.0817
	*/
	nanstdevtk: typeof nanstdevtk;

	/**
	* Computes the standard deviation of an array ignoring `NaN` values and using Welford's algorithm.
	*
	* ## Notes
	*
	* -   Setting the correction parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the standard deviation according to `N-c` where `N` corresponds to the number of non-`NaN` array elements and `c` corresponds to the provided degrees of freedom adjustment. When computing the standard deviation of a population, setting the correction parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the corrected sample standard deviation, setting the correction parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
	*
	* @param x - input array
	* @param correction - degrees of freedom adjustment (default: 1.0)
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanstdevwd( x, 1.0 );
	* // returns ~2.0817
	*/
	nanstdevwd: typeof nanstdevwd;

	/**
	* Computes the standard deviation of an array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.
	*
	* ## Notes
	*
	* -   Setting the correction parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the standard deviation according to `N-c` where `N` corresponds to the number of non-`NaN` array elements and `c` corresponds to the provided degrees of freedom adjustment. When computing the standard deviation of a population, setting the correction parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the corrected sample standard deviation, setting the correction parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
	*
	* @param x - input array
	* @param correction - degrees of freedom adjustment (default: 1.0)
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanstdevyc( x, 1.0 );
	* // returns ~2.0817
	*/
	nanstdevyc: typeof nanstdevyc;

	/**
	* Computes the variance of an array ignoring `NaN` values.
	*
	* ## Notes
	*
	* -   Setting the correction parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the variance according to `N-c` where `N` corresponds to the number of non-`NaN` array elements and `c` corresponds to the provided degrees of freedom adjustment. When computing the variance of a population, setting the correction parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the corrected sample variance, setting the correction parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
	*
	* @param x - input array
	* @param correction - degrees of freedom adjustment (default: 1.0)
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanvariance( x, 1.0 );
	* // returns ~4.3333
	*/
	nanvariance: typeof nanvariance;

	/**
	* Computes the variance of an array ignoring `NaN` values and using a one-pass trial mean algorithm.
	*
	* ## Notes
	*
	* -   Setting the correction parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the variance according to `N-c` where `N` corresponds to the number of non-`NaN` array elements and `c` corresponds to the provided degrees of freedom adjustment. When computing the variance of a population, setting the correction parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the corrected sample variance, setting the correction parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
	*
	* @param x - input array
	* @param correction - degrees of freedom adjustment (default: 1.0)
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanvariancech( x, 1.0 );
	* // returns ~4.3333
	*/
	nanvariancech: typeof nanvariancech;

	/**
	* Computes the variance of an array ignoring `NaN` values and using a two-pass algorithm.
	*
	* ## Notes
	*
	* -   Setting the correction parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the variance according to `N-c` where `N` corresponds to the number of non-`NaN` array elements and `c` corresponds to the provided degrees of freedom adjustment. When computing the variance of a population, setting the correction parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the corrected sample variance, setting the correction parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
	*
	* @param x - input array
	* @param correction - degrees of freedom adjustment (default: 1.0)
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanvariancepn( x, 1.0 );
	* // returns ~4.3333
	*/
	nanvariancepn: typeof nanvariancepn;

	/**
	* Computes the variance of an array ignoring `NaN` values and using a one-pass textbook algorithm.
	*
	* ## Notes
	*
	* -   Setting the correction parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the variance according to `N-c` where `N` corresponds to the number of non-`NaN` array elements and `c` corresponds to the provided degrees of freedom adjustment. When computing the variance of a population, setting the correction parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the corrected sample variance, setting the correction parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
	*
	* @param x - input array
	* @param correction - degrees of freedom adjustment (default: 1.0)
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanvariancetk( x, 1.0 );
	* // returns ~4.3333
	*/
	nanvariancetk: typeof nanvariancetk;

	/**
	* Computes the variance of an array ignoring `NaN` values and using Welford's algorithm.
	*
	* ## Notes
	*
	* -   Setting the correction parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the variance according to `N-c` where `N` corresponds to the number of non-`NaN` array elements and `c` corresponds to the provided degrees of freedom adjustment. When computing the variance of a population, setting the correction parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the corrected sample variance, setting the correction parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
	*
	* @param x - input array
	* @param correction - degrees of freedom adjustment (default: 1.0)
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanvariancewd( x, 1.0 );
	* // returns ~4.3333
	*/
	nanvariancewd: typeof nanvariancewd;

	/**
	* Computes the variance of an array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.
	*
	* ## Notes
	*
	* -   Setting the correction parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the variance according to `N-c` where `N` corresponds to the number of non-`NaN` array elements and `c` corresponds to the provided degrees of freedom adjustment. When computing the variance of a population, setting the correction parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the corrected sample variance, setting the correction parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
	*
	* @param x - input array
	* @param correction - degrees of freedom adjustment (default: 1.0)
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanvarianceyc( x, 1.0 );
	* // returns ~4.3333
	*/
	nanvarianceyc: typeof nanvarianceyc;

	/**
	* Computes the range of an array.
	*
	* @param x - input array
	* @returns range
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.range( x );
	* // returns 4.0
	*/
	range: typeof range;

	/**
	* Computes the range of an array via a callback function.
	*
	* @param x - input array
	* @param clbk - callback
	* @param thisArg - execution context
	* @returns range
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var v = ns.rangeBy( x, accessor );
	* // returns 18.0
	*/
	rangeBy: typeof rangeBy;

	/**
	* Computes the standard deviation of an array.
	*
	* ## Notes
	*
	* -   Setting the correction parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the standard deviation according to `N-c` where `c` corresponds to the provided degrees of freedom adjustment. When computing the standard deviation of a population, setting the correction parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the corrected sample standard deviation, setting the correction parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
	*
	* @param x - input array
	* @param correction - degrees of freedom adjustment
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.stdev( x, 1.0 );
	* // returns ~2.0817
	*/
	stdev: typeof stdev;

	/**
	* Computes the standard deviation of an array using a one-pass trial mean algorithm.
	*
	* ## Notes
	*
	* -   Setting the correction parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the standard deviation according to `N-c` where `c` corresponds to the provided degrees of freedom adjustment. When computing the standard deviation of a population, setting the correction parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the corrected sample standard deviation, setting the correction parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
	*
	* @param x - input array
	* @param correction - degrees of freedom adjustment (default: 1.0)
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.stdevch( x, 1.0 );
	* // returns ~2.0817
	*/
	stdevch: typeof stdevch;

	/**
	* Computes the standard deviation of an array using a two-pass algorithm.
	*
	* ## Notes
	*
	* -   Setting the correction parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the standard deviation according to `N-c` where `c` corresponds to the provided degrees of freedom adjustment. When computing the standard deviation of a population, setting the correction parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the corrected sample standard deviation, setting the correction parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
	*
	* @param x - input array
	* @param correction - degrees of freedom adjustment (default: 1.0)
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.stdevpn( x, 1.0 );
	* // returns ~2.0817
	*/
	stdevpn: typeof stdevpn;

	/**
	* Computes the standard deviation of an array using a one-pass textbook algorithm.
	*
	* ## Notes
	*
	* -   Setting the correction parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the standard deviation according to `N-c` where `c` corresponds to the provided degrees of freedom adjustment. When computing the standard deviation of a population, setting the correction parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the corrected sample standard deviation, setting the correction parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
	*
	* @param x - input array
	* @param correction - degrees of freedom adjustment (default: 1.0)
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.stdevtk( x, 1.0 );
	* // returns ~2.0817
	*/
	stdevtk: typeof stdevtk;

	/**
	* Computes the standard deviation of an array using Welford's algorithm.
	*
	* ## Notes
	*
	* -   Setting the correction parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the standard deviation according to `N-c` where `c` corresponds to the provided degrees of freedom adjustment. When computing the standard deviation of a population, setting the correction parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the corrected sample standard deviation, setting the correction parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
	*
	* @param x - input array
	* @param correction - degrees of freedom adjustment (default: 1.0)
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.stdevwd( x, 1.0 );
	* // returns ~2.0817
	*/
	stdevwd: typeof stdevwd;

	/**
	* Computes the standard deviation of an array using a one-pass algorithm proposed by Youngs and Cramer.
	*
	* ## Notes
	*
	* -   Setting the correction parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the standard deviation according to `N-c` where `c` corresponds to the provided degrees of freedom adjustment. When computing the standard deviation of a population, setting the correction parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the corrected sample standard deviation, setting the correction parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
	*
	* @param x - input array
	* @param correction - degrees of freedom adjustment (default: 1.0)
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.stdevyc( x, 1.0 );
	* // returns ~2.0817
	*/
	stdevyc: typeof stdevyc;

	/**
	* Computes the variance of an array.
	*
	* ## Notes
	*
	* -   Setting the correction parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the variance according to `N-c` where `c` corresponds to the provided degrees of freedom adjustment. When computing the variance of a population, setting the correction parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the corrected sample variance, setting the correction parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
	*
	* @param x - input array
	* @param correction - degrees of freedom adjustment (default: 1.0)
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.variance( x, 1.0 );
	* // returns ~4.3333
	*/
	variance: typeof variance;

	/**
	* Computes the variance of an array using a one-pass trial mean algorithm.
	*
	* ## Notes
	*
	* -   Setting the correction parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the variance according to `N-c` where `c` corresponds to the provided degrees of freedom adjustment. When computing the variance of a population, setting the correction parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the corrected sample variance, setting the correction parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
	*
	* @param x - input array
	* @param correction - degrees of freedom adjustment (default: 1.0)
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.variancech( x, 1.0 );
	* // returns ~4.3333
	*/
	variancech: typeof variancech;

	/**
	* Computes the variance of an array using a two-pass algorithm.
	*
	* ## Notes
	*
	* -   Setting the correction parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the variance according to `N-c` where `c` corresponds to the provided degrees of freedom adjustment. When computing the variance of a population, setting the correction parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the corrected sample variance, setting the correction parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
	*
	* @param x - input array
	* @param correction - degrees of freedom adjustment (default: 1.0)
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.variancepn( x, 1.0 );
	* // returns ~4.3333
	*/
	variancepn: typeof variancepn;

	/**
	* Computes the variance of an array using a one-pass textbook algorithm.
	*
	* ## Notes
	*
	* -   Setting the correction parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the variance according to `N-c` where `c` corresponds to the provided degrees of freedom adjustment. When computing the variance of a population, setting the correction parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the corrected sample variance, setting the correction parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
	*
	* @param x - input array
	* @param correction - degrees of freedom adjustment (default: 1.0)
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.variancetk( x, 1.0 );
	* // returns ~4.3333
	*/
	variancetk: typeof variancetk;

	/**
	* Computes the variance of an array using Welford's algorithm.
	*
	* ## Notes
	*
	* -   Setting the correction parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the variance according to `N-c` where `c` corresponds to the provided degrees of freedom adjustment. When computing the variance of a population, setting the correction parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the corrected sample variance, setting the correction parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
	*
	* @param x - input array
	* @param correction - degrees of freedom adjustment (default: 1.0)
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.variancewd( x, 1.0 );
	* // returns ~4.3333
	*/
	variancewd: typeof variancewd;

	/**
	* Computes the variance of an array using a one-pass algorithm proposed by Youngs and Cramer.
	*
	* ## Notes
	*
	* -   Setting the correction parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the variance according to `N-c` where `c` corresponds to the provided degrees of freedom adjustment. When computing the variance of a population, setting the correction parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the corrected sample variance, setting the correction parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
	*
	* @param x - input array
	* @param correction - degrees of freedom adjustment (default: 1.0)
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.varianceyc( x, 1.0 );
	* // returns ~4.3333
	*/
	varianceyc: typeof varianceyc;
}

/**
* Statistical functions for arrays.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
