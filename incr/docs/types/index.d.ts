/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import incrapcorr = require( './../../../incr/apcorr' );
import incrcount = require( './../../../incr/count' );
import incrcovariance = require( './../../../incr/covariance' );
import incrcovmat = require( './../../../incr/covmat' );
import incrcv = require( './../../../incr/cv' );
import increwmean = require( './../../../incr/ewmean' );
import increwstdev = require( './../../../incr/ewstdev' );
import increwvariance = require( './../../../incr/ewvariance' );
import incrgmean = require( './../../../incr/gmean' );
import incrgrubbs = require( './../../../incr/grubbs' );
import incrhmean = require( './../../../incr/hmean' );
import incrkurtosis = require( './../../../incr/kurtosis' );
import incrmaape = require( './../../../incr/maape' );
import incrmae = require( './../../../incr/mae' );
import incrmapcorr = require( './../../../incr/mapcorr' );
import incrmape = require( './../../../incr/mape' );
import incrmax = require( './../../../incr/max' );
import incrmaxabs = require( './../../../incr/maxabs' );
import incrmcovariance = require( './../../../incr/mcovariance' );
import incrmcv = require( './../../../incr/mcv' );
import incrmda = require( './../../../incr/mda' );
import incrme = require( './../../../incr/me' );
import incrmean = require( './../../../incr/mean' );
import incrmeanabs = require( './../../../incr/meanabs' );
import incrmeanabs2 = require( './../../../incr/meanabs2' );
import incrmeanstdev = require( './../../../incr/meanstdev' );
import incrmeanvar = require( './../../../incr/meanvar' );
import incrmgmean = require( './../../../incr/mgmean' );
import incrmgrubbs = require( './../../../incr/mgrubbs' );
import incrmhmean = require( './../../../incr/mhmean' );
import incrmidrange = require( './../../../incr/midrange' );
import incrmin = require( './../../../incr/min' );
import incrminabs = require( './../../../incr/minabs' );
import incrminmax = require( './../../../incr/minmax' );
import incrminmaxabs = require( './../../../incr/minmaxabs' );
import incrmmaape = require( './../../../incr/mmaape' );
import incrmmae = require( './../../../incr/mmae' );
import incrmmape = require( './../../../incr/mmape' );
import incrmmax = require( './../../../incr/mmax' );
import incrmmaxabs = require( './../../../incr/mmaxabs' );
import incrmmda = require( './../../../incr/mmda' );
import incrmme = require( './../../../incr/mme' );
import incrmmean = require( './../../../incr/mmean' );
import incrmmeanabs = require( './../../../incr/mmeanabs' );
import incrmmeanabs2 = require( './../../../incr/mmeanabs2' );
import incrmmeanstdev = require( './../../../incr/mmeanstdev' );
import incrmmeanvar = require( './../../../incr/mmeanvar' );
import incrmmidrange = require( './../../../incr/mmidrange' );
import incrmmin = require( './../../../incr/mmin' );
import incrmminabs = require( './../../../incr/mminabs' );
import incrmminmax = require( './../../../incr/mminmax' );
import incrmminmaxabs = require( './../../../incr/mminmaxabs' );
import incrmmpe = require( './../../../incr/mmpe' );
import incrmmse = require( './../../../incr/mmse' );
import incrmpcorr = require( './../../../incr/mpcorr' );
import incrmpcorr2 = require( './../../../incr/mpcorr2' );
import incrmpcorrdist = require( './../../../incr/mpcorrdist' );
import incrmpe = require( './../../../incr/mpe' );
import incrmprod = require( './../../../incr/mprod' );
import incrmrange = require( './../../../incr/mrange' );
import incrmrmse = require( './../../../incr/mrmse' );
import incrmrss = require( './../../../incr/mrss' );
import incrmse = require( './../../../incr/mse' );
import incrmstdev = require( './../../../incr/mstdev' );
import incrmsum = require( './../../../incr/msum' );
import incrmsumabs = require( './../../../incr/msumabs' );
import incrmsumabs2 = require( './../../../incr/msumabs2' );
import incrmsummary = require( './../../../incr/msummary' );
import incrmsumprod = require( './../../../incr/msumprod' );
import incrmvariance = require( './../../../incr/mvariance' );
import incrmvmr = require( './../../../incr/mvmr' );
import incrnancount = require( './../../../incr/nancount' );
import incrnansum = require( './../../../incr/nansum' );
import incrnansumabs = require( './../../../incr/nansumabs' );
import incrnansumabs2 = require( './../../../incr/nansumabs2' );
import incrpcorr = require( './../../../incr/pcorr' );
import incrpcorr2 = require( './../../../incr/pcorr2' );
import incrpcorrdist = require( './../../../incr/pcorrdist' );
import incrpcorrdistmat = require( './../../../incr/pcorrdistmat' );
import incrpcorrmat = require( './../../../incr/pcorrmat' );
import incrprod = require( './../../../incr/prod' );
import incrrange = require( './../../../incr/range' );
import incrrmse = require( './../../../incr/rmse' );
import incrrss = require( './../../../incr/rss' );
import incrskewness = require( './../../../incr/skewness' );
import incrstdev = require( './../../../incr/stdev' );
import incrsum = require( './../../../incr/sum' );
import incrsumabs = require( './../../../incr/sumabs' );
import incrsumabs2 = require( './../../../incr/sumabs2' );
import incrsummary = require( './../../../incr/summary' );
import incrsumprod = require( './../../../incr/sumprod' );
import incrvariance = require( './../../../incr/variance' );
import incrvmr = require( './../../../incr/vmr' );
import incrwmean = require( './../../../incr/wmean' );

/**
* Interface describing the `incr` namespace.
*/
interface Namespace {
	/**
	* Returns an accumulator function which incrementally computes a sample absolute Pearson product-moment correlation coefficient.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrapcorr();
	*
	* var ar = accumulator();
	* // returns null
	*
	* ar = accumulator( 2.0, 1.0 );
	* // returns 0.0
	*
	* ar = accumulator( -5.0, 3.14 );
	* // returns ~1.0
	*
	* ar = accumulator();
	* // returns ~1.0
	*/
	incrapcorr: typeof incrapcorr;

	/**
	* Returns an accumulator function which incrementally computes a count.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrcount();
	*
	* var v = accumulator();
	* // returns null
	*
	* v = accumulator( 2.0 );
	* // returns 1
	*
	* v = accumulator( -5.0 );
	* // returns 2
	*
	* v = accumulator();
	* // returns 2
	*/
	incrcount: typeof incrcount;

	/**
	* Returns an accumulator function which incrementally computes an unbiased sample covariance.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrcovariance();
	*
	* var v = accumulator();
	* // returns null
	*
	* v = accumulator( 2.0, 1.0 );
	* // returns 0.0
	*
	* v = accumulator( -5.0, 3.14 );
	* // returns ~-7.49
	*
	* v = accumulator();
	* // returns ~-7.49
	*/
	incrcovariance: typeof incrcovariance;

	/**
	* Returns an accumulator function which incrementally computes an unbiased sample covariance matrix.
	*
	* @param out - order of the covariance matrix or a square 2-dimensional output ndarray for storing the covariance matrix
	* @param means - mean values
	* @throws first argument must be either a positive integer or a 2-dimensional ndarray having equal dimensions
	* @throws second argument must be a 1-dimensional ndarray
	* @throws number of means must match covariance matrix dimensions
	* @returns accumulator function
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var ndarray = require( '@stdlib/ndarray/ctor' );
	*
	* // Create an output covariance matrix:
	* var buffer = new Float64Array( 4 );
	* var shape = [ 2, 2 ];
	* var strides = [ 2, 1 ];
	* var offset = 0;
	* var order = 'row-major';
	*
	* var cov = ndarray( 'float64', buffer, shape, strides, offset, order );
	*
	* // Create a covariance matrix accumulator:
	* var accumulator = ns.incrcovmat( cov );
	*
	* var out = accumulator();
	* // returns null
	*
	* // Create a data vector:
	* buffer = new Float64Array( 2 );
	* shape = [ 2 ];
	* strides = [ 1 ];
	*
	* var vec = ndarray( 'float64', buffer, shape, strides, offset, order );
	*
	* // Provide data to the accumulator:
	* vec.set( 0, 2.0 );
	* vec.set( 1, 1.0 );
	*
	* out = accumulator( vec );
	* // returns <ndarray>
	*
	* var bool = ( out === cov );
	* // returns true
	*
	* vec.set( 0, -5.0 );
	* vec.set( 1, 3.14 );
	*
	* out = accumulator( vec );
	* // returns <ndarray>
	*
	* // Retrieve the covariance matrix:
	* out = accumulator();
	* // returns <ndarray>
	*/
	incrcovmat: typeof incrcovmat;

