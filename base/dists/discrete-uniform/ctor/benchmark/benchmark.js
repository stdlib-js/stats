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
var pkg = require( './../package.json' ).name;
var DiscreteUniform = require( './../lib' );


// MAIN //

bench( pkg+'::instantiation', function benchmark( bm ) {
	var dist;
	var len;
	var a;
	var b;
	var i;

	len = 100;
	a = new Float64Array( len );
	b = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		a[ i ] = discreteUniform( 0, 10 );
		b[ i ] = discreteUniform( a[ i ], a[ i ] + 10 );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist = new DiscreteUniform( a[ i % len ], b[ i % len ] );
		if ( !( dist instanceof DiscreteUniform ) ) {
			bm.fail( 'should return a distribution instance' );
		}
	}
	bm.toc();
	if ( !( dist instanceof DiscreteUniform ) ) {
		bm.fail( 'should return a distribution instance' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+'::get:a', function benchmark( bm ) {
	var dist;
	var a;
	var b;
	var y;
	var i;

	a = 20;
	b = 40;
	dist = new DiscreteUniform( a, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = dist.a;
		if ( y !== a ) {
			bm.fail( 'should return set value' );
		}
	}
	bm.toc();
	if ( isnan( y ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+'::set:a', function benchmark( bm ) {
	var dist;
	var len;
	var a;
	var b;
	var y;
	var i;

	a = 20;
	b = 120;
	dist = new DiscreteUniform( a, b );
	len = 100;
	y = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		y[ i ] = discreteUniform( 0, 100 );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = y[ i % len ];
		if ( dist.a !== y[ i % len ] ) {
			bm.fail( 'should return set value' );
		}
	}
	bm.toc();
	if ( isnan( y ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+'::get:b', function benchmark( bm ) {
	var dist;
	var a;
	var b;
	var y;
	var i;

	a = 20;
	b = 40;
	dist = new DiscreteUniform( a, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = dist.b;
		if ( y !== b ) {
			bm.fail( 'should return set value' );
		}
	}
	bm.toc();
	if ( isnan( y ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+'::set:b', function benchmark( bm ) {
	var dist;
	var len;
	var a;
	var b;
	var y;
	var i;

	a = 20;
	b = 40;
	dist = new DiscreteUniform( a, b );
	len = 100;
	y = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		y[ i ] = discreteUniform( a, a + 100 );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.b = y[ i % len ];
		if ( dist.b !== y[ i % len ] ) {
			bm.fail( 'should return set value' );
		}
	}
	bm.toc();
	if ( isnan( y ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+':entropy', function benchmark( bm ) {
	var dist;
	var len;
	var x;
	var a;
	var b;
	var y;
	var i;

	a = 20;
	b = 140;
	dist = new DiscreteUniform( a, b );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = discreteUniform( 0, 100 );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = x[ i % len ];
		y = dist.entropy;
		if ( isnan( y ) ) {
			bm.fail( 'should not return NaN' );
		}
	}
	bm.toc();
	if ( isnan( y ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+':kurtosis', function benchmark( bm ) {
	var dist;
	var len;
	var x;
	var a;
	var b;
	var y;
	var i;

	a = 20;
	b = 140;
	dist = new DiscreteUniform( a, b );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = discreteUniform( 0, 100 );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = x[ i % len ];
		y = dist.kurtosis;
		if ( isnan( y ) ) {
			bm.fail( 'should not return NaN' );
		}
	}
	bm.toc();
	if ( isnan( y ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+':mean', function benchmark( bm ) {
	var dist;
	var len;
	var x;
	var a;
	var b;
	var y;
	var i;

	a = 20;
	b = 140;
	dist = new DiscreteUniform( a, b );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = discreteUniform( 0, 100 );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = x[ i % len ];
		y = dist.mean;
		if ( isnan( y ) ) {
			bm.fail( 'should not return NaN' );
		}
	}
	bm.toc();
	if ( isnan( y ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+':median', function benchmark( bm ) {
	var dist;
	var len;
	var x;
	var a;
	var b;
	var y;
	var i;

	a = 20;
	b = 140;
	dist = new DiscreteUniform( a, b );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = discreteUniform( 0, 100 );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = x[ i % len ];
		y = dist.median;
		if ( isnan( y ) ) {
			bm.fail( 'should not return NaN' );
		}
	}
	bm.toc();
	if ( isnan( y ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+':skewness', function benchmark( bm ) {
	var dist;
	var len;
	var x;
	var a;
	var b;
	var y;
	var i;

	a = 20;
	b = 140;
	dist = new DiscreteUniform( a, b );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = discreteUniform( 0, 100 );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = x[ i % len ];
		y = dist.skewness;
		if ( isnan( y ) ) {
			bm.fail( 'should not return NaN' );
		}
	}
	bm.toc();
	if ( isnan( y ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+':stdev', function benchmark( bm ) {
	var dist;
	var len;
	var x;
	var a;
	var b;
	var y;
	var i;

	a = 20;
	b = 140;
	dist = new DiscreteUniform( a, b );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = discreteUniform( 0, 100 );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = x[ i % len ];
		y = dist.stdev;
		if ( isnan( y ) ) {
			bm.fail( 'should not return NaN' );
		}
	}
	bm.toc();
	if ( isnan( y ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+':variance', function benchmark( bm ) {
	var dist;
	var len;
	var x;
	var a;
	var b;
	var y;
	var i;

	a = 20;
	b = 140;
	dist = new DiscreteUniform( a, b );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = discreteUniform( 0, 100 );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = x[ i % len ];
		y = dist.variance;
		if ( isnan( y ) ) {
			bm.fail( 'should not return NaN' );
		}
	}
	bm.toc();
	if ( isnan( y ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+':cdf', function benchmark( bm ) {
	var dist;
	var len;
	var a;
	var b;
	var x;
	var y;
	var i;

	a = 20;
	b = 40;
	dist = new DiscreteUniform( a, b );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 0.0, 60.0 );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = dist.cdf( x[ i % len ] );
		if ( isnan( y ) ) {
			bm.fail( 'should not return NaN' );
		}
	}
	bm.toc();
	if ( isnan( y ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+':logcdf', function benchmark( bm ) {
	var dist;
	var len;
	var a;
	var b;
	var x;
	var y;
	var i;

	a = 20;
	b = 40;
	dist = new DiscreteUniform( a, b );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 0.0, 60.0 );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = dist.logcdf( x[ i % len ] );
		if ( isnan( y ) ) {
			bm.fail( 'should not return NaN' );
		}
	}
	bm.toc();
	if ( isnan( y ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+':logpmf', function benchmark( bm ) {
	var dist;
	var len;
	var a;
	var b;
	var x;
	var y;
	var i;

	a = 20;
	b = 40;
	dist = new DiscreteUniform( a, b );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = discreteUniform( 0, 60 );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = dist.logpmf( x[ i % len ] );
		if ( isnan( y ) ) {
			bm.fail( 'should not return NaN' );
		}
	}
	bm.toc();
	if ( isnan( y ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+':mgf', function benchmark( bm ) {
	var dist;
	var len;
	var a;
	var b;
	var x;
	var y;
	var i;

	a = 20;
	b = 40;
	dist = new DiscreteUniform( a, b );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 0.0, 1.0 );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = dist.mgf( x[ i % len ] );
		if ( isnan( y ) ) {
			bm.fail( 'should not return NaN' );
		}
	}
	bm.toc();
	if ( isnan( y ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+':pmf', function benchmark( bm ) {
	var dist;
	var len;
	var a;
	var b;
	var x;
	var y;
	var i;

	a = 20;
	b = 40;
	dist = new DiscreteUniform( a, b );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = discreteUniform( 0, 60 );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = dist.pmf( x[ i % len ] );
		if ( isnan( y ) ) {
			bm.fail( 'should not return NaN' );
		}
	}
	bm.toc();
	if ( isnan( y ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+':quantile', function benchmark( bm ) {
	var dist;
	var len;
	var a;
	var b;
	var x;
	var y;
	var i;

	a = 20;
	b = 40;
	dist = new DiscreteUniform( a, b );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 0.0, 1.0 );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = dist.quantile( x[ i % len ] );
		if ( isnan( y ) ) {
			bm.fail( 'should not return NaN' );
		}
	}
	bm.toc();
	if ( isnan( y ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});
