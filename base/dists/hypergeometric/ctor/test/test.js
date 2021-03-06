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

var tape = require( 'tape' );
var isFunction = require( '@stdlib/assert/is-function' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var quantile = require( './../../../../../base/dists/hypergeometric/quantile' );
var cdf = require( './../../../../../base/dists/hypergeometric/cdf' );
var logpmf = require( './../../../../../base/dists/hypergeometric/logpmf' );
var pmf = require( './../../../../../base/dists/hypergeometric/pmf' );
var kurtosis = require( './../../../../../base/dists/hypergeometric/kurtosis' );
var skewness = require( './../../../../../base/dists/hypergeometric/skewness' );
var stdev = require( './../../../../../base/dists/hypergeometric/stdev' );
var variance = require( './../../../../../base/dists/hypergeometric/variance' );
var mode = require( './../../../../../base/dists/hypergeometric/mode' );
var mean = require( './../../../../../base/dists/hypergeometric/mean' );
var Hypergeometric = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Hypergeometric, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a `N` argument which is not a nonnegative integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		4.3,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new Hypergeometric( value, 0, 0 );
		};
	}
});

tape( 'the function throws an error if provided a `K` argument which is not a nonnegative integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		4.3,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new Hypergeometric( 10, value, 0 );
		};
	}
});

tape( 'the function throws an error if provided a `n` argument which is not a nonnegative integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		4.3,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new Hypergeometric( 100, 20, value );
		};
	}
});

tape( 'the function throws an error if `K > N`', function test( t ) {
	var values;
	var i;

	values = [
		[ 10, 15 ],
		[ 8, 9 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new Hypergeometric( value[ 0 ], value[ 1 ], 2 );
		};
	}
});

tape( 'the function throws an error if `n > N`', function test( t ) {
	var values;
	var i;

	values = [
		[ 10, 15 ],
		[ 7, 8 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new Hypergeometric( value[ 0 ], 4, value[ 1 ] );
		};
	}
});

tape( 'the function returns a new distribution instance', function test( t ) {
	var hypergeometric = new Hypergeometric( 100, 50, 20 );
	t.strictEqual( hypergeometric instanceof Hypergeometric, true, 'returns an instance' );
	t.end();
});

tape( 'the function can be invoked without the new operator', function test( t ) {
	// eslint-disable-next-line new-cap
	var hypergeometric = Hypergeometric( 100, 50, 20 );
	t.strictEqual( hypergeometric instanceof Hypergeometric, true, 'returns an instance' );

	t.end();
});

tape( 'the created distribution has a property for getting and setting `N`', function test( t ) {
	var hypergeometric;

	hypergeometric = new Hypergeometric( 100, 50, 40 );
	t.strictEqual( hasOwnProp( hypergeometric, 'N' ), true, 'has property' );
	t.strictEqual( hypergeometric.N, 100, 'returns expected value' );

	hypergeometric.N = 60;
	t.strictEqual( hypergeometric.N, 60, 'returns expected value' );

	t.end();
});

tape( 'the created distribution has a property for getting and setting `K`', function test( t ) {
	var hypergeometric;

	hypergeometric = new Hypergeometric( 100, 50, 40 );
	t.strictEqual( hasOwnProp( hypergeometric, 'K' ), true, 'has property' );
	t.strictEqual( hypergeometric.K, 50, 'returns expected value' );

	hypergeometric.K = 80;
	t.strictEqual( hypergeometric.K, 80, 'returns expected value' );

	t.end();
});

tape( 'the created distribution has a property for getting and setting `n`', function test( t ) {
	var hypergeometric;

	hypergeometric = new Hypergeometric( 100, 50, 40 );
	t.strictEqual( hasOwnProp( hypergeometric, 'n' ), true, 'has property' );
	t.strictEqual( hypergeometric.n, 40, 'returns expected value' );

	hypergeometric.n = 80;
	t.strictEqual( hypergeometric.n, 80, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `N` to a value which is not a nonnegative integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		4.3,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var hypergeometric = new Hypergeometric( 10, 0, 0 );
			hypergeometric.N = value;
		};
	}
});

tape( 'the created distribution throws an error if one attempts to set `N` to a value smaller than `K` or `n`', function test( t ) {
	var values;
	var i;

	values = [
		[ 10, 6, 6 ],
		[ 10, 7, 3 ],
		[ 10, 3, 6 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error' );
	}
	t.end();

	function badValue( v ) {
		return function badValue() {
			var hypergeometric = new Hypergeometric( v[ 0 ], v[ 1 ], v[ 2 ] );
			hypergeometric.N = 5;
		};
	}
});

tape( 'the created distribution throws an error if one attempts to set `K` to a value which is not a nonnegative integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		4.3,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var hypergeometric = new Hypergeometric( 10, 0, 0 );
			hypergeometric.K = value;
		};
	}
});

