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

#ifndef STDLIB_STATS_BASE_DISTS_PARETO_TYPE1_LOGPDF_H
#define STDLIB_STATS_BASE_DISTS_PARETO_TYPE1_LOGPDF_H

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Evaluates the natural logarithm of the probability density function (PDF) for a Pareto (Type I) distribution with shape parameter `alpha` and scale parameter `beta` at a value `x`.
*/
double stdlib_base_dists_pareto_type1_logpdf( const double x, const double alpha, const double beta );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_STATS_BASE_DISTS_PARETO_TYPE1_LOGPDF_H
