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
* Compute a moving corrected sample standard deviation incrementally, ignoring NaN values.
*
* @module @stdlib/stats/incr/nanmstdev
*
* @example
* var incrnanmstdev = require( '@stdlib/stats/incr/nanmstdev' );
*
* var accumulator = incrnanmstdev( 3 );
*
* var s = accumulator();
* // returns null
*
* s = accumulator( 2.0 );
* // returns 0.0
*
* s = accumulator( NaN );
* // returns 0.0
*
* s = accumulator( -5.0 );
* // returns ~4.95
*
* s = accumulator( 3.0 );
* // returns ~4.36
*
* s = accumulator( NaN );
* // returns ~4.36
*
* s = accumulator( 5.0 );
* // returns ~5.29
*
* s = accumulator();
* // returns ~5.29
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
