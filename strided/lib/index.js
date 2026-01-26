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
* @name covarmtk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/covarmtk}
*/
setReadOnly( ns, 'covarmtk', require( './../../strided/covarmtk' ) );

/**
* @name dcovarmtk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dcovarmtk}
*/
setReadOnly( ns, 'dcovarmtk', require( './../../strided/dcovarmtk' ) );

/**
* @name dcovmatmtk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dcovmatmtk}
*/
setReadOnly( ns, 'dcovmatmtk', require( './../../strided/dcovmatmtk' ) );

/**
* @name dcumax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dcumax}
*/
setReadOnly( ns, 'dcumax', require( './../../strided/dcumax' ) );

/**
* @name dcumaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dcumaxabs}
*/
setReadOnly( ns, 'dcumaxabs', require( './../../strided/dcumaxabs' ) );

/**
* @name dcumin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dcumin}
*/
setReadOnly( ns, 'dcumin', require( './../../strided/dcumin' ) );

/**
* @name dcuminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dcuminabs}
*/
setReadOnly( ns, 'dcuminabs', require( './../../strided/dcuminabs' ) );

/**
* @name dmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmax}
*/
setReadOnly( ns, 'dmax', require( './../../strided/dmax' ) );

/**
* @name dmaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmaxabs}
*/
setReadOnly( ns, 'dmaxabs', require( './../../strided/dmaxabs' ) );

/**
* @name dmaxabssorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmaxabssorted}
*/
setReadOnly( ns, 'dmaxabssorted', require( './../../strided/dmaxabssorted' ) );

/**
* @name dmaxsorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmaxsorted}
*/
setReadOnly( ns, 'dmaxsorted', require( './../../strided/dmaxsorted' ) );

/**
* @name dmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmean}
*/
setReadOnly( ns, 'dmean', require( './../../strided/dmean' ) );

/**
* @name dmeankbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmeankbn}
*/
setReadOnly( ns, 'dmeankbn', require( './../../strided/dmeankbn' ) );

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
* @name dmeanpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmeanpn}
*/
setReadOnly( ns, 'dmeanpn', require( './../../strided/dmeanpn' ) );

/**
* @name dmeanpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmeanpw}
*/
setReadOnly( ns, 'dmeanpw', require( './../../strided/dmeanpw' ) );

/**
* @name dmeanstdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmeanstdev}
*/
setReadOnly( ns, 'dmeanstdev', require( './../../strided/dmeanstdev' ) );

/**
* @name dmeanstdevpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmeanstdevpn}
*/
setReadOnly( ns, 'dmeanstdevpn', require( './../../strided/dmeanstdevpn' ) );

/**
* @name dmeanvar
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmeanvar}
*/
setReadOnly( ns, 'dmeanvar', require( './../../strided/dmeanvar' ) );

/**
* @name dmeanvarpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmeanvarpn}
*/
setReadOnly( ns, 'dmeanvarpn', require( './../../strided/dmeanvarpn' ) );

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
* @name dmskmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmskmax}
*/
setReadOnly( ns, 'dmskmax', require( './../../strided/dmskmax' ) );

/**
* @name dmskmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmskmin}
*/
setReadOnly( ns, 'dmskmin', require( './../../strided/dmskmin' ) );

/**
* @name dmskrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dmskrange}
*/
setReadOnly( ns, 'dmskrange', require( './../../strided/dmskrange' ) );

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

/**
* @name dnanmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanmean}
*/
setReadOnly( ns, 'dnanmean', require( './../../strided/dnanmean' ) );

/**
* @name dnanmeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanmeanors}
*/
setReadOnly( ns, 'dnanmeanors', require( './../../strided/dnanmeanors' ) );

/**
* @name dnanmeanpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanmeanpn}
*/
setReadOnly( ns, 'dnanmeanpn', require( './../../strided/dnanmeanpn' ) );

/**
* @name dnanmeanpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanmeanpw}
*/
setReadOnly( ns, 'dnanmeanpw', require( './../../strided/dnanmeanpw' ) );

/**
* @name dnanmeanwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanmeanwd}
*/
setReadOnly( ns, 'dnanmeanwd', require( './../../strided/dnanmeanwd' ) );

