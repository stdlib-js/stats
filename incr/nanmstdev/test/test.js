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
var abs = require( '@stdlib/math/base/special/abs' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var randu = require( '@stdlib/random/base/randu' );
var EPS = require( '@stdlib/constants/float64/eps' );
var incrnanmstdev = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof incrnanmstdev, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a positive integer for the window size', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		3.14,
		true,
		null,
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
			incrnanmstdev( value );
		};
	}
});

tape( 'the function throws an error if not provided a positive integer for the window size (known mean)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		3.14,
		true,
		null,
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
			incrnanmstdev( value, 5.0 );
		};
	}
});

tape( 'the function throws an error if not provided a number as the mean value', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
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
			incrnanmstdev( 3, value );
		};
	}
});

tape( 'the function returns an accumulator function', function test( t ) {
	t.equal( typeof incrnanmstdev( 3 ), 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns an accumulator function (known mean)', function test( t ) {
	t.equal( typeof incrnanmstdev( 3, 3.0 ), 'function', 'returns a function' );
	t.end();
});

tape( 'the accumulator function computes a moving corrected sample standard deviation incrementally', function test( t ) {
	var expected;
	var actual;
	var data;
	var acc;
	var N;
	var i;

	data = [ 2.0, 3.0, 4.0, -1.0, 3.0, 1.0 ];
	N = data.length;

	acc = incrnanmstdev( 3 );

	actual = [];
	for ( i = 0; i < N; i++ ) {
		actual.push( acc( data[ i ] ) );
	}
	expected = [
		0.0,
		sqrt( 0.5 ),
		1.0,
		sqrt( 7.0 ),
		sqrt( 7.0 ),
		2.0
	];

	t.deepEqual( actual, expected, 'returns expected incremental results' );
	t.end();
});

tape( 'the accumulator function computes a moving corrected sample standard deviation incrementally (known mean)', function test( t ) {
	var expected;
	var actual;
	var data;
	var acc;
	var N;
	var i;

	data = [ 2.0, 3.0, 4.0, -1.0, 3.0, 1.0 ];
	N = data.length;

	acc = incrnanmstdev( 3, 2.0 );

	actual = [];
	for ( i = 0; i < N; i++ ) {
		actual.push( acc( data[ i ] ) );
	}
	expected = [
		0.0,
		sqrt( 0.5 ),
		sqrt( 1.6666666666666666 ),
		sqrt( 4.6666666666666666 ),
		sqrt( 4.6666666666666666 ),
		sqrt( 3.6666666666666666 )
	];

	t.deepEqual( actual, expected, 'returns expected incremental results' );
	t.end();
});

tape( 'if not provided an input value, the accumulator function returns the current corrected sample standard deviation', function test( t ) {
	var expected;
	var actual;
	var delta;
	var data;
	var tol;
	var acc;
	var i;

	data = [ 2.0, 3.0, 10.0 ];
	acc = incrnanmstdev( 3 );
	for ( i = 0; i < data.length-1; i++ ) {
		acc( data[ i ] );
	}
	t.equal( acc(), sqrt( 0.5 ), 'returns current corrected sample standard deviation' );

	acc( data[ data.length-1 ] );

	expected = sqrt( 19.0 );
	actual = acc();
	delta = abs( actual - expected );
	tol = EPS * expected;

	t.equal( delta < tol, true, 'expected: '+expected+'. actual: '+actual+'. tol: '+tol+'. delta: '+delta+'.' );
	t.end();
});

tape( 'if not provided an input value, the accumulator function returns the current corrected sample standard deviation (known mean)', function test( t ) {
	var expected;
	var actual;
	var delta;
	var data;
	var tol;
	var acc;
	var i;

	data = [ 2.0, 3.0, 10.0 ];
	acc = incrnanmstdev( 3, 5.0 );
	for ( i = 0; i < data.length-1; i++ ) {
		acc( data[ i ] );
	}
	t.equal( acc(), sqrt( 6.5 ), 'returns current unbiased sample variance' );

	acc( data[ data.length-1 ] );

	expected = sqrt( 12.666666666666666 );
	actual = acc();
	delta = abs( actual - expected );
	tol = EPS * expected;

	t.equal( delta < tol, true, 'expected: '+expected+'. actual: '+actual+'. tol: '+tol+'. delta: '+delta+'.' );
	t.end();
});

tape( 'if data has yet to be provided, the accumulator function returns `null`', function test( t ) {
	var acc = incrnanmstdev( 3 );
	t.equal( acc(), null, 'returns null' );
	t.end();
});

tape( 'if data has yet to be provided, the accumulator function returns `null` (known mean)', function test( t ) {
	var acc = incrnanmstdev( 3, 3.0 );
	t.equal( acc(), null, 'returns null' );
	t.end();
});

tape( 'if only one datum has been provided and the mean is unknown, the accumulator function returns `0`', function test( t ) {
	var acc = incrnanmstdev( 3 );
	acc( 2.0 );
	t.equal( acc(), 0.0, 'returns 0' );
	t.end();
});

tape( 'if only one datum has been provided and the mean is known, the accumulator function may not return `0`', function test( t ) {
	var acc = incrnanmstdev( 3, 3.0 );
	acc( 2.0 );
	t.notEqual( acc(), 0.0, 'does not return 0' );
	t.end();
});

tape( 'if the window size is `1` and the mean is unknown, the accumulator functions always returns `0`', function test( t ) {
	var acc;
	var s;
	var i;

	acc = incrnanmstdev( 1 );
	for ( i = 0; i < 100; i++ ) {
		s = acc( randu() * 100.0 );
		t.equal( s, 0.0, 'returns 0' );
	}
	t.end();
});

tape( 'if the window size is `1` and the mean is known, the accumulator functions does not always returns `0`', function test( t ) {
	var acc;
	var s;
	var i;

	acc = incrnanmstdev( 1, 500.0 ); // mean is larger than simulated value range, so stdev should never be zero
	for ( i = 0; i < 100; i++ ) {
		s = acc( randu() * 100.0 );
		t.notEqual( s, 0.0, 'does not return 0' );
	}
	t.end();
});

tape( 'if provided a NaN, the accumulator function ignores it (unknown mean, W=1)', function test( t ) {
	var expected;
	var data;
	var acc;
	var v;
	var i;

	acc = incrnanmstdev( 1 );

	data = [
		NaN,  // NaN (ignored) -> null
		3.14, // 3.14 -> 0
		NaN,  // NaN (ignored) -> 0
		4.2,  // 4.2 -> 0
		NaN,  // NaN (ignored) -> 0
		5.6   // 5.6 -> 0
	];

	expected = [
		null,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	];

	for ( i = 0; i < data.length; i++ ) {
		v = acc( data[ i ] );
		if ( expected[i] === null ) {
			t.equal( v, null, 'returns null for window '+i );
		} else {
			t.equal( v, expected[ i ], 'returns expected value for window '+i );
		}

		// Test accumulator without arguments
		if (expected[i] === null) {
			t.equal( acc(), null, 'returns correct value for window '+i );
		} else {
			t.equal( acc(), expected[ i ], 'returns expected value for window '+i );
		}
	}
	t.end();
});

tape( 'if provided a NaN, the accumulator function ignores it (known mean, W=1)', function test( t ) {
	var expected;
	var data;
	var acc;
	var v;
	var i;

	acc = incrnanmstdev( 1, 5.0 );

	data = [
		NaN,  // NaN (ignored) -> null
		3.0,  // 3.0 -> 2.0
		NaN,  // NaN (ignored) -> 2.0
		4.0,  // 4.0 -> 1.0
		NaN,  // NaN (ignored) -> 1.0
		5.0   // 5.0 -> 0.0
	];

	expected = [
		null,
		2.0,
		2.0,
		1.0,
		1.0,
		0.0
	];

	for ( i = 0; i < data.length; i++ ) {
		v = acc( data[ i ] );
		if ( expected[i] === null ) {
			t.equal( v, null, 'returns null for window '+i );
		} else {
			t.equal( v, expected[ i ], 'returns expected value for window '+i );
		}

		// Test accumulator without arguments
		if (expected[i] === null) {
			t.equal( acc(), null, 'returns correct value for window '+i );
		} else {
			t.equal( acc(), expected[ i ], 'returns expected value for window '+i );
		}
	}
	t.end();
});

tape( 'if provided a sequence of NaN values, the accumulator function should continue to ignore them', function test( t ) {
	var acc;
	var v;

	acc = incrnanmstdev( 3 );

	v = acc( 2.0 );
	t.equal( v, 0.0, 'returns expected value' );

	v = acc( NaN );
	t.equal( v, 0.0, 'returns expected value' );

	v = acc( NaN );
	t.equal( v, 0.0, 'returns expected value' );

	v = acc( NaN );
	t.equal( v, 0.0, 'returns expected value' );

	v = acc( 3.0 );
	t.equal( v.toFixed(4), sqrt(0.5).toFixed(4), 'returns expected value' );

	t.end();
});
