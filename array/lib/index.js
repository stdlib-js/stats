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
* Namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name max
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/max}
*/
setReadOnly( ns, 'max', require( './../../array/max' ) );

/**
* @name maxBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/max-by}
*/
setReadOnly( ns, 'maxBy', require( './../../array/max-by' ) );

/**
* @name maxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/maxabs}
*/
setReadOnly( ns, 'maxabs', require( './../../array/maxabs' ) );

/**
* @name maxsorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/maxsorted}
*/
setReadOnly( ns, 'maxsorted', require( './../../array/maxsorted' ) );

/**
* @name mean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/mean}
*/
setReadOnly( ns, 'mean', require( './../../array/mean' ) );

/**
* @name mediansorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/mediansorted}
*/
setReadOnly( ns, 'mediansorted', require( './../../array/mediansorted' ) );

/**
* @name min
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/min}
*/
setReadOnly( ns, 'min', require( './../../array/min' ) );

/**
* @name minBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/min-by}
*/
setReadOnly( ns, 'minBy', require( './../../array/min-by' ) );

/**
* @name minabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/minabs}
*/
setReadOnly( ns, 'minabs', require( './../../array/minabs' ) );

/**
* @name minsorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/minsorted}
*/
setReadOnly( ns, 'minsorted', require( './../../array/minsorted' ) );

/**
* @name mskmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/mskmax}
*/
setReadOnly( ns, 'mskmax', require( './../../array/mskmax' ) );

/**
* @name mskmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/mskmin}
*/
setReadOnly( ns, 'mskmin', require( './../../array/mskmin' ) );

/**
* @name mskrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/mskrange}
*/
setReadOnly( ns, 'mskrange', require( './../../array/mskrange' ) );

/**
* @name nanmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/nanmax}
*/
setReadOnly( ns, 'nanmax', require( './../../array/nanmax' ) );

/**
* @name nanmaxBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/nanmax-by}
*/
setReadOnly( ns, 'nanmaxBy', require( './../../array/nanmax-by' ) );

/**
* @name nanmaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/nanmaxabs}
*/
setReadOnly( ns, 'nanmaxabs', require( './../../array/nanmaxabs' ) );

/**
* @name nanmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/nanmin}
*/
setReadOnly( ns, 'nanmin', require( './../../array/nanmin' ) );

/**
* @name nanminBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/nanmin-by}
*/
setReadOnly( ns, 'nanminBy', require( './../../array/nanmin-by' ) );

/**
* @name nanminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/nanminabs}
*/
setReadOnly( ns, 'nanminabs', require( './../../array/nanminabs' ) );

/**
* @name nanrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/nanrange}
*/
setReadOnly( ns, 'nanrange', require( './../../array/nanrange' ) );

/**
* @name range
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/range}
*/
setReadOnly( ns, 'range', require( './../../array/range' ) );

/**
* @name varianceyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/varianceyc}
*/
setReadOnly( ns, 'varianceyc', require( './../../array/varianceyc' ) );


// EXPORTS //

module.exports = ns;
