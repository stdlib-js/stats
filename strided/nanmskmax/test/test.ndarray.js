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
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var nanmskmax = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof nanmskmax, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 7', function test( t ) {
	t.strictEqual( nanmskmax.length, 7, 'has expected arity' );
	t.end();
});

tape( 'the function calculates the maximum value of a strided array according to a mask, ignoring NaN values', function test( t ) {
	var mask;
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, NaN, 5.0, 0.0, 3.0 ];
	mask = [ 0, 0, 0, 1, 0, 0, 0 ];
	v = nanmskmax( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( v, 5.0, 'returns expected value' );

	x = [ -4.0, NaN, -5.0 ];
	mask = [ 0, 1, 0 ];
	v = nanmskmax( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( v, -4.0, 'returns expected value' );

	x = [ -0.0, 0.0, NaN, -0.0 ];
	mask = [ 0, 0, 1, 0 ];
	v = nanmskmax( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	x = [ -4.0, 0.0, NaN, 5.0 ];
	mask = [ 0, 0, 0, 0 ];
	v = nanmskmax( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( v, 5.0, 'returns expected value' );

	x = [ NaN ];
	mask = [ 0 ];
	v = nanmskmax( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = [ NaN ];
	mask = [ 1 ];
	v = nanmskmax( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = [ NaN, NaN ];
	mask = [ 1, 1 ];
	v = nanmskmax( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = [ NaN, NaN ];
	mask = [ 1, 0 ];
	v = nanmskmax( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = [ NaN, NaN ];
	mask = [ 0, 1 ];
	v = nanmskmax( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = [ NaN, NaN ];
	mask = [ 0, 0 ];
	v = nanmskmax( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function calculates the maximum value of a strided array according to a mask, ignoring NaN values (accessors)', function test( t ) {
	var mask;
	var x;
	var v;

	x = toAccessorArray( [ 1.0, -2.0, -4.0, NaN, 5.0, 0.0, 3.0 ] );
	mask = toAccessorArray( [ 0, 0, 0, 1, 0, 0, 0 ] );
	v = nanmskmax( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( v, 5.0, 'returns expected value' );

	x = toAccessorArray( [ -4.0, NaN, -5.0 ] );
	mask = toAccessorArray( [ 0, 1, 0 ] );
	v = nanmskmax( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( v, -4.0, 'returns expected value' );

	x = toAccessorArray( [ -0.0, 0.0, NaN, -0.0 ] );
	mask = toAccessorArray( [ 0, 0, 1, 0 ] );
	v = nanmskmax( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	x = toAccessorArray( [ -4.0, 0.0, NaN, 5.0 ] );
	mask = toAccessorArray( [ 0, 0, 0, 0 ] );
	v = nanmskmax( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( v, 5.0, 'returns expected value' );

	x = toAccessorArray( [ NaN ] );
	mask = toAccessorArray( [ 0 ] );
	v = nanmskmax( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = toAccessorArray( [ NaN ] );
	mask = toAccessorArray( [ 1 ] );
	v = nanmskmax( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = toAccessorArray( [ NaN, NaN ] );
	mask = toAccessorArray( [ 1, 1 ] );
	v = nanmskmax( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = toAccessorArray( [ NaN, NaN ] );
	mask = toAccessorArray( [ 1, 0 ] );
	v = nanmskmax( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = toAccessorArray( [ NaN, NaN ] );
	mask = toAccessorArray( [ 0, 1 ] );
	v = nanmskmax( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = toAccessorArray( [ NaN, NaN ] );
	mask = toAccessorArray( [ 0, 0 ] );
	v = nanmskmax( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `NaN`', function test( t ) {
	var mask;
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];
	mask = [ 0.0, 0.0 ];

	v = nanmskmax( 0, x, 1, 0, mask, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = nanmskmax( -1, x, 1, 0, mask, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `NaN` (accessors)', function test( t ) {
	var mask;
	var x;
	var v;

	x = toAccessorArray( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );
	mask = toAccessorArray( [ 0, 0 ] );

	v = nanmskmax( 0, x, 1, 0, mask, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = nanmskmax( -1, x, 1, 0, mask, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function returns the first element', function test( t ) {
	var mask;
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];
	mask = [ 0.0, 0.0 ];

	v = nanmskmax( 1, x, 1, 0, mask, 1, 0 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function returns the first element (accessors)', function test( t ) {
	var mask;
	var x;
	var v;

	x = toAccessorArray( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );
	mask = toAccessorArray( [ 0, 0 ] );

	v = nanmskmax( 1, x, 1, 0, mask, 1, 0 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports `stride` parameters', function test( t ) {
	var mask;
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
		2.0,
		5.0,  // 4
		6.0,
		NaN,  // 5
		NaN
	];
	mask = [
		0, // 0
		0,
		0, // 1
		0,
		0, // 2
		0,
		0, // 3
		0,
		1, // 4
		1,
		0, // 5
		0
	];

	v = nanmskmax( 6, x, 2, 0, mask, 2, 0 );

	t.strictEqual( v, 4.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports `stride` parameters (accessors)', function test( t ) {
	var mask;
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
		2.0,
		5.0,  // 4
		6.0,
		NaN,  // 5
		NaN
	];
	mask = [
		0, // 0
		0,
		0, // 1
		0,
		0, // 2
		0,
		0, // 3
		0,
		1, // 4
		1,
		0, // 5
		0
	];

	v = nanmskmax( 6, toAccessorArray( x ), 2, 0, toAccessorArray( mask ), 2, 0 ); // eslint-disable-line max-len

	t.strictEqual( v, 4.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative `stride` parameters', function test( t ) {
	var mask;
	var x;
	var v;

	x = [
		NaN,  // 5
		NaN,
		5.0,  // 4
		6.0,
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	];
	mask = [
		0, // 5
		0,
		1, // 4
		1,
		0, // 3
		0,
		0, // 2
		0,
		0, // 1
		0,
		0, // 0
		0
	];

	v = nanmskmax( 6, x, -2, 10, mask, -2, 10 );

	t.strictEqual( v, 4.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative `stride` parameters (accessors)', function test( t ) {
	var mask;
	var x;
	var v;

	x = [
		NaN,  // 5
		NaN,
		5.0,  // 4
		6.0,
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	];
	mask = [
		0, // 5
		0,
		1, // 4
		1,
		0, // 3
		0,
		0, // 2
		0,
		0, // 1
		0,
		0, // 0
		0
	];

	v = nanmskmax( 6, toAccessorArray( x ), -2, 10, toAccessorArray( mask ), -2, 10 ); // eslint-disable-line max-len

	t.strictEqual( v, 4.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports `offset` parameters', function test( t ) {
	var mask;
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
		4.0,  // 3
		5.0,
		6.0,  // 4
		NaN,
		NaN   // 5
	];
	mask = [
		0,
		0, // 0
		0,
		0, // 1
		0,
		0, // 2
		0,
		0, // 3
		1,
		1, // 4
		0,
		0  // 5
	];

	v = nanmskmax( 6, x, 2, 1, mask, 2, 1 );
	t.strictEqual( v, 4.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports `offset` parameters (accessors)', function test( t ) {
	var mask;
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
		4.0,  // 3
		5.0,
		6.0,  // 4
		NaN,
		NaN   // 5
	];
	mask = [
		0,
		0, // 0
		0,
		0, // 1
		0,
		0, // 2
		0,
		0, // 3
		1,
		1, // 4
		0,
		0  // 5
	];

	v = nanmskmax( 6, toAccessorArray( x ), 2, 1, toAccessorArray( mask ), 2, 1 ); // eslint-disable-line max-len
	t.strictEqual( v, 4.0, 'returns expected value' );

	t.end();
});
