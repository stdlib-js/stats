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

var smallSmall = require( './fixtures/r/small_small.json' );
var smallLarge = require( './fixtures/r/small_large.json' );
var largeSmall = require( './fixtures/r/large_small.json' );
var largeLarge = require( './fixtures/r/large_large.json' );


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

tape( 'if provided `+infinity` for `x` and a finite `lambda`, the function returns `0`', opts, function test( t ) {
	var y = pdf( PINF, 1.0 );
	t.equal( y, 0.0, 'returns 0' );
	t.end();
});

tape( 'if provided `-infinity` for `x` and a finite `lambda`, the function returns `0`', opts, function test( t ) {
	var y = pdf( NINF, 1.0 );
	t.equal( y, 0.0, 'returns 0' );
	t.end();
});

tape( 'if provided `+infinity` for `lambda`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = pdf( 0.0, PINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = pdf( NaN, PINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = pdf( PINF, PINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = pdf( NINF, PINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a negative `lambda`, the function always returns `NaN`', opts, function test( t ) {
	var y;

	y = pdf( 2.0, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = pdf( 0.0, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = pdf( 2.0, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the function evaluates the pdf for `x` given parameter `lambda` (when `x` and `lambda` are small)', opts, function test( t ) {
	var expected;
	var lambda;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = smallSmall.expected;
	x = smallSmall.x;
	lambda = smallSmall.lambda;
	for ( i = 0; i < x.length; i++ ) {
		y = pdf( x[i], lambda[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+'. lambda: '+lambda[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = 20.0 * EPS * abs( expected[i] );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[i]+'.  lambda: '+lambda[i]+'. y: '+y+'. Expected: '+expected[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the pdf for `x` given parameter `lambda` (when `x` is large and `lambda` small)', opts, function test( t ) {
	var expected;
	var lambda;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = largeSmall.expected;
	x = largeSmall.x;
	lambda = largeSmall.lambda;
	for ( i = 0; i < x.length; i++ ) {
		y = pdf( x[i], lambda[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+'. lambda: '+lambda[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = 22.0 * EPS * abs( expected[i] );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[i]+'.  lambda: '+lambda[i]+'. y: '+y+'. Expected: '+expected[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the pdf for `x` given parameter `lambda` (when `x` is small and `lambda` large)', opts, function test( t ) {
	var expected;
	var lambda;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = smallLarge.expected;
	x = smallLarge.x;
	lambda = smallLarge.lambda;
	for ( i = 0; i < x.length; i++ ) {
		y = pdf( x[i], lambda[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+'. lambda: '+lambda[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = 22.0 * EPS * abs( expected[i] );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[i]+'.  lambda: '+lambda[i]+'. y: '+y+'. Expected: '+expected[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the pdf for `x` given parameter `lambda` (when `x` and `lambda` are large)', opts, function test( t ) {
	var expected;
	var lambda;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = largeLarge.expected;
	x = largeLarge.x;
	lambda = largeLarge.lambda;
	for ( i = 0; i < x.length; i++ ) {
		y = pdf( x[i], lambda[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+'. lambda: '+lambda[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = 10.0 * EPS * abs( expected[i] );
			t.strictEqual( delta <= tol, true, 'within tolerance. x: '+x[i]+'.  lambda: '+lambda[i]+'. y: '+y+'. Expected: '+expected[i]+'. tol: '+tol+'. delta: '+delta+'.' );
		}
	}
	t.end();
});
