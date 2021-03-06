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
var entropy = require( './../../../../../base/dists/gumbel/entropy' );
var kurtosis = require( './../../../../../base/dists/gumbel/kurtosis' );
var mean = require( './../../../../../base/dists/gumbel/mean' );
var median = require( './../../../../../base/dists/gumbel/median' );
var mode = require( './../../../../../base/dists/gumbel/mode' );
var skewness = require( './../../../../../base/dists/gumbel/skewness' );
var stdev = require( './../../../../../base/dists/gumbel/stdev' );
var variance = require( './../../../../../base/dists/gumbel/variance' );
var cdf = require( './../../../../../base/dists/gumbel/cdf' );
var logcdf = require( './../../../../../base/dists/gumbel/logcdf' );
var logpdf = require( './../../../../../base/dists/gumbel/logpdf' );
var mgf = require( './../../../../../base/dists/gumbel/mgf' );
var pdf = require( './../../../../../base/dists/gumbel/pdf' );
var quantile = require( './../../../../../base/dists/gumbel/quantile' );
var format = require( '@stdlib/string/format' );


// FUNCTIONS //

/**
* Evaluates the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {Probability} evaluated CDF
*/
function gumbelCDF( x ) {
	return cdf( x, this.mu, this.beta );
}

/**
* Evaluates the natural logarithm of the cumulative distribution function (logCDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logCDF
*/
function gumbelLogCDF( x ) {
	return logcdf( x, this.mu, this.beta );
}

/**
* Evaluates the natural logarithm of the probability density function (logPDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logPDF
*/
function gumbelLogPDF( x ) {
	return logpdf( x, this.mu, this.beta );
}

/**
* Evaluates the moment-generating function (MGF).
*
* @private
* @param {number} t - input value
* @returns {number} evaluated MGF
*/
function gumbelMGF( t ) {
	return mgf( t, this.mu, this.beta );
}

/**
* Evaluates the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated PDF
*/
function gumbelPDF( x ) {
	return pdf( x, this.mu, this.beta );
}

/**
* Evaluates the quantile function.
*
* @private
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
*/
function gumbelQuantile( p ) {
	return quantile( p, this.mu, this.beta );
}


// MAIN //

