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
setReadOnly( ns, 'cumax', require( '@stdlib/stats/base/cumax' ) );

/**
* @name cumaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/cumaxabs}
*/
setReadOnly( ns, 'cumaxabs', require( '@stdlib/stats/base/cumaxabs' ) );

/**
* @name cumin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/cumin}
*/
setReadOnly( ns, 'cumin', require( '@stdlib/stats/base/cumin' ) );

/**
* @name cuminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/cuminabs}
*/
setReadOnly( ns, 'cuminabs', require( '@stdlib/stats/base/cuminabs' ) );

/**
* @name dcumax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dcumax}
*/
setReadOnly( ns, 'dcumax', require( '@stdlib/stats/base/dcumax' ) );

/**
* @name dcumaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dcumaxabs}
*/
setReadOnly( ns, 'dcumaxabs', require( '@stdlib/stats/base/dcumaxabs' ) );

/**
* @name dcumin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dcumin}
*/
setReadOnly( ns, 'dcumin', require( '@stdlib/stats/base/dcumin' ) );

/**
* @name dcuminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dcuminabs}
*/
setReadOnly( ns, 'dcuminabs', require( '@stdlib/stats/base/dcuminabs' ) );

/**
* @name dists
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists}
*/
setReadOnly( ns, 'dists', require( '@stdlib/stats/base/dists' ) );

/**
* @name dmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dmax}
*/
setReadOnly( ns, 'dmax', require( '@stdlib/stats/base/dmax' ) );

/**
* @name dmaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dmaxabs}
*/
setReadOnly( ns, 'dmaxabs', require( '@stdlib/stats/base/dmaxabs' ) );

/**
* @name dmaxabssorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dmaxabssorted}
*/
setReadOnly( ns, 'dmaxabssorted', require( '@stdlib/stats/base/dmaxabssorted' ) );

/**
* @name dmaxsorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dmaxsorted}
*/
setReadOnly( ns, 'dmaxsorted', require( '@stdlib/stats/base/dmaxsorted' ) );

/**
* @name dmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dmean}
*/
setReadOnly( ns, 'dmean', require( '@stdlib/stats/base/dmean' ) );

/**
* @name dmeankbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dmeankbn}
*/
setReadOnly( ns, 'dmeankbn', require( '@stdlib/stats/base/dmeankbn' ) );

/**
* @name dmeankbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dmeankbn2}
*/
setReadOnly( ns, 'dmeankbn2', require( '@stdlib/stats/base/dmeankbn2' ) );

/**
* @name dmeanli
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dmeanli}
*/
setReadOnly( ns, 'dmeanli', require( '@stdlib/stats/base/dmeanli' ) );

/**
* @name dmeanlipw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dmeanlipw}
*/
setReadOnly( ns, 'dmeanlipw', require( '@stdlib/stats/base/dmeanlipw' ) );

/**
* @name dmeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dmeanors}
*/
setReadOnly( ns, 'dmeanors', require( '@stdlib/stats/base/dmeanors' ) );

/**
* @name dmeanpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dmeanpn}
*/
setReadOnly( ns, 'dmeanpn', require( '@stdlib/stats/base/dmeanpn' ) );

/**
* @name dmeanpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dmeanpw}
*/
setReadOnly( ns, 'dmeanpw', require( '@stdlib/stats/base/dmeanpw' ) );

/**
* @name dmeanstdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dmeanstdev}
*/
setReadOnly( ns, 'dmeanstdev', require( '@stdlib/stats/base/dmeanstdev' ) );

/**
* @name dmeanstdevpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dmeanstdevpn}
*/
setReadOnly( ns, 'dmeanstdevpn', require( '@stdlib/stats/base/dmeanstdevpn' ) );

/**
* @name dmeanvar
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dmeanvar}
*/
setReadOnly( ns, 'dmeanvar', require( '@stdlib/stats/base/dmeanvar' ) );

/**
* @name dmeanvarpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dmeanvarpn}
*/
setReadOnly( ns, 'dmeanvarpn', require( '@stdlib/stats/base/dmeanvarpn' ) );

/**
* @name dmeanwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dmeanwd}
*/
setReadOnly( ns, 'dmeanwd', require( '@stdlib/stats/base/dmeanwd' ) );

/**
* @name dmediansorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dmediansorted}
*/
setReadOnly( ns, 'dmediansorted', require( '@stdlib/stats/base/dmediansorted' ) );

