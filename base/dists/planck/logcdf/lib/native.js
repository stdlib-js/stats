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
* Evaluates the logarithm of the cumulative distribution function (CDF) for a Planck distribution with shape parameter `lambda`.
*
* @private
* @param {number} x - input value
* @param {number} lambda - shape parameter
* @returns {number} evaluated logCDF
*
* @example
* var y = logcdf( 2.0, 0.5 );
* // returns ~-0.2525
*
* @example
* var y = logcdf( 2.0, 1.5 );
* // returns ~-0.0112
*
* @example
* var y = logcdf( NaN, 0.5 );
* // returns NaN
*
* @example
* var y = logcdf( 0.0, NaN );
* // returns NaN
*
* @example
* var y = logcdf( 2.0, -1.0 );
* // returns NaN
*/
function logcdf( x, lambda ) {
	return addon( x, lambda );
}


// EXPORTS //

module.exports = logcdf;
