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
var abs = require( '@stdlib/math/base/special/abs' );
var EPS = require( '@stdlib/constants/float64/eps' );
var incrnanskewness = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof incrnanskewness, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an accumulator function', function test( t ) {
	t.equal( typeof incrnanskewness(), 'function', 'returns a function' );
	t.end();
});

tape( 'the accumulator function incrementally computes a corrected sample skewness', function test( t ) {
	var expected;
	var actual;
	var delta;
	var data;
	var acc;
	var tol;
	var i;

	data = [ 3.0, 2.0, 7.0, NaN, -1.0, NaN, 9.0 ];

	// Check against the skewness function of the `e1071` R package:
	expected = [
		null,
		null,
		1.457862967321305,
		1.457862967321305,
		0.4366620845757488,
		0.4366620845757488,
		0.1171875
	];

	acc = incrnanskewness();
	for ( i = 0; i < data.length; i++ ) {
		actual = acc( data[ i ] );
		if ( expected[ i ] === null ) {
			t.equal( actual, expected[i], 'returns null' );
		} else {
			delta = abs( actual - expected[ i ] );
			tol = 1.5 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. actual: '+actual+'. E: '+expected[i]+' Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});

tape( 'if not provided an input value, the accumulator function returns the current corrected sample skewness', function test( t ) {
	var expected;
	var actual;
	var delta;
	var data;
	var acc;
	var tol;
	var i;

	data = [ 1.0, 4.0, 1.0, NaN, 0.0, 2.0, 12.0 ];
	acc = incrnanskewness();
	for ( i = 0; i < data.length; i++ ) {
		acc( data[ i ] );
	}
	expected = 1.986829609590966;
	actual = acc();
	delta = abs( actual - expected );
	tol = EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. actual: '+actual+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );
	t.end();
});

tape( 'the corrected sample skewness is `null` until at least 3 datums have been provided', function test( t ) {
	var skewness;
	var acc;

	acc = incrnanskewness();

	skewness = acc();
	t.equal( skewness, null, 'returns expected value' );

	skewness = acc( 2.0 );
	t.equal( skewness, null, 'returns expected value' );

	skewness = acc( 2.0 );
	t.equal( skewness, null, 'returns expected value' );

	skewness = acc( NaN );
	t.equal( skewness, null, 'returns expected value' );

	skewness = acc( 3.0 );
	t.notEqual( skewness, null, 'returns expected value' );

	t.end();
});
