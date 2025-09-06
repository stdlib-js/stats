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
var normal = require( '@stdlib/random/array/normal' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pow = require( '@stdlib/math/base/special/pow' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/base/from-scalar' );
var Float64Results = require( './../../../../base/ztest/two-sample/results/float64' );
var resolveEnum = require( './../../../../base/ztest/alternative-resolve-enum' );
var structFactory = require( '@stdlib/array/struct-factory' );
var pkg = require( './../package.json' ).name;
var dztest2 = require( './../lib' );


// VARIABLES //

var options = {
	'dtype': 'float64'
};
var ResultsArray = structFactory( Float64Results );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var sigmax;
	var sigmay;
	var alpha;
	var diff;
	var xbuf;
	var ybuf;
	var obuf;
	var out;
	var alt;
	var x;
	var y;

	xbuf = normal( len, 0.0, 1.0, options );
	x = new ndarray( options.dtype, xbuf, [ len ], [ 1 ], 0, 'row-major' );

	ybuf = normal( len, 0.0, 1.0, options );
	y = new ndarray( options.dtype, ybuf, [ len ], [ 1 ], 0, 'row-major' );

	obuf = new ResultsArray( 1 );
	out = new ndarray( Float64Results, obuf, [], [ 0 ], 0, 'row-major' );

	alt = scalar2ndarray( resolveEnum( 'two-sided' ), 'int8', 'row-major' );
	alpha = scalar2ndarray( 0.05, options.dtype, 'row-major' );
	diff = scalar2ndarray( 0.0, options.dtype, 'row-major' );
	sigmax = scalar2ndarray( 1.0, options.dtype, 'row-major' );
	sigmay = scalar2ndarray( 1.0, options.dtype, 'row-major' );

	return benchmark;

	function benchmark( b ) {
		var v;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			v = dztest2( [ x, y, out, alt, alpha, diff, sigmax, sigmay ] );
			if ( typeof v !== 'object' ) {
				b.fail( 'should return an ndarray' );
			}
		}
		b.toc();
		if ( isnan( v.get().statistic ) || isnan( v.get().pValue ) ) {
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
		bench( pkg+':len='+len, f );
	}
}

main();
