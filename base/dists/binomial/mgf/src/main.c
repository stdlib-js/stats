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

#include "stdlib/stats/base/dists/binomial/mgf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/math/base/special/exp.h"
#include <stdint.h>

/**
* Evaluates the moment-generating function (MGF) for a binomial distribution with number of trials `n` and success probability `p` at a value `t`.
*
* @param t  input value
* @param n  number of trials
* @param p  success probability
* @return   evaluated MGF
*
* @example
* double y = stdlib_base_dists_binomial_mgf( 0.5, 20, 0.2 );
* // returns ~11.471
*/
double stdlib_base_dists_binomial_mgf( const double t, const int32_t n, const double p ) {
	if (
		stdlib_base_is_nan( t ) ||
		stdlib_base_is_nan( p ) ||
		n < 0 ||
		p < 0.0 ||
		p > 1.0
	) {
		return 0.0 / 0.0;
	}
	return stdlib_base_pow( ( 1.0 - p + ( p*stdlib_base_exp( t ) ) ), (double)n );
}
