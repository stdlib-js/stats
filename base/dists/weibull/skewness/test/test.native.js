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
var abs = require( '@stdlib/math/base/special/abs' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );


// VARIABLES //

var skewness = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( skewness instanceof Error )
};


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof skewness, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', opts, function test( t ) {
	var v = skewness( NaN, 0.5 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = skewness( 10.0, NaN );
	t.equal( isnan( v ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided `k <= 0`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = skewness( -1.0, 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = skewness( NINF, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = skewness( NINF, PINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = skewness( NINF, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = skewness( NINF, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided `lambda <= 0`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = skewness( 2.0, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = skewness( 1.0, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = skewness( PINF, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = skewness( NINF, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = skewness( NaN, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the function returns the skewness of a Weibull distribution', opts, function test( t ) {
	var expected;
	var lambda;
	var delta;
	var tol;
	var k;
	var i;
	var y;

	expected = data.expected;
	k = data.k;
	lambda = data.lambda;
	for ( i = 0; i < expected.length; i++ ) {
		y = skewness( k[i], lambda[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'k: '+k[i]+', lambda: '+lambda[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1e-11 * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. k: '+k[i]+'. lambda: '+lambda[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
