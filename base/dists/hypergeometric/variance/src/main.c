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

#include "stdlib/stats/base/dists/hypergeometric/variance.h"
#include <stdint.h>

/**
* Returns the variance of a hypergeometric distribution.
*
* @param N	population size
* @param K	subpopulation size
* @param n	number of draws
* @return	variance
*
* @example
* double v = stdlib_base_dists_hypergeometric_variance( 16, 11, 4 );
* // returns ~0.688
*/
double stdlib_base_dists_hypergeometric_variance( const int32_t N, const int32_t K, const int32_t n ) {
	double p;

	if ( N < 0 || K < 0 || n < 0 || K > N || n > N ) {
		return 0.0/0.0; // NaN
	}
	p = (double)K / (double)N;
	return ( n * p * ( 1.0-p ) * ( (double)(N-n)/(double)(N-1) ) );
}
