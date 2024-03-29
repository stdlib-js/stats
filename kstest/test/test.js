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
var contains = require( '@stdlib/assert/contains' );
var uniform = require( '@stdlib/random/base/uniform' ).factory;
var uniformCDF = require( './../../base/dists/uniform/cdf' );
var abs = require( '@stdlib/math/base/special/abs' );
var Float64Array = require( '@stdlib/array/float64' );
var EPS = require( '@stdlib/constants/float64/eps' );
var kstest = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/r/data.json' );
var less = require( './fixtures/r/less.json' );
var greater = require( './fixtures/r/greater.json' );
var twosided = require( './fixtures/r/twosided.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof kstest, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if the `x` argument is not a numeric array', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		[ 1, 2, '5' ],
		true,
		void 0,
		null,
		NaN,
		function noop() {},
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			kstest( value, 'normal', 0.0, 1.0 );
		};
	}
});

tape( 'the function throws an error if the `y` argument is not a string or function', function test( t ) {
	var values;
	var i;

	values = [
		5,
		null,
		true,
		void 0,
		NaN,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			kstest( [ 0.25, 0.5, 0.75 ], value, 0.0, 1.0 );
		};
	}
});

tape( 'the function throws an error if the supplied distribution parameter(s) are not numeric values', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		null,
		true,
		void 0,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			kstest( [0.2, 0.8, 0.7], 'exponential', value );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	var values;
	var i;

	values = [
		5,
		true,
		void 0,
		null,
		NaN,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}

	t.throws( badValue( 'not one of less, greater or two-sided' ), Error, 'throws an error when provided not less, greater or two-sided' );
	t.end();

	function badValue( value ) {
		return function badValue() {
			kstest( [ 0.2, 0.5, 0.75 ], 'uniform', 0.0, 1.0, {
				'alternative': value
			});
		};
	}
});

tape( 'the function throws an error if the `alpha` option is a numeric value outside `[0,1]`', function test( t ) {
	var values;
	var i;

	values = [
		1.1,
		-0.1
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			kstest( [ 0.2, 0.5, 0.75 ], 'uniform', 0.0, 1.0, {
				'alpha': value
			});
		};
	}
});

tape( 'the function correctly computes the two-sided Kolmogorov-Smirnov test', function test( t ) {
	var expected;
	var delta;
	var out;
	var tol;

	// Choosing the CDF via a string...
	out = kstest( data, 'uniform', 0.0, 1.0 );

	// Tested against R:
	expected = twosided.pvalue;
	delta = abs( out.pValue - expected );
	tol = 20.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. p-value: '+out.pValue+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	expected = twosided.statistic;
	delta = abs( out.statistic - expected );
	tol = 5.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. test statistic: '+out.statistic+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	// Directly passing the CDF...
	out = kstest( data, uniformCDF, 0.0, 1.0 );

	// Tested against R:
	expected = twosided.pvalue;
	delta = abs( out.pValue - expected );
	tol = 20.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. p-value: '+out.pValue+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	expected = twosided.statistic;
	delta = abs( out.statistic - expected );
	tol = 5.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. test statistic: '+out.statistic+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	t.end();
});

tape( 'the function correctly computes the two-sided Kolmogorov-Smirnov test for an already sorted array', function test( t ) {
	var expected;
	var delta;
	var out;
	var tol;
	var x;

	x = [ 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.8, 0.9 ];
	out = kstest( x, 'uniform', 0.0, 1.0, {
		'sorted': true
	});

	// Tested against R:
	expected = 0.99963712;
	delta = abs( out.pValue - expected );
	tol = EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. p-value: '+out.pValue+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	expected = 0.10000000000000009;
	delta = abs( out.statistic - expected );
	tol = EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. test statistic: '+out.statistic+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	t.end();
});

tape( 'the function correctly computes the two-sided Kolmogorov-Smirnov test for an already sorted typed array', function test( t ) {
	var expected;
	var delta;
	var out;
	var tol;
	var x;

	x = new Float64Array( [ 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.8, 0.9 ] ); // eslint-disable-line max-len
	out = kstest( x, 'uniform', 0.0, 1.0, {
		'sorted': true
	});

	// Tested against R:
	expected = 0.99963712;
	delta = abs( out.pValue - expected );
	tol = EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. p-value: '+out.pValue+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	expected = 0.10000000000000009;
	delta = abs( out.statistic - expected );
	tol = EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. test statistic: '+out.statistic+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	t.end();
});

tape( 'the function correctly computes a one-sided Kolmogorov-Smirnov test', function test( t ) {
	var expected;
	var delta;
	var out;
	var tol;

	out = kstest( data, 'uniform', 0.0, 1.0, {
		'alternative': 'less'
	});

	// Tested against R:
	expected = less.pvalue;
	delta = abs( out.pValue - expected );
	tol = 60.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. p-value: '+out.pValue+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	expected = less.statistic;
	delta = abs( out.statistic - expected );
	tol = 20.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. test statistic: '+out.statistic+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	out = kstest( data, 'uniform', 0.0, 1.0, {
		'alternative': 'greater'
	});

	// Tested against R:
	expected = greater.pvalue;
	delta = abs( out.pValue - expected );
	tol = 40.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. p-value: '+out.pValue+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	expected = greater.statistic;
	delta = abs( out.statistic - expected );
	tol = 80.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. test statistic: '+out.statistic+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	t.end();
});

