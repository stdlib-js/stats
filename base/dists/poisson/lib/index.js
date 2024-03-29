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

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace poisson
*/
var poisson = {};

/**
* @name cdf
* @memberof poisson
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/poisson/cdf}
*/
setReadOnly( poisson, 'cdf', require( './../../../../base/dists/poisson/cdf' ) );

/**
* @name Poisson
* @memberof poisson
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/poisson/ctor}
*/
setReadOnly( poisson, 'Poisson', require( './../../../../base/dists/poisson/ctor' ) );

/**
* @name entropy
* @memberof poisson
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/poisson/entropy}
*/
setReadOnly( poisson, 'entropy', require( './../../../../base/dists/poisson/entropy' ) );

/**
* @name kurtosis
* @memberof poisson
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/poisson/kurtosis}
*/
setReadOnly( poisson, 'kurtosis', require( './../../../../base/dists/poisson/kurtosis' ) );

/**
* @name logpmf
* @memberof poisson
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/poisson/logpmf}
*/
setReadOnly( poisson, 'logpmf', require( './../../../../base/dists/poisson/logpmf' ) );

/**
* @name mean
* @memberof poisson
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/poisson/mean}
*/
setReadOnly( poisson, 'mean', require( './../../../../base/dists/poisson/mean' ) );

/**
* @name median
* @memberof poisson
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/poisson/median}
*/
setReadOnly( poisson, 'median', require( './../../../../base/dists/poisson/median' ) );

/**
* @name mgf
* @memberof poisson
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/poisson/mgf}
*/
setReadOnly( poisson, 'mgf', require( './../../../../base/dists/poisson/mgf' ) );

/**
* @name mode
* @memberof poisson
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/poisson/mode}
*/
setReadOnly( poisson, 'mode', require( './../../../../base/dists/poisson/mode' ) );

/**
* @name pmf
* @memberof poisson
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/poisson/pmf}
*/
setReadOnly( poisson, 'pmf', require( './../../../../base/dists/poisson/pmf' ) );

/**
* @name quantile
* @memberof poisson
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/poisson/quantile}
*/
setReadOnly( poisson, 'quantile', require( './../../../../base/dists/poisson/quantile' ) );

/**
* @name skewness
* @memberof poisson
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/poisson/skewness}
*/
setReadOnly( poisson, 'skewness', require( './../../../../base/dists/poisson/skewness' ) );

/**
* @name stdev
* @memberof poisson
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/poisson/stdev}
*/
setReadOnly( poisson, 'stdev', require( './../../../../base/dists/poisson/stdev' ) );

/**
* @name variance
* @memberof poisson
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/poisson/variance}
*/
setReadOnly( poisson, 'variance', require( './../../../../base/dists/poisson/variance' ) );


// EXPORTS //

module.exports = poisson;