/**
* @name dnanmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanmin}
*/
setReadOnly( ns, 'dnanmin', require( './../../strided/dnanmin' ) );

/**
* @name dnanminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanminabs}
*/
setReadOnly( ns, 'dnanminabs', require( './../../strided/dnanminabs' ) );

/**
* @name dnanmskmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanmskmax}
*/
setReadOnly( ns, 'dnanmskmax', require( './../../strided/dnanmskmax' ) );

/**
* @name dnanmskmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanmskmin}
*/
setReadOnly( ns, 'dnanmskmin', require( './../../strided/dnanmskmin' ) );

/**
* @name dnanmskrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanmskrange}
*/
setReadOnly( ns, 'dnanmskrange', require( './../../strided/dnanmskrange' ) );

/**
* @name dnanrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanrange}
*/
setReadOnly( ns, 'dnanrange', require( './../../strided/dnanrange' ) );

/**
* @name dnanstdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanstdev}
*/
setReadOnly( ns, 'dnanstdev', require( './../../strided/dnanstdev' ) );

/**
* @name dnanstdevch
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanstdevch}
*/
setReadOnly( ns, 'dnanstdevch', require( './../../strided/dnanstdevch' ) );

/**
* @name dnanstdevpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanstdevpn}
*/
setReadOnly( ns, 'dnanstdevpn', require( './../../strided/dnanstdevpn' ) );

/**
* @name dnanstdevtk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanstdevtk}
*/
setReadOnly( ns, 'dnanstdevtk', require( './../../strided/dnanstdevtk' ) );

/**
* @name dnanstdevwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanstdevwd}
*/
setReadOnly( ns, 'dnanstdevwd', require( './../../strided/dnanstdevwd' ) );

/**
* @name dnanstdevyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanstdevyc}
*/
setReadOnly( ns, 'dnanstdevyc', require( './../../strided/dnanstdevyc' ) );

/**
* @name dnanvariance
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanvariance}
*/
setReadOnly( ns, 'dnanvariance', require( './../../strided/dnanvariance' ) );

/**
* @name dnanvariancech
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanvariancech}
*/
setReadOnly( ns, 'dnanvariancech', require( './../../strided/dnanvariancech' ) );

/**
* @name dnanvariancepn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanvariancepn}
*/
setReadOnly( ns, 'dnanvariancepn', require( './../../strided/dnanvariancepn' ) );

/**
* @name dnanvariancetk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanvariancetk}
*/
setReadOnly( ns, 'dnanvariancetk', require( './../../strided/dnanvariancetk' ) );

/**
* @name dnanvariancewd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanvariancewd}
*/
setReadOnly( ns, 'dnanvariancewd', require( './../../strided/dnanvariancewd' ) );

/**
* @name dnanvarianceyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanvarianceyc}
*/
setReadOnly( ns, 'dnanvarianceyc', require( './../../strided/dnanvarianceyc' ) );

/**
* @name drange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/drange}
*/
setReadOnly( ns, 'drange', require( './../../strided/drange' ) );

/**
* @name dsem
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dsem}
*/
setReadOnly( ns, 'dsem', require( './../../strided/dsem' ) );

/**
* @name dsemch
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dsemch}
*/
setReadOnly( ns, 'dsemch', require( './../../strided/dsemch' ) );

/**
* @name dsempn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dsempn}
*/
setReadOnly( ns, 'dsempn', require( './../../strided/dsempn' ) );

/**
* @name dsemtk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dsemtk}
*/
setReadOnly( ns, 'dsemtk', require( './../../strided/dsemtk' ) );

/**
* @name dsemwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dsemwd}
*/
setReadOnly( ns, 'dsemwd', require( './../../strided/dsemwd' ) );

/**
* @name dsemyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dsemyc}
*/
setReadOnly( ns, 'dsemyc', require( './../../strided/dsemyc' ) );

/**
* @name dsmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dsmean}
*/
setReadOnly( ns, 'dsmean', require( './../../strided/dsmean' ) );

/**
* @name dsmeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dsmeanors}
*/
setReadOnly( ns, 'dsmeanors', require( './../../strided/dsmeanors' ) );

