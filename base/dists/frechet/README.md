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

# Fréchet

> Fréchet distribution.

<section class="usage">

## Usage

```javascript
var frechet = require( '@stdlib/stats/base/dists/frechet' );
```

#### frechet

Fréchet distribution.

```javascript
var dist = frechet;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, alpha, s, m )`][@stdlib/stats/base/dists/frechet/cdf]</span><span class="delimiter">: </span><span class="description">Fréchet distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, alpha, s, m )`][@stdlib/stats/base/dists/frechet/logcdf]</span><span class="delimiter">: </span><span class="description">Fréchet distribution logarithm of cumulative distribution function.</span>
-   <span class="signature">[`logpdf( x, alpha, s, m )`][@stdlib/stats/base/dists/frechet/logpdf]</span><span class="delimiter">: </span><span class="description">Fréchet distribution logarithm of probability density function.</span>
-   <span class="signature">[`pdf( x, alpha, s, m )`][@stdlib/stats/base/dists/frechet/pdf]</span><span class="delimiter">: </span><span class="description">Fréchet distribution probability density function.</span>
-   <span class="signature">[`quantile( p, alpha, s, m )`][@stdlib/stats/base/dists/frechet/quantile]</span><span class="delimiter">: </span><span class="description">Fréchet distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( alpha, s, m )`][@stdlib/stats/base/dists/frechet/entropy]</span><span class="delimiter">: </span><span class="description">Fréchet distribution differential entropy.</span>
-   <span class="signature">[`kurtosis( alpha, s, m )`][@stdlib/stats/base/dists/frechet/kurtosis]</span><span class="delimiter">: </span><span class="description">Fréchet distribution kurtosis.</span>
-   <span class="signature">[`mean( alpha, s, m )`][@stdlib/stats/base/dists/frechet/mean]</span><span class="delimiter">: </span><span class="description">Fréchet distribution expected value.</span>
-   <span class="signature">[`median( alpha, s, m )`][@stdlib/stats/base/dists/frechet/median]</span><span class="delimiter">: </span><span class="description">Fréchet distribution median.</span>
-   <span class="signature">[`mode( alpha, s, m )`][@stdlib/stats/base/dists/frechet/mode]</span><span class="delimiter">: </span><span class="description">Fréchet distribution mode.</span>
-   <span class="signature">[`skewness( alpha, s, m )`][@stdlib/stats/base/dists/frechet/skewness]</span><span class="delimiter">: </span><span class="description">Fréchet distribution skewness.</span>
-   <span class="signature">[`stdev( alpha, s, m )`][@stdlib/stats/base/dists/frechet/stdev]</span><span class="delimiter">: </span><span class="description">Fréchet distribution standard deviation.</span>
-   <span class="signature">[`variance( alpha, s, m )`][@stdlib/stats/base/dists/frechet/variance]</span><span class="delimiter">: </span><span class="description">Fréchet distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [Fréchet][frechet-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Frechet( [alpha, s, m] )`][@stdlib/stats/base/dists/frechet/ctor]</span><span class="delimiter">: </span><span class="description">Fréchet distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Frechet = require( '@stdlib/stats/base/dists/frechet' ).Frechet;

var dist = new Frechet( 2.0, 4.0, 3.0 );

var y = dist.pdf( 5.5 );
// returns ~0.158
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var frechet = require( '@stdlib/stats/base/dists/frechet' );

console.log( objectKeys( frechet ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[frechet-distribution]: https://en.wikipedia.org/wiki/Fr%C3%A9chet_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/frechet/ctor]: https://github.com/stdlib-js/stats/tree/main/base/dists/frechet/ctor

[@stdlib/stats/base/dists/frechet/entropy]: https://github.com/stdlib-js/stats/tree/main/base/dists/frechet/entropy

[@stdlib/stats/base/dists/frechet/kurtosis]: https://github.com/stdlib-js/stats/tree/main/base/dists/frechet/kurtosis

[@stdlib/stats/base/dists/frechet/mean]: https://github.com/stdlib-js/stats/tree/main/base/dists/frechet/mean

[@stdlib/stats/base/dists/frechet/median]: https://github.com/stdlib-js/stats/tree/main/base/dists/frechet/median

[@stdlib/stats/base/dists/frechet/mode]: https://github.com/stdlib-js/stats/tree/main/base/dists/frechet/mode

[@stdlib/stats/base/dists/frechet/skewness]: https://github.com/stdlib-js/stats/tree/main/base/dists/frechet/skewness

[@stdlib/stats/base/dists/frechet/stdev]: https://github.com/stdlib-js/stats/tree/main/base/dists/frechet/stdev

[@stdlib/stats/base/dists/frechet/variance]: https://github.com/stdlib-js/stats/tree/main/base/dists/frechet/variance

[@stdlib/stats/base/dists/frechet/cdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/frechet/cdf

[@stdlib/stats/base/dists/frechet/logcdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/frechet/logcdf

[@stdlib/stats/base/dists/frechet/logpdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/frechet/logpdf

[@stdlib/stats/base/dists/frechet/pdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/frechet/pdf

[@stdlib/stats/base/dists/frechet/quantile]: https://github.com/stdlib-js/stats/tree/main/base/dists/frechet/quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
