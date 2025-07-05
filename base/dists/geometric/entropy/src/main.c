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

#include "stdlib/stats/base/dists/geometric/entropy.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/ln.h"

/**
* Returns the entropy of a geometric distribution.
*
* @param p    success probability
* @return     entropy
*
* @example
* double y = stdlib_base_dists_geometric_entropy( 0.1 );
* // returns ~3.251
*/
double stdlib_base_dists_geometric_entropy( const double p ) {
	double q;
	if (
		stdlib_base_is_nan( p ) ||
		p <= 0.0 ||
		p >= 1.0
	) {
		return 0.0 / 0.0; // NaN
	}
	q = 1.0 - p;
	return ( -( p * stdlib_base_ln( p ) ) - ( q * stdlib_base_ln( q ) ) ) / p;
}