	/**
	* Returns an accumulator function which incrementally computes the coefficient of variation (CV).
	*
	* @param mean - mean value
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrcv();
	*
	* var cv = accumulator();
	* // returns null
	*
	* cv = accumulator( 2.0 );
	* // returns 0.0
	*
	* cv = accumulator( 1.0 );
	* // returns ~0.47
	*
	* cv = accumulator();
	* // returns ~0.47
	*
	* @example
	* var accumulator = ns.incrcv( 3.14 );
	*/
	incrcv: typeof incrcv;

	/**
	* Returns an accumulator function which incrementally computes an exponentially weighted mean.
	*
	* @param alpha - smoothing factor
	* @throws alpha must be on the interval `[0,1]`
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.increwmean( 0.5 );
	*
	* var v = accumulator();
	* // returns null
	*
	* v = accumulator( 2.0 );
	* // returns 2.0
	*
	* v = accumulator( -5.0 );
	* // returns -1.5
	*
	* v = accumulator();
	* // returns -1.5
	*/
	increwmean: typeof increwmean;

	/**
	* Returns an accumulator function which incrementally computes an exponentially weighted standard deviation.
	*
	* @param alpha - smoothing factor
	* @throws must be on the interval `[0,1]`
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.increwstdev( 0.5 );
	*
	* var s = accumulator();
	* // returns null
	*
	* s = accumulator( 2.0 );
	* // returns 0.0
	*
	* s = accumulator( -5.0 );
	* // returns 3.5
	*
	* s = accumulator();
	* // returns 3.5
	*/
	increwstdev: typeof increwstdev;

	/**
	* Returns an accumulator function which incrementally computes an exponentially weighted variance.
	*
	* @param alpha - smoothing factor
	* @throws must provide a nonnegative number
	* @throws must be on the interval `[0,1]`
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.increwvariance( 0.5 );
	*
	* var v = accumulator();
	* // returns null
	*
	* v = accumulator( 2.0 );
	* // returns 0.0
	*
	* v = accumulator( -5.0 );
	* // returns 12.25
	*
	* v = accumulator();
	* // returns 12.25
	*/
	increwvariance: typeof increwvariance;

	/**
	* Returns an accumulator function which incrementally computes a geometric mean.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrgmean();
	*
	* var v = accumulator();
	* // returns null
	*
	* v = accumulator( 2.0 );
	* // returns 2.0
	*
	* v = accumulator( 5.0 );
	* // returns ~3.16
	*
	* v = accumulator();
	* // returns ~3.16
	*/
	incrgmean: typeof incrgmean;

	/**
	* Returns an accumulator function which incrementally performs Grubbs' test for detecting outliers.
	*
	* @param options - function options
	* @param options.alpha - significance level (default: 0.05)
	* @param options.alternative - alternative hypothesis ('two-sided', 'min', 'max'; default: 'two-sided')
	* @param options.init - number of data points used to compute initial statistics (default: 100)
	* @throws must provide valid options
	* @throws `alpha` option must be on the interval `[0,1]`
	* @returns accumulator function
	*
	* @example
	* var rnorm = require( '@stdlib/random/base/normal' );
	*
	* var accumulator;
	* var opts;
	* var res;
	* var i;
	*
	* opts = {
	*     'init': 100
	* };
	*
	* accumulator = ns.incrgrubbs( opts );
	*
	* for ( i = 0; i < 200; i++ ) {
	*     res = accumulator( rnorm( 10.0, 5.0 ) );
	* }
	*/
	incrgrubbs: typeof incrgrubbs;

	/**
	* Returns an accumulator function which incrementally computes a harmonic mean.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrhmean();
	*
	* var v = accumulator();
	* // returns null
	*
	* v = accumulator( 2.0 );
	* // returns 2.0
	*
	* v = accumulator( 5.0 );
	* // returns ~2.86
	*
	* v = accumulator();
	* // returns ~2.86
	*/
	incrhmean: typeof incrhmean;

	/**
	* Returns an accumulator function which incrementally computes a corrected sample excess kurtosis.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrkurtosis();
	*
	* var kurtosis = accumulator();
	* // returns null
	*
	* kurtosis = accumulator( 2.0 );
	* // returns null
	*
	* kurtosis = accumulator( 2.0 );
	* // returns null
	*
	* kurtosis = accumulator( -4.0 );
	* // returns null
	*
	* kurtosis = accumulator( -4.0 );
	* // returns -6.0
	*/
	incrkurtosis: typeof incrkurtosis;

	/**
	* Returns an accumulator function which incrementally computes the mean arctangent absolute percentage error.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmaape();
	*
	* var m = accumulator();
	* // returns null
	*
	* m = accumulator( 2.0, 3.0 );
	* // returns ~0.3218
	*
	* m = accumulator( 5.0, 2.0 );
	* // returns ~0.6523
	*
	* m = accumulator();
	* // returns ~0.6523
	*/
	incrmaape: typeof incrmaape;

	/**
	* Returns an accumulator function which incrementally computes the mean absolute error.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmae();
	*
	* var m = accumulator();
	* // returns null
	*
	* m = accumulator( 2.0, 3.0 );
	* // returns 1.0
	*
	* m = accumulator( -5.0, 2.0 );
	* // returns 4.0
	*
	* m = accumulator();
	* // returns 4.0
	*/
	incrmae: typeof incrmae;

	/**
	* Returns an accumulator function which incrementally computes a moving sample absolute Pearson product-moment correlation coefficient.
	*
	* @param W - window size
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmapcorr( 3 );
	*
	* var ar = accumulator();
	* // returns null
	*
	* ar = accumulator( 2.0, 1.0 );
	* // returns 0.0
	*
	* ar = accumulator( -5.0, 3.14 );
	* // returns ~1.0
	*
	* ar = accumulator( 3.0, -1.0 );
	* // returns ~0.925
	*
	* ar = accumulator( 5.0, -9.5 );
	* // returns ~0.863
	*
	* ar = accumulator();
	* // returns ~0.863
	*/
	incrmapcorr: typeof incrmapcorr;

	/**
	* Returns an accumulator function which incrementally computes the mean absolute percentage error.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmape();
	*
	* var m = accumulator();
	* // returns null
	*
	* m = accumulator( 2.0, 3.0 );
	* // returns ~33.33
	*
	* m = accumulator( 5.0, 2.0 );
	* // returns ~91.67
	*
	* m = accumulator();
	* // returns ~91.67
	*/
	incrmape: typeof incrmape;

	/**
	* Returns an accumulator function which incrementally computes a maximum value.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmax();
	*
	* var v = accumulator();
	* // returns null
	*
	* v = accumulator( 2.0 );
	* // returns 2.0
	*
	* v = accumulator( -4.0 );
	* // returns 2.0
	*
	* v = accumulator( 3.0 );
	* // returns 3.0
	*
	* v = accumulator();
	* // returns 3.0
	*/
	incrmax: typeof incrmax;

	/**
	* Returns an accumulator function which incrementally computes a maximum absolute value.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmaxabs();
	*
	* var v = accumulator();
	* // returns null
	*
	* v = accumulator( 2.0 );
	* // returns 2.0
	*
	* v = accumulator( -3.0 );
	* // returns 3.0
	*
	* v = accumulator( 1.0 );
	* // returns 3.0
	*
	* v = accumulator();
	* // returns 3.0
	*/
	incrmaxabs: typeof incrmaxabs;

	/**
	* Returns an accumulator function which incrementally computes a moving unbiased sample covariance.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of values over which to compute the moving unbiased sample covariance.
	* -   As `W` (x,y) pairs are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
	*
	* @param W - window size
	* @throws first argument must be a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmcovariance( 3 );
	*
	* var v = accumulator();
	* // returns null
	*
	* v = accumulator( 2.0, 1.0 );
	* // returns 0.0
	*
	* v = accumulator( -5.0, 3.14 );
	* // returns ~-7.49
	*
	* v = accumulator( 3.0, -1.0 );
	* // returns -8.35
	*
	* v = accumulator( 5.0, -9.5 );
	* // returns -29.42
	*
	* v = accumulator();
	* // returns -29.42
	*/
	incrmcovariance: typeof incrmcovariance;