/**
* @name dmidrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dmidrange}
*/
setReadOnly( ns, 'dmidrange', require( '@stdlib/stats/base/dmidrange' ) );

/**
* @name dmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dmin}
*/
setReadOnly( ns, 'dmin', require( '@stdlib/stats/base/dmin' ) );

/**
* @name dminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dminabs}
*/
setReadOnly( ns, 'dminabs', require( '@stdlib/stats/base/dminabs' ) );

/**
* @name dminsorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dminsorted}
*/
setReadOnly( ns, 'dminsorted', require( '@stdlib/stats/base/dminsorted' ) );

/**
* @name dmskmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dmskmax}
*/
setReadOnly( ns, 'dmskmax', require( '@stdlib/stats/base/dmskmax' ) );

/**
* @name dmskmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dmskmin}
*/
setReadOnly( ns, 'dmskmin', require( '@stdlib/stats/base/dmskmin' ) );

/**
* @name dmskrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dmskrange}
*/
setReadOnly( ns, 'dmskrange', require( '@stdlib/stats/base/dmskrange' ) );

/**
* @name dnanmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dnanmax}
*/
setReadOnly( ns, 'dnanmax', require( '@stdlib/stats/base/dnanmax' ) );

/**
* @name dnanmaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dnanmaxabs}
*/
setReadOnly( ns, 'dnanmaxabs', require( '@stdlib/stats/base/dnanmaxabs' ) );

/**
* @name dnanmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dnanmean}
*/
setReadOnly( ns, 'dnanmean', require( '@stdlib/stats/base/dnanmean' ) );

/**
* @name dnanmeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dnanmeanors}
*/
setReadOnly( ns, 'dnanmeanors', require( '@stdlib/stats/base/dnanmeanors' ) );

/**
* @name dnanmeanpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dnanmeanpn}
*/
setReadOnly( ns, 'dnanmeanpn', require( '@stdlib/stats/base/dnanmeanpn' ) );

/**
* @name dnanmeanpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dnanmeanpw}
*/
setReadOnly( ns, 'dnanmeanpw', require( '@stdlib/stats/base/dnanmeanpw' ) );

/**
* @name dnanmeanwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dnanmeanwd}
*/
setReadOnly( ns, 'dnanmeanwd', require( '@stdlib/stats/base/dnanmeanwd' ) );

/**
* @name dnanmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dnanmin}
*/
setReadOnly( ns, 'dnanmin', require( '@stdlib/stats/base/dnanmin' ) );

/**
* @name dnanminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dnanminabs}
*/
setReadOnly( ns, 'dnanminabs', require( '@stdlib/stats/base/dnanminabs' ) );

/**
* @name dnanmskmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dnanmskmax}
*/
setReadOnly( ns, 'dnanmskmax', require( '@stdlib/stats/base/dnanmskmax' ) );

/**
* @name dnanmskmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dnanmskmin}
*/
setReadOnly( ns, 'dnanmskmin', require( '@stdlib/stats/base/dnanmskmin' ) );

/**
* @name dnanmskrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dnanmskrange}
*/
setReadOnly( ns, 'dnanmskrange', require( '@stdlib/stats/base/dnanmskrange' ) );

/**
* @name dnanrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dnanrange}
*/
setReadOnly( ns, 'dnanrange', require( '@stdlib/stats/base/dnanrange' ) );

/**
* @name dnanstdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dnanstdev}
*/
setReadOnly( ns, 'dnanstdev', require( '@stdlib/stats/base/dnanstdev' ) );

/**
* @name dnanstdevch
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dnanstdevch}
*/
setReadOnly( ns, 'dnanstdevch', require( '@stdlib/stats/base/dnanstdevch' ) );

/**
* @name dnanstdevpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dnanstdevpn}
*/
setReadOnly( ns, 'dnanstdevpn', require( '@stdlib/stats/base/dnanstdevpn' ) );

/**
* @name dnanstdevtk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dnanstdevtk}
*/
setReadOnly( ns, 'dnanstdevtk', require( '@stdlib/stats/base/dnanstdevtk' ) );

/**
* @name dnanstdevwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dnanstdevwd}
*/
setReadOnly( ns, 'dnanstdevwd', require( '@stdlib/stats/base/dnanstdevwd' ) );

/**
* @name dnanstdevyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dnanstdevyc}
*/
setReadOnly( ns, 'dnanstdevyc', require( '@stdlib/stats/base/dnanstdevyc' ) );

