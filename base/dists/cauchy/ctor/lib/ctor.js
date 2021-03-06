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

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var defineProperty = require( '@stdlib/utils/define-property' );
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
var isPositive = require( '@stdlib/assert/is-positive-number' ).isPrimitive;
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isnan = require( '@stdlib/assert/is-nan' );
var entropy = require( './../../../../../base/dists/cauchy/entropy' );
var median = require( './../../../../../base/dists/cauchy/median' );
var mode = require( './../../../../../base/dists/cauchy/mode' );
var cdf = require( './../../../../../base/dists/cauchy/cdf' );
var logcdf = require( './../../../../../base/dists/cauchy/logcdf' );
var logpdf = require( './../../../../../base/dists/cauchy/logpdf' );
var pdf = require( './../../../../../base/dists/cauchy/pdf' );
var quantile = require( './../../../../../base/dists/cauchy/quantile' );
var format = require( '@stdlib/string/format' );


// FUNCTIONS //

/**
* Evaluates the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {Probability} evaluated CDF
*/
function cauchyCDF( x ) {
	return cdf( x, this.x0, this.gamma );
}

/**
* Evaluates the natural logarithm of the cumulative distribution function (logCDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logCDF
*/
function cauchyLogCDF( x ) {
	return logcdf( x, this.x0, this.gamma );
}

/**
* Evaluates the natural logarithm of the probability density function (logPDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logPDF
*/
function cauchyLogPDF( x ) {
	return logpdf( x, this.x0, this.gamma );
}

/**
* Evaluates the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated PDF
*/
function cauchyPDF( x ) {
	return pdf( x, this.x0, this.gamma );
}

/**
* Evaluates the quantile function.
*
* @private
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
*/
function cauchyQuantile( p ) {
	return quantile( p, this.x0, this.gamma );
}


// MAIN //

/**
* Cauchy distribution constructor.
*
* @constructor
* @param {number} [x0=0.0] - location parameter
* @param {PositiveNumber} [gamma=1.0] - scale parameter
* @throws {TypeError} `gamma` must be a positive number
* @returns {Cauchy} distribution instance
*
* @example
* var cauchy = new Cauchy( 1.0, 1.0 );
*
* var y = cauchy.cdf( 0.8 );
* // returns ~0.437
*
* var v = cauchy.median;
* // returns 1.0
*/
function Cauchy() {
	var gamma;
	var x0;
	if ( !(this instanceof Cauchy) ) {
		if ( arguments.length === 0 ) {
			return new Cauchy();
		}
		return new Cauchy( arguments[ 0 ], arguments[ 1 ] );
	}
	if ( arguments.length ) {
		x0 = arguments[ 0 ];
		gamma = arguments[ 1 ];
		if ( !isNumber( x0 ) || isnan( x0 ) ) {
			throw new TypeError( format( 'invalid argument. Location parameter must be a number. Value: `%s`.', x0 ) );
		}
		if ( !isPositive( gamma ) ) {
			throw new TypeError( format( 'invalid argument. Scale parameter must be a positive number. Value: `%s`.', gamma ) );
		}
	} else {
		x0 = 0.0;
		gamma = 1.0;
	}
	defineProperty( this, 'x0', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return x0;
		},
		'set': function set( value ) {
			if ( !isNumber( value ) || isnan( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a number. Value: `%s`.', value ) );
			}
			x0 = value;
		}
	});
	defineProperty( this, 'gamma', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return gamma;
		},
		'set': function set( value ) {
			if ( !isPositive( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a positive number. Value: `%s`.', value ) );
			}
			gamma = value;
		}
	});
	return this;
}

/**
* Cauchy distribution differential entropy.
*
* @name entropy
* @memberof Cauchy.prototype
* @type {number}
* @see [differential entropy]{@link https://en.wikipedia.org/wiki/Entropy_%28information_theory%29}
*
* @example
* var cauchy = new Cauchy( 4.0, 12.0 );
*
* var v = cauchy.entropy;
* // returns ~5.016
*/
setReadOnlyAccessor( Cauchy.prototype, 'entropy', function get() {
	return entropy( this.x0, this.gamma );
});

/**
* Cauchy distribution median.
*
* @name median
* @memberof Cauchy.prototype
* @type {number}
* @see [median]{@link https://en.wikipedia.org/wiki/Median}
*
* @example
* var cauchy = new Cauchy( 4.0, 12.0 );
*
* var v = cauchy.median;
* // returns 4.0
*/
setReadOnlyAccessor( Cauchy.prototype, 'median', function get() {
	return median( this.x0, this.gamma );
});

/**
* Cauchy distribution mode.
*
* @name mode
* @memberof Cauchy.prototype
* @type {number}
* @see [mode]{@link https://en.wikipedia.org/wiki/Mode_%28statistics%29}
*
* @example
* var cauchy = new Cauchy( 4.0, 12.0 );
*
* var v = cauchy.mode;
* // returns 4.0
*/
setReadOnlyAccessor( Cauchy.prototype, 'mode', function get() {
	return mode( this.x0, this.gamma );
});

/**
* Evaluates the cumulative distribution function (CDF).
*
* @name cdf
* @memberof Cauchy.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated CDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var cauchy = new Cauchy( 2.0, 4.0 );
*
* var v = cauchy.cdf( 0.5 );
* // returns ~0.386
*/
setReadOnly( Cauchy.prototype, 'cdf', cauchyCDF );

/**
* Evaluates the natural logarithm of the cumulative distribution function (logCDF).
*
* @name logcdf
* @memberof Cauchy.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logCDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var cauchy = new Cauchy( 2.0, 4.0 );
*
* var v = cauchy.logcdf( 0.5 );
* // returns ~-0.952
*/
setReadOnly( Cauchy.prototype, 'logcdf', cauchyLogCDF );

/**
* Evaluates the natural logarithm of the probability density function (logPDF).
*
* @name logpdf
* @memberof Cauchy.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logPDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var cauchy = new Cauchy( 2.0, 4.0 );
*
* var v = cauchy.logpdf( 0.8 );
* // returns ~-2.617
*/
setReadOnly( Cauchy.prototype, 'logpdf', cauchyLogPDF );

/**
* Evaluates the probability density function (PDF).
*
* @name pdf
* @memberof Cauchy.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated PDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var cauchy = new Cauchy( 2.0, 4.0 );
*
* var v = cauchy.pdf( 0.8 );
* // returns ~0.073
*/
setReadOnly( Cauchy.prototype, 'pdf', cauchyPDF );

/**
* Evaluates the quantile function.
*
* @name quantile
* @memberof Cauchy.prototype
* @type {Function}
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
* @see [quantile function]{@link https://en.wikipedia.org/wiki/Quantile_function}
*
* @example
* var cauchy = new Cauchy( 2.0, 4.0 );
*
* var v = cauchy.quantile( 0.5 );
* // returns 2.0
*/
setReadOnly( Cauchy.prototype, 'quantile', cauchyQuantile );


// EXPORTS //

module.exports = Cauchy;
