/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

#include "stdlib/stats/strided/dmeanvarpn.h"
#include <stdio.h>

int main( void ) {
	// Create a strided array:
	const double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };

	// Create an output array:
	double out[] = { 0.0, 0.0 };

	// Specify the number of elements:
	const int N = 4;

	// Specify the stride lengths:
	const int strideX = 2;
	const int strideOut = 1;

	// Compute the mean and variance:
	stdlib_strided_dmeanvarpn( N, 1.0, x, strideX, out, strideOut );

	// Print the result:
	printf( "sample mean: %lf\n", out[ 0 ] );
	printf( "sample variance: %lf\n", out[ 1 ] );
}
