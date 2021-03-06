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
var entropy = require( './../../../../../base/dists/gamma/entropy' );
var kurtosis = require( './../../../../../base/dists/gamma/kurtosis' );
var mean = require( './../../../../../base/dists/gamma/mean' );
var mode = require( './../../../../../base/dists/gamma/mode' );
var quantile = require( './../../../../../base/dists/gamma/quantile' );
var skewness = require( './../../../../../base/dists/gamma/skewness' );
var stdev = require( './../../../../../base/dists/gamma/stdev' );
var variance = require( './../../../../../base/dists/gamma/variance' );
var cdf = require( './../../../../../base/dists/gamma/cdf' );
var logcdf = require( './../../../../../base/dists/gamma/logcdf' );
var logpdf = require( './../../../../../base/dists/gamma/logpdf' );
var mgf = require( './../../../../../base/dists/gamma/mgf' );
var pdf = require( './../../../../../base/dists/gamma/pdf' );
var format = require( '@stdlib/string/format' );


// FUNCTIONS //

/**
* Evaluates the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated CDF
*/
function gammaCDF( x ) {
	return cdf( x, this.alpha, this.beta );
}

/**
* Evaluates the natural logarithm of the cumulative distribution function (logCDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logCDF
*/
function gammaLogCDF( x ) {
	return logcdf( x, this.alpha, this.beta );
}

/**
* Evaluates the natural logarithm of the probability density function (logPDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logPDF
*/
function gammaLogPDF( x ) {
	return logpdf( x, this.alpha, this.beta );
}

/**
* Evaluates the moment-generating function (MGF).
*
* @private
* @param {number} t - input value
* @returns {number} evaluated MGF
*/
function gammaMGF( t ) {
	return mgf( t, this.alpha, this.beta );
}

/**
* Evaluates the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated PDF
*/
function gammaPDF( x ) {
	return pdf( x, this.alpha, this.beta );
}

/**
* Evaluates the quantile function.
*
* @private
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
*/
function gammaQuantile( p ) {
	return quantile( p, this.alpha, this.beta );
}


// MAIN //

