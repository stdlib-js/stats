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

var typedarray2json = require( '@stdlib/array/to-json' );


// MAIN //

/**
* Serializes a one-sample Z-test results object as a JSON object.
*
* @param {Object} results - one-sample Z-test results object
* @returns {Object} serialized object
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var results = {
*     'rejected': false,
*     'alpha': 0.05,
*     'pValue': 0.3364,
*     'statistic': 11.7586,
*     'nullValue': 0.0,
*     'sd': 0.4563,
*     'ci': new Float64Array( [ 9.9983, 11.4123 ] ),
*     'alternative': 'two-sided',
*     'method': 'One-sample Z-test'
* };
*
* var obj = toJSON( results );
* // returns {...}
*/
function toJSON( results ) {
	return {
		'rejected': results.rejected,
		'alpha': results.alpha,
		'pValue': results.pValue,
		'statistic': results.statistic,
		'nullValue': results.nullValue,
		'sd': results.sd,
		'ci': typedarray2json( results.ci ),
		'alternative': results.alternative,
		'method': results.method
	};
}


// EXPORTS //

module.exports = toJSON;
