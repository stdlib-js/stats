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

# Lognormal

> Lognormal distribution.

<section class="usage">

## Usage

```javascript
var lognormal = require( '@stdlib/stats/base/dists/lognormal' );
```

#### lognormal

Lognormal distribution.

```javascript
var dist = lognormal;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, mu, sigma )`][@stdlib/stats/base/dists/lognormal/cdf]</span><span class="delimiter">: </span><span class="description">lognormal distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, mu, sigma )`][@stdlib/stats/base/dists/lognormal/logcdf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the cumulative distribution function (CDF) for a lognormal distribution.</span>
-   <span class="signature">[`logpdf( x, mu, sigma )`][@stdlib/stats/base/dists/lognormal/logpdf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the probability density function (PDF) for a lognormal distribution.</span>
-   <span class="signature">[`pdf( x, mu, sigma )`][@stdlib/stats/base/dists/lognormal/pdf]</span><span class="delimiter">: </span><span class="description">lognormal distribution probability density function (PDF).</span>
-   <span class="signature">[`quantile( p, mu, sigma )`][@stdlib/stats/base/dists/lognormal/quantile]</span><span class="delimiter">: </span><span class="description">lognormal distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( mu, sigma )`][@stdlib/stats/base/dists/lognormal/entropy]</span><span class="delimiter">: </span><span class="description">lognormal distribution differential entropy.</span>
-   <span class="signature">[`kurtosis( mu, sigma )`][@stdlib/stats/base/dists/lognormal/kurtosis]</span><span class="delimiter">: </span><span class="description">lognormal distribution excess kurtosis.</span>
-   <span class="signature">[`mean( mu, sigma )`][@stdlib/stats/base/dists/lognormal/mean]</span><span class="delimiter">: </span><span class="description">lognormal distribution expected value.</span>
-   <span class="signature">[`median( mu, sigma )`][@stdlib/stats/base/dists/lognormal/median]</span><span class="delimiter">: </span><span class="description">lognormal distribution median.</span>
-   <span class="signature">[`mode( mu, sigma )`][@stdlib/stats/base/dists/lognormal/mode]</span><span class="delimiter">: </span><span class="description">lognormal distribution mode.</span>
-   <span class="signature">[`skewness( mu, sigma )`][@stdlib/stats/base/dists/lognormal/skewness]</span><span class="delimiter">: </span><span class="description">lognormal distribution skewness.</span>
-   <span class="signature">[`stdev( mu, sigma )`][@stdlib/stats/base/dists/lognormal/stdev]</span><span class="delimiter">: </span><span class="description">lognormal distribution standard deviation.</span>
-   <span class="signature">[`variance( mu, sigma )`][@stdlib/stats/base/dists/lognormal/variance]</span><span class="delimiter">: </span><span class="description">lognormal distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [lognormal][lognormal-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`LogNormal( [mu, sigma] )`][@stdlib/stats/base/dists/lognormal/ctor]</span><span class="delimiter">: </span><span class="description">lognormal distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var LogNormal = require( '@stdlib/stats/base/dists/lognormal' ).LogNormal;

var dist = new LogNormal( 2.0, 4.0 );

var y = dist.cdf( 0.5 );
// returns ~0.25
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var lognormal = require( '@stdlib/stats/base/dists/lognormal' );

console.log( objectKeys( lognormal ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[lognormal-distribution]: https://en.wikipedia.org/wiki/Log-normal_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/lognormal/ctor]: https://github.com/stdlib-js/stats/tree/main/base/dists/lognormal/ctor

[@stdlib/stats/base/dists/lognormal/entropy]: https://github.com/stdlib-js/stats/tree/main/base/dists/lognormal/entropy

[@stdlib/stats/base/dists/lognormal/kurtosis]: https://github.com/stdlib-js/stats/tree/main/base/dists/lognormal/kurtosis

[@stdlib/stats/base/dists/lognormal/mean]: https://github.com/stdlib-js/stats/tree/main/base/dists/lognormal/mean

[@stdlib/stats/base/dists/lognormal/median]: https://github.com/stdlib-js/stats/tree/main/base/dists/lognormal/median

[@stdlib/stats/base/dists/lognormal/mode]: https://github.com/stdlib-js/stats/tree/main/base/dists/lognormal/mode

[@stdlib/stats/base/dists/lognormal/skewness]: https://github.com/stdlib-js/stats/tree/main/base/dists/lognormal/skewness

[@stdlib/stats/base/dists/lognormal/stdev]: https://github.com/stdlib-js/stats/tree/main/base/dists/lognormal/stdev

[@stdlib/stats/base/dists/lognormal/variance]: https://github.com/stdlib-js/stats/tree/main/base/dists/lognormal/variance

[@stdlib/stats/base/dists/lognormal/cdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/lognormal/cdf

[@stdlib/stats/base/dists/lognormal/logcdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/lognormal/logcdf

[@stdlib/stats/base/dists/lognormal/logpdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/lognormal/logpdf

[@stdlib/stats/base/dists/lognormal/pdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/lognormal/pdf

[@stdlib/stats/base/dists/lognormal/quantile]: https://github.com/stdlib-js/stats/tree/main/base/dists/lognormal/quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
