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
var kurtosis = require( './../../../../../base/dists/betaprime/kurtosis' );
var mean = require( './../../../../../base/dists/betaprime/mean' );
var mode = require( './../../../../../base/dists/betaprime/mode' );
var skewness = require( './../../../../../base/dists/betaprime/skewness' );
var stdev = require( './../../../../../base/dists/betaprime/stdev' );
var variance = require( './../../../../../base/dists/betaprime/variance' );
var cdf = require( './../../../../../base/dists/betaprime/cdf' );
var logcdf = require( './../../../../../base/dists/betaprime/logcdf' );
var logpdf = require( './../../../../../base/dists/betaprime/logpdf' );
var pdf = require( './../../../../../base/dists/betaprime/pdf' );
var quantile = require( './../../../../../base/dists/betaprime/quantile' );
var format = require( '@stdlib/string/format' );


// FUNCTIONS //

/**
* Evaluates the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated CDF
*/
function betaPrimeCDF( x ) {
	return cdf( x, this.alpha, this.beta );
}

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logCDF
*/
function betaPrimeLogCDF( x ) {
	return logcdf( x, this.alpha, this.beta );
}

/**
* Evaluates the natural logarithm of the probability density function (logPDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logPDF
*/
function betaPrimeLogPDF( x ) {
	return logpdf( x, this.alpha, this.beta );
}

/**
* Evaluates the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated PDF
*/
function betaPrimePDF( x ) {
	return pdf( x, this.alpha, this.beta );
}

/**
* Evaluates the quantile function.
*
* @private
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
*/
function betaPrimeQuantile( p ) {
	return quantile( p, this.alpha, this.beta );
}


// MAIN //

/**
* Beta prime distribution constructor.
*
* @constructor
* @param {PositiveNumber} [alpha=1.0] - first shape parameter
* @param {PositiveNumber} [beta=1.0] - second shape parameter
* @throws {TypeError} `alpha` must be a positive number
* @throws {TypeError} `beta` must be a positive number
* @returns {BetaPrime} distribution instance
*
* @example
* var betaprime = new BetaPrime( 1.0, 1.0 );
*
* var y = betaprime.cdf( 0.8 );
* // returns ~0.444
*
* var v = betaprime.mode;
* // returns 0.0
*/
function BetaPrime() {
	var alpha;
	var beta;
	if ( !(this instanceof BetaPrime) ) {
		if ( arguments.length === 0 ) {
			return new BetaPrime();
		}
		return new BetaPrime( arguments[ 0 ], arguments[ 1 ] );
	}
	if ( arguments.length ) {
		alpha = arguments[ 0 ];
		beta = arguments[ 1 ];
		if ( !isPositive( alpha ) ) {
			throw new TypeError( format( 'invalid argument. First shape parameter must be a positive number. Value: `%s`.', alpha ) );
		}
		if ( !isPositive( beta ) ) {
			throw new TypeError( format( 'invalid argument. Second shape parameter must be a positive number. Value: `%s`.', beta ) );
		}
	} else {
		alpha = 1.0;
		beta = 1.0;
	}
	defineProperty( this, 'alpha', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return alpha;
		},
		'set': function set( value ) {
			if ( !isPositive( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a positive number. Value: `%s`.', value ) );
			}
			alpha = value;
		}
	});
	defineProperty( this, 'beta', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return beta;
		},
		'set': function set( value ) {
			if ( !isPositive( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a positive number. Value: `%s`.', value ) );
			}
			beta = value;
		}
	});
	return this;
}

/**
* Beta prime distribution excess kurtosis.
*
* @name kurtosis
* @memberof BetaPrime.prototype
* @type {number}
* @see [kurtosis]{@link https://en.wikipedia.org/wiki/Kurtosis}
*
* @example
* var betaprime = new BetaPrime( 4.0, 12.0 );
*
* var v = betaprime.kurtosis;
* // returns ~5.764
*/
setReadOnlyAccessor( BetaPrime.prototype, 'kurtosis', function get() {
	return kurtosis( this.alpha, this.beta );
});

