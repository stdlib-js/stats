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

'use strict';

var hasWebAssemblySupport = require( '@stdlib/assert/has-wasm-support' );
var Memory = require( '@stdlib/wasm/memory' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var gfillBy = require( '@stdlib/blas/ext/base/gfill-by' );
var Float64ArrayLE = require( '@stdlib/array/little-endian-float64' );
var dmeanors = require( './../lib' );

function main() {
	if ( !hasWebAssemblySupport() ) {
		console.error( 'Environment does not support WebAssembly.' );
		return;
	}
	// Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
	var mem = new Memory({
		'initial': 10,
		'maximum': 100
	});

	// Create a BLAS routine:
	var mod = new dmeanors.Module( mem );
	// returns <Module>

	// Initialize the routine:
	mod.initializeSync(); // eslint-disable-line node/no-sync

	// Specify a vector length:
	var N = 3;

	// Define a pointer (i.e., byte offset) for storing the input vector:
	var xptr = 0;

	// Create a typed array view over module memory:
	var x = new Float64ArrayLE( mod.memory.buffer, xptr, N );

	// Write values to module memory:
	gfillBy( N, x, 1, discreteUniform( -10.0, 10.0 ) );

	// Perform computation:
	var v = mod.ndarray( N, xptr, 1, 0 );

	// Print the result:
	console.log( v );
}

main();