	/**
	* Returns an accumulator function which incrementally computes a moving coefficient of variation (CV).
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of values over which to compute the moving coefficient of variation.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
	*
	* @param W - window size
	* @param mean - mean value
	* @throws first argument must be a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmcv( 3 );
	*
	* var cv = accumulator();
	* // returns null
	*
	* cv = accumulator( 2.0 );
	* // returns 0.0
	*
	* cv = accumulator( 1.0 );
	* // returns ~0.47
	*
	* cv = accumulator( 3.0 );
	* // returns 0.5
	*
	* cv = accumulator( 7.0 );
	* // returns ~0.83
	*
	* cv = accumulator();
	* // returns ~0.83
	*
	* @example
	* var accumulator = ns.incrmcv( 3, 2.0 );
	*/
	incrmcv: typeof incrmcv;

	/**
	* Returns an accumulator function which incrementally computes the mean directional accuracy.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmda();
	*
	* var m = accumulator();
	* // returns null
	*
	* m = accumulator( 2.0, 3.0 );
	* // returns 1.0
	*
	* m = accumulator( -5.0, 4.0 );
	* // returns 0.5
	*
	* m = accumulator();
	* // returns 0.5
	*/
	incrmda: typeof incrmda;

	/**
	* Returns an accumulator function which incrementally computes the mean error.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrme();
	*
	* var m = accumulator();
	* // returns null
	*
	* m = accumulator( 2.0, 3.0 );
	* // returns 1.0
	*
	* m = accumulator( -5.0, 2.0 );
	* // returns 4.0
	*
	* m = accumulator();
	* // returns 4.0
	*/
	incrme: typeof incrme;

	/**
	* Returns an accumulator function which incrementally computes an arithmetic mean.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmean();
	*
	* var mu = accumulator();
	* // returns null
	*
	* mu = accumulator( 2.0 );
	* // returns 2.0
	*
	* mu = accumulator( 3.0 );
	* // returns 2.5
	*
	* mu = accumulator( 4.0 );
	* // returns 3.0
	*
	* mu = accumulator();
	* // returns 3.0
	*/
	incrmean: typeof incrmean;

	/**
	* Returns an accumulator function which incrementally computes an arithmetic mean of absolute values.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmeanabs();
	*
	* var mu = accumulator();
	* // returns null
	*
	* mu = accumulator( 2.0 );
	* // returns 2.0
	*
	* mu = accumulator( -3.0 );
	* // returns 2.5
	*
	* mu = accumulator( -4.0 );
	* // returns 3.0
	*
	* mu = accumulator();
	* // returns 3.0
	*/
	incrmeanabs: typeof incrmeanabs;

	/**
	* Returns an accumulator function which incrementally computes an arithmetic mean of squared absolute values.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmeanabs2();
	*
	* var mu = accumulator();
	* // returns null
	*
	* mu = accumulator( 2.0 );
	* // returns 4.0
	*
	* mu = accumulator( -5.0 );
	* // returns 14.5
	*
	* mu = accumulator();
	* // returns 14.5
	*/
	incrmeanabs2: typeof incrmeanabs2;

	/**
	* Returns an accumulator function which incrementally computes an arithmetic mean and corrected sample standard deviation.
	*
	* @param out - output array
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmeanstdev();
	*
	* var ms = accumulator();
	* // returns null
	*
	* ms = accumulator( 2.0 );
	* // returns [ 2.0, 0.0 ]
	*
	* ms = accumulator( -5.0 );
	* // returns [ -1.5, ~4.95 ]
	*
	* ms = accumulator( 3.0 );
	* // returns [ 0.0, ~4.36 ]
	*
	* ms = accumulator( 5.0 );
	* // returns [ 1.25, ~4.35 ]
	*
	* ms = accumulator();
	* // returns [ 1.25, ~4.35 ]
	*/
	incrmeanstdev: typeof incrmeanstdev;

	/**
	* Returns an accumulator function which incrementally computes an arithmetic mean and unbiased sample variance.
	*
	* @param out - output array
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmeanvar();
	*
	* var mv = accumulator();
	* // returns null
	*
	* mv = accumulator( 2.0 );
	* // returns [ 2.0, 0.0 ]
	*
	* mv = accumulator( -5.0 );
	* // returns [ -1.5, 24.5 ]
	*
	* mv = accumulator( 3.0 );
	* // returns [ 0.0, 19.0 ]
	*
	* mv = accumulator( 5.0 );
	* // returns [ 1.25, ~18.92 ]
	*
	* mv = accumulator();
	* // returns [ 1.25, ~18.92 ]
	*/
	incrmeanvar: typeof incrmeanvar;

	/**
	* Returns an accumulator function which incrementally computes a moving geometric mean.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of values over which to compute the moving geometric mean.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
	*
	* @param W - window size
	* @throws must provide a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmgmean( 3 );
	*
	* var v = accumulator();
	* // returns null
	*
	* v = accumulator( 2.0 );
	* // returns 2.0
	*
	* v = accumulator( 5.0 );
	* // returns ~3.16
	*
	* v = accumulator( 3.0 );
	* // returns ~3.11
	*
	* v = accumulator( 5.0 );
	* // returns ~4.22
	*
	* v = accumulator();
	* // returns ~4.22
	*/
	incrmgmean: typeof incrmgmean;

	/**
	* Returns an accumulator function which incrementally performs a moving Grubbs' test for detecting outliers.
	*
	* @param W - window size
	* @param options - function options
	* @param options.alpha - significance level (default: 0.05)
	* @param options.alternative - alternative hypothesis ('two-sided', 'min', 'max'; default: 'two-sided')
	* @throws first argument must be a positive integer
	* @throws first argument must be greater than or equal to 3
	* @throws must provide valid options
	* @throws `alpha` option must be on the interval `[0,1]`
	* @returns accumulator function
	*
	* @example
	* var rnorm = require( '@stdlib/random/base/normal' );
	*
	* var accumulator;
	* var opts;
	* var i;
	*
	* accumulator = ns.incrmgrubbs( 20, opts );
	*
	* for ( i = 0; i < 200; i++ ) {
	*     res = accumulator( rnorm( 10.0, 5.0 ) );
	* }
	*/
	incrmgrubbs: typeof incrmgrubbs;

	/**
	* Returns an accumulator function which incrementally computes a moving harmonic mean.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of values over which to compute the moving harmonic mean.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
	*
	* @param W - window size
	* @throws must provide a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmhmean( 3 );
	*
	* var v = accumulator();
	* // returns null
	*
	* v = accumulator( 2.0 );
	* // returns 2.0
	*
	* v = accumulator( 5.0 );
	* // returns ~2.86
	*
	* v = accumulator( 3.0 );
	* // returns ~2.90
	*
	* v = accumulator( 5.0 );
	* // returns ~4.09
	*
	* v = accumulator();
	* // returns ~4.09
	*/
	incrmhmean: typeof incrmhmean;

	/**
	* Returns an accumulator function which incrementally computes a mid-range.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmidrange();
	*
	* var midrange = accumulator();
	* // returns null
	*
	* midrange = accumulator( 3.14 );
	* // returns 3.14
	*
	* midrange = accumulator( -5.0 );
	* // returns ~-0.93
	*
	* midrange = accumulator( 10.1 );
	* // returns 2.55
	*
	* midrange = accumulator();
	* // returns 2.55
	*/
	incrmidrange: typeof incrmidrange;

	/**
	* Returns an accumulator function which incrementally computes a minimum value.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmin();
	*
	* var v = accumulator();
	* // returns null
	*
	* v = accumulator( 2.0 );
	* // returns 2.0
	*
	* v = accumulator( -3.0 );
	* // returns -3.0
	*
	* v = accumulator( 4.0 );
	* // returns -3.0
	*
	* v = accumulator();
	* // returns -3.0
	*/
	incrmin: typeof incrmin;

	/**
	* Returns an accumulator function which incrementally computes a minimum absolute value.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrminabs();
	*
	* var v = accumulator();
	* // returns null
	*
	* v = accumulator( 2.0 );
	* // returns 2.0
	*
	* v = accumulator( -3.0 );
	* // returns 2.0
	*
	* v = accumulator( 1.0 );
	* // returns 1.0
	*
	* v = accumulator();
	* // returns 1.0
	*/
	incrminabs: typeof incrminabs;