/**
* @name dsmeanpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dsmeanpn}
*/
setReadOnly( ns, 'dsmeanpn', require( './../../strided/dsmeanpn' ) );

/**
* @name dsmeanpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dsmeanpw}
*/
setReadOnly( ns, 'dsmeanpw', require( './../../strided/dsmeanpw' ) );

/**
* @name dsmeanwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dsmeanwd}
*/
setReadOnly( ns, 'dsmeanwd', require( './../../strided/dsmeanwd' ) );

/**
* @name dsnanmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dsnanmean}
*/
setReadOnly( ns, 'dsnanmean', require( './../../strided/dsnanmean' ) );

/**
* @name dsnanmeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dsnanmeanors}
*/
setReadOnly( ns, 'dsnanmeanors', require( './../../strided/dsnanmeanors' ) );

/**
* @name dsnanmeanpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dsnanmeanpn}
*/
setReadOnly( ns, 'dsnanmeanpn', require( './../../strided/dsnanmeanpn' ) );

/**
* @name dsnanmeanwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dsnanmeanwd}
*/
setReadOnly( ns, 'dsnanmeanwd', require( './../../strided/dsnanmeanwd' ) );

/**
* @name dstdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dstdev}
*/
setReadOnly( ns, 'dstdev', require( './../../strided/dstdev' ) );

/**
* @name dstdevch
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dstdevch}
*/
setReadOnly( ns, 'dstdevch', require( './../../strided/dstdevch' ) );

/**
* @name dstdevpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dstdevpn}
*/
setReadOnly( ns, 'dstdevpn', require( './../../strided/dstdevpn' ) );

/**
* @name dstdevtk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dstdevtk}
*/
setReadOnly( ns, 'dstdevtk', require( './../../strided/dstdevtk' ) );

/**
* @name dstdevwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dstdevwd}
*/
setReadOnly( ns, 'dstdevwd', require( './../../strided/dstdevwd' ) );

/**
* @name dstdevyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dstdevyc}
*/
setReadOnly( ns, 'dstdevyc', require( './../../strided/dstdevyc' ) );

/**
* @name dsvariance
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dsvariance}
*/
setReadOnly( ns, 'dsvariance', require( './../../strided/dsvariance' ) );

/**
* @name dsvariancepn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dsvariancepn}
*/
setReadOnly( ns, 'dsvariancepn', require( './../../strided/dsvariancepn' ) );

/**
* @name dvariance
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dvariance}
*/
setReadOnly( ns, 'dvariance', require( './../../strided/dvariance' ) );

/**
* @name dvariancech
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dvariancech}
*/
setReadOnly( ns, 'dvariancech', require( './../../strided/dvariancech' ) );

/**
* @name dvariancepn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dvariancepn}
*/
setReadOnly( ns, 'dvariancepn', require( './../../strided/dvariancepn' ) );

/**
* @name dvariancetk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dvariancetk}
*/
setReadOnly( ns, 'dvariancetk', require( './../../strided/dvariancetk' ) );

/**
* @name dvariancewd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dvariancewd}
*/
setReadOnly( ns, 'dvariancewd', require( './../../strided/dvariancewd' ) );

/**
* @name dvarianceyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dvarianceyc}
*/
setReadOnly( ns, 'dvarianceyc', require( './../../strided/dvarianceyc' ) );

/**
* @name dvarm
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dvarm}
*/
setReadOnly( ns, 'dvarm', require( './../../strided/dvarm' ) );

/**
* @name dvarmpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dvarmpn}
*/
setReadOnly( ns, 'dvarmpn', require( './../../strided/dvarmpn' ) );

/**
* @name dvarmtk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dvarmtk}
*/
setReadOnly( ns, 'dvarmtk', require( './../../strided/dvarmtk' ) );

/**
* @name dztest
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dztest}
*/
setReadOnly( ns, 'dztest', require( './../../strided/dztest' ) );

/**
* @name dztest2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dztest2}
*/
setReadOnly( ns, 'dztest2', require( './../../strided/dztest2' ) );

/**
* @name max
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/max}
*/
setReadOnly( ns, 'max', require( './../../strided/max' ) );

/**
* @name maxBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/max-by}
*/
setReadOnly( ns, 'maxBy', require( './../../strided/max-by' ) );

