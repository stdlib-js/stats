/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

#include "stdlib/stats/base/dists/triangular/kurtosis.h"
#include "stdlib/math/base/assert/is_nan.h"

/**
* Returns the excess kurtosis of a triangular distribution.
*
* @param a    minimum support
* @param b    maximum support
* @param c    mode
* @return     excess kurtosis
*
* @example
* double y = stdlib_base_triangular_kurtosis( 0.0, 1.0, 0.5 );
* // returns -0.6
*/
double stdlib_base_dists_triangular_kurtosis( const double a, const double b, const double c ) {
	if (
		stdlib_base_is_nan( a ) ||
		stdlib_base_is_nan( b ) ||
		stdlib_base_is_nan( c ) ||
		!( a <= c && c <= b )
	) {
		return 0.0/0.0; // NaN
	}
	return -0.6;
}
