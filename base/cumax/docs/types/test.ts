/*
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

import AccessorArray = require( '@stdlib/array/base/accessor' );
import cumax = require( './index' );


// TESTS //

// The function returns a numeric array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	cumax( x.length, x, 1, y, 1 ); // $ExpectType Float64Array
	cumax( x.length, new AccessorArray( x ), 1, new AccessorArray( y ), 1 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	cumax( '10', x, 1, y, 1 ); // $ExpectError
	cumax( true, x, 1, y, 1 ); // $ExpectError
	cumax( false, x, 1, y, 1 ); // $ExpectError
	cumax( null, x, 1, y, 1 ); // $ExpectError
	cumax( undefined, x, 1, y, 1 ); // $ExpectError
	cumax( [], x, 1, y, 1 ); // $ExpectError
	cumax( {}, x, 1, y, 1 ); // $ExpectError
	cumax( ( x: number ): number => x, x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a numeric array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	cumax( x.length, 10, 1, y, 1 ); // $ExpectError
	cumax( x.length, '10', 1, y, 1 ); // $ExpectError
	cumax( x.length, true, 1, y, 1 ); // $ExpectError
	cumax( x.length, false, 1, y, 1 ); // $ExpectError
	cumax( x.length, null, 1, y, 1 ); // $ExpectError
	cumax( x.length, undefined, 1, y, 1 ); // $ExpectError
	cumax( x.length, [ '1' ], 1, y, 1 ); // $ExpectError
	cumax( x.length, {}, 1, y, 1 ); // $ExpectError
	cumax( x.length, ( x: number ): number => x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	cumax( x.length, x, '10', y, 1 ); // $ExpectError
	cumax( x.length, x, true, y, 1 ); // $ExpectError
	cumax( x.length, x, false, y, 1 ); // $ExpectError
	cumax( x.length, x, null, y, 1 ); // $ExpectError
	cumax( x.length, x, undefined, y, 1 ); // $ExpectError
	cumax( x.length, x, [], y, 1 ); // $ExpectError
	cumax( x.length, x, {}, y, 1 ); // $ExpectError
	cumax( x.length, x, ( x: number ): number => x, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	cumax( x.length, x, 1, 10, 1 ); // $ExpectError
	cumax( x.length, x, 1, '10', 1 ); // $ExpectError
	cumax( x.length, x, 1, true, 1 ); // $ExpectError
	cumax( x.length, x, 1, false, 1 ); // $ExpectError
	cumax( x.length, x, 1, null, 1 ); // $ExpectError
	cumax( x.length, x, 1, undefined, 1 ); // $ExpectError
	cumax( x.length, x, 1, [ '1' ], 1 ); // $ExpectError
	cumax( x.length, x, 1, {}, 1 ); // $ExpectError
	cumax( x.length, x, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	cumax( x.length, x, 1, y, '10' ); // $ExpectError
	cumax( x.length, x, 1, y, true ); // $ExpectError
	cumax( x.length, x, 1, y, false ); // $ExpectError
	cumax( x.length, x, 1, y, null ); // $ExpectError
	cumax( x.length, x, 1, y, undefined ); // $ExpectError
	cumax( x.length, x, 1, y, [] ); // $ExpectError
	cumax( x.length, x, 1, y, {} ); // $ExpectError
	cumax( x.length, x, 1, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	cumax(); // $ExpectError
	cumax( x.length ); // $ExpectError
	cumax( x.length, x ); // $ExpectError
	cumax( x.length, x, 1 ); // $ExpectError
	cumax( x.length, x, 1, y ); // $ExpectError
	cumax( x.length, x, 1, y, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a numeric array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	cumax.ndarray( x.length, x, 1, 0, y, 1, 0 ); // $ExpectType Float64Array
	cumax.ndarray( x.length, new AccessorArray( x ), 1, 0, new AccessorArray( y ), 1, 0 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	cumax.ndarray( '10', x, 1, 0, y, 1, 0 ); // $ExpectError
	cumax.ndarray( true, x, 1, 0, y, 1, 0 ); // $ExpectError
	cumax.ndarray( false, x, 1, 0, y, 1, 0 ); // $ExpectError
	cumax.ndarray( null, x, 1, 0, y, 1, 0 ); // $ExpectError
	cumax.ndarray( undefined, x, 1, 0, y, 1, 0 ); // $ExpectError
	cumax.ndarray( [], x, 1, 0, y, 1, 0 ); // $ExpectError
	cumax.ndarray( {}, x, 1, 0, y, 1, 0 ); // $ExpectError
	cumax.ndarray( ( x: number ): number => x, x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a numeric array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	cumax.ndarray( x.length, 10, 1, 0, y, 1, 0 ); // $ExpectError
	cumax.ndarray( x.length, '10', 1, 0, y, 1, 0 ); // $ExpectError
	cumax.ndarray( x.length, true, 1, 0, y, 1, 0 ); // $ExpectError
	cumax.ndarray( x.length, false, 1, 0, y, 1, 0 ); // $ExpectError
	cumax.ndarray( x.length, null, 1, 0, y, 1, 0 ); // $ExpectError
	cumax.ndarray( x.length, undefined, 1, 0, y, 1, 0 ); // $ExpectError
	cumax.ndarray( x.length, [ '1' ], 1, 0, y, 1, 0 ); // $ExpectError
	cumax.ndarray( x.length, {}, 1, 0, y, 1, 0 ); // $ExpectError
	cumax.ndarray( x.length, ( x: number ): number => x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	cumax.ndarray( x.length, x, '10', 0, y, 1, 0 ); // $ExpectError
	cumax.ndarray( x.length, x, true, 0, y, 1, 0 ); // $ExpectError
	cumax.ndarray( x.length, x, false, 0, y, 1, 0 ); // $ExpectError
	cumax.ndarray( x.length, x, null, 0, y, 1, 0 ); // $ExpectError
	cumax.ndarray( x.length, x, undefined, 0, y, 1, 0 ); // $ExpectError
	cumax.ndarray( x.length, x, [], 0, y, 1, 0 ); // $ExpectError
	cumax.ndarray( x.length, x, {}, 0, y, 1, 0 ); // $ExpectError
	cumax.ndarray( x.length, x, ( x: number ): number => x, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	cumax.ndarray( x.length, x, 1, '10', y, 1, 0 ); // $ExpectError
	cumax.ndarray( x.length, x, 1, true, y, 1, 0 ); // $ExpectError
	cumax.ndarray( x.length, x, 1, false, y, 1, 0 ); // $ExpectError
	cumax.ndarray( x.length, x, 1, null, y, 1, 0 ); // $ExpectError
	cumax.ndarray( x.length, x, 1, undefined, y, 1, 0 ); // $ExpectError
	cumax.ndarray( x.length, x, 1, [], y, 1, 0 ); // $ExpectError
	cumax.ndarray( x.length, x, 1, {}, y, 1, 0 ); // $ExpectError
	cumax.ndarray( x.length, x, 1, ( x: number ): number => x, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	cumax.ndarray( x.length, x, 1, 0, 10, 1, 0 ); // $ExpectError
	cumax.ndarray( x.length, x, 1, 0, '10', 1, 0 ); // $ExpectError
	cumax.ndarray( x.length, x, 1, 0, true, 1, 0 ); // $ExpectError
	cumax.ndarray( x.length, x, 1, 0, false, 1, 0 ); // $ExpectError
	cumax.ndarray( x.length, x, 1, 0, null, 1, 0 ); // $ExpectError
	cumax.ndarray( x.length, x, 1, 0, undefined, 1, 0 ); // $ExpectError
	cumax.ndarray( x.length, x, 1, 0, [ '1' ], 1, 0 ); // $ExpectError
	cumax.ndarray( x.length, x, 1, 0, {}, 1, 0 ); // $ExpectError
	cumax.ndarray( x.length, x, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	cumax.ndarray( x.length, x, 1, 0, y, '10', 0 ); // $ExpectError
	cumax.ndarray( x.length, x, 1, 0, y, true, 0 ); // $ExpectError
	cumax.ndarray( x.length, x, 1, 0, y, false, 0 ); // $ExpectError
	cumax.ndarray( x.length, x, 1, 0, y, null, 0 ); // $ExpectError
	cumax.ndarray( x.length, x, 1, 0, y, undefined, 0 ); // $ExpectError
	cumax.ndarray( x.length, x, 1, 0, y, [], 0 ); // $ExpectError
	cumax.ndarray( x.length, x, 1, 0, y, {}, 0 ); // $ExpectError
	cumax.ndarray( x.length, x, 1, 0, y, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	cumax.ndarray( x.length, x, 1, 0, y, 1, '10' ); // $ExpectError
	cumax.ndarray( x.length, x, 1, 0, y, 1, true ); // $ExpectError
	cumax.ndarray( x.length, x, 1, 0, y, 1, false ); // $ExpectError
	cumax.ndarray( x.length, x, 1, 0, y, 1, null ); // $ExpectError
	cumax.ndarray( x.length, x, 1, 0, y, 1, undefined ); // $ExpectError
	cumax.ndarray( x.length, x, 1, 0, y, 1, [] ); // $ExpectError
	cumax.ndarray( x.length, x, 1, 0, y, 1, {} ); // $ExpectError
	cumax.ndarray( x.length, x, 1, 0, y, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	cumax.ndarray(); // $ExpectError
	cumax.ndarray( x.length ); // $ExpectError
	cumax.ndarray( x.length, x ); // $ExpectError
	cumax.ndarray( x.length, x, 1 ); // $ExpectError
	cumax.ndarray( x.length, x, 1, 0 ); // $ExpectError
	cumax.ndarray( x.length, x, 1, 0, y ); // $ExpectError
	cumax.ndarray( x.length, x, 1, 0, y, 1 ); // $ExpectError
	cumax.ndarray( x.length, x, 1, 0, y, 1, 0, 10 ); // $ExpectError
}