/**
* @name maxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/maxabs}
*/
setReadOnly( ns, 'maxabs', require( './../../strided/maxabs' ) );

/**
* @name maxsorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/maxsorted}
*/
setReadOnly( ns, 'maxsorted', require( './../../strided/maxsorted' ) );

/**
* @name mean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/mean}
*/
setReadOnly( ns, 'mean', require( './../../strided/mean' ) );

/**
* @name meankbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/meankbn}
*/
setReadOnly( ns, 'meankbn', require( './../../strided/meankbn' ) );

/**
* @name meankbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/meankbn2}
*/
setReadOnly( ns, 'meankbn2', require( './../../strided/meankbn2' ) );

/**
* @name meanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/meanors}
*/
setReadOnly( ns, 'meanors', require( './../../strided/meanors' ) );

/**
* @name meanpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/meanpn}
*/
setReadOnly( ns, 'meanpn', require( './../../strided/meanpn' ) );

/**
* @name meanpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/meanpw}
*/
setReadOnly( ns, 'meanpw', require( './../../strided/meanpw' ) );

/**
* @name meanwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/meanwd}
*/
setReadOnly( ns, 'meanwd', require( './../../strided/meanwd' ) );

/**
* @name mediansorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/mediansorted}
*/
setReadOnly( ns, 'mediansorted', require( './../../strided/mediansorted' ) );

/**
* @name min
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/min}
*/
setReadOnly( ns, 'min', require( './../../strided/min' ) );

/**
* @name minBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/min-by}
*/
setReadOnly( ns, 'minBy', require( './../../strided/min-by' ) );

/**
* @name minabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/minabs}
*/
setReadOnly( ns, 'minabs', require( './../../strided/minabs' ) );

/**
* @name minsorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/minsorted}
*/
setReadOnly( ns, 'minsorted', require( './../../strided/minsorted' ) );

/**
* @name mskmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/mskmax}
*/
setReadOnly( ns, 'mskmax', require( './../../strided/mskmax' ) );

/**
* @name mskmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/mskmin}
*/
setReadOnly( ns, 'mskmin', require( './../../strided/mskmin' ) );

/**
* @name mskrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/mskrange}
*/
setReadOnly( ns, 'mskrange', require( './../../strided/mskrange' ) );

/**
* @name nanmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanmax}
*/
setReadOnly( ns, 'nanmax', require( './../../strided/nanmax' ) );

/**
* @name nanmaxBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanmax-by}
*/
setReadOnly( ns, 'nanmaxBy', require( './../../strided/nanmax-by' ) );

/**
* @name nanmaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanmaxabs}
*/
setReadOnly( ns, 'nanmaxabs', require( './../../strided/nanmaxabs' ) );

/**
* @name nanmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanmean}
*/
setReadOnly( ns, 'nanmean', require( './../../strided/nanmean' ) );

/**
* @name nanmeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanmeanors}
*/
setReadOnly( ns, 'nanmeanors', require( './../../strided/nanmeanors' ) );

/**
* @name nanmeanpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanmeanpn}
*/
setReadOnly( ns, 'nanmeanpn', require( './../../strided/nanmeanpn' ) );

/**
* @name nanmeanwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanmeanwd}
*/
setReadOnly( ns, 'nanmeanwd', require( './../../strided/nanmeanwd' ) );

/**
* @name nanmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanmin}
*/
setReadOnly( ns, 'nanmin', require( './../../strided/nanmin' ) );

/**
* @name nanminBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanmin-by}
*/
setReadOnly( ns, 'nanminBy', require( './../../strided/nanmin-by' ) );

/**
* @name nanminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanminabs}
*/
setReadOnly( ns, 'nanminabs', require( './../../strided/nanminabs' ) );

/**
* @name nanmskmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanmskmax}
*/
setReadOnly( ns, 'nanmskmax', require( './../../strided/nanmskmax' ) );

/**
* @name nanmskmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanmskmin}
*/
setReadOnly( ns, 'nanmskmin', require( './../../strided/nanmskmin' ) );

/**
* @name nanmskrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanmskrange}
*/
setReadOnly( ns, 'nanmskrange', require( './../../strided/nanmskrange' ) );

