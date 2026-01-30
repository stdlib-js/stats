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

import covarmtk = require( './../../../strided/covarmtk' );
import dcovarmtk = require( './../../../strided/dcovarmtk' );
import dcovmatmtk = require( './../../../strided/dcovmatmtk' );
import dcumax = require( './../../../strided/dcumax' );
import dcumaxabs = require( './../../../strided/dcumaxabs' );
import dcumin = require( './../../../strided/dcumin' );
import dcuminabs = require( './../../../strided/dcuminabs' );
import distances = require( './../../../strided/distances' );
import dmax = require( './../../../strided/dmax' );
import dmaxabs = require( './../../../strided/dmaxabs' );
import dmaxabssorted = require( './../../../strided/dmaxabssorted' );
import dmaxsorted = require( './../../../strided/dmaxsorted' );
import dmean = require( './../../../strided/dmean' );
import dmeankbn = require( './../../../strided/dmeankbn' );
import dmeankbn2 = require( './../../../strided/dmeankbn2' );
import dmeanli = require( './../../../strided/dmeanli' );
import dmeanlipw = require( './../../../strided/dmeanlipw' );
import dmeanors = require( './../../../strided/dmeanors' );
import dmeanpn = require( './../../../strided/dmeanpn' );
import dmeanpw = require( './../../../strided/dmeanpw' );
import dmeanstdev = require( './../../../strided/dmeanstdev' );
import dmeanstdevpn = require( './../../../strided/dmeanstdevpn' );
import dmeanvar = require( './../../../strided/dmeanvar' );
import dmeanvarpn = require( './../../../strided/dmeanvarpn' );
import dmeanwd = require( './../../../strided/dmeanwd' );
import dmediansorted = require( './../../../strided/dmediansorted' );
import dmidrange = require( './../../../strided/dmidrange' );
import dmin = require( './../../../strided/dmin' );
import dminabs = require( './../../../strided/dminabs' );
import dminsorted = require( './../../../strided/dminsorted' );
import dmskmax = require( './../../../strided/dmskmax' );
import dmskmaxabs = require( './../../../strided/dmskmaxabs' );
import dmskmidrange = require( './../../../strided/dmskmidrange' );
import dmskmin = require( './../../../strided/dmskmin' );
import dmskrange = require( './../../../strided/dmskrange' );
import dnanmax = require( './../../../strided/dnanmax' );
import dnanmaxabs = require( './../../../strided/dnanmaxabs' );
import dnanmean = require( './../../../strided/dnanmean' );
import dnanmeanors = require( './../../../strided/dnanmeanors' );
import dnanmeanpn = require( './../../../strided/dnanmeanpn' );
import dnanmeanpw = require( './../../../strided/dnanmeanpw' );
import dnanmeanwd = require( './../../../strided/dnanmeanwd' );
import dnanmidrange = require( './../../../strided/dnanmidrange' );
import dnanmin = require( './../../../strided/dnanmin' );
import dnanminabs = require( './../../../strided/dnanminabs' );
import dnanmskmax = require( './../../../strided/dnanmskmax' );
import dnanmskmidrange = require( './../../../strided/dnanmskmidrange' );
import dnanmskmin = require( './../../../strided/dnanmskmin' );
import dnanmskrange = require( './../../../strided/dnanmskrange' );
import dnanrange = require( './../../../strided/dnanrange' );
import dnanstdev = require( './../../../strided/dnanstdev' );
import dnanstdevch = require( './../../../strided/dnanstdevch' );
import dnanstdevpn = require( './../../../strided/dnanstdevpn' );
import dnanstdevtk = require( './../../../strided/dnanstdevtk' );
import dnanstdevwd = require( './../../../strided/dnanstdevwd' );
import dnanstdevyc = require( './../../../strided/dnanstdevyc' );
import dnanvariance = require( './../../../strided/dnanvariance' );
import dnanvariancech = require( './../../../strided/dnanvariancech' );
import dnanvariancepn = require( './../../../strided/dnanvariancepn' );
import dnanvariancetk = require( './../../../strided/dnanvariancetk' );
import dnanvariancewd = require( './../../../strided/dnanvariancewd' );
import dnanvarianceyc = require( './../../../strided/dnanvarianceyc' );
import drange = require( './../../../strided/drange' );
import drangeabs = require( './../../../strided/drangeabs' );
import dsem = require( './../../../strided/dsem' );
import dsemch = require( './../../../strided/dsemch' );
import dsempn = require( './../../../strided/dsempn' );
import dsemtk = require( './../../../strided/dsemtk' );
import dsemwd = require( './../../../strided/dsemwd' );
import dsemyc = require( './../../../strided/dsemyc' );
import dsmean = require( './../../../strided/dsmean' );
import dsmeanors = require( './../../../strided/dsmeanors' );
import dsmeanpn = require( './../../../strided/dsmeanpn' );
import dsmeanpw = require( './../../../strided/dsmeanpw' );
import dsmeanwd = require( './../../../strided/dsmeanwd' );
import dsnanmean = require( './../../../strided/dsnanmean' );
import dsnanmeanors = require( './../../../strided/dsnanmeanors' );
import dsnanmeanpn = require( './../../../strided/dsnanmeanpn' );
import dsnanmeanwd = require( './../../../strided/dsnanmeanwd' );
import dstdev = require( './../../../strided/dstdev' );
import dstdevch = require( './../../../strided/dstdevch' );
import dstdevpn = require( './../../../strided/dstdevpn' );
import dstdevtk = require( './../../../strided/dstdevtk' );
import dstdevwd = require( './../../../strided/dstdevwd' );
import dstdevyc = require( './../../../strided/dstdevyc' );
import dsvariance = require( './../../../strided/dsvariance' );
import dsvariancepn = require( './../../../strided/dsvariancepn' );
import dvariance = require( './../../../strided/dvariance' );
import dvariancech = require( './../../../strided/dvariancech' );
import dvariancepn = require( './../../../strided/dvariancepn' );
import dvariancetk = require( './../../../strided/dvariancetk' );
import dvariancewd = require( './../../../strided/dvariancewd' );
import dvarianceyc = require( './../../../strided/dvarianceyc' );
import dvarm = require( './../../../strided/dvarm' );
import dvarmpn = require( './../../../strided/dvarmpn' );
import dvarmtk = require( './../../../strided/dvarmtk' );
import dztest = require( './../../../strided/dztest' );
import dztest2 = require( './../../../strided/dztest2' );
import max = require( './../../../strided/max' );
import maxBy = require( './../../../strided/max-by' );
import maxabs = require( './../../../strided/maxabs' );
import maxsorted = require( './../../../strided/maxsorted' );
import mean = require( './../../../strided/mean' );
import meankbn = require( './../../../strided/meankbn' );
import meankbn2 = require( './../../../strided/meankbn2' );
import meanors = require( './../../../strided/meanors' );
import meanpn = require( './../../../strided/meanpn' );
import meanpw = require( './../../../strided/meanpw' );
import meanwd = require( './../../../strided/meanwd' );
import mediansorted = require( './../../../strided/mediansorted' );
import midrange = require( './../../../strided/midrange' );
import midrangeBy = require( './../../../strided/midrange-by' );
import min = require( './../../../strided/min' );
import minBy = require( './../../../strided/min-by' );
import minabs = require( './../../../strided/minabs' );
import minsorted = require( './../../../strided/minsorted' );
import mskmax = require( './../../../strided/mskmax' );
import mskmaxabs = require( './../../../strided/mskmaxabs' );
import mskmidrange = require( './../../../strided/mskmidrange' );
import mskmin = require( './../../../strided/mskmin' );
import mskrange = require( './../../../strided/mskrange' );
import nanmax = require( './../../../strided/nanmax' );
import nanmaxBy = require( './../../../strided/nanmax-by' );
import nanmaxabs = require( './../../../strided/nanmaxabs' );
import nanmean = require( './../../../strided/nanmean' );
import nanmeanors = require( './../../../strided/nanmeanors' );
import nanmeanpn = require( './../../../strided/nanmeanpn' );
import nanmeanwd = require( './../../../strided/nanmeanwd' );
import nanmidrange = require( './../../../strided/nanmidrange' );
import nanmidrangeBy = require( './../../../strided/nanmidrange-by' );
import nanmin = require( './../../../strided/nanmin' );
import nanminBy = require( './../../../strided/nanmin-by' );
import nanminabs = require( './../../../strided/nanminabs' );
import nanmskmax = require( './../../../strided/nanmskmax' );
import nanmskmidrange = require( './../../../strided/nanmskmidrange' );
import nanmskmin = require( './../../../strided/nanmskmin' );
import nanmskrange = require( './../../../strided/nanmskrange' );
import nanrange = require( './../../../strided/nanrange' );
import nanrangeBy = require( './../../../strided/nanrange-by' );
import nanstdev = require( './../../../strided/nanstdev' );
import nanstdevch = require( './../../../strided/nanstdevch' );
import nanstdevpn = require( './../../../strided/nanstdevpn' );
import nanstdevtk = require( './../../../strided/nanstdevtk' );
import nanstdevwd = require( './../../../strided/nanstdevwd' );
import nanstdevyc = require( './../../../strided/nanstdevyc' );
import nanvariance = require( './../../../strided/nanvariance' );
import nanvariancech = require( './../../../strided/nanvariancech' );
import nanvariancepn = require( './../../../strided/nanvariancepn' );
import nanvariancetk = require( './../../../strided/nanvariancetk' );
import nanvariancewd = require( './../../../strided/nanvariancewd' );
import nanvarianceyc = require( './../../../strided/nanvarianceyc' );
import range = require( './../../../strided/range' );
import rangeBy = require( './../../../strided/range-by' );
import rangeabs = require( './../../../strided/rangeabs' );
import scovarmtk = require( './../../../strided/scovarmtk' );
import scumax = require( './../../../strided/scumax' );
import scumaxabs = require( './../../../strided/scumaxabs' );
import scumin = require( './../../../strided/scumin' );
import scuminabs = require( './../../../strided/scuminabs' );
import sdsmean = require( './../../../strided/sdsmean' );
import sdsmeanors = require( './../../../strided/sdsmeanors' );
import sdsnanmeanors = require( './../../../strided/sdsnanmeanors' );
import smax = require( './../../../strided/smax' );
import smaxabs = require( './../../../strided/smaxabs' );
import smaxabssorted = require( './../../../strided/smaxabssorted' );
import smaxsorted = require( './../../../strided/smaxsorted' );
import smean = require( './../../../strided/smean' );
import smeankbn = require( './../../../strided/smeankbn' );
import smeankbn2 = require( './../../../strided/smeankbn2' );
import smeanli = require( './../../../strided/smeanli' );
import smeanlipw = require( './../../../strided/smeanlipw' );
import smeanors = require( './../../../strided/smeanors' );
import smeanpn = require( './../../../strided/smeanpn' );
import smeanpw = require( './../../../strided/smeanpw' );
import smeanwd = require( './../../../strided/smeanwd' );
import smediansorted = require( './../../../strided/smediansorted' );
import smidrange = require( './../../../strided/smidrange' );
import smin = require( './../../../strided/smin' );
import sminabs = require( './../../../strided/sminabs' );
import sminsorted = require( './../../../strided/sminsorted' );
import smskmax = require( './../../../strided/smskmax' );
import smskmaxabs = require( './../../../strided/smskmaxabs' );
import smskmidrange = require( './../../../strided/smskmidrange' );
import smskmin = require( './../../../strided/smskmin' );
import smskrange = require( './../../../strided/smskrange' );
import snanmax = require( './../../../strided/snanmax' );
import snanmaxabs = require( './../../../strided/snanmaxabs' );
import snanmean = require( './../../../strided/snanmean' );
import snanmeanors = require( './../../../strided/snanmeanors' );
import snanmeanpn = require( './../../../strided/snanmeanpn' );
import snanmeanwd = require( './../../../strided/snanmeanwd' );
import snanmidrange = require( './../../../strided/snanmidrange' );
import snanmin = require( './../../../strided/snanmin' );
import snanminabs = require( './../../../strided/snanminabs' );
import snanmskmax = require( './../../../strided/snanmskmax' );
import snanmskmidrange = require( './../../../strided/snanmskmidrange' );
import snanmskmin = require( './../../../strided/snanmskmin' );
import snanmskrange = require( './../../../strided/snanmskrange' );
import snanrange = require( './../../../strided/snanrange' );
import srange = require( './../../../strided/srange' );
import srangeabs = require( './../../../strided/srangeabs' );
import sstdev = require( './../../../strided/sstdev' );
import sstdevch = require( './../../../strided/sstdevch' );
import sstdevpn = require( './../../../strided/sstdevpn' );
import sstdevtk = require( './../../../strided/sstdevtk' );
import sstdevwd = require( './../../../strided/sstdevwd' );
import sstdevyc = require( './../../../strided/sstdevyc' );
import stdev = require( './../../../strided/stdev' );
import stdevch = require( './../../../strided/stdevch' );
import stdevpn = require( './../../../strided/stdevpn' );
import stdevtk = require( './../../../strided/stdevtk' );
import stdevwd = require( './../../../strided/stdevwd' );
import stdevyc = require( './../../../strided/stdevyc' );
import svariance = require( './../../../strided/svariance' );
import svariancech = require( './../../../strided/svariancech' );
import svariancepn = require( './../../../strided/svariancepn' );
import svariancetk = require( './../../../strided/svariancetk' );
import svariancewd = require( './../../../strided/svariancewd' );
import svarianceyc = require( './../../../strided/svarianceyc' );
import sztest = require( './../../../strided/sztest' );
import sztest2 = require( './../../../strided/sztest2' );
import variance = require( './../../../strided/variance' );
import variancech = require( './../../../strided/variancech' );
import variancepn = require( './../../../strided/variancepn' );
import variancetk = require( './../../../strided/variancetk' );
import variancewd = require( './../../../strided/variancewd' );
import varianceyc = require( './../../../strided/varianceyc' );
import ztest = require( './../../../strided/ztest' );
import ztest2 = require( './../../../strided/ztest2' );

