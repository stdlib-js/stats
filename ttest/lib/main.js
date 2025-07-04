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

var isNumberArray = require( '@stdlib/assert/is-number-array' ).primitives;
var isTypedArrayLike = require( '@stdlib/assert/is-typed-array-like' );
var setReadOnly = require( '@stdlib/utils/define-read-only-property' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var tCDF = require( './../../base/dists/t/cdf' );
var tQuantile = require( './../../base/dists/t/quantile' );
var format = require( '@stdlib/string/format' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var abs = require( '@stdlib/math/base/special/abs' );
var mean = require( './../../strided/mean' );
var variance = require( './../../strided/variance' );
var gcopy = require( '@stdlib/blas/base/gcopy' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var Float64Array = require( '@stdlib/array/float64' );
var validate = require( './validate.js' );
var print = require( './print.js' ); // eslint-disable-line stdlib/no-redeclare


// MAIN //

/**
* Computes a one-sample or paired Student's t test.
*
* @param {NumericArray} x - input array
* @param {NumericArray} [y] - optional paired array
* @param {Options} [options] - function options
* @param {number} [options.alpha=0.05] - significance level
* @param {string} [options.alternative='two-sided'] - alternative hypothesis (`two-sided`, `less`, or `greater`)
* @param {number} [options.mu=0.0] - mean under `H0`
* @throws {TypeError} first argument must be a numeric array
* @throws {Error} first argument must contain at least two elements
* @throws {Error} paired array must have the same length as the first argument
* @throws {TypeError} second argument must be either a numeric array or an options object
* @throws {TypeError} `alpha` option must be number
* @throws {RangeError} `alpha` option must be reside along the interval `[0,1]`
* @throws {TypeError} `alternative` option must be a recognized option value (`two-sided`, `less`, or `greater`)
* @throws {TypeError} `mu` option must be a number
* @returns {Object} test results
*
* @example
* var x = [ 4.0, 4.0, 6.0, 6.0, 5.0 ];
* var opts = {
*     'mu': 5.0
* };
* var out = ttest( x, opts );
* // returns {...}
*
* @example
* var x = [ 4.0, 4.0, 6.0, 6.0, 5.0 ];
* var opts = {
*     'alternative': 'greater'
* };
* var out = ttest( x, opts );
* // returns {...}
*/
function ttest( x ) {
	var stderr;
	var xmean;
	var cint;
	var pval;
	var opts;
	var stat;
	var err;
	var len;
	var out;
	var df;
	var tq;
	var y;
	var i;

	if ( !isTypedArrayLike( x ) && !isNumberArray( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a numeric array. Value: `%s`.', x ) );
	}
	len = x.length;
	if ( len < 2 ) {
		throw new Error( format( 'invalid argument. First argument must contain at least two elements. Value: `%s`.', x ) );
	}
	opts = {
		'mu': 0.0,
		'alpha': 0.05,
		'alternative': 'two-sided'
	};
	if ( arguments.length === 2 ) {
		if ( isObject( arguments[ 1 ] ) ) {
			err = validate( opts, arguments[ 1 ] );
			if ( err ) {
				throw err;
			}
		} else {
			y = arguments[ 1 ];
			if ( !isTypedArrayLike( y ) && !isNumberArray( y ) ) {
				throw new TypeError( format( 'invalid argument. Second argument must be either a numeric array or an options object. Value: `%s`.', y ) );
			}
		}
	} else if ( arguments.length > 2 ) {
		y = arguments[ 1 ];
		if ( !isTypedArrayLike( y ) && !isNumberArray( y ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must be a numeric array. Value: `%s`.', y ) );
		}
		err = validate( opts, arguments[ 2 ] );
		if ( err ) {
			throw err;
		}
	}
	if ( y ) {
		if ( y.length !== len ) {
			throw new Error( 'invalid arguments. First and second arguments must have the same length.' );
		}
		x = gcopy( len, x, 1, new Float64Array( len ), 1 );
		for ( i = 0; i < len; i++ ) {
			x[ i ] -= y[ i ];
		}
	}
	stderr = sqrt( variance( len, 1, x, 1 ) / len ); // TODO: replace with base/sem
	xmean = mean( len, x, 1 ); // TODO: ideally, we would get both the sem and the mean from the same function and without needing to traverse 3-4 times
	stat = ( xmean-opts.mu ) / stderr;
	df = len - 1;
	if ( opts.alternative === 'two-sided' ) {
		pval = 2.0 * tCDF( -abs(stat), df );
		tq = tQuantile( 1.0-(opts.alpha/2.0), df );
		cint = [
			opts.mu + ( (stat-tq)*stderr ),
			opts.mu + ( (stat+tq)*stderr )
		];
	} else if ( opts.alternative === 'greater' ) {
		pval = 1.0 - tCDF( stat, df );
		tq = tQuantile( 1.0-opts.alpha, df );
		cint = [
			opts.mu + ( (stat-tq)*stderr ),
			PINF
		];
	} else { // opts.alternative === 'less'
		pval = tCDF( stat, df );
		tq = tQuantile( 1.0-opts.alpha, df );
		cint = [
			NINF,
			opts.mu + ( (stat+tq)*stderr )
		];
	}
	out = {};
	setReadOnly( out, 'rejected', pval <= opts.alpha );
	setReadOnly( out, 'alpha', opts.alpha );
	setReadOnly( out, 'pValue', pval );
	setReadOnly( out, 'statistic', stat );
	setReadOnly( out, 'ci', cint );
	setReadOnly( out, 'df', df );
	setReadOnly( out, 'nullValue', opts.mu );
	setReadOnly( out, 'mean', xmean );
	setReadOnly( out, 'sd', stderr );
	setReadOnly( out, 'alternative', opts.alternative );
	setReadOnly( out, 'method', ( y ) ? 'Paired t-test' : 'One-sample t-test' );
	setReadOnly( out, 'print', print );
	return out;
}


// EXPORTS //

module.exports = ttest;
