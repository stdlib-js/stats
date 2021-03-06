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
var quantile = require( './../../../../../base/dists/exponential/quantile' );
var cdf = require( './../../../../../base/dists/exponential/cdf' );
var logcdf = require( './../../../../../base/dists/exponential/logcdf' );
var logpdf = require( './../../../../../base/dists/exponential/logpdf' );
var mgf = require( './../../../../../base/dists/exponential/mgf' );
var pdf = require( './../../../../../base/dists/exponential/pdf' );
var entropy = require( './../../../../../base/dists/exponential/entropy' );
var kurtosis = require( './../../../../../base/dists/exponential/kurtosis' );
var skewness = require( './../../../../../base/dists/exponential/skewness' );
var stdev = require( './../../../../../base/dists/exponential/stdev' );
var variance = require( './../../../../../base/dists/exponential/variance' );
var median = require( './../../../../../base/dists/exponential/median' );
var mode = require( './../../../../../base/dists/exponential/mode' );
var mean = require( './../../../../../base/dists/exponential/mean' );
var Exponential = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Exponential, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a `lambda` argument which is not a positive number', function test( t ) {
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
			new Exponential( value );
		};
	}
});

tape( 'the function returns a new distribution instance (default parameters)', function test( t ) {
	var exponential = new Exponential();
	t.strictEqual( exponential instanceof Exponential, true, 'returns an instance' );
	t.end();
});

tape( 'the function returns a new distribution instance (custom parameters)', function test( t ) {
	var exponential = new Exponential( 2.0 );
	t.strictEqual( exponential instanceof Exponential, true, 'returns an instance' );
	t.end();
});

tape( 'the function can be invoked without the new operator', function test( t ) {
	// eslint-disable-next-line new-cap
	var exponential = Exponential();
	t.strictEqual( exponential instanceof Exponential, true, 'returns an instance' );

	// eslint-disable-next-line new-cap
	exponential = Exponential( 2.0, 4.0 );
	t.strictEqual( exponential instanceof Exponential, true, 'returns an instance' );

	t.end();
});

tape( 'the created distribution has a property for getting and setting `lambda`', function test( t ) {
	var exponential;

	exponential = new Exponential( 4.0 );
	t.strictEqual( hasOwnProp( exponential, 'lambda' ), true, 'has property' );
	t.strictEqual( exponential.lambda, 4.0, 'returns expected value' );

	exponential.lambda = 3.0;
	t.strictEqual( exponential.lambda, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `lambda` to a value which is not a positive number', function test( t ) {
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
			var exponential = new Exponential();
			exponential.lambda = value;
		};
	}
});

tape( 'the distribution prototype has a property for retrieving the distribution entropy', function test( t ) {
	var exponential;

	t.strictEqual( hasOwnProp( Exponential.prototype, 'entropy' ), true, 'has property' );

	exponential = new Exponential();
	t.strictEqual( exponential.entropy, entropy( 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution kurtosis', function test( t ) {
	var exponential;

	t.strictEqual( hasOwnProp( Exponential.prototype, 'kurtosis' ), true, 'has property' );

	exponential = new Exponential( 4.5 );
	t.strictEqual( exponential.kurtosis, kurtosis( 4.5 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mean', function test( t ) {
	var exponential;

	t.strictEqual( hasOwnProp( Exponential.prototype, 'mean' ), true, 'has property' );

	exponential = new Exponential( 2.0 );
	t.strictEqual( exponential.mean, mean( 2.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution median', function test( t ) {
	var exponential;

	t.strictEqual( hasOwnProp( Exponential.prototype, 'median' ), true, 'has property' );

	exponential = new Exponential( 3.0 );
	t.strictEqual( exponential.median, median( 3.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mode', function test( t ) {
	var exponential;

	t.strictEqual( hasOwnProp( Exponential.prototype, 'mode' ), true, 'has property' );

	exponential = new Exponential( 3.0 );
	t.strictEqual( exponential.mode, mode( 3.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution skewness', function test( t ) {
	var exponential;

	t.strictEqual( hasOwnProp( Exponential.prototype, 'skewness' ), true, 'has property' );

	exponential = new Exponential( 0.5 );
	t.strictEqual( exponential.skewness, skewness( 0.5 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution standard deviation', function test( t ) {
	var exponential;

	t.strictEqual( hasOwnProp( Exponential.prototype, 'stdev' ), true, 'has property' );

	exponential = new Exponential( 5.0 );
	t.strictEqual( exponential.stdev, stdev( 5.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution variance', function test( t ) {
	var exponential;

	t.strictEqual( hasOwnProp( Exponential.prototype, 'variance' ), true, 'has property' );

	exponential = new Exponential( 5.0 );
	t.strictEqual( exponential.variance, variance( 5.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a method for evaluating the cumulative distribution function (CDF)', function test( t ) {
	var exponential;
	var y;

	t.strictEqual( hasOwnProp( Exponential.prototype, 'cdf' ), true, 'has property' );
	t.strictEqual( isFunction( Exponential.prototype.cdf ), true, 'has method' );

	exponential = new Exponential();
	y = exponential.cdf( 0.5 );

	t.strictEqual( y, cdf( 0.5, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the cumulative distribution function (CDF)', function test( t ) {
	var exponential;
	var y;

	t.strictEqual( hasOwnProp( Exponential.prototype, 'logcdf' ), true, 'has property' );
	t.strictEqual( isFunction( Exponential.prototype.logcdf ), true, 'has method' );

	exponential = new Exponential();
	y = exponential.logcdf( 0.5 );

	t.strictEqual( y, logcdf( 0.5, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the probability density function (PDF)', function test( t ) {
	var exponential;
	var y;

	t.strictEqual( hasOwnProp( Exponential.prototype, 'logpdf' ), true, 'has property' );
	t.strictEqual( isFunction( Exponential.prototype.logpdf ), true, 'has method' );

	exponential = new Exponential();
	y = exponential.logpdf( 0.2 );

	t.strictEqual( y, logpdf( 0.2, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the moment-generating function (MGF)', function test( t ) {
	var exponential;
	var y;

	t.strictEqual( hasOwnProp( Exponential.prototype, 'mgf' ), true, 'has property' );
	t.strictEqual( isFunction( Exponential.prototype.mgf ), true, 'has method' );

	exponential = new Exponential();
	y = exponential.mgf( 0.5 );

	t.strictEqual( y, mgf( 0.5, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the probability density function (PDF)', function test( t ) {
	var exponential;
	var y;

	t.strictEqual( hasOwnProp( Exponential.prototype, 'pdf' ), true, 'has property' );
	t.strictEqual( isFunction( Exponential.prototype.pdf ), true, 'has method' );

	exponential = new Exponential();
	y = exponential.pdf( 0.2 );

	t.strictEqual( y, pdf( 0.2, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the quantile function', function test( t ) {
	var exponential;
	var y;

	t.strictEqual( hasOwnProp( Exponential.prototype, 'quantile' ), true, 'has property' );
	t.strictEqual( isFunction( Exponential.prototype.quantile ), true, 'has method' );

	exponential = new Exponential();
	y = exponential.quantile( 0.8 );

	t.strictEqual( y, quantile( 0.8, 1.0 ), 'returns expected value' );
	t.end();
});