tape( 'the `.print()` method allows printing a formatted output table', function test( t ) {
	var actual;
	var table;

	actual = kstest( [ 0.25, 0.5, 0.75 ], 'uniform', 0.0, 1.0 );
	table = actual.print();
	/* returns
		Kolmogorov-Smirnov goodness-of-fit test

		Null hypothesis: the CDF of `x` is equal to the reference CDF

			pValue: 0.9722
			statistic: 0.25

		Test Decision: Fail to reject null in favor of alternative at 5% significance level
	*/
	t.equal( typeof table, 'string', 'returns a string' );
	t.end();
});

tape( 'the `.print()` method allows printing a formatted output table for a one-sided Kolmogorov-Smirnov test', function test( t ) {
	var table;
	var runif;
	var out;
	var i;
	var x;

	runif = uniform( 0.0, 1.0, {
		'seed': 338
	});

	x = new Array( 100 );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = runif();
	}
	out = kstest( x, 'uniform', 0.0, 1.0, {
		'alternative': 'less'
	});
	table = out.print();
	/* returns
		Kolmogorov-Smirnov goodness-of-fit test

		Null hypothesis: the CDF of `x` is greater than or equal to the reference CDF

			pValue: 0.783
			statistic: 0.0334

		Test Decision: Fail to reject null in favor of alternative at 5% significance level
	*/

	out = kstest( x, 'uniform', 1.0, 2.0, {
		'alternative': 'greater'
	});
	table = out.print();
	/* returns
		Kolmogorov-Smirnov goodness-of-fit test

		Null hypothesis: the CDF of `x` is less than or equal to the reference CDF

			pValue: 0
			statistic: 1

		Test Decision: Reject null in favor of alternative at 5% significance level
	*/

	t.equal( typeof table, 'string', 'returns a string' );
	t.end();
});

tape( 'the function returns an object with a `.print()` method that accepts a `digits` option to control the number of decimal digits displayed', function test( t ) {
	var table;
	var out;

	out = kstest( [ 0.25, 0.5, 0.75 ], 'uniform', 0.0, 1.0 );
	table = out.print({
		'digits': 6
	});
	/* returns
		Kolmogorov-Smirnov goodness-of-fit test

		Null hypothesis: the CDF of `x` is equal to the reference CDF

			pValue: 0.972222
			statistic: 0.25

		Test Decision: Fail to reject null in favor of alternative at 5% significance level
	*/
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );
	t.end();
});

tape( 'the function returns an object with a `.print()` method that accepts a `decision` option to control whether the test result should be displayed', function test( t ) {
	var table;
	var out;

	out = kstest( [ 0.25, 0.5, 0.75 ], 'uniform', 0.0, 1.0 );
	table = out.print({
		'decision': false
	});
	/* returns
		Kolmogorov-Smirnov goodness-of-fit test

		Null hypothesis: the CDF of `x` is equal to the reference CDF

			pValue: 0.9722
			statistic: 0.25

	*/
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );
	t.equal( contains( table, 'Test Decision' ), false, 'table does not contain test decision' );
	t.end();
});

tape( 'the function returns an object with a `.print()` method that accepts an `options` object', function test( t ) {
	var table;
	var out;

	out = kstest( [ 0.25, 0.5, 0.75 ], 'uniform', 0.0, 1.0 );
	table = out.print( {} );

	t.equal( typeof table, 'string', 'returns a pretty-printed table' );
	t.end();
});

tape( 'the function returns an object with a `.print()` method that throws an error if `options` is not a simple object', function test( t ) {
	var values;
	var out;
	var i;

	out = kstest( [ 0.25, 0.5, 0.75 ], 'uniform', 0.0, 1.0 );

	values = [
		'abc',
		4,
		null,
		true,
		void 0,
		NaN,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			out.print( value );
		};
	}
});

tape( 'the function returns an object with a `.print()` method that throws an error if the `digits` option is not a positive integer', function test( t ) {
	var values;
	var out;
	var i;

	out = kstest( [ 0.25, 0.5, 0.75 ], 'uniform', 0.0, 1.0 );

	values = [
		'abc',
		2.4,
		0.0,
		-1.0,
		null,
		true,
		void 0,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			out.print({
				'digits': value
			});
		};
	}
});

tape( 'the function returns an object with a `.print()` method that throws an error if the `decision` option is not a boolean primitive', function test( t ) {
	var values;
	var out;
	var i;

	out = kstest( [ 0.25, 0.5, 0.75 ], 'uniform', 0.0, 1.0 );

	values = [
		'abc',
		2.4,
		0.0,
		-1.0,
		null,
		8.0,
		void 0,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			out.print({
				'decision': value
			});
		};
	}
});
