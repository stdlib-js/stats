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

# Lévy

> Lévy distribution.

<section class="usage">

## Usage

```javascript
var levy = require( '@stdlib/stats/base/dists/levy' );
```

#### levy

Lévy distribution.

```javascript
var dist = levy;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, mu, c )`][@stdlib/stats/base/dists/levy/cdf]</span><span class="delimiter">: </span><span class="description">Lévy distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, mu, c )`][@stdlib/stats/base/dists/levy/logcdf]</span><span class="delimiter">: </span><span class="description">Lévy distribution logarithm of cumulative distribution function.</span>
-   <span class="signature">[`logpdf( x, mu, c )`][@stdlib/stats/base/dists/levy/logpdf]</span><span class="delimiter">: </span><span class="description">Lévy distribution logarithm of probability density function (PDF).</span>
-   <span class="signature">[`pdf( x, mu, c )`][@stdlib/stats/base/dists/levy/pdf]</span><span class="delimiter">: </span><span class="description">Lévy distribution probability density function (PDF).</span>
-   <span class="signature">[`quantile( p, mu, c )`][@stdlib/stats/base/dists/levy/quantile]</span><span class="delimiter">: </span><span class="description">Lévy distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( mu, c )`][@stdlib/stats/base/dists/levy/entropy]</span><span class="delimiter">: </span><span class="description">Lévy distribution differential entropy.</span>
-   <span class="signature">[`mean( mu, c )`][@stdlib/stats/base/dists/levy/mean]</span><span class="delimiter">: </span><span class="description">Lévy distribution expected value.</span>
-   <span class="signature">[`median( mu, c )`][@stdlib/stats/base/dists/levy/median]</span><span class="delimiter">: </span><span class="description">Lévy distribution median.</span>
-   <span class="signature">[`mode( mu, c )`][@stdlib/stats/base/dists/levy/mode]</span><span class="delimiter">: </span><span class="description">Lévy distribution mode.</span>
-   <span class="signature">[`stdev( mu, c )`][@stdlib/stats/base/dists/levy/stdev]</span><span class="delimiter">: </span><span class="description">Lévy distribution standard deviation.</span>
-   <span class="signature">[`variance( mu, c )`][@stdlib/stats/base/dists/levy/variance]</span><span class="delimiter">: </span><span class="description">Lévy distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [Lévy][levy-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Levy( [mu, c] )`][@stdlib/stats/base/dists/levy/ctor]</span><span class="delimiter">: </span><span class="description">Lévy distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Levy = require( '@stdlib/stats/base/dists/levy' ).Levy;

var dist = new Levy( 2.0, 4.0 );

var y = dist.pdf( 2.5 );
// returns ~0.041
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var levy = require( '@stdlib/stats/base/dists/levy' );

console.log( objectKeys( levy ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[levy-distribution]: https://en.wikipedia.org/wiki/L%C3%A9vy_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/levy/ctor]: https://github.com/stdlib-js/stats/tree/main/base/dists/levy/ctor

[@stdlib/stats/base/dists/levy/entropy]: https://github.com/stdlib-js/stats/tree/main/base/dists/levy/entropy

[@stdlib/stats/base/dists/levy/mean]: https://github.com/stdlib-js/stats/tree/main/base/dists/levy/mean

[@stdlib/stats/base/dists/levy/median]: https://github.com/stdlib-js/stats/tree/main/base/dists/levy/median

[@stdlib/stats/base/dists/levy/mode]: https://github.com/stdlib-js/stats/tree/main/base/dists/levy/mode

[@stdlib/stats/base/dists/levy/stdev]: https://github.com/stdlib-js/stats/tree/main/base/dists/levy/stdev

[@stdlib/stats/base/dists/levy/variance]: https://github.com/stdlib-js/stats/tree/main/base/dists/levy/variance

[@stdlib/stats/base/dists/levy/cdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/levy/cdf

[@stdlib/stats/base/dists/levy/logcdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/levy/logcdf

[@stdlib/stats/base/dists/levy/logpdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/levy/logpdf

[@stdlib/stats/base/dists/levy/pdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/levy/pdf

[@stdlib/stats/base/dists/levy/quantile]: https://github.com/stdlib-js/stats/tree/main/base/dists/levy/quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
