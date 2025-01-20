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

#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/stats/base/dists/arcsine/skewness.h"

/**
* Returns the skewness of an arcsine distribution.
*
* @param a    minimum support
* @param b    maximum support
* @return     skewness
*
* @example
* double v = stdlib_base_dists_arcsine_skewness( 0.0, 1.0 );
* // returns 0.0
*/
double stdlib_base_dists_arcsine_skewness( const double a, const double b ) {
	if ( stdlib_base_is_nan( a ) || stdlib_base_is_nan( b ) || a >= b ) {
		return 0.0 / 0.0; // NaN
	}
	return 0.0;
}
