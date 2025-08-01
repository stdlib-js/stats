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
var isSameFloat64Array = require( '@stdlib/assert/is-same-float64array' );
var isSameFloat32Array = require( '@stdlib/assert/is-same-float32array' );
var isDataView = require( '@stdlib/assert/is-dataview' );
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var Float64Array = require( '@stdlib/array/float64' );
var Float32Array = require( '@stdlib/array/float32' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var resultsFactory = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof resultsFactory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a supported data type', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
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
			resultsFactory( value );
		};
	}
});

tape( 'the function returns a constructor which throws an error if provided a first argument which is not an ArrayBuffer or data object', function test( t ) {
	var results;
	var values;
	var i;

	results = resultsFactory( 'float64' );

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
			results( value );
		};
	}
});

tape( 'the function returns a constructor which throws an error if provided a second argument which is not a nonnegative integer', function test( t ) {
	var results;
	var values;
	var i;

	results = resultsFactory( 'float64' );

	values = [
		'5',
		-5,
		3.14,
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
			results( new ArrayBuffer( 1024 ), value );
		};
	}
});

tape( 'the function returns a constructor which throws an error if provided a third argument which is not a nonnegative integer', function test( t ) {
	var results;
	var values;
	var i;

	results = resultsFactory( 'float64' );

	values = [
		'5',
		-5,
		3.14,
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
			results( new ArrayBuffer( 1024 ), 0, value );
		};
	}
});

tape( 'the function returns a constructor which throws an error if provided an invalid `alternative` property value', function test( t ) {
	var results;
	var values;
	var i;

	results = resultsFactory( 'float64' );

	values = [
		'5',
		-5,
		3.14,
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
			results({
				'alternative': value
			});
		};
	}
});

