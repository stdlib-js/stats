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

#include "stdlib/stats/base/dnanmeanwd.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"
#include <stdint.h>

/**
* Computes the arithmetic mean of a double-precision floating-point strided array, using Welford's algorithm and ignoring `NaN` values.
*
* ## Method
*
* -   This implementation uses Welford's algorithm for efficient computation, which can be derived as follows
*
*     ```tex
*     \begin{align*}
*     \mu_n &= \frac{1}{n} \sum_{i=0}^{n-1} x_i \\
*           &= \frac{1}{n} \biggl(x_{n-1} + \sum_{i=0}^{n-2} x_i \biggr) \\
*           &= \frac{1}{n} (x_{n-1} + (n-1)\mu_{n-1}) \\
*           &= \mu_{n-1} + \frac{1}{n} (x_{n-1} - \mu_{n-1})
*     \end{align*}
*     ```
*
* ## References
*
* -   Welford, B. P. 1962. "Note on a Method for Calculating Corrected Sums of Squares and Products." _Technometrics_ 4 (3). Taylor & Francis: 419–20. doi:[10.1080/00401706.1962.10490022](https://doi.org/10.1080/00401706.1962.10490022).
* -   van Reeken, A. J. 1968. "Letters to the Editor: Dealing with Neely's Algorithms." _Communications of the ACM_ 11 (3): 149–50. doi:[10.1145/362929.362961](https://doi.org/10.1145/362929.362961).
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
* @return         output value
*/
double API_SUFFIX(stdlib_strided_dnanmeanwd)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	return API_SUFFIX(stdlib_strided_dnanmeanwd_ndarray)( N, X, strideX, ox );
}

/**
* Computes the arithmetic mean of a double-precision floating-point strided array, ignoring `NaN` values and using Welford's algorithm and alternative indexing semantics.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
* @param offsetX  starting index for X
* @return         output value
*/
double API_SUFFIX(stdlib_strided_dnanmeanwd_ndarray)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	CBLAS_INT ix;
	CBLAS_INT i;
	CBLAS_INT n;
	double mu;
	double v;

	if ( N <= 0 ) {
		return 0.0 / 0.0; // NaN
	}
	if ( N == 1 || strideX == 0 ) {
		return X[ offsetX ];
	}
	ix = offsetX;
	mu = 0.0;
	n = 0;
	for ( i = 0; i < N; i++ ) {
		v = X[ ix ];
		if ( v == v ) {
			n += 1;
			mu += ( v-mu ) / (double)n;
		}
		ix += strideX;
	}
	if ( n == 0 ) {
		return 0.0 / 0.0; // NaN;
	}
	return mu;
}
