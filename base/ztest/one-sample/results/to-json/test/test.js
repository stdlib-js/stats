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
var Float64Array = require( '@stdlib/array/float64' );
var Float64Results = require( './../../../../../../base/ztest/one-sample/results/float64' );
var resolveEnum = require( './../../../../../../base/ztest/alternative-resolve-enum' );
var res2json = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof res2json, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function serializes a results object to JSON', function test( t ) {
	var expected;
	var actual;
	var value;

	value = new Float64Results();
	value.rejected = true;
	value.alpha = 0.05;
	value.pValue = 0.3364;
	value.statistic = 11.7586;
	value.nullValue = 0.0;
	value.sd = 0.4563;
	value.ci = new Float64Array( [ 9.9983, 11.4123 ] );
	value.alternative = resolveEnum( 'two-sided' );

	expected = {
		'rejected': true,
		'alpha': 0.05,
		'pValue': 0.3364,
		'statistic': 11.7586,
		'nullValue': 0.0,
		'sd': 0.4563,
		'ci': {
			'type': 'Float64Array',
			'data': [ 9.9983, 11.4123 ]
		},
		'alternative': 'two-sided',
		'method': 'One-sample Z-test'
	};

	actual = res2json( value );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});
