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

# Cauchy

> Cauchy distribution.

<section class="usage">

## Usage

```javascript
var cauchy = require( '@stdlib/stats/base/dists/cauchy' );
```

#### cauchy

Cauchy distribution.

```javascript
var dist = cauchy;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, x0, gamma )`][@stdlib/stats/base/dists/cauchy/cdf]</span><span class="delimiter">: </span><span class="description">Cauchy distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, x0, gamma )`][@stdlib/stats/base/dists/cauchy/logcdf]</span><span class="delimiter">: </span><span class="description">Cauchy distribution logarithm of cumulative distribution function.</span>
-   <span class="signature">[`logpdf( x, x0, gamma )`][@stdlib/stats/base/dists/cauchy/logpdf]</span><span class="delimiter">: </span><span class="description">Cauchy distribution logarithm of probability density function (logPDF).</span>
-   <span class="signature">[`pdf( x, x0, gamma )`][@stdlib/stats/base/dists/cauchy/pdf]</span><span class="delimiter">: </span><span class="description">Cauchy distribution probability density function (PDF).</span>
-   <span class="signature">[`quantile( p, x0, gamma )`][@stdlib/stats/base/dists/cauchy/quantile]</span><span class="delimiter">: </span><span class="description">Cauchy distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( x0, gamma )`][@stdlib/stats/base/dists/cauchy/entropy]</span><span class="delimiter">: </span><span class="description">Cauchy distribution differential entropy.</span>
-   <span class="signature">[`median( x0, gamma )`][@stdlib/stats/base/dists/cauchy/median]</span><span class="delimiter">: </span><span class="description">Cauchy distribution median.</span>
-   <span class="signature">[`mode( x0, gamma )`][@stdlib/stats/base/dists/cauchy/mode]</span><span class="delimiter">: </span><span class="description">Cauchy distribution mode.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [Cauchy][cauchy-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Cauchy( [x0, gamma] )`][@stdlib/stats/base/dists/cauchy/ctor]</span><span class="delimiter">: </span><span class="description">Cauchy distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Cauchy = require( '@stdlib/stats/base/dists/cauchy' ).Cauchy;

var dist = new Cauchy( 2.0, 4.0 );

var median = dist.median;
// returns 2.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var cauchy = require( '@stdlib/stats/base/dists/cauchy' );

console.log( objectKeys( cauchy ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[cauchy-distribution]: https://en.wikipedia.org/wiki/Cauchy_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/cauchy/ctor]: https://github.com/stdlib-js/stats/tree/main/base/dists/cauchy/ctor

[@stdlib/stats/base/dists/cauchy/entropy]: https://github.com/stdlib-js/stats/tree/main/base/dists/cauchy/entropy

[@stdlib/stats/base/dists/cauchy/median]: https://github.com/stdlib-js/stats/tree/main/base/dists/cauchy/median

[@stdlib/stats/base/dists/cauchy/mode]: https://github.com/stdlib-js/stats/tree/main/base/dists/cauchy/mode

[@stdlib/stats/base/dists/cauchy/cdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/cauchy/cdf

[@stdlib/stats/base/dists/cauchy/logcdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/cauchy/logcdf

[@stdlib/stats/base/dists/cauchy/logpdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/cauchy/logpdf

[@stdlib/stats/base/dists/cauchy/pdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/cauchy/pdf

[@stdlib/stats/base/dists/cauchy/quantile]: https://github.com/stdlib-js/stats/tree/main/base/dists/cauchy/quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
