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

#include "stdlib/stats/base/dists/kumaraswamy/logcdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/constants/float64/ninf.h"

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF) for an arcsine distribution with minimum support `a` and maximum support `b` at a value `x`.
*
* @param x    input value
* @param a    first shape parameter
* @param b    second shape parameter
* @return     evaluated logCDF
*
* @example
* double y = stdlib_base_arcsine_cdf( 0.5, 1.0, 1.0 );
* // returns ~-0.693
*/
double stdlib_base_dists_kumaraswamy_logcdf( const double x, const double a, const double b ) {
	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( a ) ||
		stdlib_base_is_nan( b ) ||
		a <= 0.0 ||
		b <= 0.0
	) {
		return 0.0/0.0; // NaN
	}
	if ( x <= 0.0 ) {
		return STDLIB_CONSTANT_FLOAT64_NINF;
	}
	if ( x >= 1.0 ) {
		return 0.0;
	}
	return stdlib_base_ln( 1.0 - stdlib_base_pow( 1.0 - stdlib_base_pow( x, a ), b ) );
}
