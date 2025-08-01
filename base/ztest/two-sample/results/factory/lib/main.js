/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

/* eslint-disable no-invalid-this, no-restricted-syntax */

'use strict';

// MODULES //

var isArrayBuffer = require( '@stdlib/assert/is-arraybuffer' );
var isObject = require( '@stdlib/assert/is-object' );
var hasProp = require( '@stdlib/assert/has-property' );
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var setReadWriteAccessor = require( '@stdlib/utils/define-nonenumerable-read-write-accessor' );
var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
var propertyDescriptor = require( '@stdlib/utils/property-descriptor' );
var contains = require( '@stdlib/array/base/assert/contains' ).factory;
var join = require( '@stdlib/array/base/join' );
var objectAssign = require( '@stdlib/object/assign' );
var inherit = require( '@stdlib/utils/inherit' );
var resolveStr = require( './../../../../../../base/ztest/alternative-resolve-str' );
var resolveEnum = require( './../../../../../../base/ztest/alternative-resolve-enum' );
var structFactory = require( './../../../../../../base/ztest/two-sample/results/struct-factory' );
var res2json = require( './../../../../../../base/ztest/two-sample/results/to-json' );
var res2str = require( './../../../../../../base/ztest/two-sample/results/to-string' );
var format = require( '@stdlib/string/format' );


// VARIABLES //

var DTYPES = [
	'float64',
	'float32'
];

var isDataType = contains( DTYPES );


// MAIN //

