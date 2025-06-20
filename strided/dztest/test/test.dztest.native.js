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
var Float64Results = require( './../../../base/ztest/one-sample/results/float64' );
var isfinite = require( '@stdlib/math/base/assert/is-finite' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var dfill = require( '@stdlib/blas/ext/base/dfill' ).ndarray;
var normalFactory = require( '@stdlib/random/array/normal' ).factory;
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var dztest = tryRequire( resolve( __dirname, './../lib/dztest.native.js' ) );
var opts = {
	'skip': ( dztest instanceof Error )
};
var normal = normalFactory({
	'seed': 12345
});


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dztest, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function performs a one-sample Z-test over a strided array (alternative=two-sided)', opts, function test( t ) {
	var results;
	var out;
	var x;

	results = new Float64Results();

	// Generate an array with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( 10000, 0.0, 1.0, {
		'dtype': 'float64'
	});

	out = dztest( x.length, 'two-sided', 0.1, 0.0, 1.0, x, 1, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, false, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnan( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnan( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isfinite( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isfinite( out.ci[ 1 ] ), true, 'returns expected value' );

	out = dztest( x.length, 'two-sided', 0.1, 100.0, 1.0, x, 1, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, true, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnan( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnan( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isfinite( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isfinite( out.ci[ 1 ] ), true, 'returns expected value' );

	// Generate an array with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( 10000, 100.0, 1.0, {
		'dtype': 'float64'
	});

	out = dztest( x.length, 'two-sided', 0.1, 0.0, 1.0, x, 1, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, true, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnan( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnan( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isfinite( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isfinite( out.ci[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function performs a one-sample Z-test over a strided array (alternative=greater)', opts, function test( t ) {
	var results;
	var out;
	var x;

	results = new Float64Results();

	// Generate an array with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( 10000, 0.0, 1.0, {
		'dtype': 'float64'
	});

	out = dztest( x.length, 'greater', 0.1, 0.0, 1.0, x, 1, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, false, 'returns expected value' );
	t.strictEqual( out.alternative, 'greater', 'returns expected value' );
	t.strictEqual( isnan( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnan( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isfinite( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( out.ci[ 1 ], PINF, 'returns expected value' );

	// Generate an array with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( 10000, 100.0, 1.0, {
		'dtype': 'float64'
	});

	out = dztest( x.length, 'greater', 0.1, 0.0, 1.0, x, 1, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, true, 'returns expected value' );
	t.strictEqual( out.alternative, 'greater', 'returns expected value' );
	t.strictEqual( isnan( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnan( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isfinite( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( out.ci[ 1 ], PINF, 'returns expected value' );

	t.end();
});

tape( 'the function performs a one-sample Z-test over a strided array (alternative=less)', opts, function test( t ) {
	var results;
	var out;
	var x;

	results = new Float64Results();

	// Generate an array with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( 10000, 0.0, 1.0, {
		'dtype': 'float64'
	});

	out = dztest( x.length, 'less', 0.1, 0.0, 1.0, x, 1, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, false, 'returns expected value' );
	t.strictEqual( out.alternative, 'less', 'returns expected value' );
	t.strictEqual( isnan( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnan( out.pValue ), false, 'returns expected value' );
	t.strictEqual( out.ci[ 0 ], NINF, 'returns expected value' );
	t.strictEqual( isfinite( out.ci[ 1 ] ), true, 'returns expected value' );

	// Generate an array with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( 10000, -100.0, 1.0, {
		'dtype': 'float64'
	});

	out = dztest( x.length, 'less', 0.1, 0.0, 1.0, x, 1, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, true, 'returns expected value' );
	t.strictEqual( out.alternative, 'less', 'returns expected value' );
	t.strictEqual( isnan( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnan( out.pValue ), false, 'returns expected value' );
	t.strictEqual( out.ci[ 0 ], NINF, 'returns expected value' );
	t.strictEqual( isfinite( out.ci[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `NaN` results', opts, function test( t ) {
	var results;
	var out;
	var x;

	results = new Float64Results();
	x = normal( 10, 0.0, 1.0, {
		'dtype': 'float64'
	});

	out = dztest( 0, 'two-sided', 0.1, 0.0, 1.0, x, 1, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, false, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnan( out.statistic ), true, 'returns expected value' );
	t.strictEqual( isnan( out.pValue ), true, 'returns expected value' );

	out = dztest( -1, 'two-sided', 0.1, 0.0, 1.0, x, 1, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, false, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnan( out.statistic ), true, 'returns expected value' );
	t.strictEqual( isnan( out.pValue ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports a stride parameter', opts, function test( t ) {
	var results;
	var out;
	var x;
	var N;

	N = 10000;
	results = new Float64Results();

	// Generate an array with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( N*2, 0.0, 1.0, {
		'dtype': 'float64'
	});
	dfill( N, NaN, x, 2, 1 );

	out = dztest( N, 'two-sided', 0.1, 0.0, 1.0, x, 2, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, false, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnan( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnan( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isfinite( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isfinite( out.ci[ 1 ] ), true, 'returns expected value' );

	// Generate an array with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( N*2, 100.0, 1.0, {
		'dtype': 'float64'
	});
	dfill( N, NaN, x, 2, 1 );

	out = dztest( N, 'two-sided', 0.1, 0.0, 1.0, x, 2, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, true, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnan( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnan( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isfinite( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isfinite( out.ci[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative stride parameter', opts, function test( t ) {
	var results;
	var out;
	var x;
	var N;

	N = 10000;
	results = new Float64Results();

	// Generate an array with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( N*2, 0.0, 1.0, {
		'dtype': 'float64'
	});
	dfill( N, NaN, x, 2, 1 );

	out = dztest( N, 'two-sided', 0.1, 0.0, 1.0, x, -2, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, false, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnan( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnan( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isfinite( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isfinite( out.ci[ 1 ] ), true, 'returns expected value' );

	// Generate an array with a sufficiently large sample size to effectively guarantee expected results:
	x = normal( N*2, 100.0, 1.0, {
		'dtype': 'float64'
	});
	dfill( N, NaN, x, 2, 1 );

	out = dztest( N, 'two-sided', 0.1, 0.0, 1.0, x, -2, results );
	t.strictEqual( out, results, 'returns expected value' );
	t.strictEqual( out.rejected, true, 'returns expected value' );
	t.strictEqual( out.alternative, 'two-sided', 'returns expected value' );
	t.strictEqual( isnan( out.statistic ), false, 'returns expected value' );
	t.strictEqual( isnan( out.pValue ), false, 'returns expected value' );
	t.strictEqual( isfinite( out.ci[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isfinite( out.ci[ 1 ] ), true, 'returns expected value' );

	t.end();
});
