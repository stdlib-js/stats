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
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var skewness = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/python/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof skewness, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for `c`, the function returns `NaN`', function test( t ) {
	var v = skewness( NaN );
	t.equal( isnan( v ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided a shape parameter `c` that is not a positive number, the function returns `NaN`', function test( t ) {
	var v;

	v = skewness( -1.0 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = skewness( 0.0 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = skewness( NINF );
	t.equal( isnan( v ), true, 'returns NaN' );

	t.end();
});

tape( 'the function returns the skewness of a bradford distribution', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var i;
	var y;

	expected = data.expected;
	x = data.x;
	for ( i = 0; i < expected.length; i++ ) {
		y = skewness( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x:'+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );

			/*
			* TODO: the significant divergence from SciPy appears to stem from the computation of the natural log. We should follow up to ensure that our ln implementation is sufficiently accurate.
			*/
			tol = 20000.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
