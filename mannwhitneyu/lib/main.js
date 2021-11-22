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

var isNumberArray = require( '@stdlib/assert/is-number-array' ).primitives;
var isTypedArrayLike = require( '@stdlib/assert/is-typed-array-like' );
var setReadOnly = require( '@stdlib/utils/define-read-only-property' );
var cdf = require( './../../base/dists/normal/cdf' );
var abs = require( '@stdlib/math/base/special/abs' );
var ranks = require( './../../ranks' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var validate = require( './validate.js' );
var print = require( './print.js' ); // eslint-disable-line stdlib/no-redeclare
var statistic = require( './statistic.js' );


// VARIABLES //

var phi = cdf.factory( 0.0, 1.0 );


// MAIN //

/**
* Computes a Mann-Whitney U test.
*
* @param {NumericArray} x - first data array
* @param {NumericArray} y - second data array
* @param {Options} [options] - function options
* @param {number} [options.alpha=0.05] - significance level
* @param {string} [options.alternative='two-sided'] - alternative hypothesis (`two-sided`, `less` or `greater`)
* @param {boolean} [options.correction=true] - controls whether to apply continuity correction in normal approximation for the p-value
* @throws {TypeError} x argument has to be a typed array or array of numbers
* @throws {TypeError} y argument has to be a typed array or array of numbers
* @throws {TypeError} options has to be simple object
* @throws {TypeError} alpha option has to be a number primitive
* @throws {RangeError} alpha option has to be a number in the interval `[0,1]`
* @throws {TypeError} alternative option has to be a string primitive
* @throws {Error} alternative option must be `two-sided`, `less` or `greater`
* @throws {TypeError} correction option has to be a boolean primitive
* @returns {Object} test result object
*/
function mannWhitneyU( x, y, options ) {
	var correction;
	var stderr;
	var alpha;
	var opts;
	var pval;
	var alt;
	var err;
	var out;
	var mu;
	var nx;
	var ny;
	var r;
	var u;
	var z;

	if ( !isTypedArrayLike( x ) && !isNumberArray( x ) ) {
		throw new TypeError( 'invalid argument. First argument `x` must be a numeric array. Value: `' + x + '`.' );
	}
	if ( !isTypedArrayLike( y ) && !isNumberArray( y ) ) {
		throw new TypeError( 'invalid argument. Second argument `y` must be a numeric array. Value: `' + y + '`.' );
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
	if ( alpha < 0.0 || alpha > 1.0 ) {
		throw new RangeError( 'invalid argument. Option `alpha` must be a number in the range 0 to 1. Value: `' + alpha + '`.' );
	}
	alt = opts.alternative || 'two-sided';
	correction = opts.correction || true;
	nx = x.length;
	ny = y.length;

	r = ranks( x.concat( y ) );
	console.log( sum(r[seq_along(x)]) - nx * (nx + 1)/2.0);

	u = statistic( x, y );
	console.log( u );

	if ( correction ) {
		mu = ( nx * ny / 2.0 ) + 0.5;
	} else {
		mu = nx * ny / 2.0;
	}
	stderr = sqrt( u.tcf * nx * ny * ( nx + ny + 1 ) / 12 );
	switch ( alt ) {
	case 'two-sided':
		z = abs( ( u.big - mu ) / stderr );
		pval = 2.0 * phi( -z );
		break;
	case 'greater':
		z = ( u.uy - mu ) / stderr;
		pval = 1.0 - phi( z );
		break;
	case 'less':
		z = ( u.ux - mu ) / stderr;
		pval = phi( z );
		break;
	default:
		throw new Error( 'Invalid option. `alternative` must be either `two-sided`, `less` or `greater`. Value: `' + alt + '`' );
	}
	out = {};
	setReadOnly( out, 'rejected', pval <= alpha );
	setReadOnly( out, 'alpha', alpha );
	setReadOnly( out, 'pValue', pval );
	setReadOnly( out, 'statistic', u.small );
	setReadOnly( out, 'alternative', alt );
	setReadOnly( out, 'method', 'Mann Whitney U Test' );
	setReadOnly( out, 'print', print );
	return out;
}


// EXPORTS //

module.exports = mannWhitneyU;
