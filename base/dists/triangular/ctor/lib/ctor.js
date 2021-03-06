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
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var entropy = require( './../../../../../base/dists/triangular/entropy' );
var kurtosis = require( './../../../../../base/dists/triangular/kurtosis' );
var mean = require( './../../../../../base/dists/triangular/mean' );
var median = require( './../../../../../base/dists/triangular/median' );
var mode = require( './../../../../../base/dists/triangular/mode' );
var skewness = require( './../../../../../base/dists/triangular/skewness' );
var stdev = require( './../../../../../base/dists/triangular/stdev' );
var variance = require( './../../../../../base/dists/triangular/variance' );
var cdf = require( './../../../../../base/dists/triangular/cdf' );
var logcdf = require( './../../../../../base/dists/triangular/logcdf' );
var logpdf = require( './../../../../../base/dists/triangular/logpdf' );
var mgf = require( './../../../../../base/dists/triangular/mgf' );
var pdf = require( './../../../../../base/dists/triangular/pdf' );
var quantile = require( './../../../../../base/dists/triangular/quantile' );
var format = require( '@stdlib/string/format' );


// FUNCTIONS //

/**
* Evaluates the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {Probability} evaluated CDF
*/
function triangularCDF( x ) {
	return cdf( x, this.a, this.b, this.c );
}

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logCDF
*/
function triangularLogCDF( x ) {
	return logcdf( x, this.a, this.b, this.c );
}

/**
* Evaluates the natural logarithm of the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logPDF
*/
function triangularLogPDF( x ) {
	return logpdf( x, this.a, this.b, this.c );
}

/**
* Evaluates the moment-generating function (MGF).
*
* @private
* @param {number} t - input value
* @returns {number} evaluated MGF
*/
function triangularMGF( t ) {
	return mgf( t, this.a, this.b, this.c );
}

/**
* Evaluates the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated PDF
*/
function triangularPDF( x ) {
	return pdf( x, this.a, this.b, this.c );
}

/**
* Evaluates the quantile function.
*
* @private
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
*/
function triangularQuantile( p ) {
	return quantile( p, this.a, this.b, this.c );
}


// MAIN //

/**
* Triangular distribution constructor.
*
* @constructor
* @param {number} [a=0.0] - minimum support
* @param {number} [b=1.0] - maximum support
* @param {number} [c=0.5] - mode
* @throws {TypeError} `a` must be a number
* @throws {TypeError} `b` must be a number
* @throws {TypeError} `c` must be a number
* @throws {RangeError} `a` must be less than or equal to `b` and `c`
* @throws {RangeError} `b` must be greater than or equal to `a` and `b`
* @throws {RangeError} `c` must be greater than or equal to `a` and smaller than or equal to `b`
* @returns {Triangular} distribution instance
*
* @example
* var triangular = new Triangular( 0.0, 1.0, 0.25 );
*
* var y = triangular.cdf( 0.8 );
* // returns ~0.947
*
* var mu = triangular.mean;
* // returns ~0.417
*/
function Triangular() {
	var a;
	var b;
	var c;
	if ( !(this instanceof Triangular) ) {
		if ( arguments.length === 0 ) {
			return new Triangular();
		}
		return new Triangular( arguments[ 0 ], arguments[ 1 ], arguments[ 2 ] );
	}
	if ( arguments.length ) {
		a = arguments[ 0 ];
		b = arguments[ 1 ];
		c = arguments[ 2 ];
		if ( !isNumber( a ) || isnan( a ) ) {
			throw new TypeError( format( 'invalid argument. Minimum support must be a number. Value: `%s`.', a ) );
		}
		if ( !isNumber( b ) || isnan( b ) ) {
			throw new TypeError( format( 'invalid argument. Maximum support must be a number. Value: `%s`.', b ) );
		}
		if ( !isNumber( c ) || isnan( c ) ) {
			throw new TypeError( format( 'invalid argument. Mode must be a number. Value: `%s`.', c ) );
		}
		if ( !( a <= c && c <= b ) ) {
			throw new RangeError( format( 'invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.', 'a <= c <= b', a, b, c ) );
		}
	} else {
		a = 0.0;
		b = 1.0;
		c = 0.5;
	}
	defineProperty( this, 'a', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return a;
		},
		'set': function set( value ) {
			if ( !isNumber( value ) || isnan( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a number. Value: `%s`.', value ) );
			}
			if ( value > b || value > c ) {
				throw new RangeError( format( 'invalid assignment. Must be less than or equal to both the maximum support and the mode. Value: `%f`.', value ) );
			}
			a = value;
		}
	});
	defineProperty( this, 'b', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return b;
		},
		'set': function set( value ) {
			if ( !isNumber( value ) || isnan( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a number. Value: `%s`.', value ) );
			}
			if ( a > value || c > value ) {
				throw new RangeError( format( 'invalid assignment. Must be greater than or equal to both the minimum support and the mode. Value: `%f`.', value ) );
			}
			b = value;
		}
	});
	defineProperty( this, 'c', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return c;
		},
		'set': function set( value ) {
			if ( !isNumber( value ) || isnan( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a number. Value: `%s`.', value ) );
			}
			if ( a > value || b < value ) {
				throw new RangeError( format( 'invalid assignment. Must be greater than or equal to the minimum support and less than or equal to the maximum support. Value: `%f`.', value ) );
			}
			c = value;
		}
	});
	return this;
}

