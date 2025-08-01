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

#include "stdlib/stats/strided/dztest2.h"
#include "stdlib/stats/base/ztest/two-sample/results/float64.h"
#include "stdlib/stats/base/ztest/alternatives.h"
#include <stdbool.h>
#include <stdio.h>

int main( void ) {
	// Create a strided arrays:
	const double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };
	const double y[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };

	// Specify the number of elements:
	const int NX = 4;
	const int NY = 4;

	// Specify the stride lengths:
	const int strideX = 2;
	const int strideY = 2;

	// Initialize a results object:
	struct stdlib_stats_ztest_two_sample_float64_results results = {
		.rejected = false,
		.alpha = 0.0,
		.alternative = STDLIB_STATS_ZTEST_TWO_SIDED,
		.pValue = 0.0,
		.statistic = 0.0,
		.ci = { 0.0, 0.0 },
		.nullValue = 0.0,
		.xmean = 0.0,
		.ymean = 0.0
	};

	// Compute a Z-test:
	stdlib_strided_dztest2( NX, NY, STDLIB_STATS_ZTEST_TWO_SIDED, 0.05, 5.0, 3.0, x, strideX, 3.0, y, strideY, &results );

	// Print the result:
	printf( "Statistic: %lf\n", results.statistic );
	printf( "Null hypothesis was %s\n", ( results.rejected ) ? "rejected" : "not rejected" );
}
