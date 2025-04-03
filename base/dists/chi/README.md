<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Chi

> Chi distribution.

<section class="usage">

## Usage

```javascript
var chi = require( '@stdlib/stats/base/dists/chi' );
```

#### chi

Chi distribution.

```javascript
var dist = chi;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, k )`][@stdlib/stats/base/dists/chi/cdf]</span><span class="delimiter">: </span><span class="description">Chi distribution cumulative distribution function.</span>
-   <span class="signature">[`logpdf( x, k )`][@stdlib/stats/base/dists/chi/logpdf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the probability density function (PDF) for a chi distribution .</span>
-   <span class="signature">[`pdf( x, k )`][@stdlib/stats/base/dists/chi/pdf]</span><span class="delimiter">: </span><span class="description">Chi distribution probability density function (PDF).</span>
-   <span class="signature">[`quantile( p, k )`][@stdlib/stats/base/dists/chi/quantile]</span><span class="delimiter">: </span><span class="description">Chi distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( k )`][@stdlib/stats/base/dists/chi/entropy]</span><span class="delimiter">: </span><span class="description">Chi distribution differential entropy.</span>
-   <span class="signature">[`kurtosis( k )`][@stdlib/stats/base/dists/chi/kurtosis]</span><span class="delimiter">: </span><span class="description">Chi distribution excess kurtosis.</span>
-   <span class="signature">[`mean( k )`][@stdlib/stats/base/dists/chi/mean]</span><span class="delimiter">: </span><span class="description">Chi distribution expected value.</span>
-   <span class="signature">[`mode( k )`][@stdlib/stats/base/dists/chi/mode]</span><span class="delimiter">: </span><span class="description">Chi distribution mode.</span>
-   <span class="signature">[`skewness( k )`][@stdlib/stats/base/dists/chi/skewness]</span><span class="delimiter">: </span><span class="description">Chi distribution skewness.</span>
-   <span class="signature">[`stdev( k )`][@stdlib/stats/base/dists/chi/stdev]</span><span class="delimiter">: </span><span class="description">Chi distribution standard deviation.</span>
-   <span class="signature">[`variance( k )`][@stdlib/stats/base/dists/chi/variance]</span><span class="delimiter">: </span><span class="description">Chi distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [Chi][chi-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Chi( [k] )`][@stdlib/stats/base/dists/chi/ctor]</span><span class="delimiter">: </span><span class="description">Chi distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Chi = require( '@stdlib/stats/base/dists/chi' ).Chi;

var dist = new Chi( 4.0 );

var mu = dist.mean;
// returns ~1.88
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var chiRandomFactory = require( '@stdlib/random/base/chi' ).factory;
var filledarrayBy = require( '@stdlib/array/filled-by' );
var variance = require( '@stdlib/stats/base/variance' );
var linspace = require( '@stdlib/array/base/linspace' );
var rayleigh = require( '@stdlib/stats/base/dists/rayleigh' );
var absdiff = require( '@stdlib/math/base/utils/absolute-difference' );
var mean = require( '@stdlib/stats/base/mean' );
var abs = require( '@stdlib/math/base/special/abs' );
var max = require( '@stdlib/math/base/special/max' );
var chi = require( '@stdlib/stats/base/dists/chi' );

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
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[chi-distribution]: https://en.wikipedia.org/wiki/Chi_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/chi/ctor]: https://github.com/stdlib-js/stats/tree/main/base/dists/chi/ctor

[@stdlib/stats/base/dists/chi/entropy]: https://github.com/stdlib-js/stats/tree/main/base/dists/chi/entropy

[@stdlib/stats/base/dists/chi/kurtosis]: https://github.com/stdlib-js/stats/tree/main/base/dists/chi/kurtosis

[@stdlib/stats/base/dists/chi/mean]: https://github.com/stdlib-js/stats/tree/main/base/dists/chi/mean

[@stdlib/stats/base/dists/chi/mode]: https://github.com/stdlib-js/stats/tree/main/base/dists/chi/mode

[@stdlib/stats/base/dists/chi/skewness]: https://github.com/stdlib-js/stats/tree/main/base/dists/chi/skewness

[@stdlib/stats/base/dists/chi/stdev]: https://github.com/stdlib-js/stats/tree/main/base/dists/chi/stdev

[@stdlib/stats/base/dists/chi/variance]: https://github.com/stdlib-js/stats/tree/main/base/dists/chi/variance

[@stdlib/stats/base/dists/chi/cdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/chi/cdf

[@stdlib/stats/base/dists/chi/logpdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/chi/logpdf

[@stdlib/stats/base/dists/chi/pdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/chi/pdf

[@stdlib/stats/base/dists/chi/quantile]: https://github.com/stdlib-js/stats/tree/main/base/dists/chi/quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
