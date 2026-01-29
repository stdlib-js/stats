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
* @name dcumaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dcumaxabs}
*/
setReadOnly( ns, 'dcumaxabs', require( './../../../base/ndarray/dcumaxabs' ) );

/**
* @name dcumin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dcumin}
*/
setReadOnly( ns, 'dcumin', require( './../../../base/ndarray/dcumin' ) );

/**
* @name dcuminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dcuminabs}
*/
setReadOnly( ns, 'dcuminabs', require( './../../../base/ndarray/dcuminabs' ) );

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
* @name dmaxabssorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dmaxabssorted}
*/
setReadOnly( ns, 'dmaxabssorted', require( './../../../base/ndarray/dmaxabssorted' ) );

/**
* @name dmaxsorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dmaxsorted}
*/
setReadOnly( ns, 'dmaxsorted', require( './../../../base/ndarray/dmaxsorted' ) );

/**
* @name dmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dmean}
*/
setReadOnly( ns, 'dmean', require( './../../../base/ndarray/dmean' ) );

/**
* @name dmeankbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dmeankbn}
*/
setReadOnly( ns, 'dmeankbn', require( './../../../base/ndarray/dmeankbn' ) );

/**
* @name dmeankbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dmeankbn2}
*/
setReadOnly( ns, 'dmeankbn2', require( './../../../base/ndarray/dmeankbn2' ) );

/**
* @name dmeanli
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dmeanli}
*/
setReadOnly( ns, 'dmeanli', require( './../../../base/ndarray/dmeanli' ) );

/**
* @name dmeanlipw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dmeanlipw}
*/
setReadOnly( ns, 'dmeanlipw', require( './../../../base/ndarray/dmeanlipw' ) );

/**
* @name dmeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dmeanors}
*/
setReadOnly( ns, 'dmeanors', require( './../../../base/ndarray/dmeanors' ) );

/**
* @name dmeanpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dmeanpn}
*/
setReadOnly( ns, 'dmeanpn', require( './../../../base/ndarray/dmeanpn' ) );

/**
* @name dmeanpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dmeanpw}
*/
setReadOnly( ns, 'dmeanpw', require( './../../../base/ndarray/dmeanpw' ) );

/**
* @name dmeanstdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dmeanstdev}
*/
setReadOnly( ns, 'dmeanstdev', require( './../../../base/ndarray/dmeanstdev' ) );

/**
* @name dmeanwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dmeanwd}
*/
setReadOnly( ns, 'dmeanwd', require( './../../../base/ndarray/dmeanwd' ) );

/**
* @name dmediansorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dmediansorted}
*/
setReadOnly( ns, 'dmediansorted', require( './../../../base/ndarray/dmediansorted' ) );

/**
* @name dmidrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dmidrange}
*/
setReadOnly( ns, 'dmidrange', require( './../../../base/ndarray/dmidrange' ) );

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
* @name dminsorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dminsorted}
*/
setReadOnly( ns, 'dminsorted', require( './../../../base/ndarray/dminsorted' ) );

/**
* @name dmskmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dmskmax}
*/
setReadOnly( ns, 'dmskmax', require( './../../../base/ndarray/dmskmax' ) );

/**
* @name dmskmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dmskmin}
*/
setReadOnly( ns, 'dmskmin', require( './../../../base/ndarray/dmskmin' ) );

/**
* @name dmskrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dmskrange}
*/
setReadOnly( ns, 'dmskrange', require( './../../../base/ndarray/dmskrange' ) );

/**
* @name dnanmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dnanmax}
*/
setReadOnly( ns, 'dnanmax', require( './../../../base/ndarray/dnanmax' ) );

/**
* @name dnanmaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dnanmaxabs}
*/
setReadOnly( ns, 'dnanmaxabs', require( './../../../base/ndarray/dnanmaxabs' ) );

/**
* @name dnanmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dnanmean}
*/
setReadOnly( ns, 'dnanmean', require( './../../../base/ndarray/dnanmean' ) );

/**
* @name dnanmeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dnanmeanors}
*/
setReadOnly( ns, 'dnanmeanors', require( './../../../base/ndarray/dnanmeanors' ) );

