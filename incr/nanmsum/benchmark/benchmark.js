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

var bench = require( '@stdlib/bench' );
var pkg = require( './../package.json' ).name;
var incrnanmsum = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var f;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		f = incrnanmsum( (i%5)+1 );
		if ( typeof f !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( typeof f !== 'function' ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::accumulator', function benchmark( b ) {
	var acc;
	var v;
	var i;

	acc = incrnanmsum( 5 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = acc( (i%5) ? i : NaN );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
