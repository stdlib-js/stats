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
* @namespace ns
*/
var ns = {};

/**
* @name covarmtk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/covarmtk}
*/
setReadOnly( ns, 'covarmtk', require( './../../../base/ndarray/covarmtk' ) );

/**
* @name cumax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/cumax}
*/
setReadOnly( ns, 'cumax', require( './../../../base/ndarray/cumax' ) );

/**
* @name cumin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/cumin}
*/
setReadOnly( ns, 'cumin', require( './../../../base/ndarray/cumin' ) );

/**
* @name dcovarmtk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dcovarmtk}
*/
setReadOnly( ns, 'dcovarmtk', require( './../../../base/ndarray/dcovarmtk' ) );

/**
* @name dcumax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dcumax}
*/
setReadOnly( ns, 'dcumax', require( './../../../base/ndarray/dcumax' ) );

/**
* @name dcumin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dcumin}
*/
setReadOnly( ns, 'dcumin', require( './../../../base/ndarray/dcumin' ) );

/**
* @name dmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dmax}
*/
setReadOnly( ns, 'dmax', require( './../../../base/ndarray/dmax' ) );

/**
* @name dmaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dmaxabs}
*/
setReadOnly( ns, 'dmaxabs', require( './../../../base/ndarray/dmaxabs' ) );

/**
* @name dmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dmean}
*/
setReadOnly( ns, 'dmean', require( './../../../base/ndarray/dmean' ) );

/**
* @name dmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dmin}
*/
setReadOnly( ns, 'dmin', require( './../../../base/ndarray/dmin' ) );

/**
* @name dminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dminabs}
*/
setReadOnly( ns, 'dminabs', require( './../../../base/ndarray/dminabs' ) );

/**
* @name dnanmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dnanmax}
*/
setReadOnly( ns, 'dnanmax', require( './../../../base/ndarray/dnanmax' ) );

/**
* @name drange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/drange}
*/
setReadOnly( ns, 'drange', require( './../../../base/ndarray/drange' ) );

/**
* @name dztest
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dztest}
*/
setReadOnly( ns, 'dztest', require( './../../../base/ndarray/dztest' ) );

/**
* @name dztest2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dztest2}
*/
setReadOnly( ns, 'dztest2', require( './../../../base/ndarray/dztest2' ) );

/**
* @name max
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/max}
*/
setReadOnly( ns, 'max', require( './../../../base/ndarray/max' ) );

/**
* @name maxBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/max-by}
*/
setReadOnly( ns, 'maxBy', require( './../../../base/ndarray/max-by' ) );

/**
* @name maxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/maxabs}
*/
setReadOnly( ns, 'maxabs', require( './../../../base/ndarray/maxabs' ) );

/**
* @name mean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/mean}
*/
setReadOnly( ns, 'mean', require( './../../../base/ndarray/mean' ) );

/**
* @name min
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/min}
*/
setReadOnly( ns, 'min', require( './../../../base/ndarray/min' ) );

/**
* @name minBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/min-by}
*/
setReadOnly( ns, 'minBy', require( './../../../base/ndarray/min-by' ) );

/**
* @name minabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/minabs}
*/
setReadOnly( ns, 'minabs', require( './../../../base/ndarray/minabs' ) );

/**
* @name nanmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/nanmax}
*/
setReadOnly( ns, 'nanmax', require( './../../../base/ndarray/nanmax' ) );

/**
* @name range
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/range}
*/
setReadOnly( ns, 'range', require( './../../../base/ndarray/range' ) );

/**
* @name scovarmtk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/scovarmtk}
*/
setReadOnly( ns, 'scovarmtk', require( './../../../base/ndarray/scovarmtk' ) );

/**
* @name scumax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/scumax}
*/
setReadOnly( ns, 'scumax', require( './../../../base/ndarray/scumax' ) );

/**
* @name scumin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/scumin}
*/
setReadOnly( ns, 'scumin', require( './../../../base/ndarray/scumin' ) );

/**
* @name smax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/smax}
*/
setReadOnly( ns, 'smax', require( './../../../base/ndarray/smax' ) );

/**
* @name smaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/smaxabs}
*/
setReadOnly( ns, 'smaxabs', require( './../../../base/ndarray/smaxabs' ) );

/**
* @name smean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/smean}
*/
setReadOnly( ns, 'smean', require( './../../../base/ndarray/smean' ) );

/**
* @name smin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/smin}
*/
setReadOnly( ns, 'smin', require( './../../../base/ndarray/smin' ) );

/**
* @name sminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/sminabs}
*/
setReadOnly( ns, 'sminabs', require( './../../../base/ndarray/sminabs' ) );

/**
* @name snanmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/snanmax}
*/
setReadOnly( ns, 'snanmax', require( './../../../base/ndarray/snanmax' ) );

/**
* @name srange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/srange}
*/
setReadOnly( ns, 'srange', require( './../../../base/ndarray/srange' ) );

/**
* @name sztest
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/sztest}
*/
setReadOnly( ns, 'sztest', require( './../../../base/ndarray/sztest' ) );

/**
* @name sztest2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/sztest2}
*/
setReadOnly( ns, 'sztest2', require( './../../../base/ndarray/sztest2' ) );

/**
* @name ztest
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/ztest}
*/
setReadOnly( ns, 'ztest', require( './../../../base/ndarray/ztest' ) );

/**
* @name ztest2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/ztest2}
*/
setReadOnly( ns, 'ztest2', require( './../../../base/ndarray/ztest2' ) );


// EXPORTS //

module.exports = ns;
