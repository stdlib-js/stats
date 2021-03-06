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
var quantile = require( './../../../../../base/dists/invgamma/quantile' );
var logpdf = require( './../../../../../base/dists/invgamma/logpdf' );
var cdf = require( './../../../../../base/dists/invgamma/cdf' );
var pdf = require( './../../../../../base/dists/invgamma/pdf' );
var entropy = require( './../../../../../base/dists/invgamma/entropy' );
var kurtosis = require( './../../../../../base/dists/invgamma/kurtosis' );
var skewness = require( './../../../../../base/dists/invgamma/skewness' );
var variance = require( './../../../../../base/dists/invgamma/variance' );
var stdev = require( './../../../../../base/dists/invgamma/stdev' );
var mode = require( './../../../../../base/dists/invgamma/mode' );
var mean = require( './../../../../../base/dists/invgamma/mean' );
var InvGamma = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof InvGamma, 'function', 'main export is a function' );
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
			new InvGamma( value, 2.0 );
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
			new InvGamma( 2.0, value );
		};
	}
});

tape( 'if provided arguments, the function requires both `alpha` and `beta`', function test( t ) {
	t.throws( foo, TypeError, 'throws an error' );
	t.end();

	function foo() {
		// eslint-disable-next-line no-new
		new InvGamma( 2.0 );
	}
});

tape( 'the function returns a new distribution instance (default parameters)', function test( t ) {
	var invgamma = new InvGamma();
	t.strictEqual( invgamma instanceof InvGamma, true, 'returns an instance' );
	t.end();
});

tape( 'the function returns a new distribution instance (custom parameters)', function test( t ) {
	var invgamma = new InvGamma( 2.0, 4.0 );
	t.strictEqual( invgamma instanceof InvGamma, true, 'returns an instance' );
	t.end();
});

tape( 'the function can be invoked without the new operator', function test( t ) {
	// eslint-disable-next-line new-cap
	var invgamma = InvGamma();
	t.strictEqual( invgamma instanceof InvGamma, true, 'returns an instance' );

	// eslint-disable-next-line new-cap
	invgamma = InvGamma( 2.0, 4.0 );
	t.strictEqual( invgamma instanceof InvGamma, true, 'returns an instance' );

	t.end();
});

tape( 'the created distribution has a property for getting and setting `alpha`', function test( t ) {
	var invgamma;

	invgamma = new InvGamma( 2.0, 4.0 );
	t.strictEqual( hasOwnProp( invgamma, 'alpha' ), true, 'has property' );
	t.strictEqual( invgamma.alpha, 2.0, 'returns expected value' );

	invgamma.alpha = 3.0;
	t.strictEqual( invgamma.alpha, 3.0, 'returns expected value' );

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
			var invgamma = new InvGamma();
			invgamma.alpha = value;
		};
	}
});

tape( 'the created distribution has a property for getting and setting `beta`', function test( t ) {
	var invgamma;

	invgamma = new InvGamma( 2.0, 4.0 );
	t.strictEqual( hasOwnProp( invgamma, 'beta' ), true, 'has property' );
	t.strictEqual( invgamma.beta, 4.0, 'returns expected value' );

	invgamma.beta = 3.0;
	t.strictEqual( invgamma.beta, 3.0, 'returns expected value' );

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
			var invgamma = new InvGamma();
			invgamma.beta = value;
		};
	}
});

tape( 'the distribution prototype has a property for retrieving the distribution entropy', function test( t ) {
	var invgamma;

	t.strictEqual( hasOwnProp( InvGamma.prototype, 'entropy' ), true, 'has property' );

	invgamma = new InvGamma();
	t.strictEqual( invgamma.entropy, entropy( 1.0, 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution kurtosis', function test( t ) {
	var invgamma;

	t.strictEqual( hasOwnProp( InvGamma.prototype, 'kurtosis' ), true, 'has property' );

	invgamma = new InvGamma( 4.5, 4.5 );
	t.strictEqual( invgamma.kurtosis, kurtosis( 4.5, 4.5 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mean', function test( t ) {
	var invgamma;

	t.strictEqual( hasOwnProp( InvGamma.prototype, 'mean' ), true, 'has property' );

	invgamma = new InvGamma( 2.0, 2.0 );
	t.strictEqual( invgamma.mean, mean( 2.0, 2.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mode', function test( t ) {
	var invgamma;

	t.strictEqual( hasOwnProp( InvGamma.prototype, 'mode' ), true, 'has property' );

	invgamma = new InvGamma( 2.0, 3.0 );
	t.strictEqual( invgamma.mode, mode( 2.0, 3.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution skewness', function test( t ) {
	var invgamma;

	t.strictEqual( hasOwnProp( InvGamma.prototype, 'skewness' ), true, 'has property' );

	invgamma = new InvGamma( 3.2, 3.2 );
	t.strictEqual( invgamma.skewness, skewness( 3.2, 3.2 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution standard deviation', function test( t ) {
	var invgamma;

	t.strictEqual( hasOwnProp( InvGamma.prototype, 'stdev' ), true, 'has property' );

	invgamma = new InvGamma( 3.0, 5.0 );
	t.strictEqual( invgamma.stdev, stdev( 3.0, 5.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution variance', function test( t ) {
	var invgamma;

	t.strictEqual( hasOwnProp( InvGamma.prototype, 'variance' ), true, 'has property' );

	invgamma = new InvGamma( 3.0, 5.0 );
	t.strictEqual( invgamma.variance, variance( 3.0, 5.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a method for evaluating the cumulative distribution function (CDF)', function test( t ) {
	var invgamma;
	var y;

	t.strictEqual( hasOwnProp( InvGamma.prototype, 'cdf' ), true, 'has property' );
	t.strictEqual( isFunction( InvGamma.prototype.cdf ), true, 'has method' );

	invgamma = new InvGamma();
	y = invgamma.cdf( 0.5 );

	t.strictEqual( y, cdf( 0.5, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the probability density function (PDF)', function test( t ) {
	var invgamma;
	var y;

	t.strictEqual( hasOwnProp( InvGamma.prototype, 'logpdf' ), true, 'has property' );
	t.strictEqual( isFunction( InvGamma.prototype.logpdf ), true, 'has method' );

	invgamma = new InvGamma();
	y = invgamma.logpdf( 0.2 );

	t.strictEqual( y, logpdf( 0.2, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the probability density function (PDF)', function test( t ) {
	var invgamma;
	var y;

	t.strictEqual( hasOwnProp( InvGamma.prototype, 'pdf' ), true, 'has property' );
	t.strictEqual( isFunction( InvGamma.prototype.pdf ), true, 'has method' );

	invgamma = new InvGamma();
	y = invgamma.pdf( 0.2 );

	t.strictEqual( y, pdf( 0.2, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the quantile function', function test( t ) {
	var invgamma;
	var y;

	t.strictEqual( hasOwnProp( InvGamma.prototype, 'quantile' ), true, 'has property' );
	t.strictEqual( isFunction( InvGamma.prototype.quantile ), true, 'has method' );

	invgamma = new InvGamma();
	y = invgamma.quantile( 0.8 );

	t.strictEqual( y, quantile( 0.8, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});