	/**
	* Returns an accumulator function which incrementally computes minimum and maximum values.
	*
	* @param out - output array
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrminmax();
	*
	* var mm = accumulator();
	* // returns null
	*
	* mm = accumulator( 2.0 );
	* // returns [ 2.0, 2.0 ]
	*
	* mm = accumulator( -5.0 );
	* // returns [ -5.0, 2.0 ]
	*
	* mm = accumulator( 3.0 );
	* // returns [ -5.0, 3.0 ]
	*
	* mm = accumulator( 5.0 );
	* // returns [ -5.0, 5.0 ]
	*
	* mm = accumulator();
	* // returns [ -5.0, 5.0 ]
	*/
	incrminmax: typeof incrminmax;

	/**
	* Returns an accumulator function which incrementally computes minimum and maximum absolute values.
	*
	* @param out - output array
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrminmaxabs();
	*
	* var mm = accumulator();
	* // returns null
	*
	* mm = accumulator( 2.0 );
	* // returns [ 2.0, 2.0 ]
	*
	* mm = accumulator( -5.0 );
	* // returns [ 2.0, 5.0 ]
	*
	* mm = accumulator( 3.0 );
	* // returns [ 2.0, 5.0 ]
	*
	* mm = accumulator( 5.0 );
	* // returns [ 2.0, 5.0 ]
	*
	* mm = accumulator();
	* // returns [ 2.0, 5.0 ]
	*/
	incrminmaxabs: typeof incrminmaxabs;

	/**
	* Returns an accumulator function which incrementally computes a moving mean arctangent absolute percentage error.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of values over which to compute the moving mean arctangent absolute percentage error.
	* -   As `W` (f,a) pairs are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
	*
	* @param W - window size
	* @throws must provide a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmmaape( 3 );
	*
	* var m = accumulator();
	* // returns null
	*
	* m = accumulator( 2.0, 3.0 );
	* // returns ~0.32
	*
	* m = accumulator( 5.0, 2.0 );
	* // returns ~0.65
	*
	* m = accumulator( 3.0, 2.0 );
	* // returns ~0.59
	*
	* m = accumulator( 2.0, 5.0 );
	* // returns ~0.66
	*
	* m = accumulator();
	* // returns ~0.66
	*/
	incrmmaape: typeof incrmmaape;

	/**
	* Returns an accumulator function which incrementally computes a moving mean absolute error.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of values over which to compute the moving mean absolute error.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
	*
	* @param W - window size
	* @throws must provide a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmmae( 3 );
	*
	* var m = accumulator();
	* // returns null
	*
	* m = accumulator( 2.0, 3.0 );
	* // returns 1.0
	*
	* m = accumulator( -5.0, 2.0 );
	* // returns 4.0
	*
	* m = accumulator( 3.0, 2.0 );
	* // returns 3.0
	*
	* m = accumulator( 5.0, -2.0 );
	* // returns 5.0
	*
	* m = accumulator();
	* // returns 5.0
	*/
	incrmmae: typeof incrmmae;

	/**
	* Returns an accumulator function which incrementally computes a moving mean absolute percentage error.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of values over which to compute the moving mean absolute percentage error.
	* -   As `W` (f,a) pairs are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
	*
	* @param W - window size
	* @throws must provide a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmmape( 3 );
	*
	* var m = accumulator();
	* // returns null
	*
	* m = accumulator( 2.0, 3.0 );
	* // returns ~33.33
	*
	* m = accumulator( 5.0, 2.0 );
	* // returns ~91.67
	*
	* m = accumulator( 3.0, 2.0 );
	* // returns ~77.78
	*
	* m = accumulator( 2.0, 5.0 );
	* // returns ~86.67
	*
	* m = accumulator();
	* // returns ~86.67
	*/
	incrmmape: typeof incrmmape;

	/**
	* Returns an accumulator function which incrementally computes a moving maximum value.
	*
	* @param W - window size
	* @throws must provide a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmmax( 3 );
	*
	* var m = accumulator();
	* // returns null
	*
	* m = accumulator( 2.0 );
	* // returns 2.0
	*
	* m = accumulator( -5.0 );
	* // returns 2.0
	*
	* m = accumulator( 3.0 );
	* // returns 3.0
	*
	* m = accumulator( 5.0 );
	* // returns 5.0
	*
	* m = accumulator();
	* // returns 5.0
	*/
	incrmmax: typeof incrmmax;

	/**
	* Returns an accumulator function which incrementally computes a moving maximum absolute value.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of values over which to compute the moving maximum absolute value.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
	*
	* @param W - window size
	* @throws must provide a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmmaxabs( 3 );
	*
	* var m = accumulator();
	* // returns null
	*
	* m = accumulator( 2.0 );
	* // returns 2.0
	*
	* m = accumulator( -5.0 );
	* // returns 5.0
	*
	* m = accumulator( 3.0 );
	* // returns 5.0
	*
	* m = accumulator( 5.0 );
	* // returns 5.0
	*
	* m = accumulator();
	* // returns 5.0
	*/
	incrmmaxabs: typeof incrmmaxabs;

	/**
	* Returns an accumulator function which incrementally computes a moving mean directional accuracy.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of values over which to compute the moving mean directional accuracy.
	* -   As `W` (f,a) pairs are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
	*
	* @param W - window size
	* @throws must provide a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmmda( 3 );
	*
	* var m = accumulator();
	* // returns null
	*
	* m = accumulator( 2.0, 3.0 );
	* // returns 1.0
	*
	* m = accumulator( 5.0, 2.0 );
	* // returns 0.5
	*
	* m = accumulator( 3.0, 2.0 );
	* // returns ~0.33
	*
	* m = accumulator( 4.0, 5.0 );
	* // returns ~0.33
	*
	* m = accumulator();
	* // returns ~0.33
	*/
	incrmmda: typeof incrmmda;

	/**
	* Returns an accumulator function which incrementally computes a moving mean error.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of values over which to compute the moving mean error.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
	*
	* @param W - window size
	* @throws must provide a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmme( 3 );
	*
	* var m = accumulator();
	* // returns null
	*
	* m = accumulator( 2.0, 3.0 );
	* // returns 1.0
	*
	* m = accumulator( -5.0, 2.0 );
	* // returns 4.0
	*
	* m = accumulator( 3.0, 2.0 );
	* // returns ~2.33
	*
	* m = accumulator( 5.0, -2.0 );
	* // returns ~-0.33
	*
	* m = accumulator();
	* // returns ~-0.33
	*/
	incrmme: typeof incrmme;

	/**
	* Returns an accumulator function which incrementally computes a moving arithmetic mean.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of values over which to compute the moving mean.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
	*
	* @param W - window size
	* @throws must provide a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmmean( 3 );
	*
	* var mu = accumulator();
	* // returns null
	*
	* mu = accumulator( 2.0 );
	* // returns 2.0
	*
	* mu = accumulator( -5.0 );
	* // returns -1.5
	*
	* mu = accumulator( 3.0 );
	* // returns 0.0
	*
	* mu = accumulator( 5.0 );
	* // returns 1.0
	*
	* mu = accumulator();
	* // returns 1.0
	*/
	incrmmean: typeof incrmmean;

	/**
	* Returns an accumulator function which incrementally computes a moving arithmetic mean of absolute values.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of values over which to compute the moving mean.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
	*
	* @param W - window size
	* @throws must provide a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmmeanabs( 3 );
	*
	* var mu = accumulator();
	* // returns null
	*
	* mu = accumulator( 2.0 );
	* // returns 2.0
	*
	* mu = accumulator( -5.0 );
	* // returns 3.5
	*
	* mu = accumulator( 3.0 );
	* // returns ~3.33
	*
	* mu = accumulator( 5.0 );
	* // returns ~4.33
	*
	* mu = accumulator();
	* // returns ~4.33
	*/
	incrmmeanabs: typeof incrmmeanabs;

	/**
	* Returns an accumulator function which incrementally computes a moving arithmetic mean of squared absolute values.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of values over which to compute the moving mean.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
	*
	* @param W - window size
	* @throws must provide a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmmeanabs2( 3 );
	*
	* var m = accumulator();
	* // returns null
	*
	* m = accumulator( 2.0 );
	* // returns 4.0
	*
	* m = accumulator( -5.0 );
	* // returns 14.5
	*
	* m = accumulator( 3.0 );
	* // returns ~12.67
	*
	* m = accumulator( 5.0 );
	* // returns ~19.67
	*
	* m = accumulator();
	* // returns ~19.67
	*/
	incrmmeanabs2: typeof incrmmeanabs2;

