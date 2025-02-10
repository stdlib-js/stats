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
var uniform = require( '@stdlib/random/base/uniform' );
var Float64Array = require( '@stdlib/array/float64' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var EPS = require( '@stdlib/constants/float64/eps' );
var pkg = require( './../package.json' ).name;
var mgf = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var alpha;
	var beta;
	var len;
	var t;
	var y;
	var i;

	len = 100;
	alpha = new Float64Array( len );
	beta = new Float64Array( len );
	t = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		alpha[ i ] = uniform( EPS, 100.0 );
		beta[ i ] = uniform( EPS, 100.0 );
		t[ i ] = uniform( 0.0, beta[ i ] );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = mgf( t[ i % len ], alpha[ i % len ], beta[ i % len ] );
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
	var mymgf;
	var alpha;
	var beta;
	var len;
	var t;
	var y;
	var i;

	alpha = 20.0;
	beta = 15.0;
	mymgf = mgf.factory( alpha, beta );

	len = 100;
	t = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		t[ i ] = uniform( 0.0, beta );
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
