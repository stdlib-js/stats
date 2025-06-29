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

#include "stdlib/stats/base/dists/logistic/cdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/exp.h"

/**
* Evaluates the cumulative distribution function (CDF) for a logistic distribution with location parameter `mu` and scale parameter `s` at a value `x`.
*
* @param x    input value
* @param mu   location parameter
* @param s    scale parameter
* @return     evaluated CDF
*
* @example
* double y = stdlib_base_dists_logistic_cdf( 2.0, 0.0, 1.0 );
* // returns ~0.881
*/
double stdlib_base_dists_logistic_cdf( const double x, const double mu, const double s ) {
	double z;
	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( s ) ||
		s < 0.0
	) {
		return 0.0 / 0.0; // NaN
	}
	if ( s == 0.0 ) {
		return ( x < mu ) ? 0.0 : 1.0;
	}
	z = ( x - mu ) / s;
	return 1.0 / ( 1.0 + stdlib_base_exp( -z ) );
}