/**
* Gamma distribution constructor.
*
* @constructor
* @param {PositiveNumber} [alpha=1.0] - shape parameter
* @param {PositiveNumber} [beta=1.0] - rate parameter
* @throws {TypeError} `alpha` must be a positive number
* @throws {TypeError} `beta` must be a positive number
* @returns {Gamma} distribution instance
*
* @example
* var gamma = new Gamma( 1.0, 1.0 );
*
* var y = gamma.cdf( 0.8 );
* // returns ~0.551
*
* var v = gamma.mode;
* // returns 0.0
*/
function Gamma() {
	var alpha;
	var beta;
	if ( !(this instanceof Gamma) ) {
		if ( arguments.length === 0 ) {
			return new Gamma();
		}
		return new Gamma( arguments[ 0 ], arguments[ 1 ] );
	}
	if ( arguments.length ) {
		alpha = arguments[ 0 ];
		beta = arguments[ 1 ];
		if ( !isPositive( alpha ) ) {
			throw new TypeError( format( 'invalid argument. Shape parameter must be a positive number. Value: `%s`.', alpha ) );
		}
		if ( !isPositive( beta ) ) {
			throw new TypeError( format( 'invalid argument. Rate parameter must be a positive number. Value: `%s`.', beta ) );
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
* Gamma distribution differential entropy.
*
* @name entropy
* @memberof Gamma.prototype
* @type {number}
* @see [differential entropy]{@link https://en.wikipedia.org/wiki/Entropy_%28information_theory%29}
*
* @example
* var gamma = new Gamma( 4.0, 12.0 );
*
* var v = gamma.entropy;
* // returns ~-0.462
*/
setReadOnlyAccessor( Gamma.prototype, 'entropy', function get() {
	return entropy( this.alpha, this.beta );
});

/**
* Gamma distribution excess kurtosis.
*
* @name kurtosis
* @memberof Gamma.prototype
* @type {number}
* @see [kurtosis]{@link https://en.wikipedia.org/wiki/Kurtosis}
*
* @example
* var gamma = new Gamma( 4.0, 12.0 );
*
* var v = gamma.kurtosis;
* // returns 1.5
*/
setReadOnlyAccessor( Gamma.prototype, 'kurtosis', function get() {
	return kurtosis( this.alpha, this.beta );
});

/**
* Gamma distribution expected value.
*
* @name mean
* @memberof Gamma.prototype
* @type {number}
* @see [expected value]{@link https://en.wikipedia.org/wiki/Expected_value}
*
* @example
* var gamma = new Gamma( 4.0, 12.0 );
*
* var v = gamma.mean;
* // returns ~0.333
*/
setReadOnlyAccessor( Gamma.prototype, 'mean', function get() {
	return mean( this.alpha, this.beta );
});

/**
* Gamma distribution mode.
*
* @name mode
* @memberof Gamma.prototype
* @type {number}
* @see [mode]{@link https://en.wikipedia.org/wiki/Mode_%28statistics%29}
*
* @example
* var gamma = new Gamma( 4.0, 12.0 );
*
* var v = gamma.mode;
* // returns 0.25
*/
setReadOnlyAccessor( Gamma.prototype, 'mode', function get() {
	return mode( this.alpha, this.beta );
});

/**
* Gamma distribution skewness.
*
* @name skewness
* @memberof Gamma.prototype
* @type {number}
* @see [skewness]{@link https://en.wikipedia.org/wiki/Skewness}
*
* @example
* var gamma = new Gamma( 4.0, 12.0 );
*
* var v = gamma.skewness;
* // returns 1.0
*/
setReadOnlyAccessor( Gamma.prototype, 'skewness', function get() {
	return skewness( this.alpha, this.beta );
});

/**
* Gamma distribution standard deviation.
*
* @name stdev
* @memberof Gamma.prototype
* @type {PositiveNumber}
* @see [standard deviation]{@link https://en.wikipedia.org/wiki/Standard_deviation}
*
* @example
* var gamma = new Gamma( 4.0, 12.0 );
*
* var v = gamma.stdev;
* // returns ~0.167
*/
setReadOnlyAccessor( Gamma.prototype, 'stdev', function get() {
	return stdev( this.alpha, this.beta );
});

/**
* Gamma distribution variance.
*
* @name variance
* @memberof Gamma.prototype
* @type {PositiveNumber}
* @see [variance]{@link https://en.wikipedia.org/wiki/Variance}
*
* @example
* var gamma = new Gamma( 4.0, 12.0 );
*
* var v = gamma.variance;
* // returns ~0.028
*/
setReadOnlyAccessor( Gamma.prototype, 'variance', function get() {
	return variance( this.alpha, this.beta );
});

/**
* Evaluates the cumulative distribution function (CDF).
*
* @name cdf
* @memberof Gamma.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated CDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var gamma = new Gamma( 2.0, 4.0 );
*
* var v = gamma.cdf( 0.5 );
* // returns ~0.594
*/
setReadOnly( Gamma.prototype, 'cdf', gammaCDF );

/**
* Evaluates the natural logarithm of the cumulative distribution function (logCDF).
*
* @name logcdf
* @memberof Gamma.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logCDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var gamma = new Gamma( 2.0, 4.0 );
*
* var v = gamma.logcdf( 0.8 );
* // returns ~-0.188
*/
setReadOnly( Gamma.prototype, 'logcdf', gammaLogCDF );

/**
* Evaluates the natural logarithm of the probability density function (logPDF).
*
* @name logpdf
* @memberof Gamma.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logPDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var gamma = new Gamma( 2.0, 4.0 );
*
* var v = gamma.logpdf( 0.8 );
* // returns ~-0.651
*/
setReadOnly( Gamma.prototype, 'logpdf', gammaLogPDF );

/**
* Evaluates the moment-generating function (MGF).
*
* @name mgf
* @memberof Gamma.prototype
* @type {Function}
* @param {number} t - input value
* @returns {number} evaluated MGF
* @see [mgf]{@link https://en.wikipedia.org/wiki/Moment-generating_function}
*
* @example
* var gamma = new Gamma( 2.0, 4.0 );
*
* var v = gamma.mgf( 0.5 );
* // returns ~1.306
*/
setReadOnly( Gamma.prototype, 'mgf', gammaMGF );

/**
* Evaluates the probability density function (PDF).
*
* @name pdf
* @memberof Gamma.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated PDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var gamma = new Gamma( 2.0, 4.0 );
*
* var v = gamma.pdf( 0.8 );
* // returns ~0.522
*/
setReadOnly( Gamma.prototype, 'pdf', gammaPDF );

/**
* Evaluates the quantile function.
*
* @name quantile
* @memberof Gamma.prototype
* @type {Function}
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
* @see [quantile function]{@link https://en.wikipedia.org/wiki/Quantile_function}
*
* @example
* var gamma = new Gamma( 2.0, 4.0 );
*
* var v = gamma.quantile( 0.5 );
* // returns ~0.42
*/
setReadOnly( Gamma.prototype, 'quantile', gammaQuantile );


// EXPORTS //

module.exports = Gamma;
