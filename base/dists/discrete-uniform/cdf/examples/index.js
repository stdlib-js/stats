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

var randint = require( '@stdlib/random/base/discrete-uniform' );
var randu = require( '@stdlib/random/base/randu' );
var cdf = require( './../lib' );

var randa = randint.factory( 0, 10 );
var randb = randint.factory();
var a;
var b;
var x;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
	x = randu() * 15.0;
	a = randa();
	b = randb( a, a+randa() );
	v = cdf( x, a, b );
	console.log( 'x: %d, a: %d, b: %d, F(x;a,b): %d', x.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), v.toFixed( 4 ) );
}
