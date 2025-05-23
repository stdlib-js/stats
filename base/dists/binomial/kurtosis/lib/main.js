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

var isNonNegativeInteger = require( '@stdlib/math/base/assert/is-nonnegative-integer' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Returns the excess kurtosis of a binomial distribution.
*
* @param {NonNegativeInteger} n - number of trials
* @param {Probability} p - success probability
* @returns {number} excess kurtosis
*
* @example
* var v = kurtosis( 100, 0.1 );
* // returns ~0.051
*
* @example
* var v = kurtosis( 20, 0.5 );
* // returns ~-0.1
*
* @example
* var v = kurtosis( 10.3, 0.5 );
* // returns NaN
*
* @example
* var v = kurtosis( 20, 1.1 );
* // returns NaN
*
* @example
* var v = kurtosis( 20, NaN );
* // returns NaN
*/
function kurtosis( n, p ) {
	var pq;
	if (
		isnan( n ) ||
		isnan( p ) ||
		p < 0.0 ||
		p > 1.0 ||
		!isNonNegativeInteger( n ) ||
		n === PINF
	) {
		return NaN;
	}
	pq = p * ( 1.0 - p );
	return ( 1.0 - ( 6.0 * pq ) ) / ( n * pq );
}


// EXPORTS //

module.exports = kurtosis;
