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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var tryRequire = require( '@stdlib/utils/try-require' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var abs = require( '@stdlib/math/base/special/abs' );
var uniform = require( '@stdlib/random/base/uniform' );
var ln = require( '@stdlib/math/base/special/ln' );
var cdf = require( './../../../../../base/dists/gamma/cdf' );


// VARIABLES //

var logcdf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( logcdf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof logcdf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = logcdf( NaN, 1.0, 1.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = logcdf( 0.0, NaN, 1.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = logcdf( 0.0, 1.0, NaN );
	t.equal( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided `+infinity` for `x` and a finite `alpha` and `beta`, the function returns `1`', opts, function test( t ) {
	var y = logcdf( PINF, 0.5, 1.0 );
	t.equal( y, 0.0, 'returns expected value' );
	t.end();
});

tape( 'if provided `-infinity` for `x` and a finite `alpha` and `beta`, the function returns `0`', opts, function test( t ) {
	var y = logcdf( NINF, 0.5, 1.0 );
	t.equal( y, NINF, 'returns expected value' );
	t.end();
});

tape( 'if provided `alpha < 0`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = logcdf( 2.0, -1.0, 2.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = logcdf( 0.0, -1.0, 2.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = logcdf( 2.0, NINF, 1.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = logcdf( 2.0, NINF, PINF );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = logcdf( 2.0, NINF, NINF );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = logcdf( 2.0, NINF, NaN );
	t.equal( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided `beta <= 0`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = logcdf( 2.0, 2.0, 0.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = logcdf( 2.0, 2.0, -1.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = logcdf( 0.0, 2.0, -1.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = logcdf( 2.0, 1.0, NINF );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = logcdf( 2.0, PINF, NINF );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = logcdf( 2.0, NINF, NINF );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = logcdf( 2.0, NaN, NINF );
	t.equal( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `alpha` equal to `0` and `beta` is positive, the function evaluates a degenerate distribution centered at `0.0`', opts, function test( t ) {
	var y;

	y = logcdf( PINF, 0.0, 2.0 );
	t.equal( y, 0.0, 'returns expected value' );

	y = logcdf( 2.5, 0.0, 2.0 );
	t.equal( y, 0.0, 'returns expected value' );

	y = logcdf( 0.0, 0.0, 2.0 );
	t.equal( y, 0.0, 'returns expected value' );

	y = logcdf( -2.0, 0.0, 2.0 );
	t.equal( y, NINF, 'returns expected value' );

	y = logcdf( NINF, 0.0, 2.0 );
	t.equal( y, NINF, 'returns expected value' );

	y = logcdf( NaN, 0.0, 2.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates the logarithm of the CDF', opts, function test( t ) {
	var expected;
	var delta;
	var alpha;
	var beta;
	var tol;
	var i;
	var x;
	var y;

	for ( i = 0; i < 1000; i++ ) {
		x = uniform( EPS, 10.0 );
		alpha = uniform( EPS, 10.0 );
		beta = uniform( EPS, 10.0 );
		y = logcdf( x, alpha, beta );
		expected = ln( cdf( x, alpha, beta ) );
		if ( y === expected ) {
			t.equal( y, expected, 'x: '+x+', alpha: '+alpha+', beta: '+beta+', y: '+y+', expected: '+expected );
		} else {
			// NOTE: increased test tolerance due to differences in accumulated error between JavaScript and C, especially as we are wrapping `cdf` which relies on `gammainc`, where compiler optimizations can result in different error propagation
			delta = abs( y - expected );
			tol = 100.0 * EPS * abs( expected );
			t.ok( delta <= tol, 'within tolerance. x: '+x+'. alpha: '+alpha+'. beta: '+beta+'. y: '+y+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
