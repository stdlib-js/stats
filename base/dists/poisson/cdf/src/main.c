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

#include "stdlib/stats/base/dists/poisson/cdf.h"
#include "stdlib/math/base/special/gammainc.h"
#include "stdlib/math/base/special/floor.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/constants/float64/pinf.h"

/**
* Evaluates the cumulative distribution function (CDF) for a Poisson distribution with mean parameter `lambda` at a value `x`.
*
* @param x        input value
* @param lambda   mean parameter
* @return         evaluated CDF
*
* @example
* double y = stdlib_base_dists_poisson_cdf( 2.0, 0.5 );
* // returns ~0.986
*/
double stdlib_base_dists_poisson_cdf( const double x, const double lambda ) {
	if ( stdlib_base_is_nan( x ) || stdlib_base_is_nan( lambda ) || lambda < 0.0 ) {
		return 0.0 / 0.0; // NaN
	}
	if ( x < 0.0 ) {
		return 0.0;
	}
	if ( lambda == 0.0 || x == STDLIB_CONSTANT_FLOAT64_PINF ) {
		return 1.0;
	}
	return stdlib_base_gammainc( lambda, stdlib_base_floor( x ) + 1.0, true, true );
}
