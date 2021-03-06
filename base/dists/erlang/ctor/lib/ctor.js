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
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var isPositive = require( '@stdlib/assert/is-positive-number' ).isPrimitive;
var entropy = require( './../../../../../base/dists/erlang/entropy' );
var kurtosis = require( './../../../../../base/dists/erlang/kurtosis' );
var mean = require( './../../../../../base/dists/erlang/mean' );
var mode = require( './../../../../../base/dists/erlang/mode' );
var skewness = require( './../../../../../base/dists/erlang/skewness' );
var stdev = require( './../../../../../base/dists/erlang/stdev' );
var variance = require( './../../../../../base/dists/erlang/variance' );
var cdf = require( './../../../../../base/dists/erlang/cdf' );
var logpdf = require( './../../../../../base/dists/erlang/logpdf' );
var mgf = require( './../../../../../base/dists/erlang/mgf' );
var pdf = require( './../../../../../base/dists/erlang/pdf' );
var quantile = require( './../../../../../base/dists/erlang/quantile' );
var format = require( '@stdlib/string/format' );


// FUNCTIONS //

/**
* Evaluates the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated CDF
*/
function erlangCDF( x ) {
	return cdf( x, this.k, this.lambda );
}

/**
* Evaluates the natural logarithm of the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logPDF
*/
function erlangLogPDF( x ) {
	return logpdf( x, this.k, this.lambda );
}

/**
* Evaluates the moment-generating function (MGF).
*
* @private
* @param {number} t - input value
* @returns {number} evaluated MGF
*/
function erlangMGF( t ) {
	return mgf( t, this.k, this.lambda );
}

/**
* Evaluates the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated PDF
*/
function erlangPDF( x ) {
	return pdf( x, this.k, this.lambda );
}

/**
* Evaluates the quantile function.
*
* @private
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
*/
function erlangQuantile( p ) {
	return quantile( p, this.k, this.lambda );
}


// MAIN //