/**
* @name dnanvariance
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dnanvariance}
*/
setReadOnly( ns, 'dnanvariance', require( '@stdlib/stats/base/dnanvariance' ) );

/**
* @name dnanvariancech
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dnanvariancech}
*/
setReadOnly( ns, 'dnanvariancech', require( '@stdlib/stats/base/dnanvariancech' ) );

/**
* @name dnanvariancepn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dnanvariancepn}
*/
setReadOnly( ns, 'dnanvariancepn', require( '@stdlib/stats/base/dnanvariancepn' ) );

/**
* @name dnanvariancetk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dnanvariancetk}
*/
setReadOnly( ns, 'dnanvariancetk', require( '@stdlib/stats/base/dnanvariancetk' ) );

/**
* @name dnanvariancewd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dnanvariancewd}
*/
setReadOnly( ns, 'dnanvariancewd', require( '@stdlib/stats/base/dnanvariancewd' ) );

/**
* @name dnanvarianceyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dnanvarianceyc}
*/
setReadOnly( ns, 'dnanvarianceyc', require( '@stdlib/stats/base/dnanvarianceyc' ) );

/**
* @name drange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/drange}
*/
setReadOnly( ns, 'drange', require( '@stdlib/stats/base/drange' ) );

/**
* @name dsem
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dsem}
*/
setReadOnly( ns, 'dsem', require( '@stdlib/stats/base/dsem' ) );

/**
* @name dsemch
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dsemch}
*/
setReadOnly( ns, 'dsemch', require( '@stdlib/stats/base/dsemch' ) );

/**
* @name dsempn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dsempn}
*/
setReadOnly( ns, 'dsempn', require( '@stdlib/stats/base/dsempn' ) );

/**
* @name dsemtk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dsemtk}
*/
setReadOnly( ns, 'dsemtk', require( '@stdlib/stats/base/dsemtk' ) );

/**
* @name dsemwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dsemwd}
*/
setReadOnly( ns, 'dsemwd', require( '@stdlib/stats/base/dsemwd' ) );

/**
* @name dsemyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dsemyc}
*/
setReadOnly( ns, 'dsemyc', require( '@stdlib/stats/base/dsemyc' ) );

/**
* @name dsmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dsmean}
*/
setReadOnly( ns, 'dsmean', require( '@stdlib/stats/base/dsmean' ) );

/**
* @name dsmeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dsmeanors}
*/
setReadOnly( ns, 'dsmeanors', require( '@stdlib/stats/base/dsmeanors' ) );

/**
* @name dsmeanpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dsmeanpn}
*/
setReadOnly( ns, 'dsmeanpn', require( '@stdlib/stats/base/dsmeanpn' ) );

/**
* @name dsmeanpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dsmeanpw}
*/
setReadOnly( ns, 'dsmeanpw', require( '@stdlib/stats/base/dsmeanpw' ) );

/**
* @name dsmeanwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dsmeanwd}
*/
setReadOnly( ns, 'dsmeanwd', require( '@stdlib/stats/base/dsmeanwd' ) );

/**
* @name dsnanmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dsnanmean}
*/
setReadOnly( ns, 'dsnanmean', require( '@stdlib/stats/base/dsnanmean' ) );

/**
* @name dsnanmeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dsnanmeanors}
*/
setReadOnly( ns, 'dsnanmeanors', require( '@stdlib/stats/base/dsnanmeanors' ) );

/**
* @name dsnanmeanpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dsnanmeanpn}
*/
setReadOnly( ns, 'dsnanmeanpn', require( '@stdlib/stats/base/dsnanmeanpn' ) );

/**
* @name dsnanmeanwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dsnanmeanwd}
*/
setReadOnly( ns, 'dsnanmeanwd', require( '@stdlib/stats/base/dsnanmeanwd' ) );

/**
* @name dstdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dstdev}
*/
setReadOnly( ns, 'dstdev', require( '@stdlib/stats/base/dstdev' ) );

/**
* @name dstdevch
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dstdevch}
*/
setReadOnly( ns, 'dstdevch', require( '@stdlib/stats/base/dstdevch' ) );

/**
* @name dstdevpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dstdevpn}
*/
setReadOnly( ns, 'dstdevpn', require( '@stdlib/stats/base/dstdevpn' ) );

/**
* @name dstdevtk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dstdevtk}
*/
setReadOnly( ns, 'dstdevtk', require( '@stdlib/stats/base/dstdevtk' ) );

