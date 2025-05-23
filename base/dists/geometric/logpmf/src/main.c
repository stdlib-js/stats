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

#include "stdlib/stats/base/dists/geometric/logpmf.h"
#include "stdlib/math/base/assert/is_nonnegative_integer.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/constants/float64/ninf.h"
#include <math.h>

/**
* Evaluates the logarithm of the probability mass function (PMF) for a geometric distribution with success probability `p` at a value `x`.
*
* @param x  input value
* @param p  success probability
* @return   logarithm of PMF
*
* @example
* double y = stdlib_base_dists_geometric_logpmf( 4.0, 0.3 );
* // returns ~-2.631
*/
double stdlib_base_dists_geometric_logpmf( const double x, const double p ) {
	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( p ) ||
		p < 0.0 ||
		p > 1.0
	) {
		return 0.0/0.0; // NaN
	}
	if ( stdlib_base_is_nonnegative_integer( x ) ) {
		return stdlib_base_ln( p ) + ( x * stdlib_base_ln( 1.0 - p ) );
	}
	return STDLIB_CONSTANT_FLOAT64_NINF;
}
