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
var entropy = require( './../../../../../base/dists/normal/entropy' );
var kurtosis = require( './../../../../../base/dists/normal/kurtosis' );
var mean = require( './../../../../../base/dists/normal/mean' );
var median = require( './../../../../../base/dists/normal/median' );
var mode = require( './../../../../../base/dists/normal/mode' );
var skewness = require( './../../../../../base/dists/normal/skewness' );
var stdev = require( './../../../../../base/dists/normal/stdev' );
var variance = require( './../../../../../base/dists/normal/variance' );
var cdf = require( './../../../../../base/dists/normal/cdf' );
var logcdf = require( './../../../../../base/dists/normal/logcdf' );
var logpdf = require( './../../../../../base/dists/normal/logpdf' );
var mgf = require( './../../../../../base/dists/normal/mgf' );
var pdf = require( './../../../../../base/dists/normal/pdf' );
var quantile = require( './../../../../../base/dists/normal/quantile' );
var format = require( '@stdlib/string/format' );


// FUNCTIONS //

/**
* Evaluates the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {Probability} evaluated CDF
*/
function normalCDF( x ) {
	return cdf( x, this.mu, this.sigma );
}

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF).
* @private
* @param {number} x - input value
* @returns {number} evaluated logCDF
*/
function normalLogCDF( x ) {
	return logcdf( x, this.mu, this.sigma );
}

/**
* Evaluates the natural logarithm of the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logPDF
*/
function normalLogPDF( x ) {
	return logpdf( x, this.mu, this.sigma );
}

/**
* Evaluates the moment-generating function (MGF).
*
* @private
* @param {number} t - input value
* @returns {number} evaluated MGF
*/
function normalMGF( t ) {
	return mgf( t, this.mu, this.sigma );
}

/**
* Evaluates the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated PDF
*/
function normalPDF( x ) {
	return pdf( x, this.mu, this.sigma );
}

/**
* Evaluates the quantile function.
*
* @private
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
*/
function normalQuantile( p ) {
	return quantile( p, this.mu, this.sigma );
}


// MAIN //

/**
* Normal distribution constructor.
*
* @constructor
* @param {number} [mu=0.0] - location parameter
* @param {PositiveNumber} [sigma=1.0] - scale parameter
* @throws {TypeError} `sigma` must be a positive number
* @returns {Normal} distribution instance
*
* @example
* var normal = new Normal( 1.0, 1.0 );
*
* var y = normal.cdf( 1.5 );
* // returns ~0.691
*
* var mu = normal.mean;
* // returns 1.0
*/
function Normal() {
	var sigma;
	var mu;
	if ( !(this instanceof Normal) ) {
		if ( arguments.length === 0 ) {
			return new Normal();
		}
		return new Normal( arguments[ 0 ], arguments[ 1 ] );
	}
	if ( arguments.length ) {
		mu = arguments[ 0 ];
		sigma = arguments[ 1 ];
		if ( !isNumber( mu ) || isnan( mu ) ) {
			throw new TypeError( format( 'invalid argument. Location parameter must be a number. Value: `%s`.', mu ) );
		}
		if ( !isPositive( sigma ) ) {
			throw new TypeError( format( 'invalid argument. Scale parameter must be a positive number. Value: `%s`.', sigma ) );
		}
	} else {
		mu = 0.0;
		sigma = 1.0;
	}
	defineProperty( this, 'mu', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return mu;
		},
		'set': function set( value ) {
			if ( !isNumber( value ) || isnan( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a number. Value: `%s`.', value ) );
			}
			mu = value;
		}
	});
	defineProperty( this, 'sigma', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return sigma;
		},
		'set': function set( value ) {
			if ( !isPositive( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a positive number. Value: `%s`.', value ) );
			}
			sigma = value;
		}
	});
	return this;
}

/**
* Normal distribution differential entropy.
*
* @name entropy
* @memberof Normal.prototype
* @type {number}
* @see [differential entropy]{@link https://en.wikipedia.org/wiki/Entropy_%28information_theory%29}
*
* @example
* var normal = new Normal( 4.0, 12.0 );
*
* var v = normal.entropy;
* // returns ~3.904
*/
setReadOnlyAccessor( Normal.prototype, 'entropy', function get() {
	return entropy( this.mu, this.sigma );
});

/**
* Normal distribution excess kurtosis.
*
* @name kurtosis
* @memberof Normal.prototype
* @type {number}
* @see [kurtosis]{@link https://en.wikipedia.org/wiki/Kurtosis}
*
* @example
* var normal = new Normal( 4.0, 12.0 );
*
* var v = normal.kurtosis;
* // returns 0.0
*/
setReadOnlyAccessor( Normal.prototype, 'kurtosis', function get() {
	return kurtosis( this.mu, this.sigma );
});

