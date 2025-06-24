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

#include "stdlib/stats/base/dists/negative-binomial/mgf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/math/base/special/pow.h"

/**
* Evaluates the moment-generating function (MGF) for a negative binomial distribution.
*
* @param t    input value
* @param r    number of successes until experiment is stopped
* @param p    success probability
* @return     evaluated MGF
*
* @example
* double y = stdlib_base_dists_negative_binomial_mgf( 0.05, 20.0, 0.8 );
* // returns ~267.839
*/
double stdlib_base_dists_negative_binomial_mgf( const double t, const double r, const double p ) {
	if (
		stdlib_base_is_nan( t ) ||
		stdlib_base_is_nan( r ) ||
		stdlib_base_is_nan( p ) ||
		r <= 0.0 ||
		p < 0.0 ||
		p > 1.0 ||
		t >= -stdlib_base_ln( p )
	) {
		return 0.0 / 0.0; // NaN
	}
	return stdlib_base_pow( ( ( 1.0 - p ) * stdlib_base_exp( t ) ) / ( 1.0 - ( p * stdlib_base_exp( t ) ) ), r );
}
