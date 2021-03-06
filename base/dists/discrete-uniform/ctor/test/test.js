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
var quantile = require( './../../../../../base/dists/discrete-uniform/quantile' );
var logcdf = require( './../../../../../base/dists/discrete-uniform/logcdf' );
var logpmf = require( './../../../../../base/dists/discrete-uniform/logpmf' );
var cdf = require( './../../../../../base/dists/discrete-uniform/cdf' );
var mgf = require( './../../../../../base/dists/discrete-uniform/mgf' );
var pmf = require( './../../../../../base/dists/discrete-uniform/pmf' );
var kurtosis = require( './../../../../../base/dists/discrete-uniform/kurtosis' );
var skewness = require( './../../../../../base/dists/discrete-uniform/skewness' );
var variance = require( './../../../../../base/dists/discrete-uniform/variance' );
var entropy = require( './../../../../../base/dists/discrete-uniform/entropy' );
var median = require( './../../../../../base/dists/discrete-uniform/median' );
var stdev = require( './../../../../../base/dists/discrete-uniform/stdev' );
var mean = require( './../../../../../base/dists/discrete-uniform/mean' );
var DiscreteUniform = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof DiscreteUniform, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an `a` argument which is not an integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		0.8,
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
			new DiscreteUniform( value, 2 );
		};
	}
});

tape( 'the function throws an error if provided a `b` argument which is not an integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.5,
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
			new DiscreteUniform( 2, value );
		};
	}
});

tape( 'the function throws an error if provided `a` is larger than `b`', function test( t ) {
	var values;
	var i;

	values = [
		[ 2, 1 ],
		[ 2, 0 ],
		[ 0, -1 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new DiscreteUniform( value[ 0 ], value[ 1 ] );
		};
	}
});

tape( 'if provided arguments, the function requires both `a` and `b`', function test( t ) {
	t.throws( foo, TypeError, 'throws an error' );
	t.end();

	function foo() {
		// eslint-disable-next-line no-new
		new DiscreteUniform( 2 );
	}
});

tape( 'the function returns a new distribution instance (default parameters)', function test( t ) {
	var discreteUniform = new DiscreteUniform();
	t.strictEqual( discreteUniform instanceof DiscreteUniform, true, 'returns an instance' );
	t.end();
});

tape( 'the function returns a new distribution instance (custom parameters)', function test( t ) {
	var discreteUniform = new DiscreteUniform( 2, 4 );
	t.strictEqual( discreteUniform instanceof DiscreteUniform, true, 'returns an instance' );
	t.end();
});

tape( 'the function can be invoked without the new operator', function test( t ) {
	// eslint-disable-next-line new-cap
	var discreteUniform = DiscreteUniform();
	t.strictEqual( discreteUniform instanceof DiscreteUniform, true, 'returns an instance' );

	// eslint-disable-next-line new-cap
	discreteUniform = DiscreteUniform( 2, 4 );
	t.strictEqual( discreteUniform instanceof DiscreteUniform, true, 'returns an instance' );

	t.end();
});

tape( 'the created distribution has a property for getting and setting `a`', function test( t ) {
	var discreteUniform;

	discreteUniform = new DiscreteUniform( 2, 4 );
	t.strictEqual( hasOwnProp( discreteUniform, 'a' ), true, 'has property' );
	t.strictEqual( discreteUniform.a, 2, 'returns expected value' );

	discreteUniform.a = 3;
	t.strictEqual( discreteUniform.a, 3, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `a` to a value which is not an integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		2.5,
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
			var discreteUniform = new DiscreteUniform( 0, 4 );
			discreteUniform.a = value;
		};
	}
});

tape( 'the created distribution throws an error if one attempts to set `a` to a value which is larger than `b`', function test( t ) {
	var values;
	var i;

	values = [
		3,
		4,
		20
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var discreteUniform = new DiscreteUniform( -2, 2 );
			discreteUniform.a = value;
		};
	}
});

tape( 'the created distribution has a property for getting and setting `b`', function test( t ) {
	var discreteUniform;

	discreteUniform = new DiscreteUniform( 2, 4 );
	t.strictEqual( hasOwnProp( discreteUniform, 'b' ), true, 'has property' );
	t.strictEqual( discreteUniform.b, 4, 'returns expected value' );

	discreteUniform.b = 3;
	t.strictEqual( discreteUniform.b, 3, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `b` to a value which is not an integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		2.5,
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
			var discreteUniform = new DiscreteUniform();
			discreteUniform.b = value;
		};
	}
});

tape( 'the created distribution throws an error if one attempts to set `b` to a value which is smaller than `a`', function test( t ) {
	var values;
	var i;

	values = [
		-1,
		-10,
		-20
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var discreteUniform = new DiscreteUniform();
			discreteUniform.b = value;
		};
	}
});

