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

/**
* Compute the variance of a strided array.
*
* @module @stdlib/stats/strided/variance
*
* @example
* var variance = require( '@stdlib/stats/strided/variance' );
*
* var x = [ 1.0, -2.0, 2.0 ];
*
* var v = variance( x.length, 1, x, 1 );
* // returns ~4.3333
*
* @example
* var variance = require( '@stdlib/stats/strided/variance' );
*
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ];
*
* var v = variance.ndarray( 4, 1, x, 2, 1 );
* // returns 6.25
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;

// exports: { "ndarray": "main.ndarray" }
