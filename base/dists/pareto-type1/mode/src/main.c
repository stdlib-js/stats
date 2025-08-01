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

#include "stdlib/stats/base/dists/pareto-type1/mode.h"
#include "stdlib/math/base/assert/is_nan.h"

/**
* Returns the mode of a Pareto (Type I) distribution.
*
* @param alpha    shape parameter
* @param beta     scale parameter
* @return         mode
*
* @example
* double y = stdlib_base_dists_pareto_type1_mode( 2.0, 1.0 );
* // returns 1.0
*/
double stdlib_base_dists_pareto_type1_mode( const double alpha, const double beta ) {
	if (
		stdlib_base_is_nan( alpha ) ||
		alpha <= 0.0 ||
		stdlib_base_is_nan( beta ) ||
		beta <= 0.0
	) {
		return 0.0 / 0.0; // NaN
	}
	return beta;
}
