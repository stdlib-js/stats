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

/**
* Compute the standard deviation of an array ignoring `NaN` values and using Welford's algorithm.
*
* @module @stdlib/stats/array/nanstdevwd
*
* @example
* var nanstdevwd = require( '@stdlib/stats/array/nanstdevwd' );
*
* var x = [ 1.0, -2.0, NaN, 2.0 ];
*
* var v = nanstdevwd( x, 1.0 );
* // returns ~2.0817
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
