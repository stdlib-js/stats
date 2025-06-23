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
var Float32Results = require( './../../../base/ztest/one-sample/results/float32' );
var isFinitef = require( '@stdlib/math/base/assert/is-finitef' );
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var sfill = require( '@stdlib/blas/ext/base/sfill' ).ndarray;
var normalFactory = require( '@stdlib/random/array/normal' ).factory;
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var sztest = require( './../lib/sztest.js' );


// VARIABLES //

var normal = normalFactory({
	'seed': 12345
});


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sztest, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function performs a one-sample Z-test over a strided array (alternative=two-sided)', function test( t ) {
	var results;
	var out;
	var x;

	results = new Float32Results();

	// Generate an array with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( 10000, 0.0, 1.0, {
		'dtype': 'float32'
	});

	out = sztest( x.length, 'two-sided', 0.1, 0.0, 1.0, x, 1, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, false, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnanf( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnanf( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 1 ] ), true, 'returns expected value' );

	out = sztest( x.length, 'two-sided', 0.1, 100.0, 1.0, x, 1, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, true, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnanf( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnanf( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 1 ] ), true, 'returns expected value' );

	// Generate an array with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( 10000, 100.0, 1.0, {
		'dtype': 'float32'
	});

	out = sztest( x.length, 'two-sided', 0.1, 0.0, 1.0, x, 1, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, true, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnanf( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnanf( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function performs a one-sample Z-test over a strided array (alternative=greater)', function test( t ) {
	var results;
	var out;
	var x;

	results = new Float32Results();

	// Generate an array with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( 10000, 0.0, 1.0, {
		'dtype': 'float32'
	});

	out = sztest( x.length, 'greater', 0.1, 0.0, 1.0, x, 1, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, false, 'returns expected value' );
	t.strictEqual( out.alternative, 'greater', 'returns expected value' );
	t.strictEqual( isnanf( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnanf( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( out.ci[ 1 ], PINF, 'returns expected value' );

	// Generate an array with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( 10000, 100.0, 1.0, {
		'dtype': 'float32'
	});

	out = sztest( x.length, 'greater', 0.1, 0.0, 1.0, x, 1, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, true, 'returns expected value' );
	t.strictEqual( out.alternative, 'greater', 'returns expected value' );
	t.strictEqual( isnanf( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnanf( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( out.ci[ 1 ], PINF, 'returns expected value' );

	t.end();
});

tape( 'the function performs a one-sample Z-test over a strided array (alternative=less)', function test( t ) {
	var results;
	var out;
	var x;

	results = new Float32Results();

	// Generate an array with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( 10000, 0.0, 1.0, {
		'dtype': 'float32'
	});

	out = sztest( x.length, 'less', 0.1, 0.0, 1.0, x, 1, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, false, 'returns expected value' );
	t.strictEqual( out.alternative, 'less', 'returns expected value' );
	t.strictEqual( isnanf( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnanf( out.pValue ), false, 'returns expected value' );
	t.strictEqual( out.ci[ 0 ], NINF, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 1 ] ), true, 'returns expected value' );

	// Generate an array with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( 10000, -100.0, 1.0, {
		'dtype': 'float32'
	});

	out = sztest( x.length, 'less', 0.1, 0.0, 1.0, x, 1, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, true, 'returns expected value' );
	t.strictEqual( out.alternative, 'less', 'returns expected value' );
	t.strictEqual( isnanf( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnanf( out.pValue ), false, 'returns expected value' );
	t.strictEqual( out.ci[ 0 ], NINF, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `NaN` results', function test( t ) {
	var results;
	var out;
	var x;

	results = new Float32Results();
	x = normal( 10, 0.0, 1.0, {
		'dtype': 'float32'
	});

	out = sztest( 0, 'two-sided', 0.1, 0.0, 1.0, x, 1, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, false, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnanf( out.statistic ), true, 'returns expected value' );
	t.strictEqual( isnanf( out.pValue ), true, 'returns expected value' );

	out = sztest( -1, 'two-sided', 0.1, 0.0, 1.0, x, 1, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, false, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnanf( out.statistic ), true, 'returns expected value' );
	t.strictEqual( isnanf( out.pValue ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports a stride parameter', function test( t ) {
	var results;
	var out;
	var x;
	var N;

	N = 10000;
	results = new Float32Results();

	// Generate an array with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( N*2, 0.0, 1.0, {
		'dtype': 'float32'
	});
	sfill( N, NaN, x, 2, 1 );

	out = sztest( N, 'two-sided', 0.1, 0.0, 1.0, x, 2, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, false, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnanf( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnanf( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 1 ] ), true, 'returns expected value' );

	// Generate an array with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( N*2, 100.0, 1.0, {
		'dtype': 'float32'
	});
	sfill( N, NaN, x, 2, 1 );

	out = sztest( N, 'two-sided', 0.1, 0.0, 1.0, x, 2, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, true, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnanf( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnanf( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative stride parameter', function test( t ) {
	var results;
	var out;
	var x;
	var N;

	N = 10000;
	results = new Float32Results();

	// Generate an array with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( N*2, 0.0, 1.0, {
		'dtype': 'float32'
	});
	sfill( N, NaN, x, 2, 1 );

	out = sztest( N, 'two-sided', 0.1, 0.0, 1.0, x, -2, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, false, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnanf( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnanf( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 1 ] ), true, 'returns expected value' );

	// Generate an array with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( N*2, 100.0, 1.0, {
		'dtype': 'float32'
	});
	sfill( N, NaN, x, 2, 1 );

	out = sztest( N, 'two-sided', 0.1, 0.0, 1.0, x, -2, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, true, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnanf( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnanf( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 1 ] ), true, 'returns expected value' );

	t.end();
});
