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
var quantile = require( './../../../../../base/dists/frechet/quantile' );
var logcdf = require( './../../../../../base/dists/frechet/logcdf' );
var logpdf = require( './../../../../../base/dists/frechet/logpdf' );
var cdf = require( './../../../../../base/dists/frechet/cdf' );
var pdf = require( './../../../../../base/dists/frechet/pdf' );
var kurtosis = require( './../../../../../base/dists/frechet/kurtosis' );
var skewness = require( './../../../../../base/dists/frechet/skewness' );
var variance = require( './../../../../../base/dists/frechet/variance' );
var entropy = require( './../../../../../base/dists/frechet/entropy' );
var median = require( './../../../../../base/dists/frechet/median' );
var stdev = require( './../../../../../base/dists/frechet/stdev' );
var mean = require( './../../../../../base/dists/frechet/mean' );
var mode = require( './../../../../../base/dists/frechet/mode' );
var Frechet = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Frechet, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an `alpha` argument which is not a number primitive', function test( t ) {
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
			new Frechet( value, 2.0, 1.0 );
		};
	}
});

tape( 'the function throws an error if provided a `s` argument which is not a number primitive', function test( t ) {
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
			new Frechet( 2.0, value, 3.0 );
		};
	}
});

tape( 'the function throws an error if provided a `m` argument which is not a number primitive', function test( t ) {
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
			new Frechet( 2.0, 4.0, value );
		};
	}
});

tape( 'if provided arguments, the function requires `alpha`, `s`, and `m`', function test( t ) {
	t.throws( foo1, TypeError, 'throws an error' );
	t.throws( foo2, TypeError, 'throws an error' );
	t.end();

	function foo1() {
		// eslint-disable-next-line no-new
		new Frechet( 2.0 );
	}
	function foo2() {
		// eslint-disable-next-line no-new
		new Frechet( 2.0, 4.0 );
	}
});

tape( 'the function returns a new distribution instance (default parameters)', function test( t ) {
	var frechet = new Frechet();
	t.strictEqual( frechet instanceof Frechet, true, 'returns an instance' );
	t.end();
});

tape( 'the function returns a new distribution instance (custom parameters)', function test( t ) {
	var frechet = new Frechet( 2.0, 4.0, 3.0 );
	t.strictEqual( frechet instanceof Frechet, true, 'returns an instance' );
	t.end();
});

tape( 'the function can be invoked without the new operator', function test( t ) {
	// eslint-disable-next-line new-cap
	var frechet = Frechet();
	t.strictEqual( frechet instanceof Frechet, true, 'returns an instance' );

	// eslint-disable-next-line new-cap
	frechet = Frechet( 2.0, 4.0, 3.0 );
	t.strictEqual( frechet instanceof Frechet, true, 'returns an instance' );

	t.end();
});

tape( 'the created distribution has a property for getting and setting `alpha`', function test( t ) {
	var frechet;

	frechet = new Frechet( 2.0, 4.0, 3.5 );
	t.strictEqual( hasOwnProp( frechet, 'alpha' ), true, 'has property' );
	t.strictEqual( frechet.alpha, 2.0, 'returns expected value' );

	frechet.alpha = 3.0;
	t.strictEqual( frechet.alpha, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `alpha` to a value which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		NaN,
		true,
		false,
		void 0,
		null,
		0.0,
		-1.2,
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
			var frechet = new Frechet();
			frechet.alpha = value;
		};
	}
});

tape( 'the created distribution has a property for getting and setting `s`', function test( t ) {
	var frechet;

	frechet = new Frechet( 2.0, 4.0, 2.5 );
	t.strictEqual( hasOwnProp( frechet, 's' ), true, 'has property' );
	t.strictEqual( frechet.s, 4.0, 'returns expected value' );

	frechet.s = 3.0;
	t.strictEqual( frechet.s, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `s` to a value which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		NaN,
		true,
		0.0,
		-1.2,
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
			var frechet = new Frechet();
			frechet.s = value;
		};
	}
});

tape( 'the created distribution throws an error if one attempts to set `m` to a value which is not a number primitive', function test( t ) {
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
			var frechet = new Frechet();
			frechet.m = value;
		};
	}
});

