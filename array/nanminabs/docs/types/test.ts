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

import AccessorArray = require( '@stdlib/array/base/accessor' );
import nanminabs = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	nanminabs( x ); // $ExpectType number
	nanminabs( new AccessorArray( x ) ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a numeric array...
{
	nanminabs( 10 ); // $ExpectError
	nanminabs( '10' ); // $ExpectError
	nanminabs( true ); // $ExpectError
	nanminabs( false ); // $ExpectError
	nanminabs( null ); // $ExpectError
	nanminabs( undefined ); // $ExpectError
	nanminabs( {} ); // $ExpectError
	nanminabs( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	nanminabs(); // $ExpectError
	nanminabs( x, {} ); // $ExpectError
}
