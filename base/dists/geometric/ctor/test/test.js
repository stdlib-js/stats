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
var quantile = require( './../../../../../base/dists/geometric/quantile' );
var logcdf = require( './../../../../../base/dists/geometric/logcdf' );
var logpmf = require( './../../../../../base/dists/geometric/logpmf' );
var cdf = require( './../../../../../base/dists/geometric/cdf' );
var mgf = require( './../../../../../base/dists/geometric/mgf' );
var pmf = require( './../../../../../base/dists/geometric/pmf' );
var entropy = require( './../../../../../base/dists/geometric/entropy' );
var kurtosis = require( './../../../../../base/dists/geometric/kurtosis' );
var skewness = require( './../../../../../base/dists/geometric/skewness' );
var variance = require( './../../../../../base/dists/geometric/variance' );
var median = require( './../../../../../base/dists/geometric/median' );
var stdev = require( './../../../../../base/dists/geometric/stdev' );
var mode = require( './../../../../../base/dists/geometric/mode' );
var mean = require( './../../../../../base/dists/geometric/mean' );
var Geometric = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Geometric, 'function', 'main export is a function' );
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
			new Geometric( value );
		};
	}
});

tape( 'the function returns a new distribution instance (default parameters)', function test( t ) {
	var geometric = new Geometric();
	t.strictEqual( geometric instanceof Geometric, true, 'returns an instance' );
	t.end();
});

tape( 'the function returns a new distribution instance (custom parameters)', function test( t ) {
	var geometric = new Geometric( 0.3 );
	t.strictEqual( geometric instanceof Geometric, true, 'returns an instance' );
	t.end();
});

tape( 'the function can be invoked without the new operator', function test( t ) {
	// eslint-disable-next-line new-cap
	var geometric = Geometric();
	t.strictEqual( geometric instanceof Geometric, true, 'returns an instance' );

	// eslint-disable-next-line new-cap
	geometric = Geometric( 0.3 );
	t.strictEqual( geometric instanceof Geometric, true, 'returns an instance' );

	t.end();
});

tape( 'the created distribution has a property for getting and setting `p`', function test( t ) {
	var geometric;

	geometric = new Geometric( 0.4 );
	t.strictEqual( hasOwnProp( geometric, 'p' ), true, 'has property' );
	t.strictEqual( geometric.p, 0.4, 'returns expected value' );

	geometric.p = 0.3;
	t.strictEqual( geometric.p, 0.3, 'returns expected value' );

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
			var geometric = new Geometric();
			geometric.p = value;
		};
	}
});

tape( 'the distribution prototype has a property for retrieving the distribution entropy', function test( t ) {
	var geometric;

	t.strictEqual( hasOwnProp( Geometric.prototype, 'entropy' ), true, 'has property' );

	geometric = new Geometric();
	t.strictEqual( geometric.entropy, entropy( 0.5 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution kurtosis', function test( t ) {
	var geometric;

	t.strictEqual( hasOwnProp( Geometric.prototype, 'kurtosis' ), true, 'has property' );

	geometric = new Geometric( 0.45 );
	t.strictEqual( geometric.kurtosis, kurtosis( 0.45 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mean', function test( t ) {
	var geometric;

	t.strictEqual( hasOwnProp( Geometric.prototype, 'mean' ), true, 'has property' );

	geometric = new Geometric( 0.2 );
	t.strictEqual( geometric.mean, mean( 0.2 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution median', function test( t ) {
	var geometric;

	t.strictEqual( hasOwnProp( Geometric.prototype, 'median' ), true, 'has property' );

	geometric = new Geometric( 0.3 );
	t.strictEqual( geometric.median, median( 0.3 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mode', function test( t ) {
	var geometric;

	t.strictEqual( hasOwnProp( Geometric.prototype, 'mode' ), true, 'has property' );

	geometric = new Geometric( 0.3 );
	t.strictEqual( geometric.mode, mode( 0.3 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution skewness', function test( t ) {
	var geometric;

	t.strictEqual( hasOwnProp( Geometric.prototype, 'skewness' ), true, 'has property' );

	geometric = new Geometric( 0.5 );
	t.strictEqual( geometric.skewness, skewness( 0.5 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution standard deviation', function test( t ) {
	var geometric;

	t.strictEqual( hasOwnProp( Geometric.prototype, 'stdev' ), true, 'has property' );

	geometric = new Geometric( 0.9 );
	t.strictEqual( geometric.stdev, stdev( 0.9 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution variance', function test( t ) {
	var geometric;

	t.strictEqual( hasOwnProp( Geometric.prototype, 'variance' ), true, 'has property' );

	geometric = new Geometric( 0.9 );
	t.strictEqual( geometric.variance, variance( 0.9 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a method for evaluating the cumulative distribution function (CDF)', function test( t ) {
	var geometric;
	var y;

	t.strictEqual( hasOwnProp( Geometric.prototype, 'cdf' ), true, 'has property' );
	t.strictEqual( isFunction( Geometric.prototype.cdf ), true, 'has method' );

	geometric = new Geometric();
	y = geometric.cdf( 0.5 );

	t.strictEqual( y, cdf( 0.5, 0.5 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the cumulative distribution function (logCDF)', function test( t ) {
	var geometric;
	var y;

	t.strictEqual( hasOwnProp( Geometric.prototype, 'logcdf' ), true, 'has property' );
	t.strictEqual( isFunction( Geometric.prototype.cdf ), true, 'has method' );

	geometric = new Geometric();
	y = geometric.logcdf( 0.5 );

	t.strictEqual( y, logcdf( 0.5, 0.5 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the probability mass function (logPMF)', function test( t ) {
	var geometric;
	var y;

	t.strictEqual( hasOwnProp( Geometric.prototype, 'logpmf' ), true, 'has property' );
	t.strictEqual( isFunction( Geometric.prototype.pmf ), true, 'has method' );

	geometric = new Geometric();
	y = geometric.logpmf( 0.3 );

	t.strictEqual( y, logpmf( 0.3, 0.5 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the moment-generating function (MGF)', function test( t ) {
	var geometric;
	var y;

	t.strictEqual( hasOwnProp( Geometric.prototype, 'mgf' ), true, 'has property' );
	t.strictEqual( isFunction( Geometric.prototype.mgf ), true, 'has method' );

	geometric = new Geometric();
	y = geometric.mgf( 0.5 );

	t.strictEqual( y, mgf( 0.5, 0.5 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the probability mass function (PMF)', function test( t ) {
	var geometric;
	var y;

	t.strictEqual( hasOwnProp( Geometric.prototype, 'pmf' ), true, 'has property' );
	t.strictEqual( isFunction( Geometric.prototype.pmf ), true, 'has method' );

	geometric = new Geometric();
	y = geometric.pmf( 0.3 );

	t.strictEqual( y, pmf( 0.3, 0.5 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the quantile function', function test( t ) {
	var geometric;
	var y;

	t.strictEqual( hasOwnProp( Geometric.prototype, 'quantile' ), true, 'has property' );
	t.strictEqual( isFunction( Geometric.prototype.quantile ), true, 'has method' );

	geometric = new Geometric();
	y = geometric.quantile( 0.8 );

	t.strictEqual( y, quantile( 0.8, 0.5 ), 'returns expected value' );
	t.end();
});
