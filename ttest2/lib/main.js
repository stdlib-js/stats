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
var tCDF = require( './../../base/dists/t/cdf' );
var tQuantile = require( './../../base/dists/t/quantile' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var abs = require( '@stdlib/math/base/special/abs' );
var pow = require( '@stdlib/math/base/special/pow' );
var mean = require( './../../strided/mean' );
var variance = require( './../../strided/variance' );
var format = require( '@stdlib/string/format' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var validate = require( './validate.js' );
var print = require( './print.js' ); // eslint-disable-line stdlib/no-redeclare


// MAIN //

/**
* Computes a two-sample Student's t test.
*
* @param {NumericArray} x - first data array
* @param {NumericArray} y - second data array
* @param {Options} [options] - function options
* @param {number} [options.alpha=0.05] - significance level
* @param {string} [options.alternative='two-sided'] - alternative hypothesis (`two-sided`, `less` or `greater`)
* @param {number} [options.difference=0] - difference in means under H0
* @param {string} [options.variance='unequal'] - whether variances are `equal` or `unequal` under H0
* @throws {TypeError} x argument has to be a typed array or array of numbers
* @throws {TypeError} y argument has to be a typed array or array of numbers
* @throws {TypeError} options must be an object
* @throws {TypeError} alpha option has to be a number
* @throws {RangeError} alpha option has to be a number in the interval `[0,1]`
* @throws {TypeError} alternative option has to be a string
* @throws {Error} alternative option must be `two-sided`, `less` or `greater`
* @throws {TypeError} difference option has to be a number
* @throws {TypeError} variance option has to be a string
* @throws {Error} variance option must be `equal` or `unequal`
* @returns {Object} test result object
*/
function ttest2( x, y, options ) {
	var stderr;
	var alpha;
	var xmean;
	var ymean;
	var vars;
	var cint;
	var diff;
	var opts;
	var pval;
	var xvar;
	var yvar;
	var stat;
	var sdx;
	var sdy;
	var alt;
	var err;
	var out;
	var nx;
	var ny;
	var df;
	var v;

	if ( !isTypedArrayLike( x ) && !isNumberArray( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a numeric array. Value: `%s`.', x ) );
	}
	if ( !isTypedArrayLike( y ) && !isNumberArray( y ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a numeric array. Value: `%s`.', y ) );
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
	if ( alpha < 0.0 || alpha > 1.0 ) {
		throw new RangeError( format( 'invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.', 'alpha', alpha ) );
	}
	nx = x.length;
	ny = y.length;

	xvar = variance( nx, 1, x, 1 );
	yvar = variance( ny, 1, y, 1 );

	vars = opts.variance || 'unequal';
	if ( vars === 'equal' ) {
		df = nx + ny - 2;
		v = ((nx-1) * xvar) + ((ny-1) * yvar);
		v /= df;
		stderr = sqrt( v * ((1/nx) + (1/ny)) );
	}
	else if ( vars === 'unequal' ) {
		sdx = sqrt( xvar/nx );
		sdy = sqrt( yvar/ny );
		stderr = sqrt( (sdx*sdx) + (sdy*sdy) );
		v = pow( sdx, 4 ) / ( nx - 1 );
		v += pow( sdy, 4 ) / ( ny - 1 );
		df = pow( stderr, 4 ) / v;
	}
	else {
		throw new Error( format( 'invalid option. `%s` option must be one of the following: "%s". Option: `%s`.', 'variance', [ 'equal', 'unequal' ].join( '", "' ), vars ) );
	}

	xmean = mean( nx, x, 1 );
	ymean = mean( ny, y, 1 );
	stat = ( xmean - ymean - diff ) / stderr;

	alt = opts.alternative || 'two-sided';
	switch ( alt ) {
	case 'two-sided':
		pval = 2.0 * tCDF( -abs(stat), df );
		cint = [
			stat - tQuantile( 1.0-(alpha/2.0), df ),
			stat + tQuantile( 1.0-(alpha/2.0), df )
		];
		cint[ 0 ] = diff + (cint[ 0 ] * stderr);
		cint[ 1 ] = diff + (cint[ 1 ] * stderr);
		break;
	case 'greater':
		pval = 1.0 - tCDF( stat, df );
		cint = [ stat - tQuantile( 1.0-alpha, df ), PINF ];
		cint[ 0 ] = diff + (cint[ 0 ] * stderr);
		break;
	case 'less':
		pval = tCDF( stat, df );
		cint = [ NINF, stat + tQuantile( 1.0-alpha, df ) ];
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
	setReadOnly( out, 'df', df );
	setReadOnly( out, 'method', ( vars === 'equal' ) ? 'Two-sample t-test' : 'Welch two-sample t-test' );
	setReadOnly( out, 'nullValue', diff );
	setReadOnly( out, 'xmean', xmean );
	setReadOnly( out, 'ymean', ymean );
	setReadOnly( out, 'print', print );
	return out;
}


// EXPORTS //

module.exports = ttest2;
