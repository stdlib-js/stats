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
var quantile = require( './../../../../../base/dists/rayleigh/quantile' );
var cdf = require( './../../../../../base/dists/rayleigh/cdf' );
var logcdf = require( './../../../../../base/dists/rayleigh/logcdf' );
var logpdf = require( './../../../../../base/dists/rayleigh/logpdf' );
var mgf = require( './../../../../../base/dists/rayleigh/mgf' );
var pdf = require( './../../../../../base/dists/rayleigh/pdf' );
var entropy = require( './../../../../../base/dists/rayleigh/entropy' );
var kurtosis = require( './../../../../../base/dists/rayleigh/kurtosis' );
var skewness = require( './../../../../../base/dists/rayleigh/skewness' );
var variance = require( './../../../../../base/dists/rayleigh/variance' );
var median = require( './../../../../../base/dists/rayleigh/median' );
var stdev = require( './../../../../../base/dists/rayleigh/stdev' );
var mode = require( './../../../../../base/dists/rayleigh/mode' );
var mean = require( './../../../../../base/dists/rayleigh/mean' );
var Rayleigh = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Rayleigh, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a `sigma` argument which is not a positive number', function test( t ) {
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
			new Rayleigh( value );
		};
	}
});

tape( 'the function returns a new distribution instance (default parameters)', function test( t ) {
	var rayleigh = new Rayleigh();
	t.strictEqual( rayleigh instanceof Rayleigh, true, 'returns an instance' );
	t.end();
});

tape( 'the function returns a new distribution instance (custom parameters)', function test( t ) {
	var rayleigh = new Rayleigh( 2.0 );
	t.strictEqual( rayleigh instanceof Rayleigh, true, 'returns an instance' );
	t.end();
});

tape( 'the function can be invoked without the new operator', function test( t ) {
	// eslint-disable-next-line new-cap
	var rayleigh = Rayleigh();
	t.strictEqual( rayleigh instanceof Rayleigh, true, 'returns an instance' );

	// eslint-disable-next-line new-cap
	rayleigh = Rayleigh( 2.0, 4.0 );
	t.strictEqual( rayleigh instanceof Rayleigh, true, 'returns an instance' );

	t.end();
});

tape( 'the created distribution has a property for getting and setting `sigma`', function test( t ) {
	var rayleigh;

	rayleigh = new Rayleigh( 4.0 );
	t.strictEqual( hasOwnProp( rayleigh, 'sigma' ), true, 'has property' );
	t.strictEqual( rayleigh.sigma, 4.0, 'returns expected value' );

	rayleigh.sigma = 3.0;
	t.strictEqual( rayleigh.sigma, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `sigma` to a value which is not a positive number', function test( t ) {
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
			var rayleigh = new Rayleigh();
			rayleigh.sigma = value;
		};
	}
});

