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

'use strict';

// MODULES //

var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var setReadOnly = require( '@stdlib/utils/define-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils/define-read-only-accessor' );
var max = require( '@stdlib/math/base/special/max' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var roundn = require( '@stdlib/math/base/special/roundn' );
var format = require( '@stdlib/string/format' );
var tQuantile = require( './../../../base/dists/t/quantile' );
var Float64Array = require( '@stdlib/array/float64' );
var validate = require( './validate.js' );
var defaults = require( './defaults.js' );
var incrmminmax = require( './minmax.js' );
var incrmmeanstdev = require( './meanstdev.js' );


// MAIN //

/**
* Returns an accumulator function which incrementally performs a moving Grubbs' test for detecting outliers.
*
* @param {PositiveInteger} W - window size
* @param {Options} [options] - function options
* @param {number} [options.alpha=0.05] - significance level
* @param {string} [options.alternative='two-sided'] - alternative hypothesis ('two-sided', 'min', 'max')
* @throws {TypeError} first argument must be a positive integer
* @throws {RangeError} first argument must be greater than or equal to 3
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {RangeError} `alpha` option must be on the interval `[0,1]`
* @returns {Function} accumulator function
*
* @example
* var rnorm = require( '@stdlib/random/base/normal' );
*
* var accumulator;
* var opts;
* var i;
*
* accumulator = incrmgrubbs( 20, opts );
*
* for ( i = 0; i < 200; i++ ) {
*     res = accumulator( rnorm( 10.0, 5.0 ) );
* }
*/
function incrmgrubbs( W ) {
	var meanstdev;
	var results;
	var minmax;
	var opts;
	var err;
	var buf;
	var sig;
	var mm;
	var ms;
	var tc;
	var gc;
	var df;
	var N;
	var G;
	var i;

	if ( !isPositiveInteger( W ) ) {
		throw new TypeError( format( 'invalid argument. Window size must be a positive integer. Value: `%s`.', W ) );
	}
	if ( W < 3 ) {
		throw new RangeError( format( 'invalid argument. Window size must be greater than or equal to 3. Value: `%s`.', W ) );
	}
	opts = defaults();
	if ( arguments.length > 1 ) {
		err = validate( opts, arguments[ 1 ] );
		if ( err ) {
			throw err;
		}
	}
	buf = new Float64Array( W );
	df = W - 2;
	gc = 0.0;
	G = 0.0;
	N = 0;
	i = -1;

	// Compute the critical values:
	if ( opts.alternative === 'min' ) {
		sig = opts.alpha / W;
	} else if ( opts.alternative === 'max' ) {
		sig = opts.alpha / W;
	} else { // two-sided
		sig = opts.alpha / (2*W);
	}
	tc = tQuantile( 1.0-sig, df );
	gc = (W-1)*tc / sqrt( W*(df+(tc*tc)) );

	// Initialize statistics accumulators:
	mm = [ 0.0, 0.0 ];
	minmax = incrmminmax( mm, W, buf );

	ms = [ 0.0, 0.0 ];
	meanstdev = incrmmeanstdev( ms, W, buf );

	// Initialize the results object:
	results = {};
	setReadOnlyAccessor( results, 'rejected', getRejected );
	setReadOnly( results, 'alpha', opts.alpha );
	setReadOnly( results, 'criticalValue', gc );
	setReadOnlyAccessor( results, 'statistic', getStatistic );
	setReadOnly( results, 'df', df );
	setReadOnlyAccessor( results, 'mean', getMean );
	setReadOnlyAccessor( results, 'sd', getStDev );
	setReadOnlyAccessor( results, 'min', getMin );
	setReadOnlyAccessor( results, 'max', getMax );
	setReadOnly( results, 'alt', opts.alternative );
	setReadOnly( results, 'method', 'Grubbs\' Test' );
	setReadOnly( results, 'print', print );

	return accumulator;

	/**
	* If provided a value, the accumulator function returns updated Grubbs' test results. If not provided a value, the accumulator function returns the current Grubbs' test results.
	*
	* @private
	* @param {number} [x] - new value
	* @returns {(Object|null)} test results or null
	*/
	function accumulator( x ) {
		var md;
		if ( arguments.length === 0 ) {
			if ( N < W ) {
				return null;
			}
			return results;
		}
		N += 1;

		// Update the index for managing the circular buffer:
		i = (i+1) % W;

		// Update model statistics:
		meanstdev( x, i );
		minmax( x, i );

		// Insert the value into the buffer:
		buf[ i ] = x;

		if ( N < W ) {
			return null;
		}
		// Compute the test statistic...
		if ( opts.alternative === 'min' ) {
			G = ( ms[0]-mm[0] ) / ms[ 1 ];
		} else if ( opts.alternative === 'max' ) {
			G = ( mm[1]-ms[0] ) / ms[ 1 ];
		} else { // two-sided
			md = max( ms[0]-mm[0], mm[1]-ms[0] ); // maximum absolute deviation
			G = md / ms[ 1 ];
		}
		return results;
	}

	/**
	* Returns a `boolean` indicating whether the null hypothesis should be rejected.
	*
	* @private
	* @returns {boolean} boolean indicating whether the null hypothesis should be rejected
	*/
	function getRejected() {
		return ( G > gc );
	}

	/**
	* Returns the test statistic.
	*
	* @private
	* @returns {number} test statistic
	*/
	function getStatistic() {
		return G;
	}

	/**
	* Returns the sample mean.
	*
	* @private
	* @returns {number} sample mean
	*/
	function getMean() {
		return ms[ 0 ];
	}

	/**
	* Returns the corrected sample standard deviation.
	*
	* @private
	* @returns {number} corrected sample standard deviation
	*/
	function getStDev() {
		return ms[ 1 ];
	}

	/**
	* Returns the sample minimum.
	*
	* @private
	* @returns {number} sample minimum
	*/
	function getMin() {
		return mm[ 0 ];
	}

	/**
	* Returns the sample maximum.
	*
	* @private
	* @returns {number} sample maximum
	*/
	function getMax() {
		return mm[ 1 ];
	}

	/**
	* Pretty-print test results.
	*
	* @private
	* @param {Object} [options] - options object
	* @param {PositiveInteger} [options.digits=4] - number of digits after the decimal point
	* @param {boolean} [options.decision=true] - boolean indicating whether to print the test decision
	* @throws {TypeError} options argument must be an object
	* @throws {TypeError} must provide valid options
	* @returns {string} formatted output
	*/
	function print( options ) {
		var decision;
		var digits;
		var str;

		digits = opts.digits;
		decision = opts.decision;
		if ( arguments.length > 0 ) {
			if ( !isObject( options ) ) {
				throw new TypeError( format( 'invalid argument. Must provide an object. Value: `%s`.', options ) );
			}
			if ( hasOwnProp( options, 'digits' ) ) {
				if ( !isPositiveInteger( options.digits ) ) {
					throw new TypeError( format( 'invalid option. `%s` option must be a positive integer. Option: `%s`.', 'digits', options.digits ) );
				}
				digits = options.digits;
			}
			if ( hasOwnProp( options, 'decision' ) ) {
				if ( !isBoolean( options.decision ) ) {
					throw new TypeError( format( 'invalid option. `%s` option must be a boolean. Option: `%s`.', 'decision', options.decision ) );
				}
				decision = options.decision;
			}
		}
		str = '';
		str += results.method;
		str += '\n\n';
		str += 'Alternative hypothesis: ';
		if ( opts.alternative === 'max' ) {
			str += 'The maximum value (' + mm[ 1 ] + ') is an outlier';
		} else if ( opts.alternative === 'min' ) {
			str += 'The minimum value (' + mm[ 0 ] + ') is an outlier';
		} else { // two-sided
			str += 'The ';
			if ( ms[0]-mm[0] > mm[1]-ms[0] ) {
				str += 'minimum value (' + mm[ 0 ] + ')';
			} else {
				str += 'maximum value (' + mm[ 1 ] + ')';
			}
			str += ' is an outlier';
		}
		str += '\n\n';
		str += '    criticalValue: ' + roundn( gc, -digits ) + '\n';
		str += '    statistic: ' + roundn( G, -digits ) + '\n';
		str += '    df: ' + df + '\n';
		str += '\n';
		if ( decision ) {
			str += 'Test Decision: ';
			if ( G > gc ) {
				str += 'Reject null in favor of alternative at ' + (opts.alpha*100.0) + '% significance level';
			} else {
				str += 'Fail to reject null in favor of alternative at ' + (opts.alpha*100.0) + '% significance level';
			}
			str += '\n';
		}
		return str;
	}
}


// EXPORTS //

module.exports = incrmgrubbs;
