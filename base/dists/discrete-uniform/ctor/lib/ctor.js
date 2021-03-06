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
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var entropy = require( './../../../../../base/dists/discrete-uniform/entropy' );
var kurtosis = require( './../../../../../base/dists/discrete-uniform/kurtosis' );
var mean = require( './../../../../../base/dists/discrete-uniform/mean' );
var median = require( './../../../../../base/dists/discrete-uniform/median' );
var skewness = require( './../../../../../base/dists/discrete-uniform/skewness' );
var stdev = require( './../../../../../base/dists/discrete-uniform/stdev' );
var variance = require( './../../../../../base/dists/discrete-uniform/variance' );
var cdf = require( './../../../../../base/dists/discrete-uniform/cdf' );
var logcdf = require( './../../../../../base/dists/discrete-uniform/logcdf' );
var logpmf = require( './../../../../../base/dists/discrete-uniform/logpmf' );
var mgf = require( './../../../../../base/dists/discrete-uniform/mgf' );
var pmf = require( './../../../../../base/dists/discrete-uniform/pmf' );
var quantile = require( './../../../../../base/dists/discrete-uniform/quantile' );
var format = require( '@stdlib/string/format' );


// FUNCTIONS //

/**
* Evaluates the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {Probability} evaluated CDF
*/
function discreteUniformCDF( x ) {
	return cdf( x, this.a, this.b );
}

/**
* Evaluates the the natural logarithm of the cumulative distribution function (logCDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logCDF
*/
function discreteUniformLogCDF( x ) {
	return logcdf( x, this.a, this.b );
}

/**
* Evaluates the natural logarithm of the probability mass function (logPMF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logPMF
*/
function discreteUniformLogPMF( x ) {
	return logpmf( x, this.a, this.b );
}

/**
* Evaluates the moment-generating function (MGF).
*
* @private
* @param {number} t - input value
* @returns {number} evaluated MGF
*/
function discreteUniformMGF( t ) {
	return mgf( t, this.a, this.b );
}

/**
* Evaluates the probability mass function (PMF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated PMF
*/
function discreteUniformPMF( x ) {
	return pmf( x, this.a, this.b );
}

/**
* Evaluates the quantile function.
*
* @private
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
*/
function discreteUniformQuantile( p ) {
	return quantile( p, this.a, this.b );
}


// MAIN //

