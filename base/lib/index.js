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
* @namespace ns
*/
var ns = {};

/**
* @name cumax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/cumax}
*/
setReadOnly( ns, 'cumax', require( './../../base/cumax' ) );

/**
* @name cumaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/cumaxabs}
*/
setReadOnly( ns, 'cumaxabs', require( './../../base/cumaxabs' ) );

/**
* @name cumin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/cumin}
*/
setReadOnly( ns, 'cumin', require( './../../base/cumin' ) );

/**
* @name cuminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/cuminabs}
*/
setReadOnly( ns, 'cuminabs', require( './../../base/cuminabs' ) );

/**
* @name dists
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists}
*/
setReadOnly( ns, 'dists', require( './../../base/dists' ) );

/**
* @name dmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dmean}
*/
setReadOnly( ns, 'dmean', require( './../../base/dmean' ) );

/**
* @name dmeanpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dmeanpn}
*/
setReadOnly( ns, 'dmeanpn', require( './../../base/dmeanpn' ) );

/**
* @name dmeanstdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dmeanstdev}
*/
setReadOnly( ns, 'dmeanstdev', require( './../../base/dmeanstdev' ) );

/**
* @name dmeanstdevpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dmeanstdevpn}
*/
setReadOnly( ns, 'dmeanstdevpn', require( './../../base/dmeanstdevpn' ) );

/**
* @name dmeanvar
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dmeanvar}
*/
setReadOnly( ns, 'dmeanvar', require( './../../base/dmeanvar' ) );

/**
* @name dmeanvarpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dmeanvarpn}
*/
setReadOnly( ns, 'dmeanvarpn', require( './../../base/dmeanvarpn' ) );

/**
* @name dnanmskmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dnanmskmax}
*/
setReadOnly( ns, 'dnanmskmax', require( './../../base/dnanmskmax' ) );

/**
* @name dnanmskmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dnanmskmin}
*/
setReadOnly( ns, 'dnanmskmin', require( './../../base/dnanmskmin' ) );

/**
* @name dnanmskrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dnanmskrange}
*/
setReadOnly( ns, 'dnanmskrange', require( './../../base/dnanmskrange' ) );

/**
* @name dnanstdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dnanstdev}
*/
setReadOnly( ns, 'dnanstdev', require( './../../base/dnanstdev' ) );

/**
* @name dsem
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dsem}
*/
setReadOnly( ns, 'dsem', require( './../../base/dsem' ) );

/**
* @name dsempn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dsempn}
*/
setReadOnly( ns, 'dsempn', require( './../../base/dsempn' ) );

/**
* @name dstdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dstdev}
*/
setReadOnly( ns, 'dstdev', require( './../../base/dstdev' ) );

/**
* @name dvarm
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dvarm}
*/
setReadOnly( ns, 'dvarm', require( './../../base/dvarm' ) );

/**
* @name dvarmpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dvarmpn}
*/
setReadOnly( ns, 'dvarmpn', require( './../../base/dvarmpn' ) );

/**
* @name max
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/max}
*/
setReadOnly( ns, 'max', require( './../../base/max' ) );

/**
* @name maxBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/max-by}
*/
setReadOnly( ns, 'maxBy', require( './../../base/max-by' ) );

/**
* @name maxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/maxabs}
*/
setReadOnly( ns, 'maxabs', require( './../../base/maxabs' ) );

/**
* @name maxsorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/maxsorted}
*/
setReadOnly( ns, 'maxsorted', require( './../../base/maxsorted' ) );

/**
* @name mean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/mean}
*/
setReadOnly( ns, 'mean', require( './../../base/mean' ) );

/**
* @name meankbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/meankbn}
*/
setReadOnly( ns, 'meankbn', require( './../../base/meankbn' ) );

/**
* @name meankbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/meankbn2}
*/
setReadOnly( ns, 'meankbn2', require( './../../base/meankbn2' ) );

/**
* @name meanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/meanors}
*/
setReadOnly( ns, 'meanors', require( './../../base/meanors' ) );

/**
* @name meanpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/meanpn}
*/
setReadOnly( ns, 'meanpn', require( './../../base/meanpn' ) );

/**
* @name meanpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/meanpw}
*/
setReadOnly( ns, 'meanpw', require( './../../base/meanpw' ) );

/**
* @name meanwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/meanwd}
*/
setReadOnly( ns, 'meanwd', require( './../../base/meanwd' ) );

