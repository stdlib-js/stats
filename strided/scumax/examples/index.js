/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var Float32Array = require( '@stdlib/array/float32' );
var scumax = require( './../lib' );

var x = discreteUniform( 10, -50, 50, {
	'dtype': 'float32'
});
console.log( x );

var y = new Float32Array( x.length );
console.log( y );

scumax( x.length, x, 1, y, -1 );
console.log( y );
