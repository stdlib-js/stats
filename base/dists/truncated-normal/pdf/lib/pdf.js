/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var exp = require( '@stdlib/math/base/special/exp' );
var pow = require( '@stdlib/math/base/special/pow' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var normal = require( './../../../../../base/dists/normal/cdf' ).factory;
var PI = require( '@stdlib/constants/float64/pi' );


// VARIABLES //

var normalCDF = normal( 0.0, 1.0 );


// MAIN //

/**
* Evaluates the probability density function (PDF) for a truncated normal distribution with endpoints `a` and `b`, location parameter `mu` and scale parameter `sigma` at a value `x`.
*
* @param {number} x - input value
* @param {number} a - minimum support
* @param {number} b - maximum support
* @param {number} mu - location parameter
* @param {PositiveNumber} sigma - scale parameter
* @returns {number} evaluated PDF
*
* @example
* var y = pdf( 0.9, 0.0, 1.0, 0.0, 1.0 );
* // returns ~0.7795
*
* @example
* var y = pdf( 0.9, 0.0, 1.0, 0.5, 1.0 );
* // returns ~0.9617
*
* @example
* var y = pdf( 0.9, -1.0, 1.0, 0.5, 1.0 );
* // returns ~0.5896
*
* @example
* var y = pdf( 1.4, 0.0, 1.0, 0.0, 1.0 );
* // returns 0.0
*
* @example
* var y = pdf( -0.9, 0.0, 1.0, 0.0, 1.0 );
* // returns 0.0
*/
function pdf( x, a, b, mu, sigma ) {
	var s2x2;
	var A;
	var B;
	var C;

	if (
		isnan( x ) ||
		isnan( a ) ||
		isnan( b ) ||
		sigma <= 0.0 ||
		a >= b
	) {
		return NaN;
	}
	if ( x < a || x > b ) {
		return 0.0;
	}
	s2x2 = 2.0 * pow( sigma, 2.0 );
	A = 1.0 / ( sqrt( s2x2 * PI ) );
	B = -1.0 / ( s2x2 );
	C = normalCDF( (b-mu)/sigma ) - normalCDF( (a-mu)/sigma );
	return A * exp( B * pow( x - mu, 2.0 ) ) / C;
}


// EXPORTS //

module.exports = pdf;