	/**
	* Returns an accumulator function which incrementally computes a moving arithmetic mean and corrected sample standard deviation.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of values over which to compute the moving arithmetic mean and corrected sample standard deviation.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned moving arithmetic mean and corrected sample standard deviation are calculated from smaller sample sizes. Until the window is full, each returned moving arithmetic mean and corrected sample standard deviation is calculated from all provided values.
	*
	* @param window - window size
	* @throws window size must be a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmmeanstdev( 3 );
	*
	* var v = accumulator();
	* // returns null
	*
	* v = accumulator( 2.0 );
	* // returns [ 2.0, 0.0 ]
	*
	* v = accumulator( -5.0 );
	* // returns [ -1.5, ~4.95 ]
	*
	* v = accumulator( 3.0 );
	* // returns [ 0.0, ~4.36 ]
	*
	* v = accumulator( 5.0 );
	* // returns [ 1.0, ~5.29 ]
	*
	* v = accumulator();
	* // returns [ 1.0, ~5.29 ]
	*/
	incrmmeanstdev: typeof incrmmeanstdev;

	/**
	* Returns an accumulator function which incrementally computes a moving arithmetic mean and unbiased sample variance.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of values over which to compute the moving arithmetic mean and unbiased sample variance.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned moving arithmetic mean and unbiased sample variance are calculated from smaller sample sizes. Until the window is full, each returned moving arithmetic mean and unbiased sample variance is calculated from all provided values.
	*
	* @param window - window size
	* @throws window size must be a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmmeanvar( 3 );
	*
	* var v = accumulator();
	* // returns null
	*
	* v = accumulator( 2.0 );
	* // returns [ 2.0, 0.0 ]
	*
	* v = accumulator( -5.0 );
	* // returns [ -1.5, 24.5 ]
	*
	* v = accumulator( 3.0 );
	* // returns [ 0.0, 19.0 ]
	*
	* v = accumulator( 5.0 );
	* // returns [ 1.0, 28.0 ]
	*
	* v = accumulator();
	* // returns [ 1.0, 28.0 ]
	*/
	incrmmeanvar: typeof incrmmeanvar;

	/**
	* Returns an accumulator function which incrementally computes a moving mid-range.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of values over which to compute the moving mid-range.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
	*
	* @param W - window size
	* @throws must provide a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmmidrange( 3 );
	*
	* var mr = accumulator();
	* // returns null
	*
	* mr = accumulator( 2.0 );
	* // returns 2.0
	*
	* mr = accumulator( -5.0 );
	* // returns -1.5
	*
	* mr = accumulator( 3.0 );
	* // returns -1.0
	*
	* mr = accumulator( 5.0 );
	* // returns 0.0
	*
	* mr = accumulator();
	* // returns 0.0
	*/
	incrmmidrange: typeof incrmmidrange;

	/**
	* Returns an accumulator function which incrementally computes a moving minimum value.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of values over which to compute the moving minimum.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
	*
	* @param W - window size
	* @throws must provide a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmmin( 3 );
	*
	* var m = accumulator();
	* // returns null
	*
	* m = accumulator( 2.0 );
	* // returns 2.0
	*
	* m = accumulator( -5.0 );
	* // returns -5.0
	*
	* m = accumulator( 3.0 );
	* // returns -5.0
	*
	* m = accumulator( 5.0 );
	* // returns -5.0
	*
	* m = accumulator();
	* // returns -5.0
	*/
	incrmmin: typeof incrmmin;

	/**
	* Returns an accumulator function which incrementally computes a moving minimum absolute value.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of values over which to compute the moving minimum absolute value.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
	*
	* @param W - window size
	* @throws must provide a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmminabs( 3 );
	*
	* var m = accumulator();
	* // returns null
	*
	* m = accumulator( 2.0 );
	* // returns 2.0
	*
	* m = accumulator( -5.0 );
	* // returns 2.0
	*
	* m = accumulator( 3.0 );
	* // returns 2.0
	*
	* m = accumulator( 5.0 );
	* // returns 3.0
	*
	* m = accumulator();
	* // returns 3.0
	*/
	incrmminabs: typeof incrmminabs;

	/**
	* Returns an accumulator function which incrementally computes moving minimum and maximum values.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of values over which to compute the moving minimum and maximum.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned minimum and maximum values are calculated from smaller sample sizes. Until the window is full, each returned minimum and maximum is calculated from all provided values.
	*
	* @param window - window size
	* @throws window size must be a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmminmax( 3 );
	*
	* var mm = accumulator();
	* // returns null
	*
	* mm = accumulator( 2.0 );
	* // returns [ 2.0, 2.0 ]
	*
	* mm = accumulator( -5.0 );
	* // returns [ -5.0, 2.0 ]
	*
	* mm = accumulator( 3.0 );
	* // returns [ -5.0, 3.0 ]
	*
	* mm = accumulator( 5.0 );
	* // returns [ -5.0, 5.0 ]
	*
	* mm = accumulator();
	* // returns [ -5.0, 5.0 ]
	*/
	incrmminmax: typeof incrmminmax;

	/**
	* Returns an accumulator function which incrementally computes moving minimum and maximum absolute values.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of values over which to compute moving minimum and maximum absolute values.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned minimum and maximum values are calculated from smaller sample sizes. Until the window is full, each returned minimum and maximum is calculated from all provided values.
	*
	* @param window - window size
	* @throws window size must be a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmminmaxabs( 3 );
	*
	* var mm = accumulator();
	* // returns null
	*
	* mm = accumulator( 2.0 );
	* // returns [ 2.0, 2.0 ]
	*
	* mm = accumulator( -5.0 );
	* // returns [ 2.0, 5.0 ]
	*
	* mm = accumulator( 3.0 );
	* // returns [ 2.0, 5.0 ]
	*
	* mm = accumulator( 5.0 );
	* // returns [ 3.0, 5.0 ]
	*
	* mm = accumulator();
	* // returns [ 3.0, 5.0 ]
	*/
	incrmminmaxabs: typeof incrmminmaxabs;

	/**
	* Returns an accumulator function which incrementally computes a moving mean percentage error.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of values over which to compute the moving mean percentage error.
	* -   As `W` (f,a) pairs are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
	*
	* @param W - window size
	* @throws must provide a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmmpe( 3 );
	*
	* var m = accumulator();
	* // returns null
	*
	* m = accumulator( 2.0, 3.0 );
	* // returns ~33.33
	*
	* m = accumulator( 5.0, 2.0 );
	* // returns ~-58.33
	*
	* m = accumulator( 3.0, 2.0 );
	* // returns ~-55.56
	*
	* m = accumulator( 2.0, 5.0 );
	* // returns ~-46.67
	*
	* m = accumulator();
	* // returns ~-46.67
	*/
	incrmmpe: typeof incrmmpe;

	/**
	* Returns an accumulator function which incrementally computes a moving mean squared error.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of values over which to compute the moving mean squared error.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
	*
	* @param W - window size
	* @throws must provide a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmmse( 3 );
	*
	* var m = accumulator();
	* // returns null
	*
	* m = accumulator( 2.0, 3.0 );
	* // returns 1.0
	*
	* m = accumulator( -5.0, 2.0 );
	* // returns 25.0
	*
	* m = accumulator( 3.0, 2.0 );
	* // returns 17.0
	*
	* m = accumulator( 5.0, -2.0 );
	* // returns 33.0
	*
	* m = accumulator();
	* // returns 33.0
	*/
	incrmmse: typeof incrmmse;

	/**
	* Returns an accumulator function which incrementally computes an updated moving sample correlation coefficient.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of values over which to compute the moving sample correlation coefficient.
	* -   As `W` (x,y) pairs are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
	*
	* @param W - window size
	* @throws first argument must be a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmpcorr( 3 );
	*
	* var r = accumulator();
	* // returns null
	*
	* r = accumulator( 2.0, 1.0 );
	* // returns 0.0
	*
	* r = accumulator( -5.0, 3.14 );
	* // returns ~-1.0
	*
	* r = accumulator( 3.0, -1.0 );
	* // returns ~-0.925
	*
	* r = accumulator( 5.0, -9.5 );
	* // returns ~-0.863
	*
	* r = accumulator();
	* // returns ~-0.863
	*/
	incrmpcorr: typeof incrmpcorr;

