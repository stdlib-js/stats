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
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var tryRequire = require( '@stdlib/utils/try-require' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var quantile = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( quantile instanceof Error )
};


// MAIN //

bench( pkg+'::native', opts, function benchmark( b ) {
	var min;
	var max;
	var len;
	var p;
	var y;
	var i;

	len = 100;
	p = uniform( len, 0.0, 1.0 );
	min = discreteUniform( len, -10, 0 );
	max = discreteUniform( len, 0, 10 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = quantile( p[ i % len ], min[ i % len ], max[ i % len ] );
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
