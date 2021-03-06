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

var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var defineProperty = require( '@stdlib/utils/define-property' );
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
var kurtosis = require( './../../../../../base/dists/hypergeometric/kurtosis' );
var mean = require( './../../../../../base/dists/hypergeometric/mean' );
var mode = require( './../../../../../base/dists/hypergeometric/mode' );
var skewness = require( './../../../../../base/dists/hypergeometric/skewness' );
var stdev = require( './../../../../../base/dists/hypergeometric/stdev' );
var variance = require( './../../../../../base/dists/hypergeometric/variance' );
var cdf = require( './../../../../../base/dists/hypergeometric/cdf' );
var logpmf = require( './../../../../../base/dists/hypergeometric/logpmf' );
var pmf = require( './../../../../../base/dists/hypergeometric/pmf' );
var quantile = require( './../../../../../base/dists/hypergeometric/quantile' );
var format = require( '@stdlib/string/format' );


// FUNCTIONS //

/**
* Evaluates the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {Probability} evaluated CDF
*/
function hypergeometricCDF( x ) {
	return cdf( x, this.N, this.K, this.n );
}

/**
* Evaluates the natural logarithm of the probability mass function (PMF).
*
* @private
* @param {number} x - input value
* @returns {Probability} evaluated PMF
*/
function hypergeometricLogPMF( x ) {
	return logpmf( x, this.N, this.K, this.n );
}

/**
* Evaluates the probability mass function (PMF).
*
* @private
* @param {number} x - input value
* @returns {Probability} evaluated PMF
*/
function hypergeometricPMF( x ) {
	return pmf( x, this.N, this.K, this.n );
}

/**
* Evaluates the quantile function.
*
* @private
* @param {Probability} p - input probability
* @returns {NonNegativeInteger} evaluated quantile function
*/
function hypergeometricQuantile( p ) {
	return quantile( p, this.N, this.K, this.n );
}


// MAIN //

/**
* Hypergeometric distribution constructor.
*
* @constructor
* @param {NonNegativeInteger} N - population size
* @param {NonNegativeInteger} K - subpopulation size
* @param {NonNegativeInteger} n - number of draws
* @throws {TypeError} `N` must be a nonnegative integer
* @throws {TypeError} `K` must be a nonnegative integer
* @throws {TypeError} `n` must be a nonnegative integer
* @throws {RangeError} `K` must not exceed `N`
* @throws {RangeError} `n` must not exceed `N`
* @returns {Hypergeometric} distribution instance
*
* @example
* var hypergeometric = new Hypergeometric( 10, 5, 7 );
*
* var y = hypergeometric.cdf( 0.8 );
* // returns 0.0
*
* var v = hypergeometric.mode;
* // returns 4.0
*/
function Hypergeometric( N, K, n ) {
	if ( !(this instanceof Hypergeometric) ) {
		return new Hypergeometric( N, K, n );
	}
	if ( !isNonNegativeInteger( N ) ) {
		throw new TypeError( format( 'invalid argument. Population size must be a nonnegative integer. Value: `%s`.', N ) );
	}
	if ( !isNonNegativeInteger( K ) ) {
		throw new TypeError( format( 'invalid argument. Subpopulation size must be a nonnegative integer. Value: `%s`.', K ) );
	}
	if ( !isNonNegativeInteger( n ) ) {
		throw new TypeError( format( 'invalid argument. Number of draws must be a nonnegative integer. Value: `%s`.', n ) );
	}
	if ( K > N ) {
		throw new RangeError( 'invalid arguments. Subpopulation size must be less than or equal to the population size.' );
	}
	if ( n > N ) {
		throw new RangeError( 'invalid arguments. Number of draws must be less than or equal to the population size.' );
	}
	defineProperty( this, 'N', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return N;
		},
		'set': function set( value ) {
			if ( !isNonNegativeInteger( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a nonnegative integer. Value: `%s`.', value ) );
			}
			if ( K > value ) {
				throw new RangeError( format( 'invalid assignment. Must be larger than or equal to %u. Value: `%u`.', K, value ) );
			}
			if ( n > value ) {
				throw new RangeError( format( 'invalid assignment. Must be larger than or equal to %u. Value: `%u`.', n, value ) );
			}
			N = value;
		}
	});
	defineProperty( this, 'K', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return K;
		},
		'set': function set( value ) {
			if ( !isNonNegativeInteger( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a nonnegative integer. Value: `%s`.', value ) );
			}
			if ( value > N ) {
				throw new RangeError( format( 'invalid assignment. Must be less than or equal to %u. Value: `%u`.', N, value ) );
			}
			K = value;
		}
	});
	defineProperty( this, 'n', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return n;
		},
		'set': function set( value ) {
			if ( !isNonNegativeInteger( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a nonnegative integer. Value: `%s`.', value ) );
			}
			if ( value > N ) {
				throw new RangeError( format( 'invalid assignment. Must be less than or equal to %u. Value: `%u`.', N, value ) );
			}
			n = value;
		}
	});
	return this;
}

