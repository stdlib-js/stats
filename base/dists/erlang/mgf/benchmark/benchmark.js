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

var bench = require( '@stdlib/bench' );
var Float64Array = require( '@stdlib/array/float64' );
var uniform = require( '@stdlib/random/base/uniform' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var EPS = require( '@stdlib/constants/float64/eps' );
var pkg = require( './../package.json' ).name;
var mgf = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var lambda;
	var len;
	var k;
	var t;
	var y;
	var i;

	len = 100;
	k = new Float64Array( len );
	lambda = new Float64Array( len );
	t = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		k[ i ] = discreteUniform( 0, 100 );
		lambda[ i ] = uniform( EPS, 20.0 );
		t[ i ] = uniform( 0.0, lambda[ i ] );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = mgf( t[ i % len ], k[ i % len ], lambda[ i % len ] );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':factory', function benchmark( b ) {
	var lambda;
	var mymgf;
	var len;
	var k;
	var t;
	var y;
	var i;

	k = 2;
	lambda = 1.5;
	mymgf = mgf.factory( k, lambda );
	len = 100;
	t = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		t[ i ] = uniform( 0.0, lambda );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = mymgf( t[ i % len ] );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
