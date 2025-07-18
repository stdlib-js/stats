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

'use strict';

// MODULES //

var tape = require( 'tape' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var range = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof range, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', function test( t ) {
	t.strictEqual( range.length, 4, 'has expected arity' );
	t.end();
});

tape( 'the function calculates the range of a strided array', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ];
	v = range( x.length, x, 1, 0 );
	t.strictEqual( v, 9.0, 'returns expected value' );

	x = [ -4.0, -5.0 ];
	v = range( x.length, x, 1, 0 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	x = [ -0.0, 0.0, -0.0 ];
	v = range( x.length, x, 1, 0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	x = [ NaN ];
	v = range( x.length, x, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = [ NaN, NaN ];
	v = range( x.length, x, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function calculates the range of a strided array (accessors)', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ];
	v = range( x.length, toAccessorArray( x ), 1, 0 );
	t.strictEqual( v, 9.0, 'returns expected value' );

	x = [ -4.0, -5.0 ];
	v = range( x.length, toAccessorArray( x ), 1, 0 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	x = [ -0.0, 0.0, -0.0 ];
	v = range( x.length, toAccessorArray( x ), 1, 0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	x = [ NaN ];
	v = range( x.length, toAccessorArray( x ), 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = [ NaN, NaN ];
	v = range( x.length, toAccessorArray( x ), 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `NaN`', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	v = range( 0, x, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = range( -1, x, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `NaN` (accessors)', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	v = range( 0, toAccessorArray( x ), 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = range( -1, toAccessorArray( x ), 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function returns `0` or `NaN`', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	v = range( 1, x, 1, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = [ NaN, -2.0, -4.0, 5.0, 3.0 ];

	v = range( 1, x, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function returns `0` or `NaN` (accessors)', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	v = range( 1, toAccessorArray( x ), 1, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = [ NaN, -2.0, -4.0, 5.0, 3.0 ];

	v = range( 1, toAccessorArray( x ), 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `stride` parameter', function test( t ) {
	var x;
	var v;

	x = [
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 3
		2.0
	];

	v = range( 4, x, 2, 0 );

	t.strictEqual( v, 6.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `stride` parameter (accessors)', function test( t ) {
	var x;
	var v;

	x = [
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 3
		2.0
	];

	v = range( 4, toAccessorArray( x ), 2, 0 );

	t.strictEqual( v, 6.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative `stride` parameter', function test( t ) {
	var x;
	var v;

	x = [
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	];

	v = range( 4, x, -2, 6 );

	t.strictEqual( v, 6.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative `stride` parameter (accessors)', function test( t ) {
	var x;
	var v;

	x = [
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	];

	v = range( 4, toAccessorArray( x ), -2, 6 );

	t.strictEqual( v, 6.0, 'returns expected value' );
	t.end();
});

tape( 'if provided a `stride` parameter equal to `0`, the function returns `0` or `NaN`', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	v = range( x.length, x, 0, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = [ NaN, -2.0, -4.0, 5.0, 3.0 ];

	v = range( x.length, x, 0, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a `stride` parameter equal to `0`, the function returns `0` or `NaN` (accessors)', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	v = range( x.length, toAccessorArray( x ), 0, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = [ NaN, -2.0, -4.0, 5.0, 3.0 ];

	v = range( x.length, toAccessorArray( x ), 0, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `offset` parameter', function test( t ) {
	var x;
	var v;

	x = [
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0   // 3
	];

	v = range( 4, x, 2, 1 );
	t.strictEqual( v, 6.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `offset` parameter (accessors)', function test( t ) {
	var x;
	var v;

	x = [
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0   // 3
	];

	v = range( 4, toAccessorArray( x ), 2, 1 );
	t.strictEqual( v, 6.0, 'returns expected value' );

	t.end();
});
