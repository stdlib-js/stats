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

#include "stdlib/stats/base/dists/pareto-type1/pdf.h"
#include "stdlib/constants/float64/eps.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
	double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
	return min + ( v*(max-min) );
}

int main( void ) {
	double alpha;
	double beta;
	double x;
	double y;
	int i;

	for ( i = 0; i < 25; i++ ) {
		alpha = random_uniform( STDLIB_CONSTANT_FLOAT64_EPS, 5.0 );
		beta = random_uniform( 1.0, 5.0 );
		x = random_uniform( beta, beta + 10.0 );
		y = stdlib_base_dists_pareto_type1_pdf( x, alpha, beta );
		printf( "x: %lf, α: %lf, β: %lf, f(x;α,β): %lf\n", x, alpha, beta, y );
	}
}