/**
* @name dstdevwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dstdevwd}
*/
setReadOnly( ns, 'dstdevwd', require( '@stdlib/stats/base/dstdevwd' ) );

/**
* @name dstdevyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dstdevyc}
*/
setReadOnly( ns, 'dstdevyc', require( '@stdlib/stats/base/dstdevyc' ) );

/**
* @name dsvariance
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dsvariance}
*/
setReadOnly( ns, 'dsvariance', require( '@stdlib/stats/base/dsvariance' ) );

/**
* @name dsvariancepn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dsvariancepn}
*/
setReadOnly( ns, 'dsvariancepn', require( '@stdlib/stats/base/dsvariancepn' ) );

/**
* @name dvariance
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dvariance}
*/
setReadOnly( ns, 'dvariance', require( '@stdlib/stats/base/dvariance' ) );

/**
* @name dvariancech
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dvariancech}
*/
setReadOnly( ns, 'dvariancech', require( '@stdlib/stats/base/dvariancech' ) );

/**
* @name dvariancepn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dvariancepn}
*/
setReadOnly( ns, 'dvariancepn', require( '@stdlib/stats/base/dvariancepn' ) );

/**
* @name dvariancetk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dvariancetk}
*/
setReadOnly( ns, 'dvariancetk', require( '@stdlib/stats/base/dvariancetk' ) );

/**
* @name dvariancewd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dvariancewd}
*/
setReadOnly( ns, 'dvariancewd', require( '@stdlib/stats/base/dvariancewd' ) );

/**
* @name dvarianceyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dvarianceyc}
*/
setReadOnly( ns, 'dvarianceyc', require( '@stdlib/stats/base/dvarianceyc' ) );

/**
* @name dvarm
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dvarm}
*/
setReadOnly( ns, 'dvarm', require( '@stdlib/stats/base/dvarm' ) );

/**
* @name dvarmpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dvarmpn}
*/
setReadOnly( ns, 'dvarmpn', require( '@stdlib/stats/base/dvarmpn' ) );

/**
* @name dvarmtk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dvarmtk}
*/
setReadOnly( ns, 'dvarmtk', require( '@stdlib/stats/base/dvarmtk' ) );

/**
* @name max
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/max}
*/
setReadOnly( ns, 'max', require( '@stdlib/stats/base/max' ) );

/**
* @name maxBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/max-by}
*/
setReadOnly( ns, 'maxBy', require( '@stdlib/stats/base/max-by' ) );

/**
* @name maxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/maxabs}
*/
setReadOnly( ns, 'maxabs', require( '@stdlib/stats/base/maxabs' ) );

/**
* @name maxsorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/maxsorted}
*/
setReadOnly( ns, 'maxsorted', require( '@stdlib/stats/base/maxsorted' ) );

/**
* @name mean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/mean}
*/
setReadOnly( ns, 'mean', require( '@stdlib/stats/base/mean' ) );

/**
* @name meankbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/meankbn}
*/
setReadOnly( ns, 'meankbn', require( '@stdlib/stats/base/meankbn' ) );

/**
* @name meankbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/meankbn2}
*/
setReadOnly( ns, 'meankbn2', require( '@stdlib/stats/base/meankbn2' ) );

/**
* @name meanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/meanors}
*/
setReadOnly( ns, 'meanors', require( '@stdlib/stats/base/meanors' ) );

/**
* @name meanpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/meanpn}
*/
setReadOnly( ns, 'meanpn', require( '@stdlib/stats/base/meanpn' ) );

/**
* @name meanpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/meanpw}
*/
setReadOnly( ns, 'meanpw', require( '@stdlib/stats/base/meanpw' ) );

/**
* @name meanwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/meanwd}
*/
setReadOnly( ns, 'meanwd', require( '@stdlib/stats/base/meanwd' ) );

/**
* @name mediansorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/mediansorted}
*/
setReadOnly( ns, 'mediansorted', require( '@stdlib/stats/base/mediansorted' ) );

/**
* @name min
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/min}
*/
setReadOnly( ns, 'min', require( '@stdlib/stats/base/min' ) );

/**
* @name minBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/min-by}
*/
setReadOnly( ns, 'minBy', require( '@stdlib/stats/base/min-by' ) );

/**
* @name minabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/minabs}
*/
setReadOnly( ns, 'minabs', require( '@stdlib/stats/base/minabs' ) );

/**
* @name minsorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/minsorted}
*/
setReadOnly( ns, 'minsorted', require( '@stdlib/stats/base/minsorted' ) );