/**
* @name dnanmeanpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dnanmeanpn}
*/
setReadOnly( ns, 'dnanmeanpn', require( './../../../base/ndarray/dnanmeanpn' ) );

/**
* @name dnanmeanpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dnanmeanpw}
*/
setReadOnly( ns, 'dnanmeanpw', require( './../../../base/ndarray/dnanmeanpw' ) );

/**
* @name dnanmeanwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dnanmeanwd}
*/
setReadOnly( ns, 'dnanmeanwd', require( './../../../base/ndarray/dnanmeanwd' ) );

/**
* @name dnanmidrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dnanmidrange}
*/
setReadOnly( ns, 'dnanmidrange', require( './../../../base/ndarray/dnanmidrange' ) );

/**
* @name dnanmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dnanmin}
*/
setReadOnly( ns, 'dnanmin', require( './../../../base/ndarray/dnanmin' ) );

/**
* @name dnanminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dnanminabs}
*/
setReadOnly( ns, 'dnanminabs', require( './../../../base/ndarray/dnanminabs' ) );

/**
* @name dnanmskmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dnanmskmax}
*/
setReadOnly( ns, 'dnanmskmax', require( './../../../base/ndarray/dnanmskmax' ) );

/**
* @name dnanmskmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dnanmskmin}
*/
setReadOnly( ns, 'dnanmskmin', require( './../../../base/ndarray/dnanmskmin' ) );

/**
* @name dnanmskrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dnanmskrange}
*/
setReadOnly( ns, 'dnanmskrange', require( './../../../base/ndarray/dnanmskrange' ) );

/**
* @name dnanrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dnanrange}
*/
setReadOnly( ns, 'dnanrange', require( './../../../base/ndarray/dnanrange' ) );

/**
* @name drange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/drange}
*/
setReadOnly( ns, 'drange', require( './../../../base/ndarray/drange' ) );

/**
* @name drangeabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/drangeabs}
*/
setReadOnly( ns, 'drangeabs', require( './../../../base/ndarray/drangeabs' ) );

/**
* @name dstdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dstdev}
*/
setReadOnly( ns, 'dstdev', require( './../../../base/ndarray/dstdev' ) );

/**
* @name dstdevch
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dstdevch}
*/
setReadOnly( ns, 'dstdevch', require( './../../../base/ndarray/dstdevch' ) );

/**
* @name dstdevpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dstdevpn}
*/
setReadOnly( ns, 'dstdevpn', require( './../../../base/ndarray/dstdevpn' ) );

/**
* @name dstdevwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/dstdevwd}
*/
setReadOnly( ns, 'dstdevwd', require( './../../../base/ndarray/dstdevwd' ) );

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
* @name maxsorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/maxsorted}
*/
setReadOnly( ns, 'maxsorted', require( './../../../base/ndarray/maxsorted' ) );

/**
* @name mean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/mean}
*/
setReadOnly( ns, 'mean', require( './../../../base/ndarray/mean' ) );

/**
* @name meankbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/meankbn}
*/
setReadOnly( ns, 'meankbn', require( './../../../base/ndarray/meankbn' ) );

/**
* @name meankbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/meankbn2}
*/
setReadOnly( ns, 'meankbn2', require( './../../../base/ndarray/meankbn2' ) );

/**
* @name meanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/meanors}
*/
setReadOnly( ns, 'meanors', require( './../../../base/ndarray/meanors' ) );

/**
* @name meanpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/meanpn}
*/
setReadOnly( ns, 'meanpn', require( './../../../base/ndarray/meanpn' ) );

/**
* @name meanpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/meanpw}
*/
setReadOnly( ns, 'meanpw', require( './../../../base/ndarray/meanpw' ) );

/**
* @name meanwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/meanwd}
*/
setReadOnly( ns, 'meanwd', require( './../../../base/ndarray/meanwd' ) );

/**
* @name mediansorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/mediansorted}
*/
setReadOnly( ns, 'mediansorted', require( './../../../base/ndarray/mediansorted' ) );

/**
* @name midrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/midrange}
*/
setReadOnly( ns, 'midrange', require( './../../../base/ndarray/midrange' ) );

