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

var Float64Array = require( '@stdlib/array/float64' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var mean = require( './../../../../strided/mean' );
var variance = require( './../../../../strided/variance' );
var stdev = require( './../../../../strided/stdev' );
var randGumbel = require( '@stdlib/random/base/gumbel' ).factory;
var gumbel = require( './../lib' );

// Set the parameters of the Gumbel distribution:
var mu = 30.0;   // Location parameter (e.g., average annual maximum temperature in °C)
var beta = 5.0;  // Scale parameter

// Simulate annual maximum daily temperatures over 1000 years:
var N = 1000;
var rgumbel = randGumbel( mu, beta );
var maxTemperatures = filledarrayBy( N, 'float64', rgumbel );

// Compute theoretical statistics of the Gumbel distribution:
var theoreticalMean = gumbel.mean( mu, beta);
var theoreticalVariance = gumbel.variance( mu, beta );
var theoreticalStdev = gumbel.stdev( mu, beta );

// Compute sample statistics of the simulated data:
var sampleMean = mean( N, maxTemperatures, 1 );
var sampleVariance = variance( N, 1, maxTemperatures, 1 ); // with Bessel's correction
var sampleStdev = stdev( N, 1, maxTemperatures, 1 ); // with Bessel's correction

// Display theoretical and sample statistics:
console.log( '--- Statistical Comparison ---\n' );
console.log( 'Mean:');
console.log( '  Theoretical: %d°C', theoreticalMean.toFixed(2) );
console.log( '  Sample:      %d°C\n', sampleMean.toFixed(2) );
console.log( 'Variance:');
console.log( '  Theoretical: %d°C²', theoreticalVariance.toFixed(2) );
console.log( '  Sample:      %d°C²\n', sampleVariance.toFixed(2) );
console.log( 'Standard Deviation:' );
console.log( '  Theoretical: %d°C', theoreticalStdev.toFixed(2) );
console.log( '  Sample:      %d°C\n', sampleStdev.toFixed(2) );

// Define quantile probabilities:
var p = new Float64Array( [ 0.25, 0.5, 0.75 ] );
var label = [ 'First Quartile', 'Median', 'Third Quartile' ];
var theoreticalQuantiles = new Float64Array([
	gumbel.quantile( p[0], mu, beta ),
	gumbel.quantile( p[1], mu, beta ),
	gumbel.quantile( p[2], mu, beta )
]);

console.log( 'Quantiles:' );
var i;
for ( i = 0; i < p.length; i++ ) {
	console.log( label[i] + ': %d°C', theoreticalQuantiles[i].toFixed(2) );
}
