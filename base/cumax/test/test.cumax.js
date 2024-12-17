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
var floor = require( '@stdlib/math/base/special/floor' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var Float64Array = require( '@stdlib/array/float64' );
var cumax = require( './../lib/cumax.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cumax, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( cumax.length, 5, 'has expected arity' );
	t.end();
});

tape( 'the function computes the cumulative maximum', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	cumax( x.length, x, 1, y, 1 );

	expected = [
		1.0,
		1.0,
		3.0,
		3.0,
		5.0
	];
	t.deepEqual( y, expected, 'returns expected value' );

	x = [ -0.0, 0.0, -0.0 ];
	y = [ 0.0, 0.0, 0.0 ];
	cumax( x.length, x, 1, y, 1 );

	expected = [
		-0.0,
		0.0,
		0.0
	];
	for ( i = 0; i < y.length; i++ ) {
		if ( isNegativeZero( expected[ i ] ) ) {
			t.strictEqual( isNegativeZero( y[ i ] ), true, 'returns expected value. i: ' + i );
		} else {
			t.strictEqual( y[ i ], expected[ i ], true, 'returns expected value. i: ' + i );
		}
	}

	x = [ NaN ];
	y = [ 0.0 ];
	cumax( x.length, x, 1, y, 1 );

	for ( i = 0; i < y.length; i++ ) {
		t.strictEqual( isnan( y[ i ] ), true, 'returns expected value. i: ' + i );
	}

	x = [ NaN, NaN ];
	y = [ 0.0, 0.0 ];
	cumax( x.length, x, 1, y, 1 );

	for ( i = 0; i < y.length; i++ ) {
		t.strictEqual( isnan( y[ i ] ), true, 'returns expected value. i: ' + i );
	}

	x = [ 1.0, NaN, 3.0, NaN ];
	y = [ 0.0, 0.0, 0.0, 0.0 ];
	cumax( x.length, x, 1, y, 1 );

	expected = [
		1.0,
		NaN,
		NaN,
		NaN
	];
	for ( i = 0; i < y.length; i++ ) {
		if ( isnan( expected[ i ] ) ) {
			t.strictEqual( isnan( y[ i ] ), true, 'returns expected value. i: ' + i );
		} else {
			t.strictEqual( y[ i ], expected[ i ], true, 'returns expected value. i: ' + i );
		}
	}
	t.end();
});

tape( 'the function returns a reference to the output array', function test( t ) {
	var out;
	var x;
	var y;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	out = cumax( x.length, x, 1, y, 1 );
	t.strictEqual( out, y, 'same reference' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `y` unchanged', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];

	expected = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];

	cumax( -1, x, 1, y, 1 );
	t.deepEqual( y, expected, 'returns `y` unchanged' );

	cumax( 0, x, 1, y, 1 );
	t.deepEqual( y, expected, 'returns `y` unchanged' );

	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = [
		1.0,  // 0
		-2.0,
		3.0,  // 1
		4.0,
		-5.0  // 2
	];
	y = [
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	];
	N = 3;

	cumax( N, x, 2, y, 1 );

	expected = [ 1.0, 3.0, 3.0, 0.0, 0.0 ];
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = [
		1.0,  // 0
		-2.0, // 1
		3.0,  // 2
		4.0,
		5.0
	];
	y = [
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0  // 2
	];
	N = 3;

	cumax( N, x, 1, y, 2 );

	expected = [ 1.0, 0.0, 1.0, 0.0, 3.0 ];
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = [
		1.0,  // 2
		-2.0,
		3.0,  // 1
		4.0,
		-5.0  // 0
	];
	y = [
		0.0, // 2
		0.0, // 1
		0.0, // 0
		0.0,
		0.0
	];
	N = 3;

	cumax( N, x, -2, y, -1 );

	expected = [ 3.0, 3.0, -5.0, 0.0, 0.0 ];
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = [
		1.0,  // 0
		2.0,
		-3.0, // 1
		4.0,
		5.0,  // 2
		6.0
	];
	y = [
		0.0,  // 2
		0.0,  // 1
		0.0,  // 0
		0.0,
		0.0,
		0.0
	];
	N = 3;

	cumax( N, x, 2, y, -1 );

	expected = [ 5.0, 1.0, 1.0, 0.0, 0.0, 0.0 ];
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var x0;
	var y0;
	var x1;
	var y1;
	var N;

	// Initial arrays...
	x0 = new Float64Array([
		1.0,
		2.0, // 2
		3.0,
		4.0, // 1
		5.0,
		6.0  // 0
	]);
	y0 = new Float64Array([
		0.0,
		0.0,
		0.0,
		0.0, // 0
		0.0, // 1
		0.0  // 2
	]);

	// Create offset views...
	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // begin at 2nd element
	y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // begin at the 4th element

	N = floor( x0.length / 2 );

	cumax( N, x1, -2, y1, 1 );
	expected = new Float64Array( [ 0.0, 0.0, 0.0, 6.0, 6.0, 6.0 ] );

	t.deepEqual( y0, expected, 'returns expected value' );
	t.end();
});