/**
* Triangular distribution differential entropy.
*
* @name entropy
* @memberof Triangular.prototype
* @type {number}
* @see [differential entropy]{@link https://en.wikipedia.org/wiki/Entropy_%28information_theory%29}
*
* @example
* var triangular = new Triangular( 4.0, 12.0, 10.0 );
*
* var v = triangular.entropy;
* // returns ~1.886
*/
setReadOnlyAccessor( Triangular.prototype, 'entropy', function get() {
	return entropy( this.a, this.b, this.c );
});

/**
* Triangular distribution excess kurtosis.
*
* @name kurtosis
* @memberof Triangular.prototype
* @type {number}
* @see [kurtosis]{@link https://en.wikipedia.org/wiki/Kurtosis}
*
* @example
* var triangular = new Triangular( 4.0, 12.0, 10.0 );
*
* var v = triangular.kurtosis;
* // returns -0.6
*/
setReadOnlyAccessor( Triangular.prototype, 'kurtosis', function get() {
	return kurtosis( this.a, this.b, this.c );
});

/**
* Triangular distribution expected value.
*
* @name mean
* @memberof Triangular.prototype
* @type {number}
* @see [expected value]{@link https://en.wikipedia.org/wiki/Expected_value}
*
* @example
* var triangular = new Triangular( 4.0, 12.0, 10.0 );
*
* var v = triangular.mean;
* // returns ~8.667
*/
setReadOnlyAccessor( Triangular.prototype, 'mean', function get() {
	return mean( this.a, this.b, this.c );
});

/**
* Triangular distribution median.
*
* @name median
* @memberof Triangular.prototype
* @type {number}
* @see [median]{@link https://en.wikipedia.org/wiki/Median}
*
* @example
* var triangular = new Triangular( 4.0, 12.0, 10.0 );
*
* var v = triangular.median;
* // returns ~8.899
*/
setReadOnlyAccessor( Triangular.prototype, 'median', function get() {
	return median( this.a, this.b, this.c );
});

/**
* Triangular distribution mode.
*
* @name mode
* @memberof Triangular.prototype
* @type {number}
* @see [mode]{@link https://en.wikipedia.org/wiki/Mode_%28statistics%29}
*
* @example
* var triangular = new Triangular( 4.0, 12.0, 10.0 );
*
* var v = triangular.mode;
* // returns 10.0
*/
setReadOnlyAccessor( Triangular.prototype, 'mode', function get() {
	return mode( this.a, this.b, this.c );
});

