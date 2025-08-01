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
var Float64Array = require( '@stdlib/array/float64' );
var Float32Array = require( '@stdlib/array/float32' );
var resolveEnum = require( './../../../../../../base/ztest/alternative-resolve-enum' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var structFactory = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof structFactory, 'function', 'main export is a function' );
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
			structFactory( value );
		};
	}
});

tape( 'the function returns a constructor for creating a fixed-width results object (dtype=float64)', function test( t ) {
	var expected;
	var actual;
	var Struct;

	Struct = structFactory( 'float64' );
	t.strictEqual( typeof Struct, 'function', 'returns expected value' );

	actual = new Struct({
		'rejected': true,
		'alpha': 0.05,
		'pValue': 0.3364,
		'statistic': 11.7586,
		'nullValue': 0.0,
		'sd': 0.4563,
		'ci': new Float64Array( [ 9.9983, 11.4123 ] ),
		'alternative': resolveEnum( 'two-sided' )
	});

	expected = {
		'rejected': true,
		'alpha': 0.05,
		'pValue': 0.3364,
		'statistic': 11.7586,
		'nullValue': 0.0,
		'sd': 0.4563,
		'ci': new Float64Array( [ 9.9983, 11.4123 ] ),
		'alternative': resolveEnum( 'two-sided' )
	};

	t.strictEqual( actual instanceof Struct, true, 'returns expected value' );
	t.strictEqual( actual.rejected, expected.rejected, 'returns expected value' );
	t.strictEqual( actual.alpha, expected.alpha, 'returns expected value' );
	t.strictEqual( actual.pValue, expected.pValue, 'returns expected value' );
	t.strictEqual( actual.statistic, expected.statistic, 'returns expected value' );
	t.strictEqual( actual.nullValue, expected.nullValue, 'returns expected value' );
	t.strictEqual( actual.sd, expected.sd, 'returns expected value' );
	t.strictEqual( actual.alternative, expected.alternative, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( actual.ci, expected.ci ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a constructor for creating a fixed-width results object (dtype=float32)', function test( t ) {
	var expected;
	var actual;
	var Struct;

	Struct = structFactory( 'float32' );
	t.strictEqual( typeof Struct, 'function', 'returns expected value' );

	actual = new Struct({
		'rejected': true,
		'alpha': f32( 0.05 ),
		'pValue': f32( 0.3364 ),
		'statistic': f32( 11.7586 ),
		'nullValue': f32( 0.0 ),
		'sd': f32( 0.4563 ),
		'ci': new Float32Array( [ 9.9983, 11.4123 ] ),
		'alternative': resolveEnum( 'two-sided' )
	});

	expected = {
		'rejected': true,
		'alpha': f32( 0.05 ),
		'pValue': f32( 0.3364 ),
		'statistic': f32( 11.7586 ),
		'nullValue': f32( 0.0 ),
		'sd': f32( 0.4563 ),
		'ci': new Float32Array( [ 9.9983, 11.4123 ] ),
		'alternative': resolveEnum( 'two-sided' )
	};

	t.strictEqual( actual instanceof Struct, true, 'returns expected value' );
	t.strictEqual( actual.rejected, expected.rejected, 'returns expected value' );
	t.strictEqual( actual.alpha, expected.alpha, 'returns expected value' );
	t.strictEqual( actual.pValue, expected.pValue, 'returns expected value' );
	t.strictEqual( actual.statistic, expected.statistic, 'returns expected value' );
	t.strictEqual( actual.nullValue, expected.nullValue, 'returns expected value' );
	t.strictEqual( actual.sd, expected.sd, 'returns expected value' );
	t.strictEqual( actual.alternative, expected.alternative, 'returns expected value' );
	t.strictEqual( isSameFloat32Array( actual.ci, expected.ci ), true, 'returns expected value' );
	t.end();
});
