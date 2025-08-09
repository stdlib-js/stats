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

import Float64Results = require( './../../../../base/ztest/two-sample/results/float64' );
import dztest2 = require( './index' );


// TESTS //

// The function returns a results object...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectType Results
	dztest2( x.length, y.length, 'greater', 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectType Results
	dztest2( x.length, y.length, 'less', 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectType Results
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dztest2( '10', y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( true, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( false, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( null, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( undefined, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( [], y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( {}, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( ( x: number ): number => x, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dztest2( x.length, '10', 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, true, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, false, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, null, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, undefined, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, [], 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, {}, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, ( x: number ): number => x, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid string...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dztest2( x.length, y.length, '10', 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, true, 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, false, 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, null, 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, undefined, 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, [], 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, {}, 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, ( x: number ): number => x, 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dztest2( x.length, y.length, 'two-sided', '10', 0.0, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', true, 0.0, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', false, 0.0, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', null, 0.0, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', undefined, 0.0, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', [], 0.0, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', {}, 0.0, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', ( x: number ): number => x, 0.0, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dztest2( x.length, y.length, 'two-sided', 0.05, '10', 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, true, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, false, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, null, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, undefined, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, [], 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, {}, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, ( x: number ): number => x, 1.0, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, '10', x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, true, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, false, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, null, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, undefined, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, [], x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, {}, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, ( x: number ): number => x, x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not an array-like object...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, 10, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, '10', 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, true, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, false, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, null, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, undefined, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, {}, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, ( x: number ): number => x, 1, 1.0, y, 1, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, '10', 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, true, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, false, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, null, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, undefined, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, [], 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, {}, 1.0, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, ( x: number ): number => x, 1.0, y, 1, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, '10', y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, true, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, false, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, null, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, undefined, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, [], y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, {}, y, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, ( x: number ): number => x, y, 1, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the function is provided a tenth argument which is not an array-like object...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, 10, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, '10', 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, true, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, false, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, null, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, undefined, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, {}, 1, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, ( x: number ): number => x, 1, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the function is provided an eleventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y, '10', new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y, true, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y, false, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y, null, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y, undefined, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y, [], new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y, {}, new Float64Results() ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y, ( x: number ): number => x, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the function is provided a twelfth argument which is not a results object...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, '10' ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, true ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, false ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, null ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, undefined ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, [] ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, {} ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dztest2(); // $ExpectError
	dztest2( x.length ); // $ExpectError
	dztest2( x.length, y.length ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided' ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05 ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0 ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0 ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1 ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0 ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y, 1 ); // $ExpectError
	dztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, new Float64Results(), {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a results object...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectType Results
	dztest2.ndarray( x.length, y.length, 'greater', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectType Results
	dztest2.ndarray( x.length, y.length, 'less', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectType Results
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dztest2.ndarray( '10', y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( true, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( false, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( null, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( undefined, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( [], y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( {}, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( ( x: number ): number => x, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dztest2.ndarray( x.length, '10', 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, true, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, false, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, null, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, undefined, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, [], 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, {}, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, ( x: number ): number => x, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a valid string...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dztest2.ndarray( x.length, y.length, '10', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 5, 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, true, 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, false, 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, null, 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, undefined, 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, [], 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, {}, 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, ( x: number ): number => x, 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dztest2.ndarray( x.length, y.length, 'two-sided', '10', 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', true, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', false, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', null, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', undefined, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', [], 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', {}, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', ( x: number ): number => x, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, '10', 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, true, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, false, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, null, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, undefined, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, [], 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, {}, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, ( x: number ): number => x, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, '10', x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, true, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, false, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, null, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, undefined, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, [], x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, {}, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, ( x: number ): number => x, x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not an array-like object...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, 10, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, '10', 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, true, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, false, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, null, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, undefined, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, {}, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, ( x: number ): number => x, 1, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, '10', 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, true, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, false, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, null, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, undefined, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, [], 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, {}, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, ( x: number ): number => x, 0, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, '10', 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, true, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, false, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, null, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, undefined, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, [], 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, {}, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, ( x: number ): number => x, 1.0, y, 1, 0, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a tenth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, '10', y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, true, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, false, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, null, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, undefined, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, [], y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, {}, y, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, ( x: number ): number => x, y, 1, 0, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eleventh argument which is not an array-like object...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, 10, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, '10', 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, true, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, false, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, null, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, undefined, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, {}, 1, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, ( x: number ): number => x, 1, 0, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a twelfth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, '10', 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, true, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, false, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, null, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, undefined, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, [], 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, {}, 0, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, ( x: number ): number => x, 0, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a thirteenth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, '10', new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, true, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, false, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, null, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, undefined, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, [], new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, {}, new Float64Results() ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, ( x: number ): number => x, new Float64Results() ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourteenth argument which is not a results object...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, '10' ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, true ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, false ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, null ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, undefined ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, [] ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, {} ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dztest2.ndarray(); // $ExpectError
	dztest2.ndarray( x.length ); // $ExpectError
	dztest2.ndarray( x.length, y.length ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05 ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0 ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0 ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1 ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0 ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0 ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1 ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, new Float64Results(), {} ); // $ExpectError
}
