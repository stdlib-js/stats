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


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// VARIABLES //

var variance = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( variance instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof variance, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for `p`, the function returns `NaN`', opts, function test( t ) {
	var v = variance( NaN );
	t.equal( isnan( v ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided `1` or `0` for `p`, the function returns `0`', opts, function test( t ) {
	var v = variance( 1.0 );
	t.strictEqual( v, 0.0, 'returns 0' );

	v = variance( 0.0 );
	t.strictEqual( v, 0.0, 'returns 0' );

	t.end();
});

tape( 'if provided a success probability `p` outside of `[0,1]`, the function returns `NaN`', opts, function test( t ) {
	var v;

	v = variance( -1.0 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = variance( 1.5 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = variance( NINF );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = variance( PINF );
	t.equal( isnan( v ), true, 'returns NaN' );

	t.end();
});

tape( 'the function returns the variance of a Bernoulli distribution', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var i;
	var p;
	var y;

	expected = data.expected;
	p = data.p;
	for ( i = 0; i < expected.length; i++ ) {
		y = variance( p[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'p: '+p[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. p: '+p[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