/**
* @name midrangeBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/midrange-by}
*/
setReadOnly( ns, 'midrangeBy', require( './../../../base/ndarray/midrange-by' ) );

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
* @name minsorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/minsorted}
*/
setReadOnly( ns, 'minsorted', require( './../../../base/ndarray/minsorted' ) );

/**
* @name mskmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/mskmax}
*/
setReadOnly( ns, 'mskmax', require( './../../../base/ndarray/mskmax' ) );

/**
* @name mskmaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/mskmaxabs}
*/
setReadOnly( ns, 'mskmaxabs', require( './../../../base/ndarray/mskmaxabs' ) );

/**
* @name mskmidrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/mskmidrange}
*/
setReadOnly( ns, 'mskmidrange', require( './../../../base/ndarray/mskmidrange' ) );

/**
* @name mskmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/mskmin}
*/
setReadOnly( ns, 'mskmin', require( './../../../base/ndarray/mskmin' ) );

/**
* @name mskrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/mskrange}
*/
setReadOnly( ns, 'mskrange', require( './../../../base/ndarray/mskrange' ) );

/**
* @name nanmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/nanmax}
*/
setReadOnly( ns, 'nanmax', require( './../../../base/ndarray/nanmax' ) );

/**
* @name nanmaxBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/nanmax-by}
*/
setReadOnly( ns, 'nanmaxBy', require( './../../../base/ndarray/nanmax-by' ) );

/**
* @name nanmaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/nanmaxabs}
*/
setReadOnly( ns, 'nanmaxabs', require( './../../../base/ndarray/nanmaxabs' ) );

/**
* @name nanmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/nanmean}
*/
setReadOnly( ns, 'nanmean', require( './../../../base/ndarray/nanmean' ) );

/**
* @name nanmeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/nanmeanors}
*/
setReadOnly( ns, 'nanmeanors', require( './../../../base/ndarray/nanmeanors' ) );

/**
* @name nanmeanpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/nanmeanpn}
*/
setReadOnly( ns, 'nanmeanpn', require( './../../../base/ndarray/nanmeanpn' ) );

/**
* @name nanmeanwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/nanmeanwd}
*/
setReadOnly( ns, 'nanmeanwd', require( './../../../base/ndarray/nanmeanwd' ) );

/**
* @name nanmidrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/nanmidrange}
*/
setReadOnly( ns, 'nanmidrange', require( './../../../base/ndarray/nanmidrange' ) );

/**
* @name nanmidrangeBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/nanmidrange-by}
*/
setReadOnly( ns, 'nanmidrangeBy', require( './../../../base/ndarray/nanmidrange-by' ) );

/**
* @name nanmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/nanmin}
*/
setReadOnly( ns, 'nanmin', require( './../../../base/ndarray/nanmin' ) );

/**
* @name nanminBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/nanmin-by}
*/
setReadOnly( ns, 'nanminBy', require( './../../../base/ndarray/nanmin-by' ) );

/**
* @name nanminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/nanminabs}
*/
setReadOnly( ns, 'nanminabs', require( './../../../base/ndarray/nanminabs' ) );

/**
* @name nanmskmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/nanmskmax}
*/
setReadOnly( ns, 'nanmskmax', require( './../../../base/ndarray/nanmskmax' ) );

/**
* @name nanmskmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/nanmskmin}
*/
setReadOnly( ns, 'nanmskmin', require( './../../../base/ndarray/nanmskmin' ) );

/**
* @name nanmskrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/nanmskrange}
*/
setReadOnly( ns, 'nanmskrange', require( './../../../base/ndarray/nanmskrange' ) );

/**
* @name nanrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/nanrange}
*/
setReadOnly( ns, 'nanrange', require( './../../../base/ndarray/nanrange' ) );

/**
* @name nanrangeBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/nanrange-by}
*/
setReadOnly( ns, 'nanrangeBy', require( './../../../base/ndarray/nanrange-by' ) );

/**
* @name range
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/range}
*/
setReadOnly( ns, 'range', require( './../../../base/ndarray/range' ) );

/**
* @name rangeBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/range-by}
*/
setReadOnly( ns, 'rangeBy', require( './../../../base/ndarray/range-by' ) );

