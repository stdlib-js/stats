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

/* eslint-disable max-len */

'use strict';

// MODULES //

var tape = require( 'tape' );
var Float64Results = require( './../../../../base/ztest/two-sample/results/float64' );
var resolveEnum = require( './../../../../base/ztest/alternative-resolve-enum' );
var structFactory = require( '@stdlib/array/struct-factory' );
var normal = require( '@stdlib/random/strided/normal' ).ndarray;
var zeros = require( '@stdlib/array/zeros' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var dztest2 = require( './../lib' );


// VARIABLES //

var ResultsArray = structFactory( Float64Results );
var RANDOM_OPTS = {
	'seed': 12345
};


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
	t.strictEqual( typeof dztest2, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( dztest2.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function performs a Z-test over two one-dimensional ndarrays (two-sided)', function test( t ) {
	var sigmax;
	var sigmay;
	var alpha;
	var diff;
	var opts;
	var xbuf;
	var ybuf;
	var obuf;
	var alt;
	var out;
	var x;
	var y;
	var v;

	opts = {
		'dtype': 'float64'
	};

	alt = scalar2ndarray( resolveEnum( 'two-sided' ), {
		'dtype': 'int8'
	});
	alpha = scalar2ndarray( 0.1, opts );
	sigmax = scalar2ndarray( 1.0, opts );
	sigmay = scalar2ndarray( 1.0, opts );

	obuf = new ResultsArray( 1 );
	out = new ndarray( Float64Results, obuf, [], [ 0 ], 0, 'row-major' );

	// Generate large enough arrays to effectively guarantee results...
	xbuf = zeros( 10000, opts.dtype );
	ybuf = zeros( 10000, opts.dtype );

	normal( xbuf.length, [ 0.0 ], 0, 0, [ 1.0 ], 0, 0, xbuf, 1, 0, RANDOM_OPTS );
	x = vector( xbuf, xbuf.length, 1, 0 );

	normal( ybuf.length, [ 0.0 ], 0, 0, [ 1.0 ], 0, 0, ybuf, 1, 0, RANDOM_OPTS );
	y = vector( ybuf, ybuf.length, 1, 0 );

	diff = scalar2ndarray( 0.0, opts );
	v = dztest2( [ x, y, out, alt, alpha, diff, sigmax, sigmay ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( out.get().rejected, false, 'returns expected value' );

	diff = scalar2ndarray( 10.0, opts );
	v = dztest2( [ x, y, out, alt, alpha, diff, sigmax, sigmay ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( out.get().rejected, true, 'returns expected value' );

	normal( xbuf.length, [ 4.0 ], 0, 0, [ 1.0 ], 0, 0, xbuf, 1, 0, RANDOM_OPTS );
	normal( ybuf.length, [ 2.0 ], 0, 0, [ 1.0 ], 0, 0, ybuf, 1, 0, RANDOM_OPTS );

	diff = scalar2ndarray( 1.0, opts );
	v = dztest2( [ x, y, out, alt, alpha, diff, sigmax, sigmay ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( out.get().rejected, true, 'returns expected value' );

	t.end();
});

tape( 'the function performs a Z-test over two one-dimensional ndarrays (less)', function test( t ) {
	var sigmax;
	var sigmay;
	var alpha;
	var diff;
	var opts;
	var xbuf;
	var ybuf;
	var obuf;
	var alt;
	var out;
	var x;
	var y;
	var v;

	opts = {
		'dtype': 'float64'
	};

	alt = scalar2ndarray( resolveEnum( 'less' ), {
		'dtype': 'int8'
	});
	alpha = scalar2ndarray( 0.1, opts );
	sigmax = scalar2ndarray( 1.0, opts );
	sigmay = scalar2ndarray( 1.0, opts );

	obuf = new ResultsArray( 1 );
	out = new ndarray( Float64Results, obuf, [], [ 0 ], 0, 'row-major' );

	// Generate large enough arrays to effectively guarantee results...
	xbuf = zeros( 10000, opts.dtype );
	ybuf = zeros( 10000, opts.dtype );

	normal( xbuf.length, [ 2.0 ], 0, 0, [ 1.0 ], 0, 0, xbuf, 1, 0, RANDOM_OPTS );
	x = vector( xbuf, xbuf.length, 1, 0 );

	normal( ybuf.length, [ 0.0 ], 0, 0, [ 1.0 ], 0, 0, ybuf, 1, 0, RANDOM_OPTS );
	y = vector( ybuf, ybuf.length, 1, 0 );

	diff = scalar2ndarray( 0.0, opts );
	v = dztest2( [ x, y, out, alt, alpha, diff, sigmax, sigmay ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( out.get().rejected, false, 'returns expected value' );

	normal( xbuf.length, [ 0.0 ], 0, 0, [ 1.0 ], 0, 0, xbuf, 1, 0, RANDOM_OPTS );
	normal( ybuf.length, [ 0.0 ], 0, 0, [ 1.0 ], 0, 0, ybuf, 1, 0, RANDOM_OPTS );

	diff = scalar2ndarray( 1.0, opts );
	v = dztest2( [ x, y, out, alt, alpha, diff, sigmax, sigmay ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( out.get().rejected, true, 'returns expected value' );

	t.end();
});

tape( 'the function performs a Z-test over two one-dimensional ndarrays (greater)', function test( t ) {
	var sigmax;
	var sigmay;
	var alpha;
	var diff;
	var opts;
	var xbuf;
	var ybuf;
	var obuf;
	var alt;
	var out;
	var x;
	var y;
	var v;

	opts = {
		'dtype': 'float64'
	};

	alt = scalar2ndarray( resolveEnum( 'greater' ), {
		'dtype': 'int8'
	});
	alpha = scalar2ndarray( 0.1, opts );
	sigmax = scalar2ndarray( 1.0, opts );
	sigmay = scalar2ndarray( 1.0, opts );

	obuf = new ResultsArray( 1 );
	out = new ndarray( Float64Results, obuf, [], [ 0 ], 0, 'row-major' );

	// Generate large enough arrays to effectively guarantee results...
	xbuf = zeros( 10000, opts.dtype );
	ybuf = zeros( 10000, opts.dtype );

	normal( xbuf.length, [ 0.0 ], 0, 0, [ 1.0 ], 0, 0, xbuf, 1, 0, RANDOM_OPTS );
	x = vector( xbuf, xbuf.length, 1, 0 );

	normal( ybuf.length, [ 2.0 ], 0, 0, [ 1.0 ], 0, 0, ybuf, 1, 0, RANDOM_OPTS );
	y = vector( ybuf, ybuf.length, 1, 0 );

	diff = scalar2ndarray( 0.0, opts );
	v = dztest2( [ x, y, out, alt, alpha, diff, sigmax, sigmay ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( out.get().rejected, false, 'returns expected value' );

	normal( xbuf.length, [ 0.0 ], 0, 0, [ 1.0 ], 0, 0, xbuf, 1, 0, RANDOM_OPTS );
	normal( ybuf.length, [ 0.0 ], 0, 0, [ 1.0 ], 0, 0, ybuf, 1, 0, RANDOM_OPTS );

	diff = scalar2ndarray( -1.0, opts );
	v = dztest2( [ x, y, out, alt, alpha, diff, sigmax, sigmay ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( out.get().rejected, true, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-unit strides', function test( t ) {
	var sigmax;
	var sigmay;
	var alpha;
	var diff;
	var opts;
	var xbuf;
	var ybuf;
	var obuf;
	var alt;
	var out;
	var x;
	var y;
	var v;

	opts = {
		'dtype': 'float64'
	};

	alt = scalar2ndarray( resolveEnum( 'two-sided' ), {
		'dtype': 'int8'
	});
	alpha = scalar2ndarray( 0.1, opts );
	sigmax = scalar2ndarray( 1.0, opts );
	sigmay = scalar2ndarray( 1.0, opts );

	obuf = new ResultsArray( 1 );
	out = new ndarray( Float64Results, obuf, [], [ 0 ], 0, 'row-major' );

	// Generate large enough arrays to effectively guarantee results...
	xbuf = zeros( 10000, opts.dtype );
	ybuf = zeros( 10000, opts.dtype );

	normal( 5000, [ 0.0 ], 0, 0, [ 1.0 ], 0, 0, xbuf, 2, 0, RANDOM_OPTS );
	x = vector( xbuf, 5000, 2, 0 );

	normal( 5000, [ 0.0 ], 0, 0, [ 1.0 ], 0, 0, ybuf, 2, 0, RANDOM_OPTS );
	y = vector( ybuf, 5000, 2, 0 );

	diff = scalar2ndarray( 0.0, opts );
	v = dztest2( [ x, y, out, alt, alpha, diff, sigmax, sigmay ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( out.get().rejected, false, 'returns expected value' );

	normal( 5000, [ 4.0 ], 0, 0, [ 1.0 ], 0, 0, xbuf, 2, 0, RANDOM_OPTS );
	normal( 5000, [ 2.0 ], 0, 0, [ 1.0 ], 0, 0, ybuf, 2, 0, RANDOM_OPTS );

	diff = scalar2ndarray( 10.0, opts );
	v = dztest2( [ x, y, out, alt, alpha, diff, sigmax, sigmay ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( out.get().rejected, true, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-zero offsets', function test( t ) {
	var sigmax;
	var sigmay;
	var alpha;
	var diff;
	var opts;
	var xbuf;
	var ybuf;
	var obuf;
	var alt;
	var out;
	var x;
	var y;
	var v;

	opts = {
		'dtype': 'float64'
	};

	alt = scalar2ndarray( resolveEnum( 'two-sided' ), {
		'dtype': 'int8'
	});
	alpha = scalar2ndarray( 0.1, opts );
	sigmax = scalar2ndarray( 1.0, opts );
	sigmay = scalar2ndarray( 1.0, opts );

	obuf = new ResultsArray( 1 );
	out = new ndarray( Float64Results, obuf, [], [ 0 ], 0, 'row-major' );

	// Generate large enough arrays to effectively guarantee results...
	xbuf = zeros( 10000, opts.dtype );
	ybuf = zeros( 10000, opts.dtype );

	normal( 5000, [ 0.0 ], 0, 0, [ 1.0 ], 0, 0, xbuf, 1, 5000, RANDOM_OPTS );
	x = vector( xbuf, 5000, 1, 5000 );

	normal( 5000, [ 0.0 ], 0, 0, [ 1.0 ], 0, 0, ybuf, 1, 5000, RANDOM_OPTS );
	y = vector( ybuf, 5000, 1, 5000 );

	diff = scalar2ndarray( 0.0, opts );
	v = dztest2( [ x, y, out, alt, alpha, diff, sigmax, sigmay ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( out.get().rejected, false, 'returns expected value' );

	normal( 5000, [ 100.0 ], 0, 0, [ 1.0 ], 0, 0, xbuf, 1, 5000, RANDOM_OPTS );
	normal( 5000, [ 100.0 ], 0, 0, [ 1.0 ], 0, 0, ybuf, 1, 5000, RANDOM_OPTS );

	diff = scalar2ndarray( 1.0, opts );
	v = dztest2( [ x, y, out, alt, alpha, diff, sigmax, sigmay ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( out.get().rejected, true, 'returns expected value' );

	t.end();
});
