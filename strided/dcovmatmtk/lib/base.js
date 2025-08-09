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

/* eslint-disable max-len, max-params */

'use strict';

// MODULES //

var isRowMajor = require( '@stdlib/ndarray/base/assert/is-row-major' );
var dcovarmtk = require( './../../../strided/dcovarmtk' ).ndarray;
var dvarmtk = require( './../../../strided/dvarmtk' ).ndarray;
var dlacpy = require( '@stdlib/lapack/base/dlacpy' ).ndarray;


// MAIN //

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
* @private
* @param {string} orient - specifies whether variables are stored along columns or along rows
* @param {string} uplo - specifies whether to overwrite the upper or lower triangular part of matrix `B`
* @param {NonNegativeInteger} M - number of rows in the matrix `A`
* @param {NonNegativeInteger} N - number of columns in the matrix `A`
* @param {number} correction - degrees of freedom adjustment
* @param {Float64Array} means - vector of known means
* @param {integer} strideM - stride length for `means`
* @param {NonNegativeInteger} offsetM - starting index for `means`
* @param {Float64Array} A - input matrix
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @param {Float64Array} B - output matrix
* @param {integer} strideB1 - stride of the first dimension of `B`
* @param {integer} strideB2 - stride of the second dimension of `B`
* @param {NonNegativeInteger} offsetB - starting index for `B`
* @returns {Float64Array} `B`
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
* var out = dcovmatmtk( 'rows', 'full', 2, 3, 1, means, 1, 0, A, 3, 1, 0, B, 2, 1, 0 );
* // returns <Float64Array>[ ~4.3333, ~3.8333, ~3.8333, ~4.3333 ]
*
* var bool = ( B === out );
* // returns true
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* // Define a 3x2 matrix in which variables are stored along columns in row-major order:
* var A = new Float64Array([
*     1.0, 2.0,
*     -2.0, -2.0,
*     2.0, 1.0
* ]);
*
* // Define a vector of known means:
* var means = new Float64Array( [ 1.0/3.0, 1.0/3.0 ] );
*
* // Allocate a 2x2 output matrix:
* var B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
*
* // Perform operation:
* var out = dcovmatmtk( 'columns', 'full', 3, 2, 1, means, 1, 0, A, 2, 1, 0, B, 2, 1, 0 );
* // returns <Float64Array>[ ~4.3333, ~3.8333, ~3.8333, ~4.3333 ]
*
* var bool = ( B === out );
* // returns true
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* // Define a 2x3 matrix in which variables are stored along rows in column-major order:
* var A = new Float64Array( [ 1.0, 2.0, -2.0, -2.0, 2.0, 1.0 ] );
*
* // Define a vector of known means:
* var means = new Float64Array( [ 1.0/3.0, 1.0/3.0 ] );
*
* // Allocate a 2x2 output matrix:
* var B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
*
* // Perform operation:
* var out = dcovmatmtk( 'rows', 'full', 2, 3, 1, means, 1, 0, A, 1, 2, 0, B, 2, 1, 0 );
* // returns <Float64Array>[ ~4.3333, ~3.8333, ~3.8333, ~4.3333 ]
*
* var bool = ( B === out );
* // returns true
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* // Define a 3x2 matrix in which variables are stored along columns in column-major order:
* var A = new Float64Array( [ 1.0, -2.0, 2.0, 2.0, -2.0, 1.0 ] );
*
* // Define a vector of known means:
* var means = new Float64Array( [ 1.0/3.0, 1.0/3.0 ] );
*
* // Allocate a 2x2 output matrix:
* var B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
*
* // Perform operation:
* var out = dcovmatmtk( 'columns', 'full', 3, 2, 1, means, 1, 0, A, 1, 3, 0, B, 2, 1, 0 );
* // returns <Float64Array>[ ~4.3333, ~3.8333, ~3.8333, ~4.3333 ]
*
* var bool = ( B === out );
* // returns true
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* // Define a 4x3 matrix in which variables are stored along rows in row-major order:
* var A = new Float64Array([
*     1.0, -2.0, 2.0,
*     2.0, -2.0, 1.0,
*     2.0, -2.0, 1.0,
*     1.0, -2.0, 2.0
* ]);
*
* // Define a vector of known means:
* var means = new Float64Array( [ 1.0/3.0, 1.0/3.0, 1.0/3.0, 1.0/3.0 ] );
*
* // Allocate a 4x4 output matrix:
* var B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* // Perform operation:
* var out = dcovmatmtk( 'rows', 'full', 4, 3, 1, means, 1, 0, A, 3, 1, 0, B, 4, 1, 0 );
* // returns <Float64Array>[ ~4.33, ~3.83, ~3.83, ~4.33, ~3.83, ~4.33, ~4.33, ~3.83, ~3.83, ~4.33, ~4.33, ~3.83, ~4.33, ~3.83, ~3.83, ~4.33 ]
*
* var bool = ( B === out );
* // returns true
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* // Define a 3x4 matrix in which variables are stored along columns in column-major order:
* var A = new Float64Array( [ 1.0, -2.0, 2.0, 2.0, -2.0, 1.0, 2.0, -2.0, 1.0, 1.0, -2.0, 2.0 ] );
*
* // Define a vector of known means:
* var means = new Float64Array( [ 1.0/3.0, 1.0/3.0, 1.0/3.0, 1.0/3.0 ] );
*
* // Allocate a 4x4 output matrix:
* var B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* // Perform operation:
* var out = dcovmatmtk( 'columns', 'full', 3, 4, 1, means, 1, 0, A, 1, 3, 0, B, 4, 1, 0 );
* // returns <Float64Array>[ ~4.33, ~3.83, ~3.83, ~4.33, ~3.83, ~4.33, ~4.33, ~3.83, ~3.83, ~4.33, ~4.33, ~3.83, ~4.33, ~3.83, ~3.83, ~4.33 ]
*
* var bool = ( B === out );
* // returns true
*/
function dcovmatmtk( orient, uplo, M, N, correction, means, strideM, offsetM, A, strideA1, strideA2, offsetA, B, strideB1, strideB2, offsetB ) {
	var nsamples;
	var isrmb;
	var full;
	var nobs;
	var sa1;
	var sa0;
	var sb1;
	var sb0;
	var sb;
	var oa;
	var om;
	var ia;
	var ib;
	var im;
	var i0;
	var i1;

	// Determine the memory layouts of `B`:
	isrmb = isRowMajor( [ strideB1, strideB2 ] );

	// Determine the outer and inner loop strides when writing to the upper or lower triangular part of `B`...
	if ( uplo === 'upper') {
		// Writing to the upper triangular part is cache optimal for a row-major `B`, but not for a column-major `B`...
		sb0 = strideB2;
		sb1 = strideB1;
	} else if ( uplo === 'lower' ) {
		// Writing to the lower triangular part is cache optimal for a column-major `B`, but not for a row-major `B`...
		sb0 = strideB1;
		sb1 = strideB2;
	} else {
		// When computing the full covariance matrix, write covariances in a manner which is cache optimal for the layout of `B`...
		full = true;
		if ( isrmb ) {
			// For row-major matrices, the last dimension has the fastest changing index...
			sb0 = strideB2;
			sb1 = strideB1;
		} else {
			// For column-major matrices, the first dimension has the fastest changing index...
			sb0 = strideB1;
			sb1 = strideB2;
		}
	}
	// Resolve loop variables...
	if ( orient === 'rows' ) {
		sa0 = strideA2;
		sa1 = strideA1;
		nsamples = M;
		nobs = N;
	} else { // orient === 'columns'
		sa0 = strideA1;
		sa1 = strideA2;
		nsamples = N;
		nobs = M;
	}
	// Compute the variances and set them along the diagonal...
	sb = strideB1 + strideB2; // stride for elements along diagonal
	ia = offsetA;
	ib = offsetB;
	im = offsetM;
	for ( i0 = 0; i0 < nsamples; i0++ ) {
		B[ ib ] = dvarmtk( nobs, correction, means[ im ], A, sa0, ia );
		ia += sa1;
		ib += sb;
		im += strideM;
	}
	// Compute pairwise covariances...
	oa = offsetA;
	om = offsetM;
	for ( i1 = 0; i1 < nsamples-1; i1++ ) {
		ib = offsetB + ( sb1*i1 ) + ( sb0*i1 );
		ia = oa;
		im = om;
		for ( i0 = i1+1; i0 < nsamples; i0++ ) {
			im += strideM;
			ia += sa1;
			ib += sb0;
			B[ ib ] = dcovarmtk( nobs, correction, means[ om ], A, sa0, oa, means[ im ], A, sa0, ia );
		}
		oa += sa1;
		om += strideM;
	}
	// Copy the covariances to the other triangular part if the full covariance matrix is desired...
	if ( full ) {
		if ( isrmb ) {
			// Copy the upper triangular part to the lower triangular part:
			dlacpy( 'upper', nsamples, nsamples, B, sb1, sb0, offsetB, B, sb0, sb1, offsetB );
		} else {
			// Copy the lower triangular part to the upper triangular part:
			dlacpy( 'lower', nsamples, nsamples, B, sb0, sb1, offsetB, B, sb1, sb0, offsetB );
		}
	}
	return B;
}


// EXPORTS //

module.exports = dcovmatmtk;
