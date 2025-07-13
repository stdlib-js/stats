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
var Float32Results = require( './../../../../base/ztest/one-sample/results/float32' );
var resolveEnum = require( './../../../../base/ztest/alternative-resolve-enum' );
var structFactory = require( '@stdlib/array/struct-factory' );
var normal = require( '@stdlib/random/strided/normal' ).ndarray;
var zeros = require( '@stdlib/array/zeros' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var sztest = require( './../lib' );


// VARIABLES //

var ResultsArray = structFactory( Float32Results );
var RANDOM_OPTS = {
	'seed': 12345
};


// FUNCTIONS //

/**
* Returns a one-dimensional ndarray.
*
* @private
* @param {Float32Array} buffer - underlying data buffer
* @param {NonNegativeInteger} length - number of indexed elements
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - index offset
* @returns {ndarray} one-dimensional ndarray
*/
function vector( buffer, length, stride, offset ) {
	return new ndarray( 'float32', buffer, [ length ], [ stride ], offset, 'row-major' );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sztest, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( sztest.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function performs a Z-test over a one-dimensional ndarray (two-sided)', function test( t ) {
	var alpha;
	var sigma;
	var opts;
	var xbuf;
	var obuf;
	var alt;
	var out;
	var mu;
	var x;
	var v;

	alt = scalar2ndarray( resolveEnum( 'two-sided' ), {
		'dtype': 'int8'
	});

	opts = {
		'dtype': 'float32'
	};
	alpha = scalar2ndarray( 0.05, opts );
	mu = scalar2ndarray( 0.0, opts );
	sigma = scalar2ndarray( 1.0, opts );

	// Generate a large enough array to effectively guarantee results...
	xbuf = zeros( 10000, opts.dtype );
	normal( xbuf.length, [ 0.0 ], 0, 0, [ 1.0 ], 0, 0, xbuf, 1, 0, RANDOM_OPTS );
	x = vector( xbuf, xbuf.length, 1, 0 );

	obuf = new ResultsArray( 1 );
	out = new ndarray( Float32Results, obuf, [], [ 0 ], 0, 'row-major' );

	v = sztest( [ x, out, alt, alpha, mu, sigma ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( out.get().rejected, false, 'returns expected value' );

	normal( xbuf.length, [ 1000.0 ], 0, 0, [ 1.0 ], 0, 0, xbuf, 1, 0, RANDOM_OPTS );

	v = sztest( [ x, out, alt, alpha, mu, sigma ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( out.get().rejected, true, 'returns expected value' );

	normal( xbuf.length, [ -1000.0 ], 0, 0, [ 1.0 ], 0, 0, xbuf, 1, 0, RANDOM_OPTS );

	v = sztest( [ x, out, alt, alpha, mu, sigma ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( out.get().rejected, true, 'returns expected value' );

	t.end();
});

tape( 'the function performs a Z-test over a one-dimensional ndarray (less)', function test( t ) {
	var alpha;
	var sigma;
	var opts;
	var xbuf;
	var obuf;
	var alt;
	var out;
	var mu;
	var x;
	var v;

	alt = scalar2ndarray( resolveEnum( 'less' ), {
		'dtype': 'int8'
	});

	opts = {
		'dtype': 'float32'
	};
	alpha = scalar2ndarray( 0.05, opts );
	mu = scalar2ndarray( 0.0, opts );
	sigma = scalar2ndarray( 1.0, opts );

	// Generate a large enough array to effectively guarantee results...
	xbuf = zeros( 10000, opts.dtype );
	normal( xbuf.length, [ -1000.0 ], 0, 0, [ 1.0 ], 0, 0, xbuf, 1, 0, RANDOM_OPTS );
	x = vector( xbuf, xbuf.length, 1, 0 );

	obuf = new ResultsArray( 1 );
	out = new ndarray( Float32Results, obuf, [], [ 0 ], 0, 'row-major' );

	v = sztest( [ x, out, alt, alpha, mu, sigma ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( out.get().rejected, true, 'returns expected value' );

	normal( xbuf.length, [ 1000.0 ], 0, 0, [ 1.0 ], 0, 0, xbuf, 1, 0, RANDOM_OPTS );

	v = sztest( [ x, out, alt, alpha, mu, sigma ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( out.get().rejected, false, 'returns expected value' );

	t.end();
});

tape( 'the function performs a Z-test over a one-dimensional ndarray (greater)', function test( t ) {
	var alpha;
	var sigma;
	var opts;
	var xbuf;
	var obuf;
	var alt;
	var out;
	var mu;
	var x;
	var v;

	alt = scalar2ndarray( resolveEnum( 'greater' ), {
		'dtype': 'int8'
	});

	opts = {
		'dtype': 'float32'
	};
	alpha = scalar2ndarray( 0.05, opts );
	mu = scalar2ndarray( 0.0, opts );
	sigma = scalar2ndarray( 1.0, opts );

	// Generate a large enough array to effectively guarantee results...
	xbuf = zeros( 10000, opts.dtype );
	normal( xbuf.length, [ -1000.0 ], 0, 0, [ 1.0 ], 0, 0, xbuf, 1, 0, RANDOM_OPTS );
	x = vector( xbuf, xbuf.length, 1, 0 );

	obuf = new ResultsArray( 1 );
	out = new ndarray( Float32Results, obuf, [], [ 0 ], 0, 'row-major' );

	v = sztest( [ x, out, alt, alpha, mu, sigma ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( out.get().rejected, false, 'returns expected value' );

	normal( xbuf.length, [ 1000.0 ], 0, 0, [ 1.0 ], 0, 0, xbuf, 1, 0, RANDOM_OPTS );

	v = sztest( [ x, out, alt, alpha, mu, sigma ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( out.get().rejected, true, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-unit strides', function test( t ) {
	var alpha;
	var sigma;
	var opts;
	var xbuf;
	var obuf;
	var alt;
	var out;
	var mu;
	var x;
	var v;

	alt = scalar2ndarray( resolveEnum( 'two-sided' ), {
		'dtype': 'int8'
	});

	opts = {
		'dtype': 'float32'
	};
	alpha = scalar2ndarray( 0.05, opts );
	mu = scalar2ndarray( 0.0, opts );
	sigma = scalar2ndarray( 1.0, opts );

	// Generate a large enough array to effectively guarantee results...
	xbuf = zeros( 10000, opts.dtype );
	normal( 5000, [ 0.0 ], 0, 0, [ 1.0 ], 0, 0, xbuf, 2, 0, RANDOM_OPTS );
	x = vector( xbuf, 5000, 2, 0 );

	obuf = new ResultsArray( 1 );
	out = new ndarray( Float32Results, obuf, [], [ 0 ], 0, 'row-major' );

	v = sztest( [ x, out, alt, alpha, mu, sigma ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( out.get().rejected, false, 'returns expected value' );

	normal( 5000, [ 1000.0 ], 0, 0, [ 1.0 ], 0, 0, xbuf, 2, 0, RANDOM_OPTS );

	v = sztest( [ x, out, alt, alpha, mu, sigma ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( out.get().rejected, true, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-zero offsets', function test( t ) {
	var alpha;
	var sigma;
	var opts;
	var xbuf;
	var obuf;
	var alt;
	var out;
	var mu;
	var x;
	var v;

	alt = scalar2ndarray( resolveEnum( 'two-sided' ), {
		'dtype': 'int8'
	});

	opts = {
		'dtype': 'float32'
	};
	alpha = scalar2ndarray( 0.05, opts );
	mu = scalar2ndarray( 0.0, opts );
	sigma = scalar2ndarray( 1.0, opts );

	// Generate a large enough array to effectively guarantee results...
	xbuf = zeros( 10000, opts.dtype );
	normal( 5000, [ 0.0 ], 0, 0, [ 1.0 ], 0, 0, xbuf, 1, 5000, RANDOM_OPTS );
	x = vector( xbuf, 5000, 1, 5000 );

	obuf = new ResultsArray( 1 );
	out = new ndarray( Float32Results, obuf, [], [ 0 ], 0, 'row-major' );

	v = sztest( [ x, out, alt, alpha, mu, sigma ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( out.get().rejected, false, 'returns expected value' );

	normal( 5000, [ 1000.0 ], 0, 0, [ 1.0 ], 0, 0, xbuf, 1, 5000, RANDOM_OPTS );

	v = sztest( [ x, out, alt, alpha, mu, sigma ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( out.get().rejected, true, 'returns expected value' );

	t.end();
});