tape( 'the distribution prototype has a property for retrieving the distribution entropy', function test( t ) {
	var rayleigh;

	t.strictEqual( hasOwnProp( Rayleigh.prototype, 'entropy' ), true, 'has property' );

	rayleigh = new Rayleigh();
	t.strictEqual( rayleigh.entropy, entropy( 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution kurtosis', function test( t ) {
	var rayleigh;

	t.strictEqual( hasOwnProp( Rayleigh.prototype, 'kurtosis' ), true, 'has property' );

	rayleigh = new Rayleigh( 4.5 );
	t.strictEqual( rayleigh.kurtosis, kurtosis( 4.5 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mean', function test( t ) {
	var rayleigh;

	t.strictEqual( hasOwnProp( Rayleigh.prototype, 'mean' ), true, 'has property' );

	rayleigh = new Rayleigh( 2.0 );
	t.strictEqual( rayleigh.mean, mean( 2.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution median', function test( t ) {
	var rayleigh;

	t.strictEqual( hasOwnProp( Rayleigh.prototype, 'median' ), true, 'has property' );

	rayleigh = new Rayleigh( 3.0 );
	t.strictEqual( rayleigh.median, median( 3.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mode', function test( t ) {
	var rayleigh;

	t.strictEqual( hasOwnProp( Rayleigh.prototype, 'mode' ), true, 'has property' );

	rayleigh = new Rayleigh( 3.0 );
	t.strictEqual( rayleigh.mode, mode( 3.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution skewness', function test( t ) {
	var rayleigh;

	t.strictEqual( hasOwnProp( Rayleigh.prototype, 'skewness' ), true, 'has property' );

	rayleigh = new Rayleigh( 0.5 );
	t.strictEqual( rayleigh.skewness, skewness( 0.5 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution standard deviation', function test( t ) {
	var rayleigh;

	t.strictEqual( hasOwnProp( Rayleigh.prototype, 'stdev' ), true, 'has property' );

	rayleigh = new Rayleigh( 5.0 );
	t.strictEqual( rayleigh.stdev, stdev( 5.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution variance', function test( t ) {
	var rayleigh;

	t.strictEqual( hasOwnProp( Rayleigh.prototype, 'variance' ), true, 'has property' );

	rayleigh = new Rayleigh( 5.0 );
	t.strictEqual( rayleigh.variance, variance( 5.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a method for evaluating the cumulative distribution function (CDF)', function test( t ) {
	var rayleigh;
	var y;

	t.strictEqual( hasOwnProp( Rayleigh.prototype, 'cdf' ), true, 'has property' );
	t.strictEqual( isFunction( Rayleigh.prototype.cdf ), true, 'has method' );

	rayleigh = new Rayleigh();
	y = rayleigh.cdf( 0.5 );

	t.strictEqual( y, cdf( 0.5, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the cumulative distribution function (CDF)', function test( t ) {
	var rayleigh;
	var y;

	t.strictEqual( hasOwnProp( Rayleigh.prototype, 'logcdf' ), true, 'has property' );
	t.strictEqual( isFunction( Rayleigh.prototype.logcdf ), true, 'has method' );

	rayleigh = new Rayleigh();
	y = rayleigh.logcdf( 0.5 );

	t.strictEqual( y, logcdf( 0.5, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the probability density function (PDF)', function test( t ) {
	var rayleigh;
	var y;

	t.strictEqual( hasOwnProp( Rayleigh.prototype, 'logpdf' ), true, 'has property' );
	t.strictEqual( isFunction( Rayleigh.prototype.logpdf ), true, 'has method' );

	rayleigh = new Rayleigh();
	y = rayleigh.logpdf( 0.2 );

	t.strictEqual( y, logpdf( 0.2, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the moment-generating function (MGF)', function test( t ) {
	var rayleigh;
	var y;

	t.strictEqual( hasOwnProp( Rayleigh.prototype, 'mgf' ), true, 'has property' );
	t.strictEqual( isFunction( Rayleigh.prototype.mgf ), true, 'has method' );

	rayleigh = new Rayleigh();
	y = rayleigh.mgf( 0.5 );

	t.strictEqual( y, mgf( 0.5, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the probability density function (PDF)', function test( t ) {
	var rayleigh;
	var y;

	t.strictEqual( hasOwnProp( Rayleigh.prototype, 'pdf' ), true, 'has property' );
	t.strictEqual( isFunction( Rayleigh.prototype.pdf ), true, 'has method' );

	rayleigh = new Rayleigh();
	y = rayleigh.pdf( 0.2 );

	t.strictEqual( y, pdf( 0.2, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the quantile function', function test( t ) {
	var rayleigh;
	var y;

	t.strictEqual( hasOwnProp( Rayleigh.prototype, 'quantile' ), true, 'has property' );
	t.strictEqual( isFunction( Rayleigh.prototype.quantile ), true, 'has method' );

	rayleigh = new Rayleigh();
	y = rayleigh.quantile( 0.8 );

	t.strictEqual( y, quantile( 0.8, 1.0 ), 'returns expected value' );
	t.end();
});
