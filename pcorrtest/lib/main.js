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
var quantileFactory = require( './../../base/dists/normal/quantile' ).factory;
var cdfFactory = require( './../../base/dists/normal/cdf' ).factory;
var format = require( '@stdlib/string/format' );
var atanh = require( '@stdlib/math/base/special/atanh' );
var tanh = require( '@stdlib/math/base/special/tanh' );
var tCDF = require( './../../base/dists/t/cdf' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var min = require( '@stdlib/math/base/special/min' );
var print = require( './print.js' ); // eslint-disable-line stdlib/no-redeclare
var pcorr = require( './pcorr.js' );
var validate = require( './validate.js' );


// VARIABLES //

var normQuantile = quantileFactory( 0.0, 1.0 );
var normCDF = cdfFactory( 0.0, 1.0 );


// MAIN //

/**
* Computes a Pearson product-moment correlation test between paired samples.
*
* @param {NumericArray} x - first data array
* @param {NumericArray} y - second data array
* @param {Options} [options] - function options
* @param {number} [options.alpha=0.05] - significance level
* @param {string} [options.alternative='two-sided'] - alternative hypothesis (`two-sided`, `less` or `greater`)
* @param {number} [options.rho=0.0] - correlation under H0
* @throws {TypeError} first argument has to be a typed array or array of numbers
* @throws {TypeError} second argument has to be a typed array or array of numbers
* @throws {RangeError} first and second arguments must have the same length
* @throws {Error} first and second arguments must be arrays having the same length
* @throws {Error} first and second arguments must contain at least four elements
* @throws {TypeError} options must be an object
* @throws {TypeError} must provide valid options
* @returns {Object} test result object
*
* @example
* var x = [ 2, 4, 3, 1, 2, 3 ];
* var y = [ 3, 2, 4, 1, 2, 4 ];
* var out = pcorrTest( x, y );
*/
function pcorrTest( x, y, options ) {
	var method;
	var alpha;
	var cint;
	var opts;
	var pval;
	var stat;
	var alt;
	var err;
	var out;
	var rho;
	var val;
	var df;
	var se;
	var n;
	var r;
	var z;

	if ( !isTypedArrayLike( x ) && !isNumberArray( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a numeric array. Value: `%s`.', x ) );
	}
	if ( !isTypedArrayLike( y ) && !isNumberArray( y ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a numeric array. Value: `%s`.', y ) );
	}
	n = x.length;
	if ( n !== y.length ) {
		throw new RangeError( 'invalid arguments. First and second arguments must be arrays having the same length.' );
	}
	opts = {};
	if ( options ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	if ( opts.alpha === void 0 ) {
		alpha = 0.05;
	} else {
		alpha = opts.alpha;
	}
	if ( n < 4 ) {
		throw new Error( 'invalid arguments. Not enough observations. First and second arguments must contain at least four observations.' );
	}
	if ( opts.rho === void 0 ) {
		rho = 0.0;
	} else {
		rho = opts.rho;
	}
	if ( opts.alternative === void 0 ) {
		alt = 'two-sided';
	} else {
		alt = opts.alternative;
	}

	r = pcorr( x, y );
	z = atanh( r );
	se = 1.0 / sqrt( n - 3 );
	if ( rho === 0.0 ) {
		// Use t-test for H0: rho = 0.0 vs H1: rho != 0.0...
		method = 't-test for Pearson correlation coefficient';
		df = n - 2;
		stat = sqrt( df ) * r / sqrt( 1.0 - (r*r) );
		switch ( alt ) {
		case 'greater':
			pval = 1.0 - tCDF( stat, df );
			break;
		case 'less':
			pval = tCDF( stat, df );
			break;
		case 'two-sided':
		default:
			pval = 2.0 * min( tCDF( stat, df), 1.0 - tCDF( stat, df ) );
			break;
		}
	} else {
		// Use large-sample normality to calculate p-value based on Fisher's z transform...
		method = 'Fisher\'s z transform test for Pearson correlation coefficient';
		stat = ( z - atanh( rho ) ) * sqrt( n - 3 );
		switch ( alt ) {
		case 'greater':
			pval = normCDF( -stat );
			break;
		case 'less':
			pval = 1.0 - normCDF( -stat );
			break;
		case 'two-sided':
		default:
			pval = 2.0 * min( normCDF( -stat ), 1.0 - normCDF( -stat ) );
			break;
		}
	}

	switch ( alt ) {
	case 'greater':
		cint = [ tanh( z - ( se*normQuantile( 1.0 - alpha ) ) ), 1.0 ];
		break;
	case 'less':
		cint = [ -1.0, tanh( z + ( se*normQuantile( 1.0 - alpha ) ) ) ];
		break;
	case 'two-sided':
	default:
		val = se * normQuantile( 1.0 - ( alpha/2.0 ) );
		cint = [ tanh( z - val ), tanh( z + val ) ];
		break;
	}

	out = {};
	setReadOnly( out, 'rejected', pval <= alpha );
	setReadOnly( out, 'alpha', alpha );
	setReadOnly( out, 'pValue', pval );
	setReadOnly( out, 'statistic', stat );
	setReadOnly( out, 'ci', cint );
	setReadOnly( out, 'alternative', alt );
	setReadOnly( out, 'method', method );
	setReadOnly( out, 'nullValue', rho );
	setReadOnly( out, 'pcorr', r );
	setReadOnly( out, 'print', print );
	return out;
}


// EXPORTS //

module.exports = pcorrTest;
