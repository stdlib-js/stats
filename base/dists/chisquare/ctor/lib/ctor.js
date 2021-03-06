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
var entropy = require( './../../../../../base/dists/chisquare/entropy' );
var kurtosis = require( './../../../../../base/dists/chisquare/kurtosis' );
var mean = require( './../../../../../base/dists/chisquare/mean' );
var median = require( './../../../../../base/dists/chisquare/median' );
var mode = require( './../../../../../base/dists/chisquare/mode' );
var skewness = require( './../../../../../base/dists/chisquare/skewness' );
var stdev = require( './../../../../../base/dists/chisquare/stdev' );
var variance = require( './../../../../../base/dists/chisquare/variance' );
var cdf = require( './../../../../../base/dists/chisquare/cdf' );
var mgf = require( './../../../../../base/dists/chisquare/mgf' );
var pdf = require( './../../../../../base/dists/chisquare/pdf' );
var quantile = require( './../../../../../base/dists/chisquare/quantile' );
var format = require( '@stdlib/string/format' );


// FUNCTIONS //

/**
* Evaluates the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated CDF
*/
function chisquareCDF( x ) {
	return cdf( x, this.k );
}

/**
* Evaluates the moment-generating function (MGF).
*
* @private
* @param {number} t - input value
* @returns {number} evaluated MGF
*/
function chisquareMGF( t ) {
	return mgf( t, this.k );
}

/**
* Evaluates the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated PDF
*/
function chisquarePDF( x ) {
	return pdf( x, this.k );
}

/**
* Evaluates the quantile function.
*
* @private
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
*/
function chisquareQuantile( p ) {
	return quantile( p, this.k );
}


// MAIN //