/**
* Beta prime distribution expected value.
*
* @name mean
* @memberof BetaPrime.prototype
* @type {number}
* @see [expected value]{@link https://en.wikipedia.org/wiki/Expected_value}
*
* @example
* var betaprime = new BetaPrime( 4.0, 12.0 );
*
* var v = betaprime.mean;
* // returns ~0.364
*/
setReadOnlyAccessor( BetaPrime.prototype, 'mean', function get() {
	return mean( this.alpha, this.beta );
});

/**
* Beta prime distribution mode.
*
* @name mode
* @memberof BetaPrime.prototype
* @type {number}
* @see [mode]{@link https://en.wikipedia.org/wiki/Mode_%28statistics%29}
*
* @example
* var betaprime = new BetaPrime( 4.0, 12.0 );
*
* var v = betaprime.mode;
* // returns ~0.231
*/
setReadOnlyAccessor( BetaPrime.prototype, 'mode', function get() {
	return mode( this.alpha, this.beta );
});

/**
* Beta prime distribution skewness.
*
* @name skewness
* @memberof BetaPrime.prototype
* @type {number}
* @see [skewness]{@link https://en.wikipedia.org/wiki/Skewness}
*
* @example
* var betaprime = new BetaPrime( 4.0, 12.0 );
*
* var v = betaprime.skewness;
* // returns ~1.724
*/
setReadOnlyAccessor( BetaPrime.prototype, 'skewness', function get() {
	return skewness( this.alpha, this.beta );
});

/**
* Beta prime distribution standard deviation.
*
* @name stdev
* @memberof BetaPrime.prototype
* @type {number}
* @see [standard deviation]{@link https://en.wikipedia.org/wiki/Standard_deviation}
*
* @example
* var betaprime = new BetaPrime( 4.0, 12.0 );
*
* var v = betaprime.stdev;
* // returns ~0.223
*/
setReadOnlyAccessor( BetaPrime.prototype, 'stdev', function get() {
	return stdev( this.alpha, this.beta );
});

/**
* Beta prime distribution variance.
*
* @name variance
* @memberof BetaPrime.prototype
* @type {number}
* @see [variance]{@link https://en.wikipedia.org/wiki/Variance}
*
* @example
* var betaprime = new BetaPrime( 4.0, 12.0 );
*
* var v = betaprime.variance;
* // returns ~0.05
*/
setReadOnlyAccessor( BetaPrime.prototype, 'variance', function get() {
	return variance( this.alpha, this.beta );
});

/**
* Evaluates the cumulative distribution function (CDF).
*
* @name cdf
* @memberof BetaPrime.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated CDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var betaprime = new BetaPrime( 2.0, 4.0 );
*
* var v = betaprime.cdf( 0.5 );
* // returns ~0.539
*/
setReadOnly( BetaPrime.prototype, 'cdf', betaPrimeCDF );

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF).
*
* @name logcdf
* @memberof BetaPrime.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logCDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var betaprime = new BetaPrime( 2.0, 4.0 );
*
* var v = betaprime.logcdf( 0.5 );
* // returns ~-0.618
*/
setReadOnly( BetaPrime.prototype, 'logcdf', betaPrimeLogCDF );

/**
* Evaluates the natural logarithm of the probability density function (logPDF).
*
* @name logpdf
* @memberof BetaPrime.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logPDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var betaprime = new BetaPrime( 2.0, 4.0 );
*
* var v = betaprime.logpdf( 0.8 );
* // returns ~-0.754
*/
setReadOnly( BetaPrime.prototype, 'logpdf', betaPrimeLogPDF );

/**
* Evaluates the probability density function (PDF).
*
* @name pdf
* @memberof BetaPrime.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated PDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var betaprime = new BetaPrime( 2.0, 4.0 );
*
* var v = betaprime.pdf( 0.8 );
* // returns ~0.47
*/
setReadOnly( BetaPrime.prototype, 'pdf', betaPrimePDF );

/**
* Evaluates the quantile function.
*
* @name quantile
* @memberof BetaPrime.prototype
* @type {Function}
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
* @see [quantile function]{@link https://en.wikipedia.org/wiki/Quantile_function}
*
* @example
* var betaprime = new BetaPrime( 2.0, 4.0 );
*
* var v = betaprime.quantile( 0.5 );
* // returns ~0.457
*/
setReadOnly( BetaPrime.prototype, 'quantile', betaPrimeQuantile );


// EXPORTS //

module.exports = BetaPrime;
