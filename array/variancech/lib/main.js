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

var isCollection = require( '@stdlib/assert/is-collection' );
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var dtypes = require( '@stdlib/array/dtypes' );
var dtype = require( '@stdlib/array/dtype' );
var contains = require( '@stdlib/array/base/assert/contains' );
var join = require( '@stdlib/array/base/join' );
var strided = require( './../../../base/variancech' ).ndarray;
var format = require( '@stdlib/string/format' );


// VARIABLES //

var IDTYPES = dtypes( 'real_and_generic' );
var GENERIC_DTYPE = 'generic';


// MAIN //

/**
* Computes the variance of an array using a one-pass trial mean algorithm.
*
* ## Method
*
* -   This implementation uses a one-pass trial mean approach, as suggested by Chan et al (1983).
*
* ## References
*
* -   Neely, Peter M. 1966. "Comparison of Several Algorithms for Computation of Means, Standard Deviations and Correlation Coefficients." _Communications of the ACM_ 9 (7). Association for Computing Machinery: 496–99. doi:[10.1145/365719.365958](https://doi.org/10.1145/365719.365958).
* -   Ling, Robert F. 1974. "Comparison of Several Algorithms for Computing Sample Means and Variances." _Journal of the American Statistical Association_ 69 (348). American Statistical Association, Taylor & Francis, Ltd.: 859–66. doi:[10.2307/2286154](https://doi.org/10.2307/2286154).
* -   Chan, Tony F., Gene H. Golub, and Randall J. LeVeque. 1983. "Algorithms for Computing the Sample Variance: Analysis and Recommendations." _The American Statistician_ 37 (3). American Statistical Association, Taylor & Francis, Ltd.: 242–47. doi:[10.1080/00031305.1983.10483115](https://doi.org/10.1080/00031305.1983.10483115).
* -   Schubert, Erich, and Michael Gertz. 2018. "Numerically Stable Parallel Computation of (Co-)Variance." In _Proceedings of the 30th International Conference on Scientific and Statistical Database Management_. New York, NY, USA: Association for Computing Machinery. doi:[10.1145/3221269.3223036](https://doi.org/10.1145/3221269.3223036).
*
* @param {NumericArray} x - input array
* @param {number} [correction=1.0] - degrees of freedom adjustment
* @throws {TypeError} first argument must be an array-like object
* @throws {TypeError} first argument must have a supported data type
* @throws {TypeError} second argument must be a number
* @returns {number} variance
*
* @example
* var x = [ 1.0, -2.0, 2.0 ];
*
* var v = variancech( x, 1.0 );
* // returns ~4.3333
*/
function variancech( x ) {
	var correction;
	var dt;
	if ( !isCollection( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an array-like object. Value: `%s`.', x ) );
	}
	dt = dtype( x ) || GENERIC_DTYPE;
	if ( !contains( IDTYPES, dt ) ) {
		throw new TypeError( format( 'invalid argument. First argument must have one of the following data types: "%s". Data type: `%s`.', join( IDTYPES, '", "' ), dt ) );
	}
	if ( arguments.length > 1 ) {
		correction = arguments[ 1 ];
		if ( !isNumber( correction ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must be a number. Value: `%s`.', correction ) );
		}
	} else {
		correction = 1.0;
	}
	return strided( x.length, correction, x, 1, 0 );
}


// EXPORTS //

module.exports = variancech;
