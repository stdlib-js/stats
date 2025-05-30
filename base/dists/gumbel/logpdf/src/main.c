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

#include "stdlib/stats/base/dists/gumbel/logpdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/constants/float64/ninf.h"

/**
* Evaluates the logarithm of the probability density function (PDF) for a Gumbel distribution with location parameter `mu` and scale parameter `beta` at a value `x`.
*
* @param x       input value
* @param mu      location parameter
* @param beta    scale parameter
* @return        evaluated logarithm of PDF
*
* @example
* double y = stdlib_base_dists_gumbel_logpdf( 0.0, 0.0, 2.0 );
* // returns ~-1.693
*/
double stdlib_base_dists_gumbel_logpdf( const double x, const double mu, const double beta ) {
	double z;
	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( beta ) ||
		beta <= 0.0
	) {
		return 0.0/0.0; // NaN
	}
	if ( x == STDLIB_CONSTANT_FLOAT64_NINF ) {
		return 0.0;
	}
	z = ( x - mu ) / beta;
	return -z -stdlib_base_exp( -z ) -stdlib_base_ln( beta );
}
