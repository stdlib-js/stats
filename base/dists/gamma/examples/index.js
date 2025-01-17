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

var gammaRandomFactory = require( '@stdlib/random/base/gamma' ).factory;
var filledarrayby = require( '@stdlib/array/filled-by' );
var Float64Array = require( '@stdlib/array/float64' );
var variance = require( './../../../../base/variance' );
var linspace = require( '@stdlib/array/base/linspace' );
var mean = require( './../../../../base/mean' );
var abs = require( '@stdlib/math/base/special/abs' );
var gamma = require( './../lib' );

// Define the shape and scale parameters:
var alpha = 3.0; // shape parameter (α)
var beta = 2.0;  // scale parameter (β)

// Generate an array of x values:
var x = linspace( 0.0, 20.0, 100 );

// Compute the PDF for each x:
var gammaPDF = gamma.pdf.factory( alpha, beta );
var pdf = filledarrayby( x.length, 'float64', gammaPDF );

// Compute the CDF for each x:
var gammaCDF = gamma.cdf.factory( alpha, beta );
var cdf = filledarrayby( x.length, 'float64', gammaCDF );

// Output the PDF and CDF values:
console.log( 'x values: %s', x );
console.log( 'PDF values: %s', pdf );
console.log( 'CDF values: %s', cdf );

// Compute statistical properties:
var theoreticalMean = gamma.mean( alpha, beta );
var theoreticalVariance = gamma.variance( alpha, beta );
var theoreticalSkewness = gamma.skewness( alpha, beta );
var theoreticalKurtosis = gamma.kurtosis( alpha, beta );

console.log( 'Theoretical Mean: %s', theoreticalMean );
console.log( 'Theoretical Variance: %s', theoreticalVariance );
console.log( 'Skewness: %s', theoreticalSkewness );
console.log( 'Kurtosis: %s', theoreticalKurtosis );

// Generate random samples from the gamma distribution:
var rgamma = gammaRandomFactory( alpha, beta );
var n = 300;
var samples = filledarrayby( n, 'float64', rgamma );

// Compute sample mean and variance:
var sampleMean = mean( n, samples, 1 );
var sampleVariance = variance( n, 1, samples, 1 );

console.log( 'Sample Mean: %s', sampleMean );
console.log( 'Sample Variance: %s', sampleVariance );

// Compare sample statistics to theoretical values:
console.log( 'Difference in Mean: %s', abs( theoreticalMean - sampleMean ) );
console.log( 'Difference in Variance: %s', abs( theoreticalVariance - sampleVariance ) );

// Demonstrate that the sum of `k` gamma variables is a gamma-distributed sum of `k` gamma(α, β) variables with same β is `gamma(k*α, β)`:
var k = 5;
var sumSamples = new Float64Array( n );

var sum;
var i;
var j;
for ( i = 0; i < sumSamples.length; i++ ) {
	sum = 0.0;
	for ( j = 0; j < k; j++ ) {
		sum += rgamma();
	}
	sumSamples[ i ] = sum;
}

// Theoretical parameters for the sum:
var sumAlpha = k * alpha;
var sumMean = gamma.mean( sumAlpha, beta );
var sumVariance = gamma.variance( sumAlpha, beta );

console.log( 'Sum Theoretical Mean: %s', sumMean );
console.log( 'Sum Theoretical Variance: %s', sumVariance );

// Compute sample mean and variance for the sum:
var sumSampleMean = mean( sumSamples.length, sumSamples, 1 );
var sumSampleVariance = variance( sumSamples.length, 1, sumSamples, 1 );

console.log( 'Sum Sample Mean: %s', sumSampleMean );
console.log( 'Sum Sample Variance: %s', sumSampleVariance );
