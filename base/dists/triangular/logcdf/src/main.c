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

#include "stdlib/stats/base/dists/triangular/logcdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/constants/float64/ninf.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/math/base/special/pow.h"

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF) for a triangular distribution with lower limit `a`, upper limit `b`, and mode `c` at a value `x`.
*
* @param x   input value
* @param a   lower limit
* @param b   upper limit
* @param c   mode
* @return    evaluated logCDF
*
* @example
* double y = stdlib_base_dists_triangular_logcdf( 0.5, -1.0, 1.0, 0.0 );
* // returns ~-0.134
*/
double stdlib_base_dists_triangular_logcdf( const double x, const double a, const double b, const double c ) {
	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( a ) ||
		stdlib_base_is_nan( b ) ||
		stdlib_base_is_nan( c ) ||
		a > c ||
		c > b
	) {
		return 0.0/0.0; // NaN
	}
	if ( x <= a ) {
		return STDLIB_CONSTANT_FLOAT64_NINF;
	}
	if ( x <= c ) {
		return ( 2.0 * stdlib_base_ln( x - a ) - stdlib_base_ln( ( b - a ) * ( c - a ) ) );
	}
	if ( x < b ) {
		return stdlib_base_ln( 1.0 - ( stdlib_base_pow( b - x, 2.0 ) / ( ( b - a ) * ( b - c ) ) ) );
	}
	return 0.0;
}
