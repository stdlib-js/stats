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
var uniform = require( '@stdlib/random/array/uniform' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var EPS = require( '@stdlib/constants/float64/eps' );
var pkg = require( './../package.json' ).name;
var Cosine = require( './../lib' );


// MAIN //

bench( pkg+'::instantiation', function benchmark( bm ) {
	var dist;
	var opts;
	var mu;
	var s;
	var i;

	opts = {
		'dtype': 'float64'
	};
	mu = uniform( 100, EPS, 10.0, opts );
	s = uniform( 100, EPS, 10.0, opts );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist = new Cosine( mu[ i % mu.length ], s[ i % s.length ] );
		if ( !( dist instanceof Cosine ) ) {
			bm.fail( 'should return a distribution instance' );
		}
	}
	bm.toc();
	if ( !( dist instanceof Cosine ) ) {
		bm.fail( 'should return a distribution instance' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+'::get:mu', function benchmark( bm ) {
	var dist;
	var mu;
	var s;
	var y;
	var i;

	mu = 2.0;
	s = 3.0;
	dist = new Cosine( mu, s );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = dist.mu;
		if ( y !== mu ) {
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

bench( pkg+'::set:mu', function benchmark( bm ) {
	var dist;
	var opts;
	var mu;
	var s;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	y = uniform( 100, EPS, 100.0, opts );

	mu = 2.0;
	s = 3.0;
	dist = new Cosine( mu, s );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.mu = y[ i % y.length ];
		if ( dist.mu !== y[ i % y.length ] ) {
			bm.fail( 'should return set value' );
		}
	}
	bm.toc();
	if ( isnan( dist.mu ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+'::get:s', function benchmark( bm ) {
	var dist;
	var mu;
	var s;
	var y;
	var i;

	mu = 2.0;
	s = 3.0;
	dist = new Cosine( mu, s );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = dist.s;
		if ( y !== s ) {
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

bench( pkg+'::set:s', function benchmark( bm ) {
	var dist;
	var opts;
	var mu;
	var s;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	y = uniform( 100, EPS, 100.0, opts );

	mu = 2.0;
	s = 3.0;
	dist = new Cosine( mu, s );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.s = y[ i % y.length ];
		if ( dist.s !== y[ i % y.length ] ) {
			bm.fail( 'should return set value' );
		}
	}
	bm.toc();
	if ( isnan( dist.s ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+':kurtosis', function benchmark( bm ) {
	var dist;
	var opts;
	var mu;
	var x;
	var s;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, EPS, 100.0, opts );

	mu = 2.0;
	s = 3.0;
	dist = new Cosine( mu, s );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.mu = x[ i % x.length ];
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
	var opts;
	var mu;
	var x;
	var s;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, EPS, 100.0, opts );

	mu = 2.0;
	s = 3.0;
	dist = new Cosine( mu, s );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.mu = x[ i % x.length ];
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
	var opts;
	var mu;
	var x;
	var s;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, EPS, 100.0, opts );

	mu = 2.0;
	s = 3.0;
	dist = new Cosine( mu, s );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.mu = x[ i % x.length ];
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

bench( pkg+':mode', function benchmark( bm ) {
	var dist;
	var opts;
	var mu;
	var x;
	var s;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, 1.0 + EPS, 100.0, opts );

	mu = 2.0;
	s = 3.0;
	dist = new Cosine( mu, s );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.mu = x[ i % x.length ];
		y = dist.mode;
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
	var opts;
	var mu;
	var x;
	var s;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, EPS, 100.0, opts );

	mu = 2.0;
	s = 3.0;
	dist = new Cosine( mu, s );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.mu = x[ i % x.length ];
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
	var opts;
	var mu;
	var x;
	var s;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, EPS, 100.0, opts );

	mu = 2.0;
	s = 3.0;
	dist = new Cosine( mu, s );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.mu = x[ i % x.length ];
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
	var opts;
	var mu;
	var x;
	var s;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, EPS, 100.0, opts );

	mu = 2.0;
	s = 3.0;
	dist = new Cosine( mu, s );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.mu = x[ i % x.length ];
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
	var opts;
	var mu;
	var s;
	var x;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, -3.0, 3.0, opts );

	mu = 2.0;
	s = 3.0;
	dist = new Cosine( mu, s );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = dist.cdf( x[ i % x.length ] );
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

bench( pkg+':logpdf', function benchmark( bm ) {
	var dist;
	var opts;
	var mu;
	var s;
	var x;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, -3.0, 3.0, opts );

	mu = 1.0;
	s = 2.0;
	dist = new Cosine( mu, s );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = dist.logpdf( x[ i % x.length ] );
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
	var opts;
	var mu;
	var s;
	var x;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, 0.0, 1.0, opts );

	mu = 2.0;
	s = 0.2;
	dist = new Cosine( mu, s );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = dist.mgf( x[ i % x.length ] );
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

bench( pkg+':pdf', function benchmark( bm ) {
	var dist;
	var opts;
	var mu;
	var s;
	var x;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, -3.0, 3.0, opts );

	mu = 2.0;
	s = 3.0;
	dist = new Cosine( mu, s );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = dist.pdf( x[ i % x.length ] );
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
	var opts;
	var mu;
	var s;
	var x;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, 0.0, 1.0, opts );

	mu = 2.0;
	s = 3.0;
	dist = new Cosine( mu, s );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = dist.quantile( x[ i % x.length ] );
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
