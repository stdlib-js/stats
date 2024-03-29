/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var prange = require( './../../../../../base/dists/studentized-range/cdf' );
var abs = require( '@stdlib/math/base/special/abs' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var qtrngo = require( './qtrngo.js' );


// VARIABLES //

var PCUT = 1e-8;
var JMAX = 28;


// MAIN //

/**
* Returns a function for evaluating the quantile function for a studentized range distribution.
*
* @param {PositiveNumber} r - sample size for range (same for each group; must be greater than or equal to `2`)
* @param {PositiveNumber} v - degrees of freedom (must be greater than or equal to `2`)
* @param {PositiveInteger} [nranges=1] - number of groups whose maximum range is considered
* @returns {Function} quantile function
*
* @example
* var quantile = factory( 3.0, 3.0 );
* var y = quantile( 0.5 );
* // returns ~1.791
*
* y = quantile( 0.8 );
* // returns ~3.245
*
* y = quantile( 1.0 );
* // returns Infinity
*/
function factory( r, v, nranges ) {
	if (
		isnan( r ) ||
		isnan( v ) ||
		r < 2.0 ||
		v < 2.0
	) {
		return constantFunction( NaN );
	}
	if ( nranges === void 0 ) {
		nranges = 1;
	}
	else if ( !isPositiveInteger( nranges ) ) {
		return NaN;
	}
	return quantile;

	/**
	* Evaluates the quantile function for a studentized range distribution.
	*
	* @private
	* @param {Probability} p - input value
	* @returns {number} evaluated quantile function
	*
	* @example
	* var y = quantile( 0.3 );
	* // returns <number>
	*/
	function quantile( p ) {
		var aux;
		var e1;
		var e2;
		var q1;
		var q2;
		var p1;
		var p2;
		var j;

		if ( isnan( p ) || p < 0.0 || p > 1.0 ) {
			return NaN;
		}
		if ( p === 0.0 ) {
			return 0.0;
		}
		if ( p === 1.0 ) {
			return PINF;
		}
		q1 = qtrngo( p, v, r );
		while ( true ) {
			p1 = prange( q1, r, v, nranges );
			if ( p1 > p ) {
				q1 -= 0.4;
			}
			if ( q1 < 0.0 ) {
				q1 = 0.1;
			}
			if ( p1 < p ) {
				break;
			}
		}
		aux = q1;
		if ( abs( p1 - p ) < PCUT ) {
			return NaN;
		}
		q2 = q1 + 0.5;
		while ( true ) {
			p2 = prange( q2, r, v, nranges );
			if ( p2 < p ) {
				q2 += 0.4;
			}
			if ( q2 < 0.0 ) {
				q2 = 1.0;
			}
			if ( p2 > p ) {
				break;
			}
		}
		if ( q2 < q1 ) {
			q2 = q1 + 0.01;
		}
		j = 2;
		while ( j <= JMAX ) {
			p2 = prange( q2, r, v, nranges );
			e1 = p1 - p;
			e2 = p2 - p;
			if ( e2 - e1 !== 0 ) {
				aux = ( ( e2 * q1 ) - ( e1 * q2 ) ) / ( e2 - e1 );
			}
			if ( abs( e1 ) < abs( e2 ) ) {
				if ( abs( p1 - p ) < PCUT * 5.0 ) {
					j = JMAX + 2;
				}
				q1 = aux;
				p1 = prange( q1, r, v, nranges );
			} else {
				q1 = q2;
				p1 = p2;
				q2 = aux;
			}
			j += 1;
		}
		return aux;
	}
}


// EXPORTS //

module.exports = factory;
