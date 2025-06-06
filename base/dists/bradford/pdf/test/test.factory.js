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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var abs = require( '@stdlib/math/base/special/abs' );
var EPS = require( '@stdlib/constants/float64/eps' );
var factory = require( './../lib/factory.js' );


// FIXTURES //

var smallC = require( './fixtures/python/small_c.json' );
var mediumC = require( './fixtures/python/medium_c.json' );
var largeC = require( './fixtures/python/large_c.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function', function test( t ) {
	var pdf = factory( 1.0 );
	t.equal( typeof pdf, 'function', 'returns a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the created function returns `NaN`', function test( t ) {
	var pdf;
	var y;

	pdf = factory( 1.0 );
	y = pdf( NaN );
	t.equal( isnan( y ), true, 'returns expected value' );

	pdf = factory( NaN );
	y = pdf( 0.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	pdf = factory( NaN );
	y = pdf( NaN );
	t.equal( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided `c <= 0`, the created function always returns `NaN`', function test( t ) {
	var pdf;
	var y;

	pdf = factory( -1.0 );
	y = pdf( 1.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = pdf( 0.5 );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = pdf( 0.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a valid `c`, the function returns a function which returns `0` when provided a number outside [0,1] for `x`', function test( t ) {
	var pdf;
	var y;

	pdf = factory( 1.0 );
	y = pdf( -1.0 );
	t.equal( y, 0.0, 'returns expected value' );

	y = pdf( -0.5 );
	t.equal( y, 0.0, 'returns expected value' );

	y = pdf( 1.5 );
	t.equal( y, 0.0, 'returns expected value' );

	y = pdf( 10.0 );
	t.equal( y, 0.0, 'returns expected value' );

	t.end();
});

tape( 'the created function evaluates the pdf for `x` given small `c`', function test( t ) {
	var expected;
	var delta;
	var pdf;
	var tol;
	var c;
	var i;
	var x;
	var y;

	expected = smallC.expected;
	x = smallC.x;
	c = smallC.c;
	for ( i = 0; i < x.length; i++ ) {
		pdf = factory( c[i] );
		y = pdf( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+'. c: '+c[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 2.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the created function evaluates the pdf for `x` given a medium `c`', function test( t ) {
	var expected;
	var delta;
	var pdf;
	var tol;
	var c;
	var i;
	var x;
	var y;

	expected = mediumC.expected;
	x = mediumC.x;
	c = mediumC.c;
	for ( i = 0; i < x.length; i++ ) {
		pdf = factory( c[i] );
		y = pdf( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+'. c: '+c[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.9 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the created function evaluates the pdf for `x` given a large `c`', function test( t ) {
	var expected;
	var delta;
	var pdf;
	var tol;
	var c;
	var i;
	var x;
	var y;

	expected = largeC.expected;
	x = largeC.x;
	c = largeC.c;
	for ( i = 0; i < x.length; i++ ) {
		pdf = factory( c[i] );
		y = pdf( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+'. c: '+c[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 2.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