/**
* Interface describing the `strided` namespace.
*/
interface Namespace {
	/**
	* Computes the covariance of two strided arrays provided known means and using a one-pass textbook algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param meanx - mean of `x`
	* @param x - first input array
	* @param strideX - stride length of `x`
	* @param meany - mean of `y`
	* @param y - second input array
	* @param strideY - stride length of `y`
	* @returns covariance
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	* var y = [ 2.0, -2.0, 1.0 ];
	*
	* var v = ns.covarmtk( x.length, 1, 1.0/3.0, x, 1, 1.0/3.0, y, 1 );
	* // returns ~3.8333
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	* var y = [ 2.0, -2.0, 1.0 ];
	*
	* var v = ns.covarmtk.ndarray( x.length, 1, 1.0/3.0, x, 1, 0, 1.0/3.0, y, 1, 0 );
	* // returns ~3.8333
	*/
	covarmtk: typeof covarmtk;

	/**
	* Computes the covariance of two double-precision floating-point strided arrays provided known means and using a one-pass textbook algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param meanx - mean of `x`
	* @param x - first input array
	* @param strideX - stride length of `x`
	* @param meany - mean of `y`
	* @param y - second input array
	* @param strideY - stride length of `y`
	* @returns covariance
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float64Array( [ 2.0, -2.0, 1.0 ] );
	*
	* var v = ns.dcovarmtk( x.length, 1, 1.0/3.0, x, 1, 1.0/3.0, y, 1 );
	* // returns ~3.8333
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float64Array( [ 2.0, -2.0, 1.0 ] );
	*
	* var v = ns.dcovarmtk.ndarray( x.length, 1, 1.0/3.0, x, 1, 0, 1.0/3.0, y, 1, 0 );
	* // returns ~3.8333
	*/
	dcovarmtk: typeof dcovarmtk;

	/**
	* Computes the covariance matrix for an `M` by `N` double-precision floating-point matrix `A` and assigns the results to a matrix `B` when provided known means and using a one-pass textbook algorithm.
	*
	* ## Notes
	*
	* -   When `orient(A) = 'columns'`,
	*
	*     -   each column in `A` represents a variable and each row in `A` represents an observation.
	*     -   `B` should be an `N` by `N` matrix.
	*     -   the list of known means should be an `N` element vector.
	*
	* -   When `orient(A) = 'rows'`,
	*
	*     -   each row in `A` represents a variable and each column in `A` represents an observation.
	*     -   `B` should be an `M` by `M` matrix.
	*     -   the list of known means should be an `M` element vector.
	*
	* @param order - storage layout
	* @param orient - specifies whether variables are stored along columns or along roes
	* @param uplo - specifies whether to overwrite the upper or lower triangular part of matrix `B`
	* @param M - number of rows in the matrix `A`
	* @param N - number of columns in the matrix `A`
	* @param correction - degrees of freedom adjustment
	* @param means - vector of known means
	* @param strideM - stride length of `means`
	* @param A - input matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @param B - output matrix
	* @param LDB - stride of the first dimension of `B` (a.k.a., leading dimension of the matrix `B`)
	* @returns covariance
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* // Define a 2x3 matrix in which variables are stored along rows in row-major order:
	* var A = new Float64Array([
	*     1.0, -2.0, 2.0,
	*     2.0, -2.0, 1.0
	* ]);
	*
	* // Define a vector of known means:
	* var means = new Float64Array( [ 1.0/3.0, 1.0/3.0 ] );
	*
	* // Allocate a 2x2 output matrix:
	* var B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	*
	* // Perform operation:
	* var out = ns.dcovmatmtk( 'row-major', 'rows', 'full', 2, 3, 1, means, 1, A, 3, B, 2 );
	* // returns <Float64Array>[ ~4.3333, ~3.8333, ~3.8333, ~4.3333 ]
	*
	* var bool = ( B === out );
	* // returns true
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* // Define a 2x3 matrix in which variables are stored along rows in row-major order:
	* var A = new Float64Array([
	*     1.0, -2.0, 2.0,
	*     2.0, -2.0, 1.0
	* ]);
	*
	* // Define a vector of known means:
	* var means = new Float64Array( [ 1.0/3.0, 1.0/3.0 ] );
	*
	* // Allocate a 2x2 output matrix:
	* var B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	*
	* // Perform operation:
	* var out = ns.dcovmatmtk.ndarray( 'rows', 'full', 2, 3, 1, means, 1, 0, A, 3, 1, 0, B, 2, 1, 0 );
	* // returns <Float64Array>[ ~4.3333, ~3.8333, ~3.8333, ~4.3333 ]
	*
	* var bool = ( B === out );
	* // returns true
	*/
	dcovmatmtk: typeof dcovmatmtk;

	/**
	* Computes the cumulative maximum of double-precision floating-point strided array elements.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - output array
	* @param strideY - `y` stride length
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float64Array( x.length );
	*
	* ns.dcumax( x.length, x, 1, y, 1 );
	* // y => <Float64Array>[ 1.0, 1.0, 2.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float64Array( x.length );
	*
	* ns.dcumax.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ 1.0, 1.0, 2.0 ]
	*/
	dcumax: typeof dcumax;

	/**
	* Computes the cumulative maximum absolute value of double-precision floating-point strided array elements.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - output array
	* @param strideY - `y` stride length
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float64Array( x.length );
	*
	* ns.dcumaxabs( x.length, x, 1, y, 1 );
	* // y => <Float64Array>[ 1.0, 2.0, 2.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float64Array( x.length );
	*
	* ns.dcumaxabs.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ 1.0, 2.0, 2.0 ]
	*/
	dcumaxabs: typeof dcumaxabs;

	/**
	* Computes the cumulative minimum of double-precision floating-point strided array elements.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - output array
	* @param strideY - `y` stride length
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float64Array( x.length );
	*
	* ns.dcumin( x.length, x, 1, y, 1 );
	* // y => <Float64Array>[ 1.0, -2.0, -2.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float64Array( x.length );
	*
	* ns.dcumin.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ 1.0, -2.0, -2.0 ]
	*/
	dcumin: typeof dcumin;

	/**
	* Computes the cumulative minimum absolute value of double-precision floating-point strided array elements.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - output array
	* @param strideY - `y` stride length
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float64Array( x.length );
	*
	* ns.dcuminabs( x.length, x, 1, y, 1 );
	* // y => <Float64Array>[ 1.0, 1.0, 1.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float64Array( x.length );
	*
	* ns.dcuminabs.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ 1.0, 1.0, 1.0 ]
	*/
	dcuminabs: typeof dcuminabs;

	/**
	* Distance metrics for strided arrays.
	*/
	distances: typeof distances;

	/**
	* Computes the maximum value of a double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns maximum value
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmax( x.length, x, 1 );
	* // returns 2.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmax.ndarray( x.length, x, 1, 0 );
	* // returns 2.0
	*/
	dmax: typeof dmax;

	/**
	* Computes the maximum absolute value of a double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns maximum absolute value
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmaxabs( x.length, x, 1 );
	* // returns 2.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmaxabs.ndarray( x.length, x, 1, 0 );
	* // returns 2.0
	*/
	dmaxabs: typeof dmaxabs;

	/**
	* Computes the maximum absolute value of a sorted double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - sorted input array
	* @param strideX - stride length
	* @returns maximum absolute value
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ -1.0, -2.0, -3.0 ] );
	*
	* var v = ns.dmaxabssorted( x.length, x, 1 );
	* // returns 3.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ -1.0, -2.0, -3.0 ] );
	*
	* var v = ns.dmaxabssorted.ndarray( x.length, x, 1, 0 );
	* // returns 3.0
	*/
	dmaxabssorted: typeof dmaxabssorted;

	/**
	* Computes the maximum value of a sorted double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - sorted input array
	* @param strideX - stride length
	* @returns maximum value
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	*
	* var v = ns.dmaxsorted( x.length, x, 1 );
	* // returns 3.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	*
	* var v = ns.dmaxsorted.ndarray( x.length, x, 1, 0 );
	* // returns 3.0
	*/
	dmaxsorted: typeof dmaxsorted;

