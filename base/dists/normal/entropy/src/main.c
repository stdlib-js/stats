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

#include "stdlib/stats/base/dists/normal/entropy.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/constants/float64/two_pi.h"
#include "stdlib/constants/float64/e.h"

/**
* Returns the differential entropy for a normal distribution with mean `mu` and standard deviation `sigma`.
*
* @param mu     mean of the distribution
* @param sigma  standard deviation of the distribution
* @return       differential entropy of the normal distribution
*
* @example
* double y = stdlib_base_dists_normal_entropy( 0.0, 1.0 );
* // returns ~1.419
*/
double stdlib_base_dists_normal_entropy( const double mu, const double sigma ) {
	if (
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( sigma ) ||
		sigma <= 0.0
	) {
		return 0.0/0.0; // NaN
	}
	return 0.5 * stdlib_base_ln( STDLIB_CONSTANT_FLOAT64_TWO_PI * STDLIB_CONSTANT_FLOAT64_E * sigma * sigma );
}
