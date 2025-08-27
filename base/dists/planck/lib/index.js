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

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace planck
*/
var planck = {};

/**
* @name cdf
* @memberof planck
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/planck/cdf}
*/
setReadOnly( planck, 'cdf', require( './../../../../base/dists/planck/cdf' ) );

/**
* @name entropy
* @memberof planck
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/planck/entropy}
*/
setReadOnly( planck, 'entropy', require( './../../../../base/dists/planck/entropy' ) );

/**
* @name kurtosis
* @memberof planck
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/planck/kurtosis}
*/
setReadOnly( planck, 'kurtosis', require( './../../../../base/dists/planck/kurtosis' ) );

/**
* @name logcdf
* @memberof planck
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/planck/logcdf}
*/
setReadOnly( planck, 'logcdf', require( './../../../../base/dists/planck/logcdf' ) );

/**
* @name logpmf
* @memberof planck
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/planck/logpmf}
*/
setReadOnly( planck, 'logpmf', require( './../../../../base/dists/planck/logpmf' ) );

/**
* @name mean
* @memberof planck
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/planck/mean}
*/
setReadOnly( planck, 'mean', require( './../../../../base/dists/planck/mean' ) );

/**
* @name median
* @memberof planck
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/planck/median}
*/
setReadOnly( planck, 'median', require( './../../../../base/dists/planck/median' ) );

/**
* @name mgf
* @memberof planck
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/planck/mgf}
*/
setReadOnly( planck, 'mgf', require( './../../../../base/dists/planck/mgf' ) );

/**
* @name mode
* @memberof planck
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/planck/mode}
*/
setReadOnly( planck, 'mode', require( './../../../../base/dists/planck/mode' ) );

/**
* @name pmf
* @memberof planck
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/planck/pmf}
*/
setReadOnly( planck, 'pmf', require( './../../../../base/dists/planck/pmf' ) );

/**
* @name quantile
* @memberof planck
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/planck/quantile}
*/
setReadOnly( planck, 'quantile', require( './../../../../base/dists/planck/quantile' ) );

/**
* @name skewness
* @memberof planck
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/planck/skewness}
*/
setReadOnly( planck, 'skewness', require( './../../../../base/dists/planck/skewness' ) );

/**
* @name stdev
* @memberof planck
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/planck/stdev}
*/
setReadOnly( planck, 'stdev', require( './../../../../base/dists/planck/stdev' ) );

/**
* @name variance
* @memberof planck
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/planck/variance}
*/
setReadOnly( planck, 'variance', require( './../../../../base/dists/planck/variance' ) );


// EXPORTS //

module.exports = planck;
