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
* @namespace normal
*/
var normal = {};

/**
* @name cdf
* @memberof normal
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/normal/cdf}
*/
setReadOnly( normal, 'cdf', require( './../../../../base/dists/normal/cdf' ) );

/**
* @name Normal
* @memberof normal
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/normal/ctor}
*/
setReadOnly( normal, 'Normal', require( './../../../../base/dists/normal/ctor' ) );

/**
* @name entropy
* @memberof normal
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/normal/entropy}
*/
setReadOnly( normal, 'entropy', require( './../../../../base/dists/normal/entropy' ) );

/**
* @name kurtosis
* @memberof normal
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/normal/kurtosis}
*/
setReadOnly( normal, 'kurtosis', require( './../../../../base/dists/normal/kurtosis' ) );

/**
* @name logcdf
* @memberof normal
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/normal/logcdf}
*/
setReadOnly( normal, 'logcdf', require( './../../../../base/dists/normal/logcdf' ) );

/**
* @name logpdf
* @memberof normal
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/normal/logpdf}
*/
setReadOnly( normal, 'logpdf', require( './../../../../base/dists/normal/logpdf' ) );

/**
* @name mean
* @memberof normal
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/normal/mean}
*/
setReadOnly( normal, 'mean', require( './../../../../base/dists/normal/mean' ) );

/**
* @name median
* @memberof normal
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/normal/median}
*/
setReadOnly( normal, 'median', require( './../../../../base/dists/normal/median' ) );

/**
* @name mgf
* @memberof normal
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/normal/mgf}
*/
setReadOnly( normal, 'mgf', require( './../../../../base/dists/normal/mgf' ) );

/**
* @name mode
* @memberof normal
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/normal/mode}
*/
setReadOnly( normal, 'mode', require( './../../../../base/dists/normal/mode' ) );

/**
* @name pdf
* @memberof normal
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/normal/pdf}
*/
setReadOnly( normal, 'pdf', require( './../../../../base/dists/normal/pdf' ) );

/**
* @name quantile
* @memberof normal
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/normal/quantile}
*/
setReadOnly( normal, 'quantile', require( './../../../../base/dists/normal/quantile' ) );

/**
* @name skewness
* @memberof normal
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/normal/skewness}
*/
setReadOnly( normal, 'skewness', require( './../../../../base/dists/normal/skewness' ) );

/**
* @name stdev
* @memberof normal
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/normal/stdev}
*/
setReadOnly( normal, 'stdev', require( './../../../../base/dists/normal/stdev' ) );

/**
* @name variance
* @memberof normal
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/normal/variance}
*/
setReadOnly( normal, 'variance', require( './../../../../base/dists/normal/variance' ) );


// EXPORTS //

module.exports = normal;