tape( 'the distribution prototype has a property for retrieving the distribution entropy', function test( t ) {
	var discreteUniform;

	t.strictEqual( hasOwnProp( DiscreteUniform.prototype, 'entropy' ), true, 'has property' );

	discreteUniform = new DiscreteUniform();
	t.strictEqual( discreteUniform.entropy, entropy( 0, 1 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution kurtosis', function test( t ) {
	var discreteUniform;

	t.strictEqual( hasOwnProp( DiscreteUniform.prototype, 'kurtosis' ), true, 'has property' );

	discreteUniform = new DiscreteUniform( 2, 4 );
	t.strictEqual( discreteUniform.kurtosis, kurtosis( 2, 4 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mean', function test( t ) {
	var discreteUniform;

	t.strictEqual( hasOwnProp( DiscreteUniform.prototype, 'mean' ), true, 'has property' );

	discreteUniform = new DiscreteUniform();
	t.strictEqual( discreteUniform.mean, mean( 0, 1 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution median', function test( t ) {
	var discreteUniform;

	t.strictEqual( hasOwnProp( DiscreteUniform.prototype, 'median' ), true, 'has property' );

	discreteUniform = new DiscreteUniform( 2, 5 );
	t.strictEqual( discreteUniform.median, median( 2, 5 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution skewness', function test( t ) {
	var discreteUniform;

	t.strictEqual( hasOwnProp( DiscreteUniform.prototype, 'skewness' ), true, 'has property' );

	discreteUniform = new DiscreteUniform( 1, 2 );
	t.strictEqual( discreteUniform.skewness, skewness( 1, 2 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution standard deviation', function test( t ) {
	var discreteUniform;

	t.strictEqual( hasOwnProp( DiscreteUniform.prototype, 'stdev' ), true, 'has property' );

	discreteUniform = new DiscreteUniform( 3, 5 );
	t.strictEqual( discreteUniform.stdev, stdev( 3, 5 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution variance', function test( t ) {
	var discreteUniform;

	t.strictEqual( hasOwnProp( DiscreteUniform.prototype, 'variance' ), true, 'has property' );

	discreteUniform = new DiscreteUniform( 3, 5 );
	t.strictEqual( discreteUniform.variance, variance( 3, 5 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a method for evaluating the cumulative distribution function (CDF)', function test( t ) {
	var discreteUniform;
	var y;

	t.strictEqual( hasOwnProp( DiscreteUniform.prototype, 'cdf' ), true, 'has property' );
	t.strictEqual( isFunction( DiscreteUniform.prototype.cdf ), true, 'has method' );

	discreteUniform = new DiscreteUniform( -2, 2 );
	y = discreteUniform.cdf( 1.0 );

	t.strictEqual( y, cdf( 1.0, -2, 2 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the cumulative distribution function (logCDF)', function test( t ) {
	var discreteUniform;
	var y;

	t.strictEqual( hasOwnProp( DiscreteUniform.prototype, 'logcdf' ), true, 'has property' );
	t.strictEqual( isFunction( DiscreteUniform.prototype.logcdf ), true, 'has method' );

	discreteUniform = new DiscreteUniform( -2, 2 );
	y = discreteUniform.logcdf( 0.0 );

	t.strictEqual( y, logcdf( 0.0, -2, 2 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the probability mass function (logPMF)', function test( t ) {
	var discreteUniform;
	var y;

	t.strictEqual( hasOwnProp( DiscreteUniform.prototype, 'logpmf' ), true, 'has property' );
	t.strictEqual( isFunction( DiscreteUniform.prototype.logpmf ), true, 'has method' );

	discreteUniform = new DiscreteUniform( 0, 2 );
	y = discreteUniform.logpmf( 0.0 );

	t.strictEqual( y, logpmf( 0.0, 0, 2 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the moment-generating function (MGF)', function test( t ) {
	var discreteUniform;
	var y;

	t.strictEqual( hasOwnProp( DiscreteUniform.prototype, 'mgf' ), true, 'has property' );
	t.strictEqual( isFunction( DiscreteUniform.prototype.mgf ), true, 'has method' );

	discreteUniform = new DiscreteUniform();
	y = discreteUniform.mgf( 0.5 );

	t.strictEqual( y, mgf( 0.5, 0, 1 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the probability mass function (PMF)', function test( t ) {
	var discreteUniform;
	var y;

	t.strictEqual( hasOwnProp( DiscreteUniform.prototype, 'pmf' ), true, 'has property' );
	t.strictEqual( isFunction( DiscreteUniform.prototype.pmf ), true, 'has method' );

	discreteUniform = new DiscreteUniform( -2, 2 );
	y = discreteUniform.pmf( 0.0 );

	t.strictEqual( y, pmf( 0.0, -2, 2 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the quantile function', function test( t ) {
	var discreteUniform;
	var y;

	t.strictEqual( hasOwnProp( DiscreteUniform.prototype, 'quantile' ), true, 'has property' );
	t.strictEqual( isFunction( DiscreteUniform.prototype.quantile ), true, 'has method' );

	discreteUniform = new DiscreteUniform( -2, 2 );
	y = discreteUniform.quantile( 0.8 );

	t.strictEqual( y, quantile( 0.8, -2, 2 ), 'returns expected value' );
	t.end();
});
