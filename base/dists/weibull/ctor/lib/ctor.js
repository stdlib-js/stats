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
var entropy = require( './../../../../../base/dists/weibull/entropy' );
var kurtosis = require( './../../../../../base/dists/weibull/kurtosis' );
var mean = require( './../../../../../base/dists/weibull/mean' );
var median = require( './../../../../../base/dists/weibull/median' );
var mode = require( './../../../../../base/dists/weibull/mode' );
var skewness = require( './../../../../../base/dists/weibull/skewness' );
var stdev = require( './../../../../../base/dists/weibull/stdev' );
var variance = require( './../../../../../base/dists/weibull/variance' );
var cdf = require( './../../../../../base/dists/weibull/cdf' );
var logcdf = require( './../../../../../base/dists/weibull/logcdf' );
var logpdf = require( './../../../../../base/dists/weibull/logpdf' );
var mgf = require( './../../../../../base/dists/weibull/mgf' );
var pdf = require( './../../../../../base/dists/weibull/pdf' );
var quantile = require( './../../../../../base/dists/weibull/quantile' );
var format = require( '@stdlib/string/format' );


// FUNCTIONS //

/**
* Evaluates the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated CDF
*/
function weibullCDF( x ) {
	return cdf( x, this.k, this.lambda );
}

/**
* Evaluates the natural logarithm of the cumulative distribution function (logCDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logCDF
*/
function weibullLogCDF( x ) {
	return logcdf( x, this.k, this.lambda );
}

/**
* Evaluates the natural logarithm of the probability density function (logPDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logPDF
*/
function weibullLogPDF( x ) {
	return logpdf( x, this.k, this.lambda );
}

/**
* Evaluates the moment-generating function (MGF).
*
* @private
* @param {number} t - input value
* @returns {number} evaluated MGF
*/
function weibullMGF( t ) {
	return mgf( t, this.k, this.lambda );
}

/**
* Evaluates the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated PDF
*/
function weibullPDF( x ) {
	return pdf( x, this.k, this.lambda );
}

/**
* Evaluates the quantile function.
*
* @private
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
*/
function weibullQuantile( p ) {
	return quantile( p, this.k, this.lambda );
}


// MAIN //

/**
* Weibull distribution constructor.
*
* @constructor
* @param {PositiveNumber} [k=1.0] - shape parameter
* @param {PositiveNumber} [lambda=1.0] - scale parameter
* @throws {TypeError} `k` must be a positive number
* @throws {TypeError} `lambda` must be a positive number
* @returns {Weibull} distribution instance
*
* @example
* var weibull = new Weibull( 1.0, 1.0 );
*
* var y = weibull.cdf( 0.8 );
* // returns ~0.551
*
* var v = weibull.mode;
* // returns 0.0
*/
function Weibull() {
	var lambda;
	var k;
	if ( !(this instanceof Weibull) ) {
		if ( arguments.length === 0 ) {
			return new Weibull();
		}
		return new Weibull( arguments[ 0 ], arguments[ 1 ] );
	}
	if ( arguments.length ) {
		k = arguments[ 0 ];
		lambda = arguments[ 1 ];
		if ( !isPositive( k ) ) {
			throw new TypeError( format( 'invalid argument. Shape parameter must be a positive number. Value: `%s`.', k ) );
		}
		if ( !isPositive( lambda ) ) {
			throw new TypeError( format( 'invalid argument. Scale parameter must be a positive number. Value: `%s`.', lambda ) );
		}
	} else {
		k = 1.0;
		lambda = 1.0;
	}
	defineProperty( this, 'k', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return k;
		},
		'set': function set( value ) {
			if ( !isPositive( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a positive number. Value: `%s`.', value ) );
			}
			k = value;
		}
	});
	defineProperty( this, 'lambda', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return lambda;
		},
		'set': function set( value ) {
			if ( !isPositive( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a positive number. Value: `%s`.', value ) );
			}
			lambda = value;
		}
	});
	return this;
}

/**
* Weibull distribution differential entropy.
*
* @name entropy
* @memberof Weibull.prototype
* @type {number}
* @see [differential entropy]{@link https://en.wikipedia.org/wiki/Entropy_%28information_theory%29}
*
* @example
* var weibull = new Weibull( 4.0, 12.0 );
*
* var v = weibull.entropy;
* // returns ~2.532
*/
setReadOnlyAccessor( Weibull.prototype, 'entropy', function get() {
	return entropy( this.k, this.lambda );
});

/**
* Weibull distribution excess kurtosis.
*
* @name kurtosis
* @memberof Weibull.prototype
* @type {number}
* @see [kurtosis]{@link https://en.wikipedia.org/wiki/Kurtosis}
*
* @example
* var weibull = new Weibull( 4.0, 12.0 );
*
* var v = weibull.kurtosis;
* // returns ~-0.252
*/
setReadOnlyAccessor( Weibull.prototype, 'kurtosis', function get() {
	return kurtosis( this.k, this.lambda );
});