/**
* @name mskmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/mskmax}
*/
setReadOnly( ns, 'mskmax', require( '@stdlib/stats/base/mskmax' ) );

/**
* @name mskmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/mskmin}
*/
setReadOnly( ns, 'mskmin', require( '@stdlib/stats/base/mskmin' ) );

/**
* @name mskrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/mskrange}
*/
setReadOnly( ns, 'mskrange', require( '@stdlib/stats/base/mskrange' ) );

/**
* @name nanmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanmax}
*/
setReadOnly( ns, 'nanmax', require( '@stdlib/stats/base/nanmax' ) );

/**
* @name nanmaxBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanmax-by}
*/
setReadOnly( ns, 'nanmaxBy', require( '@stdlib/stats/base/nanmax-by' ) );

/**
* @name nanmaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanmaxabs}
*/
setReadOnly( ns, 'nanmaxabs', require( '@stdlib/stats/base/nanmaxabs' ) );

/**
* @name nanmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanmean}
*/
setReadOnly( ns, 'nanmean', require( '@stdlib/stats/base/nanmean' ) );

/**
* @name nanmeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanmeanors}
*/
setReadOnly( ns, 'nanmeanors', require( '@stdlib/stats/base/nanmeanors' ) );

/**
* @name nanmeanpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanmeanpn}
*/
setReadOnly( ns, 'nanmeanpn', require( '@stdlib/stats/base/nanmeanpn' ) );

/**
* @name nanmeanwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanmeanwd}
*/
setReadOnly( ns, 'nanmeanwd', require( '@stdlib/stats/base/nanmeanwd' ) );

/**
* @name nanmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanmin}
*/
setReadOnly( ns, 'nanmin', require( '@stdlib/stats/base/nanmin' ) );

/**
* @name nanminBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanmin-by}
*/
setReadOnly( ns, 'nanminBy', require( '@stdlib/stats/base/nanmin-by' ) );

/**
* @name nanminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanminabs}
*/
setReadOnly( ns, 'nanminabs', require( '@stdlib/stats/base/nanminabs' ) );

/**
* @name nanmskmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanmskmax}
*/
setReadOnly( ns, 'nanmskmax', require( '@stdlib/stats/base/nanmskmax' ) );

/**
* @name nanmskmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanmskmin}
*/
setReadOnly( ns, 'nanmskmin', require( '@stdlib/stats/base/nanmskmin' ) );

/**
* @name nanmskrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanmskrange}
*/
setReadOnly( ns, 'nanmskrange', require( '@stdlib/stats/base/nanmskrange' ) );

/**
* @name nanrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanrange}
*/
setReadOnly( ns, 'nanrange', require( '@stdlib/stats/base/nanrange' ) );

/**
* @name nanrangeBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanrange-by}
*/
setReadOnly( ns, 'nanrangeBy', require( '@stdlib/stats/base/nanrange-by' ) );

/**
* @name nanstdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanstdev}
*/
setReadOnly( ns, 'nanstdev', require( '@stdlib/stats/base/nanstdev' ) );

/**
* @name nanstdevch
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanstdevch}
*/
setReadOnly( ns, 'nanstdevch', require( '@stdlib/stats/base/nanstdevch' ) );

/**
* @name nanstdevpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanstdevpn}
*/
setReadOnly( ns, 'nanstdevpn', require( '@stdlib/stats/base/nanstdevpn' ) );

/**
* @name nanstdevtk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanstdevtk}
*/
setReadOnly( ns, 'nanstdevtk', require( '@stdlib/stats/base/nanstdevtk' ) );

/**
* @name nanstdevwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanstdevwd}
*/
setReadOnly( ns, 'nanstdevwd', require( '@stdlib/stats/base/nanstdevwd' ) );

/**
* @name nanstdevyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanstdevyc}
*/
setReadOnly( ns, 'nanstdevyc', require( '@stdlib/stats/base/nanstdevyc' ) );

/**
* @name nanvariance
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanvariance}
*/
setReadOnly( ns, 'nanvariance', require( '@stdlib/stats/base/nanvariance' ) );

/**
* @name nanvariancech
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanvariancech}
*/
setReadOnly( ns, 'nanvariancech', require( '@stdlib/stats/base/nanvariancech' ) );

/**
* @name nanvariancepn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanvariancepn}
*/
setReadOnly( ns, 'nanvariancepn', require( '@stdlib/stats/base/nanvariancepn' ) );

