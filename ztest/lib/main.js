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

var isPositiveNumber = require( '@stdlib/assert/is-positive-number' ).isPrimitive;
var isNumberArray = require( '@stdlib/assert/is-number-array' ).primitives;
var isTypedArrayLike = require( '@stdlib/assert/is-typed-array-like' );
var setReadOnly = require( '@stdlib/utils/define-read-only-property' );
var cdfFactory = require( './../../base/dists/normal/cdf' ).factory;
var quantileFactory = require( './../../base/dists/normal/quantile' ).factory;
var format = require( '@stdlib/string/format' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var abs = require( '@stdlib/math/base/special/abs' );
var mean = require( './../../strided/mean' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var validate = require( './validate.js' );
var print = require( './print.js' ); // eslint-disable-line stdlib/no-redeclare


// VARIABLES //

var normalCDF = cdfFactory( 0.0, 1.0 );
var normalQuantile = quantileFactory( 0.0, 1.0 );


// MAIN //

/**
* Computes a one-sample z-test.
*
* @param {NumericArray} x - data array
* @param {PositiveNumber} sigma - known standard deviation
* @param {Options} [options] - function options
* @param {number} [options.alpha=0.05] - significance level
* @param {string} [options.alternative='two-sided'] - alternative hypothesis (`two-sided`, `less` or `greater`)
* @param {number} [options.mu=0] - mean under H0
* @throws {TypeError} x argument has to be a typed array or array of numbers
* @throws {TypeError} sigma argument has to be a positive number
* @throws {TypeError} options must be an object
* @throws {TypeError} alpha option has to be a number
* @throws {RangeError} alpha option has to be a number in the interval `[0,1]`
* @throws {TypeError} alternative option has to be a string
* @throws {Error} alternative option must be `two-sided`, `less` or `greater`
* @throws {TypeError} mu option has to be a number
* @throws {TypeError} sigma option has to be a positive number
* @returns {Object} test result object
*
* @example
* var arr = [ 4, 4, 6, 6, 5 ];
* var out = ztest( arr, 1.0, {
*     'mu': 5
* });
*
* @example
* var arr = [ 4, 4, 6, 6, 5 ];
* var out = ztest( arr, 1.0, {
*     'alternative': 'greater'
* });
*/
function ztest( x, sigma, options ) {
	var stderr;
	var alpha;
	var xmean;
	var cint;
	var pval;
	var opts;
	var stat;
	var alt;
	var err;
	var out;
	var len;
	var mu;

	if ( !isTypedArrayLike( x ) && !isNumberArray( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a numeric array. Value: `%s`.', x ) );
	}
	if ( !isPositiveNumber( sigma ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a positive number. Value: `%s`.', sigma ) );
	}
	len = x.length;
	opts = {};
	if ( options ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	mu = opts.mu || 0.0;
	if ( opts.alpha === void 0 ) {
		alpha = 0.05;
	} else {
		alpha = opts.alpha;
	}
	if ( alpha < 0.0 || alpha > 1.0 ) {
		throw new RangeError( format( 'invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.', 'alpha', alpha ) );
	}
	if ( len < 2 ) {
		throw new Error( format( 'invalid argument. First argument must contain at least two elements. Value: `%s`.', x ) );
	}
	stderr = sqrt( sigma*sigma / len );
	xmean = mean( len, x, 1 );
	stat = ( xmean - mu ) / stderr;

	alt = opts.alternative || 'two-sided';
	switch ( alt ) {
	case 'two-sided':
		pval = 2.0 * normalCDF( -abs(stat) );
		cint = [
			stat - normalQuantile( 1.0-(alpha/2.0) ),
			stat + normalQuantile( 1.0-(alpha/2.0) )
		];
		cint[ 0 ] = mu + (cint[ 0 ] * stderr);
		cint[ 1 ] = mu + (cint[ 1 ] * stderr);
		break;
	case 'greater':
		pval = 1.0 - normalCDF( stat );
		cint = [ stat - normalQuantile( 1.0-alpha ), PINF ];
		cint[ 0 ] = mu + (cint[ 0 ] * stderr);
		break;
	case 'less':
		pval = normalCDF( stat );
		cint = [ NINF, stat + normalQuantile( 1.0-alpha ) ];
		cint[ 1 ] = mu + (cint[ 1 ] * stderr);
		break;
	default:
		throw new Error( format( 'invalid option. `%s` option must be one of the following: "%s". Option: `%s`.', 'alternative', [ 'two-sided', 'less', 'greater' ].join( '", "' ), alt ) );
	}
	out = {};
	setReadOnly( out, 'rejected', pval <= alpha );
	setReadOnly( out, 'alpha', alpha );
	setReadOnly( out, 'pValue', pval );
	setReadOnly( out, 'statistic', stat );
	setReadOnly( out, 'ci', cint );
	setReadOnly( out, 'alternative', alt );
	setReadOnly( out, 'nullValue', mu );
	setReadOnly( out, 'sd', stderr );
	setReadOnly( out, 'method', 'One-sample z-test' );
	setReadOnly( out, 'print', print );
	return out;
}


// EXPORTS //

module.exports = ztest;
