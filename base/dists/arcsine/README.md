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

# Arcsine

> Arcsine distribution.

<section class="usage">

## Usage

```javascript
var arcsine = require( '@stdlib/stats/base/dists/arcsine' );
```

#### arcsine

[Arcsine][arcsine-distribution] distribution.

```javascript
var dist = arcsine;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, a, b )`][@stdlib/stats/base/dists/arcsine/cdf]</span><span class="delimiter">: </span><span class="description">arcsine distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, a, b )`][@stdlib/stats/base/dists/arcsine/logcdf]</span><span class="delimiter">: </span><span class="description">arcsine distribution logarithm of cumulative distribution function.</span>
-   <span class="signature">[`logpdf( x, a, b )`][@stdlib/stats/base/dists/arcsine/logpdf]</span><span class="delimiter">: </span><span class="description">arcsine distribution logarithm of probability density function (PDF).</span>
-   <span class="signature">[`pdf( x, a, b )`][@stdlib/stats/base/dists/arcsine/pdf]</span><span class="delimiter">: </span><span class="description">arcsine distribution probability density function (PDF).</span>
-   <span class="signature">[`quantile( p, a, b )`][@stdlib/stats/base/dists/arcsine/quantile]</span><span class="delimiter">: </span><span class="description">arcsine distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( a, b )`][@stdlib/stats/base/dists/arcsine/entropy]</span><span class="delimiter">: </span><span class="description">arcsine distribution differential entropy.</span>
-   <span class="signature">[`kurtosis( a, b )`][@stdlib/stats/base/dists/arcsine/kurtosis]</span><span class="delimiter">: </span><span class="description">arcsine distribution excess kurtosis.</span>
-   <span class="signature">[`mean( a, b )`][@stdlib/stats/base/dists/arcsine/mean]</span><span class="delimiter">: </span><span class="description">arcsine distribution expected value.</span>
-   <span class="signature">[`median( a, b )`][@stdlib/stats/base/dists/arcsine/median]</span><span class="delimiter">: </span><span class="description">arcsine distribution median.</span>
-   <span class="signature">[`mode( a, b )`][@stdlib/stats/base/dists/arcsine/mode]</span><span class="delimiter">: </span><span class="description">arcsine distribution mode.</span>
-   <span class="signature">[`skewness( a, b )`][@stdlib/stats/base/dists/arcsine/skewness]</span><span class="delimiter">: </span><span class="description">arcsine distribution skewness.</span>
-   <span class="signature">[`stdev( a, b )`][@stdlib/stats/base/dists/arcsine/stdev]</span><span class="delimiter">: </span><span class="description">arcsine distribution standard deviation.</span>
-   <span class="signature">[`variance( a, b )`][@stdlib/stats/base/dists/arcsine/variance]</span><span class="delimiter">: </span><span class="description">arcsine distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating an [arcsine][arcsine-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Arcsine( [a, b] )`][@stdlib/stats/base/dists/arcsine/ctor]</span><span class="delimiter">: </span><span class="description">arcsine distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Arcsine = require( '@stdlib/stats/base/dists/arcsine' ).Arcsine;
var dist = new Arcsine( 2.0, 4.0 );

var mu = dist.mean;
// returns 3.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var arcsine = require( '@stdlib/stats/base/dists/arcsine' );

console.log( objectKeys( arcsine ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[arcsine-distribution]: https://en.wikipedia.org/wiki/Arcsine_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/arcsine/ctor]: https://github.com/stdlib-js/stats/tree/main/base/dists/arcsine/ctor

[@stdlib/stats/base/dists/arcsine/entropy]: https://github.com/stdlib-js/stats/tree/main/base/dists/arcsine/entropy

[@stdlib/stats/base/dists/arcsine/kurtosis]: https://github.com/stdlib-js/stats/tree/main/base/dists/arcsine/kurtosis

[@stdlib/stats/base/dists/arcsine/mean]: https://github.com/stdlib-js/stats/tree/main/base/dists/arcsine/mean

[@stdlib/stats/base/dists/arcsine/median]: https://github.com/stdlib-js/stats/tree/main/base/dists/arcsine/median

[@stdlib/stats/base/dists/arcsine/mode]: https://github.com/stdlib-js/stats/tree/main/base/dists/arcsine/mode

[@stdlib/stats/base/dists/arcsine/skewness]: https://github.com/stdlib-js/stats/tree/main/base/dists/arcsine/skewness

[@stdlib/stats/base/dists/arcsine/stdev]: https://github.com/stdlib-js/stats/tree/main/base/dists/arcsine/stdev

[@stdlib/stats/base/dists/arcsine/variance]: https://github.com/stdlib-js/stats/tree/main/base/dists/arcsine/variance

[@stdlib/stats/base/dists/arcsine/cdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/arcsine/cdf

[@stdlib/stats/base/dists/arcsine/logcdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/arcsine/logcdf

[@stdlib/stats/base/dists/arcsine/logpdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/arcsine/logpdf

[@stdlib/stats/base/dists/arcsine/pdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/arcsine/pdf

[@stdlib/stats/base/dists/arcsine/quantile]: https://github.com/stdlib-js/stats/tree/main/base/dists/arcsine/quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