/**
* Discrete uniform distribution constructor.
*
* @constructor
* @param {integer} [a=0] - minimum support
* @param {integer} [b=1] - maximum support
* @throws {TypeError} `a` must be an integer
* @throws {TypeError} `b` must be an integer
* @throws {RangeError} `a` must be less than `b`
* @returns {DiscreteUniform} distribution instance
*
* @example
* var discreteUniform = new DiscreteUniform( 0, 1 );
*
* var y = discreteUniform.cdf( 0.8 );
* // returns 0.5
*
* var mu = discreteUniform.mean;
* // returns 0.5
*/
function DiscreteUniform() {
	var a;
	var b;
	if ( !(this instanceof DiscreteUniform) ) {
		if ( arguments.length === 0 ) {
			return new DiscreteUniform();
		}
		return new DiscreteUniform( arguments[ 0 ], arguments[ 1 ] );
	}
	if ( arguments.length ) {
		a = arguments[ 0 ];
		b = arguments[ 1 ];
		if ( !isInteger( a ) ) {
			throw new TypeError( format( 'invalid argument. Minimum support must be an integer. Value: `%s`.', a ) );
		}
		if ( !isInteger( b ) ) {
			throw new TypeError( format( 'invalid argument. Maximum support must be an integer. Value: `%s`.', b ) );
		}
		if ( a > b ) {
			throw new RangeError( format( 'invalid arguments. Minimum support must be less than or equal to maximum support. Value: `(%d, %d)`.', a, b ) );
		}
	} else {
		a = 0;
		b = 1;
	}
	defineProperty( this, 'a', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return a;
		},
		'set': function set( value ) {
			if ( !isInteger( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be an integer. Value: `%s`.', value ) );
			}
			if ( value > b ) {
				throw new RangeError( format( 'invalid assignment. Must be less than or equal to %u. Value: `%d`.', b, value ) );
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
			if ( !isInteger( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be an integer. Value: `%s`.', value ) );
			}
			if ( a > value ) {
				throw new RangeError( format( 'invalid assignment. Must be greater than or equal to %u. Value: `%s`.', a, value ) );
			}
			b = value;
		}
	});
	return this;
}

/**
* Discrete uniform distribution differential entropy.
*
* @name entropy
* @memberof DiscreteUniform.prototype
* @type {number}
* @see [differential entropy]{@link https://en.wikipedia.org/wiki/Entropy_%28information_theory%29}
*
* @example
* var discreteUniform = new DiscreteUniform( 4, 12 );
*
* var v = discreteUniform.entropy;
* // returns ~2.197
*/
setReadOnlyAccessor( DiscreteUniform.prototype, 'entropy', function get() {
	return entropy( this.a, this.b );
});

/**
* Discrete uniform distribution excess kurtosis.
*
* @name kurtosis
* @memberof DiscreteUniform.prototype
* @type {number}
* @see [kurtosis]{@link https://en.wikipedia.org/wiki/Kurtosis}
*
* @example
* var discreteUniform = new DiscreteUniform( 4, 12 );
*
* var v = discreteUniform.kurtosis;
* // returns -1.23
*/
setReadOnlyAccessor( DiscreteUniform.prototype, 'kurtosis', function get() {
	return kurtosis( this.a, this.b );
});

/**
* Discrete uniform distribution expected value.
*
* @name mean
* @memberof DiscreteUniform.prototype
* @type {number}
* @see [expected value]{@link https://en.wikipedia.org/wiki/Expected_value}
*
* @example
* var discreteUniform = new DiscreteUniform( 4, 12 );
*
* var v = discreteUniform.mean;
* // returns 8.0
*/
setReadOnlyAccessor( DiscreteUniform.prototype, 'mean', function get() {
	return mean( this.a, this.b );
});

/**
* Discrete uniform distribution median.
*
* @name median
* @memberof DiscreteUniform.prototype
* @type {number}
* @see [median]{@link https://en.wikipedia.org/wiki/Median}
*
* @example
* var discreteUniform = new DiscreteUniform( 4, 12 );
*
* var v = discreteUniform.median;
* // returns 8.0
*/
setReadOnlyAccessor( DiscreteUniform.prototype, 'median', function get() {
	return median( this.a, this.b );
});

/**
* Discrete uniform distribution skewness.
*
* @name skewness
* @memberof DiscreteUniform.prototype
* @type {number}
* @see [skewness]{@link https://en.wikipedia.org/wiki/Skewness}
*
* @example
* var discreteUniform = new DiscreteUniform( 4, 12 );
*
* var v = discreteUniform.skewness;
* // returns 0.0
*/
setReadOnlyAccessor( DiscreteUniform.prototype, 'skewness', function get() {
	return skewness( this.a, this.b );
});

/**
* Discrete uniform distribution standard deviation.
*
* @name stdev
* @memberof DiscreteUniform.prototype
* @type {PositiveNumber}
* @see [standard deviation]{@link https://en.wikipedia.org/wiki/Standard_deviation}
*
* @example
* var discreteUniform = new DiscreteUniform( 4, 12 );
*
* var v = discreteUniform.stdev;
* // returns ~2.582
*/
setReadOnlyAccessor( DiscreteUniform.prototype, 'stdev', function get() {
	return stdev( this.a, this.b );
});

/**
* Discrete uniform distribution variance.
*
* @name variance
* @memberof DiscreteUniform.prototype
* @type {PositiveNumber}
* @see [variance]{@link https://en.wikipedia.org/wiki/Variance}
*
* @example
* var discreteUniform = new DiscreteUniform( 4, 12 );
*
* var v = discreteUniform.variance;
* // returns ~6.667
*/
setReadOnlyAccessor( DiscreteUniform.prototype, 'variance', function get() {
	return variance( this.a, this.b );
});

/**
* Evaluates the cumulative distribution function (CDF).
*
* @name cdf
* @memberof DiscreteUniform.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated CDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var discreteUniform = new DiscreteUniform( 2, 4 );
*
* var v = discreteUniform.cdf( 3.0 );
* // returns ~0.667
*/
setReadOnly( DiscreteUniform.prototype, 'cdf', discreteUniformCDF );

/**
* Evaluates the natural logarithm of the cumulative distribution function (logCDF).
*
* @name logcdf
* @memberof DiscreteUniform.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logCDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var discreteUniform = new DiscreteUniform( 2, 4 );
*
* var v = discreteUniform.logcdf( 2.5 );
* // returns ~-1.099
*/
setReadOnly( DiscreteUniform.prototype, 'logcdf', discreteUniformLogCDF );

/**
* Evaluates the natural logarithm of the probability mass function (logPMF).
*
* @name logpmf
* @memberof DiscreteUniform.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logPMF
* @see [pmf]{@link https://en.wikipedia.org/wiki/Probability_mass_function}
*
* @example
* var discreteUniform = new DiscreteUniform( 2, 4 );
*
* var v = discreteUniform.logpmf( 3.0 );
* // returns ~-1.099
*/
setReadOnly( DiscreteUniform.prototype, 'logpmf', discreteUniformLogPMF );

/**
* Evaluates the moment-generating function (MGF).
*
* @name mgf
* @memberof DiscreteUniform.prototype
* @type {Function}
* @param {number} t - input value
* @returns {number} evaluated MGF
* @see [mgf]{@link https://en.wikipedia.org/wiki/Moment-generating_function}
*
* @example
* var discreteUniform = new DiscreteUniform( 2, 4 );
*
* var v = discreteUniform.mgf( 0.5 );
* // returns ~4.863
*/
setReadOnly( DiscreteUniform.prototype, 'mgf', discreteUniformMGF );

/**
* Evaluates the probability mass function (PMF).
*
* @name pmf
* @memberof DiscreteUniform.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated PDF
* @see [pmf]{@link https://en.wikipedia.org/wiki/Probability_mass_function}
*
* @example
* var discreteUniform = new DiscreteUniform( 2, 4 );
*
* var v = discreteUniform.pmf( 3.0 );
* // returns ~0.333
*/
setReadOnly( DiscreteUniform.prototype, 'pmf', discreteUniformPMF );

/**
* Evaluates the quantile function.
*
* @name quantile
* @memberof DiscreteUniform.prototype
* @type {Function}
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
* @see [quantile function]{@link https://en.wikipedia.org/wiki/Quantile_function}
*
* @example
* var discreteUniform = new DiscreteUniform( 2, 4 );
*
* var v = discreteUniform.quantile( 0.6 );
* // returns 3.0
*/
setReadOnly( DiscreteUniform.prototype, 'quantile', discreteUniformQuantile );


// EXPORTS //

module.exports = DiscreteUniform;
