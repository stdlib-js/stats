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

# Beta

> Beta distribution.

<section class="usage">

## Usage

```javascript
var beta = require( '@stdlib/stats/base/dists/beta' );
```

#### beta

[Beta][beta-distribution] distribution.

```javascript
var dist = beta;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, alpha, beta )`][@stdlib/stats/base/dists/beta/cdf]</span><span class="delimiter">: </span><span class="description">beta distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, alpha, beta )`][@stdlib/stats/base/dists/beta/logcdf]</span><span class="delimiter">: </span><span class="description">beta distribution logarithm of cumulative distribution function.</span>
-   <span class="signature">[`logpdf( x, alpha, beta )`][@stdlib/stats/base/dists/beta/logpdf]</span><span class="delimiter">: </span><span class="description">beta distribution logarithm of probability density function (PDF).</span>
-   <span class="signature">[`mgf( t, alpha, beta )`][@stdlib/stats/base/dists/beta/mgf]</span><span class="delimiter">: </span><span class="description">beta distribution moment-generating function (MGF).</span>
-   <span class="signature">[`pdf( x, alpha, beta )`][@stdlib/stats/base/dists/beta/pdf]</span><span class="delimiter">: </span><span class="description">beta distribution probability density function (PDF).</span>
-   <span class="signature">[`quantile( p, alpha, beta )`][@stdlib/stats/base/dists/beta/quantile]</span><span class="delimiter">: </span><span class="description">beta distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( alpha, beta )`][@stdlib/stats/base/dists/beta/entropy]</span><span class="delimiter">: </span><span class="description">beta distribution differential entropy.</span>
-   <span class="signature">[`kurtosis( alpha, beta )`][@stdlib/stats/base/dists/beta/kurtosis]</span><span class="delimiter">: </span><span class="description">beta distribution excess kurtosis.</span>
-   <span class="signature">[`mean( alpha, beta )`][@stdlib/stats/base/dists/beta/mean]</span><span class="delimiter">: </span><span class="description">beta distribution expected value.</span>
-   <span class="signature">[`median( alpha, beta )`][@stdlib/stats/base/dists/beta/median]</span><span class="delimiter">: </span><span class="description">beta distribution median.</span>
-   <span class="signature">[`mode( alpha, beta )`][@stdlib/stats/base/dists/beta/mode]</span><span class="delimiter">: </span><span class="description">beta distribution mode.</span>
-   <span class="signature">[`skewness( alpha, beta )`][@stdlib/stats/base/dists/beta/skewness]</span><span class="delimiter">: </span><span class="description">beta distribution skewness.</span>
-   <span class="signature">[`stdev( alpha, beta )`][@stdlib/stats/base/dists/beta/stdev]</span><span class="delimiter">: </span><span class="description">beta distribution standard deviation.</span>
-   <span class="signature">[`variance( alpha, beta )`][@stdlib/stats/base/dists/beta/variance]</span><span class="delimiter">: </span><span class="description">beta distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [beta][beta-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Beta( [alpha, beta] )`][@stdlib/stats/base/dists/beta/ctor]</span><span class="delimiter">: </span><span class="description">beta distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Beta = require( '@stdlib/stats/base/dists/beta' ).Beta;
var dist = new Beta( 2.0, 4.0 );

var mu = dist.mean;
// returns ~0.333
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var beta = require( '@stdlib/stats/base/dists/beta' );

console.log( objectKeys( beta ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[beta-distribution]: https://en.wikipedia.org/wiki/Beta_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/beta/ctor]: https://github.com/stdlib-js/stats/tree/main/base/dists/beta/ctor

[@stdlib/stats/base/dists/beta/entropy]: https://github.com/stdlib-js/stats/tree/main/base/dists/beta/entropy

[@stdlib/stats/base/dists/beta/kurtosis]: https://github.com/stdlib-js/stats/tree/main/base/dists/beta/kurtosis

[@stdlib/stats/base/dists/beta/mean]: https://github.com/stdlib-js/stats/tree/main/base/dists/beta/mean

[@stdlib/stats/base/dists/beta/median]: https://github.com/stdlib-js/stats/tree/main/base/dists/beta/median

[@stdlib/stats/base/dists/beta/mode]: https://github.com/stdlib-js/stats/tree/main/base/dists/beta/mode

[@stdlib/stats/base/dists/beta/skewness]: https://github.com/stdlib-js/stats/tree/main/base/dists/beta/skewness

[@stdlib/stats/base/dists/beta/stdev]: https://github.com/stdlib-js/stats/tree/main/base/dists/beta/stdev

[@stdlib/stats/base/dists/beta/variance]: https://github.com/stdlib-js/stats/tree/main/base/dists/beta/variance

[@stdlib/stats/base/dists/beta/cdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/beta/cdf

[@stdlib/stats/base/dists/beta/logcdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/beta/logcdf

[@stdlib/stats/base/dists/beta/logpdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/beta/logpdf

[@stdlib/stats/base/dists/beta/mgf]: https://github.com/stdlib-js/stats/tree/main/base/dists/beta/mgf

[@stdlib/stats/base/dists/beta/pdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/beta/pdf

[@stdlib/stats/base/dists/beta/quantile]: https://github.com/stdlib-js/stats/tree/main/base/dists/beta/quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
