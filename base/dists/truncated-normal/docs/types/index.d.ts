/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import pdf = require( './../../../../../base/dists/truncated-normal/pdf' );

/**
* Interface describing the `truncated-normal` namespace.
*/
interface Namespace {
	/**
	* Truncated normal distribution probability density function (PDF).
	*
	* @param x - input value
	* @param a - minimum support
	* @param b - maximum support
	* @param mu - location parameter
	* @param sigma - scale parameter
	* @returns evaluated PDF
	*
	* @example
	* var y = ns.pdf( 0.9, 0.0, 1.0, 0.0, 1.0 );
	* // returns ~0.7795
	*
	* var mypdf = ns.pdf.factory( -1.0, 1.0, 0.0, 1.0 );
	* y = mypdf( 0.9 );
	* // returns ~0.5896
	*/
	pdf: typeof pdf;
}

/**
* Truncated normal distribution.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
