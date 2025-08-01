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

#include "stdlib/stats/strided/sztest2.h"
#include "stdlib/stats/base/ztest/two-sample/results/float32.h"
#include "stdlib/stats/base/ztest/alternatives.h"
#include <stdlib.h>
#include <stdio.h>
#include <math.h>
#include <time.h>
#include <sys/time.h>

#define NAME "sztest2"
#define ITERATIONS 1000000
#define REPEATS 3
#define MIN 1
#define MAX 6

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
* @param iterations  number of iterations
* @param elapsed     elapsed time in seconds
*/
static void print_results( int iterations, double elapsed ) {
	double rate = (double)iterations / elapsed;
	printf( "  ---\n" );
	printf( "  iterations: %d\n", iterations );
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
* Generates a random number on the interval [min,max).
*
* @param min    minimum value (inclusive)
* @param max    maximum value (exclusive)
* @return       random number
*/
static float random_uniform( const float min, const float max ) {
	float v = (float)rand() / ( (float)RAND_MAX + 1.0f );
	return min + ( v*(max-min) );
}

/**
* Runs a benchmark.
*
* @param iterations   number of iterations
* @param len          array length
* @return             elapsed time in seconds
*/
static double benchmark1( int iterations, int len ) {
	double elapsed;
	float x[ len ];
	float y[ len ];
	double t;
	int i;

	struct stdlib_stats_ztest_two_sample_float32_results results = {
		.rejected = false,
		.alpha = 0.0f,
		.alternative = STDLIB_STATS_ZTEST_TWO_SIDED,
		.pValue = 0.0f,
		.statistic = 0.0f,
		.ci = { 0.0f, 0.0f },
		.nullValue = 0.0f,
		.xmean = 0.0f,
		.ymean = 0.0f
	};

	for ( i = 0; i < len; i++ ) {
		x[ i ] = random_uniform( -5.0f, 5.0f );
		y[ i ] = random_uniform( -5.0f, 5.0f );
	}
	t = tic();
	for ( i = 0; i < iterations; i++ ) {
		// cppcheck-suppress uninitvar
		stdlib_strided_sztest2( len, len, STDLIB_STATS_ZTEST_TWO_SIDED, 0.05f, 0.0f, 1.0f, x, 1, 1.0f, y, 1, &results );
		if ( results.statistic != results.statistic ) {
			printf( "should not return NaN\n" );
			break;
		}
	}
	elapsed = tic() - t;
	if ( results.statistic != results.statistic ) {
		printf( "should not return NaN\n" );
	}
	return elapsed;
}

/**
* Runs a benchmark.
*
* @param iterations   number of iterations
* @param len          array length
* @return             elapsed time in seconds
*/
static double benchmark2( int iterations, int len ) {
	double elapsed;
	float x[ len ];
	float y[ len ];
	double t;
	int i;

	struct stdlib_stats_ztest_two_sample_float32_results results = {
		.rejected = false,
		.alpha = 0.0f,
		.alternative = STDLIB_STATS_ZTEST_TWO_SIDED,
		.pValue = 0.0f,
		.statistic = 0.0f,
		.ci = { 0.0f, 0.0f },
		.nullValue = 0.0f,
		.xmean = 0.0f,
		.ymean = 0.0f
	};

	for ( i = 0; i < len; i++ ) {
		x[ i ] = random_uniform( -5.0f, 5.0f );
		y[ i ] = random_uniform( -5.0f, 5.0f );
	}
	t = tic();
	for ( i = 0; i < iterations; i++ ) {
		// cppcheck-suppress uninitvar
		stdlib_strided_sztest2_ndarray( len, len, STDLIB_STATS_ZTEST_TWO_SIDED, 0.05f, 0.0f, 1.0f, x, 1, 0, 1.0f, y, 1, 0, &results );
		if ( results.statistic != results.statistic ) {
			printf( "should not return NaN\n" );
			break;
		}
	}
	elapsed = tic() - t;
	if ( results.statistic != results.statistic ) {
		printf( "should not return NaN\n" );
	}
	return elapsed;
}

/**
* Main execution sequence.
*/
int main( void ) {
	double elapsed;
	int count;
	int iter;
	int len;
	int i;
	int j;

	// Use the current time to seed the random number generator:
	srand( time( NULL ) );

	print_version();
	count = 0;
	for ( i = MIN; i <= MAX; i++ ) {
		len = pow( 10, i );
		iter = ITERATIONS / pow( 10, i-1 );
		for ( j = 0; j < REPEATS; j++ ) {
			count += 1;
			printf( "# c::%s:len=%d\n", NAME, len );
			elapsed = benchmark1( iter, len );
			print_results( iter, elapsed );
			printf( "ok %d benchmark finished\n", count );
		}
	}
	for ( i = MIN; i <= MAX; i++ ) {
		len = pow( 10, i );
		iter = ITERATIONS / pow( 10, i-1 );
		for ( j = 0; j < REPEATS; j++ ) {
			count += 1;
			printf( "# c::%s:ndarray:len=%d\n", NAME, len );
			elapsed = benchmark2( iter, len );
			print_results( iter, elapsed );
			printf( "ok %d benchmark finished\n", count );
		}
	}
	print_summary( count, count );
}
