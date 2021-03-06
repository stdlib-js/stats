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
var quantile = require( './../../../../../base/dists/chi/quantile' );
var cdf = require( './../../../../../base/dists/chi/cdf' );
var logpdf = require( './../../../../../base/dists/chi/logpdf' );
var pdf = require( './../../../../../base/dists/chi/pdf' );
var entropy = require( './../../../../../base/dists/chi/entropy' );
var kurtosis = require( './../../../../../base/dists/chi/kurtosis' );
var skewness = require( './../../../../../base/dists/chi/skewness' );
var stdev = require( './../../../../../base/dists/chi/stdev' );
var variance = require( './../../../../../base/dists/chi/variance' );
var mode = require( './../../../../../base/dists/chi/mode' );
var mean = require( './../../../../../base/dists/chi/mean' );
var Chi = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Chi, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a `k` argument which is not a positive number', function test( t ) {
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
			new Chi( value );
		};
	}
});

tape( 'the function returns a new distribution instance (default parameters)', function test( t ) {
	var chi = new Chi();
	t.strictEqual( chi instanceof Chi, true, 'returns an instance' );
	t.end();
});

tape( 'the function returns a new distribution instance (custom parameters)', function test( t ) {
	var chi = new Chi( 2.0 );
	t.strictEqual( chi instanceof Chi, true, 'returns an instance' );
	t.end();
});

tape( 'the function can be invoked without the new operator', function test( t ) {
	// eslint-disable-next-line new-cap
	var chi = Chi();
	t.strictEqual( chi instanceof Chi, true, 'returns an instance' );

	// eslint-disable-next-line new-cap
	chi = Chi( 2.0, 4.0 );
	t.strictEqual( chi instanceof Chi, true, 'returns an instance' );

	t.end();
});

tape( 'the created distribution has a property for getting and setting `k`', function test( t ) {
	var chi;

	chi = new Chi( 4.0 );
	t.strictEqual( hasOwnProp( chi, 'k' ), true, 'has property' );
	t.strictEqual( chi.k, 4.0, 'returns expected value' );

	chi.k = 3.0;
	t.strictEqual( chi.k, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `k` to a value which is not a positive number', function test( t ) {
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
			var chi = new Chi();
			chi.k = value;
		};
	}
});

tape( 'the distribution prototype has a property for retrieving the distribution entropy', function test( t ) {
	var chi;

	t.strictEqual( hasOwnProp( Chi.prototype, 'entropy' ), true, 'has property' );

	chi = new Chi();
	t.strictEqual( chi.entropy, entropy( 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution kurtosis', function test( t ) {
	var chi;

	t.strictEqual( hasOwnProp( Chi.prototype, 'kurtosis' ), true, 'has property' );

	chi = new Chi( 4.5 );
	t.strictEqual( chi.kurtosis, kurtosis( 4.5 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mean', function test( t ) {
	var chi;

	t.strictEqual( hasOwnProp( Chi.prototype, 'mean' ), true, 'has property' );

	chi = new Chi( 2.0 );
	t.strictEqual( chi.mean, mean( 2.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mode', function test( t ) {
	var chi;

	t.strictEqual( hasOwnProp( Chi.prototype, 'mode' ), true, 'has property' );

	chi = new Chi( 3.0 );
	t.strictEqual( chi.mode, mode( 3.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution skewness', function test( t ) {
	var chi;

	t.strictEqual( hasOwnProp( Chi.prototype, 'skewness' ), true, 'has property' );

	chi = new Chi( 0.5 );
	t.strictEqual( chi.skewness, skewness( 0.5 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution standard deviation', function test( t ) {
	var chi;

	t.strictEqual( hasOwnProp( Chi.prototype, 'stdev' ), true, 'has property' );

	chi = new Chi( 0.5 );
	t.strictEqual( chi.stdev, stdev( 0.5 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution variance', function test( t ) {
	var chi;

	t.strictEqual( hasOwnProp( Chi.prototype, 'variance' ), true, 'has property' );

	chi = new Chi( 5.0 );
	t.strictEqual( chi.variance, variance( 5.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a method for evaluating the cumulative distribution function (CDF)', function test( t ) {
	var chi;
	var y;

	t.strictEqual( hasOwnProp( Chi.prototype, 'cdf' ), true, 'has property' );
	t.strictEqual( isFunction( Chi.prototype.cdf ), true, 'has method' );

	chi = new Chi();
	y = chi.cdf( 0.5 );

	t.strictEqual( y, cdf( 0.5, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the probability density function (PDF)', function test( t ) {
	var chi;
	var y;

	t.strictEqual( hasOwnProp( Chi.prototype, 'logpdf' ), true, 'has property' );
	t.strictEqual( isFunction( Chi.prototype.logpdf ), true, 'has method' );

	chi = new Chi();
	y = chi.logpdf( 0.2 );

	t.strictEqual( y, logpdf( 0.2, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the probability density function (PDF)', function test( t ) {
	var chi;
	var y;

	t.strictEqual( hasOwnProp( Chi.prototype, 'pdf' ), true, 'has property' );
	t.strictEqual( isFunction( Chi.prototype.pdf ), true, 'has method' );

	chi = new Chi();
	y = chi.pdf( 0.2 );

	t.strictEqual( y, pdf( 0.2, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the quantile function', function test( t ) {
	var chi;
	var y;

	t.strictEqual( hasOwnProp( Chi.prototype, 'quantile' ), true, 'has property' );
	t.strictEqual( isFunction( Chi.prototype.quantile ), true, 'has method' );

	chi = new Chi();
	y = chi.quantile( 0.8 );

	t.strictEqual( y, quantile( 0.8, 1.0 ), 'returns expected value' );
	t.end();
});
