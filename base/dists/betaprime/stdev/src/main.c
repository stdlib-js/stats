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

#include "stdlib/stats/base/dists/betaprime/stdev.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/sqrt.h"

/**
* Returns the standard deviation of a beta prime distribution.
*
* @param alpha    first shape parameter
* @param beta     second shape paramter
* @return         stdandard deviation
*
* @example
* double y = stdlib_base_betaprime_stdev( 1.0, 3.0 );
* // returns ~0.866
*/
double stdlib_base_dists_betaprime_stdev( const double alpha, const double beta ) {
	double bm1;
	if (
		stdlib_base_is_nan( alpha ) ||
		stdlib_base_is_nan( beta ) ||
		alpha <= 0.0 ||
		beta <= 2.0
	) {
		return 0.0 / 0.0; // NaN
	}
	bm1 = beta - 1.0;
	return stdlib_base_sqrt( ( alpha * ( alpha + bm1 ) ) / ( ( bm1 - 1.0 ) * bm1 * bm1 ) );
}
