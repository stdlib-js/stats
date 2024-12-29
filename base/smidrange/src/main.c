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

#include "stdlib/stats/base/smidrange.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/assert/is_positive_zerof.h"
#include "stdlib/math/base/assert/is_negative_zerof.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Computes the mid-range of a single-precision floating-point strided array.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
* @return         output value
*/
float API_SUFFIX(stdlib_strided_smidrange)( const CBLAS_INT N, const float *X, const CBLAS_INT strideX ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	return API_SUFFIX(stdlib_strided_smidrange_ndarray)( N, X, strideX, ox );
}

/**
* Computes the mid-range of a single-precision floating-point strided array and using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
* @param offsetX  starting index for X
* @return         output value
*/
float API_SUFFIX(stdlib_strided_smidrange_ndarray)( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	CBLAS_INT ix;
	CBLAS_INT i;
	float max;
	float min;
	float v;

	if ( N <= 0 ) {
		return 0.0 / 0.0; // NaN
	}
	if ( N == 1 || strideX == 0 ) {
		return X[ offsetX ];
	}
	ix = offsetX;
	min = X[ ix ];
	max = min;
	for ( i = 1; i < N; i++ ) {
		ix += strideX;
		v = X[ ix ];
		if ( stdlib_base_is_nanf( v ) ) {
			return v;
		}
		if ( v < min || ( v == min && stdlib_base_is_negative_zerof( v ) ) ) {
			min = v;
		} else if ( v > max || ( v == max && stdlib_base_is_positive_zerof( v ) ) ) {
			max = v;
		}
	}
	return ( max+min ) / 2.0;
}
