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

var incrmean = require( './../../../incr/mean' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes a harmonic mean.
*
* ## Method
*
* -   The harmonic mean of positive real numbers \\(x_0, x_1, \ldots, x_{n-1}\\) is defined as
*
*     ```tex
*     \begin{align*}
*     H &= \frac{n}{\frac{1}{x_0} + \frac{1}{x_1} + \cdots + \frac{1}{x_{n-1}}} \\
*       &= \frac{n}{\sum_{i=0}^{n-1} \frac{1}{x_i}}
*     \end{align*}
*     ```
*
*     which may be expressed
*
*     ```tex
*     H = \biggl( \frac{\sum_{i=0}^{n-1} \frac{1}{x_i}}{n} \biggr)^{-1}
*     ```
*
* -   Accordingly, to compute the harmonic mean incrementally, we can simply compute the arithmetic mean of reciprocal values and then compute the reciprocal of the result.
*
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrhmean();
*
* var v = accumulator();
* // returns null
*
* v = accumulator( 2.0 );
* // returns 2.0
*
* v = accumulator( 5.0 );
* // returns ~2.86
*
* v = accumulator();
* // returns ~2.86
*/
function incrhmean() {
	var mean = incrmean();
	var v;
	return accumulator;

	/**
	* If provided a value, the accumulator function returns an updated harmonic mean. If not provided a value, the accumulator function returns the current harmonic mean.
	*
	* @private
	* @param {number} [x] - new value
	* @returns {(number|null)} harmonic mean or null
	*/
	function accumulator( x ) {
		if ( arguments.length === 0 ) {
			return ( v === void 0 ) ? null : v;
		}
		v = 1.0 / mean( 1.0/x );
		return v;
	}
}


// EXPORTS //

module.exports = incrhmean;
