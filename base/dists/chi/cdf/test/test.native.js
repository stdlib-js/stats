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
var abs = require( '@stdlib/math/base/special/abs' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var tryRequire = require( '@stdlib/utils/try-require' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );


// FIXTURES //

var data = require( './fixtures/julia/decimal_decimal.json' );


// VARIABLES //

var cdf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( cdf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cdf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = cdf( NaN, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = cdf( 0.0, NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a negative `k`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = cdf( 2.0, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = cdf( 0.0, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = cdf( 2.0, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided `k` equal to `0`, the function returns `0` for negative `x` and `1` for non-negative `x`', opts, function test( t ) {
	var y;

	y = cdf( -2.0, 0.0 );
	t.strictEqual( y, 0.0, 'returns expected value' );

	y = cdf( 0.0, 0.0 );
	t.strictEqual( y, 1.0, 'returns expected value' );

	y = cdf( 2.0, 0.0 );
	t.strictEqual( y, 1.0, 'returns expected value' );

	t.end();
});

tape( 'if provided a nonpositive `x`, the function returns `0`', opts, function test( t ) {
	var y;

	y = cdf( -1.0, 1.0 );
	t.strictEqual( y, 0.0, 'returns expected value' );

	y = cdf( 0.0, 1.0 );
	t.strictEqual( y, 0.0, 'returns expected value' );

	y = cdf( NINF, 1.0 );
	t.strictEqual( y, 0.0, 'returns expected value' );

	t.end();
});

tape( 'if provided `+infinity` for `x` and a finite positive `k`, the function returns `1`', opts, function test( t ) {
	var y = cdf( PINF, 1.0 );
	t.strictEqual( y, 1.0, 'returns expected value' );
	t.end();
});

tape( 'the function evaluates the cdf for `x` given parameter `k`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var k;
	var y;
	var i;

	expected = data.expected;
	x = data.x;
	k = data.k;
	for ( i = 0; i < x.length; i++ ) {
		y = cdf( x[i], k[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', k: '+k[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 70.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. k: '+k[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
