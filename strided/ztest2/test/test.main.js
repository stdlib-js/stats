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
var Float64Results = require( './../../../base/ztest/two-sample/results/float64' );
var isfinite = require( '@stdlib/math/base/assert/is-finite' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var gfill = require( '@stdlib/blas/ext/base/gfill' ).ndarray;
var normalFactory = require( '@stdlib/random/array/normal' ).factory;
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var ztest2 = require( './../lib' );


// VARIABLES //

var normal = normalFactory({
	'seed': 12345
});


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ztest2, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function performs a two-sample Z-test (alternative=two-sided)', function test( t ) {
	var results;
	var out;
	var x;
	var y;

	results = new Float64Results();

	// Generate arrays with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( 10000, 0.0, 1.0, {
		'dtype': 'generic'
	});
	y = normal( 10000, 0.0, 1.0, {
		'dtype': 'generic'
	});

	out = ztest2( x.length, y.length, 'two-sided', 0.1, 0.0, 1.0, x, 1, 1.0, y, 1, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, false, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnan( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnan( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isfinite( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isfinite( out.ci[ 1 ] ), true, 'returns expected value' );

	out = ztest2( x.length, y.length, 'two-sided', 0.1, 10.0, 1.0, x, 1, 1.0, y, 1, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, true, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnan( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnan( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isfinite( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isfinite( out.ci[ 1 ] ), true, 'returns expected value' );

	// Generate arrays with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( 10000, 4.0, 1.0, {
		'dtype': 'generic'
	});
	y = normal( 10000, 2.0, 1.0, {
		'dtype': 'generic'
	});

	out = ztest2( x.length, y.length, 'two-sided', 0.1, 2.0, 1.0, x, 1, 1.0, y, 1, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, true, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnan( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnan( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isfinite( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isfinite( out.ci[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function performs a two-sample Z-test (alternative=greater)', function test( t ) {
	var results;
	var out;
	var x;
	var y;

	results = new Float64Results();

	// Generate arrays with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( 10000, 0.0, 1.0, {
		'dtype': 'generic'
	});
	y = normal( 10000, 2.0, 1.0, {
		'dtype': 'generic'
	});

	out = ztest2( x.length, y.length, 'greater', 0.1, 0.0, 1.0, x, 1, 1.0, y, 1, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, false, 'returns expected value' );
	t.strictEqual( out.alternative, 'greater', 'returns expected value' );
	t.strictEqual( isnan( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnan( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isfinite( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( out.ci[ 1 ], PINF, 'returns expected value' );

	// Generate arrays with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( 10000, 0.0, 1.0, {
		'dtype': 'generic'
	});
	y = normal( 10000, 0.0, 1.0, {
		'dtype': 'generic'
	});

	out = ztest2( x.length, y.length, 'greater', 0.1, -1.0, 1.0, x, 1, 1.0, y, 1, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, true, 'returns expected value' );
	t.strictEqual( out.alternative, 'greater', 'returns expected value' );
	t.strictEqual( isnan( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnan( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isfinite( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( out.ci[ 1 ], PINF, 'returns expected value' );

	t.end();
});

tape( 'the function performs a two-sample Z-test (alternative=less)', function test( t ) {
	var results;
	var out;
	var x;
	var y;

	results = new Float64Results();

	// Generate arrays with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( 10000, 2.0, 1.0, {
		'dtype': 'generic'
	});
	y = normal( 10000, 0.0, 1.0, {
		'dtype': 'generic'
	});

	out = ztest2( x.length, y.length, 'less', 0.1, 0.0, 1.0, x, 1, 1.0, y, 1, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, false, 'returns expected value' );
	t.strictEqual( out.alternative, 'less', 'returns expected value' );
	t.strictEqual( isnan( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnan( out.pValue ), false, 'returns expected value' );
	t.strictEqual( out.ci[ 0 ], NINF, 'returns expected value' );
	t.strictEqual( isfinite( out.ci[ 1 ] ), true, 'returns expected value' );

	// Generate arrays with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( 10000, 0.0, 1.0, {
		'dtype': 'generic'
	});
	y = normal( 10000, 0.0, 1.0, {
		'dtype': 'generic'
	});

	out = ztest2( x.length, y.length, 'less', 0.1, 1.0, 1.0, x, 1, 1.0, y, 1, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, true, 'returns expected value' );
	t.strictEqual( out.alternative, 'less', 'returns expected value' );
	t.strictEqual( isnan( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnan( out.pValue ), false, 'returns expected value' );
	t.strictEqual( out.ci[ 0 ], NINF, 'returns expected value' );
	t.strictEqual( isfinite( out.ci[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `NX` or `NY` parameter less than or equal to `0`, the function returns `NaN` results', function test( t ) {
	var results;
	var out;
	var x;
	var y;

	results = new Float64Results();
	x = normal( 10, 0.0, 1.0, {
		'dtype': 'generic'
	});
	y = normal( 10, 0.0, 1.0, {
		'dtype': 'generic'
	});

	out = ztest2( 0, y.length, 'two-sided', 0.1, 0.0, 1.0, x, 1, 1.0, y, 1, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, false, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnan( out.statistic ), true, 'returns expected value' );
	t.strictEqual( isnan( out.pValue ), true, 'returns expected value' );

	out = ztest2( -1, y.length, 'two-sided', 0.1, 0.0, 1.0, x, 1, 1.0, y, 1, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, false, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnan( out.statistic ), true, 'returns expected value' );
	t.strictEqual( isnan( out.pValue ), true, 'returns expected value' );

	out = ztest2( x.length, 0, 'two-sided', 0.1, 0.0, 1.0, x, 1, 1.0, y, 1, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, false, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnan( out.statistic ), true, 'returns expected value' );
	t.strictEqual( isnan( out.pValue ), true, 'returns expected value' );

	out = ztest2( x.length, -1, 'two-sided', 0.1, 0.0, 1.0, x, 1, 1.0, y, 1, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, false, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnan( out.statistic ), true, 'returns expected value' );
	t.strictEqual( isnan( out.pValue ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports a stride parameter', function test( t ) {
	var results;
	var out;
	var x;
	var y;
	var N;

	N = 10000;
	results = new Float64Results();

	// Generate arrays with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( N*2, 0.0, 1.0, {
		'dtype': 'generic'
	});
	y = normal( N*2, 0.0, 1.0, {
		'dtype': 'generic'
	});

	gfill( N, NaN, x, 2, 1 );
	gfill( N, NaN, y, 2, 1 );

	out = ztest2( N, N, 'two-sided', 0.1, 0.0, 1.0, x, 2, 1.0, y, 2, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, false, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnan( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnan( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isfinite( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isfinite( out.ci[ 1 ] ), true, 'returns expected value' );

	// Generate arrays with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( N*2, 4.0, 1.0, {
		'dtype': 'generic'
	});
	y = normal( N*2, 2.0, 1.0, {
		'dtype': 'generic'
	});

	gfill( N, NaN, x, 2, 1 );
	gfill( N, NaN, y, 2, 1 );

	out = ztest2( N, N, 'two-sided', 0.1, 10.0, 1.0, x, 2, 1.0, y, 2, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, true, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnan( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnan( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isfinite( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isfinite( out.ci[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative stride parameter', function test( t ) {
	var results;
	var out;
	var x;
	var y;
	var N;

	N = 10000;
	results = new Float64Results();

	// Generate arrays with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( N*2, 0.0, 1.0, {
		'dtype': 'generic'
	});
	y = normal( N*2, 0.0, 1.0, {
		'dtype': 'generic'
	});

	gfill( N, NaN, x, 2, 1 );
	gfill( N, NaN, y, 2, 1 );

	out = ztest2( N, N, 'two-sided', 0.1, 0.0, 1.0, x, -2, 1.0, y, -2, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, false, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnan( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnan( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isfinite( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isfinite( out.ci[ 1 ] ), true, 'returns expected value' );

	// Generate arrays with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( N*2, 100.0, 1.0, {
		'dtype': 'generic'
	});
	y = normal( N*2, 100.0, 1.0, {
		'dtype': 'generic'
	});

	gfill( N, NaN, x, 2, 1 );
	gfill( N, NaN, y, 2, 1 );

	out = ztest2( N, N, 'two-sided', 0.1, 0.0, 1.0, x, -2, 1.0, y, -2, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, true, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnan( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnan( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isfinite( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isfinite( out.ci[ 1 ] ), true, 'returns expected value' );

	t.end();
});
