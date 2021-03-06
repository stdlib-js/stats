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
var quantile = require( './../../../../../base/dists/gamma/quantile' );
var logcdf = require( './../../../../../base/dists/gamma/logcdf' );
var logpdf = require( './../../../../../base/dists/gamma/logpdf' );
var cdf = require( './../../../../../base/dists/gamma/cdf' );
var mgf = require( './../../../../../base/dists/gamma/mgf' );
var pdf = require( './../../../../../base/dists/gamma/pdf' );
var entropy = require( './../../../../../base/dists/gamma/entropy' );
var kurtosis = require( './../../../../../base/dists/gamma/kurtosis' );
var skewness = require( './../../../../../base/dists/gamma/skewness' );
var variance = require( './../../../../../base/dists/gamma/variance' );
var stdev = require( './../../../../../base/dists/gamma/stdev' );
var mode = require( './../../../../../base/dists/gamma/mode' );
var mean = require( './../../../../../base/dists/gamma/mean' );
var Gamma = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Gamma, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an `alpha` argument which is not a positive number', function test( t ) {
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
			new Gamma( value, 2.0 );
		};
	}
});

tape( 'the function throws an error if provided a `beta` argument which is not a positive number', function test( t ) {
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
			new Gamma( 2.0, value );
		};
	}
});

tape( 'if provided arguments, the function requires both `alpha` and `beta`', function test( t ) {
	t.throws( foo, TypeError, 'throws an error' );
	t.end();

	function foo() {
		// eslint-disable-next-line no-new
		new Gamma( 2.0 );
	}
});

tape( 'the function returns a new distribution instance (default parameters)', function test( t ) {
	var gamma = new Gamma();
	t.strictEqual( gamma instanceof Gamma, true, 'returns an instance' );
	t.end();
});

tape( 'the function returns a new distribution instance (custom parameters)', function test( t ) {
	var gamma = new Gamma( 2.0, 4.0 );
	t.strictEqual( gamma instanceof Gamma, true, 'returns an instance' );
	t.end();
});

tape( 'the function can be invoked without the new operator', function test( t ) {
	// eslint-disable-next-line new-cap
	var gamma = Gamma();
	t.strictEqual( gamma instanceof Gamma, true, 'returns an instance' );

	// eslint-disable-next-line new-cap
	gamma = Gamma( 2.0, 4.0 );
	t.strictEqual( gamma instanceof Gamma, true, 'returns an instance' );

	t.end();
});

tape( 'the created distribution has a property for getting and setting `alpha`', function test( t ) {
	var gamma;

	gamma = new Gamma( 2.0, 4.0 );
	t.strictEqual( hasOwnProp( gamma, 'alpha' ), true, 'has property' );
	t.strictEqual( gamma.alpha, 2.0, 'returns expected value' );

	gamma.alpha = 3.0;
	t.strictEqual( gamma.alpha, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `alpha` to a value which is not a positive number', function test( t ) {
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
			var gamma = new Gamma();
			gamma.alpha = value;
		};
	}
});

tape( 'the created distribution has a property for getting and setting `beta`', function test( t ) {
	var gamma;

	gamma = new Gamma( 2.0, 4.0 );
	t.strictEqual( hasOwnProp( gamma, 'beta' ), true, 'has property' );
	t.strictEqual( gamma.beta, 4.0, 'returns expected value' );

	gamma.beta = 3.0;
	t.strictEqual( gamma.beta, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `beta` to a value which is not a positive number', function test( t ) {
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
			var gamma = new Gamma();
			gamma.beta = value;
		};
	}
});

