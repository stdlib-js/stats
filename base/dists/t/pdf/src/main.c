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

#include "stdlib/stats/base/dists/t/pdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/beta.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/math/base/special/sqrt.h"

/**
* Evaluates the probability density function (PDF) for a Student's t-distribution with degrees of freedom `v` at a value `x`.
*
* @param x    input value
* @param v    degrees of freedom
* @return     evaluated PDF
*
* @example
* double y = stdlib_base_dists_t_pdf( 0.3, 4.0 );
* // returns ~0.355
*/
double stdlib_base_dists_t_pdf( const double x, const double v ) {
	double betaTerm;

	if ( stdlib_base_is_nan( x ) || stdlib_base_is_nan( v ) || v <= 0.0 ) {
		return 0.0 / 0.0; // NaN
	}
	betaTerm = stdlib_base_sqrt( v ) * stdlib_base_beta( v / 2.0, 0.5 );
	return stdlib_base_pow( v / ( v + stdlib_base_pow( x, 2.0 ) ), ( 1.0 + v ) / 2.0 ) / betaTerm;
}