/**
* @name nanvariancetk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanvariancetk}
*/
setReadOnly( ns, 'nanvariancetk', require( '@stdlib/stats/base/nanvariancetk' ) );

/**
* @name nanvariancewd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanvariancewd}
*/
setReadOnly( ns, 'nanvariancewd', require( '@stdlib/stats/base/nanvariancewd' ) );

/**
* @name nanvarianceyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/nanvarianceyc}
*/
setReadOnly( ns, 'nanvarianceyc', require( '@stdlib/stats/base/nanvarianceyc' ) );

/**
* @name range
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/range}
*/
setReadOnly( ns, 'range', require( '@stdlib/stats/base/range' ) );

/**
* @name rangeBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/range-by}
*/
setReadOnly( ns, 'rangeBy', require( '@stdlib/stats/base/range-by' ) );

/**
* @name scumax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/scumax}
*/
setReadOnly( ns, 'scumax', require( '@stdlib/stats/base/scumax' ) );

/**
* @name scumaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/scumaxabs}
*/
setReadOnly( ns, 'scumaxabs', require( '@stdlib/stats/base/scumaxabs' ) );

/**
* @name scumin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/scumin}
*/
setReadOnly( ns, 'scumin', require( '@stdlib/stats/base/scumin' ) );

/**
* @name scuminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/scuminabs}
*/
setReadOnly( ns, 'scuminabs', require( '@stdlib/stats/base/scuminabs' ) );

/**
* @name sdsmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/sdsmean}
*/
setReadOnly( ns, 'sdsmean', require( '@stdlib/stats/base/sdsmean' ) );

/**
* @name sdsmeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/sdsmeanors}
*/
setReadOnly( ns, 'sdsmeanors', require( '@stdlib/stats/base/sdsmeanors' ) );

/**
* @name sdsnanmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/sdsnanmean}
*/
setReadOnly( ns, 'sdsnanmean', require( '@stdlib/stats/base/sdsnanmean' ) );

/**
* @name sdsnanmeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/sdsnanmeanors}
*/
setReadOnly( ns, 'sdsnanmeanors', require( '@stdlib/stats/base/sdsnanmeanors' ) );

/**
* @name smax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/smax}
*/
setReadOnly( ns, 'smax', require( '@stdlib/stats/base/smax' ) );

/**
* @name smaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/smaxabs}
*/
setReadOnly( ns, 'smaxabs', require( '@stdlib/stats/base/smaxabs' ) );

/**
* @name smaxabssorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/smaxabssorted}
*/
setReadOnly( ns, 'smaxabssorted', require( '@stdlib/stats/base/smaxabssorted' ) );

/**
* @name smaxsorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/smaxsorted}
*/
setReadOnly( ns, 'smaxsorted', require( '@stdlib/stats/base/smaxsorted' ) );

/**
* @name smean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/smean}
*/
setReadOnly( ns, 'smean', require( '@stdlib/stats/base/smean' ) );

/**
* @name smeankbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/smeankbn}
*/
setReadOnly( ns, 'smeankbn', require( '@stdlib/stats/base/smeankbn' ) );

/**
* @name smeankbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/smeankbn2}
*/
setReadOnly( ns, 'smeankbn2', require( '@stdlib/stats/base/smeankbn2' ) );

/**
* @name smeanli
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/smeanli}
*/
setReadOnly( ns, 'smeanli', require( '@stdlib/stats/base/smeanli' ) );

/**
* @name smeanlipw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/smeanlipw}
*/
setReadOnly( ns, 'smeanlipw', require( '@stdlib/stats/base/smeanlipw' ) );

/**
* @name smeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/smeanors}
*/
setReadOnly( ns, 'smeanors', require( '@stdlib/stats/base/smeanors' ) );

/**
* @name smeanpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/smeanpn}
*/
setReadOnly( ns, 'smeanpn', require( '@stdlib/stats/base/smeanpn' ) );

/**
* @name smeanpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/smeanpw}
*/
setReadOnly( ns, 'smeanpw', require( '@stdlib/stats/base/smeanpw' ) );

/**
* @name smeanwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/smeanwd}
*/
setReadOnly( ns, 'smeanwd', require( '@stdlib/stats/base/smeanwd' ) );

/**
* @name smediansorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/smediansorted}
*/
setReadOnly( ns, 'smediansorted', require( '@stdlib/stats/base/smediansorted' ) );

/**
* @name smidrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/smidrange}
*/
setReadOnly( ns, 'smidrange', require( '@stdlib/stats/base/smidrange' ) );

