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
var bench = require( '@stdlib/bench' );
var uniform = require( '@stdlib/random/array/uniform' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var EPS = require( '@stdlib/constants/float64/eps' );
var tryRequire = require( '@stdlib/utils/try-require' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var cdf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( cdf instanceof Error )
};


// MAIN //

bench( pkg+'::native', opts, function benchmark( b ) {
	var len;
	var a;
	var s;
	var x;
	var y;
	var i;

	len = 100;
	x = uniform( len, 0.0, 1.0 );
	a = uniform( len, EPS, 5.0 );
	s = uniform( len, EPS, 5.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = cdf( x[ i % len ], a[ i % len ], s[ i % len ] );
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
