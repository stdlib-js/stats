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
* Bradford distribution cumulative distribution function (CDF).
*
* @module @stdlib/stats/base/dists/bradford/cdf
*
* @example
* var cdf = require( '@stdlib/stats/base/dists/bradford/cdf' );
*
* var y = cdf( 0.5, 5.0 );
* // returns ~0.699
*
* var myCDF = cdf.factory( 5.0 );
* y = myCDF( 0.5 );
* // returns ~0.699
*
* y = myCDF( 1.0 );
* // returns 1.0
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