	/**
	* Returns an accumulator function which incrementally computes a moving squared sample Pearson product-moment correlation coefficient.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of values over which to compute the moving squared sample correlation coefficient.
	* -   As `W` (x,y) pairs are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
	*
	* @param W - window size
	* @throws first argument must be a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmpcorr2( 3 );
	*
	* var r2 = accumulator();
	* // returns null
	*
	* r2 = accumulator( 2.0, 1.0 );
	* // returns 0.0
	*
	* r2 = accumulator( -5.0, 3.14 );
	* // returns ~1.0
	*
	* r2 = accumulator( 3.0, -1.0 );
	* // returns ~0.86
	*
	* r2 = accumulator( 5.0, -9.5 );
	* // returns ~0.74
	*
	* r2 = accumulator();
	* // returns ~0.74
	*/
	incrmpcorr2: typeof incrmpcorr2;

	/**
	* Returns an accumulator function which incrementally computes a moving sample Pearson product-moment correlation distance.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of values over which to compute the moving sample correlation distance.
	* -   As `W` (x,y) pairs are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
	*
	* @param W - window size
	* @throws first argument must be a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmpcorrdist( 3 );
	*
	* var d = accumulator();
	* // returns null
	*
	* d = accumulator( 2.0, 1.0 );
	* // returns 1.0
	*
	* d = accumulator( -5.0, 3.14 );
	* // returns ~2.0
	*
	* d = accumulator( 3.0, -1.0 );
	* // returns ~1.925
	*
	* d = accumulator( 5.0, -9.5 );
	* // returns ~1.863
	*
	* d = accumulator();
	* // returns ~1.863
	*/
	incrmpcorrdist: typeof incrmpcorrdist;

	/**
	* Returns an accumulator function which incrementally computes the mean percentage error.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmpe();
	*
	* var m = accumulator();
	* // returns null
	*
	* m = accumulator( 2.0, 3.0 );
	* // returns ~33.33
	*
	* m = accumulator( 5.0, 2.0 );
	* // returns ~-58.33
	*
	* m = accumulator();
	* // returns ~-58.33
	*/
	incrmpe: typeof incrmpe;

	/**
	* Returns an accumulator function which incrementally computes a moving product.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of values over which to compute the moving product.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
	*
	* @param W - window size
	* @throws must provide a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmprod( 3 );
	*
	* var p = accumulator();
	* // returns null
	*
	* p = accumulator( 2.0 );
	* // returns 2.0
	*
	* p = accumulator( -5.0 );
	* // returns -10.0
	*
	* p = accumulator( 3.0 );
	* // returns -30.0
	*
	* p = accumulator( 5.0 );
	* // returns -75.0
	*
	* p = accumulator();
	* // returns -75.0
	*/
	incrmprod: typeof incrmprod;

	/**
	* Returns an accumulator function which incrementally computes a moving range.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of values over which to compute the moving range.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
	*
	* @param W - window size
	* @throws must provide a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmrange( 3 );
	*
	* var r = accumulator();
	* // returns null
	*
	* r = accumulator( 2.0 );
	* // returns 0.0
	*
	* r = accumulator( -5.0 );
	* // returns 7.0
	*
	* r = accumulator( 3.0 );
	* // returns 8.0
	*
	* r = accumulator( 5.0 );
	* // returns 10.0
	*
	* r = accumulator();
	* // returns 10.0
	*/
	incrmrange: typeof incrmrange;

	/**
	* Returns an accumulator function which incrementally computes a moving root mean squared error.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of values over which to compute the moving root mean squared error.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
	*
	* @param W - window size
	* @throws must provide a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmrmse( 3 );
	*
	* var r = accumulator();
	* // returns null
	*
	* r = accumulator( 2.0, 3.0 );
	* // returns 1.0
	*
	* r = accumulator( -5.0, 2.0 );
	* // returns 5.0
	*
	* r = accumulator( 3.0, 2.0 );
	* // returns ~4.12
	*
	* r = accumulator( 5.0, -2.0 );
	* // returns ~5.74
	*
	* r = accumulator();
	* // returns ~5.74
	*/
	incrmrmse: typeof incrmrmse;

	/**
	* Returns an accumulator function which incrementally computes a moving residual sum of squares.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of values over which to compute the moving residual sum of squares.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
	*
	* @param W - window size
	* @throws must provide a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmrss( 3 );
	*
	* var r = accumulator();
	* // returns null
	*
	* r = accumulator( 2.0, 3.0 );
	* // returns 1.0
	*
	* r = accumulator( -5.0, 2.0 );
	* // returns 50.0
	*
	* r = accumulator( 3.0, 2.0 );
	* // returns 51.0
	*
	* r = accumulator( 5.0, -2.0 );
	* // returns 99.0
	*
	* r = accumulator();
	* // returns 99.0
	*/
	incrmrss: typeof incrmrss;

	/**
	* Returns an accumulator function which incrementally computes the mean squared error.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmse();
	*
	* var m = accumulator();
	* // returns null
	*
	* m = accumulator( 2.0, 3.0 );
	* // returns 1.0
	*
	* m = accumulator( -5.0, 2.0 );
	* // returns 25.0
	*
	* m = accumulator();
	* // returns 25.0
	*/
	incrmse: typeof incrmse;

	/**
	* Returns an accumulator function which incrementally computes a moving corrected sample standard deviation.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of values over which to compute the moving sum.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
	*
	* @param W - window size
	* @param mean - mean value
	* @throws first argument must be a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmstdev( 3 );
	*
	* var s = accumulator();
	* // returns null
	*
	* s = accumulator( 2.0 );
	* // returns 0.0
	*
	* s = accumulator( -5.0 );
	* // returns ~4.95
	*
	* s = accumulator( 3.0 );
	* // returns ~4.36
	*
	* s = accumulator( 5.0 );
	* // returns ~5.29
	*
	* s = accumulator();
	* // returns ~5.29
	*
	* @example
	* var accumulator = ns.incrmstdev( 3, 5.0 );
	*/
	incrmstdev: typeof incrmstdev;

	/**
	* Returns an accumulator function which incrementally computes a moving sum.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of values over which to compute the moving sum.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
	*
	* @param W - window size
	* @throws must provide a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmsum( 3 );
	*
	* var sum = accumulator();
	* // returns null
	*
	* sum = accumulator( 2.0 );
	* // returns 2.0
	*
	* sum = accumulator( -5.0 );
	* // returns -3.0
	*
	* sum = accumulator( 3.0 );
	* // returns 0.0
	*
	* sum = accumulator( 5.0 );
	* // returns 3.0
	*
	* sum = accumulator();
	* // returns 3.0
	*/
	incrmsum: typeof incrmsum;

	/**
	* Returns an accumulator function which incrementally computes a moving sum of absolute values.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of values over which to compute the moving sum.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
	*
	* @param W - window size
	* @throws must provide a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmsumabs( 3 );
	*
	* var sum = accumulator();
	* // returns null
	*
	* sum = accumulator( 2.0 );
	* // returns 2.0
	*
	* sum = accumulator( -5.0 );
	* // returns 7.0
	*
	* sum = accumulator( 3.0 );
	* // returns 10.0
	*
	* sum = accumulator( 5.0 );
	* // returns 13.0
	*
	* sum = accumulator();
	* // returns 13.0
	*/
	incrmsumabs: typeof incrmsumabs;

	/**
	* Returns an accumulator function which incrementally computes a moving sum of squared absolute values.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of values over which to compute the moving sum.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
	*
	* @param W - window size
	* @throws must provide a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmsumabs2( 3 );
	*
	* var sum = accumulator();
	* // returns null
	*
	* sum = accumulator( 2.0 );
	* // returns 4.0
	*
	* sum = accumulator( -5.0 );
	* // returns 29.0
	*
	* sum = accumulator( 3.0 );
	* // returns 38.0
	*
	* sum = accumulator( 5.0 );
	* // returns 59.0
	*
	* sum = accumulator();
	* // returns 59.0
	*/
	incrmsumabs2: typeof incrmsumabs2;

	/**
	* Returns an accumulator function which incrementally computes a moving statistical summary.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of values over which to compute the moving statistical summary.
	* -   If provided a value, the accumulator function returns an updated moving statistical summary. If not provided a value, the accumulator function returns the current moving statistical summary.
	* -   As `W` values are needed to fill the window buffer, the first `W-1` returned summaries are calculated from smaller sample sizes. Until the window is full, each returned summary is calculated from all provided values.
	*
	* @param W - window size
	* @throws must provide a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmsummary( 3 );
	*
	* var summary = accumulator();
	* // returns {}
	*
	* summary = accumulator( 2.0 );
	* // returns {...}
	*
	* summary = accumulator( -5.0 );
	* // returns {...}
	*
	* summary = accumulator();
	* // returns {...}
	*/
	incrmsummary: typeof incrmsummary;

