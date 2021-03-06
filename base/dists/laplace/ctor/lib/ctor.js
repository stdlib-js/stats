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
var entropy = require( './../../../../../base/dists/laplace/entropy' );
var kurtosis = require( './../../../../../base/dists/laplace/kurtosis' );
var mean = require( './../../../../../base/dists/laplace/mean' );
var median = require( './../../../../../base/dists/laplace/median' );
var mode = require( './../../../../../base/dists/laplace/mode' );
var skewness = require( './../../../../../base/dists/laplace/skewness' );
var stdev = require( './../../../../../base/dists/laplace/stdev' );
var variance = require( './../../../../../base/dists/laplace/variance' );
var cdf = require( './../../../../../base/dists/laplace/cdf' );
var logcdf = require( './../../../../../base/dists/laplace/logcdf' );
var logpdf = require( './../../../../../base/dists/laplace/logpdf' );
var mgf = require( './../../../../../base/dists/laplace/mgf' );
var pdf = require( './../../../../../base/dists/laplace/pdf' );
var quantile = require( './../../../../../base/dists/laplace/quantile' );
var format = require( '@stdlib/string/format' );


// FUNCTIONS //

/**
* Evaluates the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {Probability} evaluated CDF
*/
function laplaceCDF( x ) {
	return cdf( x, this.mu, this.b );
}

/**
* Evaluates the natural logarithm of the cumulative distribution function (logCDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logCDF
*/
function laplaceLogCDF( x ) {
	return logcdf( x, this.mu, this.b );
}

/**
* Evaluates the natural logarithm of the probability density function (logPDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logPDF
*/
function laplaceLogPDF( x ) {
	return logpdf( x, this.mu, this.b );
}

/**
* Evaluates the moment-generating function (MGF).
*
* @private
* @param {number} t - input value
* @returns {number} evaluated MGF
*/
function laplaceMGF( t ) {
	return mgf( t, this.mu, this.b );
}

/**
* Evaluates the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated PDF
*/
function laplacePDF( x ) {
	return pdf( x, this.mu, this.b );
}

/**
* Evaluates the quantile function.
*
* @private
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
*/
function laplaceQuantile( p ) {
	return quantile( p, this.mu, this.b );
}


// MAIN //

/**
* Laplace distribution constructor.
*
* @constructor
* @param {number} [mu=0.0] - location parameter
* @param {PositiveNumber} [b=1.0] - scale parameter
* @throws {TypeError} `b` must be a positive number
* @returns {Laplace} distribution instance
*
* @example
* var laplace = new Laplace( 1.0, 1.0 );
*
* var y = laplace.cdf( 1.5 );
* // returns ~0.697
*
* var mu = laplace.mean;
* // returns 1.0
*/
function Laplace() {
	var mu;
	var b;
	if ( !(this instanceof Laplace) ) {
		if ( arguments.length === 0 ) {
			return new Laplace();
		}
		return new Laplace( arguments[ 0 ], arguments[ 1 ] );
	}
	if ( arguments.length ) {
		mu = arguments[ 0 ];
		b = arguments[ 1 ];
		if ( !isNumber( mu ) || isnan( mu ) ) {
			throw new TypeError( format( 'invalid argument. Location parameter must be a number. Value: `%s`.', mu ) );
		}
		if ( !isPositive( b ) ) {
			throw new TypeError( format( 'invalid argument. Scale parameter must be a positive number. Value: `%s`.', b ) );
		}
	} else {
		mu = 0.0;
		b = 1.0;
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
	defineProperty( this, 'b', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return b;
		},
		'set': function set( value ) {
			if ( !isPositive( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a positive number. Value: `%s`.', value ) );
			}
			b = value;
		}
	});
	return this;
}

/**
* Laplace distribution differential entropy.
*
* @name entropy
* @memberof Laplace.prototype
* @type {number}
* @see [differential entropy]{@link https://en.wikipedia.org/wiki/Entropy_%28information_theory%29}
*
* @example
* var laplace = new Laplace( 4.0, 12.0 );
*
* var v = laplace.entropy;
* // returns ~4.178
*/
setReadOnlyAccessor( Laplace.prototype, 'entropy', function get() {
	return entropy( this.mu, this.b );
});

/**
* Laplace distribution excess kurtosis.
*
* @name kurtosis
* @memberof Laplace.prototype
* @type {number}
* @see [kurtosis]{@link https://en.wikipedia.org/wiki/Kurtosis}
*
* @example
* var laplace = new Laplace( 4.0, 12.0 );
*
* var v = laplace.kurtosis;
* // returns 3.0
*/
setReadOnlyAccessor( Laplace.prototype, 'kurtosis', function get() {
	return kurtosis( this.mu, this.b );
});

/**
* Laplace distribution expected value.
*
* @name mean
* @memberof Laplace.prototype
* @type {number}
* @see [expected value]{@link https://en.wikipedia.org/wiki/Expected_value}
*
* @example
* var laplace = new Laplace( 4.0, 12.0 );
*
* var v = laplace.mean;
* // returns 4.0
*/
setReadOnlyAccessor( Laplace.prototype, 'mean', function get() {
	return mean( this.mu, this.b );
});

