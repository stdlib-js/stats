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

var geometricRandomFactory = require( '@stdlib/random/base/geometric' ).factory;
var negativeBinomial = require( './../../../../base/dists/negative-binomial' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var variance = require( './../../../../base/variance' );
var linspace = require( '@stdlib/array/base/linspace' );
var mean = require( './../../../../base/mean' );
var abs = require( '@stdlib/math/base/special/abs' );
var geometric = require( './../lib' );

// Define the success probability:
var p = 0.3; // Probability of success on each trial

// Generate an array of x values (number of failures before first success):
var x = linspace( 0, 10, 11 ); // Geometric distribution is discrete

// Compute the PMF for each x:
var geometricPMF = geometric.pmf.factory( p );
var pmf = filledarrayBy( x.length, 'float64', geometricPMF );

// Compute the CDF for each x:
var geometricCDF = geometric.cdf.factory( p );
var cdf = filledarrayBy( x.length, 'float64', geometricCDF );

// Output the PMF and CDF values:
console.log( 'x values: ', x );
console.log( 'PMF values: ', pmf );
console.log( 'CDF values: ', cdf );

// Compute statistical properties:
var theoreticalMean = geometric.mean( p );
var theoreticalVariance = geometric.variance( p );
var theoreticalSkewness = geometric.skewness( p );
var theoreticalKurtosis = geometric.kurtosis( p );

console.log( 'Theoretical Mean: ', theoreticalMean );
console.log( 'Theoretical Variance: ', theoreticalVariance );
console.log( 'Skewness: ', theoreticalSkewness );
console.log( 'Kurtosis: ', theoreticalKurtosis );

// Generate random samples from the geometric distribution:
var rgeom = geometricRandomFactory( p );
var n = 1000;
var samples = filledarrayBy( n, 'float64', rgeom );

// Compute sample mean and variance:
var sampleMean = mean( n, samples, 1 );
var sampleVariance = variance( n, 1, samples, 1 );

console.log( 'Sample Mean: ', sampleMean );
console.log( 'Sample Variance: ', sampleVariance );

// Demonstrate the memoryless property:
var s = 2.0;
var t = 3.0;
var prob1 = ( 1.0 - geometric.cdf( s + t - 1.0, p ) ) /
	( 1.0 - geometric.cdf( s - 1.0, p ) );
var prob2 = 1.0 - geometric.cdf( t - 1.0, p );

console.log( 'P(X > s + t | X > s): ', prob1 );
console.log( 'P(X > t): ', prob2 );
console.log( 'Difference: ', abs( prob1 - prob2 ) );

// Demonstrate that the sum of k independent geometric random variables follows a negative binomial distribution:
var k = 5;
function drawSum() {
	var sum = 0;
	var j;
	for ( j = 0; j < k; j++ ) {
		sum += rgeom();
	}
	return sum;
}
var sumSamples = filledarrayBy( n, 'float64', drawSum );

// Compute sample mean and variance for the sum:
var sumSampleMean = mean( n, sumSamples, 1 );
var sumSampleVariance = variance( n, 1, sumSamples, 1 );

// Theoretical mean and variance of Negative Binomial distribution:
var nbMean = negativeBinomial.mean( k, p );
var nbVariance = negativeBinomial.variance( k, p );

console.log( 'Sum Sample Mean: ', sumSampleMean );
console.log( 'Sum Sample Variance: ', sumSampleVariance );
console.log( 'Negative Binomial Mean: ', nbMean );
console.log( 'Negative Binomial Variance: ', nbVariance );

// Compare sample statistics to theoretical values:
console.log( 'Difference in Mean: ', abs( nbMean - sumSampleMean ) );
console.log( 'Difference in Variance: ', abs( nbVariance - sumSampleVariance ) );