	/**
	* Computes the arithmetic mean of a double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmean( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmean.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	dmean: typeof dmean;

	/**
	* Computes the arithmetic mean of a double-precision floating-point strided array using an improved Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmeankbn( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmeankbn.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	dmeankbn: typeof dmeankbn;

	/**
	* Computes the arithmetic mean of a double-precision floating-point strided array using a second-order iterative Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmeankbn2( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmeankbn2.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	dmeankbn2: typeof dmeankbn2;

	/**
	* Computes the arithmetic mean of a double-precision floating-point strided array using a one-pass trial mean algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmeanli( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmeanli.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	dmeanli: typeof dmeanli;

	/**
	* Computes the arithmetic mean of a double-precision floating-point strided array using a one-pass trial mean algorithm with pairwise summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmeanlipw( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmeanlipw.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	dmeanlipw: typeof dmeanlipw;

	/**
	* Computes the arithmetic mean of a double-precision floating-point strided array using ordinary recursive summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmeanors( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmeanors.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	dmeanors: typeof dmeanors;

	/**
	* Computes the arithmetic mean of a double-precision floating-point strided array using a two-pass error correction algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmeanpn( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmeanpn.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	dmeanpn: typeof dmeanpn;

	/**
	* Computes the arithmetic mean of a double-precision floating-point strided array using pairwise summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmeanpw( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmeanpw.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	dmeanpw: typeof dmeanpw;

	/**
	* Computes the mean and standard deviation of a double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - `x` stride length
	* @param out - output array
	* @param strideOut - `out` stride length
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var out = new Float64Array( 2 );
	*
	* var v = ns.dmeanstdev( x.length, 1, x, 1, out, 1 );
	* // returns <Float64Array>[ ~0.3333, ~2.0817 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var out = new Float64Array( 2 );
	*
	* var v = ns.dmeanstdev.ndarray( x.length, 1, x, 1, 0, out, 1, 0 );
	* // returns <Float64Array>[ ~0.3333, ~2.0817 ]
	*/
	dmeanstdev: typeof dmeanstdev;

	/**
	* Computes the mean and standard deviation of a double-precision floating-point strided array using a two-pass algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - `x` stride length
	* @param out - output array
	* @param strideOut - `out` stride length
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var out = new Float64Array( 2 );
	*
	* var v = ns.dmeanstdevpn( x.length, 1, x, 1, out, 1 );
	* // returns <Float64Array>[ ~0.3333, ~2.0817 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var out = new Float64Array( 2 );
	*
	* var v = ns.dmeanstdevpn.ndarray( x.length, 1, x, 1, 0, out, 1, 0 );
	* // returns <Float64Array>[ ~0.3333, ~2.0817 ]
	*/
	dmeanstdevpn: typeof dmeanstdevpn;

	/**
	* Computes the mean and variance of a double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - `x` stride length
	* @param out - output array
	* @param strideOut - `out` stride length
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var out = new Float64Array( 2 );
	*
	* var v = ns.dmeanvar( x.length, 1, x, 1, out, 1 );
	* // returns <Float64Array>[ ~0.3333, ~4.3333 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var out = new Float64Array( 2 );
	*
	* var v = ns.dmeanvar.ndarray( x.length, 1, x, 1, 0, out, 1, 0 );
	* // returns <Float64Array>[ ~0.3333, ~4.3333 ]
	*/
	dmeanvar: typeof dmeanvar;

	/**
	* Computes the mean and variance of a double-precision floating-point strided array using a two-pass algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - `x` stride length
	* @param out - output array
	* @param strideOut - `out` stride length
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var out = new Float64Array( 2 );
	*
	* var v = ns.dmeanvarpn( x.length, 1, x, 1, out, 1 );
	* // returns <Float64Array>[ ~0.3333, ~4.3333 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	* var out = new Float64Array( 2 );
	*
	* var v = ns.dmeanvarpn.ndarray( x.length, 1, x, 1, 0, out, 1, 0 );
	* // returns <Float64Array>[ ~0.3333, ~4.3333 ]
	*/
	dmeanvarpn: typeof dmeanvarpn;

	/**
	* Computes the arithmetic mean of a double-precision floating-point strided array using Welford's algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmeanwd( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmeanwd.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	dmeanwd: typeof dmeanwd;

	/**
	* Computes the median value of a sorted double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - sorted input array
	* @param strideX - stride length
	* @returns median value
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	*
	* var v = ns.dmediansorted( x.length, x, 1 );
	* // returns 2.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	*
	* var v = ns.dmediansorted.ndarray( x.length, x, 1, 0 );
	* // returns 2.0
	*/
	dmediansorted: typeof dmediansorted;

	/**
	* Computes the mid-range of a double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns mid-range
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmidrange( x.length, x, 1 );
	* // returns 0.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmidrange.ndarray( x.length, x, 1, 0 );
	* // returns 0.0
	*/
	dmidrange: typeof dmidrange;

	/**
	* Computes the minimum value of a double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns minimum value
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmin( x.length, x, 1 );
	* // returns -2.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dmin.ndarray( x.length, x, 1, 0 );
	* // returns -2.0
	*/
	dmin: typeof dmin;

	/**
	* Computes the minimum absolute value of a double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns minimum absolute value
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dminabs( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dminabs.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	dminabs: typeof dminabs;

	/**
	* Computes the minimum value of a sorted double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - sorted input array
	* @param strideX - stride length
	* @returns minimum value
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	*
	* var v = ns.dminsorted( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	*
	* var v = ns.dminsorted.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	dminsorted: typeof dminsorted;

	/**
	* Computes the maximum value of a double-precision floating-point strided array according to a mask.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @returns maximum value
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 4.0, 2.0 ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0 ] );
	*
	* var v = ns.dmskmax( x.length, x, 1, mask, 1 );
	* // returns 2.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 4.0, 2.0 ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0 ] );
	*
	* var v = ns.dmskmax.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns 2.0
	*/
	dmskmax: typeof dmskmax;

	/**
	* Computes the maximum absolute value of a double-precision floating-point strided array according to a mask.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @returns maximum absolute value
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 4.0, 2.0 ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0 ] );
	*
	* var v = ns.dmskmaxabs( x.length, x, 1, mask, 1 );
	* // returns 2.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 4.0, 2.0 ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0 ] );
	*
	* var v = ns.dmskmaxabs.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns 2.0
	*/
	dmskmaxabs: typeof dmskmaxabs;

	/**
	* Computes the mid-range of a double-precision floating-point strided array according to a mask.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @returns mid-range
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 4.0, 2.0 ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0 ] );
	*
	* var v = ns.dmskmidrange( x.length, x, 1, mask, 1 );
	* // returns 0.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 4.0, 2.0 ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0 ] );
	*
	* var v = ns.dmskmidrange.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns 0.0
	*/
	dmskmidrange: typeof dmskmidrange;

	/**
	* Computes the minimum value of a double-precision floating-point strided array according to a mask.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @returns minimum value
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, -4.0, 2.0 ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0 ] );
	*
	* var v = ns.dmskmin( x.length, x, 1, mask, 1 );
	* // returns -2.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, -4.0, 2.0 ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0 ] );
	*
	* var v = ns.dmskmin.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns -2.0
	*/
	dmskmin: typeof dmskmin;

	/**
	* Computes the range of a double-precision floating-point strided array according to a mask.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @returns range
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 4.0, 2.0 ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0 ] );
	*
	* var v = ns.dmskrange( x.length, x, 1, mask, 1 );
	* // returns 4.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 4.0, 2.0 ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0 ] );
	*
	* var v = ns.dmskrange.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns 4.0
	*/
	dmskrange: typeof dmskrange;

	/**
	* Computes the maximum value of a double-precision floating-point strided array, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns maximum value
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanmax( x.length, x, 1 );
	* // returns 2.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanmax.ndarray( x.length, x, 1, 0 );
	* // returns 2.0
	*/
	dnanmax: typeof dnanmax;

	/**
	* Computes the maximum absolute value of a double-precision floating-point strided array, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns maximum absolute value
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanmaxabs( x.length, x, 1 );
	* // returns 2.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanmaxabs.ndarray( x.length, x, 1, 0 );
	* // returns 2.0
	*/
	dnanmaxabs: typeof dnanmaxabs;

	/**
	* Computes the arithmetic mean of a double-precision floating-point strided array, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanmean( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanmean.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	dnanmean: typeof dnanmean;

	/**
	* Computes the arithmetic mean of a double-precision floating-point strided array, ignoring `NaN` values and using ordinary recursive summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanmeanors( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanmeanors.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	dnanmeanors: typeof dnanmeanors;

	/**
	* Computes the arithmetic mean of a double-precision floating-point strided array, ignoring `NaN` values and using a two-pass error correction algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanmeanpn( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanmeanpn.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	dnanmeanpn: typeof dnanmeanpn;

	/**
	* Computes the arithmetic mean of a double-precision floating-point strided array, ignoring `NaN` values and using pairwise summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanmeanpw( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanmeanpw.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	dnanmeanpw: typeof dnanmeanpw;

	/**
	* Computes the arithmetic mean of a double-precision floating-point strided array, using Welford's algorithm and ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanmeanwd( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanmeanwd.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	dnanmeanwd: typeof dnanmeanwd;

	/**
	* Computes the mid-range of a double-precision floating-point strided array, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns mid-range
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanmidrange( x.length, x, 1 );
	* // returns 0.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanmidrange.ndarray( x.length, x, 1, 0 );
	* // returns 0.0
	*/
	dnanmidrange: typeof dnanmidrange;

	/**
	* Computes the minimum value of a double-precision floating-point strided array, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns minimum value
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanmin( x.length, x, 1 );
	* // returns -2.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanmin.ndarray( x.length, x, 1, 0 );
	* // returns -2.0
	*/
	dnanmin: typeof dnanmin;

	/**
	* Computes the minimum absolute value of a double-precision floating-point strided array, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns minimum absolute value
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanminabs( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanminabs.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	dnanminabs: typeof dnanminabs;

	/**
	* Computes the maximum value of a double-precision floating-point strided array according to a mask, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @returns maximum value
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 4.0, 2.0, NaN ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	*
	* var v = ns.dnanmskmax( x.length, x, 1, mask, 1 );
	* // returns 2.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 4.0, 2.0, NaN ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	*
	* var v = ns.dnanmskmax.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns 2.0
	*/
	dnanmskmax: typeof dnanmskmax;

	/**
	* Computes the mid-range of a double-precision floating-point strided array according to a mask, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @returns mid-range
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 4.0, 2.0, NaN ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	*
	* var v = ns.dnanmskmidrange( x.length, x, 1, mask, 1 );
	* // returns 0.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 4.0, 2.0, NaN ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	*
	* var v = ns.dnanmskmidrange.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns 0.0
	*/
	dnanmskmidrange: typeof dnanmskmidrange;

	/**
	* Computes the minimum value of a double-precision floating-point strided array according to a mask, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @returns minimum value
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, -4.0, 2.0, NaN ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	*
	* var v = ns.dnanmskmin( x.length, x, 1, mask, 1 );
	* // returns -2.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, -4.0, 2.0, NaN ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	*
	* var v = ns.dnanmskmin.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns -2.0
	*/
	dnanmskmin: typeof dnanmskmin;