/**
* @name smin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/smin}
*/
setReadOnly( ns, 'smin', require( '@stdlib/stats/base/smin' ) );

/**
* @name sminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/sminabs}
*/
setReadOnly( ns, 'sminabs', require( '@stdlib/stats/base/sminabs' ) );

/**
* @name sminsorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/sminsorted}
*/
setReadOnly( ns, 'sminsorted', require( '@stdlib/stats/base/sminsorted' ) );

/**
* @name smskmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/smskmax}
*/
setReadOnly( ns, 'smskmax', require( '@stdlib/stats/base/smskmax' ) );

/**
* @name smskmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/smskmin}
*/
setReadOnly( ns, 'smskmin', require( '@stdlib/stats/base/smskmin' ) );

/**
* @name smskrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/smskrange}
*/
setReadOnly( ns, 'smskrange', require( '@stdlib/stats/base/smskrange' ) );

/**
* @name snanmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanmax}
*/
setReadOnly( ns, 'snanmax', require( '@stdlib/stats/base/snanmax' ) );

/**
* @name snanmaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanmaxabs}
*/
setReadOnly( ns, 'snanmaxabs', require( '@stdlib/stats/base/snanmaxabs' ) );

/**
* @name snanmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanmean}
*/
setReadOnly( ns, 'snanmean', require( '@stdlib/stats/base/snanmean' ) );

/**
* @name snanmeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanmeanors}
*/
setReadOnly( ns, 'snanmeanors', require( '@stdlib/stats/base/snanmeanors' ) );

/**
* @name snanmeanpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanmeanpn}
*/
setReadOnly( ns, 'snanmeanpn', require( '@stdlib/stats/base/snanmeanpn' ) );

/**
* @name snanmeanwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanmeanwd}
*/
setReadOnly( ns, 'snanmeanwd', require( '@stdlib/stats/base/snanmeanwd' ) );

/**
* @name snanmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanmin}
*/
setReadOnly( ns, 'snanmin', require( '@stdlib/stats/base/snanmin' ) );

/**
* @name snanminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanminabs}
*/
setReadOnly( ns, 'snanminabs', require( '@stdlib/stats/base/snanminabs' ) );

/**
* @name snanmskmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanmskmax}
*/
setReadOnly( ns, 'snanmskmax', require( '@stdlib/stats/base/snanmskmax' ) );

/**
* @name snanmskmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanmskmin}
*/
setReadOnly( ns, 'snanmskmin', require( '@stdlib/stats/base/snanmskmin' ) );

/**
* @name snanmskrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanmskrange}
*/
setReadOnly( ns, 'snanmskrange', require( '@stdlib/stats/base/snanmskrange' ) );

/**
* @name snanrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanrange}
*/
setReadOnly( ns, 'snanrange', require( '@stdlib/stats/base/snanrange' ) );

/**
* @name snanstdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanstdev}
*/
setReadOnly( ns, 'snanstdev', require( '@stdlib/stats/base/snanstdev' ) );

/**
* @name snanstdevch
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanstdevch}
*/
setReadOnly( ns, 'snanstdevch', require( '@stdlib/stats/base/snanstdevch' ) );

/**
* @name snanstdevpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanstdevpn}
*/
setReadOnly( ns, 'snanstdevpn', require( '@stdlib/stats/base/snanstdevpn' ) );

/**
* @name snanstdevtk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanstdevtk}
*/
setReadOnly( ns, 'snanstdevtk', require( '@stdlib/stats/base/snanstdevtk' ) );

/**
* @name snanstdevwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanstdevwd}
*/
setReadOnly( ns, 'snanstdevwd', require( '@stdlib/stats/base/snanstdevwd' ) );

/**
* @name snanstdevyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanstdevyc}
*/
setReadOnly( ns, 'snanstdevyc', require( '@stdlib/stats/base/snanstdevyc' ) );

/**
* @name snanvariance
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanvariance}
*/
setReadOnly( ns, 'snanvariance', require( '@stdlib/stats/base/snanvariance' ) );

/**
* @name snanvariancech
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanvariancech}
*/
setReadOnly( ns, 'snanvariancech', require( '@stdlib/stats/base/snanvariancech' ) );

/**
* @name snanvariancepn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanvariancepn}
*/
setReadOnly( ns, 'snanvariancepn', require( '@stdlib/stats/base/snanvariancepn' ) );

