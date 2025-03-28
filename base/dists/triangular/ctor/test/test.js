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
var quantile = require( './../../../../../base/dists/triangular/quantile' );
var logcdf = require( './../../../../../base/dists/triangular/logcdf' );
var logpdf = require( './../../../../../base/dists/triangular/logpdf' );
var cdf = require( './../../../../../base/dists/triangular/cdf' );
var pdf = require( './../../../../../base/dists/triangular/pdf' );
var mgf = require( './../../../../../base/dists/triangular/mgf' );
var kurtosis = require( './../../../../../base/dists/triangular/kurtosis' );
var skewness = require( './../../../../../base/dists/triangular/skewness' );
var variance = require( './../../../../../base/dists/triangular/variance' );
var entropy = require( './../../../../../base/dists/triangular/entropy' );
var median = require( './../../../../../base/dists/triangular/median' );
var stdev = require( './../../../../../base/dists/triangular/stdev' );
var mean = require( './../../../../../base/dists/triangular/mean' );
var mode = require( './../../../../../base/dists/triangular/mode' );
var Triangular = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Triangular, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an `a` argument which is not a number primitive', function test( t ) {
	var values;
	var i;

	values = [
		'5',
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
			new Triangular( value, 2.0, 1.0 );
		};
	}
});

tape( 'the function throws an error if provided a `b` argument which is not a number primitive', function test( t ) {
	var values;
	var i;

	values = [
		'5',
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
			new Triangular( 2.0, value, 3.0 );
		};
	}
});

tape( 'the function throws an error if provided a `c` argument which is not a number primitive', function test( t ) {
	var values;
	var i;

	values = [
		'5',
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
			new Triangular( 2.0, 4.0, value );
		};
	}
});

tape( 'the function throws an error if parameters do not satisfy `a <= c <= c`', function test( t ) {
	var values;
	var i;

	values = [
		[ 1.0, 1.0, 0.9 ],
		[ 2.0, 0.0, 1.0 ],
		[ 0.0, -1.0, -2.0 ],
		[ 0.0, 1.0, -2.0 ],
		[ 0.0, 1.0, 2.0 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new Triangular( value[ 0 ], value[ 1 ], value[ 2 ] );
		};
	}
});

tape( 'if provided arguments, the function requires `a`, `b`, and `c`', function test( t ) {
	t.throws( foo1, TypeError, 'throws an error' );
	t.throws( foo2, TypeError, 'throws an error' );
	t.end();

	function foo1() {
		// eslint-disable-next-line no-new
		new Triangular( 2.0 );
	}
	function foo2() {
		// eslint-disable-next-line no-new
		new Triangular( 2.0, 4.0 );
	}
});

tape( 'the function returns a new distribution instance (default parameters)', function test( t ) {
	var triangular = new Triangular();
	t.strictEqual( triangular instanceof Triangular, true, 'returns an instance' );
	t.end();
});

tape( 'the function returns a new distribution instance (custom parameters)', function test( t ) {
	var triangular = new Triangular( 2.0, 4.0, 3.0 );
	t.strictEqual( triangular instanceof Triangular, true, 'returns an instance' );
	t.end();
});

tape( 'the function can be invoked without the new operator', function test( t ) {
	// eslint-disable-next-line new-cap
	var triangular = Triangular();
	t.strictEqual( triangular instanceof Triangular, true, 'returns an instance' );

	// eslint-disable-next-line new-cap
	triangular = Triangular( 2.0, 4.0, 3.0 );
	t.strictEqual( triangular instanceof Triangular, true, 'returns an instance' );

	t.end();
});

tape( 'the created distribution has a property for getting and setting `a`', function test( t ) {
	var triangular;

	triangular = new Triangular( 2.0, 4.0, 3.5 );
	t.strictEqual( hasOwnProp( triangular, 'a' ), true, 'has property' );
	t.strictEqual( triangular.a, 2.0, 'returns expected value' );

	triangular.a = 3.0;
	t.strictEqual( triangular.a, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `a` to a value which is not a number primitive', function test( t ) {
	var values;
	var i;

	values = [
		'5',
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
			var triangular = new Triangular();
			triangular.a = value;
		};
	}
});

tape( 'the created distribution throws an error if one attempts to set `a` to a value which is larger than or equal to `b` or `c`', function test( t ) {
	var values;
	var i;

	values = [
		1.1,
		2.0,
		20.0
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var triangular = new Triangular();
			triangular.a = value;
		};
	}
});

tape( 'the created distribution has a property for getting and setting `b`', function test( t ) {
	var triangular;

	triangular = new Triangular( 2.0, 4.0, 2.5 );
	t.strictEqual( hasOwnProp( triangular, 'b' ), true, 'has property' );
	t.strictEqual( triangular.b, 4.0, 'returns expected value' );

	triangular.b = 3.0;
	t.strictEqual( triangular.b, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `b` to a value which is not a number primitive', function test( t ) {
	var values;
	var i;

	values = [
		'5',
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
			var triangular = new Triangular();
			triangular.b = value;
		};
	}
});

tape( 'the created distribution throws an error if one attempts to set `b` to a value which is smaller than or equal to `a` or `c`', function test( t ) {
	var values;
	var i;

	values = [
		0.0,
		-1.0,
		-20.0
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var triangular = new Triangular();
			triangular.b = value;
		};
	}
});

tape( 'the created distribution has a property for getting and setting `c`', function test( t ) {
	var triangular;

	triangular = new Triangular( 2.0, 4.0, 2.5 );
	t.strictEqual( hasOwnProp( triangular, 'c' ), true, 'has property' );
	t.strictEqual( triangular.c, 2.5, 'returns expected value' );

	triangular.c = 3.0;
	t.strictEqual( triangular.c, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `c` to a value which is not a number primitive', function test( t ) {
	var values;
	var i;

	values = [
		'5',
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
			var triangular = new Triangular();
			triangular.c = value;
		};
	}
});

