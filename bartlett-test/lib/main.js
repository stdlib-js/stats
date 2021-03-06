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
var objectKeys = require( '@stdlib/utils/keys' );
var format = require( '@stdlib/string/format' );
var chisqCDF = require( './../../base/dists/chisquare/cdf' );
var group = require( '@stdlib/utils/group' );
var ln = require( '@stdlib/math/base/special/ln' );
var variance = require( './variance.js' );
var validate = require( './validate.js' );
var print = require( './print.js' ); // eslint-disable-line stdlib/no-redeclare


// MAIN //

/**
* Computes Bartlett’s test for equal variances.
*
* @param {...NumericArray} arguments - either two or more number arrays or a single numeric array if an array of group indicators is supplied as an option
* @param {Options} [options] - function options
* @param {number} [options.alpha=0.05] - significance level
* @param {Array} [options.groups] - array of group indicators
* @throws {TypeError} must provide array-like arguments
* @throws {RangeError} alpha option has to be a number in the interval `[0,1]`
* @throws {Error} must provide at least two array-like arguments if `groups` is not set
* @throws {TypeError} options must be an object
* @throws {TypeError} must provide valid options
* @returns {Object} test results
*
* @example
* // Data from Hollander & Wolfe (1973), p. 116:
* var x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
* var y = [ 3.8, 2.7, 4.0, 2.4 ];
* var z = [ 2.8, 3.4, 3.7, 2.2, 2.0 ];
*
* var out = bartlett( x, y, z );
* // returns {...}
*/
function bartlett() {
	var options;
	var ngroups;
	var ninvSum;
	var levels;
	var table;
	var alpha;
	var nSum;
	var vSum;
	var args;
	var opts;
	var pval;
	var stat;
	var arg;
	var err;
	var lnv;
	var out;
	var df;
	var n;
	var v;
	var i;

	args = [];
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
	if ( opts.groups ) {
		table = group( arguments[ 0 ], opts.groups );
		levels = objectKeys( table );
		ngroups = levels.length;
		if ( ngroups < 2 ) {
			throw new Error( format( 'invalid option. `%s` option must be an array containing at least two unique elements. Option: `%s`.', 'groups', levels ) );
		}
		for ( i = 0; i < ngroups; i++ ) {
			args.push( table[ levels[ i ] ] );
		}
	} else {
		for ( i = 0; i < ngroups; i++ ) {
			args.push( arguments[ i ] );
		}
	}
	nSum = 0;
	ninvSum = 0.0;
	vSum = 0.0;
	lnv = 0.0;
	n = new Array( ngroups );
	v = n.slice();
	for ( i = 0; i < ngroups; i++ ) {
		arg = args[ i ];
		if ( !isCollection( arg ) ) {
			throw new TypeError( format( 'invalid argument. Must provide array-like arguments. Value: `%s`.', arg ) );
		}
		if ( arg.length === 0 ) {
			throw new Error( format( 'invalid argument. Supplied arrays cannot be empty. Value: `%s`.', arg ) );
		}
		n[ i ] = arg.length - 1;
		nSum += n[ i ];
		ninvSum += 1.0 / n[ i ];
		v[ i ] = variance( arg );
		vSum += ( n[ i ] * v[ i ] );
		lnv += n[ i ] * ln( v[ i ] );
	}
	vSum /= nSum;
	if ( opts.alpha === void 0 ) {
		alpha = 0.05;
	} else {
		alpha = opts.alpha;
	}
	if ( alpha < 0.0 || alpha > 1.0 ) {
		throw new RangeError( format( 'invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.', 'alpha', alpha ) );
	}

	stat = ( ( nSum * ln( vSum ) ) - lnv );
	stat /= ( 1.0 + ( ( ninvSum - ( 1.0 / nSum ) ) / ( 3 * ( ngroups-1 ) ) ) );
	df = ngroups - 1;
	pval = 1.0 - chisqCDF( stat, df );

	out = {};
	setReadOnly( out, 'rejected', pval <= alpha );
	setReadOnly( out, 'alpha', alpha );
	setReadOnly( out, 'pValue', pval );
	setReadOnly( out, 'statistic', stat );
	setReadOnly( out, 'df', df );
	setReadOnly( out, 'method', 'Bartlett\'s test of equal variances' );
	setReadOnly( out, 'print', print );
	return out;
}


// EXPORTS //

module.exports = bartlett;
