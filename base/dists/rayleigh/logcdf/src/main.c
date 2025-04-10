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

#include "stdlib/stats/base/dists/rayleigh/logcdf.h"
#include "stdlib/math/base/special/expm1.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/log1p.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/constants/float64/ln_half.h"
#include "stdlib/constants/float64/ninf.h"

/**
* Evaluates the logarithm of the cumulative distribution function (CDF) for a Rayleigh distribution with scale parameter `sigma` at a value `x`.
*
* @param x        input value
* @param sigma    scale parameter
* @return         evaluated logCDF
*
* @example
* double y = stdlib_base_dists_rayleigh_logcdf( 2.0, 3.0 );
* // returns ~-1.613
*/
double stdlib_base_dists_rayleigh_logcdf( const double x, const double sigma ) {
	double s2;
	double p;
	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( sigma ) ||
		sigma < 0.0
	) {
		return 0.0/0.0; // NaN
	}
	if ( sigma == 0.0 ) {
		return ( x < 0.0 ) ? STDLIB_CONSTANT_FLOAT64_NINF : 0.0;
	}
	if ( x < 0.0 ) {
		return STDLIB_CONSTANT_FLOAT64_NINF;
	}
	s2 = stdlib_base_pow( sigma, 2.0 );
	p = -stdlib_base_pow( x, 2.0 ) / ( 2.0 * s2 );
	return ( p < STDLIB_CONSTANT_FLOAT64_LN_HALF ) ? stdlib_base_log1p( -stdlib_base_exp( p ) ) : stdlib_base_ln( - stdlib_base_expm1( p ) );
}
