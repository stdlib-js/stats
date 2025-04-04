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

// MODULES //

var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var isCollection = require( '@stdlib/assert/is-collection' );
var flatten2dBy = require( '@stdlib/array/base/flatten2d-by' ).assign;
var Float64Array = require( '@stdlib/array/float64' );
var arrayShape = require( '@stdlib/array/shape' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var numel = require( '@stdlib/ndarray/base/numel' );
var vind2bind = require( '@stdlib/ndarray/base/vind2bind' );
var ind2sub = require( '@stdlib/ndarray/base/ind2sub' );
var dsumpw = require( '@stdlib/blas/ext/base/dsumpw' );
var dscal = require( '@stdlib/blas/base/dscal' );
var dapx = require( '@stdlib/blas/ext/base/dapx' );
var dmin = require( './../../strided/dmin' );
var abs = require( '@stdlib/math/base/special/abs' );
var min = require( '@stdlib/math/base/special/min' );
var format = require( '@stdlib/string/format' );
var chisqCDF = require( './../../base/dists/chisquare/cdf' );
var defaults = require( './defaults.js' );
var validate = require( './validate.js' );
var Results = require( './results.js' );


// VARIABLES //

var MODE = 'throw';


// FUNCTIONS //

/**
* Callback invoked upon flattening an array-like object.
*
* @private
* @param {NonNegativeInteger} value - nested array element
* @param {NonNegativeIntegerArray} indices - element indices
* @param {Collection<Collection>} arr - input array
* @throws {TypeError} first argument must be a nonnegative integer
* @returns {NonNegativeInteger} nested array element
*/
function flattenClbk( value, indices ) {
	if ( !isNonNegativeInteger( value ) ) {
		throw new TypeError( format( 'invalid argument. First argument must contain nonnegative integers. Indices: (%s). Value: `%s`.', indices.join( ', ' ), String( value ) ) );
	}
	return value;
}

/**
* Copies ndarray data to a new data buffer.
*
* @private
* @param {ndarrayLike} x - input ndarray-like object
* @param {NonNegativeIntegerArray} shape - array shape
* @throws {TypeError} first argument must contain nonnegative integers
* @returns {Float64Array} data buffer
*/
function copy2buffer( x, shape ) {
	var out;
	var buf;
	var idx;
	var ord;
	var sx;
	var ox;
	var N;
	var v;
	var i;

	// Cache ndarray meta data:
	buf = x.data;
	ord = x.order;
	sx = x.strides;
	ox = x.offset;

	// Compute the number of array elements:
	N = numel( shape );

	// Allocate a data buffer:
	out = new Float64Array( N );

	// Iterate over the ndarray and copy elements to a new buffer...
	for ( i = 0; i < N; i++ ) {
		idx = vind2bind( shape, sx, ox, ord, i, MODE );
		v = buf[ idx ];
		if ( !isNonNegativeInteger( v ) ) {
			throw new TypeError( format( 'invalid argument. First argument must contain nonnegative integers. Indices: (%s). Value: `%s`.', ind2sub( shape, sx, ox, ord, i, MODE ), String( v ) ) );
		}
		out[ i ] = v;
	}
	return out;
}

/**
* Computes a sum along an axis.
*
* @private
* @param {Float64Array} x - strided array
* @param {NonNegativeInteger} nrows - number of rows
* @param {NonNegativeInteger} ncols - number of columns
* @param {NonNegativeInteger} axis - axis (0: sum across the rows; 1: sum down the columns)
* @returns {Float64Array} results
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* // 2x3: [ [ 1.0, 2.0, 3.0 ], [ 4.0, 5.0, 6.0 ] ]
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* var rsums = axisSum( x, 2, 3, 0 );
* // returns <Float64Array>[ 6.0, 15.0 ]
*
* var csums = axisSum( x, 2, 3, 1 );
* // returns <Float64Array>[ 5.0, 7.0, 9.0 ]
*/
function axisSum( x, nrows, ncols, axis ) {
	var offset;
	var out;
	var dx0;
	var dx1;
	var S0;
	var S1;
	var i1;

	// Resolve loop variables...
	if ( axis === 0 ) {
		// Sum across rows...
		S0 = ncols;
		S1 = nrows;
		dx0 = 1;
		dx1 = ncols;
	} else { // axis === 1
		// Sum down columns...
		S0 = nrows;
		S1 = ncols;
		dx0 = ncols;
		dx1 = 1;
	}
	out = new Float64Array( S1 );
	offset = 0;
	for ( i1 = 0; i1 < S1; i1++ ) {
		out[ i1 ] = dsumpw.ndarray( S0, x, dx0, offset );
		offset += dx1;
	}
	return out;
}

/**
* Computes the outer product.
*
* @private
* @param {Float64Array} x - first input array
* @param {Float64Array} y - second input array
* @returns {Float64Array} results
*/
function outer( x, y ) {
	var out;
	var io;
	var M;
	var N;
	var v;
	var i;
	var j;

	M = x.length;
	N = y.length;

	out = new Float64Array( M*N );
	io = 0;
	for ( i = 0; i < M; i++ ) {
		v = x[ i ];
		for ( j = 0; j < N; j++ ) {
			out[ io ] = v * y[ j ];
			io += 1;
		}
	}
	return out;
}

/**
* Computes the element-wise absolute difference.
*
* @private
* @param {Float64Array} x - first input array
* @param {Float64Array} y - second input array
* @returns {Float64Array} results
*/
function absdiff( x, y ) {
	var out;
	var i;

	out = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		out[ i ] = abs( x[ i ] - y[ i ] );
	}
	return out;
}