/**
* @name snanvariancetk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanvariancetk}
*/
setReadOnly( ns, 'snanvariancetk', require( '@stdlib/stats/base/snanvariancetk' ) );

/**
* @name snanvariancewd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanvariancewd}
*/
setReadOnly( ns, 'snanvariancewd', require( '@stdlib/stats/base/snanvariancewd' ) );

/**
* @name snanvarianceyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/snanvarianceyc}
*/
setReadOnly( ns, 'snanvarianceyc', require( '@stdlib/stats/base/snanvarianceyc' ) );

/**
* @name srange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/srange}
*/
setReadOnly( ns, 'srange', require( '@stdlib/stats/base/srange' ) );

/**
* @name sstdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/sstdev}
*/
setReadOnly( ns, 'sstdev', require( '@stdlib/stats/base/sstdev' ) );

/**
* @name sstdevch
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/sstdevch}
*/
setReadOnly( ns, 'sstdevch', require( '@stdlib/stats/base/sstdevch' ) );

/**
* @name sstdevpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/sstdevpn}
*/
setReadOnly( ns, 'sstdevpn', require( '@stdlib/stats/base/sstdevpn' ) );

/**
* @name sstdevtk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/sstdevtk}
*/
setReadOnly( ns, 'sstdevtk', require( '@stdlib/stats/base/sstdevtk' ) );

/**
* @name sstdevwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/sstdevwd}
*/
setReadOnly( ns, 'sstdevwd', require( '@stdlib/stats/base/sstdevwd' ) );

/**
* @name sstdevyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/sstdevyc}
*/
setReadOnly( ns, 'sstdevyc', require( '@stdlib/stats/base/sstdevyc' ) );

/**
* @name stdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/stdev}
*/
setReadOnly( ns, 'stdev', require( '@stdlib/stats/base/stdev' ) );

/**
* @name stdevch
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/stdevch}
*/
setReadOnly( ns, 'stdevch', require( '@stdlib/stats/base/stdevch' ) );

/**
* @name stdevpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/stdevpn}
*/
setReadOnly( ns, 'stdevpn', require( '@stdlib/stats/base/stdevpn' ) );

/**
* @name stdevtk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/stdevtk}
*/
setReadOnly( ns, 'stdevtk', require( '@stdlib/stats/base/stdevtk' ) );

/**
* @name stdevwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/stdevwd}
*/
setReadOnly( ns, 'stdevwd', require( '@stdlib/stats/base/stdevwd' ) );

/**
* @name stdevyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/stdevyc}
*/
setReadOnly( ns, 'stdevyc', require( '@stdlib/stats/base/stdevyc' ) );

/**
* @name svariance
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/svariance}
*/
setReadOnly( ns, 'svariance', require( '@stdlib/stats/base/svariance' ) );

/**
* @name svariancech
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/svariancech}
*/
setReadOnly( ns, 'svariancech', require( '@stdlib/stats/base/svariancech' ) );

/**
* @name svariancepn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/svariancepn}
*/
setReadOnly( ns, 'svariancepn', require( '@stdlib/stats/base/svariancepn' ) );

/**
* @name svariancetk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/svariancetk}
*/
setReadOnly( ns, 'svariancetk', require( '@stdlib/stats/base/svariancetk' ) );

/**
* @name svariancewd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/svariancewd}
*/
setReadOnly( ns, 'svariancewd', require( '@stdlib/stats/base/svariancewd' ) );

/**
* @name svarianceyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/svarianceyc}
*/
setReadOnly( ns, 'svarianceyc', require( '@stdlib/stats/base/svarianceyc' ) );

/**
* @name variance
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/variance}
*/
setReadOnly( ns, 'variance', require( '@stdlib/stats/base/variance' ) );

/**
* @name variancech
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/variancech}
*/
setReadOnly( ns, 'variancech', require( '@stdlib/stats/base/variancech' ) );

/**
* @name variancepn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/variancepn}
*/
setReadOnly( ns, 'variancepn', require( '@stdlib/stats/base/variancepn' ) );

/**
* @name variancetk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/variancetk}
*/
setReadOnly( ns, 'variancetk', require( '@stdlib/stats/base/variancetk' ) );

/**
* @name variancewd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/variancewd}
*/
setReadOnly( ns, 'variancewd', require( '@stdlib/stats/base/variancewd' ) );

/**
* @name varianceyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/varianceyc}
*/
setReadOnly( ns, 'varianceyc', require( '@stdlib/stats/base/varianceyc' ) );


// EXPORTS //

module.exports = ns;
