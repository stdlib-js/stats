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

#include "stdlib/stats/base/dists/degenerate/logpdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/constants/float64/ninf.h"
#include "stdlib/constants/float64/pinf.h"

/**
* Evaluates the natural logarithm of the probability density function (logPDF) for a degenerate distribution centered at `mu`.
*
* @param x    input value
* @param mu   constant value of the distribution
* @return     evaluated logPDF
*
* @example
* double y = stdlib_base_dists_arcsine_logpdf( 2.0, 3.0 );
* // returns -Infinity
*/
double stdlib_base_dists_degenerate_logpdf( const double x, const double mu ) {
	if (
		stdlib_base_is_nan( x ) || stdlib_base_is_nan( mu )
	) {
		return 0.0/0.0; // NaN
	}
	return ( x == mu ) ? STDLIB_CONSTANT_FLOAT64_PINF : STDLIB_CONSTANT_FLOAT64_NINF;
}
