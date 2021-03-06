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
var quantile = require( './../../../../../base/dists/bernoulli/quantile' );
var cdf = require( './../../../../../base/dists/bernoulli/cdf' );
var mgf = require( './../../../../../base/dists/bernoulli/mgf' );
var pmf = require( './../../../../../base/dists/bernoulli/pmf' );
var entropy = require( './../../../../../base/dists/bernoulli/entropy' );
var kurtosis = require( './../../../../../base/dists/bernoulli/kurtosis' );
var skewness = require( './../../../../../base/dists/bernoulli/skewness' );
var variance = require( './../../../../../base/dists/bernoulli/variance' );
var median = require( './../../../../../base/dists/bernoulli/median' );
var mode = require( './../../../../../base/dists/bernoulli/mode' );
var stdev = require( './../../../../../base/dists/bernoulli/stdev' );
var mean = require( './../../../../../base/dists/bernoulli/mean' );
var Bernoulli = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Bernoulli, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a `p` argument which is not a probability', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		-0.1,
		1.2,
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
			new Bernoulli( value );
		};
	}
});

tape( 'the function returns a new distribution instance (default parameters)', function test( t ) {
	var bernoulli = new Bernoulli();
	t.strictEqual( bernoulli instanceof Bernoulli, true, 'returns an instance' );
	t.end();
});

tape( 'the function returns a new distribution instance (custom parameters)', function test( t ) {
	var bernoulli = new Bernoulli( 0.3 );
	t.strictEqual( bernoulli instanceof Bernoulli, true, 'returns an instance' );
	t.end();
});

tape( 'the function can be invoked without the new operator', function test( t ) {
	// eslint-disable-next-line new-cap
	var bernoulli = Bernoulli();
	t.strictEqual( bernoulli instanceof Bernoulli, true, 'returns an instance' );

	// eslint-disable-next-line new-cap
	bernoulli = Bernoulli( 0.3 );
	t.strictEqual( bernoulli instanceof Bernoulli, true, 'returns an instance' );

	t.end();
});

tape( 'the created distribution has a property for getting and setting `p`', function test( t ) {
	var bernoulli;

	bernoulli = new Bernoulli( 0.4 );
	t.strictEqual( hasOwnProp( bernoulli, 'p' ), true, 'has property' );
	t.strictEqual( bernoulli.p, 0.4, 'returns expected value' );

	bernoulli.p = 0.3;
	t.strictEqual( bernoulli.p, 0.3, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `p` to a value which is not a probability', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		-0.1,
		1.2,
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
			var bernoulli = new Bernoulli();
			bernoulli.p = value;
		};
	}
});

tape( 'the distribution prototype has a property for retrieving the distribution entropy', function test( t ) {
	var bernoulli;

	t.strictEqual( hasOwnProp( Bernoulli.prototype, 'entropy' ), true, 'has property' );

	bernoulli = new Bernoulli();
	t.strictEqual( bernoulli.entropy, entropy( 0.5 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution kurtosis', function test( t ) {
	var bernoulli;

	t.strictEqual( hasOwnProp( Bernoulli.prototype, 'kurtosis' ), true, 'has property' );

	bernoulli = new Bernoulli( 0.45 );
	t.strictEqual( bernoulli.kurtosis, kurtosis( 0.45 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mean', function test( t ) {
	var bernoulli;

	t.strictEqual( hasOwnProp( Bernoulli.prototype, 'mean' ), true, 'has property' );

	bernoulli = new Bernoulli( 0.2 );
	t.strictEqual( bernoulli.mean, mean( 0.2 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution median', function test( t ) {
	var bernoulli;

	t.strictEqual( hasOwnProp( Bernoulli.prototype, 'median' ), true, 'has property' );

	bernoulli = new Bernoulli( 0.3 );
	t.strictEqual( bernoulli.median, median( 0.3 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mode', function test( t ) {
	var bernoulli;

	t.strictEqual( hasOwnProp( Bernoulli.prototype, 'mode' ), true, 'has property' );

	bernoulli = new Bernoulli( 0.3 );
	t.strictEqual( bernoulli.mode, mode( 0.3 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution skewness', function test( t ) {
	var bernoulli;

	t.strictEqual( hasOwnProp( Bernoulli.prototype, 'skewness' ), true, 'has property' );

	bernoulli = new Bernoulli( 0.5 );
	t.strictEqual( bernoulli.skewness, skewness( 0.5 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution standard deviation', function test( t ) {
	var bernoulli;

	t.strictEqual( hasOwnProp( Bernoulli.prototype, 'stdev' ), true, 'has property' );

	bernoulli = new Bernoulli( 0.9 );
	t.strictEqual( bernoulli.stdev, stdev( 0.9 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution variance', function test( t ) {
	var bernoulli;

	t.strictEqual( hasOwnProp( Bernoulli.prototype, 'variance' ), true, 'has property' );

	bernoulli = new Bernoulli( 0.9 );
	t.strictEqual( bernoulli.variance, variance( 0.9 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a method for evaluating the cumulative distribution function (CDF)', function test( t ) {
	var bernoulli;
	var y;

	t.strictEqual( hasOwnProp( Bernoulli.prototype, 'cdf' ), true, 'has property' );
	t.strictEqual( isFunction( Bernoulli.prototype.cdf ), true, 'has method' );

	bernoulli = new Bernoulli();
	y = bernoulli.cdf( 0.5 );

	t.strictEqual( y, cdf( 0.5, 0.5 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the moment-generating function (MGF)', function test( t ) {
	var bernoulli;
	var y;

	t.strictEqual( hasOwnProp( Bernoulli.prototype, 'mgf' ), true, 'has property' );
	t.strictEqual( isFunction( Bernoulli.prototype.mgf ), true, 'has method' );

	bernoulli = new Bernoulli();
	y = bernoulli.mgf( 0.5 );

	t.strictEqual( y, mgf( 0.5, 0.5 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the probability mass function (PMF)', function test( t ) {
	var bernoulli;
	var y;

	t.strictEqual( hasOwnProp( Bernoulli.prototype, 'pmf' ), true, 'has property' );
	t.strictEqual( isFunction( Bernoulli.prototype.pmf ), true, 'has method' );

	bernoulli = new Bernoulli();
	y = bernoulli.pmf( 0.3 );

	t.strictEqual( y, pmf( 0.3, 0.5 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the quantile function', function test( t ) {
	var bernoulli;
	var y;

	t.strictEqual( hasOwnProp( Bernoulli.prototype, 'quantile' ), true, 'has property' );
	t.strictEqual( isFunction( Bernoulli.prototype.quantile ), true, 'has method' );

	bernoulli = new Bernoulli();
	y = bernoulli.quantile( 0.8 );

	t.strictEqual( y, quantile( 0.8, 0.5 ), 'returns expected value' );
	t.end();
});
