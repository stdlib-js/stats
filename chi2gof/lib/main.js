/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isCollection = require( '@stdlib/assert/is-collection' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var absdiff = require( '@stdlib/math/base/utils/absolute-difference' );
var FLOAT64_SQRT_EPS = require( '@stdlib/constants/float64/sqrt-eps' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var chisqCDF = require( './../../base/dists/chisquare/cdf' );
var format = require( '@stdlib/string/format' );
var isnan = require( '@stdlib/assert/is-nan' );
var daxpy = require( '@stdlib/blas/base/daxpy' );
var dscal = require( '@stdlib/blas/base/dscal' );
var dsumpw = require( '@stdlib/blas/ext/base/dsumpw' );
var Float64Array = require( '@stdlib/array/float64' );
var defaults = require( './defaults.js' );
var validate = require( './validate.js' );
var getPMF = require( './get_pmf.js' );
var testStatistic = require( './statistic.js' );
var simulate = require( './simulate.js' );
var Results = require( './results.js' );


// MAIN //

/**
* Performs a chi-square goodness-of-fit test.
*
* @param {(Collection|VectorLike)} x - observation frequencies
* @param {(Collection|VectorLike|string)} y - expected frequencies or a discrete probability distribution name
* @param {...number} [args] - probability mass function (PMF) arguments
* @param {Options} [options] - function options
* @param {number} [options.alpha=0.05] - significance level
* @param {NonNegativeInteger} [options.ddof=0] - degrees of freedom adjustment
* @param {boolean} [options.simulate=false] - boolean indicating whether to compute p-values by Monte Carlo simulation
* @param {PositiveInteger} [options.iterations=500] - number of Monte Carlo iterations
* @throws {TypeError} first argument must be an array-like object or a 1-dimensional array containing nonnegative integers
* @throws {TypeError} second argument must be either an array-like object (or a 1-dimensional array) of nonnegative numbers, an array-like object (or a 1-dimensional array) of probabilities summing to one, or a discrete probability distribution name
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {RangeError} first and second arguments must have the same length
* @throws {Error} first argument must contain at least one element greater than zero
* @throws {RangeError} significance level must be a number on the interval `[0,1]`
* @throws {TypeError} probability mass function (PMF) arguments must be numbers
* @returns {Object} test results
*
* @example
* var x = [ 89, 37, 30, 28, 2 ];
* var p = [ 0.40, 0.20, 0.20, 0.15, 0.05 ];
*
* var out = chi2gof( x, p );
*
* var o = out.toJSON();
* // returns { 'pValue': ~0.0406, 'statistic': ~9.9901, ... }
*/
function chi2gof( x, y ) {
	var expected;
	var nargs;
	var args;
	var opts;
	var pval;
	var stat;
	var obs;
	var err;
	var pmf;
	var sum;
	var df;
	var N;
	var d;
	var s;
	var o;
	var n;
	var p;
	var v;
	var i;

	if ( isndarrayLike( x ) && x.ndims === 1 && x.strides.length === 1 ) { // is ndarray-like vector?
		d = x.data;
		s = x.strides[ 0 ];
		o = x.offset;
	} else if ( isCollection( x ) ) {
		d = x;
		s = 1;
		o = 0;
	} else {
		throw new TypeError( format( 'invalid argument. First argument must be either an array-like object or a one-dimensional ndarray. Value: `%s`.', x ) );
	}
	N = x.length;

	// Initialize an array for storing a copy of the observations array:
	obs = new Float64Array( N+1 ); // Note: `N+1` is intentional in the event that we need to add a remaining category for all values greater than or equal to `N`

	n = 0;
	for ( i = 0; i < N; i++ ) {
		v = d[ o+(s*i) ];
		if ( !isNonNegativeInteger( v ) ) {
			throw new TypeError( format( 'invalid argument. First argument must contain nonnegative integers. Index: `%u`. Value: `%s`.', i, v ) );
		}
		obs[ i ] = v;
		n += v;
	}
	if ( n === 0 ) {
		throw new Error( 'invalid argument. First argument must contain at least one element greater than zero (i.e., the total number number of observations must be greater than zero).' );
	}
	// NOTE: `obs` is now a single-segment contiguous Float64Array

	nargs = 0;
	if ( isString( y ) ) {
		pmf = getPMF( y );
		if ( pmf instanceof Error ) {
			throw pmf;
		}
		nargs += pmf.length - 1; // WARNING: this relies on PMF functions having an explicit arity
		args = [ 0 ];
		for ( i = 0; i < nargs; i++ ) {
			v = arguments[ i+2 ];
			if ( !isNumber( v ) || isnan( v ) ) {
				throw new TypeError( format( 'invalid argument. Probability mass function (PMF) arguments must be numbers. Argument: `%u`. Value: `%s`.', i+2, v ) );
			}
			args.push( v );
		}
		expected = new Float64Array( N+1 );
		sum = 0.0;
		for ( i = 0; i < N; i++ ) {
			args[ 0 ] = i;
			if ( y === 'discrete-uniform' ) {
				args[ 0 ] += args[ 1 ]; // scales the value at which to evaluate the PMF based on the minimum support of the distribution (which should have been provided as the first distribution parameter)
			}
			v = pmf.apply( null, args );
			sum += v;
			expected[ i ] = v * n;
		}
		// Check whether we need to add a remaining category for all values greater than or equal to `N`...
		if ( sum < 1.0 ) {
			expected[ N ] = (1.0-sum) * n;
			N += 1;
		}
	} else {
		if ( isndarrayLike( y ) && y.ndims === 1 && y.strides.length === 1 ) { // is ndarray-like vector?
			d = y.data;
			s = y.strides[ 0 ];
			o = y.offset;
		} else if ( isCollection( y ) ) {
			d = y;
			s = 1;
			o = 0;
		} else {
			throw new TypeError( format( 'invalid argument. Second argument must be either an array-like object (or one-dimensional ndarray) of probabilities summing to one, an array-like object (or one-dimensional ndarray) of expected frequencies, or a discrete probability distribution name. Value: `%s`.', y ) );
		}
		if ( y.length !== N ) {
			throw new RangeError( 'invalid arguments. First and second arguments must have the same length.' );
		}
		expected = new Float64Array( N );
		sum = 0.0;
		for ( i = 0; i < N; i++ ) {
			v = d[ o+(s*i) ];
			if ( !isNumber( v ) ) {
				throw new TypeError( format( 'invalid argument. Second argument must only contain numbers. Index: `%u`. Value: `%s`.', i, v ) );
			}
			if ( v < 0.0 ) {
				throw new TypeError( format( 'invalid argument. Second argument must only contain nonnegative numbers. Index: `%u`. Value: `%d`.', i, v ) );
			} else if ( v > 1.0 ) {
				sum += PINF;
			} else {
				sum += v;
			}
			expected[ i ] = v;
		}
		// Check if provided a unity probability array (otherwise, assume provided an expected frequencies array)...
		if ( absdiff( sum, 1.0 ) <= FLOAT64_SQRT_EPS ) {
			p = y; // NOTE: `y` may not be a Float64Array
			expected = dscal( N, n, expected, 1 );
		}
	}
	// NOTE: `expected` is now a single-segment contiguous Float64Array

	opts = defaults();
	if ( arguments.length > 2+nargs ) {
		err = validate( opts, arguments[ 2+nargs ] );
		if ( err ) {
			throw err;
		}
	}
	stat = testStatistic( N, obs, 1, expected, 1 ); // TODO: consider replacing with low-level double-precision strided interface
	if ( opts.simulate ) {
		if ( p === void 0 ) {
			v = dsumpw( N, expected, 1 );
			p = daxpy( N, 1.0/v, expected, 1, new Float64Array( N ), 1 );
		}
		pval = simulate( N, expected, p, stat, n, opts.iterations );
	} else {
		df = N - 1 - opts.ddof;
		pval = 1.0 - chisqCDF( stat, df );
	}
	return new Results( pval, opts.alpha, stat, ( df === void 0 ) ? null : df );
}


// EXPORTS //

module.exports = chi2gof;
