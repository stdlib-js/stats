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
var quantile = require( './../../../../../base/dists/logistic/quantile' );
var logcdf = require( './../../../../../base/dists/logistic/logcdf' );
var logpdf = require( './../../../../../base/dists/logistic/logpdf' );
var cdf = require( './../../../../../base/dists/logistic/cdf' );
var mgf = require( './../../../../../base/dists/logistic/mgf' );
var pdf = require( './../../../../../base/dists/logistic/pdf' );
var kurtosis = require( './../../../../../base/dists/logistic/kurtosis' );
var skewness = require( './../../../../../base/dists/logistic/skewness' );
var stdev = require( './../../../../../base/dists/logistic/stdev' );
var variance = require( './../../../../../base/dists/logistic/variance' );
var entropy = require( './../../../../../base/dists/logistic/entropy' );
var median = require( './../../../../../base/dists/logistic/median' );
var mode = require( './../../../../../base/dists/logistic/mode' );
var mean = require( './../../../../../base/dists/logistic/mean' );
var Logistic = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Logistic, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a `mu` argument which is not a number primitive', function test( t ) {
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
			new Logistic( value, 1.0 );
		};
	}
});

tape( 'the function throws an error if provided a `s` argument which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
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
			new Logistic( 2.0, value );
		};
	}
});

tape( 'if provided arguments, the function requires both `mu` and `s`', function test( t ) {
	t.throws( foo, TypeError, 'throws an error' );
	t.end();

	function foo() {
		// eslint-disable-next-line no-new
		new Logistic( 2.0 );
	}
});

tape( 'the function returns a new distribution instance (default parameters)', function test( t ) {
	var logistic = new Logistic();
	t.strictEqual( logistic instanceof Logistic, true, 'returns an instance' );
	t.end();
});

tape( 'the function returns a new distribution instance (custom parameters)', function test( t ) {
	var logistic = new Logistic( 2.0, 4.0 );
	t.strictEqual( logistic instanceof Logistic, true, 'returns an instance' );
	t.end();
});

tape( 'the function can be invoked without the new operator', function test( t ) {
	// eslint-disable-next-line new-cap
	var logistic = Logistic();
	t.strictEqual( logistic instanceof Logistic, true, 'returns an instance' );

	// eslint-disable-next-line new-cap
	logistic = Logistic( 2.0, 4.0 );
	t.strictEqual( logistic instanceof Logistic, true, 'returns an instance' );

	t.end();
});

tape( 'the created distribution has a property for getting and setting `mu`', function test( t ) {
	var logistic;

	logistic = new Logistic( 2.0, 4.0 );
	t.strictEqual( hasOwnProp( logistic, 'mu' ), true, 'has property' );
	t.strictEqual( logistic.mu, 2.0, 'returns expected value' );

	logistic.mu = 3.0;
	t.strictEqual( logistic.mu, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `mu` to a value which is not a number primitive', function test( t ) {
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
			var logistic = new Logistic();
			logistic.mu = value;
		};
	}
});

tape( 'the created distribution has a property for getting and setting `s`', function test( t ) {
	var logistic;

	logistic = new Logistic( 2.0, 4.0 );
	t.strictEqual( hasOwnProp( logistic, 's' ), true, 'has property' );
	t.strictEqual( logistic.s, 4.0, 'returns expected value' );

	logistic.s = 3.0;
	t.strictEqual( logistic.s, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `s` to a value which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
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
			var logistic = new Logistic();
			logistic.s = value;
		};
	}
});