/**
* Returns a constructor for creating a two-sample Z-test results object.
*
* @param {string} dtype - storage data type for floating-point values
* @throws {TypeError} first argument must be a supported data type
* @returns {Function} constructor
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var Results = factory( 'float64' );
*
* var results = new Results();
* // returns <Results>
*
* results.alternative = 'two-sided';
* results.alpha = 0.05;
* results.nullValue = 0.0;
* results.pValue = 0.0132;
* results.statistic = 2.4773;
* results.xmean = 3.7561;
* results.ymean = 3.0129;
* results.ci = new Float64Array( [ 0.1552, 1.3311 ] );
* results.rejected = true;
*
* var str = results.toString();
* // returns <string>
*/
function factory( dtype ) {
	var alternativeDescriptor;
	var Struct;

	if ( !isDataType( dtype ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be one of the following: "%s". Value: `%s`.', join( DTYPES, ', ' ), dtype ) );
	}

	// Create a struct constructor:
	Struct = structFactory( dtype );

	// Cache a reference to a property descriptor on the parent prototype so that we can intercept the return value:
	alternativeDescriptor = propertyDescriptor( Struct.prototype, 'alternative' );

	/**
	* Returns a two-sample Z-test results object.
	*
	* @private
	* @constructor
	* @param {(ArrayBuffer|Object)} [arg] - underlying byte buffer or a data object
	* @param {NonNegativeInteger} [byteOffset] - byte offset
	* @param {NonNegativeInteger} [byteLength] - maximum byte length
	* @throws {TypeError} first argument must be an ArrayBuffer or a data object
	* @returns {Results} results object
	*/
	function Results( arg, byteOffset, byteLength ) {
		var nargs;
		var args;
		var v;
		var i;

		nargs = arguments.length;
		if ( !( this instanceof Results ) ) {
			if ( nargs === 0 ) {
				return new Results();
			}
			if ( nargs === 1 ) {
				return new Results( arg );
			}
			if ( nargs === 2 ) {
				return new Results( arg, byteOffset );
			}
			return new Results( arg, byteOffset, byteLength );
		}
		args = [];
		if ( nargs > 0 ) {
			if ( isArrayBuffer( arg ) ) {
				for ( i = 0; i < nargs; i++ ) {
					args.push( arguments[ i ] );
				}
			} else if ( isObject( arg ) ) {
				if ( hasProp( arg, 'alternative' ) ) {
					args.push( objectAssign( {}, arg ) );
					v = resolveEnum( args[ 0 ].alternative );
					args[ 0 ].alternative = ( v === null ) ? NaN : v;
				}
			} else {
				throw new TypeError( format( 'invalid argument. First argument must be an ArrayBuffer or a data object. Value: `%s`.', arg ) );
			}
		}
		// Call the parent constructor...
		Struct.apply( this, args );
		return this;
	}

	/*
	* Inherit from the parent constructor.
	*/
	inherit( Results, Struct );

	/**
	* Constructor name.
	*
	* @private
	* @name name
	* @memberof Results
	* @readonly
	* @type {string}
	*/
	setReadOnly( Results, 'name', Struct.name );

	/**
	* Alignment.
	*
	* @private
	* @name alignment
	* @memberof Results
	* @readonly
	* @type {PositiveInteger}
	*/
	setReadOnly( Results, 'alignment', Struct.alignment );

	/**
	* Size (in bytes) of the `struct`.
	*
	* @private
	* @name byteLength
	* @memberof Results
	* @readonly
	* @type {PositiveInteger}
	*/
	setReadOnly( Results, 'byteLength', Struct.byteLength );

	/**
	* Returns a list of `struct` fields.
	*
	* @private
	* @name fields
	* @memberof Results
	* @readonly
	* @type {Array<string>}
	*/
	setReadOnlyAccessor( Results, 'fields', function get() {
		return Struct.fields;
	});

	/**
	* Returns a string corresponding to the `struct` layout.
	*
	* @private
	* @name layout
	* @memberof Results
	* @readonly
	* @type {string}
	*/
	setReadOnlyAccessor( Results, 'layout', function get() {
		return Struct.layout;
	});

	/**
	* Returns the underlying byte buffer of a `struct`.
	*
	* @private
	* @name bufferOf
	* @memberof Results
	* @readonly
	* @type {Function}
	* @param {Object} obj - struct instance
	* @throws {TypeError} must provide a `struct` instance
	* @returns {ArrayBuffer} underlying byte buffer
	*/
	setReadOnly( Results, 'bufferOf', Struct.bufferOf );

	/**
	* Returns the length, in bytes, of the value specified by the provided field name.
	*
	* @private
	* @name byteLengthOf
	* @memberof Results
	* @readonly
	* @type {Function}
	* @param {string} name - field name
	* @throws {Error} struct must have at least one field
	* @throws {TypeError} must provide a recognized field name
	* @returns {NonNegativeInteger} byte length
	*/
	setReadOnly( Results, 'byteLengthOf', Struct.byteLengthOf );

	/**
	* Returns the offset, in bytes, from the beginning of a `struct` to the value specified by the provided field name.
	*
	* @private
	* @name byteOffsetOf
	* @memberof Results
	* @readonly
	* @type {Function}
	* @param {string} name - field name
	* @throws {Error} struct must have at least one field
	* @throws {TypeError} must provide a recognized field name
	* @returns {NonNegativeInteger} byte offset
	*/
	setReadOnly( Results, 'byteOffsetOf', Struct.byteOffsetOf );

	/**
	* Returns the description associated with a provided field name.
	*
	* @private
	* @name descriptionOf
	* @memberof Results
	* @readonly
	* @type {Function}
	* @param {string} name - field name
	* @throws {Error} struct must have at least one field
	* @throws {TypeError} must provide a recognized field name
	* @returns {string} description
	*/
	setReadOnly( Results, 'descriptionOf', Struct.descriptionOf );

	/**
	* Returns a boolean indicating whether a provided value is a `struct` instance.
	*
	* @private
	* @name isStruct
	* @memberof Results
	* @readonly
	* @type {Function}
	* @param {*} value - input valueAdd commentMore actions
	* @returns {boolean} boolean indicating whether a value is a `struct` instance
	*/
	setReadOnly( Results, 'isStruct', Struct.isStruct );

	/**
	* Returns the type associated with a provided field name.
	*
	* @private
	* @name typeOf
	* @memberof Results
	* @readonly
	* @type {Function}
	* @param {string} name - field nameAdd commentMore actions
	* @throws {Error} struct must have at least one field
	* @throws {TypeError} must provide a recognized field name
	* @returns {(string|Object)} type
	*/
	setReadOnly( Results, 'typeOf', Struct.typeOf );

	/**
	* Returns the underlying byte buffer of a `struct` as a `DataView`.
	*
	* @private
	* @name viewOf
	* @memberof Results
	* @readonly
	* @type {Function}
	* @param {Object} obj - struct instance
	* @throws {TypeError} must provide a `struct` instance
	* @returns {DataView} view of underlying byte buffer
	*/
	setReadOnly( Results, 'viewOf', Struct.viewOf );

	/**
	* Test name.
	*
	* @private
	* @name method
	* @memberof Results.prototype
	* @type {string}
	* @default 'Two-sample Z-test'
	*/
	setReadOnly( Results.prototype, 'method', 'Two-sample Z-test' );

	/**
	* Alternative hypothesis.
	*
	* @private
	* @name alternative
	* @memberof Results.prototype
	* @type {string}
	*/
	setReadWriteAccessor( Results.prototype, 'alternative', getAlternative, setAlternative );

	/**
	* Serializes a results object as a string.
	*
	* ## Notes
	*
	* -   Example output:
	*
	*     ```text
	*
	*     Two-sample Z-test
	*
	*     Alternative hypothesis: True difference in means is less than 1.0
	*
	*        pValue: 0.0406
	*        statistic: 9.9901
	*        95% confidence interval: [9.7821, 10.4451]
	*
	*     Test Decision: Reject null in favor of alternative at 5% significance level
	*
	*     ```
	*
	* @private
	* @name toString
	* @memberof Results.prototype
	* @type {Function}
	* @param {Options} [opts] - options object
	* @param {PositiveInteger} [opts.digits=4] - number of digits after the decimal point
	* @param {boolean} [opts.decision=true] - boolean indicating whether to show the test decision
	* @throws {TypeError} options argument must be an object
	* @throws {TypeError} must provide valid options
	* @returns {string} serialized results
	*/
	setReadOnly( Results.prototype, 'toString', function toString( opts ) {
		if ( arguments.length ) {
			return res2str( this, opts );
		}
		return res2str( this );
	});

	/**
	* Serializes a results object as a JSON object.
	*
	* ## Notes
	*
	* -   `JSON.stringify()` implicitly calls this method when stringifying a `Results` instance.
	*
	* @private
	* @name toJSON
	* @memberof Results.prototype
	* @type {Function}
	* @returns {Object} serialized object
	*/
	setReadOnly( Results.prototype, 'toJSON', function toJSON() {
		return res2json( this );
	});

	/**
	* Returns a DataView of a results object.
	*
	* @private
	* @name toDataView
	* @memberof Results.prototype
	* @type {Function}
	* @returns {DataView} DataView
	*/
	setReadOnly( Results.prototype, 'toDataView', function toDataView() {
		return Struct.viewOf( this );
	});

	return Results;

	/**
	* Returns the alternative hypothesis.
	*
	* @private
	* @returns {string} alternative hypothesis
	*/
	function getAlternative() {
		return resolveStr( alternativeDescriptor.get.call( this ) );
	}

	/**
	* Sets the alternative hypothesis.
	*
	* @private
	* @param {string} value - alternative hypothesis
	*/
	function setAlternative( value ) {
		alternativeDescriptor.set.call( this, resolveEnum( value ) );
	}
}


// EXPORTS //

module.exports = factory;
