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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var dnanmskrange = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( dnanmskrange instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dnanmskrange, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 7', opts, function test( t ) {
	t.strictEqual( dnanmskrange.length, 7, 'has expected arity' );
	t.end();
});

tape( 'the function calculates the range of a strided array according to a mask, ignoring NaN values', opts, function test( t ) {
	var mask;
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, NaN, 5.0, 0.0, 3.0 ] );
	mask = new Uint8Array( [ 0, 0, 0, 1, 0, 0, 0 ] );
	v = dnanmskrange( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( v, 9.0, 'returns expected value' );

	x = new Float64Array( [ -4.0, NaN, -5.0 ] );
	mask = new Uint8Array( [ 0, 1, 0 ] );
	v = dnanmskrange( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	x = new Float64Array( [ -0.0, 0.0, NaN, -0.0 ] );
	mask = new Uint8Array( [ 0, 0, 1, 0 ] );
	v = dnanmskrange( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	x = new Float64Array( [ -4.0, 0.0, NaN, 5.0 ] );
	mask = new Uint8Array( [ 0, 0, 0, 0 ] );
	v = dnanmskrange( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( v, 9.0, 'returns expected value' );

	x = new Float64Array( [ NaN ] );
	mask = new Uint8Array( [ 0 ] );
	v = dnanmskrange( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = new Float64Array( [ NaN ] );
	mask = new Uint8Array( [ 1 ] );
	v = dnanmskrange( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = new Float64Array( [ NaN, NaN ] );
	mask = new Uint8Array( [ 1, 1 ] );
	v = dnanmskrange( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = new Float64Array( [ NaN, NaN ] );
	mask = new Uint8Array( [ 1, 0 ] );
	v = dnanmskrange( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = new Float64Array( [ NaN, NaN ] );
	mask = new Uint8Array( [ 0, 1 ] );
	v = dnanmskrange( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = new Float64Array( [ NaN, NaN ] );
	mask = new Uint8Array( [ 0, 0 ] );
	v = dnanmskrange( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `NaN`', opts, function test( t ) {
	var mask;
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );
	mask = new Uint8Array( x.length );

	v = dnanmskrange( 0, x, 1, 0, mask, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = dnanmskrange( -1, x, 1, 0, mask, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function returns `0`', opts, function test( t ) {
	var mask;
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );
	mask = new Uint8Array( x.length );

	v = dnanmskrange( 1, x, 1, 0, mask, 1, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports `stride` parameters', opts, function test( t ) {
	var mask;
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
		2.0,
		5.0,  // 4
		6.0,
		NaN,  // 5
		NaN
	]);
	mask = new Uint8Array([
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

	v = dnanmskrange( 6, x, 2, 0, mask, 2, 0 );

	t.strictEqual( v, 6.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative `stride` parameters', opts, function test( t ) {
	var mask;
	var x;
	var v;

	x = new Float64Array([
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
	]);
	mask = new Uint8Array([
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
	]);

	v = dnanmskrange( 6, x, -2, 10, mask, -2, 10 );

	t.strictEqual( v, 6.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports `offset` parameters', opts, function test( t ) {
	var mask;
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
		4.0,  // 3
		5.0,
		6.0,  // 4
		NaN,
		NaN   // 5
	]);
	mask = new Uint8Array([
		0,
		0,  // 0
		0,
		0,  // 1
		0,
		0,  // 2
		0,
		0,  // 3
		1,
		1,  // 4
		0,
		0   // 5
	]);

	v = dnanmskrange( 6, x, 2, 1, mask, 2, 1 );
	t.strictEqual( v, 6.0, 'returns expected value' );

	t.end();
});
