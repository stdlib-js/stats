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
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var Float64Array = require( '@stdlib/array/float64' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var drange = require( './../lib' );


// FUNCTIONS //

/**
* Returns a one-dimensional ndarray.
*
* @private
* @param {Collection} buffer - underlying data buffer
* @param {NonNegativeInteger} length - number of indexed elements
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - index offset
* @returns {ndarray} one-dimensional ndarray
*/
function vector( buffer, length, stride, offset ) {
	return new ndarray( 'float64', buffer, [ length ], [ stride ], offset, 'row-major' );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof drange, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( drange.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function calculates the range of a one-dimensional ndarray', function test( t ) {
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] );
	v = drange( [ vector( x, 6, 1, 0 ) ] );
	t.strictEqual( v, 9.0, 'returns expected value' );

	x = new Float64Array( [ -4.0, -5.0 ] );
	v = drange( [ vector( x, 2, 1, 0 ) ] );
	t.strictEqual( v, 1.0, 'returns expected value' );

	x = new Float64Array( [ -0.0, 0.0, -0.0 ] );
	v = drange( [ vector( x, 3, 1, 0 ) ] );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	x = new Float64Array( [ NaN ] );
	v = drange( [ vector( x, 1, 1, 0 ) ] );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = new Float64Array( [ NaN, NaN ] );
	v = drange( [ vector( x, 2, 1, 0 ) ] );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an empty vector, the function returns `NaN`', function test( t ) {
	var x;
	var v;

	x = new Float64Array( [] );

	v = drange( [ vector( x, 0, 1, 0 ) ] );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a vector containing a single element, the function returns `0`', function test( t ) {
	var x;
	var v;

	x = new Float64Array( [ 1.0 ] );

	v = drange( [ vector( x, 1, 1, 0 ) ] );
	t.strictEqual( v, 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-unit strides', function test( t ) {
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

	v = drange( [ vector( x, 4, 2, 0 ) ] );

	t.strictEqual( v, 6.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports one-dimensional ndarrays having negative strides', function test( t ) {
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

	v = drange( [ vector( x, 4, -2, 6 ) ] );

	t.strictEqual( v, 6.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-zero offsets', function test( t ) {
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

	v = drange( [ vector( x, 4, 2, 1 ) ] );
	t.strictEqual( v, 6.0, 'returns expected value' );

	t.end();
});
