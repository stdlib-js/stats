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
var quantile = require( './../../../../../base/dists/poisson/quantile' );
var logpmf = require( './../../../../../base/dists/poisson/logpmf' );
var cdf = require( './../../../../../base/dists/poisson/cdf' );
var mgf = require( './../../../../../base/dists/poisson/mgf' );
var pmf = require( './../../../../../base/dists/poisson/pmf' );
var entropy = require( './../../../../../base/dists/poisson/entropy' );
var kurtosis = require( './../../../../../base/dists/poisson/kurtosis' );
var skewness = require( './../../../../../base/dists/poisson/skewness' );
var stdev = require( './../../../../../base/dists/poisson/stdev' );
var variance = require( './../../../../../base/dists/poisson/variance' );
var median = require( './../../../../../base/dists/poisson/median' );
var mode = require( './../../../../../base/dists/poisson/mode' );
var mean = require( './../../../../../base/dists/poisson/mean' );
var Poisson = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Poisson, 'function', 'main export is a function' );
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
			new Poisson( value );
		};
	}
});

tape( 'the function returns a new distribution instance (default parameters)', function test( t ) {
	var poisson = new Poisson();
	t.strictEqual( poisson instanceof Poisson, true, 'returns an instance' );
	t.end();
});

tape( 'the function returns a new distribution instance (custom parameters)', function test( t ) {
	var poisson = new Poisson( 2.0 );
	t.strictEqual( poisson instanceof Poisson, true, 'returns an instance' );
	t.end();
});

tape( 'the function can be invoked without the new operator', function test( t ) {
	// eslint-disable-next-line new-cap
	var poisson = Poisson();
	t.strictEqual( poisson instanceof Poisson, true, 'returns an instance' );

	// eslint-disable-next-line new-cap
	poisson = Poisson( 2.0, 4.0 );
	t.strictEqual( poisson instanceof Poisson, true, 'returns an instance' );

	t.end();
});

tape( 'the created distribution has a property for getting and setting `lambda`', function test( t ) {
	var poisson;

	poisson = new Poisson( 4.0 );
	t.strictEqual( hasOwnProp( poisson, 'lambda' ), true, 'has property' );
	t.strictEqual( poisson.lambda, 4.0, 'returns expected value' );

	poisson.lambda = 3.0;
	t.strictEqual( poisson.lambda, 3.0, 'returns expected value' );

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
			var poisson = new Poisson();
			poisson.lambda = value;
		};
	}
});

tape( 'the distribution prototype has a property for retrieving the distribution entropy', function test( t ) {
	var poisson;

	t.strictEqual( hasOwnProp( Poisson.prototype, 'entropy' ), true, 'has property' );

	poisson = new Poisson();
	t.strictEqual( poisson.entropy, entropy( 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution kurtosis', function test( t ) {
	var poisson;

	t.strictEqual( hasOwnProp( Poisson.prototype, 'kurtosis' ), true, 'has property' );

	poisson = new Poisson( 4.5 );
	t.strictEqual( poisson.kurtosis, kurtosis( 4.5 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mean', function test( t ) {
	var poisson;

	t.strictEqual( hasOwnProp( Poisson.prototype, 'mean' ), true, 'has property' );

	poisson = new Poisson( 2.0 );
	t.strictEqual( poisson.mean, mean( 2.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution median', function test( t ) {
	var poisson;

	t.strictEqual( hasOwnProp( Poisson.prototype, 'median' ), true, 'has property' );

	poisson = new Poisson( 3.0 );
	t.strictEqual( poisson.median, median( 3.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mode', function test( t ) {
	var poisson;

	t.strictEqual( hasOwnProp( Poisson.prototype, 'mode' ), true, 'has property' );

	poisson = new Poisson( 3.0 );
	t.strictEqual( poisson.mode, mode( 3.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution skewness', function test( t ) {
	var poisson;

	t.strictEqual( hasOwnProp( Poisson.prototype, 'skewness' ), true, 'has property' );

	poisson = new Poisson( 0.5 );
	t.strictEqual( poisson.skewness, skewness( 0.5 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution standard deviation', function test( t ) {
	var poisson;

	t.strictEqual( hasOwnProp( Poisson.prototype, 'stdev' ), true, 'has property' );

	poisson = new Poisson( 5.0 );
	t.strictEqual( poisson.stdev, stdev( 5.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution variance', function test( t ) {
	var poisson;

	t.strictEqual( hasOwnProp( Poisson.prototype, 'variance' ), true, 'has property' );

	poisson = new Poisson( 5.0 );
	t.strictEqual( poisson.variance, variance( 5.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a method for evaluating the cumulative distribution function (CDF)', function test( t ) {
	var poisson;
	var y;

	t.strictEqual( hasOwnProp( Poisson.prototype, 'cdf' ), true, 'has property' );
	t.strictEqual( isFunction( Poisson.prototype.cdf ), true, 'has method' );

	poisson = new Poisson();
	y = poisson.cdf( 0.5 );

	t.strictEqual( y, cdf( 0.5, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the probability mass function (PMF)', function test( t ) {
	var poisson;
	var y;

	t.strictEqual( hasOwnProp( Poisson.prototype, 'logpmf' ), true, 'has property' );
	t.strictEqual( isFunction( Poisson.prototype.logpmf ), true, 'has method' );

	poisson = new Poisson();
	y = poisson.logpmf( 3.0 );

	t.strictEqual( y, logpmf( 3.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the moment-generating function (MGF)', function test( t ) {
	var poisson;
	var y;

	t.strictEqual( hasOwnProp( Poisson.prototype, 'mgf' ), true, 'has property' );
	t.strictEqual( isFunction( Poisson.prototype.mgf ), true, 'has method' );

	poisson = new Poisson();
	y = poisson.mgf( 0.5 );

	t.strictEqual( y, mgf( 0.5, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the probability mass function (PMF)', function test( t ) {
	var poisson;
	var y;

	t.strictEqual( hasOwnProp( Poisson.prototype, 'pmf' ), true, 'has property' );
	t.strictEqual( isFunction( Poisson.prototype.pmf ), true, 'has method' );

	poisson = new Poisson();
	y = poisson.pmf( 3.0 );

	t.strictEqual( y, pmf( 3.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the quantile function', function test( t ) {
	var poisson;
	var y;

	t.strictEqual( hasOwnProp( Poisson.prototype, 'quantile' ), true, 'has property' );
	t.strictEqual( isFunction( Poisson.prototype.quantile ), true, 'has method' );

	poisson = new Poisson();
	y = poisson.quantile( 0.8 );

	t.strictEqual( y, quantile( 0.8, 1.0 ), 'returns expected value' );
	t.end();
});