tape( 'the created distribution throws an error if one attempts to set `K` to a value larger than `N`', function test( t ) {
	t.throws( badValue, RangeError, 'throws an error' );
	t.end();

	function badValue() {
		var hypergeometric = new Hypergeometric( 10, 5, 4 );
		hypergeometric.K = 11;
	}
});

tape( 'the created distribution throws an error if one attempts to set `n` to a value which is not a nonnegative integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		4.3,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var hypergeometric = new Hypergeometric( 10, 6, 4 );
			hypergeometric.n = value;
		};
	}
});

tape( 'the created distribution throws an error if one attempts to set `n` to a value larger than `N`', function test( t ) {
	t.throws( badValue, RangeError, 'throws an error' );
	t.end();

	function badValue() {
		var hypergeometric = new Hypergeometric( 10, 5, 4 );
		hypergeometric.n = 11;
	}
});

tape( 'the distribution prototype has a property for retrieving the distribution kurtosis', function test( t ) {
	var hypergeometric;

	t.strictEqual( hasOwnProp( Hypergeometric.prototype, 'kurtosis' ), true, 'has property' );

	hypergeometric = new Hypergeometric( 100, 20, 10 );
	t.strictEqual( hypergeometric.kurtosis, kurtosis( 100, 20, 10 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mean', function test( t ) {
	var hypergeometric;

	t.strictEqual( hasOwnProp( Hypergeometric.prototype, 'mean' ), true, 'has property' );

	hypergeometric = new Hypergeometric( 100, 80, 40 );
	t.strictEqual( hypergeometric.mean, mean( 100, 80, 40 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mode', function test( t ) {
	var hypergeometric;

	t.strictEqual( hasOwnProp( Hypergeometric.prototype, 'mode' ), true, 'has property' );

	hypergeometric = new Hypergeometric( 10, 5, 5 );
	t.strictEqual( hypergeometric.mode, mode( 10, 5, 5 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution skewness', function test( t ) {
	var hypergeometric;

	t.strictEqual( hasOwnProp( Hypergeometric.prototype, 'skewness' ), true, 'has property' );

	hypergeometric = new Hypergeometric( 100, 40, 60 );
	t.strictEqual( hypergeometric.skewness, skewness( 100, 40, 60 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution standard deviation', function test( t ) {
	var hypergeometric;

	t.strictEqual( hasOwnProp( Hypergeometric.prototype, 'stdev' ), true, 'has property' );

	hypergeometric = new Hypergeometric( 100, 40, 60 );
	t.strictEqual( hypergeometric.stdev, stdev( 100, 40, 60 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution variance', function test( t ) {
	var hypergeometric;

	t.strictEqual( hasOwnProp( Hypergeometric.prototype, 'variance' ), true, 'has property' );

	hypergeometric = new Hypergeometric( 100, 40, 60 );
	t.strictEqual( hypergeometric.variance, variance( 100, 40, 60 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a method for evaluating the cumulative distribution function (CDF)', function test( t ) {
	var hypergeometric;
	var y;

	t.strictEqual( hasOwnProp( Hypergeometric.prototype, 'cdf' ), true, 'has property' );
	t.strictEqual( isFunction( Hypergeometric.prototype.cdf ), true, 'has method' );

	hypergeometric = new Hypergeometric( 100, 50, 25 );
	y = hypergeometric.cdf( 0.5 );

	t.strictEqual( y, cdf( 0.5, 100, 50, 25 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the probability mass function (PMF)', function test( t ) {
	var hypergeometric;
	var y;

	t.strictEqual( hasOwnProp( Hypergeometric.prototype, 'logpmf' ), true, 'has property' );
	t.strictEqual( isFunction( Hypergeometric.prototype.logpmf ), true, 'has method' );

	hypergeometric = new Hypergeometric( 100, 50, 25 );
	y = hypergeometric.logpmf( 15 );

	t.strictEqual( y, logpmf( 15, 100, 50, 25 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the probability mass function (PMF)', function test( t ) {
	var hypergeometric;
	var y;

	t.strictEqual( hasOwnProp( Hypergeometric.prototype, 'pmf' ), true, 'has property' );
	t.strictEqual( isFunction( Hypergeometric.prototype.pmf ), true, 'has method' );

	hypergeometric = new Hypergeometric( 100, 50, 25 );
	y = hypergeometric.pmf( 15 );

	t.strictEqual( y, pmf( 15, 100, 50, 25 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the quantile function', function test( t ) {
	var hypergeometric;
	var y;

	t.strictEqual( hasOwnProp( Hypergeometric.prototype, 'quantile' ), true, 'has property' );
	t.strictEqual( isFunction( Hypergeometric.prototype.quantile ), true, 'has method' );

	hypergeometric = new Hypergeometric( 100, 50, 25 );
	y = hypergeometric.quantile( 0.8 );

	t.strictEqual( y, quantile( 0.8, 100, 50, 25 ), 'returns expected value' );
	t.end();
});