tape( 'the function returns a constructor which does not require the `new` operator', function test( t ) {
	var results;
	var res;

	results = resultsFactory( 'float64' );

	res = results();
	t.strictEqual( res instanceof results, true, 'returns expected value' );

	res = results( {} );
	t.strictEqual( res instanceof results, true, 'returns expected value' );

	res = results( new ArrayBuffer( 1024 ) );
	t.strictEqual( res instanceof results, true, 'returns expected value' );

	res = results( new ArrayBuffer( 1024 ), 0 );
	t.strictEqual( res instanceof results, true, 'returns expected value' );

	res = results( new ArrayBuffer( 1024 ), 0, 1024 );
	t.strictEqual( res instanceof results, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a constructor for creating a fixed-width results object (dtype=float64)', function test( t ) {
	var expected;
	var Results;
	var actual;

	Results = resultsFactory( 'float64' );
	t.strictEqual( typeof Results, 'function', 'returns expected value' );

	actual = new Results({
		'rejected': true,
		'alpha': 0.05,
		'pValue': 0.0132,
		'statistic': 2.4773,
		'nullValue': 0.0,
		'xmean': 3.7561,
		'ymean': 3.0129,
		'ci': new Float64Array( [ 0.1552, 1.3311 ] ),
		'alternative': 'two-sided'
	});

	expected = {
		'rejected': true,
		'alpha': 0.05,
		'pValue': 0.0132,
		'statistic': 2.4773,
		'nullValue': 0.0,
		'xmean': 3.7561,
		'ymean': 3.0129,
		'ci': new Float64Array( [ 0.1552, 1.3311 ] ),
		'alternative': 'two-sided'
	};

	t.strictEqual( actual instanceof Results, true, 'returns expected value' );
	t.strictEqual( actual.rejected, expected.rejected, 'returns expected value' );
	t.strictEqual( actual.alpha, expected.alpha, 'returns expected value' );
	t.strictEqual( actual.pValue, expected.pValue, 'returns expected value' );
	t.strictEqual( actual.statistic, expected.statistic, 'returns expected value' );
	t.strictEqual( actual.nullValue, expected.nullValue, 'returns expected value' );
	t.strictEqual( actual.xmean, expected.xmean, 'returns expected value' );
	t.strictEqual( actual.ymean, expected.ymean, 'returns expected value' );
	t.strictEqual( actual.alternative, expected.alternative, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( actual.ci, expected.ci ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a constructor for creating a fixed-width results object (dtype=float32)', function test( t ) {
	var expected;
	var Results;
	var actual;

	Results = resultsFactory( 'float32' );
	t.strictEqual( typeof Results, 'function', 'returns expected value' );

	actual = new Results({
		'rejected': true,
		'alpha': f32( 0.05 ),
		'pValue': f32( 0.0132 ),
		'statistic': f32( 2.4773 ),
		'nullValue': f32( 0.0 ),
		'xmean': f32( 3.7561 ),
		'ymean': f32( 3.0129 ),
		'ci': new Float32Array( [ 0.1552, 1.3311 ] ),
		'alternative': 'two-sided'
	});

	expected = {
		'rejected': true,
		'alpha': f32( 0.05 ),
		'pValue': f32( 0.0132 ),
		'statistic': f32( 2.4773 ),
		'nullValue': f32( 0.0 ),
		'xmean': f32( 3.7561 ),
		'ymean': f32( 3.0129 ),
		'ci': new Float32Array( [ 0.1552, 1.3311 ] ),
		'alternative': 'two-sided'
	};

	t.strictEqual( actual instanceof Results, true, 'returns expected value' );
	t.strictEqual( actual.rejected, expected.rejected, 'returns expected value' );
	t.strictEqual( actual.alpha, expected.alpha, 'returns expected value' );
	t.strictEqual( actual.pValue, expected.pValue, 'returns expected value' );
	t.strictEqual( actual.statistic, expected.statistic, 'returns expected value' );
	t.strictEqual( actual.nullValue, expected.nullValue, 'returns expected value' );
	t.strictEqual( actual.xmean, expected.xmean, 'returns expected value' );
	t.strictEqual( actual.ymean, expected.ymean, 'returns expected value' );
	t.strictEqual( actual.alternative, expected.alternative, 'returns expected value' );
	t.strictEqual( isSameFloat32Array( actual.ci, expected.ci ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a constructor for creating a fixed-width results object (no arguments)', function test( t ) {
	var expected;
	var Results;
	var actual;

	Results = resultsFactory( 'float64' );
	t.strictEqual( typeof Results, 'function', 'returns expected value' );

	actual = new Results();

	actual.rejected = true;
	actual.alpha = 0.05;
	actual.pValue = 0.0132;
	actual.statistic = 2.4773;
	actual.nullValue = 0.0;
	actual.xmean = 3.7561;
	actual.ymean = 3.0129;
	actual.ci = new Float64Array( [ 0.1552, 1.3311 ] );
	actual.alternative = 'two-sided';

	expected = {
		'rejected': true,
		'alpha': 0.05,
		'pValue': 0.0132,
		'statistic': 2.4773,
		'nullValue': 0.0,
		'xmean': 3.7561,
		'ymean': 3.0129,
		'ci': new Float64Array( [ 0.1552, 1.3311 ] ),
		'alternative': 'two-sided'
	};

	t.strictEqual( actual instanceof Results, true, 'returns expected value' );
	t.strictEqual( actual.rejected, expected.rejected, 'returns expected value' );
	t.strictEqual( actual.alpha, expected.alpha, 'returns expected value' );
	t.strictEqual( actual.pValue, expected.pValue, 'returns expected value' );
	t.strictEqual( actual.statistic, expected.statistic, 'returns expected value' );
	t.strictEqual( actual.nullValue, expected.nullValue, 'returns expected value' );
	t.strictEqual( actual.xmean, expected.xmean, 'returns expected value' );
	t.strictEqual( actual.ymean, expected.ymean, 'returns expected value' );
	t.strictEqual( actual.alternative, expected.alternative, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( actual.ci, expected.ci ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a constructor for creating a fixed-width results object (empty object)', function test( t ) {
	var expected;
	var Results;
	var actual;

	Results = resultsFactory( 'float64' );
	t.strictEqual( typeof Results, 'function', 'returns expected value' );

	actual = new Results( {} );

	actual.rejected = true;
	actual.alpha = 0.05;
	actual.pValue = 0.0132;
	actual.statistic = 2.4773;
	actual.nullValue = 0.0;
	actual.xmean = 3.7561;
	actual.ymean = 3.0129;
	actual.ci = new Float64Array( [ 0.1552, 1.3311 ] );
	actual.alternative = 'two-sided';

	expected = {
		'rejected': true,
		'alpha': 0.05,
		'pValue': 0.0132,
		'statistic': 2.4773,
		'nullValue': 0.0,
		'xmean': 3.7561,
		'ymean': 3.0129,
		'ci': new Float64Array( [ 0.1552, 1.3311 ] ),
		'alternative': 'two-sided'
	};

	t.strictEqual( actual instanceof Results, true, 'returns expected value' );
	t.strictEqual( actual.rejected, expected.rejected, 'returns expected value' );
	t.strictEqual( actual.alpha, expected.alpha, 'returns expected value' );
	t.strictEqual( actual.pValue, expected.pValue, 'returns expected value' );
	t.strictEqual( actual.statistic, expected.statistic, 'returns expected value' );
	t.strictEqual( actual.nullValue, expected.nullValue, 'returns expected value' );
	t.strictEqual( actual.xmean, expected.xmean, 'returns expected value' );
	t.strictEqual( actual.ymean, expected.ymean, 'returns expected value' );
	t.strictEqual( actual.alternative, expected.alternative, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( actual.ci, expected.ci ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a constructor for creating a fixed-width results object (ArrayBuffer)', function test( t ) {
	var expected;
	var Results;
	var actual;
	var buf;

	Results = resultsFactory( 'float64' );
	t.strictEqual( typeof Results, 'function', 'returns expected value' );

	buf = new ArrayBuffer( 1024 );
	actual = new Results( buf );

	actual.rejected = true;
	actual.alpha = 0.05;
	actual.pValue = 0.0132;
	actual.statistic = 2.4773;
	actual.nullValue = 0.0;
	actual.xmean = 3.7561;
	actual.ymean = 3.0129;
	actual.ci = new Float64Array( [ 0.1552, 1.3311 ] );
	actual.alternative = 'two-sided';

	expected = {
		'rejected': true,
		'alpha': 0.05,
		'pValue': 0.0132,
		'statistic': 2.4773,
		'nullValue': 0.0,
		'xmean': 3.7561,
		'ymean': 3.0129,
		'ci': new Float64Array( [ 0.1552, 1.3311 ] ),
		'alternative': 'two-sided'
	};

	t.strictEqual( actual instanceof Results, true, 'returns expected value' );
	t.strictEqual( actual.toDataView().buffer, buf, 'returns expected value' );
	t.strictEqual( actual.toDataView().byteOffset, 0, 'returns expected value' );
	t.strictEqual( actual.rejected, expected.rejected, 'returns expected value' );
	t.strictEqual( actual.alpha, expected.alpha, 'returns expected value' );
	t.strictEqual( actual.pValue, expected.pValue, 'returns expected value' );
	t.strictEqual( actual.statistic, expected.statistic, 'returns expected value' );
	t.strictEqual( actual.nullValue, expected.nullValue, 'returns expected value' );
	t.strictEqual( actual.xmean, expected.xmean, 'returns expected value' );
	t.strictEqual( actual.ymean, expected.ymean, 'returns expected value' );
	t.strictEqual( actual.alternative, expected.alternative, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( actual.ci, expected.ci ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a constructor for creating a fixed-width results object (ArrayBuffer, byteOffset)', function test( t ) {
	var expected;
	var Results;
	var actual;
	var buf;

	Results = resultsFactory( 'float64' );
	t.strictEqual( typeof Results, 'function', 'returns expected value' );

	buf = new ArrayBuffer( 1024 );
	actual = new Results( buf, 16 );

	actual.rejected = true;
	actual.alpha = 0.05;
	actual.pValue = 0.0132;
	actual.statistic = 2.4773;
	actual.nullValue = 0.0;
	actual.xmean = 3.7561;
	actual.ymean = 3.0129;
	actual.ci = new Float64Array( [ 0.1552, 1.3311 ] );
	actual.alternative = 'two-sided';

	expected = {
		'rejected': true,
		'alpha': 0.05,
		'pValue': 0.0132,
		'statistic': 2.4773,
		'nullValue': 0.0,
		'xmean': 3.7561,
		'ymean': 3.0129,
		'ci': new Float64Array( [ 0.1552, 1.3311 ] ),
		'alternative': 'two-sided'
	};

	t.strictEqual( actual instanceof Results, true, 'returns expected value' );
	t.strictEqual( actual.toDataView().buffer, buf, 'returns expected value' );
	t.strictEqual( actual.toDataView().byteOffset, 16, 'returns expected value' );
	t.strictEqual( actual.rejected, expected.rejected, 'returns expected value' );
	t.strictEqual( actual.alpha, expected.alpha, 'returns expected value' );
	t.strictEqual( actual.pValue, expected.pValue, 'returns expected value' );
	t.strictEqual( actual.statistic, expected.statistic, 'returns expected value' );
	t.strictEqual( actual.nullValue, expected.nullValue, 'returns expected value' );
	t.strictEqual( actual.xmean, expected.xmean, 'returns expected value' );
	t.strictEqual( actual.ymean, expected.ymean, 'returns expected value' );
	t.strictEqual( actual.alternative, expected.alternative, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( actual.ci, expected.ci ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a constructor for creating a fixed-width results object (ArrayBuffer, byteOffset, byteLength)', function test( t ) {
	var expected;
	var Results;
	var actual;
	var buf;

	Results = resultsFactory( 'float64' );
	t.strictEqual( typeof Results, 'function', 'returns expected value' );

	buf = new ArrayBuffer( 1024 );
	actual = new Results( buf, 16, 160 );

	actual.rejected = true;
	actual.alpha = 0.05;
	actual.pValue = 0.0132;
	actual.statistic = 2.4773;
	actual.nullValue = 0.0;
	actual.xmean = 3.7561;
	actual.ymean = 3.0129;
	actual.ci = new Float64Array( [ 0.1552, 1.3311 ] );
	actual.alternative = 'two-sided';

	expected = {
		'rejected': true,
		'alpha': 0.05,
		'pValue': 0.0132,
		'statistic': 2.4773,
		'nullValue': 0.0,
		'xmean': 3.7561,
		'ymean': 3.0129,
		'ci': new Float64Array( [ 0.1552, 1.3311 ] ),
		'alternative': 'two-sided'
	};

	t.strictEqual( actual instanceof Results, true, 'returns expected value' );
	t.strictEqual( actual.toDataView().buffer, buf, 'returns expected value' );
	t.strictEqual( actual.toDataView().byteOffset, 16, 'returns expected value' );
	t.strictEqual( actual.rejected, expected.rejected, 'returns expected value' );
	t.strictEqual( actual.alpha, expected.alpha, 'returns expected value' );
	t.strictEqual( actual.pValue, expected.pValue, 'returns expected value' );
	t.strictEqual( actual.statistic, expected.statistic, 'returns expected value' );
	t.strictEqual( actual.nullValue, expected.nullValue, 'returns expected value' );
	t.strictEqual( actual.xmean, expected.xmean, 'returns expected value' );
	t.strictEqual( actual.ymean, expected.ymean, 'returns expected value' );
	t.strictEqual( actual.alternative, expected.alternative, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( actual.ci, expected.ci ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a constructor which returns an instance having a method property', function test( t ) {
	var Results;
	var results;

	Results = resultsFactory( 'float64' );
	t.strictEqual( typeof Results, 'function', 'returns expected value' );

	results = new Results();

	t.strictEqual( results.method, 'Two-sample Z-test', 'returns expected value' );
	t.end();
});

tape( 'the function returns a constructor which returns an instance having a `toString` method', function test( t ) {
	var Results;
	var results;
	var actual;

	Results = resultsFactory( 'float64' );
	t.strictEqual( typeof Results, 'function', 'returns expected value' );

	results = new Results();

	actual = results.toString();
	t.strictEqual( typeof actual, 'string', 'returns expected value' );

	actual = results.toString({
		'decision': false
	});
	t.strictEqual( typeof actual, 'string', 'returns expected value' );
	t.end();
});

tape( 'the function returns a constructor which returns an instance having a `toJSON` method', function test( t ) {
	var Results;
	var results;

	Results = resultsFactory( 'float64' );
	t.strictEqual( typeof Results, 'function', 'returns expected value' );

	results = new Results();
	t.strictEqual( typeof results.toJSON, 'function', 'returns expected value' );
	t.strictEqual( typeof results.toJSON(), 'object', 'returns expected value' );

	t.end();
});

tape( 'the function returns a constructor which returns an instance having a `toDataView` method', function test( t ) {
	var Results;
	var results;

	Results = resultsFactory( 'float64' );
	t.strictEqual( typeof Results, 'function', 'returns expected value' );

	results = new Results();
	t.strictEqual( typeof results.toDataView, 'function', 'returns expected value' );
	t.strictEqual( isDataView( results.toDataView() ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a constructor having a `name` property', function test( t ) {
	var Results = resultsFactory( 'float64' );
	t.strictEqual( typeof Results, 'function', 'returns expected value' );
	t.strictEqual( typeof Results.name, 'string', 'returns expected value' );
	t.end();
});

tape( 'the function returns a constructor having an `alignment` property', function test( t ) {
	var Results = resultsFactory( 'float64' );
	t.strictEqual( typeof Results, 'function', 'returns expected value' );
	t.strictEqual( typeof Results.alignment, 'number', 'returns expected value' );
	t.end();
});

tape( 'the function returns a constructor having a `byteLength` property', function test( t ) {
	var Results = resultsFactory( 'float64' );
	t.strictEqual( typeof Results, 'function', 'returns expected value' );
	t.strictEqual( typeof Results.byteLength, 'number', 'returns expected value' );
	t.end();
});

tape( 'the function returns a constructor having a `fields` property', function test( t ) {
	var Results = resultsFactory( 'float64' );
	t.strictEqual( typeof Results, 'function', 'returns expected value' );
	t.strictEqual( isStringArray( Results.fields ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a constructor having a `layout` property', function test( t ) {
	var Results = resultsFactory( 'float64' );
	t.strictEqual( typeof Results, 'function', 'returns expected value' );
	t.strictEqual( typeof Results.layout, 'string', 'returns expected value' );
	t.end();
});

tape( 'the function returns a constructor having a `bufferOf` method', function test( t ) {
	var Results = resultsFactory( 'float64' );
	t.strictEqual( typeof Results, 'function', 'returns expected value' );
	t.strictEqual( typeof Results.bufferOf, 'function', 'returns expected value' );
	t.end();
});

tape( 'the function returns a constructor having a `byteLengthOf` method', function test( t ) {
	var Results = resultsFactory( 'float64' );
	t.strictEqual( typeof Results, 'function', 'returns expected value' );
	t.strictEqual( typeof Results.byteLengthOf, 'function', 'returns expected value' );
	t.end();
});

tape( 'the function returns a constructor having a `byteOffsetOf` method', function test( t ) {
	var Results = resultsFactory( 'float64' );
	t.strictEqual( typeof Results, 'function', 'returns expected value' );
	t.strictEqual( typeof Results.byteOffsetOf, 'function', 'returns expected value' );
	t.end();
});

tape( 'the function returns a constructor having a `descriptionOf` method', function test( t ) {
	var Results = resultsFactory( 'float64' );
	t.strictEqual( typeof Results, 'function', 'returns expected value' );
	t.strictEqual( typeof Results.descriptionOf, 'function', 'returns expected value' );
	t.end();
});

tape( 'the function returns a constructor having an `isStruct` method', function test( t ) {
	var Results = resultsFactory( 'float64' );
	t.strictEqual( typeof Results, 'function', 'returns expected value' );
	t.strictEqual( typeof Results.isStruct, 'function', 'returns expected value' );
	t.end();
});

tape( 'the function returns a constructor having a `viewOf` method', function test( t ) {
	var Results = resultsFactory( 'float64' );
	t.strictEqual( typeof Results, 'function', 'returns expected value' );
	t.strictEqual( typeof Results.viewOf, 'function', 'returns expected value' );
	t.end();
});
