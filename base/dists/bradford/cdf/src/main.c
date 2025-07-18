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

#include "stdlib/stats/base/dists/bradford/cdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/log1p.h"

/**
* Evaluates the cumulative distribution function (CDF) for a Bradford distribution with shape parameter `c` at a value `x`.
*
* @param x    input value
* @param c    shape parameter
* @return     evaluated CDF
*
* @example
* double y = stdlib_base_dists_bradford_cdf( 0.5, 5.0 );
* // returns ~0.699
*/
double stdlib_base_dists_bradford_cdf( const double x, const double c ) {
	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( c ) ||
		c <= 0.0
	) {
		return 0.0/0.0; // NaN
	}
	if ( x <= 0.0 ) {
		return 0.0;
	}
	if ( x >= 1.0 ) {
		return 1.0;
	}
	return stdlib_base_log1p( c * x ) / stdlib_base_log1p( c );
}
