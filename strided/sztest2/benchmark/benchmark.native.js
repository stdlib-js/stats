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
var normal = require( '@stdlib/random/array/normal' );
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var pow = require( '@stdlib/math/base/special/pow' );
var tryRequire = require( '@stdlib/utils/try-require' );
var Results = require( './../../../base/ztest/two-sample/results/float32' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var sztest2 = tryRequire( resolve( __dirname, './../lib/sztest2.native.js' ) );
var opts = {
	'skip': ( sztest2 instanceof Error )
};
var options = {
	'dtype': 'float32'
};


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var results;
	var x;
	var y;

	results = new Results();
	x = normal( len, 0.0, 1.0, options );
	y = normal( len, 0.0, 1.0, options );

	return benchmark;

	function benchmark( b ) {
		var out;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			out = sztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 1.0, y, 1, results );
			if ( isnanf( out.statistic ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( isnanf( out.statistic ) ) {
			b.fail( 'should not return NaN' );
		}
		b.pass( 'benchmark finished' );
		b.end();
	}
}


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var len;
	var min;
	var max;
	var f;
	var i;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( i = min; i <= max; i++ ) {
		len = pow( 10, i );
		f = createBenchmark( len );
		bench( pkg+'::native:len='+len, opts, f );
	}
}

main();
