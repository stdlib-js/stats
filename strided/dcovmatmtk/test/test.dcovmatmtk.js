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
var Float64Array = require( '@stdlib/array/float64' );
var isAlmostEqualFloat64Array = require( '@stdlib/assert/is-almost-equal-float64array' );
var dcovmatmtk = require( './../lib/dcovmatmtk.js' );


// FIXTURES //

var rm = require( './fixtures/row_major.json' );
var rmc = require( './fixtures/row_major_corrected.json' );
var rmcols = require( './fixtures/row_major_columns.json' );
var rmu = require( './fixtures/row_major_upper.json' );
var rml = require( './fixtures/row_major_lower.json' );
var rmsm = require( './fixtures/row_major_sm.json' );

var cm = require( './fixtures/column_major.json' );
var cmc = require( './fixtures/column_major_corrected.json' );
var cmrows = require( './fixtures/column_major_rows.json' );
var cmu = require( './fixtures/column_major_upper.json' );
var cml = require( './fixtures/column_major_lower.json' );
var cmsm = require( './fixtures/column_major_sm.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dcovmatmtk, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 12', function test( t ) {
	t.strictEqual( dcovmatmtk.length, 12, 'returns expected value' );
	t.end();
});

tape( 'the function throws an error if provided an invalid first argument', function test( t ) {
	var values;
	var data;
	var i;

	data = rm;

	values = [
		'foo',
		'bar',
		'beep',
		'boop'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dcovmatmtk( value, data.orientation, data.uplo, data.M, data.N, data.correction, new Float64Array( data.means ), data.strideM, new Float64Array( data.A ), data.lda, new Float64Array( data.B ), data.ldb );
		};
	}
});

tape( 'the function throws an error if provided an invalid second argument', function test( t ) {
	var values;
	var data;
	var i;

	data = rm;

	values = [
		'foo',
		'bar',
		'beep',
		'boop'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dcovmatmtk( data.order, value, data.uplo, data.M, data.N, data.correction, new Float64Array( data.means ), data.strideM, new Float64Array( data.A ), data.lda, new Float64Array( data.B ), data.ldb );
		};
	}
});

tape( 'the function throws an error if provided an invalid fourth argument', function test( t ) {
	var values;
	var data;
	var i;

	data = rm;

	values = [
		-1,
		-2,
		-3
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dcovmatmtk( data.order, data.orientation, data.uplo, value, data.N, data.correction, new Float64Array( data.means ), data.strideM, new Float64Array( data.A ), data.lda, new Float64Array( data.B ), data.ldb );
		};
	}
});

tape( 'the function throws an error if provided an invalid fifth argument', function test( t ) {
	var values;
	var data;
	var i;

	data = rm;

	values = [
		-1,
		-2,
		-3
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dcovmatmtk( data.order, data.orientation, data.uplo, data.M, value, data.correction, new Float64Array( data.means ), data.strideM, new Float64Array( data.A ), data.lda, new Float64Array( data.B ), data.ldb );
		};
	}
});