/**
* @name nanrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanrange}
*/
setReadOnly( ns, 'nanrange', require( './../../strided/nanrange' ) );

/**
* @name nanrangeBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanrange-by}
*/
setReadOnly( ns, 'nanrangeBy', require( './../../strided/nanrange-by' ) );

/**
* @name nanstdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanstdev}
*/
setReadOnly( ns, 'nanstdev', require( './../../strided/nanstdev' ) );

/**
* @name nanstdevch
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanstdevch}
*/
setReadOnly( ns, 'nanstdevch', require( './../../strided/nanstdevch' ) );

/**
* @name nanstdevpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanstdevpn}
*/
setReadOnly( ns, 'nanstdevpn', require( './../../strided/nanstdevpn' ) );

/**
* @name nanstdevtk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanstdevtk}
*/
setReadOnly( ns, 'nanstdevtk', require( './../../strided/nanstdevtk' ) );

/**
* @name nanstdevwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanstdevwd}
*/
setReadOnly( ns, 'nanstdevwd', require( './../../strided/nanstdevwd' ) );

/**
* @name nanstdevyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanstdevyc}
*/
setReadOnly( ns, 'nanstdevyc', require( './../../strided/nanstdevyc' ) );

/**
* @name nanvariance
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanvariance}
*/
setReadOnly( ns, 'nanvariance', require( './../../strided/nanvariance' ) );

/**
* @name nanvariancech
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanvariancech}
*/
setReadOnly( ns, 'nanvariancech', require( './../../strided/nanvariancech' ) );

/**
* @name nanvariancepn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanvariancepn}
*/
setReadOnly( ns, 'nanvariancepn', require( './../../strided/nanvariancepn' ) );

/**
* @name nanvariancetk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanvariancetk}
*/
setReadOnly( ns, 'nanvariancetk', require( './../../strided/nanvariancetk' ) );

/**
* @name nanvariancewd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanvariancewd}
*/
setReadOnly( ns, 'nanvariancewd', require( './../../strided/nanvariancewd' ) );

/**
* @name nanvarianceyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/nanvarianceyc}
*/
setReadOnly( ns, 'nanvarianceyc', require( './../../strided/nanvarianceyc' ) );

/**
* @name range
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/range}
*/
setReadOnly( ns, 'range', require( './../../strided/range' ) );

/**
* @name rangeBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/range-by}
*/
setReadOnly( ns, 'rangeBy', require( './../../strided/range-by' ) );

/**
* @name scovarmtk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/scovarmtk}
*/
setReadOnly( ns, 'scovarmtk', require( './../../strided/scovarmtk' ) );

/**
* @name scumax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/scumax}
*/
setReadOnly( ns, 'scumax', require( './../../strided/scumax' ) );

/**
* @name scumaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/scumaxabs}
*/
setReadOnly( ns, 'scumaxabs', require( './../../strided/scumaxabs' ) );

/**
* @name scumin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/scumin}
*/
setReadOnly( ns, 'scumin', require( './../../strided/scumin' ) );

/**
* @name scuminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/scuminabs}
*/
setReadOnly( ns, 'scuminabs', require( './../../strided/scuminabs' ) );

/**
* @name sdsmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/sdsmean}
*/
setReadOnly( ns, 'sdsmean', require( './../../strided/sdsmean' ) );

/**
* @name sdsmeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/sdsmeanors}
*/
setReadOnly( ns, 'sdsmeanors', require( './../../strided/sdsmeanors' ) );

/**
* @name sdsnanmeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/sdsnanmeanors}
*/
setReadOnly( ns, 'sdsnanmeanors', require( './../../strided/sdsnanmeanors' ) );

/**
* @name smax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smax}
*/
setReadOnly( ns, 'smax', require( './../../strided/smax' ) );

/**
* @name smaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smaxabs}
*/
setReadOnly( ns, 'smaxabs', require( './../../strided/smaxabs' ) );

/**
* @name smaxabssorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smaxabssorted}
*/
setReadOnly( ns, 'smaxabssorted', require( './../../strided/smaxabssorted' ) );

/**
* @name smaxsorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smaxsorted}
*/
setReadOnly( ns, 'smaxsorted', require( './../../strided/smaxsorted' ) );