/**
* @name rangeabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/rangeabs}
*/
setReadOnly( ns, 'rangeabs', require( './../../../base/ndarray/rangeabs' ) );

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
* @name scumaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/scumaxabs}
*/
setReadOnly( ns, 'scumaxabs', require( './../../../base/ndarray/scumaxabs' ) );

/**
* @name scumin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/scumin}
*/
setReadOnly( ns, 'scumin', require( './../../../base/ndarray/scumin' ) );

/**
* @name scuminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/scuminabs}
*/
setReadOnly( ns, 'scuminabs', require( './../../../base/ndarray/scuminabs' ) );

/**
* @name sdsmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/sdsmean}
*/
setReadOnly( ns, 'sdsmean', require( './../../../base/ndarray/sdsmean' ) );

/**
* @name sdsmeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/sdsmeanors}
*/
setReadOnly( ns, 'sdsmeanors', require( './../../../base/ndarray/sdsmeanors' ) );

/**
* @name sdsnanmeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/sdsnanmeanors}
*/
setReadOnly( ns, 'sdsnanmeanors', require( './../../../base/ndarray/sdsnanmeanors' ) );

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
* @name smaxabssorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/smaxabssorted}
*/
setReadOnly( ns, 'smaxabssorted', require( './../../../base/ndarray/smaxabssorted' ) );

/**
* @name smaxsorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/smaxsorted}
*/
setReadOnly( ns, 'smaxsorted', require( './../../../base/ndarray/smaxsorted' ) );

/**
* @name smean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/smean}
*/
setReadOnly( ns, 'smean', require( './../../../base/ndarray/smean' ) );

/**
* @name smeankbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/smeankbn}
*/
setReadOnly( ns, 'smeankbn', require( './../../../base/ndarray/smeankbn' ) );

/**
* @name smeankbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/smeankbn2}
*/
setReadOnly( ns, 'smeankbn2', require( './../../../base/ndarray/smeankbn2' ) );

/**
* @name smeanli
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/smeanli}
*/
setReadOnly( ns, 'smeanli', require( './../../../base/ndarray/smeanli' ) );

/**
* @name smeanlipw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/smeanlipw}
*/
setReadOnly( ns, 'smeanlipw', require( './../../../base/ndarray/smeanlipw' ) );

/**
* @name smeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/smeanors}
*/
setReadOnly( ns, 'smeanors', require( './../../../base/ndarray/smeanors' ) );

/**
* @name smeanpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/smeanpn}
*/
setReadOnly( ns, 'smeanpn', require( './../../../base/ndarray/smeanpn' ) );

/**
* @name smeanpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/smeanpw}
*/
setReadOnly( ns, 'smeanpw', require( './../../../base/ndarray/smeanpw' ) );

/**
* @name smeanwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/smeanwd}
*/
setReadOnly( ns, 'smeanwd', require( './../../../base/ndarray/smeanwd' ) );

/**
* @name smediansorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/smediansorted}
*/
setReadOnly( ns, 'smediansorted', require( './../../../base/ndarray/smediansorted' ) );

/**
* @name smidrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/smidrange}
*/
setReadOnly( ns, 'smidrange', require( './../../../base/ndarray/smidrange' ) );

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
* @name sminsorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/sminsorted}
*/
setReadOnly( ns, 'sminsorted', require( './../../../base/ndarray/sminsorted' ) );

/**
* @name smskmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/smskmax}
*/
setReadOnly( ns, 'smskmax', require( './../../../base/ndarray/smskmax' ) );

/**
* @name smskmaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/smskmaxabs}
*/
setReadOnly( ns, 'smskmaxabs', require( './../../../base/ndarray/smskmaxabs' ) );

/**
* @name smskmidrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/smskmidrange}
*/
setReadOnly( ns, 'smskmidrange', require( './../../../base/ndarray/smskmidrange' ) );

/**
* @name smskmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/smskmin}
*/
setReadOnly( ns, 'smskmin', require( './../../../base/ndarray/smskmin' ) );

/**
* @name smskrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/smskrange}
*/
setReadOnly( ns, 'smskrange', require( './../../../base/ndarray/smskrange' ) );

/**
* @name snanmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/snanmax}
*/
setReadOnly( ns, 'snanmax', require( './../../../base/ndarray/snanmax' ) );

