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

var Float64Array = require( '@stdlib/array/float64' );
var Float32Array = require( '@stdlib/array/float32' );
var resultsFactory = require( './../lib' );

var Results = resultsFactory( 'float64' );
var results = new Results({
	'rejected': true,
	'alpha': 0.05,
	'pValue': 0.0132,
	'statistic': 2.4773,
	'nullValue': 0.0,
	'xmean': 3.7561,
	'ymean': 3.0129,
	'ci': new Float64Array( [ 0.1552, 1.3311 ] ),
	'alternative': 'two-sided'
});

var str = results.toString({
	'format': 'linear'
});
console.log( str );

Results = resultsFactory( 'float32' );
results = new Results({
	'rejected': true,
	'alpha': 0.05,
	'pValue': 0.0132,
	'statistic': 2.4773,
	'nullValue': 0.0,
	'xmean': 3.7561,
	'ymean': 3.0129,
	'ci': new Float32Array( [ 0.1552, 1.3311 ] ),
	'alternative': 'two-sided'
});

str = results.toString({
	'format': 'linear'
});
console.log( str );
