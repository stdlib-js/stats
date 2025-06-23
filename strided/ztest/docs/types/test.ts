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

import Float64Results = require( './../../../../base/ztest/one-sample/results/float64' );
import ztest = require( './index' );


// TESTS //

// The function returns a results object...
{
	const x = new Float64Array( 10 );

	ztest( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, new Float64Results() ); // $ExpectType Results
	ztest( x.length, 'greater', 0.05, 0.0, 1.0, x, 1, new Float64Results() ); // $ExpectType Results
	ztest( x.length, 'less', 0.05, 0.0, 1.0, x, 1, new Float64Results() ); // $ExpectType Results
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	ztest( '10', 'two-sided', 0.05, 0.0, 1.0, x, 1, new Float64Results() ); // $ExpectError
	ztest( true, 'two-sided', 0.05, 0.0, 1.0, x, 1, new Float64Results() ); // $ExpectError
	ztest( false, 'two-sided', 0.05, 0.0, 1.0, x, 1, new Float64Results() ); // $ExpectError
	ztest( null, 'two-sided', 0.05, 0.0, 1.0, x, 1, new Float64Results() ); // $ExpectError
	ztest( undefined, 'two-sided', 0.05, 0.0, 1.0, x, 1, new Float64Results() ); // $ExpectError
	ztest( [], 'two-sided', 0.05, 0.0, 1.0, x, 1, new Float64Results() ); // $ExpectError
	ztest( {}, 'two-sided', 0.05, 0.0, 1.0, x, 1, new Float64Results() ); // $ExpectError
	ztest( ( x: number ): number => x, 'two-sided', 0.05, 0.0, 1.0, x, 1, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a valid string...
{
	const x = new Float64Array( 10 );

	ztest( x.length, '10', 0.05, 0.0, 1.0, x, 1, new Float64Results() ); // $ExpectError
	ztest( x.length, 5, 0.05, 0.0, 1.0, x, 1, new Float64Results() ); // $ExpectError
	ztest( x.length, true, 0.05, 0.0, 1.0, x, 1, new Float64Results() ); // $ExpectError
	ztest( x.length, false, 0.05, 0.0, 1.0, x, 1, new Float64Results() ); // $ExpectError
	ztest( x.length, null, 0.05, 0.0, 1.0, x, 1, new Float64Results() ); // $ExpectError
	ztest( x.length, undefined, 0.05, 0.0, 1.0, x, 1, new Float64Results() ); // $ExpectError
	ztest( x.length, [], 0.05, 0.0, 1.0, x, 1, new Float64Results() ); // $ExpectError
	ztest( x.length, {}, 0.05, 0.0, 1.0, x, 1, new Float64Results() ); // $ExpectError
	ztest( x.length, ( x: number ): number => x, 0.05, 0.0, 1.0, x, 1, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	ztest( x.length, 'two-sided', '10', 0.0, 1.0, x, 1, new Float64Results() ); // $ExpectError
	ztest( x.length, 'two-sided', true, 0.0, 1.0, x, 1, new Float64Results() ); // $ExpectError
	ztest( x.length, 'two-sided', false, 0.0, 1.0, x, 1, new Float64Results() ); // $ExpectError
	ztest( x.length, 'two-sided', null, 0.0, 1.0, x, 1, new Float64Results() ); // $ExpectError
	ztest( x.length, 'two-sided', undefined, 0.0, 1.0, x, 1, new Float64Results() ); // $ExpectError
	ztest( x.length, 'two-sided', [], 0.0, 1.0, x, 1, new Float64Results() ); // $ExpectError
	ztest( x.length, 'two-sided', {}, 0.0, 1.0, x, 1, new Float64Results() ); // $ExpectError
	ztest( x.length, 'two-sided', ( x: number ): number => x, 0.0, 1.0, x, 1, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	ztest( x.length, 'two-sided', 0.05, '10', 1.0, x, 1, new Float64Results() ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, true, 1.0, x, 1, new Float64Results() ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, false, 1.0, x, 1, new Float64Results() ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, null, 1.0, x, 1, new Float64Results() ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, undefined, 1.0, x, 1, new Float64Results() ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, [], 1.0, x, 1, new Float64Results() ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, {}, 1.0, x, 1, new Float64Results() ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, ( x: number ): number => x, 1.0, x, 1, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	ztest( x.length, 'two-sided', 0.05, 0.0, '10', x, 1, new Float64Results() ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, 0.0, true, x, 1, new Float64Results() ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, 0.0, false, x, 1, new Float64Results() ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, 0.0, null, x, 1, new Float64Results() ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, 0.0, undefined, x, 1, new Float64Results() ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, 0.0, [], x, 1, new Float64Results() ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, 0.0, {}, x, 1, new Float64Results() ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, 0.0, ( x: number ): number => x, x, 1, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not an array-like object...
{
	const x = new Float64Array( 10 );

	ztest( x.length, 'two-sided', 0.05, 0.0, 1.0, 10, 1, new Float64Results() ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, 0.0, 1.0, '10', 1, new Float64Results() ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, 0.0, 1.0, true, 1, new Float64Results() ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, 0.0, 1.0, false, 1, new Float64Results() ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, 0.0, 1.0, null, 1, new Float64Results() ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, 0.0, 1.0, undefined, 1, new Float64Results() ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, 0.0, 1.0, {}, 1, new Float64Results() ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, 0.0, 1.0, ( x: number ): number => x, 1, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );

	ztest( x.length, 'two-sided', 0.05, 0.0, 1.0, x, '10', new Float64Results() ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, 0.0, 1.0, x, true, new Float64Results() ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, 0.0, 1.0, x, false, new Float64Results() ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, 0.0, 1.0, x, null, new Float64Results() ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, 0.0, 1.0, x, undefined, new Float64Results() ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, 0.0, 1.0, x, [], new Float64Results() ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, 0.0, 1.0, x, {}, new Float64Results() ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, 0.0, 1.0, x, ( x: number ): number => x, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a results object...
{
	const x = new Float64Array( 10 );

	ztest( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, '10' ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, true ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, false ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, null ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, undefined ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, [] ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, {} ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	ztest(); // $ExpectError
	ztest( x.length ); // $ExpectError
	ztest( x.length, 'two-sided' ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05 ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, 0.0 ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, 0.0, 1.0 ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, 0.0, 1.0, x ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1 ); // $ExpectError
	ztest( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, new Float64Results(), {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a results object...
{
	const x = new Float64Array( 10 );

	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, new Float64Results() ); // $ExpectType Results
	ztest.ndarray( x.length, 'greater', 0.05, 0.0, 1.0, x, 1, 0, new Float64Results() ); // $ExpectType Results
	ztest.ndarray( x.length, 'less', 0.05, 0.0, 1.0, x, 1, 0, new Float64Results() ); // $ExpectType Results
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	ztest.ndarray( '10', 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( true, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( false, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( null, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( undefined, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( [], 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( {}, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( ( x: number ): number => x, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a valid string...
{
	const x = new Float64Array( 10 );

	ztest.ndarray( x.length, '10', 0.05, 0.0, 1.0, x, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 5, 0.05, 0.0, 1.0, x, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, true, 0.05, 0.0, 1.0, x, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, false, 0.05, 0.0, 1.0, x, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, null, 0.05, 0.0, 1.0, x, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, undefined, 0.05, 0.0, 1.0, x, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, [], 0.05, 0.0, 1.0, x, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, {}, 0.05, 0.0, 1.0, x, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, ( x: number ): number => x, 0.05, 0.0, 1.0, x, 1, 0, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	ztest.ndarray( x.length, 'two-sided', '10', 0.0, 1.0, x, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', true, 0.0, 1.0, x, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', false, 0.0, 1.0, x, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', null, 0.0, 1.0, x, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', undefined, 0.0, 1.0, x, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', [], 0.0, 1.0, x, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', {}, 0.0, 1.0, x, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', ( x: number ): number => x, 0.0, 1.0, x, 1, 0, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	ztest.ndarray( x.length, 'two-sided', 0.05, '10', 1.0, x, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, true, 1.0, x, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, false, 1.0, x, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, null, 1.0, x, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, undefined, 1.0, x, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, [], 1.0, x, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, {}, 1.0, x, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, ( x: number ): number => x, 1, 0.0, x, 1, 0, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, '10', x, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, true, x, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, false, x, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, null, x, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, undefined, x, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, [], x, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, {}, x, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, ( x: number ): number => x, x, 1, 0, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not an array-like object...
{
	const x = new Float64Array( 10 );

	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, 10, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, '10', 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, true, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, false, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, null, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, undefined, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, {}, 1, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, ( x: number ): number => x, 1, 0, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );

	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x, '10', 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x, true, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x, false, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x, null, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x, undefined, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x, [], 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x, {}, 0, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x, ( x: number ): number => x, 0, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 10 );

	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, '10', new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, true, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, false, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, null, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, undefined, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, [], new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, {}, new Float64Results() ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, ( x: number ): number => x, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a results object...
{
	const x = new Float64Array( 10 );

	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, '10' ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, true ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, false ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, null ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, undefined ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, [] ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, {} ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	ztest.ndarray(); // $ExpectError
	ztest.ndarray( x.length ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided' ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05 ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0 ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0 ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1 ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0 ); // $ExpectError
	ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, new Float64Results(), {} ); // $ExpectError
}
