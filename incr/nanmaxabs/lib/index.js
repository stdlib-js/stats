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
* Compute a maximum absolute value incrementally, ignoring `NaN` values.
*
* @module @stdlib/stats/incr/nanmaxabs
*
* @example
* var incrnanmaxabs = require( '@stdlib/stats/incr/nanmaxabs' );
*
* var accumulator = incrnanmaxabs();
*
* var max = accumulator();
* // returns null
*
* max = accumulator( 3.14 );
* // returns 3.14
*
* max = accumulator( -5.0 );
* // returns 5.0
*
* max = accumulator( NaN );
* // returns 5.0
*
* max = accumulator( 10.1 );
* // returns 10.1
*
* max = accumulator();
* // returns 10.1
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
