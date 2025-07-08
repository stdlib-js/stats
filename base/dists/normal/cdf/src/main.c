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

#include "stdlib/stats/base/dists/normal/cdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/erfc.h"
#include "stdlib/math/base/special/sqrt.h"

/**
* Evaluates the cumulative distribution function (CDF) for a Normal distribution with mean `mu` and standard deviation `sigma` at a value `x`.
*
* @param x       input value
* @param mu      mean
* @param sigma   standard deviation
* @return        evaluated cumulative distribution function
*
* @example
* double y = stdlib_base_dists_normal_cdf( 2.0, 0.0, 1.0 );
* // returns ~0.977
*/
double stdlib_base_dists_normal_cdf( const double x, const double mu, const double sigma ) {
	double denom;
	double xc;

	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( sigma ) ||
		sigma < 0.0
	) {
		return 0.0/0.0; // NaN
	}
	if ( sigma == 0.0 ) {
		return (x < mu) ? 0.0 : 1.0;
	}

	denom = sigma * stdlib_base_sqrt( 2.0 );
	xc = x - mu;

	return 0.5 * stdlib_base_erfc( -xc / denom );
}
