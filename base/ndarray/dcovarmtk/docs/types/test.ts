/*
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

/* eslint-disable space-in-parens */

import zeros = require( '@stdlib/ndarray/zeros' );
import dcovarmtk = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = zeros( [ 10 ], {
		'dtype': 'float64'
	});

	dcovarmtk( [ x, x, x, x, x ] ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not an array of ndarrays...
{
	dcovarmtk( '10' ); // $ExpectError
	dcovarmtk( 10 ); // $ExpectError
	dcovarmtk( true ); // $ExpectError
	dcovarmtk( false ); // $ExpectError
	dcovarmtk( null ); // $ExpectError
	dcovarmtk( undefined ); // $ExpectError
	dcovarmtk( [] ); // $ExpectError
	dcovarmtk( {} ); // $ExpectError
	dcovarmtk( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 10 ], {
		'dtype': 'float64'
	});

	dcovarmtk(); // $ExpectError
	dcovarmtk( [ x, x, x, x, x ], {} ); // $ExpectError
}