	/**
	* Computes the range of a double-precision floating-point strided array according to a mask, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @returns range
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 4.0, 2.0, NaN ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	*
	* var v = ns.dnanmskrange( x.length, x, 1, mask, 1 );
	* // returns 4.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 4.0, 2.0, NaN ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	*
	* var v = ns.dnanmskrange.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns 4.0
	*/
	dnanmskrange: typeof dnanmskrange;

	/**
	* Computes the range of a double-precision floating-point strided array, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns range
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanrange( x.length, x, 1 );
	* // returns 4.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanrange.ndarray( x.length, x, 1, 0 );
	* // returns 4.0
	*/
	dnanrange: typeof dnanrange;

	/**
	* Computes the standard deviation of a double-precision floating-point strided array ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard deviation
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanstdev( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanstdev.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	dnanstdev: typeof dnanstdev;

	/**
	* Computes the standard deviation of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass trial mean algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard deviation
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanstdevch( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanstdevch.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	dnanstdevch: typeof dnanstdevch;

	/**
	* Computes the standard deviation of a double-precision floating-point strided array ignoring `NaN` values and using a two-pass algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard deviation
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanstdevpn( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanstdevpn.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	dnanstdevpn: typeof dnanstdevpn;

	/**
	* Computes the standard deviation of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass textbook algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard deviation
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanstdevtk( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanstdevtk.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	dnanstdevtk: typeof dnanstdevtk;

	/**
	* Computes the standard deviation of a double-precision floating-point strided array ignoring `NaN` values and using Welford's algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard deviation
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanstdevwd( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanstdevwd.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	dnanstdevwd: typeof dnanstdevwd;

	/**
	* Computes the standard deviation of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard deviation
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanstdevyc( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanstdevyc.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	dnanstdevyc: typeof dnanstdevyc;

	/**
	* Computes the variance of a double-precision floating-point strided array ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanvariance( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanvariance.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	dnanvariance: typeof dnanvariance;

	/**
	* Computes the variance of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass trial mean algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanvariancech( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanvariancech.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	dnanvariancech: typeof dnanvariancech;

	/**
	* Computes the variance of a double-precision floating-point strided array ignoring `NaN` values and using a two-pass algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanvariancepn( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanvariancepn.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	dnanvariancepn: typeof dnanvariancepn;

	/**
	* Computes the variance of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass textbook algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanvariancetk( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanvariancetk.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	dnanvariancetk: typeof dnanvariancetk;

	/**
	* Computes the variance of a double-precision floating-point strided array ignoring `NaN` values and using Welford's algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanvariancewd( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanvariancewd.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	dnanvariancewd: typeof dnanvariancewd;

	/**
	* Computes the variance of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanvarianceyc( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnanvarianceyc.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	dnanvarianceyc: typeof dnanvarianceyc;

	/**
	* Computes the range of a double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns range
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.drange( x.length, x, 1 );
	* // returns 4.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.drange.ndarray( x.length, x, 1, 0 );
	* // returns 4.0
	*/
	drange: typeof drange;

	/**
	* Computes the range of absolute values of a double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns range
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.drangeabs( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.drangeabs.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	drangeabs: typeof drangeabs;

	/**
	* Computes the standard error of the mean for a double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard error of the mean
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsem( x.length, 1, x, 1 );
	* // returns ~1.20185
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsem.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~1.20185
	*/
	dsem: typeof dsem;

	/**
	* Computes the standard error of the mean for a double-precision floating-point strided array using a one-pass trial mean algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard error of the mean
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsemch( x.length, 1, x, 1 );
	* // returns ~1.20185
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsemch.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~1.20185
	*/
	dsemch: typeof dsemch;

	/**
	* Computes the standard error of the mean for a double-precision floating-point strided array using a two-pass algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard error of the mean
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsempn( x.length, 1, x, 1 );
	* // returns ~1.20185
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsempn.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~1.20185
	*/
	dsempn: typeof dsempn;

	/**
	* Computes the standard error of the mean for a double-precision floating-point strided array using a one-pass textbook algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard error of the mean
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsemtk( x.length, 1, x, 1 );
	* // returns ~1.20185
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsemtk.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~1.20185
	*/
	dsemtk: typeof dsemtk;

	/**
	* Computes the standard error of the mean for a double-precision floating-point strided array using Welford's algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard error of the mean
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsemwd( x.length, 1, x, 1 );
	* // returns ~1.20185
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsemwd.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~1.20185
	*/
	dsemwd: typeof dsemwd;

