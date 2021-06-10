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
var randu = require( '@stdlib/random/base/randu' );
var uniformCDF = require( '@stdlib/stats/base/dists/uniform/cdf' );
var isObject = require( '@stdlib/assert/is-object' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var ascending = require( './../lib/ascending.js' );
var pkg = require( './../package.json' ).name;
var kstest = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var result;
	var x;
	var i;

	x = new Array( 100 );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = randu();
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x[ i % x.length ] = randu();
		result = kstest( x, 'uniform', 0.0, 1.0 );
		if ( typeof result !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isObject( result ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::cdf', function benchmark( b ) {
	var result;
	var x;
	var i;

	x = new Array( 100 );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = randu();
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x[ i % x.length ] = randu();
		result = kstest( x, uniformCDF, 0.0, 1.0 );
		if ( typeof result !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isObject( result ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':sorted=true', function benchmark( b ) {
	var result;
	var opts;
	var idx;
	var x;
	var i;

	x = new Array( 100 );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = randu();
	}
	x.sort( ascending );
	opts = {
		'sorted': true
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		idx = i % x.length;
		x[ idx ] = ( x[ idx-1 ] + x[ idx+1 ] ) / 2.0;
		result = kstest( x, 'uniform', 0.0, 1.0, opts );
		if ( typeof result !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isObject( result ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::one-sided', function benchmark( b ) {
	var result;
	var opts;
	var x;
	var i;

	x = new Array( 100 );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = randu();
	}
	opts = {
		'alternative': 'less'
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x[ i % x.length ] = randu();
		result = kstest( x, 'uniform', 0.0, 1.0, opts );
		if ( typeof result !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isObject( result ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':print', function benchmark( b ) {
	var digits;
	var result;
	var output;
	var x;
	var i;

	x = new Array( 100 );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = randu();
	}
	result = kstest( x, 'uniform', 0.0, 1.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		digits = ( i % 8 ) + 1;
		output = result.print({
			'digits': digits
		});
		if ( typeof output !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( output ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
