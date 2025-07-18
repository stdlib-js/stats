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

#include "stdlib/stats/base/dists/weibull/quantile.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/math/base/special/pow.h"

/**
* Evaluates the quantile function for a Weibull distribution with shape parameter `k` and scale parameter `lambda` at a probability `p`.
*
* @param p       input probability
* @param k       shape parameter
* @param lambda  scale parameter
* @return        evaluated quantile
*
* @example
* double y = stdlib_base_dists_weibull_quantile( 0.5, 1.0, 1.0 );
* // returns ~0.693
*/
double stdlib_base_dists_weibull_quantile( const double p, const double k, const double lambda ) {
	if ( stdlib_base_is_nan( k ) || stdlib_base_is_nan( lambda ) || stdlib_base_is_nan( p ) || k <= 0.0 || lambda <= 0.0 || p < 0.0 || p > 1.0 ) {
		return 0.0 / 0.0; // NaN
	}
	return lambda * stdlib_base_pow( -stdlib_base_ln( 1.0 - p ), 1.0 / k );
}
