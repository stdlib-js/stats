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

var constantFunction = require( '@stdlib/utils/constant-function' );
var degenerate = require( './../../../../../base/dists/degenerate/pdf' ).factory;
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var exp = require( '@stdlib/math/base/special/exp' );
var pow = require( '@stdlib/math/base/special/pow' );
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Returns a function for evaluating the probability density function (PDF) for a Rayleigh distribution with scale parameter `sigma`.
*
* @param {NonNegativeNumber} sigma - scale parameter
* @returns {Function} PDF
*
* @example
* var pdf = factory( 0.5 );
* var y = pdf( 1.0 );
* // returns ~0.541
*
* y = pdf( 0.1 );
* // returns ~0.392
*/
function factory( sigma ) {
	var s2i;
	var s2;
	if ( isnan( sigma ) || sigma < 0.0 ) {
		return constantFunction( NaN );
	}
	if ( sigma === 0.0 ) {
		return degenerate( 0.0 );
	}
	s2 = pow( sigma, 2.0 );
	s2i = 1.0 / s2;
	return pdf;

	/**
	* Evaluates the probability density function (PDF) for a Rayleigh distribution.
	*
	* @private
	* @param {number} x - input value
	* @returns {number} evaluated PDF
	*
	* @example
	* var y = pdf( 2.3 );
	* // returns <number>
	*/
	function pdf( x ) {
		if ( isnan( x ) ) {
			return NaN;
		}
		if ( x < 0.0 || x === PINF ) {
			return 0.0;
		}
		return s2i * x * exp( -pow( x, 2.0 ) / ( 2.0 * s2 ) );
	}
}


// EXPORTS //

module.exports = factory;