/**
* Erlang distribution constructor.
*
* @constructor
* @param {PositiveInteger} [k=1.0] - shape parameter
* @param {PositiveNumber} [lambda=1.0] - rate parameter
* @throws {TypeError} `k` must be a positive integer
* @throws {TypeError} `lambda` must be a positive number
* @returns {Erlang} distribution instance
*
* @example
* var erlang = new Erlang( 1.0, 1.0 );
*
* var y = erlang.cdf( 0.8 );
* // returns ~0.551
*
* var v = erlang.mode;
* // returns 0.0
*/
function Erlang() {
	var lambda;
	var k;
	if ( !(this instanceof Erlang) ) {
		if ( arguments.length === 0 ) {
			return new Erlang();
		}
		return new Erlang( arguments[ 0 ], arguments[ 1 ] );
	}
	if ( arguments.length ) {
		k = arguments[ 0 ];
		lambda = arguments[ 1 ];
		if ( !isPositiveInteger( k ) ) {
			throw new TypeError( format( 'invalid argument. Shape parameter must be a positive integer. Value: `%s`.', k ) );
		}
		if ( !isPositive( lambda ) ) {
			throw new TypeError( format( 'invalid argument. Rate parameter must be a positive number. Value: `%s`.', lambda ) );
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
			if ( !isPositiveInteger( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a positive integer. Value: `%s`.', value ) );
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
* Erlang distribution differential entropy.
*
* @name entropy
* @memberof Erlang.prototype
* @type {number}
* @see [differential entropy]{@link https://en.wikipedia.org/wiki/Entropy_%28information_theory%29}
*
* @example
* var erlang = new Erlang( 4, 12.0 );
*
* var v = erlang.entropy;
* // returns ~-0.462
*/
setReadOnlyAccessor( Erlang.prototype, 'entropy', function get() {
	return entropy( this.k, this.lambda );
});

/**
* Erlang distribution excess kurtosis.
*
* @name kurtosis
* @memberof Erlang.prototype
* @type {number}
* @see [kurtosis]{@link https://en.wikipedia.org/wiki/Kurtosis}
*
* @example
* var erlang = new Erlang( 4, 12.0 );
*
* var v = erlang.kurtosis;
* // returns 1.5
*/
setReadOnlyAccessor( Erlang.prototype, 'kurtosis', function get() {
	return kurtosis( this.k, this.lambda );
});

/**
* Erlang distribution expected value.
*
* @name mean
* @memberof Erlang.prototype
* @type {number}
* @see [expected value]{@link https://en.wikipedia.org/wiki/Expected_value}
*
* @example
* var erlang = new Erlang( 4, 12.0 );
*
* var v = erlang.mean;
* // returns ~0.333
*/
setReadOnlyAccessor( Erlang.prototype, 'mean', function get() {
	return mean( this.k, this.lambda );
});

/**
* Erlang distribution mode.
*
* @name mode
* @memberof Erlang.prototype
* @type {number}
* @see [mode]{@link https://en.wikipedia.org/wiki/Mode_%28statistics%29}
*
* @example
* var erlang = new Erlang( 4, 12.0 );
*
* var v = erlang.mode;
* // returns 0.25
*/
setReadOnlyAccessor( Erlang.prototype, 'mode', function get() {
	return mode( this.k, this.lambda );
});

/**
* Erlang distribution skewness.
*
* @name skewness
* @memberof Erlang.prototype
* @type {number}
* @see [skewness]{@link https://en.wikipedia.org/wiki/Skewness}
*
* @example
* var erlang = new Erlang( 4, 12.0 );
*
* var v = erlang.skewness;
* // returns 1.0
*/
setReadOnlyAccessor( Erlang.prototype, 'skewness', function get() {
	return skewness( this.k, this.lambda );
});

/**
* Erlang distribution standard deviation.
*
* @name stdev
* @memberof Erlang.prototype
* @type {number}
* @see [standard deviation]{@link https://en.wikipedia.org/wiki/Standard_deviation}
*
* @example
* var erlang = new Erlang( 4, 12.0 );
*
* var v = erlang.stdev;
* // returns ~0.167
*/
setReadOnlyAccessor( Erlang.prototype, 'stdev', function get() {
	return stdev( this.k, this.lambda );
});

/**
* Erlang distribution variance.
*
* @name variance
* @memberof Erlang.prototype
* @type {number}
* @see [variance]{@link https://en.wikipedia.org/wiki/Variance}
*
* @example
* var erlang = new Erlang( 4, 12.0 );
*
* var v = erlang.variance;
* // returns ~0.028
*/
setReadOnlyAccessor( Erlang.prototype, 'variance', function get() {
	return variance( this.k, this.lambda );
});

/**
* Evaluates the cumulative distribution function (CDF).
*
* @name cdf
* @memberof Erlang.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated CDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var erlang = new Erlang( 2, 4.0 );
*
* var v = erlang.cdf( 0.5 );
* // returns ~0.594
*/
setReadOnly( Erlang.prototype, 'cdf', erlangCDF );

/**
* Evaluates the natural logarithm of the probability density function (PDF).
*
* @name logpdf
* @memberof Erlang.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated PDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var erlang = new Erlang( 2, 4.0 );
*
* var v = erlang.logpdf( 2.0 );
* // returns ~-4.534
*/
setReadOnly( Erlang.prototype, 'logpdf', erlangLogPDF );

/**
* Evaluates the moment-generating function (MGF).
*
* @name mgf
* @memberof Erlang.prototype
* @type {Function}
* @param {number} t - input value
* @returns {number} evaluated MGF
* @see [mgf]{@link https://en.wikipedia.org/wiki/Moment-generating_function}
*
* @example
* var erlang = new Erlang( 2, 4.0 );
*
* var v = erlang.mgf( 0.5 );
* // returns ~1.306
*/
setReadOnly( Erlang.prototype, 'mgf', erlangMGF );

/**
* Evaluates the probability density function (PDF).
*
* @name pdf
* @memberof Erlang.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated PDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var erlang = new Erlang( 2, 4.0 );
*
* var v = erlang.pdf( 2.0 );
* // returns ~0.011
*/
setReadOnly( Erlang.prototype, 'pdf', erlangPDF );

/**
* Evaluates the quantile function.
*
* @name quantile
* @memberof Erlang.prototype
* @type {Function}
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
* @see [quantile function]{@link https://en.wikipedia.org/wiki/Quantile_function}
*
* @example
* var erlang = new Erlang( 2, 4.0 );
*
* var v = erlang.quantile( 0.5 );
* // returns ~0.42
*/
setReadOnly( Erlang.prototype, 'quantile', erlangQuantile );


// EXPORTS //

module.exports = Erlang;
