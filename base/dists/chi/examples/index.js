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

var chiRandomFactory = require( '@stdlib/random/base/chi' ).factory;
var filledarrayBy = require( '@stdlib/array/filled-by' );
var variance = require( './../../../../base/variance' );
var linspace = require( '@stdlib/array/base/linspace' );
var rayleigh = require( './../../../../base/dists/rayleigh' );
var absdiff = require( '@stdlib/math/base/utils/absolute-difference' );
var mean = require( './../../../../strided/mean' );
var abs = require( '@stdlib/math/base/special/abs' );
var max = require( '@stdlib/math/base/special/max' );
var chi = require( './../lib' );

// Define the degrees of freedom parameter:
var k = 2;

// Generate an array of x values:
var x = linspace( 0, 10, 100 );

// Compute the PDF for each x:
var chiPDF = chi.pdf.factory( k );
var pdf = filledarrayBy( x.length, 'float64', chiPDF );

// Compute the CDF for each x:
var chiCDF = chi.cdf.factory( k );
var cdf = filledarrayBy( x.length, 'float64', chiCDF );

// Output the PDF and CDF values:
console.log( 'x values: ', x );
console.log( 'PDF values: ', pdf );
console.log( 'CDF values: ', cdf );

// Compute statistical properties:
var theoreticalMean = chi.mean( k );
var theoreticalVariance = chi.variance( k );
var theoreticalSkewness = chi.skewness( k );
var theoreticalKurtosis = chi.kurtosis( k );

console.log( 'Theoretical Mean: ', theoreticalMean );
console.log( 'Theoretical Variance: ', theoreticalVariance );
console.log( 'Skewness: ', theoreticalSkewness );
console.log( 'Kurtosis: ', theoreticalKurtosis );

// Generate random samples from the Chi distribution:
var rchi = chiRandomFactory( k );
var n = 1000;
var samples = filledarrayBy( n, 'float64', rchi );

// Compute sample mean and variance:
var sampleMean = mean( n, samples, 1 );
var sampleVariance = variance( n, 1, samples, 1 );

console.log( 'Sample Mean: ', sampleMean );
console.log( 'Sample Variance: ', sampleVariance );

// Compare sample statistics to theoretical values:
console.log( 'Difference in Mean: ', abs( theoreticalMean - sampleMean ) );
console.log( 'Difference in Variance: ', abs( theoreticalVariance - sampleVariance ) );

// Demonstrate the relationship with the Rayleigh distribution when k=2:
var rayleighPDF = rayleigh.pdf.factory( 1.0 );
var rayleighCDF = rayleigh.cdf.factory( 1.0 );

// Compute Rayleigh PDF and CDF for each x:
var rayleighPDFValues = filledarrayBy( x.length, 'float64', rayleighPDF );

var rayleighCDFValues = filledarrayBy( x.length, 'float64', rayleighCDF );

// Compare Chi and Rayleigh PDFs and CDFs:
var maxDiffPDF = 0.0;
var maxDiffCDF = 0.0;
var diffPDF;
var diffCDF;
var i;
for ( i = 0; i < x.length; i++ ) {
	diffPDF = absdiff( pdf[ i ], rayleighPDFValues[ i ] );
	maxDiffPDF = max( maxDiffPDF, diffPDF );
	diffCDF = absdiff( cdf[ i ], rayleighCDFValues[ i ] );
	maxDiffCDF = max( maxDiffCDF, diffCDF );
}
console.log( 'Maximum difference between Chi(k=2) PDF and Rayleigh PDF: ', maxDiffPDF );
console.log( 'Maximum difference between Chi(k=2) CDF and Rayleigh CDF: ', maxDiffCDF );
