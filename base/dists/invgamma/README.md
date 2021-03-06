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

# Inverse Gamma

> Inverse gamma distribution.

<section class="usage">

## Usage

```javascript
var invgamma = require( '@stdlib/stats/base/dists/invgamma' );
```

#### invgamma

Inverse gamma distribution.

```javascript
var dist = invgamma;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, alpha, beta )`][@stdlib/stats/base/dists/invgamma/cdf]</span><span class="delimiter">: </span><span class="description">inverse Gamma distribution cumulative distribution function.</span>
-   <span class="signature">[`logpdf( x, alpha, beta )`][@stdlib/stats/base/dists/invgamma/logpdf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the probability density function (PDF) for an inverse gamma distribution.</span>
-   <span class="signature">[`pdf( x, alpha, beta )`][@stdlib/stats/base/dists/invgamma/pdf]</span><span class="delimiter">: </span><span class="description">inverse gamma distribution probability density function (PDF).</span>
-   <span class="signature">[`quantile( p, alpha, beta )`][@stdlib/stats/base/dists/invgamma/quantile]</span><span class="delimiter">: </span><span class="description">inverse gamma distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( alpha, beta )`][@stdlib/stats/base/dists/invgamma/entropy]</span><span class="delimiter">: </span><span class="description">inverse gamma distribution differential entropy.</span>
-   <span class="signature">[`kurtosis( alpha, beta )`][@stdlib/stats/base/dists/invgamma/kurtosis]</span><span class="delimiter">: </span><span class="description">inverse gamma distribution excess kurtosis.</span>
-   <span class="signature">[`mean( alpha, beta )`][@stdlib/stats/base/dists/invgamma/mean]</span><span class="delimiter">: </span><span class="description">inverse gamma distribution expected value.</span>
-   <span class="signature">[`mode( alpha, beta )`][@stdlib/stats/base/dists/invgamma/mode]</span><span class="delimiter">: </span><span class="description">inverse gamma distribution mode.</span>
-   <span class="signature">[`skewness( alpha, beta )`][@stdlib/stats/base/dists/invgamma/skewness]</span><span class="delimiter">: </span><span class="description">inverse gamma distribution skewness.</span>
-   <span class="signature">[`stdev( alpha, beta )`][@stdlib/stats/base/dists/invgamma/stdev]</span><span class="delimiter">: </span><span class="description">inverse gamma distribution standard deviation.</span>
-   <span class="signature">[`variance( alpha, beta )`][@stdlib/stats/base/dists/invgamma/variance]</span><span class="delimiter">: </span><span class="description">inverse gamma distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [inverse gamma][invgamma-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`InvGamma( [alpha, beta] )`][@stdlib/stats/base/dists/invgamma/ctor]</span><span class="delimiter">: </span><span class="description">inverse gamma distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var InvGamma = require( '@stdlib/stats/base/dists/invgamma' ).InvGamma;

var dist = new InvGamma( 2.0, 4.0 );

var y = dist.cdf( 0.5 );
// returns ~0.003
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var invgamma = require( '@stdlib/stats/base/dists/invgamma' );

console.log( objectKeys( invgamma ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[invgamma-distribution]: https://en.wikipedia.org/wiki/Inverse-gamma_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/invgamma/ctor]: https://github.com/stdlib-js/stats/tree/main/base/dists/invgamma/ctor

[@stdlib/stats/base/dists/invgamma/entropy]: https://github.com/stdlib-js/stats/tree/main/base/dists/invgamma/entropy

[@stdlib/stats/base/dists/invgamma/kurtosis]: https://github.com/stdlib-js/stats/tree/main/base/dists/invgamma/kurtosis

[@stdlib/stats/base/dists/invgamma/mean]: https://github.com/stdlib-js/stats/tree/main/base/dists/invgamma/mean

[@stdlib/stats/base/dists/invgamma/mode]: https://github.com/stdlib-js/stats/tree/main/base/dists/invgamma/mode

[@stdlib/stats/base/dists/invgamma/skewness]: https://github.com/stdlib-js/stats/tree/main/base/dists/invgamma/skewness

[@stdlib/stats/base/dists/invgamma/stdev]: https://github.com/stdlib-js/stats/tree/main/base/dists/invgamma/stdev

[@stdlib/stats/base/dists/invgamma/variance]: https://github.com/stdlib-js/stats/tree/main/base/dists/invgamma/variance

[@stdlib/stats/base/dists/invgamma/cdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/invgamma/cdf

[@stdlib/stats/base/dists/invgamma/logpdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/invgamma/logpdf

[@stdlib/stats/base/dists/invgamma/pdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/invgamma/pdf

[@stdlib/stats/base/dists/invgamma/quantile]: https://github.com/stdlib-js/stats/tree/main/base/dists/invgamma/quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
