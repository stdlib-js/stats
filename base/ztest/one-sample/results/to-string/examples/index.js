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

var Float64Results = require( './../../../../../../base/ztest/one-sample/results/float64' );
var resolveEnum = require( './../../../../../../base/ztest/alternative-resolve-enum' );
var Float64Array = require( '@stdlib/array/float64' );
var res2str = require( './../lib' );

var results = new Float64Results();
results.rejected = true;
results.alpha = 0.05;
results.pValue = 0.3364;
results.statistic = 11.7586;
results.nullValue = 0.0;
results.sd = 0.4563;
results.ci = new Float64Array( [ 9.9983, 11.4123 ] );
results.alternative = resolveEnum( 'two-sided' );

var s = res2str( results );
console.log( s );
