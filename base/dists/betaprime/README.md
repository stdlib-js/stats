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

# Beta Prime

> Beta prime distribution.

<section class="usage">

## Usage

```javascript
var betaprime = require( '@stdlib/stats/base/dists/betaprime' );
```

#### betaprime

Beta prime distribution.

```javascript
var dist = betaprime;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, alpha, beta )`][@stdlib/stats/base/dists/betaprime/cdf]</span><span class="delimiter">: </span><span class="description">beta prime distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, alpha, beta )`][@stdlib/stats/base/dists/betaprime/logcdf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the cumulative distribution function for a beta prime distribution.</span>
-   <span class="signature">[`logpdf( x, alpha, beta )`][@stdlib/stats/base/dists/betaprime/logpdf]</span><span class="delimiter">: </span><span class="description">beta prime distribution logarithm of probability density function (PDF).</span>
-   <span class="signature">[`pdf( x, alpha, beta )`][@stdlib/stats/base/dists/betaprime/pdf]</span><span class="delimiter">: </span><span class="description">beta prime distribution probability density function (PDF).</span>
-   <span class="signature">[`quantile( p, alpha, beta )`][@stdlib/stats/base/dists/betaprime/quantile]</span><span class="delimiter">: </span><span class="description">beta prime distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`kurtosis( alpha, beta )`][@stdlib/stats/base/dists/betaprime/kurtosis]</span><span class="delimiter">: </span><span class="description">beta prime distribution excess kurtosis.</span>
-   <span class="signature">[`mean( alpha, beta )`][@stdlib/stats/base/dists/betaprime/mean]</span><span class="delimiter">: </span><span class="description">beta prime distribution expected value.</span>
-   <span class="signature">[`mode( alpha, beta )`][@stdlib/stats/base/dists/betaprime/mode]</span><span class="delimiter">: </span><span class="description">beta prime distribution mode.</span>
-   <span class="signature">[`skewness( alpha, beta )`][@stdlib/stats/base/dists/betaprime/skewness]</span><span class="delimiter">: </span><span class="description">beta prime distribution skewness.</span>
-   <span class="signature">[`stdev( alpha, beta )`][@stdlib/stats/base/dists/betaprime/stdev]</span><span class="delimiter">: </span><span class="description">beta prime distribution standard deviation.</span>
-   <span class="signature">[`variance( alpha, beta )`][@stdlib/stats/base/dists/betaprime/variance]</span><span class="delimiter">: </span><span class="description">beta prime distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [betaprime][betaprime-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`BetaPrime( [alpha, beta] )`][@stdlib/stats/base/dists/betaprime/ctor]</span><span class="delimiter">: </span><span class="description">beta prime distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var BetaPrime = require( '@stdlib/stats/base/dists/betaprime' ).BetaPrime;

var dist = new BetaPrime( 2.0, 4.0 );

var mu = dist.mean;
// returns ~0.667
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var betaprime = require( '@stdlib/stats/base/dists/betaprime' );

console.log( objectKeys( betaprime ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[betaprime-distribution]: https://en.wikipedia.org/wiki/Beta_prime_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/betaprime/ctor]: https://github.com/stdlib-js/stats/tree/main/base/dists/betaprime/ctor

[@stdlib/stats/base/dists/betaprime/kurtosis]: https://github.com/stdlib-js/stats/tree/main/base/dists/betaprime/kurtosis

[@stdlib/stats/base/dists/betaprime/mean]: https://github.com/stdlib-js/stats/tree/main/base/dists/betaprime/mean

[@stdlib/stats/base/dists/betaprime/mode]: https://github.com/stdlib-js/stats/tree/main/base/dists/betaprime/mode

[@stdlib/stats/base/dists/betaprime/skewness]: https://github.com/stdlib-js/stats/tree/main/base/dists/betaprime/skewness

[@stdlib/stats/base/dists/betaprime/stdev]: https://github.com/stdlib-js/stats/tree/main/base/dists/betaprime/stdev

[@stdlib/stats/base/dists/betaprime/variance]: https://github.com/stdlib-js/stats/tree/main/base/dists/betaprime/variance

[@stdlib/stats/base/dists/betaprime/cdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/betaprime/cdf

[@stdlib/stats/base/dists/betaprime/logcdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/betaprime/logcdf

[@stdlib/stats/base/dists/betaprime/logpdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/betaprime/logpdf

[@stdlib/stats/base/dists/betaprime/pdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/betaprime/pdf

[@stdlib/stats/base/dists/betaprime/quantile]: https://github.com/stdlib-js/stats/tree/main/base/dists/betaprime/quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