/**
* @name mediansorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/mediansorted}
*/
setReadOnly( ns, 'mediansorted', require( './../../base/mediansorted' ) );

/**
* @name min
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/min}
*/
setReadOnly( ns, 'min', require( './../../base/min' ) );

/**
* @name minBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/min-by}
*/
setReadOnly( ns, 'minBy', require( './../../base/min-by' ) );

/**
* @name minabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/minabs}
*/
setReadOnly( ns, 'minabs', require( './../../base/minabs' ) );

/**
* @name minsorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/minsorted}
*/
setReadOnly( ns, 'minsorted', require( './../../base/minsorted' ) );

/**
* @name mskmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/mskmax}
*/
setReadOnly( ns, 'mskmax', require( './../../base/mskmax' ) );

/**
* @name mskmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/mskmin}
*/
setReadOnly( ns, 'mskmin', require( './../../base/mskmin' ) );

/**
* @name mskrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/mskrange}
*/
setReadOnly( ns, 'mskrange', require( './../../base/mskrange' ) );

/**
* @name nanmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanmax}
*/
setReadOnly( ns, 'nanmax', require( './../../base/nanmax' ) );

/**
* @name nanmaxBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanmax-by}
*/
setReadOnly( ns, 'nanmaxBy', require( './../../base/nanmax-by' ) );

/**
* @name nanmaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanmaxabs}
*/
setReadOnly( ns, 'nanmaxabs', require( './../../base/nanmaxabs' ) );

/**
* @name nanmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanmean}
*/
setReadOnly( ns, 'nanmean', require( './../../base/nanmean' ) );

/**
* @name nanmeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanmeanors}
*/
setReadOnly( ns, 'nanmeanors', require( './../../base/nanmeanors' ) );

/**
* @name nanmeanpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanmeanpn}
*/
setReadOnly( ns, 'nanmeanpn', require( './../../base/nanmeanpn' ) );

/**
* @name nanmeanwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanmeanwd}
*/
setReadOnly( ns, 'nanmeanwd', require( './../../base/nanmeanwd' ) );

/**
* @name nanmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanmin}
*/
setReadOnly( ns, 'nanmin', require( './../../base/nanmin' ) );

/**
* @name nanminBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanmin-by}
*/
setReadOnly( ns, 'nanminBy', require( './../../base/nanmin-by' ) );

/**
* @name nanminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanminabs}
*/
setReadOnly( ns, 'nanminabs', require( './../../base/nanminabs' ) );

/**
* @name nanmskmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanmskmax}
*/
setReadOnly( ns, 'nanmskmax', require( './../../base/nanmskmax' ) );

/**
* @name nanmskmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanmskmin}
*/
setReadOnly( ns, 'nanmskmin', require( './../../base/nanmskmin' ) );

/**
* @name nanmskrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanmskrange}
*/
setReadOnly( ns, 'nanmskrange', require( './../../base/nanmskrange' ) );

/**
* @name nanrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanrange}
*/
setReadOnly( ns, 'nanrange', require( './../../base/nanrange' ) );

/**
* @name nanrangeBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanrange-by}
*/
setReadOnly( ns, 'nanrangeBy', require( './../../base/nanrange-by' ) );

/**
* @name nanstdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanstdev}
*/
setReadOnly( ns, 'nanstdev', require( './../../base/nanstdev' ) );

/**
* @name nanstdevch
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanstdevch}
*/
setReadOnly( ns, 'nanstdevch', require( './../../base/nanstdevch' ) );

/**
* @name nanstdevpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanstdevpn}
*/
setReadOnly( ns, 'nanstdevpn', require( './../../base/nanstdevpn' ) );

/**
* @name nanstdevtk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanstdevtk}
*/
setReadOnly( ns, 'nanstdevtk', require( './../../base/nanstdevtk' ) );

/**
* @name nanstdevwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanstdevwd}
*/
setReadOnly( ns, 'nanstdevwd', require( './../../base/nanstdevwd' ) );

/**
* @name nanstdevyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanstdevyc}
*/
setReadOnly( ns, 'nanstdevyc', require( './../../base/nanstdevyc' ) );

/**
* @name nanvariance
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanvariance}
*/
setReadOnly( ns, 'nanvariance', require( './../../base/nanvariance' ) );

/**
* @name nanvariancech
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanvariancech}
*/
setReadOnly( ns, 'nanvariancech', require( './../../base/nanvariancech' ) );

