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
var quantile = require( './../../../../../base/dists/t/quantile' );
var cdf = require( './../../../../../base/dists/t/cdf' );
var logcdf = require( './../../../../../base/dists/t/logcdf' );
var logpdf = require( './../../../../../base/dists/t/logpdf' );
var pdf = require( './../../../../../base/dists/t/pdf' );
var entropy = require( './../../../../../base/dists/t/entropy' );
var kurtosis = require( './../../../../../base/dists/t/kurtosis' );
var skewness = require( './../../../../../base/dists/t/skewness' );
var variance = require( './../../../../../base/dists/t/variance' );
var median = require( './../../../../../base/dists/t/median' );
var stdev = require( './../../../../../base/dists/t/stdev' );
var mode = require( './../../../../../base/dists/t/mode' );
var mean = require( './../../../../../base/dists/t/mean' );
var T = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof T, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a `v` argument which is not a positive number', function test( t ) {
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
			new T( value );
		};
	}
});

tape( 'the function returns a new distribution instance (default parameters)', function test( t ) {
	var dist = new T();
	t.strictEqual( dist instanceof T, true, 'returns an instance' );
	t.end();
});

tape( 'the function returns a new distribution instance (custom parameters)', function test( t ) {
	var dist = new T( 2.0 );
	t.strictEqual( dist instanceof T, true, 'returns an instance' );
	t.end();
});

tape( 'the function can be invoked without the new operator', function test( t ) {
	// eslint-disable-next-line new-cap
	var dist = T();
	t.strictEqual( dist instanceof T, true, 'returns an instance' );

	// eslint-disable-next-line new-cap
	dist = T( 2.0, 4.0 );
	t.strictEqual( dist instanceof T, true, 'returns an instance' );

	t.end();
});

tape( 'the created distribution has a property for getting and setting `v`', function test( t ) {
	var dist;

	dist = new T( 4.0 );
	t.strictEqual( hasOwnProp( dist, 'v' ), true, 'has property' );
	t.strictEqual( dist.v, 4.0, 'returns expected value' );

	dist.v = 3.0;
	t.strictEqual( dist.v, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `v` to a value which is not a positive number', function test( t ) {
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
			var dist = new T();
			dist.v = value;
		};
	}
});

tape( 'the distribution prototype has a property for retrieving the distribution entropy', function test( t ) {
	var dist;

	t.strictEqual( hasOwnProp( T.prototype, 'entropy' ), true, 'has property' );

	dist = new T();
	t.strictEqual( dist.entropy, entropy( 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution kurtosis', function test( t ) {
	var dist;

	t.strictEqual( hasOwnProp( T.prototype, 'kurtosis' ), true, 'has property' );

	dist = new T( 4.5 );
	t.strictEqual( dist.kurtosis, kurtosis( 4.5 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mean', function test( t ) {
	var dist;

	t.strictEqual( hasOwnProp( T.prototype, 'mean' ), true, 'has property' );

	dist = new T( 2.0 );
	t.strictEqual( dist.mean, mean( 2.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution median', function test( t ) {
	var dist;

	t.strictEqual( hasOwnProp( T.prototype, 'median' ), true, 'has property' );

	dist = new T( 3.0 );
	t.strictEqual( dist.median, median( 3.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mode', function test( t ) {
	var dist;

	t.strictEqual( hasOwnProp( T.prototype, 'mode' ), true, 'has property' );

	dist = new T( 3.0 );
	t.strictEqual( dist.mode, mode( 3.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution skewness', function test( t ) {
	var dist;

	t.strictEqual( hasOwnProp( T.prototype, 'skewness' ), true, 'has property' );

	dist = new T( 5.0 );
	t.strictEqual( dist.skewness, skewness( 5.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution standard deviation', function test( t ) {
	var dist;

	t.strictEqual( hasOwnProp( T.prototype, 'stdev' ), true, 'has property' );

	dist = new T( 5.0 );
	t.strictEqual( dist.stdev, stdev( 5.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution variance', function test( t ) {
	var dist;

	t.strictEqual( hasOwnProp( T.prototype, 'variance' ), true, 'has property' );

	dist = new T( 5.0 );
	t.strictEqual( dist.variance, variance( 5.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a method for evaluating the cumulative distribution function (CDF)', function test( t ) {
	var dist;
	var y;

	t.strictEqual( hasOwnProp( T.prototype, 'cdf' ), true, 'has property' );
	t.strictEqual( isFunction( T.prototype.cdf ), true, 'has method' );

	dist = new T();
	y = dist.cdf( 0.5 );

	t.strictEqual( y, cdf( 0.5, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the cumulative distribution function (CDF)', function test( t ) {
	var dist;
	var y;

	t.strictEqual( hasOwnProp( T.prototype, 'logcdf' ), true, 'has property' );
	t.strictEqual( isFunction( T.prototype.logcdf ), true, 'has method' );

	dist = new T();
	y = dist.logcdf( 0.5 );

	t.strictEqual( y, logcdf( 0.5, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the probability density function (PDF)', function test( t ) {
	var dist;
	var y;

	t.strictEqual( hasOwnProp( T.prototype, 'logpdf' ), true, 'has property' );
	t.strictEqual( isFunction( T.prototype.logpdf ), true, 'has method' );

	dist = new T();
	y = dist.logpdf( 0.2 );

	t.strictEqual( y, logpdf( 0.2, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the probability density function (PDF)', function test( t ) {
	var dist;
	var y;

	t.strictEqual( hasOwnProp( T.prototype, 'pdf' ), true, 'has property' );
	t.strictEqual( isFunction( T.prototype.pdf ), true, 'has method' );

	dist = new T();
	y = dist.pdf( 0.2 );

	t.strictEqual( y, pdf( 0.2, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the quantile function', function test( t ) {
	var dist;
	var y;

	t.strictEqual( hasOwnProp( T.prototype, 'quantile' ), true, 'has property' );
	t.strictEqual( isFunction( T.prototype.quantile ), true, 'has method' );

	dist = new T();
	y = dist.quantile( 0.8 );

	t.strictEqual( y, quantile( 0.8, 1.0 ), 'returns expected value' );
	t.end();
});
