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

# Chi-squared

> Chi-squared distribution.

<section class="usage">

## Usage

```javascript
var chisquare = require( '@stdlib/stats/base/dists/chisquare' );
```

#### chisquare

Chi-squared distribution.

```javascript
var dist = chisquare;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, k )`][@stdlib/stats/base/dists/chisquare/cdf]</span><span class="delimiter">: </span><span class="description">Chi-squared distribution cumulative distribution function.</span>
-   <span class="signature">[`logpdf( x, k )`][@stdlib/stats/base/dists/chisquare/logpdf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the probability density function (PDF) for a chi-squared distribution.</span>
-   <span class="signature">[`mgf( t, k )`][@stdlib/stats/base/dists/chisquare/mgf]</span><span class="delimiter">: </span><span class="description">Chi-squared distribution moment-generating function (MGF).</span>
-   <span class="signature">[`pdf( x, k )`][@stdlib/stats/base/dists/chisquare/pdf]</span><span class="delimiter">: </span><span class="description">Chi-squared distribution probability density function (PDF).</span>
-   <span class="signature">[`quantile( p, k )`][@stdlib/stats/base/dists/chisquare/quantile]</span><span class="delimiter">: </span><span class="description">Chi-squared distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( k )`][@stdlib/stats/base/dists/chisquare/entropy]</span><span class="delimiter">: </span><span class="description">Chi-squared distribution differential entropy.</span>
-   <span class="signature">[`kurtosis( k )`][@stdlib/stats/base/dists/chisquare/kurtosis]</span><span class="delimiter">: </span><span class="description">Chi-squared distribution excess kurtosis.</span>
-   <span class="signature">[`mean( k )`][@stdlib/stats/base/dists/chisquare/mean]</span><span class="delimiter">: </span><span class="description">Chi-squared distribution expected value.</span>
-   <span class="signature">[`median( k )`][@stdlib/stats/base/dists/chisquare/median]</span><span class="delimiter">: </span><span class="description">Chi-squared distribution median.</span>
-   <span class="signature">[`mode( k )`][@stdlib/stats/base/dists/chisquare/mode]</span><span class="delimiter">: </span><span class="description">Chi-squared distribution mode.</span>
-   <span class="signature">[`skewness( k )`][@stdlib/stats/base/dists/chisquare/skewness]</span><span class="delimiter">: </span><span class="description">Chi-squared distribution skewness.</span>
-   <span class="signature">[`stdev( k )`][@stdlib/stats/base/dists/chisquare/stdev]</span><span class="delimiter">: </span><span class="description">Chi-squared distribution standard deviation.</span>
-   <span class="signature">[`variance( k )`][@stdlib/stats/base/dists/chisquare/variance]</span><span class="delimiter">: </span><span class="description">Chi-squared distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [Chi-squared][chisquare-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`ChiSquare( [k] )`][@stdlib/stats/base/dists/chisquare/ctor]</span><span class="delimiter">: </span><span class="description">Chi-squared distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var ChiSquare = require( '@stdlib/stats/base/dists/chisquare' ).ChiSquare;

var dist = new ChiSquare( 4.0 );

var mu = dist.mean;
// returns 4.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var roundn = require( '@stdlib/math/base/special/roundn' );
var chisquare = require( '@stdlib/stats/base/dists/chisquare' );

// Define degrees of freedom:
var k = 5.0;

// Calculate distribution properties:
console.log( 'Mean: %d', chisquare.mean( k ) );
console.log( 'Median: %d', roundn( chisquare.median( k ), -4 ) );
console.log( 'Mode: %d', chisquare.mode( k ) );
console.log( 'Variance: %d', chisquare.variance( k ) );
console.log( 'Standard Deviation: %d', roundn( chisquare.stdev( k ), -4 ) );
console.log( 'Skewness: %d', roundn( chisquare.skewness( k ), -4 ) );
console.log( 'Excess Kurtosis: %d', roundn( chisquare.kurtosis( k ), -4 ) );
console.log( 'Entropy: %d', roundn( chisquare.entropy( k ), -4 ) );

// Evaluate probability functions:
var x = 3.0;
console.log( '\nEvaluating at x = %d', x );
console.log( 'PDF: %d', roundn( chisquare.pdf( x, k ), -4 ) );
console.log( 'logPDF: %d', roundn( chisquare.logpdf( x, k ), -4 ) );
console.log( 'CDF: %d', roundn( chisquare.cdf( x, k ), -4 ) );

// Calculate quantiles:
var p = 0.7;
console.log( '\nQuantile at p = %d: %d', p, roundn( chisquare.quantile( p, k ), -4 ) );

// Evaluate moment-generating function:
var t = 0.1;
console.log( 'MGF at t = %d: %d', t, roundn( chisquare.mgf( t, k ), -4 ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[chisquare-distribution]: https://en.wikipedia.org/wiki/Chi-squared_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/chisquare/ctor]: https://github.com/stdlib-js/stats/tree/main/base/dists/chisquare/ctor

[@stdlib/stats/base/dists/chisquare/entropy]: https://github.com/stdlib-js/stats/tree/main/base/dists/chisquare/entropy

[@stdlib/stats/base/dists/chisquare/kurtosis]: https://github.com/stdlib-js/stats/tree/main/base/dists/chisquare/kurtosis

[@stdlib/stats/base/dists/chisquare/mean]: https://github.com/stdlib-js/stats/tree/main/base/dists/chisquare/mean

[@stdlib/stats/base/dists/chisquare/median]: https://github.com/stdlib-js/stats/tree/main/base/dists/chisquare/median

[@stdlib/stats/base/dists/chisquare/mode]: https://github.com/stdlib-js/stats/tree/main/base/dists/chisquare/mode

[@stdlib/stats/base/dists/chisquare/skewness]: https://github.com/stdlib-js/stats/tree/main/base/dists/chisquare/skewness

[@stdlib/stats/base/dists/chisquare/stdev]: https://github.com/stdlib-js/stats/tree/main/base/dists/chisquare/stdev

[@stdlib/stats/base/dists/chisquare/variance]: https://github.com/stdlib-js/stats/tree/main/base/dists/chisquare/variance

[@stdlib/stats/base/dists/chisquare/cdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/chisquare/cdf

[@stdlib/stats/base/dists/chisquare/logpdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/chisquare/logpdf

[@stdlib/stats/base/dists/chisquare/mgf]: https://github.com/stdlib-js/stats/tree/main/base/dists/chisquare/mgf

[@stdlib/stats/base/dists/chisquare/pdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/chisquare/pdf

[@stdlib/stats/base/dists/chisquare/quantile]: https://github.com/stdlib-js/stats/tree/main/base/dists/chisquare/quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
