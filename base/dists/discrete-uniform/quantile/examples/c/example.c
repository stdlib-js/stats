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

#include "stdlib/stats/base/dists/discrete-uniform/quantile.h"
#include "stdlib/math/base/special/round.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
	double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
	return min + ( v*(max-min) );
}

int main( void ) {
	int32_t a;
	int32_t b;
	double p;
	double y;
	int i;

	for ( i = 0; i < 10; i++ ) {
		p = random_uniform( 0.0, 1.0 );
		a = stdlib_base_round( random_uniform( 0.0, 5.0 ) );
		b = stdlib_base_round( random_uniform( a, a + 5.0 ) );
		y = stdlib_base_dists_discrete_uniform_quantile( p, a, b );
		printf( "p: %lf, a: %d, b: %d, Q(p;a,b): %lf\n", p, a, b, y );
	}
}
