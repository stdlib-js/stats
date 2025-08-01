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

var factory = require( './../../../../../../base/ztest/one-sample/results/factory' );


// MAIN //

/**
* Returns a one-sample Z-test double-precision floating-point results object.
*
* @name Results
* @constructor
* @type {Function}
* @param {ArrayBuffer} [buffer] - underlying byte buffer
* @param {NonNegativeInteger} [byteOffset] - byte offset
* @param {NonNegativeInteger} [byteLength] - maximum byte length
* @returns {Results} results object
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var results = new Results();
* // returns <Results>
*
* results.alternative = 'two-sided';
* results.alpha = 0.05;
* results.nullValue = 0.0;
* results.pValue = 0.3374;
* results.statistic = 0.9592;
* results.sd = 0.4535;
* results.ci = new Float64Array( [ -0.0316, 0.0923 ] );
* results.rejected = false;
*
* var str = results.toString();
* // returns <string>
*/
var Results = factory( 'float64' );


// EXPORTS //

module.exports = Results;
