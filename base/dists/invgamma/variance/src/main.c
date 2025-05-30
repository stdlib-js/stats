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

#include "stdlib/stats/base/dists/invgamma/variance.h"
#include "stdlib/math/base/special/pow.h"

/**
* Returns the variance of an inverse gamma distribution.
*
* @param alpha    shape parameter
* @param beta     rate parameter
* @return         variance
*
* @example
* double y = stdlib_base_dists_invgamma_variance( 3.0, 5.0 );
* // returns ~6.25
*/
double stdlib_base_dists_invgamma_variance( const double alpha, const double beta ) {
	if ( alpha <= 2.0 || beta <= 0.0 ) {
		return 0.0 / 0.0; // NaN
	}
	return ( beta * beta ) / ( stdlib_base_pow( alpha - 1.0, 2.0 ) * ( alpha - 2.0 ) );
}
