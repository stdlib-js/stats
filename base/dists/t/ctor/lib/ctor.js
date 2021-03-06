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
var entropy = require( './../../../../../base/dists/t/entropy' );
var kurtosis = require( './../../../../../base/dists/t/kurtosis' );
var mean = require( './../../../../../base/dists/t/mean' );
var median = require( './../../../../../base/dists/t/median' );
var mode = require( './../../../../../base/dists/t/mode' );
var skewness = require( './../../../../../base/dists/t/skewness' );
var stdev = require( './../../../../../base/dists/t/stdev' );
var variance = require( './../../../../../base/dists/t/variance' );
var cdf = require( './../../../../../base/dists/t/cdf' );
var logcdf = require( './../../../../../base/dists/t/logcdf' );
var logpdf = require( './../../../../../base/dists/t/logpdf' );
var pdf = require( './../../../../../base/dists/t/pdf' );
var quantile = require( './../../../../../base/dists/t/quantile' );
var format = require( '@stdlib/string/format' );


// FUNCTIONS //

/**
* Evaluates the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {Probability} evaluated CDF
*/
function tCDF( x ) {
	return cdf( x, this.v );
}

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logCDF
*/
function tLogCDF( x ) {
	return logcdf( x, this.v );
}

/**
* Evaluates the natural logarithm of the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logPDF
*/
function tLogPDF( x ) {
	return logpdf( x, this.v );
}

/**
* Evaluates the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated PDF
*/
function tPDF( x ) {
	return pdf( x, this.v );
}

/**
* Evaluates the quantile function.
*
* @private
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
*/
function tQuantile( p ) {
	return quantile( p, this.v );
}


// MAIN //

/**
* Student's t distribution constructor.
*
* @constructor
* @param {PositiveNumber} [v=1.0] - degrees of freedom
* @throws {TypeError} `v` must be a positive number
* @returns {T} distribution instance
*
* @example
* var t = new T( 1.0 );
*
* var y = t.cdf( 0.8 );
* // returns ~0.715
*
* var v = t.mode;
* // returns 0.0
*/
function T() {
	var v;
	if ( !(this instanceof T) ) {
		if ( arguments.length === 0 ) {
			return new T();
		}
		return new T( arguments[ 0 ] );
	}
	if ( arguments.length ) {
		v = arguments[ 0 ];
		if ( !isPositive( v ) ) {
			throw new TypeError( format( 'invalid argument. Rate parameter must be a positive number. Value: `%s`.', v ) );
		}
	} else {
		v = 1.0;
	}
	defineProperty( this, 'v', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return v;
		},
		'set': function set( value ) {
			if ( !isPositive( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a positive number. Value: `%s`.', value ) );
			}
			v = value;
		}
	});
	return this;
}

/**
* Student's t distribution differential entropy.
*
* @name entropy
* @memberof T.prototype
* @type {number}
* @see [differential entropy]{@link https://en.wikipedia.org/wiki/Entropy_%28information_theory%29}
*
* @example
* var t = new T( 4.0 );
*
* var v = t.entropy;
* // returns ~1.682
*/
setReadOnlyAccessor( T.prototype, 'entropy', function get() {
	return entropy( this.v );
});

/**
* Student's t distribution excess kurtosis.
*
* @name kurtosis
* @memberof T.prototype
* @type {number}
* @see [kurtosis]{@link https://en.wikipedia.org/wiki/Kurtosis}
*
* @example
* var t = new T( 4.0 );
*
* var v = t.kurtosis;
* // returns Infinity
*/
setReadOnlyAccessor( T.prototype, 'kurtosis', function get() {
	return kurtosis( this.v );
});

/**
* Student's t distribution expected value.
*
* @name mean
* @memberof T.prototype
* @type {number}
* @see [expected value]{@link https://en.wikipedia.org/wiki/Expected_value}
*
* @example
* var t = new T( 4.0 );
*
* var v = t.mean;
* // returns 0.0
*/
setReadOnlyAccessor( T.prototype, 'mean', function get() {
	return mean( this.v );
});

/**
* Student's t distribution median.
*
* @name median
* @memberof T.prototype
* @type {number}
* @see [median]{@link https://en.wikipedia.org/wiki/Median}
*
* @example
* var t = new T( 4.0 );
*
* var v = t.median;
* // returns 0.0
*/
setReadOnlyAccessor( T.prototype, 'median', function get() {
	return median( this.v );
});

/**
* Student's t distribution mode.
*
* @name mode
* @memberof T.prototype
* @type {number}
* @see [mode]{@link https://en.wikipedia.org/wiki/Mode_%28statistics%29}
*
* @example
* var t = new T( 4.0 );
*
* var v = t.mode;
* // returns 0.0
*/
setReadOnlyAccessor( T.prototype, 'mode', function get() {
	return mode( this.v );
});

/**
* Student's t distribution skewness.
*
* @name skewness
* @memberof T.prototype
* @type {number}
* @see [skewness]{@link https://en.wikipedia.org/wiki/Skewness}
*
* @example
* var t = new T( 4.0 );
*
* var v = t.skewness;
* // returns 0.0
*/
setReadOnlyAccessor( T.prototype, 'skewness', function get() {
	return skewness( this.v );
});

/**
* Student's t distribution standard deviation.
*
* @name stdev
* @memberof T.prototype
* @type {PositiveNumber}
* @see [standard deviation]{@link https://en.wikipedia.org/wiki/Standard_deviation}
*
* @example
* var t = new T( 4.0 );
*
* var v = t.stdev;
* // returns ~1.414
*/
setReadOnlyAccessor( T.prototype, 'stdev', function get() {
	return stdev( this.v );
});

/**
* Student's t distribution variance.
*
* @name variance
* @memberof T.prototype
* @type {PositiveNumber}
* @see [variance]{@link https://en.wikipedia.org/wiki/Variance}
*
* @example
* var t = new T( 4.0 );
*
* var v = t.variance;
* // returns 2.0
*/
setReadOnlyAccessor( T.prototype, 'variance', function get() {
	return variance( this.v );
});

/**
* Evaluates the cumulative distribution function (CDF).
*
* @name cdf
* @memberof T.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated CDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var t = new T( 2.0 );
*
* var v = t.cdf( 0.5 );
* // returns ~0.667
*/
setReadOnly( T.prototype, 'cdf', tCDF );

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF).
*
* @name logcdf
* @memberof T.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logCDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var t = new T( 2.0 );
*
* var v = t.logcdf( 0.5 );
* // returns ~-0.405
*/
setReadOnly( T.prototype, 'logcdf', tLogCDF );

/**
* Evaluates the natural logarithm of the probability density function (PDF).
*
* @name logpdf
* @memberof T.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logPDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var t = new T( 2.0 );
*
* var v = t.logpdf( 0.8 );
* // returns ~-1.456
*/
setReadOnly( T.prototype, 'logpdf', tLogPDF );

/**
* Evaluates the probability density function (PDF).
*
* @name pdf
* @memberof T.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated PDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var t = new T( 2.0 );
*
* var v = t.pdf( 0.8 );
* // returns ~0.233
*/
setReadOnly( T.prototype, 'pdf', tPDF );

/**
* Evaluates the quantile function.
*
* @name quantile
* @memberof T.prototype
* @type {Function}
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
* @see [quantile function]{@link https://en.wikipedia.org/wiki/Quantile_function}
*
* @example
* var t = new T( 2.0 );
*
* var v = t.quantile( 0.5 );
* // returns 0.0
*/
setReadOnly( T.prototype, 'quantile', tQuantile );


// EXPORTS //

module.exports = T;