tape( 'the distribution prototype has a property for retrieving the distribution entropy', function test( t ) {
	var frechet;

	t.strictEqual( hasOwnProp( Frechet.prototype, 'entropy' ), true, 'has property' );

	frechet = new Frechet();
	t.strictEqual( frechet.entropy, entropy( 1.0, 1.0, 0.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution kurtosis', function test( t ) {
	var frechet;

	t.strictEqual( hasOwnProp( Frechet.prototype, 'kurtosis' ), true, 'has property' );

	frechet = new Frechet( 2.0, 4.0, 3.0 );
	t.strictEqual( frechet.kurtosis, kurtosis( 2.0, 4.0, 3.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mean', function test( t ) {
	var frechet;

	t.strictEqual( hasOwnProp( Frechet.prototype, 'mean' ), true, 'has property' );

	frechet = new Frechet();
	t.strictEqual( frechet.mean, mean( 1.0, 1.0, 0.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution median', function test( t ) {
	var frechet;

	t.strictEqual( hasOwnProp( Frechet.prototype, 'median' ), true, 'has property' );

	frechet = new Frechet( 2.0, 5.0, 4.0 );
	t.strictEqual( frechet.median, median( 2.0, 5.0, 4.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mode', function test( t ) {
	var frechet;

	t.strictEqual( hasOwnProp( Frechet.prototype, 'mode' ), true, 'has property' );

	frechet = new Frechet( 2.0, 5.0, 3.0 );
	t.strictEqual( frechet.mode, mode( 2.0, 5.0, 3.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution skewness', function test( t ) {
	var frechet;

	t.strictEqual( hasOwnProp( Frechet.prototype, 'skewness' ), true, 'has property' );

	frechet = new Frechet( 0.5, 1.0, 0.8 );
	t.strictEqual( frechet.skewness, skewness( 0.5, 1.0, 0.8 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution standard deviation', function test( t ) {
	var frechet;

	t.strictEqual( hasOwnProp( Frechet.prototype, 'stdev' ), true, 'has property' );

	frechet = new Frechet( 3.0, 5.0, 4.0 );
	t.strictEqual( frechet.stdev, stdev( 3.0, 5.0, 4.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution variance', function test( t ) {
	var frechet;

	t.strictEqual( hasOwnProp( Frechet.prototype, 'variance' ), true, 'has property' );

	frechet = new Frechet( 3.0, 5.0, 4.0 );
	t.strictEqual( frechet.variance, variance( 3.0, 5.0, 4.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a method for evaluating the cumulative distribution function (CDF)', function test( t ) {
	var frechet;
	var y;

	t.strictEqual( hasOwnProp( Frechet.prototype, 'cdf' ), true, 'has property' );
	t.strictEqual( isFunction( Frechet.prototype.cdf ), true, 'has method' );

	frechet = new Frechet();
	y = frechet.cdf( 0.5 );

	t.strictEqual( y, cdf( 0.5, 1.0, 1.0, 0.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the cumulative distribution function (logCDF)', function test( t ) {
	var frechet;
	var y;

	t.strictEqual( hasOwnProp( Frechet.prototype, 'logcdf' ), true, 'has property' );
	t.strictEqual( isFunction( Frechet.prototype.logcdf ), true, 'has method' );

	frechet = new Frechet();
	y = frechet.logcdf( 0.5 );

	t.strictEqual( y, logcdf( 0.5, 1.0, 1.0, 0.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the probability density function (logPDF)', function test( t ) {
	var frechet;
	var y;

	t.strictEqual( hasOwnProp( Frechet.prototype, 'logpdf' ), true, 'has property' );
	t.strictEqual( isFunction( Frechet.prototype.logpdf ), true, 'has method' );

	frechet = new Frechet();
	y = frechet.logpdf( 0.2 );

	t.strictEqual( y, logpdf( 0.2, 1.0, 1.0, 0.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the probability density function (PDF)', function test( t ) {
	var frechet;
	var y;

	t.strictEqual( hasOwnProp( Frechet.prototype, 'pdf' ), true, 'has property' );
	t.strictEqual( isFunction( Frechet.prototype.pdf ), true, 'has method' );

	frechet = new Frechet();
	y = frechet.pdf( 0.2 );

	t.strictEqual( y, pdf( 0.2, 1.0, 1.0, 0.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the quantile function', function test( t ) {
	var frechet;
	var y;

	t.strictEqual( hasOwnProp( Frechet.prototype, 'quantile' ), true, 'has property' );
	t.strictEqual( isFunction( Frechet.prototype.quantile ), true, 'has method' );

	frechet = new Frechet();
	y = frechet.quantile( 0.8 );

	t.strictEqual( y, quantile( 0.8, 1.0, 1.0, 0.0 ), 'returns expected value' );
	t.end();
});
