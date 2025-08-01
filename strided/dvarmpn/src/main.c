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

#include "stdlib/stats/strided/dvarmpn.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/blas/base/shared.h"

/**
* Computes the variance of a double-precision floating-point strided array provided a known mean and using Neely's correction algorithm.
*
* ## References
*
* -   Neely, Peter M. 1966. "Comparison of Several Algorithms for Computation of Means, Standard Deviations and Correlation Coefficients." _Communications of the ACM_ 9 (7). Association for Computing Machinery: 496–99. doi:[10.1145/365719.365958](https://doi.org/10.1145/365719.365958).
* -   Schubert, Erich, and Michael Gertz. 2018. "Numerically Stable Parallel Computation of (Co-)Variance." In _Proceedings of the 30th International Conference on Scientific and Statistical Database Management_. New York, NY, USA: Association for Computing Machinery. doi:[10.1145/3221269.3223036](https://doi.org/10.1145/3221269.3223036).
*
* @param N            number of indexed elements
* @param correction   degrees of freedom adjustment
* @param mean         mean
* @param X            input array
* @param strideX      stride length
* @return             output value
*/
double API_SUFFIX(stdlib_strided_dvarmpn)( const CBLAS_INT N, const double correction, const double mean, const double *X, const CBLAS_INT strideX ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	return API_SUFFIX(stdlib_strided_dvarmpn_ndarray)( N, correction, mean, X, strideX, ox );
}

/**
* Computes the variance of a double-precision floating-point strided array provided a known mean and using Neely's correction algorithm and alternative indexing semantics.
*
* ## References
*
* -   Neely, Peter M. 1966. "Comparison of Several Algorithms for Computation of Means, Standard Deviations and Correlation Coefficients." _Communications of the ACM_ 9 (7). Association for Computing Machinery: 496–99. doi:[10.1145/365719.365958](https://doi.org/10.1145/365719.365958).
* -   Schubert, Erich, and Michael Gertz. 2018. "Numerically Stable Parallel Computation of (Co-)Variance." In _Proceedings of the 30th International Conference on Scientific and Statistical Database Management_. New York, NY, USA: Association for Computing Machinery. doi:[10.1145/3221269.3223036](https://doi.org/10.1145/3221269.3223036).
*
* @param N            number of indexed elements
* @param correction   degrees of freedom adjustment
* @param mean         mean
* @param X            input array
* @param strideX      stride length
* @param offsetX      starting index for X
* @return             output value
*/
double API_SUFFIX(stdlib_strided_dvarmpn_ndarray)( const CBLAS_INT N, const double correction, const double mean, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	CBLAS_INT ix;
	CBLAS_INT i;
	double dN;
	double M2;
	double M;
	double n;
	double d;

	dN = (double)N;
	n = dN - correction;
	if ( N <= 0 || n <= 0.0 ) {
		return 0.0 / 0.0; // NaN
	}
	if ( N == 1 || strideX == 0 ) {
		return 0.0;
	}
	ix = offsetX;
	M2 = 0.0;
	M = 0.0;
	for ( i = 0; i < N; i++ ) {
		d = X[ ix ] - mean;
		M2 += d * d;
		M += d;
		ix += strideX;
	}
	return (M2/n) - ((M/dN)*(M/n));
}
