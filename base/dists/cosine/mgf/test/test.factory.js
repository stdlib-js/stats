/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var randu = require( '@stdlib/random/base/randu' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var factory = require( './../lib/factory.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function', function test( t ) {
	var mgf = factory( 0.0, 1.0 );
	t.equal( typeof mgf, 'function', 'returns a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the created function returns `NaN`', function test( t ) {
	var mgf;
	var y;

	mgf = factory( 0.0, 1.0 );
	y = mgf( NaN );
	t.equal( isnan( y ), true, 'returns expected value' );

	mgf = factory( NaN, 1.0 );
	y = mgf( 0.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	mgf = factory( 1.0, NaN );
	y = mgf( 0.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	mgf = factory( NaN, NaN );
	y = mgf( 0.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	mgf = factory( NaN, NaN );
	y = mgf( NaN );
	t.equal( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a negative `s`, the created function always returns `NaN`', function test( t ) {
	var mgf;
	var y;

	mgf = factory( 0.0, -1.0 );

	y = mgf( 2.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = mgf( 0.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	mgf = factory( 0.0, NINF );
	y = mgf( 2.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	mgf = factory( PINF, NINF );
	y = mgf( 2.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	mgf = factory( NINF, NINF );
	y = mgf( 2.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	mgf = factory( NaN, NINF );
	y = mgf( 2.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the created function evaluates the MGF', function test( t ) {
	var mgf;
	var mu;
	var s;
	var x;
	var y;
	var i;

	// TODO: Add fixtures once respective function becomes available in either Julia, R, or Python
	for ( i = 0; i < 100; i++ ) {
		x = randu() * 10.0;
		mu = randu() * 10.0;
		s = randu() * 10.0;
		mgf = factory( mu, s );
		y = mgf( x, mu, s );
		t.strictEqual( isNumber( y ), true, 'returns expected value' );
	}
	t.end();
});