tape( 'the created distribution throws an error if one attempts to set `c` to a value which is smaller than `a` or greater than `b`', function test( t ) {
	var values;
	var i;

	values = [
		-1.0,
		-20.0,
		2.0,
		20.0
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var triangular = new Triangular();
			triangular.c = value;
		};
	}
});

tape( 'the distribution prototype has a property for retrieving the distribution entropy', function test( t ) {
	var triangular;

	t.strictEqual( hasOwnProp( Triangular.prototype, 'entropy' ), true, 'has property' );

	triangular = new Triangular();
	t.strictEqual( triangular.entropy, entropy( 0.0, 1.0, 0.5 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution kurtosis', function test( t ) {
	var triangular;

	t.strictEqual( hasOwnProp( Triangular.prototype, 'kurtosis' ), true, 'has property' );

	triangular = new Triangular( 2.0, 4.0, 3.0 );
	t.strictEqual( triangular.kurtosis, kurtosis( 2.0, 4.0, 3.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mean', function test( t ) {
	var triangular;

	t.strictEqual( hasOwnProp( Triangular.prototype, 'mean' ), true, 'has property' );

	triangular = new Triangular();
	t.strictEqual( triangular.mean, mean( 0.0, 1.0, 0.5 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution median', function test( t ) {
	var triangular;

	t.strictEqual( hasOwnProp( Triangular.prototype, 'median' ), true, 'has property' );

	triangular = new Triangular( 2.0, 5.0, 4.0 );
	t.strictEqual( triangular.median, median( 2.0, 5.0, 4.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mode', function test( t ) {
	var triangular;

	t.strictEqual( hasOwnProp( Triangular.prototype, 'mode' ), true, 'has property' );

	triangular = new Triangular( 2.0, 5.0, 3.0 );
	t.strictEqual( triangular.mode, mode( 2.0, 5.0, 3.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution skewness', function test( t ) {
	var triangular;

	t.strictEqual( hasOwnProp( Triangular.prototype, 'skewness' ), true, 'has property' );

	triangular = new Triangular( 0.5, 1.0, 0.8 );
	t.strictEqual( triangular.skewness, skewness( 0.5, 1.0, 0.8 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution standard deviation', function test( t ) {
	var triangular;

	t.strictEqual( hasOwnProp( Triangular.prototype, 'stdev' ), true, 'has property' );

	triangular = new Triangular( 3.0, 5.0, 4.0 );
	t.strictEqual( triangular.stdev, stdev( 3.0, 5.0, 4.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution variance', function test( t ) {
	var triangular;

	t.strictEqual( hasOwnProp( Triangular.prototype, 'variance' ), true, 'has property' );

	triangular = new Triangular( 3.0, 5.0, 4.0 );
	t.strictEqual( triangular.variance, variance( 3.0, 5.0, 4.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a method for evaluating the cumulative distribution function (CDF)', function test( t ) {
	var triangular;
	var y;

	t.strictEqual( hasOwnProp( Triangular.prototype, 'cdf' ), true, 'has property' );
	t.strictEqual( isFunction( Triangular.prototype.cdf ), true, 'has method' );

	triangular = new Triangular();
	y = triangular.cdf( 0.5 );

	t.strictEqual( y, cdf( 0.5, 0.0, 1.0, 0.5 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the cumulative distribution function (logCDF)', function test( t ) {
	var triangular;
	var y;

	t.strictEqual( hasOwnProp( Triangular.prototype, 'logcdf' ), true, 'has property' );
	t.strictEqual( isFunction( Triangular.prototype.logcdf ), true, 'has method' );

	triangular = new Triangular();
	y = triangular.logcdf( 0.5 );

	t.strictEqual( y, logcdf( 0.5, 0.0, 1.0, 0.5 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the probability density function (PDF)', function test( t ) {
	var triangular;
	var y;

	t.strictEqual( hasOwnProp( Triangular.prototype, 'logpdf' ), true, 'has property' );
	t.strictEqual( isFunction( Triangular.prototype.logpdf ), true, 'has method' );

	triangular = new Triangular();
	y = triangular.logpdf( 0.2 );

	t.strictEqual( y, logpdf( 0.2, 0.0, 1.0, 0.5 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the probability density function (PDF)', function test( t ) {
	var triangular;
	var y;

	t.strictEqual( hasOwnProp( Triangular.prototype, 'pdf' ), true, 'has property' );
	t.strictEqual( isFunction( Triangular.prototype.pdf ), true, 'has method' );

	triangular = new Triangular();
	y = triangular.pdf( 0.2 );

	t.strictEqual( y, pdf( 0.2, 0.0, 1.0, 0.5 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the moment-generating function (MGF)', function test( t ) {
	var triangular;
	var y;

	t.strictEqual( hasOwnProp( Triangular.prototype, 'mgf' ), true, 'has property' );
	t.strictEqual( isFunction( Triangular.prototype.mgf ), true, 'has method' );

	triangular = new Triangular();
	y = triangular.mgf( 0.2 );

	t.strictEqual( y, mgf( 0.2, 0.0, 1.0, 0.5 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the quantile function', function test( t ) {
	var triangular;
	var y;

	t.strictEqual( hasOwnProp( Triangular.prototype, 'quantile' ), true, 'has property' );
	t.strictEqual( isFunction( Triangular.prototype.quantile ), true, 'has method' );

	triangular = new Triangular();
	y = triangular.quantile( 0.8 );

	t.strictEqual( y, quantile( 0.8, 0.0, 1.0, 0.5 ), 'returns expected value' );
	t.end();
});