/**
* Triangular distribution skewness.
*
* @name skewness
* @memberof Triangular.prototype
* @type {number}
* @see [skewness]{@link https://en.wikipedia.org/wiki/Skewness}
*
* @example
* var triangular = new Triangular( 4.0, 12.0, 10.0 );
*
* var v = triangular.skewness;
* // returns ~-0.422
*/
setReadOnlyAccessor( Triangular.prototype, 'skewness', function get() {
	return skewness( this.a, this.b, this.c );
});

/**
* Triangular distribution standard deviation.
*
* @name stdev
* @memberof Triangular.prototype
* @type {PositiveNumber}
* @see [standard deviation]{@link https://en.wikipedia.org/wiki/Standard_deviation}
*
* @example
* var triangular = new Triangular( 4.0, 12.0, 10.0 );
*
* var v = triangular.stdev;
* // returns ~1.7
*/
setReadOnlyAccessor( Triangular.prototype, 'stdev', function get() {
	return stdev( this.a, this.b, this.c );
});

/**
* Triangular distribution variance.
*
* @name variance
* @memberof Triangular.prototype
* @type {PositiveNumber}
* @see [variance]{@link https://en.wikipedia.org/wiki/Variance}
*
* @example
* var triangular = new Triangular( 4.0, 12.0, 10.0 );
*
* var v = triangular.variance;
* // returns ~2.889
*/
setReadOnlyAccessor( Triangular.prototype, 'variance', function get() {
	return variance( this.a, this.b, this.c );
});

/**
* Evaluates the cumulative distribution function (CDF).
*
* @name cdf
* @memberof Triangular.prototype
* @type {Function}
* @param {number} x - input value
* @returns {Probability} evaluated CDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var triangular = new Triangular( 2.0, 4.0, 3.0 );
*
* var v = triangular.cdf( 3.0 );
* // returns 0.5
*/
setReadOnly( Triangular.prototype, 'cdf', triangularCDF );

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF).
*
* @name logcdf
* @memberof Triangular.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logCDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var triangular = new Triangular( 2.0, 4.0, 3.0 );
*
* var v = triangular.logcdf( 3.0 );
* // returns ~-0.693
*/
setReadOnly( Triangular.prototype, 'logcdf', triangularLogCDF );

/**
* Evaluates the natural logarithm of the probability density function (PDF).
*
* @name logpdf
* @memberof Triangular.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logPDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var triangular = new Triangular( 2.0, 4.0, 3.0 );
*
* var v = triangular.logpdf( 2.4 );
* // returns ~-0.916
*/
setReadOnly( Triangular.prototype, 'logpdf', triangularLogPDF );

/**
* Evaluates the moment-generating function (MGF).
*
* @name mgf
* @memberof Triangular.prototype
* @type {Function}
* @param {number} t - input value
* @returns {number} evaluated MGF
* @see [mgf]{@link https://en.wikipedia.org/wiki/Moment-generating_function}
*
* @example
* var triangular = new Triangular( 2.0, 4.0, 3.0 );
*
* var v = triangular.mgf( 0.5 );
* // returns ~4.576
*/
setReadOnly( Triangular.prototype, 'mgf', triangularMGF );

/**
* Evaluates the probability density function (PDF).
*
* @name pdf
* @memberof Triangular.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated PDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var triangular = new Triangular( 2.0, 4.0, 3.0 );
*
* var v = triangular.pdf( 2.4 );
* // returns ~0.40
*/
setReadOnly( Triangular.prototype, 'pdf', triangularPDF );

/**
* Evaluates the quantile function.
*
* @name quantile
* @memberof Triangular.prototype
* @type {Function}
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
* @see [quantile function]{@link https://en.wikipedia.org/wiki/Quantile_function}
*
* @example
* var triangular = new Triangular( 2.0, 4.0, 3.0 );
*
* var v = triangular.quantile( 0.5 );
* // returns 3.0
*/
setReadOnly( Triangular.prototype, 'quantile', triangularQuantile );


// EXPORTS //

module.exports = Triangular;