	/**
	* Returns an accumulator function which incrementally computes a moving sum of products.
	*
	* ## Notes
	*
	* -   The `W` parameter defines the number of (x,y) pairs over which to compute the moving sum of products.
	* -   As `W` (x,y) pairs are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
	*
	* @param W - window size
	* @throws must provide a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmsumprod( 3 );
	*
	* var sum = accumulator();
	* // returns null
	*
	* sum = accumulator( 2.0, 3.0 );
	* // returns 6.0
	*
	* sum = accumulator( -5.0, 2.0 );
	* // returns -4.0
	*
	* sum = accumulator( 3.0, -2.0 );
	* // returns -10.0
	*
	* sum = accumulator( 5.0, 3.0 );
	* // returns -1.0
	*
	* sum = accumulator();
	* // returns -1.0
	*/
	incrmsumprod: typeof incrmsumprod;

	/**
	* Returns an accumulator function which incrementally computes a moving unbiased sample variance.
	*
	* @param W - window size
	* @param mean - mean value
	* @throws first argument must be a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmvariance( 3 );
	*
	* var s2 = accumulator();
	* // returns null
	*
	* s2 = accumulator( 2.0 );
	* // returns 0.0
	*
	* s2 = accumulator( -5.0 );
	* // returns 24.5
	*
	* s2 = accumulator( 3.0 );
	* // returns 19.0
	*
	* s2 = accumulator( 5.0 );
	* // returns 28.0
	*
	* s2 = accumulator();
	* // returns 28.0
	*
	* @example
	* var accumulator = ns.incrmvariance( 3, -2.0 );
	*/
	incrmvariance: typeof incrmvariance;

	/**
	* Returns an accumulator function which incrementally computes a moving variance-to-mean ratio (VMR).
	*
	* @param W - window size
	* @param mean - mean value
	* @throws first argument must be a positive integer
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrmvmr( 3 );
	*
	* var F = accumulator();
	* // returns null
	*
	* F = accumulator( 2.0 );
	* // returns 0.0
	*
	* F = accumulator( 1.0 );
	* // returns ~0.33
	*
	* F = accumulator( 3.0 );
	* // returns 0.5
	*
	* F = accumulator( 7.0 );
	* // returns ~2.55
	*
	* F = accumulator();
	* // returns ~2.55
	*
	* @example
	* var accumulator = ns.incrmvmr( 3, 2.0 );
	*/
	incrmvmr: typeof incrmvmr;

	/**
	* Returns an accumulator function which incrementally computes a count, ignoring `NaN` values.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrnancount();
	*
	* var v = accumulator();
	* // returns null
	*
	* v = accumulator( 2.0 );
	* // returns 1
	*
	* v = accumulator( -5.0 );
	* // returns 2
	*
	* v = accumulator();
	* // returns 2
	*/
	incrnancount: typeof incrnancount;

	/**
	* Returns an accumulator function which incrementally computes a sum, ignoring `NaN` values.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrnansum();
	*
	* var v = accumulator();
	* // returns null
	*
	* v = accumulator( 2.0 );
	* // returns 2.0
	*
	* v = accumulator( 3.0 );
	* // returns 5.0
	*
	* v = accumulator( NaN );
	* // returns 5.0
	*
	* v = accumulator( 4.0 );
	* // returns 9.0
	*
	* v = accumulator();
	* // returns 9.0
	*/
	incrnansum: typeof incrnansum;

	/**
	* Returns an accumulator function which incrementally computes a sum of absolute values, ignoring `NaN` values.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrnansumabs();
	*
	* var v = accumulator();
	* // returns null
	*
	* v = accumulator( 2.0 );
	* // returns 2.0
	*
	* v = accumulator( -3.0 );
	* // returns 5.0
	*
	* v = accumulator( NaN );
	* // returns 5.0
	*
	* v = accumulator( -4.0 );
	* // returns 9.0
	*
	* v = accumulator();
	* // returns 9.0
	*/
	incrnansumabs: typeof incrnansumabs;

	/**
	* Returns an accumulator function which incrementally computes a sum of squared absolute values, ignoring `NaN` values.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrnansumabs2();
	*
	* var v = accumulator();
	* // returns null
	*
	* v = accumulator( 2.0 );
	* // returns 4.0
	*
	* v = accumulator( NaN );
	* // returns 4.0
	*
	* v = accumulator( -3.0 );
	* // returns 13.0
	*
	* v = accumulator( -4.0 );
	* // returns 29.0
	*
	* v = accumulator();
	* // returns 29.0
	*/
	incrnansumabs2: typeof incrnansumabs2;

	/**
	* Returns an accumulator function which incrementally computes an updated sample correlation coefficient.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrpcorr();
	*
	* var r = accumulator();
	* // returns null
	*
	* r = accumulator( 2.0, 1.0 );
	* // returns 0.0
	*
	* r = accumulator( -5.0, 3.14 );
	* // returns ~-1.0
	*
	* r = accumulator();
	* // returns ~-1.0
	*/
	incrpcorr: typeof incrpcorr;

	/**
	* Returns an accumulator function which incrementally computes a squared sample Pearson product-moment correlation coefficient.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrpcorr2();
	*
	* var r2 = accumulator();
	* // returns null
	*
	* r2 = accumulator( 2.0, 1.0 );
	* // returns 0.0
	*
	* r2 = accumulator( -5.0, 3.14 );
	* // returns ~1.0
	*
	* r2 = accumulator();
	* // returns ~1.0
	*/
	incrpcorr2: typeof incrpcorr2;

	/**
	* Returns an accumulator function which incrementally computes a sample Pearson product-moment correlation distance.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrpcorrdist();
	*
	* var d = accumulator();
	* // returns null
	*
	* d = accumulator( 2.0, 1.0 );
	* // returns 1.0
	*
	* d = accumulator( -5.0, 3.14 );
	* // returns ~2.0
	*
	* d = accumulator();
	* // returns ~2.0
	*/
	incrpcorrdist: typeof incrpcorrdist;

	/**
	* Returns an accumulator function which incrementally computes a sample Pearson product-moment correlation distance matrix.
	*
	* @param out - order of the correlation distance matrix or a square 2-dimensional output ndarray for storing the correlation distance matrix
	* @param means - mean values
	* @throws first argument must be either a positive integer or a 2-dimensional ndarray having equal dimensions
	* @throws second argument must be a 1-dimensional ndarray
	* @throws number of means must match correlation distance matrix dimensions
	* @returns accumulator function
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var ndarray = require( '@stdlib/ndarray/ctor' );
	*
	* // Create an output correlation distance matrix:
	* var buffer = new Float64Array( 4 );
	* var shape = [ 2, 2 ];
	* var strides = [ 2, 1 ];
	* var offset = 0;
	* var order = 'row-major';
	*
	* var dist = ndarray( 'float64', buffer, shape, strides, offset, order );
	*
	* // Create a correlation distance matrix accumulator:
	* var accumulator = ns.incrpcorrdistmat( dist );
	*
	* var out = accumulator();
	* // returns null
	*
	* // Create a data vector:
	* buffer = new Float64Array( 2 );
	* shape = [ 2 ];
	* strides = [ 1 ];
	*
	* var vec = ndarray( 'float64', buffer, shape, strides, offset, order );
	*
	* // Provide data to the accumulator:
	* vec.set( 0, 2.0 );
	* vec.set( 1, 1.0 );
	*
	* out = accumulator( vec );
	* // returns <ndarray>
	*
	* var bool = ( out === dist );
	* // returns true
	*
	* vec.set( 0, -5.0 );
	* vec.set( 1, 3.14 );
	*
	* out = accumulator( vec );
	* // returns <ndarray>
	*
	* // Retrieve the correlation distance matrix:
	* out = accumulator();
	* // returns <ndarray>
	*/
	incrpcorrdistmat: typeof incrpcorrdistmat;