tape( 'the distribution prototype has a property for retrieving the distribution entropy', function test( t ) {
	var logistic;

	t.strictEqual( hasOwnProp( Logistic.prototype, 'entropy' ), true, 'has property' );

	logistic = new Logistic();
	t.strictEqual( logistic.entropy, entropy( 0.0, 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution kurtosis', function test( t ) {
	var logistic;

	t.strictEqual( hasOwnProp( Logistic.prototype, 'kurtosis' ), true, 'has property' );

	logistic = new Logistic( 2.0, 4.0 );
	t.strictEqual( logistic.kurtosis, kurtosis( 2.0, 4.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mean', function test( t ) {
	var logistic;

	t.strictEqual( hasOwnProp( Logistic.prototype, 'mean' ), true, 'has property' );

	logistic = new Logistic();
	t.strictEqual( logistic.mean, mean( 0.0, 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution median', function test( t ) {
	var logistic;

	t.strictEqual( hasOwnProp( Logistic.prototype, 'median' ), true, 'has property' );

	logistic = new Logistic( 5.0, 2.0 );
	t.strictEqual( logistic.median, median( 5.0, 2.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mode', function test( t ) {
	var logistic;

	t.strictEqual( hasOwnProp( Logistic.prototype, 'mode' ), true, 'has property' );

	logistic = new Logistic( 2.0, 3.0 );
	t.strictEqual( logistic.mode, mode( 2.0, 3.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution skewness', function test( t ) {
	var logistic;

	t.strictEqual( hasOwnProp( Logistic.prototype, 'skewness' ), true, 'has property' );

	logistic = new Logistic( 0.5, 0.5 );
	t.strictEqual( logistic.skewness, skewness( 0.5, 0.5 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution standard deviation', function test( t ) {
	var logistic;

	t.strictEqual( hasOwnProp( Logistic.prototype, 'stdev' ), true, 'has property' );

	logistic = new Logistic( 3.0, 1.0 );
	t.strictEqual( logistic.stdev, stdev( 3.0, 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution variance', function test( t ) {
	var logistic;

	t.strictEqual( hasOwnProp( Logistic.prototype, 'variance' ), true, 'has property' );

	logistic = new Logistic( 3.0, 1.0 );
	t.strictEqual( logistic.variance, variance( 3.0, 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a method for evaluating the cumulative distribution function (CDF)', function test( t ) {
	var logistic;
	var y;

	t.strictEqual( hasOwnProp( Logistic.prototype, 'cdf' ), true, 'has property' );
	t.strictEqual( isFunction( Logistic.prototype.cdf ), true, 'has method' );

	logistic = new Logistic();
	y = logistic.cdf( 0.5 );

	t.strictEqual( y, cdf( 0.5, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the cumulative distribution function (logCDF)', function test( t ) {
	var logistic;
	var y;

	t.strictEqual( hasOwnProp( Logistic.prototype, 'logcdf' ), true, 'has property' );
	t.strictEqual( isFunction( Logistic.prototype.logcdf ), true, 'has method' );

	logistic = new Logistic();
	y = logistic.logcdf( 0.5 );

	t.strictEqual( y, logcdf( 0.5, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the probability density function (logPDF)', function test( t ) {
	var logistic;
	var y;

	t.strictEqual( hasOwnProp( Logistic.prototype, 'logpdf' ), true, 'has property' );
	t.strictEqual( isFunction( Logistic.prototype.logpdf ), true, 'has method' );

	logistic = new Logistic();
	y = logistic.logpdf( 0.5 );

	t.strictEqual( y, logpdf( 0.5, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the moment-generating function (MGF)', function test( t ) {
	var logistic;
	var y;

	t.strictEqual( hasOwnProp( Logistic.prototype, 'mgf' ), true, 'has property' );
	t.strictEqual( isFunction( Logistic.prototype.mgf ), true, 'has method' );

	logistic = new Logistic();
	y = logistic.mgf( 0.5 );

	t.strictEqual( y, mgf( 0.5, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the probability density function (PDF)', function test( t ) {
	var logistic;
	var y;

	t.strictEqual( hasOwnProp( Logistic.prototype, 'pdf' ), true, 'has property' );
	t.strictEqual( isFunction( Logistic.prototype.pdf ), true, 'has method' );

	logistic = new Logistic();
	y = logistic.pdf( 0.2 );

	t.strictEqual( y, pdf( 0.2, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the quantile function', function test( t ) {
	var logistic;
	var y;

	t.strictEqual( hasOwnProp( Logistic.prototype, 'quantile' ), true, 'has property' );
	t.strictEqual( isFunction( Logistic.prototype.quantile ), true, 'has method' );

	logistic = new Logistic();
	y = logistic.quantile( 0.8 );

	t.strictEqual( y, quantile( 0.8, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});
