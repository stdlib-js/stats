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
var tryRequire = require( '@stdlib/utils/try-require' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var abs = require( '@stdlib/math/base/special/abs' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );


// VARIABLES //

var logpmf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( logpmf instanceof Error )
};


// FIXTURES //

var data = require( './fixtures/julia/data.json' );
var i;

for ( i = 0; i < data.expected.length; i++ ) {
	if ( data.expected[ i ] === null ) {
		data.expected[ i ] = NINF;
	}
}


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof logpmf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for input value `x`, the function returns `NaN`', opts, function test( t ) {
	var y = logpmf( NaN, 10, 9, 5 );
	t.equal( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided an integer `x` greater than `min( n, K )`, the function returns `-Infinity` (provided all parameters are valid)', opts, function test( t ) {
	var y = logpmf( 11, 20, 20, 10 );
	t.equal( y, NINF, 'returns expected value' );

	y = logpmf( 100, 20, 20, 10 );
	t.equal( y, NINF, 'returns expected value' );

	t.end();
});

tape( 'if provided an integer for `x` smaller than `max( 0, n + K - N )`, the function returns `-Infinity`', opts, function test( t ) {
	var y = logpmf( -1.0, 40, 20, 10 );
	t.equal( y, NINF, 'returns expected value' );

	y = logpmf( -2.0, 30, 20, 20 );
	t.equal( y, NINF, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` which is not a nonnegative integer, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = logpmf( 2.0, -2, 20, 10 );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = logpmf( 2.0, -1, 20, 10 );
	t.equal( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a `K` which is not a nonnegative integer, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = logpmf( 2.0, 20, -2, 10 );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = logpmf( 2.0, 20, -1, 10 );
	t.equal( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `n` which is not a nonnegative integer, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = logpmf( 2.0, 40, 20, -2 );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = logpmf( 2.0, 40, 20, -1 );
	t.equal( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates the logpmf for `x`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var N;
	var K;
	var n;
	var y;
	var i;

	expected = data.expected;
	x = data.x;
	N = data.N;
	K = data.K;
	n = data.n;
	for ( i = 0; i < x.length; i++ ) {
		y = logpmf( x[i], N[i], K[i], n[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', N: '+N[i]+', K: '+K[i]+', n: '+n[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 3600.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. N: '+N[i]+'. K: '+K[i]+'. n: '+n[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
