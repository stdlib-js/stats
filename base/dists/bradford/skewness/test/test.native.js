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


// FIXTURES //

var data = require( './fixtures/python/data.json' );


// VARIABLES //

var skewness = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( skewness instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof skewness, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', opts, function test( t ) {
	var y = skewness( NaN );
	t.equal( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `c <= 0`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = skewness( 0.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = skewness( -1.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = skewness( NINF );
	t.equal( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the skewness of a Bradford distribution', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var c;
	var y;
	var i;

	expected = data.expected;
	c = data.x;
	for ( i = 0; i < c.length; i++ ) {
		y = skewness( c[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'c: '+c[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );

			/*
			* NOTE: the tolerance is set high in this case due to the numerically challenging nature of the Bradford distribution skewness formula, which involves:
			*
			* 1. Complex expressions with nested logarithmic terms ln(1+c)
			* 2. Square roots in both numerator and denominator
			* 3. Products and differences of terms involving c and ln(1+c) that can be sensitive to floating-point precision
			* 4. The SQRT2 factor amplifying any accumulated numerical errors
			*
			* Out of 1000 test cases, only two require tolerance higher than 500*EPS (specifically c=0.4 needs ~20000*EPS).
			*/
			tol = 20000.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
