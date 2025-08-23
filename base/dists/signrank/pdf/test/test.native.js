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
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var data = require( './fixtures/r/data.json' );


// VARIABLES //

var pdf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( pdf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof pdf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', opts, function test( t ) {
	var y = pdf( NaN, 8 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	y = pdf( 0.0, NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `+infinity` for `x` and a valid `n`, the function returns `0`', opts, function test( t ) {
	var y = pdf( PINF, 8 );
	t.strictEqual( y, 0.0, 'returns expected value' );
	t.end();
});

tape( 'if provided `-infinity` for `x` and a valid `n`, the function returns `0`', opts, function test( t ) {
	var y = pdf( NINF, 8 );
	t.strictEqual( y, 0.0, 'returns expected value' );
	t.end();
});

tape( 'if not provided a positive integer for `n`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = pdf( 2.0, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = pdf( 2.0, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = pdf( 2.0, PINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `0` if provided a non-integer for `x`', opts, function test( t ) {
	var y = pdf( 1.5, 8 );
	t.strictEqual( y, 0.0, 'returns expected value' );
	t.end();

	y = pdf( 2.5, 8 );
	t.strictEqual( y, 0.0, 'returns expected value' );

	y = pdf( 0.1, 4 );
	t.strictEqual( y, 0.0, 'returns expected value' );
});

tape( 'the function evaluates the PDF for `x` given `n` observations', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var i;
	var x;
	var y;
	var n;

	expected = data.expected;
	x = data.x;
	n = data.n;
	for ( i = 0; i < x.length; i++ ) {
		y = pdf( x[i], n[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', n: '+n[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 80.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. n: '+n[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
