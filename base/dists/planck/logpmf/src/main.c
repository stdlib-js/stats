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

#include "stdlib/stats/base/dists/planck/logpmf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_nonnegative_integer.h"
#include "stdlib/math/base/special/expm1.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/constants/float64/ninf.h"

/**
* Evaluates the logarithm of the probability mass function (PMF) for a Planck distribution with shape parameter `lambda`.
*
* @param x      input value
* @param lambda shape parameter
* @return       evaluated log PMF
*
* @example
* double y = stdlib_base_dists_planck_logpmf( 4.0, 0.3 );
* // returns ~-2.5502
*/
double stdlib_base_dists_planck_logpmf( const double x, const double lambda ) {
	if ( stdlib_base_is_nan( x ) || stdlib_base_is_nan( lambda ) || lambda <= 0.0 ) {
		return 0.0/0.0; // NaN
	}
	if ( stdlib_base_is_nonnegative_integer( x ) ) {
		return stdlib_base_ln( -stdlib_base_expm1( -lambda ) ) - ( lambda * x );
	}
	return STDLIB_CONSTANT_FLOAT64_NINF;
}