/**
* Hypergeometric distribution excess kurtosis.
*
* @name kurtosis
* @memberof Hypergeometric.prototype
* @type {number}
* @see [kurtosis]{@link https://en.wikipedia.org/wiki/Kurtosis}
*
* @example
* var hypergeometric = new Hypergeometric( 20, 15, 5 );
*
* var v = hypergeometric.kurtosis;
* // returns ~-0.276
*/
setReadOnlyAccessor( Hypergeometric.prototype, 'kurtosis', function get() {
	return kurtosis( this.N, this.K, this.n );
});

/**
* Hypergeometric distribution expected value.
*
* @name mean
* @memberof Hypergeometric.prototype
* @type {number}
* @see [expected value]{@link https://en.wikipedia.org/wiki/Expected_value}
*
* @example
* var hypergeometric = new Hypergeometric( 20, 15, 5 );
*
* var v = hypergeometric.mean;
* // returns 3.75
*/
setReadOnlyAccessor( Hypergeometric.prototype, 'mean', function get() {
	return mean( this.N, this.K, this.n );
});

/**
* Hypergeometric distribution mode.
*
* @name mode
* @memberof Hypergeometric.prototype
* @type {NonNegativeInteger}
* @see [mode]{@link https://en.wikipedia.org/wiki/Mode_%28statistics%29}
*
* @example
* var hypergeometric = new Hypergeometric( 20, 15, 5 );
*
* var v = hypergeometric.mode;
* // returns 4.0
*/
setReadOnlyAccessor( Hypergeometric.prototype, 'mode', function get() {
	return mode( this.N, this.K, this.n );
});

/**
* Hypergeometric distribution skewness.
*
* @name skewness
* @memberof Hypergeometric.prototype
* @type {number}
* @see [skewness]{@link https://en.wikipedia.org/wiki/Skewness}
*
* @example
* var hypergeometric = new Hypergeometric( 20, 15, 5 );
*
* var v = hypergeometric.skewness;
* // returns ~-0.323
*/
setReadOnlyAccessor( Hypergeometric.prototype, 'skewness', function get() {
	return skewness( this.N, this.K, this.n );
});

/**
* Hypergeometric distribution standard deviation.
*
* @name stdev
* @memberof Hypergeometric.prototype
* @type {NonNegativeNumber}
* @see [standard deviation]{@link https://en.wikipedia.org/wiki/Standard_deviation}
*
* @example
* var hypergeometric = new Hypergeometric( 20, 15, 5 );
*
* var v = hypergeometric.stdev;
* // returns ~0.86
*/
setReadOnlyAccessor( Hypergeometric.prototype, 'stdev', function get() {
	return stdev( this.N, this.K, this.n );
});

/**
* Hypergeometric distribution variance.
*
* @name variance
* @memberof Hypergeometric.prototype
* @type {NonNegativeNumber}
* @see [variance]{@link https://en.wikipedia.org/wiki/Variance}
*
* @example
* var hypergeometric = new Hypergeometric( 20, 15, 5 );
*
* var v = hypergeometric.variance;
* // returns ~0.74
*/
setReadOnlyAccessor( Hypergeometric.prototype, 'variance', function get() {
	return variance( this.N, this.K, this.n );
});

/**
* Evaluates the cumulative distribution function (CDF).
*
* @name cdf
* @memberof Hypergeometric.prototype
* @type {Function}
* @param {number} x - input value
* @returns {Probability} evaluated CDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var hypergeometric = new Hypergeometric( 8, 2, 4 );
*
* var v = hypergeometric.cdf( 0.5 );
* // returns ~0.214
*/
setReadOnly( Hypergeometric.prototype, 'cdf', hypergeometricCDF );

/**
* Evaluates the natural logarithm of the probability density function (PMF).
*
* @name logpmf
* @memberof Hypergeometric.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logPMF
* @see [pmf]{@link https://en.wikipedia.org/wiki/Probability_mass_function}
*
* @example
* var hypergeometric = new Hypergeometric( 8, 2, 4 );
*
* var v = hypergeometric.logpmf( 2.0 );
* // returns ~-1.54
*/
setReadOnly( Hypergeometric.prototype, 'logpmf', hypergeometricLogPMF );

/**
* Evaluates the probability density function (PMF).
*
* @name pmf
* @memberof Hypergeometric.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated PMF
* @see [pmf]{@link https://en.wikipedia.org/wiki/Probability_mass_function}
*
* @example
* var hypergeometric = new Hypergeometric( 8, 2, 4 );
*
* var v = hypergeometric.pmf( 2.0 );
* // returns ~0.214
*/
setReadOnly( Hypergeometric.prototype, 'pmf', hypergeometricPMF );

/**
* Evaluates the quantile function.
*
* @name quantile
* @memberof Hypergeometric.prototype
* @type {Function}
* @param {Probability} p - input probability
* @returns {NonNegativeInteger} evaluated quantile function
* @see [quantile function]{@link https://en.wikipedia.org/wiki/Quantile_function}
*
* @example
* var hypergeometric = new Hypergeometric( 8, 2, 4 );
*
* var v = hypergeometric.quantile( 0.8 );
* // returns 2
*/
setReadOnly( Hypergeometric.prototype, 'quantile', hypergeometricQuantile );


// EXPORTS //

module.exports = Hypergeometric;
