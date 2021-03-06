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
var entropy = require( './../../../../../base/dists/invgamma/entropy' );
var kurtosis = require( './../../../../../base/dists/invgamma/kurtosis' );
var mean = require( './../../../../../base/dists/invgamma/mean' );
var mode = require( './../../../../../base/dists/invgamma/mode' );
var quantile = require( './../../../../../base/dists/invgamma/quantile' );
var logpdf = require( './../../../../../base/dists/invgamma/logpdf' );
var skewness = require( './../../../../../base/dists/invgamma/skewness' );
var stdev = require( './../../../../../base/dists/invgamma/stdev' );
var variance = require( './../../../../../base/dists/invgamma/variance' );
var cdf = require( './../../../../../base/dists/invgamma/cdf' );
var pdf = require( './../../../../../base/dists/invgamma/pdf' );
var format = require( '@stdlib/string/format' );


// FUNCTIONS //

/**
* Evaluates the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated CDF
*/
function invgammaCDF( x ) {
	return cdf( x, this.alpha, this.beta );
}

/**
* Evaluates the natural logarithm of the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logPDF
*/
function invgammaLogPDF( x ) {
	return logpdf( x, this.alpha, this.beta );
}

/**
* Evaluates the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated PDF
*/
function invgammaPDF( x ) {
	return pdf( x, this.alpha, this.beta );
}

/**
* Evaluates the quantile function.
*
* @private
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
*/
function invgammaQuantile( p ) {
	return quantile( p, this.alpha, this.beta );
}


// MAIN //

/**
* Inverse gamma distribution constructor.
*
* @constructor
* @param {PositiveNumber} [alpha=1.0] - shape parameter
* @param {PositiveNumber} [beta=1.0] - scale parameter
* @throws {TypeError} `alpha` must be a positive number
* @throws {TypeError} `beta` must be a positive number
* @returns {InvGamma} distribution instance
*
* @example
* var invgamma = new InvGamma( 1.0, 1.0 );
*
* var y = invgamma.cdf( 0.8 );
* // returns ~0.287
*
* var v = invgamma.mode;
* // returns 0.5
*/
function InvGamma() {
	var alpha;
	var beta;
	if ( !(this instanceof InvGamma) ) {
		if ( arguments.length === 0 ) {
			return new InvGamma();
		}
		return new InvGamma( arguments[ 0 ], arguments[ 1 ] );
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
* Inverse gamma distribution differential entropy.
*
* @name entropy
* @memberof InvGamma.prototype
* @type {number}
* @see [differential entropy]{@link https://en.wikipedia.org/wiki/Entropy_%28information_theory%29}
*
* @example
* var invgamma = new InvGamma( 4.0, 12.0 );
*
* var v = invgamma.entropy;
* // returns ~1.996
*/
setReadOnlyAccessor( InvGamma.prototype, 'entropy', function get() {
	return entropy( this.alpha, this.beta );
});

/**
* Inverse gamma distribution excess kurtosis.
*
* @name kurtosis
* @memberof InvGamma.prototype
* @type {number}
* @see [kurtosis]{@link https://en.wikipedia.org/wiki/Kurtosis}
*
* @example
* var invgamma = new InvGamma( 6.0, 12.0 );
*
* var v = invgamma.kurtosis;
* // returns 19.0
*/
setReadOnlyAccessor( InvGamma.prototype, 'kurtosis', function get() {
	return kurtosis( this.alpha, this.beta );
});

/**
* Inverse gamma distribution expected value.
*
* @name mean
* @memberof InvGamma.prototype
* @type {number}
* @see [expected value]{@link https://en.wikipedia.org/wiki/Expected_value}
*
* @example
* var invgamma = new InvGamma( 4.0, 12.0 );
*
* var v = invgamma.mean;
* // returns 4.0
*/
setReadOnlyAccessor( InvGamma.prototype, 'mean', function get() {
	return mean( this.alpha, this.beta );
});

/**
* Inverse gamma distribution mode.
*
* @name mode
* @memberof InvGamma.prototype
* @type {number}
* @see [mode]{@link https://en.wikipedia.org/wiki/Mode_%28statistics%29}
*
* @example
* var invgamma = new InvGamma( 4.0, 12.0 );
*
* var v = invgamma.mode;
* // returns 2.4
*/
setReadOnlyAccessor( InvGamma.prototype, 'mode', function get() {
	return mode( this.alpha, this.beta );
});

/**
* Inverse gamma distribution skewness.
*
* @name skewness
* @memberof InvGamma.prototype
* @type {number}
* @see [skewness]{@link https://en.wikipedia.org/wiki/Skewness}
*
* @example
* var invgamma = new InvGamma( 4.0, 12.0 );
*
* var v = invgamma.skewness;
* // returns ~5.657
*/
setReadOnlyAccessor( InvGamma.prototype, 'skewness', function get() {
	return skewness( this.alpha, this.beta );
});

/**
* Inverse gamma distribution standard deviation.
*
* @name stdev
* @memberof InvGamma.prototype
* @type {PositiveNumber}
* @see [standard deviation]{@link https://en.wikipedia.org/wiki/Standard_deviation}
*
* @example
* var invgamma = new InvGamma( 4.0, 12.0 );
*
* var v = invgamma.stdev;
* // returns ~2.828
*/
setReadOnlyAccessor( InvGamma.prototype, 'stdev', function get() {
	return stdev( this.alpha, this.beta );
});

/**
* Inverse gamma distribution variance.
*
* @name variance
* @memberof InvGamma.prototype
* @type {PositiveNumber}
* @see [variance]{@link https://en.wikipedia.org/wiki/Variance}
*
* @example
* var invgamma = new InvGamma( 4.0, 12.0 );
*
* var v = invgamma.variance;
* // returns 8.0
*/
setReadOnlyAccessor( InvGamma.prototype, 'variance', function get() {
	return variance( this.alpha, this.beta );
});

/**
* Evaluates the cumulative distribution function (CDF).
*
* @name cdf
* @memberof InvGamma.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated CDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var invgamma = new InvGamma( 2.0, 4.0 );
*
* var v = invgamma.cdf( 0.5 );
* // returns ~0.003
*/
setReadOnly( InvGamma.prototype, 'cdf', invgammaCDF );

/**
* Evaluates the natural logarithm of the probability density function (PDF).
*
* @name logpdf
* @memberof InvGamma.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logPDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var invgamma = new InvGamma( 2.0, 4.0 );
*
* var v = invgamma.logpdf( 0.8 );
* // returns ~-1.558
*/
setReadOnly( InvGamma.prototype, 'logpdf', invgammaLogPDF );

/**
* Evaluates the probability density function (PDF).
*
* @name pdf
* @memberof InvGamma.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated PDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var invgamma = new InvGamma( 2.0, 4.0 );
*
* var v = invgamma.pdf( 0.8 );
* // returns ~0.211
*/
setReadOnly( InvGamma.prototype, 'pdf', invgammaPDF );

/**
* Evaluates the quantile function.
*
* @name quantile
* @memberof InvGamma.prototype
* @type {Function}
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
* @see [quantile function]{@link https://en.wikipedia.org/wiki/Quantile_function}
*
* @example
* var invgamma = new InvGamma( 2.0, 4.0 );
*
* var v = invgamma.quantile( 0.5 );
* // returns ~2.383
*/
setReadOnly( InvGamma.prototype, 'quantile', invgammaQuantile );


// EXPORTS //

module.exports = InvGamma;