tape( 'the function computes a covariance matrix (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var A;
	var B;
	var m;

	data = rm;

	m = new Float64Array( data.means );
	A = new Float64Array( data.A );
	B = new Float64Array( data.B );

	expected = new Float64Array( data.B_out );

	out = dcovmatmtk( data.order, data.orientation, data.uplo, data.M, data.N, data.correction, m, data.strideM, A, data.lda, B, data.ldb );
	t.strictEqual( out, B, 'returns expected value' );
	t.strictEqual( isAlmostEqualFloat64Array( out, expected, 200 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function computes a covariance matrix (corrected, row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var A;
	var B;
	var m;

	data = rmc;

	m = new Float64Array( data.means );
	A = new Float64Array( data.A );
	B = new Float64Array( data.B );

	expected = new Float64Array( data.B_out );

	out = dcovmatmtk( data.order, data.orientation, data.uplo, data.M, data.N, data.correction, m, data.strideM, A, data.lda, B, data.ldb );
	t.strictEqual( out, B, 'returns expected value' );
	t.strictEqual( isAlmostEqualFloat64Array( out, expected, 200 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function computes a covariance matrix (columns, row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var A;
	var B;
	var m;

	data = rmcols;

	m = new Float64Array( data.means );
	A = new Float64Array( data.A );
	B = new Float64Array( data.B );

	expected = new Float64Array( data.B_out );

	out = dcovmatmtk( data.order, data.orientation, data.uplo, data.M, data.N, data.correction, m, data.strideM, A, data.lda, B, data.ldb );
	t.strictEqual( out, B, 'returns expected value' );
	t.strictEqual( isAlmostEqualFloat64Array( out, expected, 200 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function computes a covariance matrix (upper, row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var A;
	var B;
	var m;

	data = rmu;

	m = new Float64Array( data.means );
	A = new Float64Array( data.A );
	B = new Float64Array( data.B );

	expected = new Float64Array( data.B_out );

	out = dcovmatmtk( data.order, data.orientation, data.uplo, data.M, data.N, data.correction, m, data.strideM, A, data.lda, B, data.ldb );
	t.strictEqual( out, B, 'returns expected value' );
	t.strictEqual( isAlmostEqualFloat64Array( out, expected, 200 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function computes a covariance matrix (lower, row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var A;
	var B;
	var m;

	data = rml;

	m = new Float64Array( data.means );
	A = new Float64Array( data.A );
	B = new Float64Array( data.B );

	expected = new Float64Array( data.B_out );

	out = dcovmatmtk( data.order, data.orientation, data.uplo, data.M, data.N, data.correction, m, data.strideM, A, data.lda, B, data.ldb );
	t.strictEqual( out, B, 'returns expected value' );
	t.strictEqual( isAlmostEqualFloat64Array( out, expected, 200 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function computes a covariance matrix (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var A;
	var B;
	var m;

	data = cm;

	m = new Float64Array( data.means );
	A = new Float64Array( data.A );
	B = new Float64Array( data.B );

	expected = new Float64Array( data.B_out );

	out = dcovmatmtk( data.order, data.orientation, data.uplo, data.M, data.N, data.correction, m, data.strideM, A, data.lda, B, data.ldb );
	t.strictEqual( out, B, 'returns expected value' );
	t.strictEqual( isAlmostEqualFloat64Array( out, expected, 200 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function computes a covariance matrix (corrected, column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var A;
	var B;
	var m;

	data = cmc;

	m = new Float64Array( data.means );
	A = new Float64Array( data.A );
	B = new Float64Array( data.B );

	expected = new Float64Array( data.B_out );

	out = dcovmatmtk( data.order, data.orientation, data.uplo, data.M, data.N, data.correction, m, data.strideM, A, data.lda, B, data.ldb );
	t.strictEqual( out, B, 'returns expected value' );
	t.strictEqual( isAlmostEqualFloat64Array( out, expected, 200 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function computes a covariance matrix (rows, column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var A;
	var B;
	var m;

	data = cmrows;

	m = new Float64Array( data.means );
	A = new Float64Array( data.A );
	B = new Float64Array( data.B );

	expected = new Float64Array( data.B_out );

	out = dcovmatmtk( data.order, data.orientation, data.uplo, data.M, data.N, data.correction, m, data.strideM, A, data.lda, B, data.ldb );
	t.strictEqual( out, B, 'returns expected value' );
	t.strictEqual( isAlmostEqualFloat64Array( out, expected, 200 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function computes a covariance matrix (upper, column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var A;
	var B;
	var m;

	data = cmu;

	m = new Float64Array( data.means );
	A = new Float64Array( data.A );
	B = new Float64Array( data.B );

	expected = new Float64Array( data.B_out );

	out = dcovmatmtk( data.order, data.orientation, data.uplo, data.M, data.N, data.correction, m, data.strideM, A, data.lda, B, data.ldb );
	t.strictEqual( out, B, 'returns expected value' );
	t.strictEqual( isAlmostEqualFloat64Array( out, expected, 200 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function computes a covariance matrix (lower, column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var A;
	var B;
	var m;

	data = cml;

	m = new Float64Array( data.means );
	A = new Float64Array( data.A );
	B = new Float64Array( data.B );

	expected = new Float64Array( data.B_out );

	out = dcovmatmtk( data.order, data.orientation, data.uplo, data.M, data.N, data.correction, m, data.strideM, A, data.lda, B, data.ldb );
	t.strictEqual( out, B, 'returns expected value' );
	t.strictEqual( isAlmostEqualFloat64Array( out, expected, 200 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a stride for the vector of known means (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var A;
	var B;
	var m;

	data = rmsm;

	m = new Float64Array( data.means );
	A = new Float64Array( data.A );
	B = new Float64Array( data.B );

	expected = new Float64Array( data.B_out );

	out = dcovmatmtk( data.order, data.orientation, data.uplo, data.M, data.N, data.correction, m, data.strideM, A, data.lda, B, data.ldb );
	t.strictEqual( out, B, 'returns expected value' );
	t.strictEqual( isAlmostEqualFloat64Array( out, expected, 200 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a stride for the vector of known means (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var A;
	var B;
	var m;

	data = cmsm;

	m = new Float64Array( data.means );
	A = new Float64Array( data.A );
	B = new Float64Array( data.B );

	expected = new Float64Array( data.B_out );

	out = dcovmatmtk( data.order, data.orientation, data.uplo, data.M, data.N, data.correction, m, data.strideM, A, data.lda, B, data.ldb );
	t.strictEqual( out, B, 'returns expected value' );
	t.strictEqual( isAlmostEqualFloat64Array( out, expected, 200 ), true, 'returns expected value' );
	t.end();
});
