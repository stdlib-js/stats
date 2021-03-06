/**
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

'use strict';

// MODULES //

var incrmean = require( './../../incr/mean' );
var abs = require( '@stdlib/math/base/special/abs' );


// MAIN //

/**
* Calculates the absolute difference of the values and the respective group means for the elements of a numeric array.
*
* @private
* @param {Array} x - input array
* @param {Array} groups - array of group labels
* @param {Array} levels - array of distinct group levels
* @returns {Array} array of absolute centered values
*
* @example
* var x = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
* var groups = [ 'a', 'b', 'a', 'a', 'b', 'b', 'a', 'a', 'b', 'b' ];
* var levels = [ 'a', 'b' ];
* var out = absMeanDiff( x, groups, levels );
* // returns [ ~3.6, 4.4, ..., ~3.6 ]
*/
function absMeanDiff( x, groups, levels ) {
	var accumulators = {};
	var means = {};
	var len = x.length;
	var out = [];
	var i;
	for ( i = 0; i < levels.length; i++ ) {
		accumulators[ levels[ i ] ] = incrmean();
	}
	for ( i = 0; i < len; i++ ) {
		accumulators[ groups[ i ] ]( x[ i ] );
	}
	for ( i = 0; i < levels.length; i++ ) {
		means[ levels[ i ] ] = accumulators[ levels[ i ] ]();
	}
	for ( i = 0; i < len; i++ ) {
		out.push( abs( x[ i ] - means[ groups[ i ] ] ) );
	}
	return out;
}


// EXPORTS //

module.exports = absMeanDiff;