/**
* Weibull distribution expected value.
*
* @name mean
* @memberof Weibull.prototype
* @type {number}
* @see [expected value]{@link https://en.wikipedia.org/wiki/Expected_value}
*
* @example
* var weibull = new Weibull( 4.0, 12.0 );
*
* var v = weibull.mean;
* // returns ~10.877
*/
setReadOnlyAccessor( Weibull.prototype, 'mean', function get() {
	return mean( this.k, this.lambda );
});

/**
* Weibull distribution median.
*
* @name median
* @memberof Weibull.prototype
* @type {number}
* @see [median]{@link https://en.wikipedia.org/wiki/Median}
*
* @example
* var weibull = new Weibull( 4.0, 12.0 );
*
* var v = weibull.median;
* // returns ~10.949
*/
setReadOnlyAccessor( Weibull.prototype, 'median', function get() {
	return median( this.k, this.lambda );
});

/**
* Weibull distribution mode.
*
* @name mode
* @memberof Weibull.prototype
* @type {number}
* @see [mode]{@link https://en.wikipedia.org/wiki/Mode_%28statistics%29}
*
* @example
* var weibull = new Weibull( 4.0, 12.0 );
*
* var v = weibull.mode;
* // returns ~11.167
*/
setReadOnlyAccessor( Weibull.prototype, 'mode', function get() {
	return mode( this.k, this.lambda );
});

/**
* Weibull distribution skewness.
*
* @name skewness
* @memberof Weibull.prototype
* @type {number}
* @see [skewness]{@link https://en.wikipedia.org/wiki/Skewness}
*
* @example
* var weibull = new Weibull( 4.0, 12.0 );
*
* var v = weibull.skewness;
* // returns ~-0.087
*/
setReadOnlyAccessor( Weibull.prototype, 'skewness', function get() {
	return skewness( this.k, this.lambda );
});

/**
* Weibull distribution standard deviation.
*
* @name stdev
* @memberof Weibull.prototype
* @type {PositiveNumber}
* @see [standard deviation]{@link https://en.wikipedia.org/wiki/Standard_deviation}
*
* @example
* var weibull = new Weibull( 4.0, 12.0 );
*
* var v = weibull.stdev;
* // returns ~3.051
*/
setReadOnlyAccessor( Weibull.prototype, 'stdev', function get() {
	return stdev( this.k, this.lambda );
});

/**
* Weibull distribution variance.
*
* @name variance
* @memberof Weibull.prototype
* @type {PositiveNumber}
* @see [variance]{@link https://en.wikipedia.org/wiki/Variance}
*
* @example
* var weibull = new Weibull( 4.0, 12.0 );
*
* var v = weibull.variance;
* // returns ~9.311
*/
setReadOnlyAccessor( Weibull.prototype, 'variance', function get() {
	return variance( this.k, this.lambda );
});

/**
* Evaluates the cumulative distribution function (CDF).
*
* @name cdf
* @memberof Weibull.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated CDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var weibull = new Weibull( 2.0, 4.0 );
*
* var v = weibull.cdf( 0.5 );
* // returns ~0.016
*/
setReadOnly( Weibull.prototype, 'cdf', weibullCDF );

/**
* Evaluates the natural logarithm of the cumulative distribution function (logCDF).
*
* @name logcdf
* @memberof Weibull.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logCDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var weibull = new Weibull( 2.0, 4.0 );
*
* var v = weibull.logcdf( 0.8 );
* // returns ~-3.239
*/
setReadOnly( Weibull.prototype, 'logcdf', weibullLogCDF );

/**
* Evaluates the natural logarithm of the probability density function (logPDF).
*
* @name logpdf
* @memberof Weibull.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logPDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var weibull = new Weibull( 2.0, 4.0 );
*
* var v = weibull.logpdf( 0.8 );
* // returns ~-2.343
*/
setReadOnly( Weibull.prototype, 'logpdf', weibullLogPDF );

/**
* Evaluates the moment-generating function (MGF).
*
* @name mgf
* @memberof Weibull.prototype
* @type {Function}
* @param {number} t - input value
* @returns {number} evaluated MGF
* @see [mgf]{@link https://en.wikipedia.org/wiki/Moment-generating_function}
*
* @example
* var weibull = new Weibull( 2.0, 4.0 );
*
* var v = weibull.mgf( 0.5 );
* // returns ~9.878
*/
setReadOnly( Weibull.prototype, 'mgf', weibullMGF );

/**
* Evaluates the probability density function (PDF).
*
* @name pdf
* @memberof Weibull.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated PDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var weibull = new Weibull( 2.0, 4.0 );
*
* var v = weibull.pdf( 2.0 );
* // returns ~0.195
*/
setReadOnly( Weibull.prototype, 'pdf', weibullPDF );

/**
* Evaluates the quantile function.
*
* @name quantile
* @memberof Weibull.prototype
* @type {Function}
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
* @see [quantile function]{@link https://en.wikipedia.org/wiki/Quantile_function}
*
* @example
* var weibull = new Weibull( 2.0, 4.0 );
*
* var v = weibull.quantile( 0.5 );
* // returns ~3.33
*/
setReadOnly( Weibull.prototype, 'quantile', weibullQuantile );


// EXPORTS //

module.exports = Weibull;
