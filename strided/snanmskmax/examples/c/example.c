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

#include "stdlib/stats/strided/snanmskmax.h"
#include <stdint.h>
#include <stdio.h>

int main( void ) {
	// Create a strided array:
	const float x[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 7.0f, 8.0f, 0.0f/0.0f, 0.0f/0.0f };

	// Create a mask array:
	const uint8_t mask[] = { 0, 0, 0, 0, 0, 0, 0, 0, 1, 1 };

	// Specify the number of elements:
	const int N = 5;

	// Specify the stride lengths:
	const int strideX = 2;
	const int strideMask = 2;

	// Compute the maximum value:
	float v = stdlib_strided_snanmskmax( N, x, strideX, mask, strideMask );

	// Print the result:
	printf( "max: %f\n", v );
}
