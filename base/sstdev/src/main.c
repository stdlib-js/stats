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

#include "stdlib/stats/base/sstdev.h"
#include "stdlib/stats/strided/sstdevpn.h"
#include "stdlib/blas/base/shared.h"

/**
* Computes the standard deviation of a single-precision floating-point strided array.
*
* @param N            number of indexed elements
* @param correction   degrees of freedom adjustment
* @param X            input array
* @param strideX      stride length
* @return             output value
*/
float API_SUFFIX(stdlib_strided_sstdev)( const CBLAS_INT N, const float correction, const float *X, const CBLAS_INT strideX ) {
	return API_SUFFIX(stdlib_strided_sstdevpn)( N, correction, X, strideX );
}

/**
* Computes the standard deviation of a single-precision floating-point strided array using alternative indexing semantics.
*
* @param N            number of indexed elements
* @param correction   degrees of freedom adjustment
* @param X            input array
* @param strideX      stride length
* @param offsetX      starting index for X
* @return             output value
*/
float API_SUFFIX(stdlib_strided_sstdev_ndarray)( const CBLAS_INT N, const float correction, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	return API_SUFFIX(stdlib_strided_sstdevpn_ndarray)( N, correction, X, strideX, offsetX );
}
