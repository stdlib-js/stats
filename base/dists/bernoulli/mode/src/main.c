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

#include "stdlib/stats/base/dists/bernoulli/mode.h"
#include "stdlib/math/base/assert/is_nan.h"

/**
* Returns the mode of a Bernoulli distribution.
*
* @param p    success probability
* @return     mode
*
* @example
* double y = stdlib_base_dists_bernoulli_mode( 0.1 );
* // returns 0
*
* @example
* double y = stdlib_base_dists_bernoulli_mode( 0.5 );
* // returns 0
*/
double stdlib_base_dists_bernoulli_mode( const double p ) {
	if (
		stdlib_base_is_nan( p ) ||
		p < 0.0 ||
		p > 1.0
	) {
		return 0.0 / 0.0; // NaN
	}
	return ( p <= 0.5 ) ? 0 : 1;
}