/**
* @name nanvariancepn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanvariancepn}
*/
setReadOnly( ns, 'nanvariancepn', require( './../../base/nanvariancepn' ) );

/**
* @name nanvariancetk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanvariancetk}
*/
setReadOnly( ns, 'nanvariancetk', require( './../../base/nanvariancetk' ) );

/**
* @name nanvariancewd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanvariancewd}
*/
setReadOnly( ns, 'nanvariancewd', require( './../../base/nanvariancewd' ) );

/**
* @name nanvarianceyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanvarianceyc}
*/
setReadOnly( ns, 'nanvarianceyc', require( './../../base/nanvarianceyc' ) );

/**
* @name ndarray
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/ndarray}
*/
setReadOnly( ns, 'ndarray', require( './../../base/ndarray' ) );

/**
* @name range
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/range}
*/
setReadOnly( ns, 'range', require( './../../base/range' ) );

/**
* @name rangeBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/range-by}
*/
setReadOnly( ns, 'rangeBy', require( './../../base/range-by' ) );

/**
* @name sdsnanmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/sdsnanmean}
*/
setReadOnly( ns, 'sdsnanmean', require( './../../base/sdsnanmean' ) );

/**
* @name sdsnanmeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/sdsnanmeanors}
*/
setReadOnly( ns, 'sdsnanmeanors', require( './../../base/sdsnanmeanors' ) );

/**
* @name smean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/smean}
*/
setReadOnly( ns, 'smean', require( './../../base/smean' ) );

/**
* @name smeankbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/smeankbn}
*/
setReadOnly( ns, 'smeankbn', require( './../../base/smeankbn' ) );

/**
* @name smeankbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/smeankbn2}
*/
setReadOnly( ns, 'smeankbn2', require( './../../base/smeankbn2' ) );

/**
* @name smeanlipw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/smeanlipw}
*/
setReadOnly( ns, 'smeanlipw', require( './../../base/smeanlipw' ) );

/**
* @name smeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/smeanors}
*/
setReadOnly( ns, 'smeanors', require( './../../base/smeanors' ) );

/**
* @name smeanpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/smeanpn}
*/
setReadOnly( ns, 'smeanpn', require( './../../base/smeanpn' ) );

/**
* @name snanmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanmean}
*/
setReadOnly( ns, 'snanmean', require( './../../base/snanmean' ) );

/**
* @name snanmskmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanmskmax}
*/
setReadOnly( ns, 'snanmskmax', require( './../../base/snanmskmax' ) );

/**
* @name snanmskmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanmskmin}
*/
setReadOnly( ns, 'snanmskmin', require( './../../base/snanmskmin' ) );

/**
* @name snanmskrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanmskrange}
*/
setReadOnly( ns, 'snanmskrange', require( './../../base/snanmskrange' ) );

/**
* @name snanstdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanstdev}
*/
setReadOnly( ns, 'snanstdev', require( './../../base/snanstdev' ) );

/**
* @name snanstdevch
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanstdevch}
*/
setReadOnly( ns, 'snanstdevch', require( './../../base/snanstdevch' ) );

/**
* @name snanstdevpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanstdevpn}
*/
setReadOnly( ns, 'snanstdevpn', require( './../../base/snanstdevpn' ) );

/**
* @name snanstdevtk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanstdevtk}
*/
setReadOnly( ns, 'snanstdevtk', require( './../../base/snanstdevtk' ) );

/**
* @name snanstdevwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanstdevwd}
*/
setReadOnly( ns, 'snanstdevwd', require( './../../base/snanstdevwd' ) );

/**
* @name snanstdevyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanstdevyc}
*/
setReadOnly( ns, 'snanstdevyc', require( './../../base/snanstdevyc' ) );

/**
* @name snanvariance
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanvariance}
*/
setReadOnly( ns, 'snanvariance', require( './../../base/snanvariance' ) );

/**
* @name snanvariancech
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanvariancech}
*/
setReadOnly( ns, 'snanvariancech', require( './../../base/snanvariancech' ) );

/**
* @name snanvariancepn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanvariancepn}
*/
setReadOnly( ns, 'snanvariancepn', require( './../../base/snanvariancepn' ) );

/**
* @name snanvariancetk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanvariancetk}
*/
setReadOnly( ns, 'snanvariancetk', require( './../../base/snanvariancetk' ) );

