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

var uniform = require( '@stdlib/random/base/uniform' );
var EPS = require( '@stdlib/constants/float64/eps' );
var entropy = require( './../lib' );

var alpha;
var beta;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
	alpha = uniform( EPS, 10.0 );
	beta = uniform( EPS, 10.0 );
	v = entropy( alpha, beta );
	console.log( 'α: %d, β: %d, h(X;α,β): %d', alpha.toFixed( 4 ), beta.toFixed( 4 ), v.toFixed( 4 ) );
}
