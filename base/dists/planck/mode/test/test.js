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
var uniform = require( '@stdlib/random/array/uniform' );
var mode = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mode, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for `lambda`, the function returns `NaN`', function test( t ) {
	var v = mode( NaN );
	t.equal( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided a shape parameter `lambda` which is nonpositive, the function returns `NaN`', function test( t ) {
	var v;

	v = mode( 0.0 );
	t.equal( isnan( v ), true, 'returns expected value' );

	v = mode( -1.5 );
	t.equal( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `0.0` as the mode of a Planck distribution', function test( t ) {
	var lambda;
	var i;
	var y;

	lambda = uniform( 10, 0.1, 10.0 );

	for ( i = 0; i < lambda.length; i++ ) {
		y = mode( lambda[ i ] );
		t.equal( y, 0.0, 'returns expected value' );
	}
	t.end();
});
