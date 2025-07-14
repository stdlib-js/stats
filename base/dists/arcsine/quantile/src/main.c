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

#include "stdlib/stats/base/dists/arcsine/quantile.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/math/base/special/sin.h"
#include "stdlib/constants/float64/half_pi.h"

/**
* Evaluates the quantile function for an arcsine distribution with minimum support `a` and maximum support `b` at a probability `p`.
*
* @param p    input value
* @param a    minimum support
* @param b    maximum support
* @return     evaluated quantile function
*
* @example
* double y = stdlib_base_dists_arcsine_quantile( 0.8, 0.0, 1.0 );
* // returns ~0.905
*/
double stdlib_base_dists_arcsine_quantile( const double p, const double a, const double b ) {
	if (
		stdlib_base_is_nan( a ) ||
		stdlib_base_is_nan( b ) ||
		a >= b
	) {
		return 0.0/0.0; // NaN
	}
	if ( stdlib_base_is_nan( p ) || p < 0.0 || p > 1.0 ) {
		return 0.0/0.0; // NaN
	}
	return a + ( stdlib_base_pow( stdlib_base_sin( STDLIB_CONSTANT_FLOAT64_HALF_PI*p ), 2.0 ) * ( b-a ) );
}
