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
var floor = require( '@stdlib/math/base/special/floor' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var dmskmin = tryRequire( resolve( __dirname, './../lib/dmskmin.native.js' ) );
var opts = {
	'skip': ( dmskmin instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dmskmin, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', opts, function test( t ) {
	t.strictEqual( dmskmin.length, 5, 'has expected arity' );
	t.end();
});

tape( 'the function calculates the minimum value of a strided array according to a mask', opts, function test( t ) {
	var mask;
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, NaN, 5.0, 0.0, 3.0 ] );
	mask = new Uint8Array( [ 0, 0, 0, 1, 0, 0, 0 ] );
	v = dmskmin( x.length, x, 1, mask, 1 );
	t.strictEqual( v, -4.0, 'returns expected value' );

	x = new Float64Array( [ -4.0, NaN, -5.0 ] );
	mask = new Uint8Array( [ 0, 1, 0 ] );
	v = dmskmin( x.length, x, 1, mask, 1 );
	t.strictEqual( v, -5.0, 'returns expected value' );

	x = new Float64Array( [ 0.0, -0.0, NaN, 0.0 ] );
	mask = new Uint8Array( [ 0, 0, 1, 0 ] );
	v = dmskmin( x.length, x, 1, mask, 1 );
	t.strictEqual( isNegativeZero( v ), true, 'returns expected value' );

	x = new Float64Array( [ -4.0, 0.0, NaN, 5.0 ] );
	mask = new Uint8Array( [ 0, 0, 0, 0 ] );
	v = dmskmin( x.length, x, 1, mask, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = new Float64Array( [ NaN ] );
	mask = new Uint8Array( [ 0 ] );
	v = dmskmin( x.length, x, 1, mask, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = new Float64Array( [ NaN ] );
	mask = new Uint8Array( [ 1 ] );
	v = dmskmin( x.length, x, 1, mask, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = new Float64Array( [ NaN, NaN ] );
	mask = new Uint8Array( [ 1, 1 ] );
	v = dmskmin( x.length, x, 1, mask, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = new Float64Array( [ NaN, NaN ] );
	mask = new Uint8Array( [ 1, 0 ] );
	v = dmskmin( x.length, x, 1, mask, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = new Float64Array( [ NaN, NaN ] );
	mask = new Uint8Array( [ 0, 1 ] );
	v = dmskmin( x.length, x, 1, mask, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = new Float64Array( [ NaN, NaN ] );
	mask = new Uint8Array( [ 0, 0 ] );
	v = dmskmin( x.length, x, 1, mask, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `NaN`', opts, function test( t ) {
	var mask;
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );
	mask = new Uint8Array( x.length );

	v = dmskmin( 0, x, 1, mask, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = dmskmin( -1, x, 1, mask, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function returns the first element', opts, function test( t ) {
	var mask;
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );
	mask = new Uint8Array( x.length );

	v = dmskmin( 1, x, 1, mask, 1 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports `stride` parameters', opts, function test( t ) {
	var mask;
	var N;
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
		-5.0, // 4
		-6.0
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
		1
	]);

	N = floor( x.length / 2 );
	v = dmskmin( N, x, 2, mask, 2 );

	t.strictEqual( v, -2.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative `stride` parameters', opts, function test( t ) {
	var mask;
	var N;
	var x;
	var v;

	x = new Float64Array([
		-5.0, // 4
		-6.0,
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

	N = floor( x.length / 2 );
	v = dmskmin( N, x, -2, mask, -2 );

	t.strictEqual( v, -2.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets', opts, function test( t ) {
	var mask0;
	var mask1;
	var x0;
	var x1;
	var N;
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
		-5.0, // 4
		-6.0
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
		1
	]);

	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
	mask1 = new Uint8Array( mask0.buffer, mask0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
	N = floor( x1.length/2 );

	v = dmskmin( N, x1, 2, mask1, 2 );
	t.strictEqual( v, -2.0, 'returns expected value' );

	t.end();
});
