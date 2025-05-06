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

/* eslint-disable max-len, no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var inherits = require( '@stdlib/utils/inherit' );
var stride2offset = require( '@stdlib/strided/base/stride2offset' );
var Memory = require( '@stdlib/wasm/memory' );
var arrays2ptrs = require( '@stdlib/wasm/base/arrays2ptrs' );
var strided2object = require( '@stdlib/wasm/base/strided2object' );
var Module = require( './module.js' );


// MAIN //

/**
* Routine constructor.
*
* @private
* @constructor
* @returns {Routine} routine instance
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* // Create a new routine:
* var dmeanors = new Routine();
*
* // Initialize the module:
* dmeanors.initializeSync();
*
* // Define a strided array:
* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
*
* // Perform operation:
* var v = dmeanors.main( 3, x, 1 );
* // returns ~0.3333
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* // Create a new routine:
* var dmeanors = new Routine();
*
* // Initialize the module:
* dmeanors.initializeSync();
*
* // Define a strided array:
* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* // Perform operation:
* var sum = dmeanors.ndarray( 4, x, 2, 1 );
* // returns 1.25
*/
function Routine() {
	if ( !( this instanceof Routine ) ) {
		return new Routine();
	}
	Module.call( this, new Memory({
		'initial': 0
	}));
	return this;
}

// Inherit from the parent constructor:
inherits( Routine, Module );

/**
* Computes the arithmetic mean of a double-precision floating-point strided array using ordinary recursive summation.
*
* @name main
* @memberof Routine.prototype
* @readonly
* @type {Function}
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - input array
* @param {integer} strideX - stride length
* @returns {number} arithmetic mean
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* // Create a new routine:
* var dmeanors = new Routine();
*
* // Initialize the module:
* dmeanors.initializeSync();
*
* // Define a strided array:
* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
*
* // Perform operation:
* var v = dmeanors.main( 3, x, 1 );
* // returns ~0.3333
*/
setReadOnly( Routine.prototype, 'main', function dmeanors( N, x, strideX ) {
	return this.ndarray( N, x, strideX, stride2offset( N, strideX ) );
});

/**
* Computes the arithmetic mean of a double-precision floating-point strided array using ordinary recursive summation and alternative indexing semantics.
*
* @name ndarray
* @memberof Routine.prototype
* @readonly
* @type {Function}
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {number} arithmetic mean
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* // Create a new routine:
* var dmeanors = new Routine();
*
* // Initialize the module:
* dmeanors.initializeSync();
*
* // Define a strided array:
* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* // Perform operation:
* var v = dmeanors.ndarray( 4, x, 2, 1 );
* // returns 1.25
*/
setReadOnly( Routine.prototype, 'ndarray', function dmeanors( N, x, strideX, offsetX ) {
	var ptrs;
	var p0;

	// Convert the input arrays to "pointers" in the module's memory:
	ptrs = arrays2ptrs( this, [
		strided2object( N, x, strideX, offsetX )
	]);
	p0 = ptrs[ 0 ];

	// Perform computation by calling the corresponding parent method:
	return Module.prototype.ndarray.call( this, N, p0.ptr, p0.stride, p0.offset );
});


// EXPORTS //

module.exports = Routine;