/**
* Computes the test statistic.
*
* ## Notes
*
* -   Mutates the first input array.
*
* @private
* @param {Float64Array} x - absolute differences
* @param {Float64Array} m - expected frequencies
* @returns {number} test statistic
*/
function testStatistic( x, m ) {
	var i;
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = ( x[i]*x[i] ) / m[ i ];
	}
	return dsumpw( x.length, x, 1 );
}


// MAIN //

/**
* Performs a chi-square independence test.
*
* @param {(MatrixLike|Collection<Collection>)} x - two-way table of observed frequencies
* @param {Options} [options] - function options
* @param {number} [options.alpha=0.05] - significance level
* @param {boolean} [options.correct=true] - boolean indicating whether to use Yates' continuity correction when provided a 2x2 contingency table
* @throws {TypeError} first argument must be an array of arrays or a two-dimensional ndarray-like object
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {RangeError} significance level must be a number on the interval `[0,1]`
* @returns {Object} test results
*
* @example
* var x = [ [ 20, 30 ], [ 30, 20 ] ];
*
* var out = chi2test( x );
*
* var o = out.toJSON();
* // returns { 'rejected': false, 'alpha': 0.05, 'pValue': ~0.072, ... }
*/
function chi2test( x, options ) {
	var correction;
	var diffs;
	var csums;
	var rsums;
	var means;
	var opts;
	var pval;
	var stat;
	var err;
	var cnt;
	var buf;
	var dof;
	var sh;
	var M;
	var N;

	if ( isndarrayLike( x ) ) {
		sh = x.shape;
		if ( sh.length !== 2 ) {
			throw new TypeError( format( 'invalid argument. First argument must be an array of arrays or a two-dimensional ndarray-like object. Number of input array dimensions: %u.', sh.length ) );
		}
		buf = copy2buffer( x, sh );
	} else if ( isCollection( x ) ) {
		sh = arrayShape( x );
		if ( sh.length !== 2 ) {
			throw new TypeError( format( 'invalid argument. First argument must be an array of arrays or a two-dimensional ndarray-like object. Number of input array dimensions: %u.', sh.length ) );
		}
		buf = new Float64Array( numel( sh ) );
		flatten2dBy( x, sh, false, buf, 1, 0, flattenClbk );
	} else {
		throw new TypeError( format( 'invalid argument. First argument must be an array of arrays or a two-dimensional ndarray-like object. Value: `%s`.', x ) );
	}
	// NOTE: `buf` is now a single-segment contiguous `Float64Array` containing nonnegative integer values...

	opts = defaults();
	if ( arguments.length > 1 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	// Extract the array dimensions:
	M = sh[ 0 ]; // number of rows
	N = sh[ 1 ]; // number of columns

	// Compute the total number of observations:
	cnt = dsumpw( M*N, buf, 1 );

	// Compute marginal sums:
	rsums = axisSum( buf, M, N, 0 ); // sum across the rows (length: M)
	csums = axisSum( buf, M, N, 1 ); // sum down the columns (length: N)

	// Compute the outer product:
	means = outer( rsums, csums ); // MxN

	// Compute the expected frequencies:
	means = dscal( means.length, 1.0/cnt, means, 1 );

	// Compute the absolute differences between the observed and expected frequencies:
	diffs = absdiff( buf, means );

	// Apply Yates' continuity correction...
	if ( M === 2 && N === 2 && opts.correct ) {
		correction = min( 0.5, dmin( diffs.length, diffs, 1 ) );
		dapx( diffs.length, -correction, diffs, 1 );
	}

	// Compute the test statistic:
	stat = testStatistic( diffs, means );

	// Compute the number of degrees of freedom:
	dof = ( M-1 ) * ( N-1 );

	// Compute the p-value:
	pval = 1 - chisqCDF( stat, dof );

	// Return test results:
	means = new ndarray( 'float64', means, [ M, N ], [ N, 1 ], 0, 'row-major', {
		'readonly': true
	});
	return new Results( pval, opts.alpha, stat, dof, means );
}


// EXPORTS //

module.exports = chi2test;
