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

# Normal

> Normal distribution.

<section class="usage">

## Usage

```javascript
var normal = require( '@stdlib/stats/base/dists/normal' );
```

#### normal

Normal distribution.

```javascript
var dist = normal;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, mu, sigma )`][@stdlib/stats/base/dists/normal/cdf]</span><span class="delimiter">: </span><span class="description">normal distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, mu, sigma )`][@stdlib/stats/base/dists/normal/logcdf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the cumulative distribution function (CDF) for a normal distribution.</span>
-   <span class="signature">[`logpdf( x, mu, sigma )`][@stdlib/stats/base/dists/normal/logpdf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the probability density function (PDF) for a normal distribution.</span>
-   <span class="signature">[`mgf( t, mu, sigma )`][@stdlib/stats/base/dists/normal/mgf]</span><span class="delimiter">: </span><span class="description">normal distribution moment-generating function (MGF).</span>
-   <span class="signature">[`pdf( x, mu, sigma )`][@stdlib/stats/base/dists/normal/pdf]</span><span class="delimiter">: </span><span class="description">normal distribution probability density function (PDF).</span>
-   <span class="signature">[`quantile( p, mu, sigma )`][@stdlib/stats/base/dists/normal/quantile]</span><span class="delimiter">: </span><span class="description">normal distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( mu, sigma )`][@stdlib/stats/base/dists/normal/entropy]</span><span class="delimiter">: </span><span class="description">normal distribution differential entropy.</span>
-   <span class="signature">[`kurtosis( mu, sigma )`][@stdlib/stats/base/dists/normal/kurtosis]</span><span class="delimiter">: </span><span class="description">normal distribution excess kurtosis.</span>
-   <span class="signature">[`mean( mu, sigma )`][@stdlib/stats/base/dists/normal/mean]</span><span class="delimiter">: </span><span class="description">normal distribution expected value.</span>
-   <span class="signature">[`median( mu, sigma )`][@stdlib/stats/base/dists/normal/median]</span><span class="delimiter">: </span><span class="description">normal distribution median.</span>
-   <span class="signature">[`mode( mu, sigma )`][@stdlib/stats/base/dists/normal/mode]</span><span class="delimiter">: </span><span class="description">normal distribution mode.</span>
-   <span class="signature">[`skewness( mu, sigma )`][@stdlib/stats/base/dists/normal/skewness]</span><span class="delimiter">: </span><span class="description">normal distribution skewness.</span>
-   <span class="signature">[`stdev( mu, sigma )`][@stdlib/stats/base/dists/normal/stdev]</span><span class="delimiter">: </span><span class="description">normal distribution standard deviation.</span>
-   <span class="signature">[`variance( mu, sigma )`][@stdlib/stats/base/dists/normal/variance]</span><span class="delimiter">: </span><span class="description">normal distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [normal][normal-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Normal( [mu, sigma] )`][@stdlib/stats/base/dists/normal/ctor]</span><span class="delimiter">: </span><span class="description">normal distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Normal = require( '@stdlib/stats/base/dists/normal' ).Normal;

var dist = new Normal( 2.0, 4.0 );

var y = dist.pdf( 2.0 );
// returns ~0.1
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var normal = require( '@stdlib/stats/base/dists/normal' );

/*
A bakery is analyzing cake baking times to ensure consistency and better schedule their baking processes.

The Central Limit Theorem (CLT) states that the average baking times from many batches will follow a normal distribution if there are enough batches (typically n > 30).

Assuming each record represents the average baking time per batch and the bakery has collected the following data:

-      Mean baking time (μ/mu): 20 minutes.
-      Standard deviation in baking time (σ/sigma): 3 minutes.

We can model the average bake times using a normal distribution with μ (mu) = 20.0 minutes and σ = 3.0 minutes.
*/

var mu = 20.0;
var sigma = 3.0;

var normalDist = new normal.Normal( mu, sigma );

// Output the standard deviation of the baking times:
console.log( normalDist.sigma );
// => 3.0

// Adjust distribution parameters
normalDist.sigma = 4.0;

// Adjusted standard deviation to reflect different variance scenario:
console.log( normalDist.sigma );
// => 4.0

// Excess kurtosis of a normal distribution (measure of "tailedness"):
console.log( normalDist.kurtosis );
// => 0.0

// Median baking time:
console.log( normalDist.median );
// => 20.0

// Variance of the baking times after adjusting sigma:
console.log( normalDist.variance );
// => 16.0

// Probability density function at the mean baking time:
console.log( normal.pdf( 20.0, mu, sigma ) );
// => ~0.133

// Cumulative distribution function at the mean (portion of times ≤ 20 minutes):
console.log( normal.cdf( 20.0, mu, sigma ) );
// => ~0.5

// 50th percentile (median) of the baking times:
console.log( normal.quantile( 0.5, mu, sigma ) );
// => 20.0

// Moment-generating function value at 0.5 (used in probability theory):
console.log( normal.mgf( 0.5, mu, sigma ) );
// => ~67846.291

// Entropy of the normal distribution (measure of uncertainty):
console.log( normal.entropy( mu, sigma ) );
// => ~2.518

// Mean baking time:
console.log( normal.mean( mu, sigma ) );
// => 20.0

// Median baking time:
console.log( normal.median( mu, sigma ) );
// => 20.0

// Mode of the baking times (most frequent value):
console.log( normal.mode( mu, sigma ) );
// => 20.0

// Variance of the baking times:
console.log( normal.variance( mu, sigma ) );
// => 9.0

// Skewness of the distribution (symmetry measure):
console.log( normal.skewness( mu, sigma ) );
// => 0.0

var myquantile = normal.quantile.factory( 20.0, 3.0 );

// 20th percentile (value below which 20% baking times fall):
console.log( myquantile( 0.2 ) );
// => ~17.475

// 80th percentile (value below which 80% baking times fall):
console.log( myquantile( 0.8 ) );
// => ~22.525

var mylogpdf = normal.logpdf.factory( 20.0, 3.0 );

// Logarithm of the probability density function at the mean:
console.log( mylogpdf( 20.0 ) );
// => ~-2.018

// Logarithm of the probability density function at 15 minutes:
console.log( mylogpdf( 15.0 ) );
// => ~-3.406
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[normal-distribution]: https://en.wikipedia.org/wiki/Normal_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/normal/ctor]: https://github.com/stdlib-js/stats/tree/main/base/dists/normal/ctor

[@stdlib/stats/base/dists/normal/entropy]: https://github.com/stdlib-js/stats/tree/main/base/dists/normal/entropy

[@stdlib/stats/base/dists/normal/kurtosis]: https://github.com/stdlib-js/stats/tree/main/base/dists/normal/kurtosis

[@stdlib/stats/base/dists/normal/mean]: https://github.com/stdlib-js/stats/tree/main/base/dists/normal/mean

[@stdlib/stats/base/dists/normal/median]: https://github.com/stdlib-js/stats/tree/main/base/dists/normal/median

[@stdlib/stats/base/dists/normal/mode]: https://github.com/stdlib-js/stats/tree/main/base/dists/normal/mode

[@stdlib/stats/base/dists/normal/skewness]: https://github.com/stdlib-js/stats/tree/main/base/dists/normal/skewness

[@stdlib/stats/base/dists/normal/stdev]: https://github.com/stdlib-js/stats/tree/main/base/dists/normal/stdev

[@stdlib/stats/base/dists/normal/variance]: https://github.com/stdlib-js/stats/tree/main/base/dists/normal/variance

[@stdlib/stats/base/dists/normal/cdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/normal/cdf

[@stdlib/stats/base/dists/normal/logcdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/normal/logcdf

[@stdlib/stats/base/dists/normal/logpdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/normal/logpdf

[@stdlib/stats/base/dists/normal/mgf]: https://github.com/stdlib-js/stats/tree/main/base/dists/normal/mgf

[@stdlib/stats/base/dists/normal/pdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/normal/pdf

[@stdlib/stats/base/dists/normal/quantile]: https://github.com/stdlib-js/stats/tree/main/base/dists/normal/quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