	/**
	* Returns an accumulator function which incrementally computes a sample Pearson product-moment correlation matrix.
	*
	* @param out - order of the correlation matrix or a square 2-dimensional output ndarray for storing the correlation matrix
	* @param means - mean values
	* @throws first argument must be either a positive integer or a 2-dimensional ndarray having equal dimensions
	* @throws second argument must be a 1-dimensional ndarray
	* @throws number of means must match correlation matrix dimensions
	* @returns accumulator function
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var ndarray = require( '@stdlib/ndarray/ctor' );
	*
	* // Create an output correlation matrix:
	* var buffer = new Float64Array( 4 );
	* var shape = [ 2, 2 ];
	* var strides = [ 2, 1 ];
	* var offset = 0;
	* var order = 'row-major';
	*
	* var corr = ndarray( 'float64', buffer, shape, strides, offset, order );
	*
	* // Create a correlation matrix accumulator:
	* var accumulator = ns.incrpcorrmat( corr );
	*
	* var out = accumulator();
	* // returns null
	*
	* // Create a data vector:
	* buffer = new Float64Array( 2 );
	* shape = [ 2 ];
	* strides = [ 1 ];
	*
	* var vec = ndarray( 'float64', buffer, shape, strides, offset, order );
	*
	* // Provide data to the accumulator:
	* vec.set( 0, 2.0 );
	* vec.set( 1, 1.0 );
	*
	* out = accumulator( vec );
	* // returns <ndarray>
	*
	* var bool = ( out === corr );
	* // returns true
	*
	* vec.set( 0, -5.0 );
	* vec.set( 1, 3.14 );
	*
	* out = accumulator( vec );
	* // returns <ndarray>
	*
	* // Retrieve the correlation matrix:
	* out = accumulator();
	* // returns <ndarray>
	*/
	incrpcorrmat: typeof incrpcorrmat;

	/**
	* Returns an accumulator function which incrementally computes a product.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrprod();
	*
	* var v = accumulator();
	* // returns null
	*
	* v = accumulator( 2.0 );
	* // returns 2.0
	*
	* v = accumulator( 3.0 );
	* // returns 6.0
	*
	* v = accumulator( 4.0 );
	* // returns 24.0
	*
	* v = accumulator();
	* // returns 24.0
	*/
	incrprod: typeof incrprod;

	/**
	* Returns an accumulator function which incrementally computes a range.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrrange();
	*
	* var v = accumulator();
	* // returns null
	*
	* v = accumulator( 2.0 );
	* // returns 0.0
	*
	* v = accumulator( -1.0 );
	* // returns 3.0
	*
	* v = accumulator( -3.0 );
	* // returns 5.0
	*
	* v = accumulator();
	* // returns 5.0
	*/
	incrrange: typeof incrrange;

	/**
	* Returns an accumulator function which incrementally computes the root mean squared error.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrrmse();
	*
	* var r = accumulator();
	* // returns null
	*
	* r = accumulator( 2.0, 3.0 );
	* // returns 1.0
	*
	* r = accumulator( -5.0, 2.0 );
	* // returns 5.0
	*
	* r = accumulator();
	* // returns 5.0
	*/
	incrrmse: typeof incrrmse;

	/**
	* Returns an accumulator function which incrementally computes the residual sum of squares.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrrss();
	*
	* var r = accumulator();
	* // returns null
	*
	* r = accumulator( 2.0, 3.0 );
	* // returns 1.0
	*
	* r = accumulator( -5.0, 2.0 );
	* // returns 50.0
	*
	* r = accumulator();
	* // returns 50.0
	*/
	incrrss: typeof incrrss;

	/**
	* Returns an accumulator function which incrementally computes a corrected sample skewness.
	*
	* ## Notes
	*
	* -   If provided a value, the accumulator function returns an updated corrected sample skewness. If not provided a value, the accumulator function returns the current corrected sample skewness.
	* -   If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for all future invocations.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrskewness();
	*
	* var skewness = accumulator();
	* // returns null
	*
	* skewness = accumulator( 2.0 );
	* // returns null
	*
	* skewness = accumulator( -5.0 );
	* // returns null
	*
	* skewness = accumulator( -10.0 );
	* // returns ~0.492
	*
	* skewness = accumulator();
	* // returns ~0.492
	*/
	incrskewness: typeof incrskewness;

	/**
	* Returns an accumulator function which incrementally computes a corrected sample standard deviation.
	*
	* @param mu - known mean
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrstdev();
	*
	* var s = accumulator();
	* // returns null
	*
	* s = accumulator( 2.0 );
	* // returns 0.0
	*
	* s = accumulator( -5.0 );
	* // returns ~4.95
	*
	* s = accumulator();
	* // returns ~4.95
	*/
	incrstdev: typeof incrstdev;

	/**
	* Returns an accumulator function which incrementally computes a sum.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrsum();
	*
	* var v = accumulator();
	* // returns null
	*
	* v = accumulator( 2.0 );
	* // returns 2.0
	*
	* v = accumulator( 3.0 );
	* // returns 5.0
	*
	* v = accumulator( 4.0 );
	* // returns 9.0
	*
	* v = accumulator();
	* // returns 9.0
	*/
	incrsum: typeof incrsum;

	/**
	* Returns an accumulator function which incrementally computes a sum of absolute values.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrsumabs();
	*
	* var v = accumulator();
	* // returns null
	*
	* v = accumulator( 2.0 );
	* // returns 2.0
	*
	* v = accumulator( -3.0 );
	* // returns 5.0
	*
	* v = accumulator( -4.0 );
	* // returns 9.0
	*
	* v = accumulator();
	* // returns 9.0
	*/
	incrsumabs: typeof incrsumabs;

	/**
	* Returns an accumulator function which incrementally computes a sum of squared absolute values.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrsumabs2();
	*
	* var v = accumulator();
	* // returns null
	*
	* v = accumulator( 2.0 );
	* // returns 4.0
	*
	* v = accumulator( -3.0 );
	* // returns 13.0
	*
	* v = accumulator( -4.0 );
	* // returns 29.0
	*
	* v = accumulator();
	* // returns 29.0
	*/
	incrsumabs2: typeof incrsumabs2;

	/**
	* Returns an accumulator function which incrementally computes a statistical summary.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrsummary();
	*
	* var summary = accumulator();
	* // returns {}
	*
	* summary = accumulator( 2.0 );
	* // returns {...}
	*
	* summary = accumulator( -5.0 );
	* // returns {...}
	*
	* summary = accumulator();
	* // returns {...}
	*/
	incrsummary: typeof incrsummary;

	/**
	* Returns an accumulator function which incrementally computes a sum of products.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrsumprod();
	*
	* var v = accumulator();
	* // returns null
	*
	* v = accumulator( 2.0, 3.0 );
	* // returns 6.0
	*
	* v = accumulator( -5.0, 2.0 );
	* // returns -4.0
	*
	* v = accumulator();
	* // returns -4.0
	*/
	incrsumprod: typeof incrsumprod;

	/**
	* Returns an accumulator function which incrementally computes an unbiased sample variance.
	*
	* @param mu - known mean
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrvariance();
	*
	* var s2 = accumulator();
	* // returns null
	*
	* s2 = accumulator( 2.0 );
	* // returns 0.0
	*
	* s2 = accumulator( -5.0 );
	* // returns 24.5
	*
	* s2 = accumulator();
	* // returns 24.5
	*/
	incrvariance: typeof incrvariance;

	/**
	* Returns an accumulator function which incrementally computes a variance-to-mean ratio (VMR).
	*
	* @param mean - mean value
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrvmr();
	*
	* var D = accumulator();
	* // returns null
	*
	* D = accumulator( 2.0 );
	* // returns 0.0
	*
	* D = accumulator( 1.0 );
	* // returns ~0.33
	*
	* D = accumulator();
	* // returns ~0.33
	*
	* @example
	* var accumulator = ns.incrvmr( 3.14 );
	*/
	incrvmr: typeof incrvmr;

	/**
	* Returns an accumulator function which incrementally computes a weighted arithmetic mean.
	*
	* @returns accumulator function
	*
	* @example
	* var accumulator = ns.incrwmean();
	*
	* var mu = accumulator();
	* // returns null
	*
	* mu = accumulator( 2.0, 1.0 );
	* // returns 2.0
	*
	* mu = accumulator( 2.0, 0.5 );
	* // returns 2.0
	*
	* mu = accumulator( 3.0, 1.5 );
	* // returns 2.5
	*
	* mu = accumulator();
	* // returns 2.5
	*/
	incrwmean: typeof incrwmean;
}

/**
* Incremental statistics.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
