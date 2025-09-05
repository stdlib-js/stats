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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var incrmstdev = require( './../../../incr/mstdev' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes a moving corrected sample standard deviation, ignoring NaN values.
*
* ## Method
*
* -   Let \\(W\\) be a window of \\(N\\) elements over which we want to compute an corrected sample standard deviation.
*
* -   We first recognize that the corrected sample standard deviation is defined as the square root of the unbiased sample variance. Accordingly, in order to derive an update equation for the corrected sample standard deviation, deriving an update equation for the unbiased sample variance is sufficient.
*
* -   The difference between the unbiased sample variance in a window \\(W_i\\) and the unbiased sample variance in a window \\(W_{i+1})\\) is given by
*
*     ```tex
*     \Delta s^2 = s_{i+1}^2 - s_{i}^2
*     ```
*
* -   If we multiply both sides by \\(N-1\\),
*
*     ```tex
*     (N-1)(\Delta s^2) = (N-1)s_{i+1}^2 - (N-1)s_{i}^2
*     ```
*
* -   If we substitute the definition of the unbiased sample variance having the form
*
*     ```tex
*     \begin{align*}
*     s^2 &= \frac{1}{N-1} \biggl( \sum_{i=1}^{N} (x_i - \bar{x})^2 \biggr) \\
*         &= \frac{1}{N-1} \biggl( \sum_{i=1}^{N} (x_i^2 - 2\bar{x}x_i + \bar{x}^2) \biggr) \\
*         &= \frac{1}{N-1} \biggl( \sum_{i=1}^{N} x_i^2 - 2\bar{x} \sum_{i=1}^{N} x_i + \sum_{i=1}^{N} \bar{x}^2) \biggr) \\
*         &= \frac{1}{N-1} \biggl( \sum_{i=1}^{N} x_i^2 - \frac{2N\bar{x}\sum_{i=1}^{N} x_i}{N} + N\bar{x}^2 \biggr) \\
*         &= \frac{1}{N-1} \biggl( \sum_{i=1}^{N} x_i^2 - 2N\bar{x}^2 + N\bar{x}^2 \biggr) \\
*         &= \frac{1}{N-1} \biggl( \sum_{i=1}^{N} x_i^2 - N\bar{x}^2 \biggr)
*     \end{align*}
*     ```
*
*     we return
*
*     ```tex
*     (N-1)(\Delta s^2) = \biggl(\sum_{k=1}^N x_k^2 - N\bar{x}_{i+1}^2 \biggr) - \biggl(\sum_{k=0}^{N-1} x_k^2 - N\bar{x}_{i}^2 \biggr)
*     ```
*
* -   This can be further simplified by recognizing that subtracting the sums reduces to \\(x_N^2 - x_0^2\\); in which case,
*
*     ```tex
*     \begin{align*}
*     (N-1)(\Delta s^2) &= x_N^2 - x_0^2 - N\bar{x}_{i+1}^2 + N\bar{x}_{i}^2 \\
*     &= x_N^2 - x_0^2 - N(\bar{x}_{i+1}^2 - \bar{x}_{i}^2) \\
*     &= x_N^2 - x_0^2 - N(\bar{x}_{i+1} - \bar{x}_{i})(\bar{x}_{i+1} + \bar{x}_{i})
*     \end{align*}
*     ```
*
* -   Recognizing that the difference of means can be expressed
*
*     ```tex
*     \bar{x}_{i+1} - \bar{x}_i = \frac{1}{N} \biggl( \sum_{k=1}^N x_k - \sum_{k=0}^{N-1} x_k \biggr) = \frac{x_N - x_0}{N}
*     ```
*
*     and substituting into the equation above
*
*     ```tex
*     (N-1)(\Delta s^2) = x_N^2 - x_0^2 - (x_N - x_0)(\bar{x}_{i+1} + \bar{x}_{i})
*     ```
*
* -   Rearranging terms gives us the update equation
*
*     ```tex
*     \begin{align*}
*     (N-1)(\Delta s^2) &= (x_N - x_0)(x_N + x_0) - (x_N - x_0)(\bar{x}_{i+1} + \bar{x}_{i}) \\
*     &= (x_N - x_0)(x_N + x_0 - \bar{x}_{i+1} - \bar{x}_{i}) \\
*     &= (x_N - x_0)(x_N - \bar{x}_{i+1} + x_0 - \bar{x}_{i})
*     \end{align*}
*     ```
*
* @param {PositiveInteger} W - window size
* @param {number} [mean] - mean value
* @throws {TypeError} first argument must be a positive integer
* @throws {TypeError} second argument must be a number
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrnanmstdev( 3 );
*
* var s = accumulator();
* // returns null
*
* s = accumulator( 2.0 );
* // returns 0.0
*
* s = accumulator( NaN );
* // returns 0.0
*
* s = accumulator( -5.0 );
* // returns ~4.95
*
* s = accumulator( 3.0 );
* // returns ~4.36
*
* s = accumulator( NaN );
* // returns ~4.36
*
* s = accumulator( 5.0 );
* // returns ~5.29
*
* s = accumulator();
* // returns ~5.29
*
* @example
* var accumulator = incrnanmstdev( 3, 5.0 );
*/
function incrnanmstdev( W, mean ) {
	var acc;
	if ( arguments.length > 1 ) {
		acc = incrmstdev( W, mean );
	} else {
		acc = incrmstdev( W );
	}
	return accumulator;

	/**
	* If provided a value, the accumulator function returns an updated standard deviation. If not provided a value, the accumulator function returns the current standard deviation.
	*
	* @private
	* @param {number} [x] - new value
	* @returns {(number|null)} standard deviation or null
	*/
	function accumulator( x ) {
		if ( arguments.length === 0 ) {
			return acc();
		}
		if ( isnan( x ) ) {
			return acc();
		}
		return acc( x );
	}
}


// EXPORTS //

module.exports = incrnanmstdev;