/**
* @name snanmaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/snanmaxabs}
*/
setReadOnly( ns, 'snanmaxabs', require( './../../../base/ndarray/snanmaxabs' ) );

/**
* @name snanmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/snanmean}
*/
setReadOnly( ns, 'snanmean', require( './../../../base/ndarray/snanmean' ) );

/**
* @name snanmeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/snanmeanors}
*/
setReadOnly( ns, 'snanmeanors', require( './../../../base/ndarray/snanmeanors' ) );

/**
* @name snanmeanpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/snanmeanpn}
*/
setReadOnly( ns, 'snanmeanpn', require( './../../../base/ndarray/snanmeanpn' ) );

/**
* @name snanmeanwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/snanmeanwd}
*/
setReadOnly( ns, 'snanmeanwd', require( './../../../base/ndarray/snanmeanwd' ) );

/**
* @name snanmidrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/snanmidrange}
*/
setReadOnly( ns, 'snanmidrange', require( './../../../base/ndarray/snanmidrange' ) );

/**
* @name snanmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/snanmin}
*/
setReadOnly( ns, 'snanmin', require( './../../../base/ndarray/snanmin' ) );

/**
* @name snanminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/snanminabs}
*/
setReadOnly( ns, 'snanminabs', require( './../../../base/ndarray/snanminabs' ) );

/**
* @name snanmskmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/snanmskmax}
*/
setReadOnly( ns, 'snanmskmax', require( './../../../base/ndarray/snanmskmax' ) );

/**
* @name snanmskmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/snanmskmin}
*/
setReadOnly( ns, 'snanmskmin', require( './../../../base/ndarray/snanmskmin' ) );

/**
* @name snanmskrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/snanmskrange}
*/
setReadOnly( ns, 'snanmskrange', require( './../../../base/ndarray/snanmskrange' ) );

/**
* @name snanrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/snanrange}
*/
setReadOnly( ns, 'snanrange', require( './../../../base/ndarray/snanrange' ) );

/**
* @name srange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/srange}
*/
setReadOnly( ns, 'srange', require( './../../../base/ndarray/srange' ) );

/**
* @name srangeabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/srangeabs}
*/
setReadOnly( ns, 'srangeabs', require( './../../../base/ndarray/srangeabs' ) );

/**
* @name sstdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/sstdev}
*/
setReadOnly( ns, 'sstdev', require( './../../../base/ndarray/sstdev' ) );

/**
* @name sstdevch
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/sstdevch}
*/
setReadOnly( ns, 'sstdevch', require( './../../../base/ndarray/sstdevch' ) );

/**
* @name sstdevpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/sstdevpn}
*/
setReadOnly( ns, 'sstdevpn', require( './../../../base/ndarray/sstdevpn' ) );

/**
* @name sstdevwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/sstdevwd}
*/
setReadOnly( ns, 'sstdevwd', require( './../../../base/ndarray/sstdevwd' ) );

/**
* @name stdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/stdev}
*/
setReadOnly( ns, 'stdev', require( './../../../base/ndarray/stdev' ) );

/**
* @name stdevch
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/stdevch}
*/
setReadOnly( ns, 'stdevch', require( './../../../base/ndarray/stdevch' ) );

/**
* @name stdevpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/stdevpn}
*/
setReadOnly( ns, 'stdevpn', require( './../../../base/ndarray/stdevpn' ) );

/**
* @name stdevtk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/stdevtk}
*/
setReadOnly( ns, 'stdevtk', require( './../../../base/ndarray/stdevtk' ) );

/**
* @name stdevwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/stdevwd}
*/
setReadOnly( ns, 'stdevwd', require( './../../../base/ndarray/stdevwd' ) );

/**
* @name stdevyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/stdevyc}
*/
setReadOnly( ns, 'stdevyc', require( './../../../base/ndarray/stdevyc' ) );

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
* @name variance
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/variance}
*/
setReadOnly( ns, 'variance', require( './../../../base/ndarray/variance' ) );

/**
* @name variancech
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/variancech}
*/
setReadOnly( ns, 'variancech', require( './../../../base/ndarray/variancech' ) );

/**
* @name variancewd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/ndarray/variancewd}
*/
setReadOnly( ns, 'variancewd', require( './../../../base/ndarray/variancewd' ) );

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