tape( 'the distribution prototype has a property for retrieving the distribution entropy', function test( t ) {
	var gamma;

	t.strictEqual( hasOwnProp( Gamma.prototype, 'entropy' ), true, 'has property' );

	gamma = new Gamma();
	t.strictEqual( gamma.entropy, entropy( 1.0, 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution kurtosis', function test( t ) {
	var gamma;

	t.strictEqual( hasOwnProp( Gamma.prototype, 'kurtosis' ), true, 'has property' );

	gamma = new Gamma( 2.0, 4.5 );
	t.strictEqual( gamma.kurtosis, kurtosis( 2.0, 4.5 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mean', function test( t ) {
	var gamma;

	t.strictEqual( hasOwnProp( Gamma.prototype, 'mean' ), true, 'has property' );

	gamma = new Gamma( 2.0, 2.0 );
	t.strictEqual( gamma.mean, mean( 2.0, 2.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mode', function test( t ) {
	var gamma;

	t.strictEqual( hasOwnProp( Gamma.prototype, 'mode' ), true, 'has property' );

	gamma = new Gamma( 2.0, 3.0 );
	t.strictEqual( gamma.mode, mode( 2.0, 3.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution skewness', function test( t ) {
	var gamma;

	t.strictEqual( hasOwnProp( Gamma.prototype, 'skewness' ), true, 'has property' );

	gamma = new Gamma( 0.5, 3.2 );
	t.strictEqual( gamma.skewness, skewness( 0.5, 3.2 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution standard deviation', function test( t ) {
	var gamma;

	t.strictEqual( hasOwnProp( Gamma.prototype, 'stdev' ), true, 'has property' );

	gamma = new Gamma( 3.0, 5.0 );
	t.strictEqual( gamma.stdev, stdev( 3.0, 5.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution variance', function test( t ) {
	var gamma;

	t.strictEqual( hasOwnProp( Gamma.prototype, 'variance' ), true, 'has property' );

	gamma = new Gamma( 3.0, 5.0 );
	t.strictEqual( gamma.variance, variance( 3.0, 5.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a method for evaluating the cumulative distribution function (CDF)', function test( t ) {
	var gamma;
	var y;

	t.strictEqual( hasOwnProp( Gamma.prototype, 'cdf' ), true, 'has property' );
	t.strictEqual( isFunction( Gamma.prototype.cdf ), true, 'has method' );

	gamma = new Gamma();
	y = gamma.cdf( 0.5 );

	t.strictEqual( y, cdf( 0.5, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the cumulative distribution function (CDF)', function test( t ) {
	var gamma;
	var y;

	t.strictEqual( hasOwnProp( Gamma.prototype, 'logcdf' ), true, 'has property' );
	t.strictEqual( isFunction( Gamma.prototype.logcdf ), true, 'has method' );

	gamma = new Gamma();
	y = gamma.logcdf( 0.5 );

	t.strictEqual( y, logcdf( 0.5, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the probability density function (logPDF)', function test( t ) {
	var gamma;
	var y;

	t.strictEqual( hasOwnProp( Gamma.prototype, 'logpdf' ), true, 'has property' );
	t.strictEqual( isFunction( Gamma.prototype.logpdf ), true, 'has method' );

	gamma = new Gamma();
	y = gamma.logpdf( 0.5 );

	t.strictEqual( y, logpdf( 0.5, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the moment-generating function (MGF)', function test( t ) {
	var gamma;
	var y;

	t.strictEqual( hasOwnProp( Gamma.prototype, 'mgf' ), true, 'has property' );
	t.strictEqual( isFunction( Gamma.prototype.mgf ), true, 'has method' );

	gamma = new Gamma();
	y = gamma.mgf( 0.5 );

	t.strictEqual( y, mgf( 0.5, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the probability density function (PDF)', function test( t ) {
	var gamma;
	var y;

	t.strictEqual( hasOwnProp( Gamma.prototype, 'pdf' ), true, 'has property' );
	t.strictEqual( isFunction( Gamma.prototype.pdf ), true, 'has method' );

	gamma = new Gamma();
	y = gamma.pdf( 0.2 );

	t.strictEqual( y, pdf( 0.2, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the quantile function', function test( t ) {
	var gamma;
	var y;

	t.strictEqual( hasOwnProp( Gamma.prototype, 'quantile' ), true, 'has property' );
	t.strictEqual( isFunction( Gamma.prototype.quantile ), true, 'has method' );

	gamma = new Gamma();
	y = gamma.quantile( 0.8 );

	t.strictEqual( y, quantile( 0.8, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});
