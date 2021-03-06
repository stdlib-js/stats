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

// MODULES //

var isCollection = require( '@stdlib/assert/is-collection' );
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var setReadOnly = require( '@stdlib/utils/define-read-only-property' );
var countBy = require( '@stdlib/utils/count-by' );
var objectKeys = require( '@stdlib/utils/keys' );
var rank = require( './../../ranks' );
var pow = require( '@stdlib/math/base/special/pow' );
var chisqCDF = require( './../../base/dists/chisquare/cdf' );
var identity = require( '@stdlib/utils/identity-function' );
var incrspace = require( '@stdlib/array/base/incrspace' );
var format = require( '@stdlib/string/format' );
var validate = require( './validate.js' );
var print = require( './print.js' ); // eslint-disable-line stdlib/no-redeclare


// MAIN //

/**
* Computes the Kruskal-Wallis test for equality of medians.
*
* @param {...NumberArray} arguments - either two or more number arrays or a single numeric array if an array of group indicators is supplied as an option
* @param {Options} [options] - function options
* @param {number} [options.alpha=0.05] - significance level
* @param {Array} [options.groups] - array of group indicators
* @throws {Error} must provide at least two array-like arguments if `groups` is not set
* @throws {TypeError} must provide array-like arguments
* @throws {TypeError} options must be an object
* @throws {TypeError} must provide valid options
* @throws {RangeError} alpha option has to be a number in the interval `[0,1]`
* @returns {Object} test results
*
* @example
* // Data from Hollander & Wolfe (1973), p. 116:
* var x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
* var y = [ 3.8, 2.7, 4.0, 2.4 ];
* var z = [ 2.8, 3.4, 3.7, 2.2, 2.0 ];
*
* var out = kruskal( x, y, z );
* // returns {...}
*/
function kruskal() {
	var groupsIndicators;
	var groupRankSums;
	var tieSumTerm;
	var ngroups;
	var options;
	var levels;
	var alpha;
	var param;
	var ranks;
	var vals;
	var opts;
	var pval;
	var stat;
	var ties;
	var arg;
	var err;
	var key;
	var out;
	var i;
	var j;
	var n;
	var N;
	var x;
	var v;

	ngroups = arguments.length;
	opts = {};
	if ( isPlainObject( arguments[ ngroups - 1 ] ) ) {
		options = arguments[ ngroups - 1 ];
		ngroups -= 1;
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	groupRankSums = {};
	n = {};
	if ( opts.groups ) {
		x = arguments[ 0 ];
		if ( x.length !== opts.groups.length ) {
			throw new RangeError( format( 'invalid arguments. First argument and `%s` must be arrays having the same length.', 'opts.groups' ) );
		}
		n = countBy( opts.groups, identity );
		levels = objectKeys( n );
		ngroups = levels.length;
		for ( i = 0; i < ngroups; i++ ) {
			key = levels[ i ];
			groupRankSums[ key ] = 0;
		}
		if ( ngroups < 2 ) {
			throw new Error( format( 'invalid option. `%s` option must be an array containing at least two unique elements. Option: `%s`.', 'groups', levels ) );
		}
		groupsIndicators = opts.groups;
	} else {
		x = [];
		groupsIndicators = [];
		if ( ngroups < 2 ) {
			throw new Error( format( 'invalid invocation. Incorrect number of arguments. Must provide at least two array-like arguments. Value: `%s`.', arg ) );
		}
		for ( i = 0; i < ngroups; i++ ) {
			arg = arguments[ i ];
			if ( !isCollection( arg ) ) {
				throw new TypeError( format( 'invalid argument. Must provide array-like arguments. Value: `%s`.', arg ) );
			}
			if ( arg.length === 0 ) {
				throw new Error( format( 'invalid argument. Supplied arrays cannot be empty. Value: `%s`.', arg ) );
			} else {
				n[ i ] = arg.length;
			}
			groupRankSums[ i ] = 0;
			for ( j = 0; j < n[ i ]; j++ ) {
				groupsIndicators.push( i );
				x.push( arg[ j ] );
			}
		}
		levels = incrspace( 0, ngroups, 1 );
	}
	if ( opts.alpha === void 0 ) {
		alpha = 0.05;
	} else {
		alpha = opts.alpha;
	}
	if ( alpha < 0.0 || alpha > 1.0 ) {
		throw new RangeError( format( 'invalid option. `%s` must be a number on the interval: [0, 1]. Value: `%f`.', 'alpha', alpha ) );
	}

	N = x.length;
	ranks = rank( x );

	// Calculate # ties for each value & rank sums per group:
	ties = {};
	for ( i = 0; i < N; i++ ) {
		groupRankSums[ groupsIndicators[ i ] ] += ranks[ i ];
		if ( x[ i ] in ties ) {
			ties[ x[ i ] ] += 1;
		} else {
			ties[ x[ i ] ] = 1;
		}
	}

	// Calculate test statistic using short-cut formula:
	stat = 0.0;
	for ( i = 0; i < ngroups; i++ ) {
		key = levels[ i ];
		stat += pow( groupRankSums[ key ], 2.0 ) / n[ key ];
	}
	stat = ( ( 12.0 / ( N * (N+1) ) ) * stat ) - ( 3.0 * (N+1) );

	// Correction for ties:
	tieSumTerm = 0;
	vals = objectKeys( ties );
	for ( i = 0; i < vals.length; i++ ) {
		v = ties[ vals[ i ] ];
		tieSumTerm += pow( v, 3.0 ) - v;
	}

	stat /= 1.0 - ( ( tieSumTerm ) / ( pow( N, 3 ) - N ) );
	param = ngroups - 1;
	pval = 1.0 - chisqCDF( stat, param );

	out = {};
	setReadOnly( out, 'rejected', pval <= alpha );
	setReadOnly( out, 'alpha', alpha );
	setReadOnly( out, 'df', param );
	setReadOnly( out, 'pValue', pval );
	setReadOnly( out, 'statistic', stat );
	setReadOnly( out, 'method', 'Kruskal-Wallis Test' );
	setReadOnly( out, 'print', print );
	return out;
}


// EXPORTS //

module.exports = kruskal;