/**
* @name snanvariancewd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanvariancewd}
*/
setReadOnly( ns, 'snanvariancewd', require( './../../base/snanvariancewd' ) );

/**
* @name snanvarianceyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanvarianceyc}
*/
setReadOnly( ns, 'snanvarianceyc', require( './../../base/snanvarianceyc' ) );

/**
* @name sstdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/sstdev}
*/
setReadOnly( ns, 'sstdev', require( './../../base/sstdev' ) );

/**
* @name sstdevwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/sstdevwd}
*/
setReadOnly( ns, 'sstdevwd', require( './../../base/sstdevwd' ) );

/**
* @name stdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/stdev}
*/
setReadOnly( ns, 'stdev', require( './../../base/stdev' ) );

/**
* @name stdevch
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/stdevch}
*/
setReadOnly( ns, 'stdevch', require( './../../base/stdevch' ) );

/**
* @name stdevpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/stdevpn}
*/
setReadOnly( ns, 'stdevpn', require( './../../base/stdevpn' ) );

/**
* @name stdevtk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/stdevtk}
*/
setReadOnly( ns, 'stdevtk', require( './../../base/stdevtk' ) );

/**
* @name stdevwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/stdevwd}
*/
setReadOnly( ns, 'stdevwd', require( './../../base/stdevwd' ) );

/**
* @name stdevyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/stdevyc}
*/
setReadOnly( ns, 'stdevyc', require( './../../base/stdevyc' ) );

/**
* @name svariance
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/svariance}
*/
setReadOnly( ns, 'svariance', require( './../../base/svariance' ) );

/**
* @name svariancewd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/svariancewd}
*/
setReadOnly( ns, 'svariancewd', require( './../../base/svariancewd' ) );

/**
* @name variance
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/variance}
*/
setReadOnly( ns, 'variance', require( './../../base/variance' ) );

/**
* @name variancech
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/variancech}
*/
setReadOnly( ns, 'variancech', require( './../../base/variancech' ) );

/**
* @name variancepn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/variancepn}
*/
setReadOnly( ns, 'variancepn', require( './../../base/variancepn' ) );

/**
* @name variancetk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/variancetk}
*/
setReadOnly( ns, 'variancetk', require( './../../base/variancetk' ) );

/**
* @name variancewd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/variancewd}
*/
setReadOnly( ns, 'variancewd', require( './../../base/variancewd' ) );

/**
* @name varianceyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/varianceyc}
*/
setReadOnly( ns, 'varianceyc', require( './../../base/varianceyc' ) );

/**
* @name dmeankbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmeankbn2}
*/
setReadOnly( ns, 'dmeankbn2', require( './../../strided/dmeankbn2' ) );

/**
* @name dmeanli
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmeanli}
*/
setReadOnly( ns, 'dmeanli', require( './../../strided/dmeanli' ) );

/**
* @name dmeanlipw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmeanlipw}
*/
setReadOnly( ns, 'dmeanlipw', require( './../../strided/dmeanlipw' ) );

/**
* @name dmeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmeanors}
*/
setReadOnly( ns, 'dmeanors', require( './../../strided/dmeanors' ) );

/**
* @name dmeanpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmeanpw}
*/
setReadOnly( ns, 'dmeanpw', require( './../../strided/dmeanpw' ) );

/**
* @name dmeanwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmeanwd}
*/
setReadOnly( ns, 'dmeanwd', require( './../../strided/dmeanwd' ) );

/**
* @name dmediansorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmediansorted}
*/
setReadOnly( ns, 'dmediansorted', require( './../../strided/dmediansorted' ) );

/**
* @name dmidrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmidrange}
*/
setReadOnly( ns, 'dmidrange', require( './../../strided/dmidrange' ) );

/**
* @name dmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmin}
*/
setReadOnly( ns, 'dmin', require( './../../strided/dmin' ) );

/**
* @name dminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dminabs}
*/
setReadOnly( ns, 'dminabs', require( './../../strided/dminabs' ) );

/**
* @name dminsorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dminsorted}
*/
setReadOnly( ns, 'dminsorted', require( './../../strided/dminsorted' ) );

/**
* @name dnanmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanmax}
*/
setReadOnly( ns, 'dnanmax', require( './../../strided/dnanmax' ) );

/**
* @name dnanmaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanmaxabs}
*/
setReadOnly( ns, 'dnanmaxabs', require( './../../strided/dnanmaxabs' ) );


// EXPORTS //

module.exports = ns;
