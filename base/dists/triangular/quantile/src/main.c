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

#include "stdlib/stats/base/dists/triangular/quantile.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/sqrt.h"

/**
* Evaluates the quantile function for a triangular distribution with parameters `a` (lower limit), `b` (upper limit), and `c` (mode).
*
* @param p    input probability
* @param a    minimum support
* @param b    maximum support
* @param c    mode
* @return     evaluated quantile function
*
* @example
* double y = stdlib_base_triangular_quantile( 0.9, -1.0, 1.0, 0.0 );
* // returns ~0.553
*/
double stdlib_base_dists_triangular_quantile( const double p, const double a, const double b, const double c ) {
	if (
		stdlib_base_is_nan( p ) ||
		stdlib_base_is_nan( a ) ||
		stdlib_base_is_nan( b ) ||
		stdlib_base_is_nan( c ) ||
		a > c ||
		c > b ||
		p < 0.0 ||
		p > 1.0
	) {
		return 0.0/0.0; // NaN
	}
	double pInflection = ( c - a ) / ( b - a );
	if ( p < pInflection ) {
		return a + stdlib_base_sqrt( ( b - a ) * ( c - a ) * p );
	}
	if ( p > pInflection ) {
		return b - stdlib_base_sqrt( ( b - a ) * ( b - c ) * ( 1.0 - p ) );
	}
	return c;
}