/**
* @name smean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smean}
*/
setReadOnly( ns, 'smean', require( './../../strided/smean' ) );

/**
* @name smeankbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smeankbn}
*/
setReadOnly( ns, 'smeankbn', require( './../../strided/smeankbn' ) );

/**
* @name smeankbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smeankbn2}
*/
setReadOnly( ns, 'smeankbn2', require( './../../strided/smeankbn2' ) );

/**
* @name smeanli
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smeanli}
*/
setReadOnly( ns, 'smeanli', require( './../../strided/smeanli' ) );

/**
* @name smeanlipw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smeanlipw}
*/
setReadOnly( ns, 'smeanlipw', require( './../../strided/smeanlipw' ) );

/**
* @name smeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smeanors}
*/
setReadOnly( ns, 'smeanors', require( './../../strided/smeanors' ) );

/**
* @name smeanpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smeanpn}
*/
setReadOnly( ns, 'smeanpn', require( './../../strided/smeanpn' ) );

/**
* @name smeanpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smeanpw}
*/
setReadOnly( ns, 'smeanpw', require( './../../strided/smeanpw' ) );

/**
* @name smeanwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smeanwd}
*/
setReadOnly( ns, 'smeanwd', require( './../../strided/smeanwd' ) );

/**
* @name smediansorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smediansorted}
*/
setReadOnly( ns, 'smediansorted', require( './../../strided/smediansorted' ) );

/**
* @name smidrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smidrange}
*/
setReadOnly( ns, 'smidrange', require( './../../strided/smidrange' ) );

/**
* @name smin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smin}
*/
setReadOnly( ns, 'smin', require( './../../strided/smin' ) );

/**
* @name sminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/sminabs}
*/
setReadOnly( ns, 'sminabs', require( './../../strided/sminabs' ) );

/**
* @name sminsorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/sminsorted}
*/
setReadOnly( ns, 'sminsorted', require( './../../strided/sminsorted' ) );

/**
* @name smskmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smskmax}
*/
setReadOnly( ns, 'smskmax', require( './../../strided/smskmax' ) );

/**
* @name smskmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smskmin}
*/
setReadOnly( ns, 'smskmin', require( './../../strided/smskmin' ) );

/**
* @name smskrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smskrange}
*/
setReadOnly( ns, 'smskrange', require( './../../strided/smskrange' ) );

/**
* @name snanmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/snanmax}
*/
setReadOnly( ns, 'snanmax', require( './../../strided/snanmax' ) );

/**
* @name snanmaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/snanmaxabs}
*/
setReadOnly( ns, 'snanmaxabs', require( './../../strided/snanmaxabs' ) );

/**
* @name snanmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/snanmean}
*/
setReadOnly( ns, 'snanmean', require( './../../strided/snanmean' ) );

/**
* @name snanmeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/snanmeanors}
*/
setReadOnly( ns, 'snanmeanors', require( './../../strided/snanmeanors' ) );

/**
* @name snanmeanpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/snanmeanpn}
*/
setReadOnly( ns, 'snanmeanpn', require( './../../strided/snanmeanpn' ) );

/**
* @name snanmeanwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/snanmeanwd}
*/
setReadOnly( ns, 'snanmeanwd', require( './../../strided/snanmeanwd' ) );

/**
* @name snanmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/snanmin}
*/
setReadOnly( ns, 'snanmin', require( './../../strided/snanmin' ) );

/**
* @name snanminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/snanminabs}
*/
setReadOnly( ns, 'snanminabs', require( './../../strided/snanminabs' ) );

/**
* @name snanmskmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/snanmskmax}
*/
setReadOnly( ns, 'snanmskmax', require( './../../strided/snanmskmax' ) );

/**
* @name snanmskmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/snanmskmin}
*/
setReadOnly( ns, 'snanmskmin', require( './../../strided/snanmskmin' ) );

/**
* @name snanmskrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/snanmskrange}
*/
setReadOnly( ns, 'snanmskrange', require( './../../strided/snanmskrange' ) );

/**
* @name snanrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/snanrange}
*/
setReadOnly( ns, 'snanrange', require( './../../strided/snanrange' ) );

