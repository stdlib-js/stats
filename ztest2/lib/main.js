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
var isPositiveNumber = require( '@stdlib/assert/is-positive-number' ).isPrimitive;
var setReadOnly = require( '@stdlib/utils/define-read-only-property' );
var quantileFactory = require( './../../base/dists/normal/quantile' ).factory;
var cdfFactory = require( './../../base/dists/normal/cdf' ).factory;
var format = require( '@stdlib/string/format' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var abs = require( '@stdlib/math/base/special/abs' );
var mean = require( './../../strided/mean' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var validate = require( './validate.js' );
var print = require( './print.js' ); // eslint-disable-line stdlib/no-redeclare


// VARIABLES //

var normQuantile = quantileFactory( 0.0, 1.0 );
var normCDF = cdfFactory( 0.0, 1.0 );


// MAIN //

/**
* Computes a two-sample z-test.
*
* @param {NumericArray} x - first data array
* @param {NumericArray} y - second data array
* @param {PositiveNumber} sigmax - known standard deviation of first group
* @param {PositiveNumber} sigmay - known standard deviation of second group
* @param {Options} [options] - function options
* @param {number} [options.alpha=0.05] - significance level
* @param {string} [options.alternative='two-sided'] - alternative hypothesis (`two-sided`, `less` or `greater`)
* @param {number} [options.difference=0] - difference in means under H0
* @throws {TypeError} x argument has to be a typed array or array of numbers
* @throws {TypeError} y argument has to be a typed array or array of numbers
* @throws {TypeError} sigmax argument has to be a positive number
* @throws {TypeError} sigmay argument has to be a positive number
* @throws {TypeError} options must be an object
* @throws {TypeError} must provide valid options
* @throws {Error} `alternative` option  must be either `two-sided`, `less`, or `greater`
* @returns {Object} test result object
*/
function ztest2( x, y, sigmax, sigmay, options ) {
	var stderr;
	var alpha;
	var xmean;
	var ymean;
	var cint;
	var diff;
	var opts;
	var pval;
	var xvar;
	var yvar;
	var stat;
	var alt;
	var err;
	var out;
	var nx;
	var ny;

	if ( !isTypedArrayLike( x ) && !isNumberArray( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a numeric array. Value: `%s`.', x ) );
	}
	if ( !isTypedArrayLike( y ) && !isNumberArray( y ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a numeric array. Value: `%s`.', y ) );
	}
	if ( !isPositiveNumber( sigmax ) ) {
		throw new TypeError( format( 'invalid argument. Third argument must be a positive number. Value: `%s`.', sigmax ) );
	}
	if ( !isPositiveNumber( sigmay ) ) {
		throw new TypeError( format( 'invalid argument. Fourth argument must be a positive number. Value: `%s`.', sigmay ) );
	}
	opts = {};
	if ( options ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	diff = opts.difference || 0.0;
	if ( opts.alpha === void 0 ) {
		alpha = 0.05;
	} else {
		alpha = opts.alpha;
	}
	nx = x.length;
	ny = y.length;

	xvar = sigmax * sigmax;
	yvar = sigmay * sigmay;
	stderr = sqrt( (xvar/nx) + (yvar/ny) );

	xmean = mean( nx, x, 1 );
	ymean = mean( ny, y, 1 );
	stat = ( xmean - ymean - diff ) / stderr;

	alt = opts.alternative || 'two-sided';
	switch ( alt ) {
	case 'two-sided':
		pval = 2.0 * normCDF( -abs(stat) );
		cint = [
			stat - normQuantile( 1.0-(alpha/2.0) ),
			stat + normQuantile( 1.0-(alpha/2.0) )
		];
		cint[ 0 ] = diff + (cint[ 0 ] * stderr);
		cint[ 1 ] = diff + (cint[ 1 ] * stderr);
		break;
	case 'greater':
		pval = 1.0 - normCDF( stat );
		cint = [ stat - normQuantile( 1.0-alpha ), PINF ];
		cint[ 0 ] = diff + (cint[ 0 ] * stderr);
		break;
	case 'less':
		pval = normCDF( stat );
		cint = [ NINF, stat + normQuantile( 1.0-alpha ) ];
		cint[ 1 ] = diff + (cint[ 1 ] * stderr);
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
	setReadOnly( out, 'method', 'Two-sample z-test' );
	setReadOnly( out, 'nullValue', diff );
	setReadOnly( out, 'xmean', xmean );
	setReadOnly( out, 'ymean', ymean );
	setReadOnly( out, 'print', print );
	return out;
}


// EXPORTS //

module.exports = ztest2;
