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

var abs = require( '@stdlib/math/base/special/abs' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var exp = require( '@stdlib/math/base/special/exp' );
var expm1 = require( '@stdlib/math/base/special/expm1' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );


// MAIN //

/**
* Returns the standard deviation of a Planck distribution.
*
* @param {PositiveNumber} lambda - shape parameter
* @returns {PositiveNumber} standard deviation
*
* @example
* var v = stdev( 0.1 );
* // returns ~9.9958
*
* @example
* var v = stdev( 1.5 );
* // returns ~0.6080
*
* @example
* var v = stdev( -1.1 );
* // returns NaN
*
* @example
* var v = stdev( NaN );
* // returns NaN
*/
function stdev( lambda ) {
	if ( isnan( lambda ) || lambda <= 0.0 ) {
		return NaN;
	}
	return sqrt( exp( -lambda ) ) / abs( expm1( -lambda ) );
}


// EXPORTS //

module.exports = stdev;
