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
var abs = require( '@stdlib/math/base/special/abs' );
var EPS = require( '@stdlib/constants/float64/eps' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var entropy = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( entropy instanceof Error )
};


// FIXTURES //

var data = require( './fixtures/python/small_c.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof entropy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', opts, function test( t ) {
	var y = entropy( NaN );
	t.equal( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided a shape parameter which is not positive', opts, function test( t ) {
	var y;

	y = entropy( 0.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = entropy( -1.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the differential entropy of a Bradford distribution', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var c;
	var y;
	var i;

	expected = data.expected;
	c = data.c;
	for ( i = 0; i < c.length; i++ ) {
		y = entropy( c[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'c: '+c[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 990.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