/**
* Gumbel distribution constructor.
*
* @constructor
* @param {number} [mu=0.0] - location parameter
* @param {PositiveNumber} [beta=1.0] - scale parameter
* @throws {TypeError} `beta` must be a positive number
* @returns {Gumbel} distribution instance
*
* @example
* var gumbel = new Gumbel( 1.0, 1.0 );
*
* var y = gumbel.cdf( 0.8 );
* // returns ~0.295
*
* var mu = gumbel.mean;
* // returns ~1.577
*/
function Gumbel() {
	var beta;
	var mu;
	if ( !(this instanceof Gumbel) ) {
		if ( arguments.length === 0 ) {
			return new Gumbel();
		}
		return new Gumbel( arguments[ 0 ], arguments[ 1 ] );
	}
	if ( arguments.length ) {
		mu = arguments[ 0 ];
		beta = arguments[ 1 ];
		if ( !isNumber( mu ) || isnan( mu ) ) {
			throw new TypeError( format( 'invalid argument. Location parameter must be a number. Value: `%s`.', mu ) );
		}
		if ( !isPositive( beta ) ) {
			throw new TypeError( format( 'invalid argument. Scale parameter must be a positive number. Value: `%s`.', beta ) );
		}
	} else {
		mu = 0.0;
		beta = 1.0;
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
* Gumbel distribution differential entropy.
*
* @name entropy
* @memberof Gumbel.prototype
* @type {number}
* @see [differential entropy]{@link https://en.wikipedia.org/wiki/Entropy_%28information_theory%29}
*
* @example
* var gumbel = new Gumbel( 4.0, 12.0 );
*
* var v = gumbel.entropy;
* // returns ~4.062
*/
setReadOnlyAccessor( Gumbel.prototype, 'entropy', function get() {
	return entropy( this.mu, this.beta );
});

/**
* Gumbel distribution excess kurtosis.
*
* @name kurtosis
* @memberof Gumbel.prototype
* @type {number}
* @see [kurtosis]{@link https://en.wikipedia.org/wiki/Kurtosis}
*
* @example
* var gumbel = new Gumbel( 4.0, 12.0 );
*
* var v = gumbel.kurtosis;
* // returns 2.4
*/
setReadOnlyAccessor( Gumbel.prototype, 'kurtosis', function get() {
	return kurtosis( this.mu, this.beta );
});

/**
* Gumbel distribution expected value.
*
* @name mean
* @memberof Gumbel.prototype
* @type {number}
* @see [expected value]{@link https://en.wikipedia.org/wiki/Expected_value}
*
* @example
* var gumbel = new Gumbel( 4.0, 12.0 );
*
* var v = gumbel.mean;
* // returns ~10.927
*/
setReadOnlyAccessor( Gumbel.prototype, 'mean', function get() {
	return mean( this.mu, this.beta );
});

/**
* Gumbel distribution median.
*
* @name median
* @memberof Gumbel.prototype
* @type {number}
* @see [median]{@link https://en.wikipedia.org/wiki/Median}
*
* @example
* var gumbel = new Gumbel( 4.0, 12.0 );
*
* var v = gumbel.median;
* // returns ~8.398
*/
setReadOnlyAccessor( Gumbel.prototype, 'median', function get() {
	return median( this.mu, this.beta );
});

/**
* Gumbel distribution mode.
*
* @name mode
* @memberof Gumbel.prototype
* @type {number}
* @see [mode]{@link https://en.wikipedia.org/wiki/Mode_%28statistics%29}
*
* @example
* var gumbel = new Gumbel( 4.0, 12.0 );
*
* var v = gumbel.mode;
* // returns 4.0
*/
setReadOnlyAccessor( Gumbel.prototype, 'mode', function get() {
	return mode( this.mu, this.beta );
});

/**
* Gumbel distribution skewness.
*
* @name skewness
* @memberof Gumbel.prototype
* @type {number}
* @see [skewness]{@link https://en.wikipedia.org/wiki/Skewness}
*
* @example
* var gumbel = new Gumbel( 4.0, 12.0 );
*
* var v = gumbel.skewness;
* // returns ~1.14
*/
setReadOnlyAccessor( Gumbel.prototype, 'skewness', function get() {
	return skewness( this.mu, this.beta );
});

/**
* Gumbel distribution standard deviation.
*
* @name stdev
* @memberof Gumbel.prototype
* @type {PositiveNumber}
* @see [standard deviation]{@link https://en.wikipedia.org/wiki/Standard_deviation}
*
* @example
* var gumbel = new Gumbel( 4.0, 12.0 );
*
* var v = gumbel.stdev;
* // returns ~15.39
*/
setReadOnlyAccessor( Gumbel.prototype, 'stdev', function get() {
	return stdev( this.mu, this.beta );
});

/**
* Gumbel distribution variance.
*
* @name variance
* @memberof Gumbel.prototype
* @type {PositiveNumber}
* @see [variance]{@link https://en.wikipedia.org/wiki/Variance}
*
* @example
* var gumbel = new Gumbel( 4.0, 12.0 );
*
* var v = gumbel.variance;
* // returns ~236.87
*/
setReadOnlyAccessor( Gumbel.prototype, 'variance', function get() {
	return variance( this.mu, this.beta );
});

/**
* Evaluates the cumulative distribution function (CDF).
*
* @name cdf
* @memberof Gumbel.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated CDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var gumbel = new Gumbel( 2.0, 4.0 );
*
* var v = gumbel.cdf( 0.5 );
* // returns ~0.233
*/
setReadOnly( Gumbel.prototype, 'cdf', gumbelCDF );

/**
* Evaluates the natural logarithm of the cumulative distribution function (logCDF).
*
* @name logcdf
* @memberof Gumbel.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logCDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var gumbel = new Gumbel( 2.0, 4.0 );
*
* var v = gumbel.logcdf( 0.8 );
* // returns ~-1.35
*/
setReadOnly( Gumbel.prototype, 'logcdf', gumbelLogCDF );

/**
* Evaluates the natural logarithm of the probability density function (logPDF).
*
* @name logpdf
* @memberof Gumbel.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logPDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var gumbel = new Gumbel( 2.0, 4.0 );
*
* var v = gumbel.logpdf( 0.8 );
* // returns ~-2.436
*/
setReadOnly( Gumbel.prototype, 'logpdf', gumbelLogPDF );

/**
* Evaluates the moment-generating function (MGF).
*
* @name mgf
* @memberof Gumbel.prototype
* @type {Function}
* @param {number} t - input value
* @returns {number} evaluated MGF
* @see [mgf]{@link https://en.wikipedia.org/wiki/Moment-generating_function}
*
* @example
* var gumbel = new Gumbel( 2.0, 4.0 );
*
* var v = gumbel.mgf( 0.2 );
* // returns ~6.849
*/
setReadOnly( Gumbel.prototype, 'mgf', gumbelMGF );

/**
* Evaluates the probability density function (PDF).
*
* @name pdf
* @memberof Gumbel.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated PDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var gumbel = new Gumbel( 2.0, 4.0 );
*
* var v = gumbel.pdf( 0.8 );
* // returns ~0.087
*/
setReadOnly( Gumbel.prototype, 'pdf', gumbelPDF );

/**
* Evaluates the quantile function.
*
* @name quantile
* @memberof Gumbel.prototype
* @type {Function}
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
* @see [quantile function]{@link https://en.wikipedia.org/wiki/Quantile_function}
*
* @example
* var gumbel = new Gumbel( 2.0, 4.0 );
*
* var v = gumbel.quantile( 0.5 );
* // returns ~3.466
*/
setReadOnly( Gumbel.prototype, 'quantile', gumbelQuantile );


// EXPORTS //

module.exports = Gumbel;
