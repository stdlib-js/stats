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
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var tryRequire = require( '@stdlib/utils/try-require' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );


// VARIABLES //

var stdev = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( stdev instanceof Error )
};


// FIXTURES //

var data = require( './fixtures/python/data.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof stdev, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', opts, function test( t ) {
	var v = stdev( NaN, NaN );
	t.equal( isnan( v ), true, 'returns expected value' );

	v = stdev( 10, NaN );
	t.equal( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `n` which is not a nonnegative integer, the function returns `NaN`', opts, function test( t ) {
	var v;

	v = stdev( -2, 0.5 );
	t.equal( isnan( v ), true, 'returns expected value' );

	v = stdev( -1, 0.5 );
	t.equal( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a success probability `p` outside of `[0,1]`, the function returns `NaN`', opts, function test( t ) {
	var v;

	v = stdev( 20, -1.0 );
	t.equal( isnan( v ), true, 'returns expected value' );

	v = stdev( 20, 1.5 );
	t.equal( isnan( v ), true, 'returns expected value' );

	v = stdev( 20, NINF );
	t.equal( isnan( v ), true, 'returns expected value' );

	v = stdev( 20, PINF );
	t.equal( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the standard deviation of a binomial distribution', opts, function test( t ) {
	var expected;
	var n;
	var p;
	var y;
	var i;

	expected = data.expected;
	n = data.n;
	p = data.p;
	for ( i = 0; i < n.length; i++ ) {
		y = stdev( n[i], p[i] );
		t.equal( y, expected[i], 'n: '+n[i]+', p: '+p[i]+', y: '+y+', expected: '+expected[i] );
	}
	t.end();
});
