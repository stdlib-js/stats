/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var exp = require( '@stdlib/math/base/special/exp' );
var expm1 = require( '@stdlib/math/base/special/expm1' );


// MAIN //

/**
* Returns the variance of a Planck distribution.
*
* @param {PositiveNumber} lambda - shape parameter
* @returns {PositiveNumber} variance
*
* @example
* var v = variance( 0.1 );
* // returns ~99.9167
*
* @example
* var v = variance( 1.5 );
* // returns ~0.3697
*
* @example
* var v = variance( -1.0 );
* // returns NaN
*
* @example
* var v = variance( NaN );
* // returns NaN
*/
function variance( lambda ) {
	var temp;
	if ( isnan( lambda ) || lambda <= 0.0 ) {
		return NaN;
	}
	temp = expm1( -lambda );
	return exp( -lambda ) / ( temp * temp );
}


// EXPORTS //

module.exports = variance;
