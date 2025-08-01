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
* Compute a two-sample Z-test.
*
* @module @stdlib/stats/strided/ztest2
*
* @example
* var Results = require( '@stdlib/stats/base/ztest/two-sample/results/float64' );
* var ztest2 = require( '@stdlib/stats/strided/ztest2' );
*
* var x = [ 4.0, 4.0, 6.0, 6.0, 5.0 ];
* var y = [ 3.0, 3.0, 5.0, 7.0, 7.0 ];
*
* var results = new Results();
* var out = ztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 2.0, y, 1, results );
* // returns {...}
*
* var bool = ( out === results );
* // returns true
*
* @example
* var Results = require( '@stdlib/stats/base/ztest/two-sample/results/float64' );
* var ztest2 = require( '@stdlib/stats/strided/ztest2' );
*
* var x = [ 4.0, 4.0, 6.0, 6.0, 5.0 ];
* var y = [ 3.0, 3.0, 5.0, 7.0, 7.0 ];
*
* var results = new Results();
* var out = ztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 2.0, y, 1, 0, results );
* // returns {...}
*
* var bool = ( out === results );
* // returns true
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;

// exports: { "ndarray": "main.ndarray" }
