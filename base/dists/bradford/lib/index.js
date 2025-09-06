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
* @namespace bradford
*/
var bradford = {};

/**
* @name cdf
* @memberof bradford
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/bradford/cdf}
*/
setReadOnly( bradford, 'cdf', require( './../../../../base/dists/bradford/cdf' ) );

/**
* @name entropy
* @memberof bradford
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/bradford/entropy}
*/
setReadOnly( bradford, 'entropy', require( './../../../../base/dists/bradford/entropy' ) );

/**
* @name mean
* @memberof bradford
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/bradford/mean}
*/
setReadOnly( bradford, 'mean', require( './../../../../base/dists/bradford/mean' ) );

/**
* @name median
* @memberof bradford
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/bradford/median}
*/
setReadOnly( bradford, 'median', require( './../../../../base/dists/bradford/median' ) );

/**
* @name mode
* @memberof bradford
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/bradford/mode}
*/
setReadOnly( bradford, 'mode', require( './../../../../base/dists/bradford/mode' ) );

/**
* @name pdf
* @memberof bradford
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/bradford/pdf}
*/
setReadOnly( bradford, 'pdf', require( './../../../../base/dists/bradford/pdf' ) );

/**
* @name quantile
* @memberof bradford
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/bradford/quantile}
*/
setReadOnly( bradford, 'quantile', require( './../../../../base/dists/bradford/quantile' ) );

/**
* @name skewness
* @memberof bradford
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/bradford/skewness}
*/
setReadOnly( bradford, 'skewness', require( './../../../../base/dists/bradford/skewness' ) );

/**
* @name stdev
* @memberof bradford
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/bradford/stdev}
*/
setReadOnly( bradford, 'stdev', require( './../../../../base/dists/bradford/stdev' ) );

/**
* @name variance
* @memberof bradford
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/bradford/variance}
*/
setReadOnly( bradford, 'variance', require( './../../../../base/dists/bradford/variance' ) );


// EXPORTS //

module.exports = bradford;
