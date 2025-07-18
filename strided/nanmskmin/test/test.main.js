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
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );
var nanmskmin = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof nanmskmin, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( nanmskmin.length, 5, 'has expected arity' );
	t.end();
});

tape( 'the function calculates the minimum value of a strided array according to a mask, ignoring NaN values', function test( t ) {
	var mask;
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, NaN, 5.0, 0.0, 3.0 ];
	mask = [ 0, 0, 0, 1, 0, 0, 0 ];
	v = nanmskmin( x.length, x, 1, mask, 1 );
	t.strictEqual( v, -4.0, 'returns expected value' );

	x = [ -4.0, NaN, -5.0 ];
	mask = [ 0, 1, 0 ];
	v = nanmskmin( x.length, x, 1, mask, 1 );
	t.strictEqual( v, -5.0, 'returns expected value' );

	x = [ 0.0, -0.0, NaN, 0.0 ];
	mask = [ 0, 0, 1, 0 ];
	v = nanmskmin( x.length, x, 1, mask, 1 );
	t.strictEqual( isNegativeZero( v ), true, 'returns expected value' );

	x = [ -4.0, 0.0, NaN, 5.0 ];
	mask = [ 0, 0, 0, 0 ];
	v = nanmskmin( x.length, x, 1, mask, 1 );
	t.strictEqual( v, -4.0, 'returns expected value' );

	x = [ NaN ];
	mask = [ 0 ];
	v = nanmskmin( x.length, x, 1, mask, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = [ NaN ];
	mask = [ 1 ];
	v = nanmskmin( x.length, x, 1, mask, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = [ NaN, NaN ];
	mask = [ 1, 1 ];
	v = nanmskmin( x.length, x, 1, mask, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = [ NaN, NaN ];
	mask = [ 1, 0 ];
	v = nanmskmin( x.length, x, 1, mask, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = [ NaN, NaN ];
	mask = [ 0, 1 ];
	v = nanmskmin( x.length, x, 1, mask, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = [ NaN, NaN ];
	mask = [ 0, 0 ];
	v = nanmskmin( x.length, x, 1, mask, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function calculates the minimum value of a strided array according to a mask, ignoring NaN values (accessors)', function test( t ) {
	var mask;
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, NaN, 5.0, 0.0, 3.0 ];
	mask = [ 0, 0, 0, 1, 0, 0, 0 ];
	v = nanmskmin( x.length, toAccessorArray( x ), 1, toAccessorArray( mask ), 1 ); // eslint-disable-line max-len
	t.strictEqual( v, -4.0, 'returns expected value' );

	x = [ -4.0, NaN, -5.0 ];
	mask = [ 0, 1, 0 ];
	v = nanmskmin( x.length, toAccessorArray( x ), 1, toAccessorArray( mask ), 1 ); // eslint-disable-line max-len
	t.strictEqual( v, -5.0, 'returns expected value' );

	x = [ 0.0, -0.0, NaN, 0.0 ];
	mask = [ 0, 0, 1, 0 ];
	v = nanmskmin( x.length, toAccessorArray( x ), 1, toAccessorArray( mask ), 1 ); // eslint-disable-line max-len
	t.strictEqual( isNegativeZero( v ), true, 'returns expected value' );

	x = [ -4.0, 0.0, NaN, 5.0 ];
	mask = [ 0, 0, 0, 0 ];
	v = nanmskmin( x.length, toAccessorArray( x ), 1, toAccessorArray( mask ), 1 ); // eslint-disable-line max-len
	t.strictEqual( v, -4.0, 'returns expected value' );

	x = [ NaN ];
	mask = [ 0 ];
	v = nanmskmin( x.length, toAccessorArray( x ), 1, toAccessorArray( mask ), 1 ); // eslint-disable-line max-len
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = [ NaN ];
	mask = [ 1 ];
	v = nanmskmin( x.length, toAccessorArray( x ), 1, toAccessorArray( mask ), 1 ); // eslint-disable-line max-len
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = [ NaN, NaN ];
	mask = [ 1, 1 ];
	v = nanmskmin( x.length, toAccessorArray( x ), 1, toAccessorArray( mask ), 1 ); // eslint-disable-line max-len
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = [ NaN, NaN ];
	mask = [ 1, 0 ];
	v = nanmskmin( x.length, toAccessorArray( x ), 1, toAccessorArray( mask ), 1 ); // eslint-disable-line max-len
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = [ NaN, NaN ];
	mask = [ 0, 1 ];
	v = nanmskmin( x.length, toAccessorArray( x ), 1, toAccessorArray( mask ), 1 ); // eslint-disable-line max-len
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = [ NaN, NaN ];
	mask = [ 0, 0 ];
	v = nanmskmin( x.length, toAccessorArray( x ), 1, toAccessorArray( mask ), 1 ); // eslint-disable-line max-len
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `NaN`', function test( t ) {
	var mask;
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];
	mask = [ 0, 0 ];

	v = nanmskmin( 0, x, 1, mask, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = nanmskmin( -1, x, 1, mask, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `NaN` (accessors)', function test( t ) {
	var mask;
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];
	mask = [ 0, 0 ];

	v = nanmskmin( 0, toAccessorArray( x ), 1, toAccessorArray( mask ), 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = nanmskmin( -1, toAccessorArray( x ), 1, toAccessorArray( mask ), 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function returns the first element', function test( t ) {
	var mask;
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];
	mask = [ 0, 0 ];

	v = nanmskmin( 1, x, 1, mask, 1 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function returns the first element (accessors)', function test( t ) {
	var mask;
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];
	mask = [ 0, 0 ];

	v = nanmskmin( 1, toAccessorArray( x ), 1, toAccessorArray( mask ), 1 );
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

	v = nanmskmin( 6, x, 2, mask, 2 );

	t.strictEqual( v, -2.0, 'returns expected value' );
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

	v = nanmskmin( 6, toAccessorArray( x ), 2, toAccessorArray( mask ), 2 );

	t.strictEqual( v, -2.0, 'returns expected value' );
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

	v = nanmskmin( 6, x, -2, mask, -2 );

	t.strictEqual( v, -2.0, 'returns expected value' );
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

	v = nanmskmin( 6, toAccessorArray( x ), -2, toAccessorArray( mask ), -2 );

	t.strictEqual( v, -2.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var mask0;
	var mask1;
	var x0;
	var x1;
	var v;

	x0 = new Float64Array([
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0,  // 3
		6.0,
		5.0,  // 4
		6.0,
		NaN,  // 5
		NaN
	]);
	mask0 = new Uint8Array([
		0,
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
	]);

	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
	mask1 = new Uint8Array( mask0.buffer, mask0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

	v = nanmskmin( 6, x1, 2, mask1, 2 );
	t.strictEqual( v, -2.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports view offsets (accessors)', function test( t ) {
	var mask0;
	var mask1;
	var x0;
	var x1;
	var v;

	x0 = new Float64Array([
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0,  // 3
		6.0,
		5.0,  // 4
		6.0,
		NaN,  // 5
		NaN
	]);
	mask0 = new Uint8Array([
		0,
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
	]);

	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
	mask1 = new Uint8Array( mask0.buffer, mask0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

	v = nanmskmin( 6, toAccessorArray( x1 ), 2, toAccessorArray( mask1 ), 2 );
	t.strictEqual( v, -2.0, 'returns expected value' );

	t.end();
});