/**
* @name srange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/srange}
*/
setReadOnly( ns, 'srange', require( './../../strided/srange' ) );

/**
* @name sstdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/sstdev}
*/
setReadOnly( ns, 'sstdev', require( './../../strided/sstdev' ) );

/**
* @name sstdevch
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/sstdevch}
*/
setReadOnly( ns, 'sstdevch', require( './../../strided/sstdevch' ) );

/**
* @name sstdevpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/sstdevpn}
*/
setReadOnly( ns, 'sstdevpn', require( './../../strided/sstdevpn' ) );

/**
* @name sstdevtk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/sstdevtk}
*/
setReadOnly( ns, 'sstdevtk', require( './../../strided/sstdevtk' ) );

/**
* @name sstdevwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/sstdevwd}
*/
setReadOnly( ns, 'sstdevwd', require( './../../strided/sstdevwd' ) );

/**
* @name sstdevyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/sstdevyc}
*/
setReadOnly( ns, 'sstdevyc', require( './../../strided/sstdevyc' ) );

/**
* @name stdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/stdev}
*/
setReadOnly( ns, 'stdev', require( './../../strided/stdev' ) );

/**
* @name stdevch
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/stdevch}
*/
setReadOnly( ns, 'stdevch', require( './../../strided/stdevch' ) );

/**
* @name stdevpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/stdevpn}
*/
setReadOnly( ns, 'stdevpn', require( './../../strided/stdevpn' ) );

/**
* @name stdevtk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/stdevtk}
*/
setReadOnly( ns, 'stdevtk', require( './../../strided/stdevtk' ) );

/**
* @name stdevwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/stdevwd}
*/
setReadOnly( ns, 'stdevwd', require( './../../strided/stdevwd' ) );

/**
* @name stdevyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/stdevyc}
*/
setReadOnly( ns, 'stdevyc', require( './../../strided/stdevyc' ) );

/**
* @name svariance
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/svariance}
*/
setReadOnly( ns, 'svariance', require( './../../strided/svariance' ) );

/**
* @name svariancech
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/svariancech}
*/
setReadOnly( ns, 'svariancech', require( './../../strided/svariancech' ) );

/**
* @name svariancepn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/svariancepn}
*/
setReadOnly( ns, 'svariancepn', require( './../../strided/svariancepn' ) );

/**
* @name svariancetk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/svariancetk}
*/
setReadOnly( ns, 'svariancetk', require( './../../strided/svariancetk' ) );

/**
* @name svariancewd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/svariancewd}
*/
setReadOnly( ns, 'svariancewd', require( './../../strided/svariancewd' ) );

/**
* @name svarianceyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/svarianceyc}
*/
setReadOnly( ns, 'svarianceyc', require( './../../strided/svarianceyc' ) );

/**
* @name sztest
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/sztest}
*/
setReadOnly( ns, 'sztest', require( './../../strided/sztest' ) );

/**
* @name sztest2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/sztest2}
*/
setReadOnly( ns, 'sztest2', require( './../../strided/sztest2' ) );

/**
* @name variance
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/variance}
*/
setReadOnly( ns, 'variance', require( './../../strided/variance' ) );

/**
* @name variancech
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/variancech}
*/
setReadOnly( ns, 'variancech', require( './../../strided/variancech' ) );

/**
* @name variancepn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/variancepn}
*/
setReadOnly( ns, 'variancepn', require( './../../strided/variancepn' ) );

/**
* @name variancetk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/variancetk}
*/
setReadOnly( ns, 'variancetk', require( './../../strided/variancetk' ) );

/**
* @name variancewd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/variancewd}
*/
setReadOnly( ns, 'variancewd', require( './../../strided/variancewd' ) );

/**
* @name varianceyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/varianceyc}
*/
setReadOnly( ns, 'varianceyc', require( './../../strided/varianceyc' ) );

/**
* @name ztest
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/ztest}
*/
setReadOnly( ns, 'ztest', require( './../../strided/ztest' ) );

/**
* @name ztest2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/ztest2}
*/
setReadOnly( ns, 'ztest2', require( './../../strided/ztest2' ) );


// EXPORTS //

module.exports = ns;
