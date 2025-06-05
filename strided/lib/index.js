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
* @name dnanrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dnanrange}
*/
setReadOnly( ns, 'dnanrange', require( './../../strided/dnanrange' ) );

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
* @name dsemch
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dsemch}
*/
setReadOnly( ns, 'dsemch', require( './../../strided/dsemch' ) );

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
* @name dvarmtk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/dvarmtk}
*/
setReadOnly( ns, 'dvarmtk', require( './../../strided/dvarmtk' ) );

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
* @name smeanli
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/smeanli}
*/
setReadOnly( ns, 'smeanli', require( './../../strided/smeanli' ) );

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
* @name sstdevyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/sstdevyc}
*/
setReadOnly( ns, 'sstdevyc', require( './../../strided/sstdevyc' ) );

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
* @name svarianceyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/strided/svarianceyc}
*/
setReadOnly( ns, 'svarianceyc', require( './../../strided/svarianceyc' ) );


// EXPORTS //

module.exports = ns;