/**
* Chi-squared distribution constructor.
*
* @constructor
* @param {PositiveNumber} [k=1.0] - degrees of freedom
* @throws {TypeError} `k` must be a positive number
* @returns {ChiSquare} distribution instance
*
* @example
* var chisquare = new ChiSquare( 1.0 );
*
* var y = chisquare.cdf( 0.8 );
* // returns ~0.629
*
* var v = chisquare.mode;
* // returns 0.0
*/
function ChiSquare() {
	var k;
	if ( !(this instanceof ChiSquare) ) {
		if ( arguments.length === 0 ) {
			return new ChiSquare();
		}
		return new ChiSquare( arguments[ 0 ] );
	}
	if ( arguments.length ) {
		k = arguments[ 0 ];
		if ( !isPositive( k ) ) {
			throw new TypeError( format( 'invalid argument. Rate parameter must be a positive number. Value: `%s`.', k ) );
		}
	} else {
		k = 1.0;
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
	return this;
}

/**
* Chi-squared distribution differential entropy.
*
* @name entropy
* @memberof ChiSquare.prototype
* @type {number}
* @see [differential entropy]{@link https://en.wikipedia.org/wiki/Entropy_%28information_theory%29}
*
* @example
* var chisquare = new ChiSquare( 4.0 );
*
* var v = chisquare.entropy;
* // returns ~2.27
*/
setReadOnlyAccessor( ChiSquare.prototype, 'entropy', function get() {
	return entropy( this.k );
});

/**
* Chi-squared distribution excess kurtosis.
*
* @name kurtosis
* @memberof ChiSquare.prototype
* @type {number}
* @see [kurtosis]{@link https://en.wikipedia.org/wiki/Kurtosis}
*
* @example
* var chisquare = new ChiSquare( 4.0 );
*
* var v = chisquare.kurtosis;
* // returns 3.0
*/
setReadOnlyAccessor( ChiSquare.prototype, 'kurtosis', function get() {
	return kurtosis( this.k );
});

/**
* Chi-squared distribution expected value.
*
* @name mean
* @memberof ChiSquare.prototype
* @type {number}
* @see [expected value]{@link https://en.wikipedia.org/wiki/Expected_value}
*
* @example
* var chisquare = new ChiSquare( 4.0 );
*
* var v = chisquare.mean;
* // returns 4.0
*/
setReadOnlyAccessor( ChiSquare.prototype, 'mean', function get() {
	return mean( this.k );
});

/**
* Chi-squared distribution median.
*
* @name median
* @memberof ChiSquare.prototype
* @type {number}
* @see [median]{@link https://en.wikipedia.org/wiki/Median}
*
* @example
* var chisquare = new ChiSquare( 4.0 );
*
* var v = chisquare.median;
* // returns ~3.357
*/
setReadOnlyAccessor( ChiSquare.prototype, 'median', function get() {
	return median( this.k );
});

/**
* Chi-squared distribution mode.
*
* @name mode
* @memberof ChiSquare.prototype
* @type {number}
* @see [mode]{@link https://en.wikipedia.org/wiki/Mode_%28statistics%29}
*
* @example
* var chisquare = new ChiSquare( 4.0 );
*
* var v = chisquare.mode;
* // returns 2.0
*/
setReadOnlyAccessor( ChiSquare.prototype, 'mode', function get() {
	return mode( this.k );
});

/**
* Chi-squared distribution skewness.
*
* @name skewness
* @memberof ChiSquare.prototype
* @type {number}
* @see [skewness]{@link https://en.wikipedia.org/wiki/Skewness}
*
* @example
* var chisquare = new ChiSquare( 4.0 );
*
* var v = chisquare.skewness;
* // returns ~1.414
*/
setReadOnlyAccessor( ChiSquare.prototype, 'skewness', function get() {
	return skewness( this.k );
});

/**
* Chi-squared distribution standard deviation.
*
* @name stdev
* @memberof ChiSquare.prototype
* @type {number}
* @see [standard deviation]{@link https://en.wikipedia.org/wiki/Standard_deviation}
*
* @example
* var chisquare = new ChiSquare( 4.0 );
*
* var v = chisquare.stdev;
* // returns ~2.828
*/
setReadOnlyAccessor( ChiSquare.prototype, 'stdev', function get() {
	return stdev( this.k );
});

/**
* Chi-squared distribution variance.
*
* @name variance
* @memberof ChiSquare.prototype
* @type {number}
* @see [variance]{@link https://en.wikipedia.org/wiki/Variance}
*
* @example
* var chisquare = new ChiSquare( 4.0 );
*
* var v = chisquare.variance;
* // returns 8.0
*/
setReadOnlyAccessor( ChiSquare.prototype, 'variance', function get() {
	return variance( this.k );
});

/**
* Evaluates the cumulative distribution function (CDF).
*
* @name cdf
* @memberof ChiSquare.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated CDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var chisquare = new ChiSquare( 2.0 );
*
* var v = chisquare.cdf( 0.5 );
* // returns ~0.221
*/
setReadOnly( ChiSquare.prototype, 'cdf', chisquareCDF );

/**
* Evaluates the moment-generating function (MGF).
*
* @name mgf
* @memberof ChiSquare.prototype
* @type {Function}
* @param {number} t - input value
* @returns {number} evaluated MGF
* @see [mgf]{@link https://en.wikipedia.org/wiki/Moment-generating_function}
*
* @example
* var chisquare = new ChiSquare( 2.0 );
*
* var v = chisquare.mgf( 0.2 );
* // returns ~1.667
*/
setReadOnly( ChiSquare.prototype, 'mgf', chisquareMGF );

/**
* Evaluates the probability density function (PDF).
*
* @name pdf
* @memberof ChiSquare.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated PDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var chisquare = new ChiSquare( 2.0 );
*
* var v = chisquare.pdf( 0.8 );
* // returns ~0.335
*/
setReadOnly( ChiSquare.prototype, 'pdf', chisquarePDF );

/**
* Evaluates the quantile function.
*
* @name quantile
* @memberof ChiSquare.prototype
* @type {Function}
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
* @see [quantile function]{@link https://en.wikipedia.org/wiki/Quantile_function}
*
* @example
* var chisquare = new ChiSquare( 2.0 );
*
* var v = chisquare.quantile( 0.5 );
* // returns ~1.386
*/
setReadOnly( ChiSquare.prototype, 'quantile', chisquareQuantile );


// EXPORTS //

module.exports = ChiSquare;
