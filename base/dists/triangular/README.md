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

# Triangular

> Triangular distribution.

<section class="usage">

## Usage

```javascript
var triangular = require( '@stdlib/stats/base/dists/triangular' );
```

#### triangular

Triangular distribution.

```javascript
var dist = triangular;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, a, b, c )`][@stdlib/stats/base/dists/triangular/cdf]</span><span class="delimiter">: </span><span class="description">triangular distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, a, b, c )`][@stdlib/stats/base/dists/triangular/logcdf]</span><span class="delimiter">: </span><span class="description">triangular distribution logarithm of cumulative distribution function.</span>
-   <span class="signature">[`logpdf( x, a, b, c )`][@stdlib/stats/base/dists/triangular/logpdf]</span><span class="delimiter">: </span><span class="description">triangular distribution logarithm of probability density function (PDF).</span>
-   <span class="signature">[`mgf( t, a, b, c )`][@stdlib/stats/base/dists/triangular/mgf]</span><span class="delimiter">: </span><span class="description">triangular distribution moment-generating function (MGF).</span>
-   <span class="signature">[`pdf( x, a, b, c )`][@stdlib/stats/base/dists/triangular/pdf]</span><span class="delimiter">: </span><span class="description">triangular distribution probability density function (PDF).</span>
-   <span class="signature">[`quantile( p, a, b, c )`][@stdlib/stats/base/dists/triangular/quantile]</span><span class="delimiter">: </span><span class="description">triangular distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( a, b, c )`][@stdlib/stats/base/dists/triangular/entropy]</span><span class="delimiter">: </span><span class="description">triangular distribution differential entropy.</span>
-   <span class="signature">[`kurtosis( a, b, c )`][@stdlib/stats/base/dists/triangular/kurtosis]</span><span class="delimiter">: </span><span class="description">triangular distribution excess kurtosis.</span>
-   <span class="signature">[`mean( a, b, c )`][@stdlib/stats/base/dists/triangular/mean]</span><span class="delimiter">: </span><span class="description">triangular distribution expected value.</span>
-   <span class="signature">[`median( a, b, c )`][@stdlib/stats/base/dists/triangular/median]</span><span class="delimiter">: </span><span class="description">triangular distribution median.</span>
-   <span class="signature">[`mode( a, b, c )`][@stdlib/stats/base/dists/triangular/mode]</span><span class="delimiter">: </span><span class="description">triangular distribution mode.</span>
-   <span class="signature">[`skewness( a, b, c )`][@stdlib/stats/base/dists/triangular/skewness]</span><span class="delimiter">: </span><span class="description">triangular distribution skewness.</span>
-   <span class="signature">[`stdev( a, b, c )`][@stdlib/stats/base/dists/triangular/stdev]</span><span class="delimiter">: </span><span class="description">triangular distribution standard deviation.</span>
-   <span class="signature">[`variance( a, b, c )`][@stdlib/stats/base/dists/triangular/variance]</span><span class="delimiter">: </span><span class="description">triangular distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [triangular][triangular-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Triangular( [a, b, c] )`][@stdlib/stats/base/dists/triangular/ctor]</span><span class="delimiter">: </span><span class="description">triangular distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Triangular = require( '@stdlib/stats/base/dists/triangular' ).Triangular;

var dist = new Triangular( 2.0, 4.0, 3.0 );

var y = dist.quantile( 0.5 );
// returns 3.0

y = dist.quantile( 1.9 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var triangular = require( '@stdlib/stats/base/dists/triangular' );

// Scenario: Modeling completion time for a software development task

// Define the distribution parameters (in hours):
var a = 1.5; // Minimum time (best-case scenario)
var b = 4.5; // Maximum time (worst-case scenario)
var c = discreteUniform( 2, 4 ); // Most likely time (mode)
console.log( 'a: %d, b: %d, c: %d', a, b, c );

// Expected (mean) completion time:
var mean = triangular.mean( a, b, c );
console.log( '\nExpected completion time: %d hours', mean );

// Median completion time:
var median = triangular.median( a, b, c );
console.log( 'Median completion time: %d hours', median );

// Variance in completion time:
var variance = triangular.variance( a, b, c );
console.log( 'Variance in completion time: %d hours^2', variance );

// Probability of completing the task within 3 hours:
var x = 3.0;
var prob = triangular.cdf( x, a, b, c );
console.log( '\nProbability of completing within %d hours: %d', x, prob );

// 90th percentile of completion time:
var p = 0.9;
var percentile = triangular.quantile( p, a, b, c );
console.log( '90% of tasks will be completed within %d hours', percentile );

// Relative likelihood of completing the task in exactly 2.5 hours:
x = 2.5;
var likelihood = triangular.pdf( x, a, b, c );
console.log( '\nRelative likelihood of completing in exactly %d hours: %d', x, likelihood );

// Skewness to understand the distribution's shape:
var skewness = triangular.skewness( a, b, c );
console.log( '\nSkewness of completion times: %d', skewness );
if ( skewness > 0 ) {
    console.log( 'The distribution is right-skewed, suggesting occasional longer completion times.' );
} else if ( skewness < 0 ) {
    console.log( 'The distribution is left-skewed, suggesting occasional shorter completion times.' );
} else {
    console.log( 'The distribution is symmetric.' );
}

// Entropy as a measure of uncertainty in the estimate:
var entropy = triangular.entropy( a, b, c );
console.log( '\nEntropy of the distribution: %d nats', entropy );
console.log( 'Higher entropy indicates more uncertainty in completion times.' );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[triangular-distribution]: https://en.wikipedia.org/wiki/Triangular_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/triangular/ctor]: https://github.com/stdlib-js/stats/tree/main/base/dists/triangular/ctor

[@stdlib/stats/base/dists/triangular/entropy]: https://github.com/stdlib-js/stats/tree/main/base/dists/triangular/entropy

[@stdlib/stats/base/dists/triangular/kurtosis]: https://github.com/stdlib-js/stats/tree/main/base/dists/triangular/kurtosis

[@stdlib/stats/base/dists/triangular/mean]: https://github.com/stdlib-js/stats/tree/main/base/dists/triangular/mean

[@stdlib/stats/base/dists/triangular/median]: https://github.com/stdlib-js/stats/tree/main/base/dists/triangular/median

[@stdlib/stats/base/dists/triangular/mode]: https://github.com/stdlib-js/stats/tree/main/base/dists/triangular/mode

[@stdlib/stats/base/dists/triangular/skewness]: https://github.com/stdlib-js/stats/tree/main/base/dists/triangular/skewness

[@stdlib/stats/base/dists/triangular/stdev]: https://github.com/stdlib-js/stats/tree/main/base/dists/triangular/stdev

[@stdlib/stats/base/dists/triangular/variance]: https://github.com/stdlib-js/stats/tree/main/base/dists/triangular/variance

[@stdlib/stats/base/dists/triangular/cdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/triangular/cdf

[@stdlib/stats/base/dists/triangular/logcdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/triangular/logcdf

[@stdlib/stats/base/dists/triangular/logpdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/triangular/logpdf

[@stdlib/stats/base/dists/triangular/mgf]: https://github.com/stdlib-js/stats/tree/main/base/dists/triangular/mgf

[@stdlib/stats/base/dists/triangular/pdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/triangular/pdf

[@stdlib/stats/base/dists/triangular/quantile]: https://github.com/stdlib-js/stats/tree/main/base/dists/triangular/quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