/**
* Laplace distribution median.
*
* @name median
* @memberof Laplace.prototype
* @type {number}
* @see [median]{@link https://en.wikipedia.org/wiki/Median}
*
* @example
* var laplace = new Laplace( 4.0, 12.0 );
*
* var v = laplace.median;
* // returns 4.0
*/
setReadOnlyAccessor( Laplace.prototype, 'median', function get() {
	return median( this.mu, this.b );
});

/**
* Laplace distribution mode.
*
* @name mode
* @memberof Laplace.prototype
* @type {number}
* @see [mode]{@link https://en.wikipedia.org/wiki/Mode_%28statistics%29}
*
* @example
* var laplace = new Laplace( 4.0, 12.0 );
*
* var v = laplace.mode;
* // returns 4.0
*/
setReadOnlyAccessor( Laplace.prototype, 'mode', function get() {
	return mode( this.mu, this.b );
});

/**
* Laplace distribution skewness.
*
* @name skewness
* @memberof Laplace.prototype
* @type {number}
* @see [skewness]{@link https://en.wikipedia.org/wiki/Skewness}
*
* @example
* var laplace = new Laplace( 4.0, 12.0 );
*
* var v = laplace.skewness;
* // returns 0.0
*/
setReadOnlyAccessor( Laplace.prototype, 'skewness', function get() {
	return skewness( this.mu, this.b );
});

/**
* Laplace distribution standard deviation.
*
* @name stdev
* @memberof Laplace.prototype
* @type {PositiveNumber}
* @see [standard deviation]{@link https://en.wikipedia.org/wiki/Standard_deviation}
*
* @example
* var laplace = new Laplace( 4.0, 12.0 );
*
* var v = laplace.stdev;
* // returns ~16.971
*/
setReadOnlyAccessor( Laplace.prototype, 'stdev', function get() {
	return stdev( this.mu, this.b );
});

/**
* Laplace distribution variance.
*
* @name variance
* @memberof Laplace.prototype
* @type {PositiveNumber}
* @see [variance]{@link https://en.wikipedia.org/wiki/Variance}
*
* @example
* var laplace = new Laplace( 4.0, 12.0 );
*
* var v = laplace.variance;
* // returns 288.0
*/
setReadOnlyAccessor( Laplace.prototype, 'variance', function get() {
	return variance( this.mu, this.b );
});

/**
* Evaluates the cumulative distribution function (CDF).
*
* @name cdf
* @memberof Laplace.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated CDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var laplace = new Laplace( 2.0, 4.0 );
*
* var v = laplace.cdf( 0.5 );
* // returns ~0.344
*/
setReadOnly( Laplace.prototype, 'cdf', laplaceCDF );

/**
* Evaluates the natural logarithm of the cumulative distribution function (logCDF).
*
* @name logcdf
* @memberof Laplace.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logCDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var laplace = new Laplace( 2.0, 4.0 );
*
* var v = laplace.logcdf( 0.9 );
* // returns ~-0.968
*/
setReadOnly( Laplace.prototype, 'logcdf', laplaceLogCDF );

/**
* Evaluates the natural logarithm of the probability density function (logPDF).
*
* @name logpdf
* @memberof Laplace.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logPDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var laplace = new Laplace( 2.0, 4.0 );
*
* var v = laplace.logpdf( 0.8 );
* // returns ~-2.379
*/
setReadOnly( Laplace.prototype, 'logpdf', laplaceLogPDF );

/**
* Evaluates the moment-generating function (MGF).
*
* @name mgf
* @memberof Laplace.prototype
* @type {Function}
* @param {number} t - input value
* @returns {number} evaluated MGF
* @see [mgf]{@link https://en.wikipedia.org/wiki/Moment-generating_function}
*
* @example
* var laplace = new Laplace( 2.0, 4.0 );
*
* var v = laplace.mgf( 0.01 );
* // returns ~1.022
*/
setReadOnly( Laplace.prototype, 'mgf', laplaceMGF );

/**
* Evaluates the probability density function (PDF).
*
* @name pdf
* @memberof Laplace.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated PDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var laplace = new Laplace( 2.0, 4.0 );
*
* var v = laplace.pdf( 0.8 );
* // returns ~0.093
*/
setReadOnly( Laplace.prototype, 'pdf', laplacePDF );

/**
* Evaluates the quantile function.
*
* @name quantile
* @memberof Laplace.prototype
* @type {Function}
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
* @see [quantile function]{@link https://en.wikipedia.org/wiki/Quantile_function}
*
* @example
* var laplace = new Laplace( 2.0, 4.0 );
*
* var v = laplace.quantile( 0.5 );
* // returns 2.0
*/
setReadOnly( Laplace.prototype, 'quantile', laplaceQuantile );


// EXPORTS //

module.exports = Laplace;
