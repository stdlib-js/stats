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
var EPS = require( '@stdlib/constants/float64/eps' );


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// VARIABLES //

var mode = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( mode instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mode, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided an `N` which is not a nonnegative integer, the function returns `NaN`', opts, function test( t ) {
	var v;

	v = mode( -2, 4, 2 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = mode( -1, 4, 2 );
	t.equal( isnan( v ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided an `K` which is not a nonnegative integer, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = mode( 20, -2, 10 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mode( 20, -1, 10 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided an `n` which is not a nonnegative integer, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = mode( 40, 20, -2 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mode( 40, 20, -1 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the function returns the mode of a hypergeometric distribution', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var N;
	var K;
	var n;
	var y;
	var i;

	expected = data.expected;
	N = data.N;
	K = data.K;
	n = data.n;
	for ( i = 0; i < n.length; i++ ) {
		y = mode( N[i], K[i], n[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'N: '+N[i]+', K: '+K[i]+', n: '+n[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. N: '+N[i]+'. K: '+K[i]+'. n: '+n[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
