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

#include "stdlib/stats/base/dists/kumaraswamy/quantile.h"
#include "stdlib/constants/float64/eps.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
	double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
	return min + ( v*(max-min) );
}

int main( void ) {
	double p;
	double a;
	double b;
	double y;
	int i;

	for ( i = 0; i < 25; i++ ) {
		p = random_uniform( 0.0, 1.0 );
		a = random_uniform( STDLIB_CONSTANT_FLOAT64_EPS, 5.0 );
		b = random_uniform( STDLIB_CONSTANT_FLOAT64_EPS, 5.0 );
		y = stdlib_base_dists_kumaraswamy_quantile( p, a, b );
		printf( "p: %lf, a: %lf, b: %lf, Q(p;a,b): %lf\n", p, a, b, y );
	}
}
