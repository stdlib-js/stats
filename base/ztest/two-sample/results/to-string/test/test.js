/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var Float64Array = require( '@stdlib/array/float64' );
var Float64Results = require( './../../../../../../base/ztest/two-sample/results/float64' );
var resolveEnum = require( './../../../../../../base/ztest/alternative-resolve-enum' );
var res2str = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof res2str, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a second argument which is not an object', function test( t ) {
	var results;
	var values;
	var i;

	results = new Float64Results();

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			res2str( results, value );
		};
	}
});

tape( 'the function throws an error if provided a `digits` option which is not a positive integer', function test( t ) {
	var results;
	var values;
	var i;

	results = new Float64Results();

	values = [
		'5',
		-5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			res2str( results, {
				'digits': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `decision` option which is not a boolean', function test( t ) {
	var results;
	var values;
	var i;

	results = new Float64Results();

	values = [
		'5',
		-5,
		NaN,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			res2str( results, {
				'decision': value
			});
		};
	}
});

tape( 'the function serializes a results object to a string (rejected)', function test( t ) {
	var expected;
	var actual;
	var value;

	value = new Float64Results();
	value.rejected = true;
	value.alpha = 0.05;
	value.pValue = 0.0132;
	value.statistic = 2.4773;
	value.nullValue = 0.0;
	value.xmean = 3.7561;
	value.ymean = 3.0129;
	value.ci = new Float64Array( [ 0.1552, 1.3311 ] );
	value.alternative = resolveEnum( 'two-sided' );

	actual = res2str( value );
	t.strictEqual( isString( actual ), true, 'returns expected value' );

	expected = [
		'',
		'Two-sample Z-test',
		'',
		'Alternative hypothesis: True difference in means is not equal to 0.0000',
		'',
		'    pValue: 0.0132',
		'    statistic: 2.4773',
		'    95.0000% confidence interval: [0.1552, 1.3311]',
		'',
		'Test Decision: Reject null in favor of alternative at 5.0000% significance level',
		''
	].join( '\n' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function serializes a results object to a string (not rejected)', function test( t ) {
	var expected;
	var actual;
	var value;

	value = new Float64Results();
	value.rejected = false;
	value.alpha = 0.05;
	value.pValue = 0.0132;
	value.statistic = 2.4773;
	value.nullValue = 0.0;
	value.xmean = 3.7561;
	value.ymean = 3.0129;
	value.ci = new Float64Array( [ 0.1552, 1.3311 ] );
	value.alternative = resolveEnum( 'two-sided' );

	actual = res2str( value );
	t.strictEqual( isString( actual ), true, 'returns expected value' );

	expected = [
		'',
		'Two-sample Z-test',
		'',
		'Alternative hypothesis: True difference in means is not equal to 0.0000',
		'',
		'    pValue: 0.0132',
		'    statistic: 2.4773',
		'    95.0000% confidence interval: [0.1552, 1.3311]',
		'',
		'Test Decision: Fail to reject null in favor of alternative at 5.0000% significance level',
		''
	].join( '\n' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function serializes a results object to a string (two-sided)', function test( t ) {
	var expected;
	var actual;
	var value;

	value = new Float64Results();
	value.rejected = true;
	value.alpha = 0.05;
	value.pValue = 0.0132;
	value.statistic = 2.4773;
	value.nullValue = 0.0;
	value.xmean = 3.7561;
	value.ymean = 3.0129;
	value.ci = new Float64Array( [ 0.1552, 1.3311 ] );
	value.alternative = resolveEnum( 'two-sided' );

	actual = res2str( value );
	t.strictEqual( isString( actual ), true, 'returns expected value' );

	expected = [
		'',
		'Two-sample Z-test',
		'',
		'Alternative hypothesis: True difference in means is not equal to 0.0000',
		'',
		'    pValue: 0.0132',
		'    statistic: 2.4773',
		'    95.0000% confidence interval: [0.1552, 1.3311]',
		'',
		'Test Decision: Reject null in favor of alternative at 5.0000% significance level',
		''
	].join( '\n' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function serializes a results object to a string (less)', function test( t ) {
	var expected;
	var actual;
	var value;

	value = new Float64Results();
	value.rejected = true;
	value.alpha = 0.05;
	value.pValue = 0.0132;
	value.statistic = 2.4773;
	value.nullValue = 0.0;
	value.xmean = 3.7561;
	value.ymean = 3.0129;
	value.ci = new Float64Array( [ 0.1552, 1.3311 ] );
	value.alternative = resolveEnum( 'less' );

	actual = res2str( value );
	t.strictEqual( isString( actual ), true, 'returns expected value' );

	expected = [
		'',
		'Two-sample Z-test',
		'',
		'Alternative hypothesis: True difference in means is less than 0.0000',
		'',
		'    pValue: 0.0132',
		'    statistic: 2.4773',
		'    95.0000% confidence interval: [0.1552, 1.3311]',
		'',
		'Test Decision: Reject null in favor of alternative at 5.0000% significance level',
		''
	].join( '\n' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function serializes a results object to a string (greater)', function test( t ) {
	var expected;
	var actual;
	var value;

	value = new Float64Results();
	value.rejected = true;
	value.alpha = 0.05;
	value.pValue = 0.0132;
	value.statistic = 2.4773;
	value.nullValue = 0.0;
	value.xmean = 3.7561;
	value.ymean = 3.0129;
	value.ci = new Float64Array( [ 0.1552, 1.3311 ] );
	value.alternative = resolveEnum( 'greater' );

	actual = res2str( value );
	t.strictEqual( isString( actual ), true, 'returns expected value' );

	expected = [
		'',
		'Two-sample Z-test',
		'',
		'Alternative hypothesis: True difference in means is greater than 0.0000',
		'',
		'    pValue: 0.0132',
		'    statistic: 2.4773',
		'    95.0000% confidence interval: [0.1552, 1.3311]',
		'',
		'Test Decision: Reject null in favor of alternative at 5.0000% significance level',
		''
	].join( '\n' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports displaying the test decision (decision=true)', function test( t ) {
	var expected;
	var actual;
	var value;

	value = new Float64Results();
	value.rejected = true;
	value.alpha = 0.05;
	value.pValue = 0.0132;
	value.statistic = 2.4773;
	value.nullValue = 0.0;
	value.xmean = 3.7561;
	value.ymean = 3.0129;
	value.ci = new Float64Array( [ 0.1552, 1.3311 ] );
	value.alternative = resolveEnum( 'two-sided' );

	actual = res2str( value, {
		'decision': true
	});
	t.strictEqual( isString( actual ), true, 'returns expected value' );

	expected = [
		'',
		'Two-sample Z-test',
		'',
		'Alternative hypothesis: True difference in means is not equal to 0.0000',
		'',
		'    pValue: 0.0132',
		'    statistic: 2.4773',
		'    95.0000% confidence interval: [0.1552, 1.3311]',
		'',
		'Test Decision: Reject null in favor of alternative at 5.0000% significance level',
		''
	].join( '\n' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports not displaying the test decision (decision=false)', function test( t ) {
	var expected;
	var actual;
	var value;

	value = new Float64Results();
	value.rejected = true;
	value.alpha = 0.05;
	value.pValue = 0.0132;
	value.statistic = 2.4773;
	value.nullValue = 0.0;
	value.xmean = 3.7561;
	value.ymean = 3.0129;
	value.ci = new Float64Array( [ 0.1552, 1.3311 ] );
	value.alternative = resolveEnum( 'less' );

	actual = res2str( value, {
		'decision': false
	});
	t.strictEqual( isString( actual ), true, 'returns expected value' );

	expected = [
		'',
		'Two-sample Z-test',
		'',
		'Alternative hypothesis: True difference in means is less than 0.0000',
		'',
		'    pValue: 0.0132',
		'    statistic: 2.4773',
		'    95.0000% confidence interval: [0.1552, 1.3311]',
		''
	].join( '\n' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the number of displayed digits (digits=2)', function test( t ) {
	var expected;
	var actual;
	var value;

	value = new Float64Results();
	value.rejected = true;
	value.alpha = 0.05;
	value.pValue = 0.0132;
	value.statistic = 2.4773;
	value.nullValue = 0.0;
	value.xmean = 3.7561;
	value.ymean = 3.0129;
	value.ci = new Float64Array( [ 0.1552, 1.3311 ] );
	value.alternative = resolveEnum( 'two-sided' );

	actual = res2str( value, {
		'digits': 2
	});
	t.strictEqual( isString( actual ), true, 'returns expected value' );

	expected = [
		'',
		'Two-sample Z-test',
		'',
		'Alternative hypothesis: True difference in means is not equal to 0.00',
		'',
		'    pValue: 0.01',
		'    statistic: 2.48',
		'    95.00% confidence interval: [0.16, 1.33]',
		'',
		'Test Decision: Reject null in favor of alternative at 5.00% significance level',
		''
	].join( '\n' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});
