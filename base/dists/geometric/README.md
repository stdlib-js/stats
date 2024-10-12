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

# Geometric

> Geometric distribution.

<section class="usage">

## Usage

```javascript
var geometric = require( '@stdlib/stats/base/dists/geometric' );
```

#### geometric

Geometric distribution.

```javascript
var dist = geometric;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pmf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, p )`][@stdlib/stats/base/dists/geometric/cdf]</span><span class="delimiter">: </span><span class="description">geometric distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, p )`][@stdlib/stats/base/dists/geometric/logcdf]</span><span class="delimiter">: </span><span class="description">geometric distribution logarithm of cumulative distribution function.</span>
-   <span class="signature">[`logpmf( x, p )`][@stdlib/stats/base/dists/geometric/logpmf]</span><span class="delimiter">: </span><span class="description">geometric distribution logarithm of probability mass function (PMF).</span>
-   <span class="signature">[`mgf( t, p )`][@stdlib/stats/base/dists/geometric/mgf]</span><span class="delimiter">: </span><span class="description">geometric distribution moment-generating function (MGF).</span>
-   <span class="signature">[`pmf( x, p )`][@stdlib/stats/base/dists/geometric/pmf]</span><span class="delimiter">: </span><span class="description">geometric distribution probability mass function (PMF).</span>
-   <span class="signature">[`quantile( r, p )`][@stdlib/stats/base/dists/geometric/quantile]</span><span class="delimiter">: </span><span class="description">geometric distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( p )`][@stdlib/stats/base/dists/geometric/entropy]</span><span class="delimiter">: </span><span class="description">geometric distribution entropy.</span>
-   <span class="signature">[`kurtosis( p )`][@stdlib/stats/base/dists/geometric/kurtosis]</span><span class="delimiter">: </span><span class="description">geometric distribution excess kurtosis.</span>
-   <span class="signature">[`mean( p )`][@stdlib/stats/base/dists/geometric/mean]</span><span class="delimiter">: </span><span class="description">geometric distribution expected value.</span>
-   <span class="signature">[`median( p )`][@stdlib/stats/base/dists/geometric/median]</span><span class="delimiter">: </span><span class="description">geometric distribution median.</span>
-   <span class="signature">[`mode( p )`][@stdlib/stats/base/dists/geometric/mode]</span><span class="delimiter">: </span><span class="description">geometric distribution mode.</span>
-   <span class="signature">[`skewness( p )`][@stdlib/stats/base/dists/geometric/skewness]</span><span class="delimiter">: </span><span class="description">geometric distribution skewness.</span>
-   <span class="signature">[`stdev( p )`][@stdlib/stats/base/dists/geometric/stdev]</span><span class="delimiter">: </span><span class="description">geometric distribution standard deviation.</span>
-   <span class="signature">[`variance( p )`][@stdlib/stats/base/dists/geometric/variance]</span><span class="delimiter">: </span><span class="description">geometric distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [geometric][geometric-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Geometric( [p] )`][@stdlib/stats/base/dists/geometric/ctor]</span><span class="delimiter">: </span><span class="description">geometric distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Geometric = require( '@stdlib/stats/base/dists/geometric' ).Geometric;

var dist = new Geometric( 0.2 );

var y = dist.logpmf( 3.0 );
// returns ~-2.279

y = dist.logpmf( 2.3 );
// returns -Infinity
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var geometricRandomFactory = require( '@stdlib/random/base/geometric' ).factory;
var negativeBinomial = require( '@stdlib/stats/base/dists/negative-binomial' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var variance = require( '@stdlib/stats/base/variance' );
var linspace = require( '@stdlib/array/base/linspace' );
var mean = require( '@stdlib/stats/base/mean' );
var abs = require( '@stdlib/math/base/special/abs' );
var geometric = require( '@stdlib/stats/base/dists/geometric' );

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
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[geometric-distribution]: https://en.wikipedia.org/wiki/Geometric_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/geometric/ctor]: https://github.com/stdlib-js/stats/tree/main/base/dists/geometric/ctor

[@stdlib/stats/base/dists/geometric/entropy]: https://github.com/stdlib-js/stats/tree/main/base/dists/geometric/entropy

[@stdlib/stats/base/dists/geometric/kurtosis]: https://github.com/stdlib-js/stats/tree/main/base/dists/geometric/kurtosis

[@stdlib/stats/base/dists/geometric/mean]: https://github.com/stdlib-js/stats/tree/main/base/dists/geometric/mean

[@stdlib/stats/base/dists/geometric/median]: https://github.com/stdlib-js/stats/tree/main/base/dists/geometric/median

[@stdlib/stats/base/dists/geometric/mode]: https://github.com/stdlib-js/stats/tree/main/base/dists/geometric/mode

[@stdlib/stats/base/dists/geometric/skewness]: https://github.com/stdlib-js/stats/tree/main/base/dists/geometric/skewness

[@stdlib/stats/base/dists/geometric/stdev]: https://github.com/stdlib-js/stats/tree/main/base/dists/geometric/stdev

[@stdlib/stats/base/dists/geometric/variance]: https://github.com/stdlib-js/stats/tree/main/base/dists/geometric/variance

[@stdlib/stats/base/dists/geometric/cdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/geometric/cdf

[@stdlib/stats/base/dists/geometric/logcdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/geometric/logcdf

[@stdlib/stats/base/dists/geometric/logpmf]: https://github.com/stdlib-js/stats/tree/main/base/dists/geometric/logpmf

[@stdlib/stats/base/dists/geometric/mgf]: https://github.com/stdlib-js/stats/tree/main/base/dists/geometric/mgf

[@stdlib/stats/base/dists/geometric/pmf]: https://github.com/stdlib-js/stats/tree/main/base/dists/geometric/pmf

[@stdlib/stats/base/dists/geometric/quantile]: https://github.com/stdlib-js/stats/tree/main/base/dists/geometric/quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
