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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var Float32Results = require( './../../../base/ztest/two-sample/results/float32' );
var isFinitef = require( '@stdlib/math/base/assert/is-finitef' );
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var sfill = require( '@stdlib/blas/ext/base/sfill' ).ndarray;
var normalFactory = require( '@stdlib/random/array/normal' ).factory;
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var sztest2 = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( sztest2 instanceof Error )
};
var normal = normalFactory({
	'seed': 12345
});


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sztest2, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function performs a two-sample Z-test over strided arrays (alternative=two-sided)', opts, function test( t ) {
	var results;
	var out;
	var x;
	var y;

	results = new Float32Results();

	// Generate arrays with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( 10000, 0.0, 1.0, {
		'dtype': 'float32'
	});
	y = normal( 10000, 0.0, 1.0, {
		'dtype': 'float32'
	});

	out = sztest2( x.length, y.length, 'two-sided', 0.1, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, false, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnanf( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnanf( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 1 ] ), true, 'returns expected value' );

	out = sztest2( x.length, y.length, 'two-sided', 0.1, 10.0, 1.0, x, 1, 0, 1.0, y, 1, 0, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, true, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnanf( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnanf( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 1 ] ), true, 'returns expected value' );

	// Generate arrays with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( 10000, 4.0, 1.0, {
		'dtype': 'float32'
	});
	y = normal( 10000, 2.0, 1.0, {
		'dtype': 'float32'
	});

	out = sztest2( x.length, y.length, 'two-sided', 0.1, 2.0, 1.0, x, 1, 0, 1.0, y, 1, 0, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, true, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnanf( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnanf( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function performs a two-sample Z-test over strided arrays (alternative=greater)', opts, function test( t ) {
	var results;
	var out;
	var x;
	var y;

	results = new Float32Results();

	// Generate arrays with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( 10000, 0.0, 1.0, {
		'dtype': 'float32'
	});
	y = normal( 10000, 2.0, 1.0, {
		'dtype': 'float32'
	});

	out = sztest2( x.length, y.length, 'greater', 0.1, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, false, 'returns expected value' );
	t.strictEqual( out.alternative, 'greater', 'returns expected value' );
	t.strictEqual( isnanf( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnanf( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( out.ci[ 1 ], PINF, 'returns expected value' );

	// Generate arrays with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( 10000, 0.0, 1.0, {
		'dtype': 'float32'
	});
	y = normal( 10000, 0.0, 1.0, {
		'dtype': 'float32'
	});

	out = sztest2( x.length, y.length, 'greater', 0.1, -1.0, 1.0, x, 1, 0, 1.0, y, 1, 0, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, true, 'returns expected value' );
	t.strictEqual( out.alternative, 'greater', 'returns expected value' );
	t.strictEqual( isnanf( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnanf( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( out.ci[ 1 ], PINF, 'returns expected value' );

	t.end();
});

tape( 'the function performs a two-sample Z-test over strided arrays (alternative=less)', opts, function test( t ) {
	var results;
	var out;
	var x;
	var y;

	results = new Float32Results();

	// Generate arrays with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( 10000, 2.0, 1.0, {
		'dtype': 'float32'
	});
	y = normal( 10000, 0.0, 1.0, {
		'dtype': 'float32'
	});

	out = sztest2( x.length, y.length, 'less', 0.1, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, false, 'returns expected value' );
	t.strictEqual( out.alternative, 'less', 'returns expected value' );
	t.strictEqual( isnanf( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnanf( out.pValue ), false, 'returns expected value' );
	t.strictEqual( out.ci[ 0 ], NINF, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 1 ] ), true, 'returns expected value' );

	// Generate arrays with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( 10000, 0.0, 1.0, {
		'dtype': 'float32'
	});
	y = normal( 10000, 0.0, 1.0, {
		'dtype': 'float32'
	});

	out = sztest2( x.length, y.length, 'less', 0.1, 1.0, 1.0, x, 1, 0, 1.0, y, 1, 0, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, true, 'returns expected value' );
	t.strictEqual( out.alternative, 'less', 'returns expected value' );
	t.strictEqual( isnanf( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnanf( out.pValue ), false, 'returns expected value' );
	t.strictEqual( out.ci[ 0 ], NINF, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `NX` or `NY` parameter less than or equal to `0`, the function returns `NaN` results', opts, function test( t ) {
	var results;
	var out;
	var x;
	var y;

	results = new Float32Results();
	x = normal( 10, 0.0, 1.0, {
		'dtype': 'float32'
	});
	y = normal( 10, 0.0, 1.0, {
		'dtype': 'float32'
	});

	out = sztest2( 0, y.length, 'two-sided', 0.1, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, false, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnanf( out.statistic ), true, 'returns expected value' );
	t.strictEqual( isnanf( out.pValue ), true, 'returns expected value' );

	out = sztest2( -1, y.length, 'two-sided', 0.1, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, false, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnanf( out.statistic ), true, 'returns expected value' );
	t.strictEqual( isnanf( out.pValue ), true, 'returns expected value' );

	out = sztest2( x.length, 0, 'two-sided', 0.1, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, false, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnanf( out.statistic ), true, 'returns expected value' );
	t.strictEqual( isnanf( out.pValue ), true, 'returns expected value' );

	out = sztest2( x.length, -1, 'two-sided', 0.1, 0.0, 1.0, x, 1, 0, 1.0, y, 1, 0, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, false, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnanf( out.statistic ), true, 'returns expected value' );
	t.strictEqual( isnanf( out.pValue ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports a stride parameter', opts, function test( t ) {
	var results;
	var out;
	var x;
	var y;
	var N;

	N = 10000;
	results = new Float32Results();

	// Generate arrays with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( N*2, 0.0, 1.0, {
		'dtype': 'float32'
	});
	y = normal( N*2, 0.0, 1.0, {
		'dtype': 'float32'
	});

	sfill( N, NaN, x, 2, 1 );
	sfill( N, NaN, y, 2, 1 );

	out = sztest2( N, N, 'two-sided', 0.1, 0.0, 1.0, x, 2, 0, 1.0, y, 2, 0, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, false, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnanf( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnanf( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 1 ] ), true, 'returns expected value' );

	// Generate arrays with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( N*2, 4.0, 1.0, {
		'dtype': 'float32'
	});
	y = normal( N*2, 2.0, 1.0, {
		'dtype': 'float32'
	});

	sfill( N, NaN, x, 2, 1 );
	sfill( N, NaN, y, 2, 1 );

	out = sztest2( N, N, 'two-sided', 0.1, 10.0, 1.0, x, 2, 0, 1.0, y, 2, 0, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, true, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnanf( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnanf( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative stride parameter', opts, function test( t ) {
	var results;
	var out;
	var x;
	var y;
	var N;

	N = 10000;
	results = new Float32Results();

	// Generate arrays with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( N*2, 0.0, 1.0, {
		'dtype': 'float32'
	});
	y = normal( N*2, 0.0, 1.0, {
		'dtype': 'float32'
	});

	sfill( N, NaN, x, 2, 1 );
	sfill( N, NaN, y, 2, 1 );

	out = sztest2( N, N, 'two-sided', 0.1, 0.0, 1.0, x, -2, (N-1)*2, 1.0, y, -2, (N-1)*2, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, false, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnanf( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnanf( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 1 ] ), true, 'returns expected value' );

	// Generate arrays with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( N*2, 4.0, 1.0, {
		'dtype': 'float32'
	});
	y = normal( N*2, 2.0, 1.0, {
		'dtype': 'float32'
	});

	sfill( N, NaN, x, 2, 1 );
	sfill( N, NaN, y, 2, 1 );

	out = sztest2( N, N, 'two-sided', 0.1, 10.0, 1.0, x, -2, (N-1)*2, 1.0, y, -2, (N-1)*2, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, true, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnanf( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnanf( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports an offset parameter', opts, function test( t ) {
	var results;
	var out;
	var x;
	var y;
	var N;

	N = 10000;
	results = new Float32Results();

	// Generate arrays with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( N*2, 0.0, 1.0, {
		'dtype': 'float32'
	});
	y = normal( N*2, 0.0, 1.0, {
		'dtype': 'float32'
	});

	sfill( N, NaN, x, 2, 0 );
	sfill( N, NaN, y, 2, 0 );

	out = sztest2( N, N, 'two-sided', 0.1, 0.0, 1.0, x, 2, 1, 1.0, y, 2, 1, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, false, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnanf( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnanf( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 1 ] ), true, 'returns expected value' );

	// Generate arrays with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( N*2, 4.0, 1.0, {
		'dtype': 'float32'
	});
	y = normal( N*2, 2.0, 1.0, {
		'dtype': 'float32'
	});

	sfill( N, NaN, x, 2, 0 );
	sfill( N, NaN, y, 2, 0 );

	out = sztest2( N, N, 'two-sided', 0.1, 2.0, 1.0, x, 2, 1, 1.0, y, 2, 1, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, false, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnanf( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnanf( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isFinitef( out.ci[ 1 ] ), true, 'returns expected value' );

	t.end();
});
