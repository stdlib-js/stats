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

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Evaluates the moment-generating function (MGF) for a Weibull distribution with shape `k` and scale `lambda` at a value `t`.
*
* @private
* @param {number} t - input value
* @param {PositiveNumber} k - shape parameter
* @param {PositiveNumber} lambda - scale parameter
* @returns {number} evaluated MGF
*
* @example
* var y = mgf( 1.0, 1.0, 0.5 );
* // returns ~2.0
*
* @example
* var y = mgf( -1.0, 4.0, 4.0 );
* // returns ~0.019
*
* @example
* var y = mgf( NaN, 1.0, 1.0 );
* // returns NaN
*
* @example
* var y = mgf( 0.0, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = mgf( 0.0, 1.0, NaN );
* // returns NaN
*
* @example
* var y = mgf( 0.2, -1.0, 0.5 );
* // returns NaN
*
* @example
* var y = mgf( 0.2, 0.0, 0.5 );
* // returns NaN
*
* @example
* var y = mgf( 0.2, 0.5, -1.0 );
* // returns NaN
*
* @example
* var y = mgf( 0.2, 0.5, 0.0 );
* // returns NaN
*/
function mgf( t, k, lambda ) {
	return addon( t, k, lambda );
}


// EXPORTS //

module.exports = mgf;
