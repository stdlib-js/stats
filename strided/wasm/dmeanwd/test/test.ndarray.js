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

'use strict';

// MODULES //

var tape = require( 'tape' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var Float64Array = require( '@stdlib/array/float64' );
var dmeanwd = require( './../lib' );


// TESTS //

tape( 'main export is an object', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dmeanwd, 'object', 'main export is an object' );
	t.end();
});

tape( 'the `ndarray` method has an arity of 4', function test( t ) {
	t.strictEqual( dmeanwd.ndarray.length, 4, 'has expected arity' );
	t.end();
});

tape( 'the `ndarray` method calculates the arithmetic mean of a strided array', function test( t ) {
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] );
	v = dmeanwd.ndarray( x.length, x, 1, 0 );
	t.strictEqual( v, 0.5, 'returns expected value' );

	x = new Float64Array( [ -4.0, -4.0 ] );
	v = dmeanwd.ndarray( x.length, x, 1, 0 );
	t.strictEqual( v, -4.0, 'returns expected value' );

	x = new Float64Array( [ NaN, 4.0 ] );
	v = dmeanwd.ndarray( x.length, x, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the `ndarray` method returns `NaN`', function test( t ) {
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = dmeanwd.ndarray( 0, x, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = dmeanwd.ndarray( -1, x, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the `ndarray` method returns the first indexed element', function test( t ) {
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = dmeanwd.ndarray( 1, x, 1, 0 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	t.end();
});

tape( 'the `ndarray` method supports a `stride` parameter', function test( t ) {
	var x;
	var v;

	x = new Float64Array([
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 3
		2.0
	]);

	v = dmeanwd.ndarray( 4, x, 2, 0 );

	t.strictEqual( v, 1.25, 'returns expected value' );
	t.end();
});

tape( 'the `ndarray` method supports a negative `stride` parameter', function test( t ) {
	var x;
	var v;

	x = new Float64Array([
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	]);

	v = dmeanwd.ndarray( 4, x, -2, 6 );

	t.strictEqual( v, 1.25, 'returns expected value' );
	t.end();
});

tape( 'if provided a `stride` parameter equal to `0`, the `ndarray` method returns the first indexed element', function test( t ) {
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = dmeanwd.ndarray( x.length, x, 0, 0 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	t.end();
});

tape( 'the `ndarray` method supports an `offset` parameter', function test( t ) {
	var x;
	var v;

	x = new Float64Array([
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0   // 3
	]);

	v = dmeanwd.ndarray( 4, x, 2, 1 );
	t.strictEqual( v, 1.25, 'returns expected value' );

	t.end();
});