	/**
	* Computes the standard error of the mean for a double-precision floating-point strided array using a one-pass algorithm proposed by Youngs and Cramer.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard error of the mean
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsemyc( x.length, 1, x, 1 );
	* // returns ~1.20185
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsemyc.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~1.20185
	*/
	dsemyc: typeof dsemyc;

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array using extended accumulation and returning an extended precision result.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsmean( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsmean.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	dsmean: typeof dsmean;

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array using ordinary recursive summation with extended accumulation and returning an extended precision result.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsmeanors( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsmeanors.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	dsmeanors: typeof dsmeanors;

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array using a two-pass error correction algorithm with extended accumulation and returning an extended precision result.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsmeanpn( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsmeanpn.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	dsmeanpn: typeof dsmeanpn;

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array using pairwise summation with extended accumulation and returning an extended precision result.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsmeanpw( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsmeanpw.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	dsmeanpw: typeof dsmeanpw;

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array using Welford's algorithm with extended accumulation and returning an extended precision result.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsmeanwd( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsmeanwd.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	dsmeanwd: typeof dsmeanwd;

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values, using extended accumulation, and returning an extended precision result.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dsnanmean( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dsnanmean.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	dsnanmean: typeof dsnanmean;

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values, using ordinary recursive summation with extended accumulation, and returning an extended precision result.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dsnanmeanors( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dsnanmeanors.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	dsnanmeanors: typeof dsnanmeanors;

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values, using a two-pass error correction algorithm with extended accumulation, and returning an extended precision result.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dsnanmeanpn( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dsnanmeanpn.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	dsnanmeanpn: typeof dsnanmeanpn;

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values, using Welford's algorithm with extended accumulation, and returning an extended precision result.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dsnanmeanwd( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dsnanmeanwd.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	dsnanmeanwd: typeof dsnanmeanwd;

	/**
	* Computes the standard deviation of a double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard deviation
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dstdev( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dstdev.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	dstdev: typeof dstdev;

	/**
	* Computes the standard deviation of a double-precision floating-point strided array using a one-pass trial mean algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard deviation
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dstdevch( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dstdevch.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	dstdevch: typeof dstdevch;

	/**
	* Computes the standard deviation of a double-precision floating-point strided array using a two-pass algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard deviation
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dstdevpn( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dstdevpn.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	dstdevpn: typeof dstdevpn;

	/**
	* Computes the standard deviation of a double-precision floating-point strided array using a one-pass textbook algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard deviation
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dstdevtk( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dstdevtk.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	dstdevtk: typeof dstdevtk;

	/**
	* Computes the standard deviation of a double-precision floating-point strided array using Welford's algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard deviation
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dstdevwd( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dstdevwd.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	dstdevwd: typeof dstdevwd;

	/**
	* Computes the standard deviation of a double-precision floating-point strided array using a one-pass algorithm proposed by Youngs and Cramer.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard deviation
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dstdevyc( x.length, 1.0, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dstdevyc.ndarray( x.length, 1.0, x, 1, 0 );
	* // returns ~2.0817
	*/
	dstdevyc: typeof dstdevyc;

	/**
	* Computes the variance of a single-precision floating-point strided array using extended accumulation and returning an extended precision result.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsvariance( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsvariance.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	dsvariance: typeof dsvariance;

	/**
	* Computes the variance of a single-precision floating-point strided array using a two-pass algorithm with extended accumulation and returning an extended precision result.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsvariancepn( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dsvariancepn.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	dsvariancepn: typeof dsvariancepn;

	/**
	* Computes the variance of a double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dvariance( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dvariance.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	dvariance: typeof dvariance;

	/**
	* Computes the variance of a double-precision floating-point strided array using a one-pass trial mean algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dvariancech( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dvariancech.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	dvariancech: typeof dvariancech;

	/**
	* Computes the variance of a double-precision floating-point strided array using a two-pass algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dvariancepn( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dvariancepn.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	dvariancepn: typeof dvariancepn;

	/**
	* Computes the variance of a double-precision floating-point strided array using a one-pass textbook algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dvariancetk( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dvariancetk.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	dvariancetk: typeof dvariancetk;

	/**
	* Computes the variance of a double-precision floating-point strided array using Welford's algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dvariancewd( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dvariancewd.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	dvariancewd: typeof dvariancewd;

	/**
	* Computes the variance of a double-precision floating-point strided array using a one-pass algorithm proposed by Youngs and Cramer.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dvarianceyc( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dvarianceyc.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	dvarianceyc: typeof dvarianceyc;

	/**
	* Computes the variance of a double-precision floating-point strided array provided a known mean.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param mean - mean
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dvarm( x.length, 1, 1.0/3.0, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dvarm.ndarray( x.length, 1, 1.0/3.0, x, 1, 0 );
	* // returns ~4.3333
	*/
	dvarm: typeof dvarm;

	/**
	* Computes the variance of a double-precision floating-point strided array provided a known mean and using Neely's correction algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param mean - mean
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dvarmpn( x.length, 1, 1.0/3.0, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dvarmpn.ndarray( x.length, 1, 1.0/3.0, x, 1, 0 );
	* // returns ~4.3333
	*/
	dvarmpn: typeof dvarmpn;

	/**
	* Computes the variance of a double-precision floating-point strided array provided a known mean and using a one-pass textbook algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param mean - mean
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dvarmtk( x.length, 1, 1.0/3.0, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dvarmtk.ndarray( x.length, 1, 1.0/3.0, x, 1, 0 );
	* // returns ~4.3333
	*/
	dvarmtk: typeof dvarmtk;

	/**
	* Computes a one-sample Z-test for a double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param alternative - alternative hypothesis
	* @param alpha - significance level
	* @param mu - mean under the null hypothesis
	* @param sigma - known standard deviation
	* @param x - input array
	* @param strideX - stride length
	* @param out - output results object
	* @returns results object
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Results = require( './../../../base/ztest/one-sample/results/float64' );
	*
	* var x = new Float64Array( [ 4.0, 4.0, 6.0, 6.0, 5.0 ] );
	*
	* var results = new Results();
	* var out = ns.dztest( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, results );
	* // returns {...}
	*
	* var bool = ( out === results );
	* // returns true
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Results = require( './../../../base/ztest/one-sample/results/float64' );
	*
	* var x = new Float64Array( [ 4.0, 4.0, 6.0, 6.0, 5.0 ] );
	*
	* var results = new Results();
	* var out = ns.dztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, results );
	* // returns {...}
	*
	* var bool = ( out === results );
	* // returns true
	*/
	dztest: typeof dztest;

	/**
	* Computes a two-sample Z-test for two double-precision floating-point strided arrays.
	*
	* @param NX - number of indexed elements in `x`
	* @param NY - number of indexed elements in `y`
	* @param alternative - alternative hypothesis
	* @param alpha - significance level
	* @param diff - difference in means under the null hypothesis
	* @param sigmax - known standard deviation of `x`
	* @param x - first input array
	* @param strideX - stride length for `x`
	* @param sigmay - known standard deviation of `y`
	* @param y - second input array
	* @param strideY - stride length for `y`
	* @param out - output results object
	* @returns results object
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Results = require( './../../../base/ztest/two-sample/results/float64' );
	*
	* var x = new Float64Array( [ 4.0, 4.0, 6.0, 6.0, 5.0 ] );
	* var y = new Float64Array( [ 3.0, 3.0, 5.0, 7.0, 7.0 ] );
	*
	* var results = new Results();
	* var out = ns.dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 2.0, y, 1, results );
	* // returns {...}
	*
	* var bool = ( out === results );
	* // returns true
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Results = require( './../../../base/ztest/two-sample/results/float64' );
	*
	* var x = new Float64Array( [ 4.0, 4.0, 6.0, 6.0, 5.0 ] );
	* var y = new Float64Array( [ 3.0, 3.0, 5.0, 7.0, 7.0 ] );
	*
	* var results = new Results();
	* var out = ns.dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 2.0, y, 1, 0, results );
	* // returns {...}
	*
	* var bool = ( out === results );
	* // returns true
	*/
	dztest2: typeof dztest2;

	/**
	* Computes the maximum value of a strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns maximum value
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.max( x.length, x, 1 );
	* // returns 2.0
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.max.ndarray( x.length, x, 1, 0 );
	* // returns 2.0
	*/
	max: typeof max;

	/**
	* Computes the maximum value of a strided array via a callback function
	*
	* ## Notes
	*
	* -   The callback function is provided four arguments:
	*
	*     -   `value`: array element
	*     -   `aidx`: array index
	*     -   `sidx`: strided index (offset + aidx*stride)
	*     -   `array`: input array
	*
	* -   The callback function should return a numeric value. If the callback function does not return any value (or equivalently, explicitly returns `undefined`), the value is ignored.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
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
	* var v = ns.maxBy( x.length, x, 1, accessor );
	* // returns 8.0
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var v = ns.maxBy.ndarray( x.length, x, 1, 0, accessor );
	* // returns 8.0
	*/
	maxBy: typeof maxBy;

	/**
	* Computes the maximum absolute value of a strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns maximum absolute value
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.maxabs( x.length, x, 1 );
	* // returns 2.0
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.maxabs.ndarray( x.length, x, 1, 0 );
	* // returns 2.0
	*/
	maxabs: typeof maxabs;

	/**
	* Computes the maximum value of a sorted strided array.
	*
	* @param N - number of indexed elements
	* @param x - sorted input array
	* @param strideX - stride length
	* @returns maximum value
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0 ];
	*
	* var v = ns.maxsorted( x.length, x, 1 );
	* // returns 3.0
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0 ];
	*
	* var v = ns.maxsorted.ndarray( x.length, x, 1, 0 );
	* // returns 3.0
	*/
	maxsorted: typeof maxsorted;

	/**
	* Computes the arithmetic mean of a strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.mean( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.mean.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	mean: typeof mean;

	/**
	* Computes the arithmetic mean of a strided array using an improved Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.meankbn( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.meankbn.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	meankbn: typeof meankbn;

	/**
	* Computes the arithmetic mean of a strided array using a second-order iterative Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.meankbn2( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.meankbn2.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	meankbn2: typeof meankbn2;

	/**
	* Computes the arithmetic mean of a strided array using ordinary recursive summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.meanors( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.meanors.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	meanors: typeof meanors;

	/**
	* Computes the arithmetic mean of a strided array using a two-pass error correction algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.meanpn( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.meanpn.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	meanpn: typeof meanpn;

	/**
	* Computes the arithmetic mean of a strided array using pairwise summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.meanpw( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.meanpw.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	meanpw: typeof meanpw;

	/**
	* Computes the arithmetic mean of a strided array using Welford's algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.meanwd( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.meanwd.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	meanwd: typeof meanwd;

	/**
	* Computes the median value of a sorted strided array.
	*
	* @param N - number of indexed elements
	* @param x - sorted input array
	* @param strideX - stride length
	* @returns median value
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0 ];
	*
	* var v = ns.mediansorted( x.length, x, 1 );
	* // returns 2.0
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0 ];
	*
	* var v = ns.mediansorted.ndarray( x.length, x, 1, 0 );
	* // returns 2.0
	*/
	mediansorted: typeof mediansorted;

	/**
	* Computes the mid-range of a strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns mid-range
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.midrange( x.length, x, 1 );
	* // returns 0.0
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.midrange.ndarray( x.length, x, 1, 0 );
	* // returns 0.0
	*/
	midrange: typeof midrange;

	/**
	* Computes the mid-range of a strided array via a callback function.
	*
	* ## Notes
	*
	* -   The callback function is provided four arguments:
	*
	*     -   `value`: array element
	*     -   `aidx`: array index
	*     -   `sidx`: strided index (offset + aidx*stride)
	*     -   `array`: input array
	*
	* -   The callback function should return a numeric value. If the callback function does not return any value (or equivalently, explicitly returns `undefined`), the value is ignored.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @param clbk - callback
	* @param thisArg - execution context
	* @returns mid-range
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var v = ns.midrangeBy( x.length, x, 1, accessor );
	* // returns -1.0
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var v = ns.midrangeBy.ndarray( x.length, x, 1, 0, accessor );
	* // returns -1.0
	*/
	midrangeBy: typeof midrangeBy;

	/**
	* Computes the minimum value of a strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns minimum value
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.min( x.length, x, 1 );
	* // returns -2.0
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.min.ndarray( x.length, x, 1, 0 );
	* // returns -2.0
	*/
	min: typeof min;

	/**
	* Computes the minimum value of a strided array via a callback function.
	*
	* ## Notes
	*
	* -   The callback function is provided four arguments:
	*
	*     -   `value`: array element
	*     -   `aidx`: array index
	*     -   `sidx`: strided index (offset + aidx*stride)
	*     -   `array`: input array
	*
	* -   The callback function should return a numeric value. If the callback function does not return any value (or equivalently, explicitly returns `undefined`), the value is ignored.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
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
	* var v = ns.minBy( x.length, x, 1, accessor );
	* // returns -10.0
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var v = ns.minBy.ndarray( x.length, x, 1, 0, accessor );
	* // returns -10.0
	*/
	minBy: typeof minBy;

	/**
	* Computes the minimum absolute value of a strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns minimum absolute value
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.minabs( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.minabs.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	minabs: typeof minabs;

	/**
	* Computes the minimum value of a sorted strided array.
	*
	* @param N - number of indexed elements
	* @param x - sorted input array
	* @param strideX - stride length
	* @returns minimum value
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0 ];
	*
	* var v = ns.minsorted( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0 ];
	*
	* var v = ns.minsorted.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	minsorted: typeof minsorted;

	/**
	* Computes the maximum value of a strided array according to a mask.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param mask - mask array
	* @param strideMask - stride length for `mask`
	* @returns maximum value
	*
	* @example
	* var x = [ 1.0, -2.0, 4.0, 2.0 ];
	* var mask = [ 0, 0, 1, 0 ];
	*
	* var v = ns.mskmax( x.length, x, 1, mask, 1 );
	* // returns 2.0
	*
	* @example
	* var x = [ 1.0, -2.0, 4.0, 2.0 ];
	* var mask = [ 0, 0, 1, 0 ];
	*
	* var v = ns.mskmax.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns 2.0
	*/
	mskmax: typeof mskmax;

	/**
	* Computes the maximum absolute value of a strided array according to a mask.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param mask - mask array
	* @param strideMask - stride length for `mask`
	* @returns maximum absolute value
	*
	* @example
	* var x = [ 1.0, -2.0, 4.0, 2.0 ];
	* var mask = [ 0, 0, 1, 0 ];
	*
	* var v = ns.mskmaxabs( x.length, x, 1, mask, 1 );
	* // returns 2.0
	*
	* @example
	* var x = [ 1.0, -2.0, 4.0, 2.0 ];
	* var mask = [ 0, 0, 1, 0 ];
	*
	* var v = ns.mskmaxabs.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns 2.0
	*/
	mskmaxabs: typeof mskmaxabs;

	/**
	* Computes the mid-range of a strided array according to a mask.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param mask - mask array
	* @param strideMask - stride length for `mask`
	* @returns mid-range
	*
	* @example
	* var x = [ 1.0, -2.0, 4.0, 2.0 ];
	* var mask = [ 0, 0, 1, 0 ];
	*
	* var v = ns.mskmidrange( x.length, x, 1, mask, 1 );
	* // returns 0.0
	*
	* @example
	* var x = [ 1.0, -2.0, 4.0, 2.0 ];
	* var mask = [ 0, 0, 1, 0 ];
	*
	* var v = ns.mskmidrange.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns 0.0
	*/
	mskmidrange: typeof mskmidrange;

	/**
	* Computes the minimum value of a strided array according to a mask.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param mask - mask array
	* @param strideMask - stride length for `mask`
	* @returns minimum value
	*
	* @example
	* var x = [ 1.0, -2.0, -4.0, 2.0 ];
	* var mask = [ 0, 0, 1, 0 ];
	*
	* var v = ns.mskmin( x.length, x, 1, mask, 1 );
	* // returns -2.0
	*
	* @example
	* var x = [ 1.0, -2.0, -4.0, 2.0 ];
	* var mask = [ 0, 0, 1, 0 ];
	*
	* var v = ns.mskmin.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns -2.0
	*/
	mskmin: typeof mskmin;

	/**
	* Computes the range of a strided array according to a mask.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param mask - mask array
	* @param strideMask - stride length for `mask`
	* @returns range
	*
	* @example
	* var x = [ 1.0, -2.0, 4.0, 2.0 ];
	* var mask = [ 0, 0, 1, 0 ];
	*
	* var v = ns.mskrange( x.length, x, 1, mask, 1 );
	* // returns 4.0
	*
	* @example
	* var x = [ 1.0, -2.0, 4.0, 2.0 ];
	* var mask = [ 0, 0, 1, 0 ];
	*
	* var v = ns.mskrange.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns 4.0
	*/
	mskrange: typeof mskrange;

	/**
	* Computes the maximum value of a strided array, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns maximum value
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanmax( x.length, x, 1 );
	* // returns 2.0
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanmax.ndarray( x.length, x, 1, 0 );
	* // returns 2.0
	*/
	nanmax: typeof nanmax;

	/**
	* Computes the maximum value of a strided array via a callback function, ignoring `NaN` values.
	*
	* ## Notes
	*
	* -   The callback function is provided four arguments:
	*
	*     -   `value`: array element
	*     -   `aidx`: array index
	*     -   `sidx`: strided index (offset + aidx*stride)
	*     -   `array`: input array
	*
	* -   The callback function should return a numeric value.
	*
	* -   If the callback function does not return any value (or equivalently, explicitly returns `undefined`), the value is ignored.
	*
	* -   If the callback function returns `NaN`, the value is ignored.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
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
	* var v = ns.nanmaxBy( x.length, x, 1, accessor );
	* // returns 8.0
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, NaN, 0.0, -1.0, -3.0 ];
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var v = ns.nanmaxBy.ndarray( x.length, x, 1, 0, accessor );
	* // returns 8.0
	*/
	nanmaxBy: typeof nanmaxBy;

	/**
	* Computes the maximum absolute value of a strided array, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns maximum absolute value
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanmaxabs( x.length, x, 1 );
	* // returns 2.0
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanmaxabs.ndarray( x.length, x, 1, 0 );
	* // returns 2.0
	*/
	nanmaxabs: typeof nanmaxabs;

	/**
	* Computes the arithmetic mean of a strided array, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanmean( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanmean.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	nanmean: typeof nanmean;

	/**
	* Computes the arithmetic mean of a strided array, ignoring `NaN` values and using ordinary recursive summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanmeanors( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanmeanors.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	nanmeanors: typeof nanmeanors;

	/**
	* Computes the arithmetic mean of a strided array, ignoring `NaN` values and using a two-pass error correction algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanmeanpn( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanmeanpn.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	nanmeanpn: typeof nanmeanpn;

	/**
	* Computes the arithmetic mean of a strided array, ignoring `NaN` values and using Welford's algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanmeanwd( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanmeanwd.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	nanmeanwd: typeof nanmeanwd;

	/**
	* Computes the mid-range of a strided array, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns mid-range
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0, NaN ];
	*
	* var v = ns.nanmidrange( x.length, x, 1 );
	* // returns 0.0
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0, NaN ];
	*
	* var v = ns.nanmidrange.ndarray( x.length, x, 1, 0 );
	* // returns 0.0
	*/
	nanmidrange: typeof nanmidrange;

	/**
	* Computes the mid-range of a strided array via a callback function, ignoring `NaN` values.
	*
	* ## Notes
	*
	* -   The callback function is provided four arguments:
	*
	*     -   `value`: array element
	*     -   `aidx`: array index
	*     -   `sidx`: strided index (offset + aidx*stride)
	*     -   `array`: input array
	*
	* -   The callback function should return a numeric value. If the callback function does not return any value (or equivalently, explicitly returns `undefined`), the value is ignored.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @param clbk - callback
	* @param thisArg - execution context
	* @returns mid-range
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var v = ns.nanmidrangeBy( x.length, x, 1, accessor );
	* // returns -1.0
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var v = ns.nanmidrangeBy.ndarray( x.length, x, 1, 0, accessor );
	* // returns -1.0
	*/
	nanmidrangeBy: typeof nanmidrangeBy;

	/**
	* Computes the minimum value of a strided array, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns minimum value
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanmin( x.length, x, 1 );
	* // returns -2.0
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanmin.ndarray( x.length, x, 1, 0 );
	* // returns -2.0
	*/
	nanmin: typeof nanmin;

	/**
	* Computes the minimum value of a strided array via a callback function, ignoring `NaN` values.
	*
	* ## Notes
	*
	* -   The callback function is provided four arguments:
	*
	*     -   `value`: array element
	*     -   `aidx`: array index
	*     -   `sidx`: strided index (offset + aidx*stride)
	*     -   `array`: input array
	*
	* -   The callback function should return a numeric value.
	*
	* -   If the callback function does not return any value (or equivalently, explicitly returns `undefined`), the value is ignored.
	*
	* -   If the callback function returns `NaN`, the value is ignored.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
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
	* var v = ns.nanminBy( x.length, x, 1, accessor );
	* // returns -10.0
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, NaN, 0.0, -1.0, -3.0 ];
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var v = ns.nanminBy.ndarray( x.length, x, 1, 0, accessor );
	* // returns -10.0
	*/
	nanminBy: typeof nanminBy;

	/**
	* Computes the minimum absolute value of a strided array, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns minimum absolute value
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanminabs( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanminabs.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	nanminabs: typeof nanminabs;

	/**
	* Computes the maximum value of a strided array according to a mask, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param mask - mask array
	* @param strideMask - stride length for `mask`
	* @returns maximum value
	*
	* @example
	* var x = [ 1.0, -2.0, 4.0, 2.0, NaN ];
	* var mask = [ 0, 0, 1, 0, 0 ];
	*
	* var v = ns.nanmskmax( x.length, x, 1, mask, 1 );
	* // returns 2.0
	*
	* @example
	* var x = [ 1.0, -2.0, 4.0, 2.0, NaN ];
	* var mask = [ 0, 0, 1, 0, 0 ];
	*
	* var v = ns.nanmskmax.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns 2.0
	*/
	nanmskmax: typeof nanmskmax;

	/**
	* Computes the mid-range of a strided array according to a mask, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param mask - mask array
	* @param strideMask - stride length for `mask`
	* @returns mid-range
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 4.0, 2.0 ];
	* var mask = [ 0, 0, 0, 1, 0 ];
	*
	* var v = ns.nanmskmidrange( x.length, x, 1, mask, 1 );
	* // returns 0.0
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 4.0, 2.0 ];
	* var mask = [ 0, 0, 0, 1, 0 ];
	*
	* var v = ns.nanmskmidrange.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns 0.0
	*/
	nanmskmidrange: typeof nanmskmidrange;

	/**
	* Computes the minimum value of a strided array according to a mask, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param mask - mask array
	* @param strideMask - stride length for `mask`
	* @returns minimum value
	*
	* @example
	* var x = [ 1.0, -2.0, -4.0, 2.0, NaN ];
	* var mask = [ 0, 0, 1, 0, 0 ];
	*
	* var v = ns.nanmskmin( x.length, x, 1, mask, 1 );
	* // returns -2.0
	*
	* @example
	* var x = [ 1.0, -2.0, -4.0, 2.0, NaN ];
	* var mask = [ 0, 0, 1, 0, 0 ];
	*
	* var v = ns.nanmskmin.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns -2.0
	*/
	nanmskmin: typeof nanmskmin;

	/**
	* Computes the range of a strided array according to a mask, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param mask - mask array
	* @param strideMask - stride length for `x`
	* @returns range
	*
	* @example
	* var x = [ 1.0, -2.0, 4.0, 2.0, NaN ];
	* var mask = [ 0, 0, 1, 0, 0 ];
	*
	* var v = ns.nanmskrange( x.length, x, 1, mask, 1 );
	* // returns 4.0
	*
	* @example
	* var x = [ 1.0, -2.0, 4.0, 2.0, NaN ];
	* var mask = [ 0, 0, 1, 0, 0 ];
	*
	* var v = ns.nanmskrange.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns 4.0
	*/
	nanmskrange: typeof nanmskrange;

	/**
	* Computes the range of a strided array, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns range
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanrange( x.length, x, 1 );
	* // returns 4.0
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanrange.ndarray( x.length, x, 1, 0 );
	* // returns 4.0
	*/
	nanrange: typeof nanrange;

	/**
	* Computes the range of a strided array via a callback function, ignoring `NaN` values.
	*
	* ## Notes
	*
	* -   The callback function is provided four arguments:
	*
	*     -   `value`: array element
	*     -   `aidx`: array index
	*     -   `sidx`: strided index (offset + aidx*stride)
	*     -   `array`: input array
	*
	* -   The callback function should return a numeric value.
	*
	* -   If the callback function does not return any value (or equivalently, explicitly returns `undefined`), the value is ignored.
	*
	* -   If the callback function returns `NaN`, the value is ignored.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
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
	* var v = ns.nanrangeBy( x.length, x, 1, accessor );
	* // returns 18.0
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, NaN, 0.0, -1.0, -3.0 ];
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var v = ns.nanrangeBy.ndarray( x.length, x, 1, 0, accessor );
	* // returns 18.0
	*/
	nanrangeBy: typeof nanrangeBy;

	/**
	* Computes the standard deviation of a strided array ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanstdev( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanstdev.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	nanstdev: typeof nanstdev;

	/**
	* Computes the standard deviation of a strided array ignoring `NaN` values and using a one-pass trial mean algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanstdevch( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanstdevch.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	nanstdevch: typeof nanstdevch;

	/**
	* Computes the standard deviation of a strided array ignoring `NaN` values and using a two-pass algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanstdevpn( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanstdevpn.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	nanstdevpn: typeof nanstdevpn;

	/**
	* Computes the standard deviation of a strided array ignoring `NaN` values and using a one-pass textbook algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanstdevtk( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanstdevtk.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	nanstdevtk: typeof nanstdevtk;

	/**
	* Computes the standard deviation of a strided array ignoring `NaN` values and using Welford's algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanstdevwd( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanstdevwd.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	nanstdevwd: typeof nanstdevwd;

	/**
	* Computes the standard deviation of a strided array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanstdevyc( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanstdevyc.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	nanstdevyc: typeof nanstdevyc;

	/**
	* Computes the variance of a strided array ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanvariance( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanvariance.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	nanvariance: typeof nanvariance;

	/**
	* Computes the variance of a strided array ignoring `NaN` values and using a one-pass trial mean algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanvariancech( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanvariancech.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	nanvariancech: typeof nanvariancech;

	/**
	* Computes the variance of a strided array ignoring `NaN` values and using a two-pass algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanvariancepn( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanvariancepn.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	nanvariancepn: typeof nanvariancepn;

	/**
	* Computes the variance of a strided array ignoring `NaN` values and using a one-pass textbook algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanvariancetk( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanvariancetk.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	nanvariancetk: typeof nanvariancetk;

	/**
	* Computes the variance of a strided array ignoring `NaN` values and using Welford's algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanvariancewd( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanvariancewd.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	nanvariancewd: typeof nanvariancewd;

	/**
	* Computes the variance of a strided array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanvarianceyc( x.length, 1.0, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var x = [ 1.0, -2.0, NaN, 2.0 ];
	*
	* var v = ns.nanvarianceyc.ndarray( x.length, 1.0, x, 1, 0 );
	* // returns ~4.3333
	*/
	nanvarianceyc: typeof nanvarianceyc;

	/**
	* Computes the range of a strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns range
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.range( x.length, x, 1 );
	* // returns 4.0
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.range.ndarray( x.length, x, 1, 0 );
	* // returns 4.0
	*/
	range: typeof range;

	/**
	* Computes the range of a strided array via a callback function.
	*
	* ## Notes
	*
	* -   The callback function is provided four arguments:
	*
	*     -   `value`: array element
	*     -   `aidx`: array index
	*     -   `sidx`: strided index (offset + aidx*stride)
	*     -   `array`: input array
	*
	* -   The callback function should return a numeric value. If the callback function does not return any value (or equivalently, explicitly returns `undefined`), the value is ignored.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
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
	* var v = ns.rangeBy( x.length, x, 1, accessor );
	* // returns 18.0
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var v = ns.rangeBy.ndarray( x.length, x, 1, 0, accessor );
	* // returns 18.0
	*/
	rangeBy: typeof rangeBy;

	/**
	* Computes the range of absolute values of a strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns range of absolute values
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.rangeabs( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.rangeabs.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	rangeabs: typeof rangeabs;

	/**
	* Computes the covariance of two single-precision floating-point strided arrays provided known means and using a one-pass textbook algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param meanx - mean of `x`
	* @param x - first input array
	* @param strideX - stride length of `x`
	* @param meany - mean of `y`
	* @param y - second input array
	* @param strideY - stride length of `y`
	* @returns covariance
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float32Array( [ 2.0, -2.0, 1.0 ] );
	*
	* var v = ns.scovarmtk( x.length, 1, 1.0/3.0, x, 1, 1.0/3.0, y, 1 );
	* // returns ~3.8333
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float32Array( [ 2.0, -2.0, 1.0 ] );
	*
	* var v = ns.scovarmtk.ndarray( x.length, 1, 1.0/3.0, x, 1, 0, 1.0/3.0, y, 1, 0 );
	* // returns ~3.8333
	*/
	scovarmtk: typeof scovarmtk;

	/**
	* Computes the cumulative maximum of single-precision floating-point strided array elements.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - output array
	* @param strideY - `y` stride length
	* @returns output array
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float32Array( x.length );
	*
	* ns.scumax( x.length, x, 1, y, 1 );
	* // y => <Float32Array>[ 1.0, 1.0, 2.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float32Array( x.length );
	*
	* ns.scumax.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ 1.0, 1.0, 2.0 ]
	*/
	scumax: typeof scumax;

	/**
	* Computes the cumulative maximum absolute value of single-precision floating-point strided array elements.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - output array
	* @param strideY - `y` stride length
	* @returns output array
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float32Array( x.length );
	*
	* ns.scumaxabs( x.length, x, 1, y, 1 );
	* // y => <Float32Array>[ 1.0, 2.0, 2.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float32Array( x.length );
	*
	* ns.scumaxabs.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ 1.0, 2.0, 2.0 ]
	*/
	scumaxabs: typeof scumaxabs;

	/**
	* Computes the cumulative minimum of single-precision floating-point strided array elements.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - output array
	* @param strideY - `y` stride length
	* @returns output array
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float32Array( x.length );
	*
	* ns.scumin( x.length, x, 1, y, 1 );
	* // y => <Float32Array>[ 1.0, -2.0, -2.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float32Array( x.length );
	*
	* ns.scumin.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ 1.0, -2.0, -2.0 ]
	*/
	scumin: typeof scumin;

	/**
	* Computes the cumulative minimum absolute value of single-precision floating-point strided array elements.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - output array
	* @param strideY - `y` stride length
	* @returns output array
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float32Array( x.length );
	*
	* ns.scuminabs( x.length, x, 1, y, 1 );
	* // y => <Float32Array>[ 1.0, 1.0, 1.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	* var y = new Float32Array( x.length );
	*
	* ns.scuminabs.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ 1.0, 1.0, 1.0 ]
	*/
	scuminabs: typeof scuminabs;

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array using extended accumulation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sdsmean( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sdsmean.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	sdsmean: typeof sdsmean;

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array using ordinary recursive summation with extended accumulation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sdsmeanors( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sdsmeanors.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	sdsmeanors: typeof sdsmeanors;

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using ordinary recursive summation with extended accumulation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.sdsnanmeanors( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.sdsnanmeanors.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	sdsnanmeanors: typeof sdsnanmeanors;

	/**
	* Computes the maximum value of a single-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns maximum value
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smax( x.length, x, 1 );
	* // returns 2.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smax.ndarray( x.length, x, 1, 0 );
	* // returns 2.0
	*/
	smax: typeof smax;

	/**
	* Computes the maximum absolute value of a single-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns maximum absolute value
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smaxabs( x.length, x, 1 );
	* // returns 2.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smaxabs.ndarray( x.length, x, 1, 0 );
	* // returns 2.0
	*/
	smaxabs: typeof smaxabs;

	/**
	* Computes the maximum absolute value of a sorted single-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - sorted input array
	* @param stride - stride length
	* @returns maximum absolute value
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ -1.0, -2.0, -3.0 ] );
	*
	* var v = ns.smaxabssorted( x.length, x, 1 );
	* // returns 3.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ -1.0, -2.0, -3.0 ] );
	*
	* var v = ns.smaxabssorted.ndarray( x.length, x, 1, 0 );
	* // returns 3.0
	*/
	smaxabssorted: typeof smaxabssorted;

	/**
	* Computes the maximum value of a sorted single-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - sorted input array
	* @param strideX - stride length
	* @returns maximum value
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	*
	* var v = ns.smaxsorted( x.length, x, 1 );
	* // returns 3.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	*
	* var v = ns.smaxsorted.ndarray( x.length, x, 1, 0 );
	* // returns 3.0
	*/
	smaxsorted: typeof smaxsorted;

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smean( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smean.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	smean: typeof smean;

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array using an improved Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smeankbn( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smeankbn.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	smeankbn: typeof smeankbn;

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array using a second-order iterative Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smeankbn2( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smeankbn2.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	smeankbn2: typeof smeankbn2;

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array using a one-pass trial mean algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smeanli( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smeanli.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	smeanli: typeof smeanli;

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array using a one-pass trial mean algorithm with pairwise summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smeanlipw( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smeanlipw.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	smeanlipw: typeof smeanlipw;

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array using ordinary recursive summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smeanors( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smeanors.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	smeanors: typeof smeanors;

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array using a two-pass error correction algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smeanpn( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smeanpn.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	smeanpn: typeof smeanpn;

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array using pairwise summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smeanpw( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smeanpw.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	smeanpw: typeof smeanpw;

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array using Welford's algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smeanwd( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smeanwd.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	smeanwd: typeof smeanwd;

	/**
	* Computes the median value of a sorted single-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - sorted input array
	* @param strideX - stride length
	* @returns median value
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	*
	* var v = ns.smediansorted( x.length, x, 1 );
	* // returns 2.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	*
	* var v = ns.smediansorted.ndarray( x.length, x, 1, 0 );
	* // returns 2.0
	*/
	smediansorted: typeof smediansorted;

	/**
	* Computes the mid-range of a single-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns mid-range
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smidrange( x.length, x, 1 );
	* // returns 0.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smidrange.ndarray( x.length, x, 1, 0 );
	* // returns 0.0
	*/
	smidrange: typeof smidrange;

	/**
	* Computes the minimum value of a single-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns minimum value
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smin( x.length, x, 1 );
	* // returns -2.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.smin.ndarray( x.length, x, 1, 0 );
	* // returns -2.0
	*/
	smin: typeof smin;

	/**
	* Computes the minimum absolute value of a single-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns minimum absolute value
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sminabs( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sminabs.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	sminabs: typeof sminabs;

	/**
	* Computes the minimum value of a sorted single-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - sorted input array
	* @param strideX - stride length
	* @returns minimum value
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	*
	* var v = ns.sminsorted( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	*
	* var v = ns.sminsorted.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	sminsorted: typeof sminsorted;

	/**
	* Computes the maximum value of a single-precision floating-point strided array according to a mask.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @returns maximum value
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 4.0, 2.0 ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0 ] );
	*
	* var v = ns.smskmax( x.length, x, 1, mask, 1 );
	* // returns 2.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 4.0, 2.0 ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0 ] );
	*
	* var v = ns.smskmax.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns 2.0
	*/
	smskmax: typeof smskmax;

	/**
	* Computes the maximum absolute value of a single-precision floating-point strided array according to a mask.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @returns maximum absolute value
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 4.0, 2.0 ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0 ] );
	*
	* var v = ns.smskmaxabs( x.length, x, 1, mask, 1 );
	* // returns 2.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 4.0, 2.0 ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0 ] );
	*
	* var v = ns.smskmaxabs.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns 2.0
	*/
	smskmaxabs: typeof smskmaxabs;

	/**
	* Computes the mid-range of a single-precision floating-point strided array according to a mask.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @returns mid-range
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 4.0, 2.0 ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0 ] );
	*
	* var v = ns.smskmidrange( x.length, x, 1, mask, 1 );
	* // returns 0.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 4.0, 2.0 ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0 ] );
	*
	* var v = ns.smskmidrange.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns 0.0
	*/
	smskmidrange: typeof smskmidrange;

	/**
	* Computes the minimum value of a single-precision floating-point strided array according to a mask.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @returns minimum value
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, -4.0, 2.0 ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0 ] );
	*
	* var v = ns.smskmin( x.length, x, 1, mask, 1 );
	* // returns -2.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, -4.0, 2.0 ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0 ] );
	*
	* var v = ns.smskmin.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns -2.0
	*/
	smskmin: typeof smskmin;

	/**
	* Computes the range of a single-precision floating-point strided array according to a mask.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @returns range
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 4.0, 2.0 ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0 ] );
	*
	* var v = ns.smskrange( x.length, x, 1, mask, 1 );
	* // returns 4.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 4.0, 2.0 ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0 ] );
	*
	* var v = ns.smskrange.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns 4.0
	*/
	smskrange: typeof smskrange;

	/**
	* Computes the maximum value of a single-precision floating-point strided array, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns maximum value
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanmax( x.length, x, 1 );
	* // returns 2.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanmax.ndarray( x.length, x, 1, 0 );
	* // returns 2.0
	*/
	snanmax: typeof snanmax;

	/**
	* Computes the maximum absolute value of a single-precision floating-point strided array, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns maximum absolute value
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanmaxabs( x.length, x, 1 );
	* // returns 2.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanmaxabs.ndarray( x.length, x, 1, 0 );
	* // returns 2.0
	*/
	snanmaxabs: typeof snanmaxabs;

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanmean( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanmean.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	snanmean: typeof snanmean;

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using ordinary recursive summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanmeanors( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanmeanors.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	snanmeanors: typeof snanmeanors;

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using a two-pass error correction algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanmeanpn( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanmeanpn.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	snanmeanpn: typeof snanmeanpn;

	/**
	* Computes the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using Welford's algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanmeanwd( x.length, x, 1 );
	* // returns ~0.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanmeanwd.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	snanmeanwd: typeof snanmeanwd;

	/**
	* Computes the mid-range of a single-precision floating-point strided array, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns mid-range
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanmidrange( x.length, x, 1 );
	* // returns 0.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanmidrange.ndarray( x.length, x, 1, 0 );
	* // returns 0.0
	*/
	snanmidrange: typeof snanmidrange;

	/**
	* Computes the minimum value of a single-precision floating-point strided array, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns minimum value
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanmin( x.length, x, 1 );
	* // returns -2.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanmin.ndarray( x.length, x, 1, 0 );
	* // returns -2.0
	*/
	snanmin: typeof snanmin;

	/**
	* Computes the minimum absolute value of a single-precision floating-point strided array, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns minimum absolute value
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanminabs( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanminabs.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	snanminabs: typeof snanminabs;

	/**
	* Computes the maximum value of a single-precision floating-point strided array according to a mask, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @returns maximum value
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 4.0, 2.0, NaN ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	*
	* var v = ns.snanmskmax( x.length, x, 1, mask, 1 );
	* // returns 2.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 4.0, 2.0, NaN ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	*
	* var v = ns.snanmskmax.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns 2.0
	*/
	snanmskmax: typeof snanmskmax;

	/**
	* Computes the mid-range of a single-precision floating-point strided array according to a mask, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @returns mid-range
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 4.0, 2.0, NaN ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	*
	* var v = ns.snanmskmidrange( x.length, x, 1, mask, 1 );
	* // returns 0.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 4.0, 2.0, NaN ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	*
	* var v = ns.snanmskmidrange.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns 0.0
	*/
	snanmskmidrange: typeof snanmskmidrange;

	/**
	* Computes the minimum value of a single-precision floating-point strided array according to a mask, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @returns minimum value
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, -4.0, 2.0, NaN ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	*
	* var v = ns.snanmskmin( x.length, x, 1, mask, 1 );
	* // returns -2.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, -4.0, 2.0, NaN ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	*
	* var v = ns.snanmskmin.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns -2.0
	*/
	snanmskmin: typeof snanmskmin;

	/**
	* Computes the range of a single-precision floating-point strided array according to a mask, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @returns range
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 4.0, 2.0, NaN ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	*
	* var v = ns.snanmskrange( x.length, x, 1, mask, 1 );
	* // returns 4.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 4.0, 2.0, NaN ] );
	* var mask = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	*
	* var v = ns.snanmskrange.ndarray( x.length, x, 1, 0, mask, 1, 0 );
	* // returns 4.0
	*/
	snanmskrange: typeof snanmskrange;

	/**
	* Computes the range of a single-precision floating-point strided array, ignoring `NaN` values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns range
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanrange( x.length, x, 1 );
	* // returns 4.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.snanrange.ndarray( x.length, x, 1, 0 );
	* // returns 4.0
	*/
	snanrange: typeof snanrange;

	/**
	* Computes the range of a single-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns range
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.srange( x.length, x, 1 );
	* // returns 4.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.srange.ndarray( x.length, x, 1, 0 );
	* // returns 4.0
	*/
	srange: typeof srange;

	/**
	* Computes the range of absolute values of a single-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns range
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.srangeabs( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.srangeabs.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	srangeabs: typeof srangeabs;

	/**
	* Computes the standard deviation of a single-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard deviation
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sstdev( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sstdev.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	sstdev: typeof sstdev;

	/**
	* Computes the standard deviation of a single-precision floating-point strided array using a one-pass trial mean algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard deviation
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sstdevch( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sstdevch.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	sstdevch: typeof sstdevch;

	/**
	* Computes the standard deviation of a single-precision floating-point strided array using a two-pass algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard deviation
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sstdevpn( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sstdevpn.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	sstdevpn: typeof sstdevpn;

	/**
	* Computes the standard deviation of a single-precision floating-point strided array using a one-pass textbook algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard deviation
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sstdevtk( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sstdevtk.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	sstdevtk: typeof sstdevtk;

	/**
	* Computes the standard deviation of a single-precision floating-point strided array using Welford's algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard deviation
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sstdevwd( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sstdevwd.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	sstdevwd: typeof sstdevwd;

	/**
	* Computes the standard deviation of a single-precision floating-point strided array using a one-pass algorithm proposed by Youngs and Cramer.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard deviation
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sstdevyc( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.sstdevyc.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	sstdevyc: typeof sstdevyc;

	/**
	* Computes the standard deviation of a strided array.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.stdev( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.stdev.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	stdev: typeof stdev;

	/**
	* Computes the standard deviation of a strided array using a one-pass trial mean algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.stdevch( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.stdevch.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	stdevch: typeof stdevch;

	/**
	* Computes the standard deviation of a strided array using a two-pass algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.stdevpn( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.stdevpn.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	stdevpn: typeof stdevpn;

	/**
	* Computes the standard deviation of a strided array using a one-pass textbook algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.stdevtk( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.stdevtk.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	stdevtk: typeof stdevtk;

	/**
	* Computes the standard deviation of a strided array using Welford's algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.stdevwd( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.stdevwd.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	stdevwd: typeof stdevwd;

	/**
	* Computes the standard deviation of a strided array using a one-pass algorithm proposed by Youngs and Cramer.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.stdevyc( x.length, 1, x, 1 );
	* // returns ~2.0817
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.stdevyc.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	stdevyc: typeof stdevyc;

	/**
	* Computes the variance of a single-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.svariance( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.svariance.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	svariance: typeof svariance;

	/**
	* Computes the variance of a single-precision floating-point strided array using a one-pass trial mean algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.svariancech( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.svariancech.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	svariancech: typeof svariancech;

	/**
	* Computes the variance of a single-precision floating-point strided array using a two-pass algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.svariancepn( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.svariancepn.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	svariancepn: typeof svariancepn;

	/**
	* Computes the variance of a single-precision floating-point strided array using a one-pass textbook algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.svariancetk( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.svariancetk.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	svariancetk: typeof svariancetk;

	/**
	* Computes the variance of a single-precision floating-point strided array using Welford's algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.svariancewd( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.svariancewd.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	svariancewd: typeof svariancewd;

	/**
	* Computes the variance of a single-precision floating-point strided array using a one-pass algorithm proposed by Youngs and Cramer.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.svarianceyc( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.svarianceyc.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	svarianceyc: typeof svarianceyc;

	/**
	* Computes a one-sample Z-test for a single-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param alternative - alternative hypothesis
	* @param alpha - significance level
	* @param mu - mean under the null hypothesis
	* @param sigma - known standard deviation
	* @param x - input array
	* @param strideX - stride length
	* @param out - output results object
	* @returns results object
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Results = require( './../../../base/ztest/one-sample/results/float32' );
	*
	* var x = new Float32Array( [ 4.0, 4.0, 6.0, 6.0, 5.0 ] );
	*
	* var results = new Results();
	* var out = ns.sztest( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, results );
	* // returns {...}
	*
	* var bool = ( out === results );
	* // returns true
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Results = require( './../../../base/ztest/one-sample/results/float32' );
	*
	* var x = new Float32Array( [ 4.0, 4.0, 6.0, 6.0, 5.0 ] );
	*
	* var results = new Results();
	* var out = ns.sztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, results );
	* // returns {...}
	*
	* var bool = ( out === results );
	* // returns true
	*/
	sztest: typeof sztest;

	/**
	* Computes a two-sample Z-test for two single-precision floating-point strided arrays.
	*
	* @param NX - number of indexed elements in `x`
	* @param NY - number of indexed elements in `y`
	* @param alternative - alternative hypothesis
	* @param alpha - significance level
	* @param diff - difference in means under the null hypothesis
	* @param sigmax - known standard deviation of `x`
	* @param x - first input array
	* @param strideX - stride length for `x`
	* @param sigmay - known standard deviation of `y`
	* @param y - second input array
	* @param strideY - stride length for `y`
	* @param out - output results object
	* @returns results object
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Results = require( './../../../base/ztest/two-sample/results/float32' );
	*
	* var x = new Float32Array( [ 4.0, 4.0, 6.0, 6.0, 5.0 ] );
	* var y = new Float32Array( [ 3.0, 3.0, 5.0, 7.0, 7.0 ] );
	*
	* var results = new Results();
	* var out = ns.sztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 2.0, y, 1, results );
	* // returns {...}
	*
	* var bool = ( out === results );
	* // returns true
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Results = require( './../../../base/ztest/two-sample/results/float32' );
	*
	* var x = new Float32Array( [ 4.0, 4.0, 6.0, 6.0, 5.0 ] );
	* var y = new Float32Array( [ 3.0, 3.0, 5.0, 7.0, 7.0 ] );
	*
	* var results = new Results();
	* var out = ns.sztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 2.0, y, 1, 0, results );
	* // returns {...}
	*
	* var bool = ( out === results );
	* // returns true
	*/
	sztest2: typeof sztest2;

	/**
	* Computes the variance of a strided array.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.variance( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.variance.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	variance: typeof variance;

	/**
	* Computes the variance of a strided array using a one-pass trial mean algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.variancech( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.variancech.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	variancech: typeof variancech;

	/**
	* Computes the variance of a strided array using a two-pass algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.variancepn( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.variancepn.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	variancepn: typeof variancepn;

	/**
	* Computes the variance of a strided array using a one-pass textbook algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.variancetk( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.variancetk.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	variancetk: typeof variancetk;

	/**
	* Computes the variance of a strided array using Welford's algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.variancewd( x.length, 1, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.variancewd.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~4.3333
	*/
	variancewd: typeof variancewd;

	/**
	* Computes the variance of a strided array using a one-pass algorithm proposed by Youngs and Cramer.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length for `x`
	* @returns variance
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.varianceyc( x.length, 1.0, x, 1 );
	* // returns ~4.3333
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = ns.varianceyc.ndarray( x.length, 1.0, x, 1, 0 );
	* // returns ~4.3333
	*/
	varianceyc: typeof varianceyc;

	/**
	* Computes a one-sample Z-test for a strided array.
	*
	* @param N - number of indexed elements
	* @param alternative - alternative hypothesis
	* @param alpha - significance level
	* @param mu - mean under the null hypothesis
	* @param sigma - known standard deviation
	* @param x - input array
	* @param strideX - stride length
	* @param out - output results object
	* @returns results object
	*
	* @example
	* var Results = require( './../../../base/ztest/one-sample/results/float64' );
	*
	* var x = [ 4.0, 4.0, 6.0, 6.0, 5.0 ];
	*
	* var results = new Results();
	* var out = ns.ztest( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, results );
	* // returns {...}
	*
	* var bool = ( out === results );
	* // returns true
	*
	* @example
	* var Results = require( './../../../base/ztest/one-sample/results/float64' );
	*
	* var x = [ 4.0, 4.0, 6.0, 6.0, 5.0 ];
	*
	* var results = new Results();
	* var out = ns.ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, results );
	* // returns {...}
	*
	* var bool = ( out === results );
	* // returns true
	*/
	ztest: typeof ztest;

	/**
	* Computes a two-sample Z-test.
	*
	* @param NX - number of indexed elements in `x`
	* @param NY - number of indexed elements in `y`
	* @param alternative - alternative hypothesis
	* @param alpha - significance level
	* @param diff - difference in means under the null hypothesis
	* @param sigmax - known standard deviation of `x`
	* @param x - first input array
	* @param strideX - stride length for `x`
	* @param sigmay - known standard deviation of `y`
	* @param y - second input array
	* @param strideY - stride length for `y`
	* @param out - output results object
	* @returns results object
	*
	* @example
	* var Results = require( './../../../base/ztest/two-sample/results/float64' );
	*
	* var x = [ 4.0, 4.0, 6.0, 6.0, 5.0 ];
	* var y = [ 3.0, 3.0, 5.0, 7.0, 7.0 ];
	*
	* var results = new Results();
	* var out = ns.ztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 2.0, y, 1, results );
	* // returns {...}
	*
	* var bool = ( out === results );
	* // returns true
	*
	* @example
	* var Results = require( './../../../base/ztest/two-sample/results/float64' );
	*
	* var x = [ 4.0, 4.0, 6.0, 6.0, 5.0 ];
	* var y = [ 3.0, 3.0, 5.0, 7.0, 7.0 ];
	*
	* var results = new Results();
	* var out = ns.ztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 2.0, y, 1, 0, results );
	* // returns {...}
	*
	* var bool = ( out === results );
	* // returns true
	*/
	ztest2: typeof ztest2;
}

/**
* Statistical operations for strided arrays.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