/**
* Normal distribution expected value.
*
* @name mean
* @memberof Normal.prototype
* @type {number}
* @see [expected value]{@link https://en.wikipedia.org/wiki/Expected_value}
*
* @example
* var normal = new Normal( 4.0, 12.0 );
*
* var v = normal.mean;
* // returns 4.0
*/
setReadOnlyAccessor( Normal.prototype, 'mean', function get() {
	return mean( this.mu, this.sigma );
});

/**
* Normal distribution median.
*
* @name median
* @memberof Normal.prototype
* @type {number}
* @see [median]{@link https://en.wikipedia.org/wiki/Median}
*
* @example
* var normal = new Normal( 4.0, 12.0 );
*
* var v = normal.median;
* // returns 4.0
*/
setReadOnlyAccessor( Normal.prototype, 'median', function get() {
	return median( this.mu, this.sigma );
});

/**
* Normal distribution mode.
*
* @name mode
* @memberof Normal.prototype
* @type {number}
* @see [mode]{@link https://en.wikipedia.org/wiki/Mode_%28statistics%29}
*
* @example
* var normal = new Normal( 4.0, 12.0 );
*
* var v = normal.mode;
* // returns 4.0
*/
setReadOnlyAccessor( Normal.prototype, 'mode', function get() {
	return mode( this.mu, this.sigma );
});

/**
* Normal distribution skewness.
*
* @name skewness
* @memberof Normal.prototype
* @type {number}
* @see [skewness]{@link https://en.wikipedia.org/wiki/Skewness}
*
* @example
* var normal = new Normal( 4.0, 12.0 );
*
* var v = normal.skewness;
* // returns 0.0
*/
setReadOnlyAccessor( Normal.prototype, 'skewness', function get() {
	return skewness( this.mu, this.sigma );
});

/**
* Normal distribution standard deviation.
*
* @name stdev
* @memberof Normal.prototype
* @type {PositiveNumber}
* @see [standard deviation]{@link https://en.wikipedia.org/wiki/Standard_deviation}
*
* @example
* var normal = new Normal( 4.0, 12.0 );
*
* var v = normal.stdev;
* // returns 12.0
*/
setReadOnlyAccessor( Normal.prototype, 'stdev', function get() {
	return stdev( this.mu, this.sigma );
});

/**
* Normal distribution variance.
*
* @name variance
* @memberof Normal.prototype
* @type {PositiveNumber}
* @see [variance]{@link https://en.wikipedia.org/wiki/Variance}
*
* @example
* var normal = new Normal( 4.0, 12.0 );
*
* var v = normal.variance;
* // returns 144.0
*/
setReadOnlyAccessor( Normal.prototype, 'variance', function get() {
	return variance( this.mu, this.sigma );
});

/**
* Evaluates the cumulative distribution function (CDF).
*
* @name cdf
* @memberof Normal.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated CDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var normal = new Normal( 2.0, 4.0 );
*
* var v = normal.cdf( 0.5 );
* // returns ~0.354
*/
setReadOnly( Normal.prototype, 'cdf', normalCDF );

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF).
*
* @name logcdf
* @memberof Normal.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logarithm of the CDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var normal = new Normal( 2.0, 4.0 );
*
* var v = normal.logcdf( 0.5 );
* // returns ~-1.039
*/
setReadOnly( Normal.prototype, 'logcdf', normalLogCDF );

/**
* Evaluates the natural logarithm of the probability density function (PDF).
*
* @name logpdf
* @memberof Normal.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logPDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var normal = new Normal( 2.0, 4.0 );
*
* var v = normal.logpdf( 0.8 );
* // returns ~-2.35
*/
setReadOnly( Normal.prototype, 'logpdf', normalLogPDF );

/**
* Evaluates the moment-generating function (MGF).
*
* @name mgf
* @memberof Normal.prototype
* @type {Function}
* @param {number} t - input value
* @returns {number} evaluated MGF
* @see [mgf]{@link https://en.wikipedia.org/wiki/Moment-generating_function}
*
* @example
* var normal = new Normal( 2.0, 4.0 );
*
* var v = normal.mgf( 0.01 );
* // returns ~1.021
*/
setReadOnly( Normal.prototype, 'mgf', normalMGF );

/**
* Evaluates the probability density function (PDF).
*
* @name pdf
* @memberof Normal.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated PDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var normal = new Normal( 2.0, 4.0 );
*
* var v = normal.pdf( 0.8 );
* // returns ~0.095
*/
setReadOnly( Normal.prototype, 'pdf', normalPDF );

/**
* Evaluates the quantile function.
*
* @name quantile
* @memberof Normal.prototype
* @type {Function}
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
* @see [quantile function]{@link https://en.wikipedia.org/wiki/Quantile_function}
*
* @example
* var normal = new Normal( 2.0, 4.0 );
*
* var v = normal.quantile( 0.5 );
* // returns 2.0
*/
setReadOnly( Normal.prototype, 'quantile', normalQuantile );


// EXPORTS //

module.exports = Normal;
