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

#include "stdlib/stats/base/dists/bradford/median.h"
#include "stdlib/constants/float64/eps.h"
#include <stdlib.h>
#include <stdio.h>
#include <math.h>
#include <time.h>
#include <sys/time.h>

#define NAME "bradford-median"
#define ITERATIONS 1000000
#define REPEATS 3

/**
* Prints the TAP version.
*/
static void print_version( void ) {
	printf( "TAP version 13\n" );
}

/**
* Prints the TAP summary.
*
* @param total     total number of tests
* @param passing   total number of passing tests
*/
static void print_summary( int total, int passing ) {
	printf( "#\n" );
	printf( "1..%d\n", total ); // TAP plan
	printf( "# total %d\n", total );
	printf( "# pass  %d\n", passing );
	printf( "#\n" );
	printf( "# ok\n" );
}

/**
* Prints benchmarks results.
*
* @param elapsed   elapsed time in seconds
*/
static void print_results( double elapsed ) {
	double rate = ( (double)ITERATIONS ) / elapsed;
	printf( "  ---\n" );
	printf( "  iterations: %d\n", ITERATIONS );
	printf( "  elapsed: %0.9f\n", elapsed );
	printf( "  rate: %0.9f\n", rate );
	printf( "  ...\n" );
}

/**
* Returns a clock time.
*
* @return clock time
*/
static double tic( void ) {
	struct timeval now;
	gettimeofday( &now, NULL );
	return (double)now.tv_sec + (double)now.tv_usec/1.0e6;
}

/**
* Generates a pseudorandom number drawn from a uniform distribution.
*
* @param a    lower bound (inclusive)
* @param b    upper bound (exclusive)
* @return     pseudorandom number
*/
static double random_uniform( const double a, const double b ) {
	double r = (double)rand() / ( (double)RAND_MAX + 1.0 );
	return a + (r * (b-a));
}

/**
* Runs a benchmark.
*
* @return elapsed time in seconds
*/
static double benchmark( void ) {
	double elapsed;
	double c[ 100 ];
	double t;
	double y;
	int i;

	for ( i = 0; i < 100; i++ ) {
		c[ i ] = random_uniform( STDLIB_CONSTANT_FLOAT64_EPS, 10.0 );
	}

	t = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		y = stdlib_base_dists_bradford_median( c[ i % 100 ] );
		if ( y != y ) {
			printf( "should not return NaN\n" );
			break;
		}
	}
	elapsed = tic() - t;
	if ( y != y ) {
		printf( "should not return NaN\n" );
	}
	return elapsed;
}

/**
* Main execution sequence.
*/
int main( void ) {
	double elapsed;
	int i;

	// Use the current time to seed the pseudorandom number generator:
	srand( time( NULL ) );

	print_version();
	for ( i = 0; i < REPEATS; i++ ) {
		printf( "# c::%s\n", NAME );
		elapsed = benchmark();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", i+1 );
	}
	print_summary( REPEATS, REPEATS );
}
