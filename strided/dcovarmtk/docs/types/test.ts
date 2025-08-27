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

import dcovarmtk = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	dcovarmtk( x.length, 1, 0.0, x, 1, 0.0, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dcovarmtk( '10', 1, 0.0, x, 1, 0.0, x, 1 ); // $ExpectError
	dcovarmtk( true, 1, 0.0, x, 1, 0.0, x, 1 ); // $ExpectError
	dcovarmtk( false, 1, 0.0, x, 1, 0.0, x, 1 ); // $ExpectError
	dcovarmtk( null, 1, 0.0, x, 1, 0.0, x, 1 ); // $ExpectError
	dcovarmtk( undefined, 1, 0.0, x, 1, 0.0, x, 1 ); // $ExpectError
	dcovarmtk( [], 1, 0.0, x, 1, 0.0, x, 1 ); // $ExpectError
	dcovarmtk( {}, 1, 0.0, x, 1, 0.0, x, 1 ); // $ExpectError
	dcovarmtk( ( x: number ): number => x, 1, 0.0, x, 1, 0.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	dcovarmtk( x.length, '10', 0.0, x, 1, 0.0, x, 1 ); // $ExpectError
	dcovarmtk( x.length, true, 0.0, x, 1, 0.0, x, 1 ); // $ExpectError
	dcovarmtk( x.length, false, 0.0, x, 1, 0.0, x, 1 ); // $ExpectError
	dcovarmtk( x.length, null, 0.0, x, 1, 0.0, x, 1 ); // $ExpectError
	dcovarmtk( x.length, undefined, 0.0, x, 1, 0.0, x, 1 ); // $ExpectError
	dcovarmtk( x.length, [], 0.0, x, 1, 0.0, x, 1 ); // $ExpectError
	dcovarmtk( x.length, {}, 0.0, x, 1, 0.0, x, 1 ); // $ExpectError
	dcovarmtk( x.length, ( x: number ): number => x, 0.0, x, 1, 0.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	dcovarmtk( x.length, 1, '10', x, 1, 0.0, x, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, true, x, 1, 0.0, x, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, false, x, 1, 0.0, x, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, null, x, 1, 0.0, x, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, undefined, x, 1, 0.0, x, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, [], x, 1, 0.0, x, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, {}, x, 1, 0.0, x, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, ( x: number ): number => x, x, 1, 0.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dcovarmtk( x.length, 1, 0.0, 10, 1, 0.0, x, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, '10', 1, 0.0, x, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, true, 1, 0.0, x, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, false, 1, 0.0, x, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, null, 1, 0.0, x, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, undefined, 1, 0.0, x, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, [ '1' ], 1, 0.0, x, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, {}, 1, 0.0, x, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, ( x: number ): number => x, 1, 0.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dcovarmtk( x.length, 1, 0.0, x, '10', 0.0, x, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, x, true, 0.0, x, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, x, false, 0.0, x, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, x, null, 0.0, x, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, x, undefined, 0.0, x, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, x, [], 0.0, x, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, x, {}, 0.0, x, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, x, ( x: number ): number => x, 0.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dcovarmtk( x.length, 1, 0.0, x, 1, '10', x, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, x, 1, true, x, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, x, 1, false, x, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, x, 1, null, x, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, x, 1, undefined, x, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, x, 1, [], x, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, x, 1, {}, x, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, x, 1, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dcovarmtk( x.length, 1, 0.0, x, 1, 0.0, 10, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, x, 1, 0.0, '10', 1 ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, x, 1, 0.0, true, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, x, 1, 0.0, false, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, x, 1, 0.0, null, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, x, 1, 0.0, undefined, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, x, 1, 0.0, [ '1' ], 1 ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, x, 1, 0.0, {}, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, x, 1, 0.0, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dcovarmtk( x.length, 1, 0.0, x, 1, 0.0, x, '10' ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, x, 1, 0.0, x, true ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, x, 1, 0.0, x, false ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, x, 1, 0.0, x, null ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, x, 1, 0.0, x, undefined ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, x, 1, 0.0, x, [] ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, x, 1, 0.0, x, {} ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, x, 1, 0.0, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dcovarmtk(); // $ExpectError
	dcovarmtk( x.length ); // $ExpectError
	dcovarmtk( x.length, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0 ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, x ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, x, 1 ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, x, 1, 0.0 ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, x, 1, 0.0, x ); // $ExpectError
	dcovarmtk( x.length, 1, 0.0, x, 1, 0.0, x, 1, 0 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float64Array( 10 );

	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, 0.0, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dcovarmtk.ndarray( '10', 1, 0.0, x, 1, 0, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( true, 1, 0.0, x, 1, 0, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( false, 1, 0.0, x, 1, 0, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( null, 1, 0.0, x, 1, 0, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( undefined, 1, 0.0, x, 1, 0, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( [], 1, 0.0, x, 1, 0, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( {}, 1, 0.0, x, 1, 0, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( ( x: number ): number => x, 1, 0.0, x, 1, 0, 0.0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	dcovarmtk.ndarray( x.length, '10', 0.0, x, 1, 0, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, true, 0.0, x, 1, 0, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, false, 0.0, x, 1, 0, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, null, 0.0, x, 1, 0, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, undefined, 0.0, x, 1, 0, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, [], 0.0, x, 1, 0, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, {}, 0.0, x, 1, 0, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, ( x: number ): number => x, 0.0, x, 1, 0, 0.0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	dcovarmtk.ndarray( x.length, 1, '10', x, 1, 0, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, true, x, 1, 0, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, false, x, 1, 0, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, null, x, 1, 0, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, undefined, x, 1, 0, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, [], x, 1, 0, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, {}, x, 1, 0, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, ( x: number ): number => x, x, 1, 0, 0.0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dcovarmtk.ndarray( x.length, 1, 0.0, 10, 1, 0, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, '10', 1, 0, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, true, 1, 0, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, false, 1, 0, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, null, 1, 0, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, undefined, 1, 0, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, [ '1' ], 1, 0, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, {}, 1, 0, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, ( x: number ): number => x, 1, 0, 0.0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dcovarmtk.ndarray( x.length, 1, 0.0, x, '10', 0, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, true, 0, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, false, 0, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, null, 0, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, undefined, 0, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, [], 0, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, {}, 0, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, ( x: number ): number => x, 0, 0.0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, '10', 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, true, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, false, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, null, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, undefined, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, [], 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, {}, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, ( x: number ): number => x, 0.0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );

	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, '10', x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, true, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, false, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, null, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, undefined, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, [], x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, {}, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, 0.0, 10, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, 0.0, '10', 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, 0.0, true, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, 0.0, false, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, 0.0, null, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, 0.0, undefined, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, 0.0, [ '1' ], 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, 0.0, {}, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, 0.0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, 0.0, x, '10', 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, 0.0, x, true, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, 0.0, x, false, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, 0.0, x, null, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, 0.0, x, undefined, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, 0.0, x, [], 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, 0.0, x, {}, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, 0.0, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a tenth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, 0.0, x, 1, '10' ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, 0.0, x, 1, true ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, 0.0, x, 1, false ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, 0.0, x, 1, null ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, 0.0, x, 1, undefined ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, 0.0, x, 1, [] ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, 0.0, x, 1, {} ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, 0.0, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dcovarmtk.ndarray(); // $ExpectError
	dcovarmtk.ndarray( x.length ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, 0.0 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, 0.0, x ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, 0.0, x, 1 ); // $ExpectError
	dcovarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, 0.0, x, 1, 0, 0 ); // $ExpectError
}
