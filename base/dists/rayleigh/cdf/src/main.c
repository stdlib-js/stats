/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

#include "stdlib/stats/base/dists/rayleigh/cdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/math/base/special/pow.h"

/**
* Evaluates the cumulative distribution function (CDF) for a Rayleigh distribution with scale parameter `sigma` at a value `x`.
*
* @param x        input value
* @param sigma    scale parameter
* @return         evaluated CDF
*
* @example
* double y = stdlib_base_arcsine_cdf( 2.0, 3.0 );
* // returns ~0.199
*/
double stdlib_base_dists_rayleigh_cdf( const double x, const double sigma ) {
	double s2;
	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( sigma ) ||
		sigma < 0.0
	) {
		return 0.0/0.0; // NaN
	}
	if ( sigma == 0.0 ) {
		return ( x < 0.0 ) ? 0.0 : 1.0;
	}
	if ( x < 0.0 ) {
		return 0.0;
	}
	s2 = stdlib_base_pow( sigma, 2.0 );
	return 1.0 - stdlib_base_exp( -stdlib_base_pow( x, 2.0 ) / ( 2.0 * s2 ) );
}
