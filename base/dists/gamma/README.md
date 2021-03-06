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

# Gamma

> Gamma distribution.

<section class="usage">

## Usage

```javascript
var gamma = require( '@stdlib/stats/base/dists/gamma' );
```

#### gamma

Gamma distribution.

```javascript
var dist = gamma;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, alpha, beta )`][@stdlib/stats/base/dists/gamma/cdf]</span><span class="delimiter">: </span><span class="description">gamma distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, alpha, beta )`][@stdlib/stats/base/dists/gamma/logcdf]</span><span class="delimiter">: </span><span class="description">gamma distribution logarithm of cumulative distribution function (CDF).</span>
-   <span class="signature">[`logpdf( x, alpha, beta )`][@stdlib/stats/base/dists/gamma/logpdf]</span><span class="delimiter">: </span><span class="description">gamma distribution logarithm of probability density function (PDF).</span>
-   <span class="signature">[`mgf( t, alpha, beta )`][@stdlib/stats/base/dists/gamma/mgf]</span><span class="delimiter">: </span><span class="description">gamma distribution moment-generating function (MGF).</span>
-   <span class="signature">[`pdf( x, alpha, beta )`][@stdlib/stats/base/dists/gamma/pdf]</span><span class="delimiter">: </span><span class="description">gamma distribution probability density function (PDF).</span>
-   <span class="signature">[`quantile( p, alpha, beta )`][@stdlib/stats/base/dists/gamma/quantile]</span><span class="delimiter">: </span><span class="description">gamma distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( alpha, beta )`][@stdlib/stats/base/dists/gamma/entropy]</span><span class="delimiter">: </span><span class="description">gamma distribution differential entropy.</span>
-   <span class="signature">[`kurtosis( alpha, beta )`][@stdlib/stats/base/dists/gamma/kurtosis]</span><span class="delimiter">: </span><span class="description">gamma distribution excess kurtosis.</span>
-   <span class="signature">[`mean( alpha, beta )`][@stdlib/stats/base/dists/gamma/mean]</span><span class="delimiter">: </span><span class="description">gamma distribution expected value.</span>
-   <span class="signature">[`mode( alpha, beta )`][@stdlib/stats/base/dists/gamma/mode]</span><span class="delimiter">: </span><span class="description">gamma distribution mode.</span>
-   <span class="signature">[`skewness( alpha, beta )`][@stdlib/stats/base/dists/gamma/skewness]</span><span class="delimiter">: </span><span class="description">gamma distribution skewness.</span>
-   <span class="signature">[`stdev( alpha, beta )`][@stdlib/stats/base/dists/gamma/stdev]</span><span class="delimiter">: </span><span class="description">gamma distribution standard deviation.</span>
-   <span class="signature">[`variance( alpha, beta )`][@stdlib/stats/base/dists/gamma/variance]</span><span class="delimiter">: </span><span class="description">gamma distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [gamma][gamma-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Gamma( [alpha, beta] )`][@stdlib/stats/base/dists/gamma/ctor]</span><span class="delimiter">: </span><span class="description">gamma distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Gamma = require( '@stdlib/stats/base/dists/gamma' ).Gamma;

var dist = new Gamma( 2.0, 4.0 );

var y = dist.cdf( 0.5 );
// returns ~0.594
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var gamma = require( '@stdlib/stats/base/dists/gamma' );

console.log( objectKeys( gamma ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[gamma-distribution]: https://en.wikipedia.org/wiki/Gamma_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/gamma/ctor]: https://github.com/stdlib-js/stats/tree/main/base/dists/gamma/ctor

[@stdlib/stats/base/dists/gamma/entropy]: https://github.com/stdlib-js/stats/tree/main/base/dists/gamma/entropy

[@stdlib/stats/base/dists/gamma/kurtosis]: https://github.com/stdlib-js/stats/tree/main/base/dists/gamma/kurtosis

[@stdlib/stats/base/dists/gamma/mean]: https://github.com/stdlib-js/stats/tree/main/base/dists/gamma/mean

[@stdlib/stats/base/dists/gamma/mode]: https://github.com/stdlib-js/stats/tree/main/base/dists/gamma/mode

[@stdlib/stats/base/dists/gamma/skewness]: https://github.com/stdlib-js/stats/tree/main/base/dists/gamma/skewness

[@stdlib/stats/base/dists/gamma/stdev]: https://github.com/stdlib-js/stats/tree/main/base/dists/gamma/stdev

[@stdlib/stats/base/dists/gamma/variance]: https://github.com/stdlib-js/stats/tree/main/base/dists/gamma/variance

[@stdlib/stats/base/dists/gamma/cdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/gamma/cdf

[@stdlib/stats/base/dists/gamma/logcdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/gamma/logcdf

[@stdlib/stats/base/dists/gamma/logpdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/gamma/logpdf

[@stdlib/stats/base/dists/gamma/mgf]: https://github.com/stdlib-js/stats/tree/main/base/dists/gamma/mgf

[@stdlib/stats/base/dists/gamma/pdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/gamma/pdf

[@stdlib/stats/base/dists/gamma/quantile]: https://github.com/stdlib-js/stats/tree/main/base/dists/gamma/quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
