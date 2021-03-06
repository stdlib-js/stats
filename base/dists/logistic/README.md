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

# Logistic

> Logistic distribution.

<section class="usage">

## Usage

```javascript
var logistic = require( '@stdlib/stats/base/dists/logistic' );
```

#### logistic

Logistic distribution.

```javascript
var dist = logistic;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, mu, s )`][@stdlib/stats/base/dists/logistic/cdf]</span><span class="delimiter">: </span><span class="description">logistic distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, mu, s )`][@stdlib/stats/base/dists/logistic/logcdf]</span><span class="delimiter">: </span><span class="description">logistic distribution logarithm of cumulative distribution function.</span>
-   <span class="signature">[`logpdf( x, mu, s )`][@stdlib/stats/base/dists/logistic/logpdf]</span><span class="delimiter">: </span><span class="description">logistic distribution logarithm of probability density function (PDF).</span>
-   <span class="signature">[`mgf( t, mu, s )`][@stdlib/stats/base/dists/logistic/mgf]</span><span class="delimiter">: </span><span class="description">logistic distribution moment-generating function (MGF).</span>
-   <span class="signature">[`pdf( x, mu, s )`][@stdlib/stats/base/dists/logistic/pdf]</span><span class="delimiter">: </span><span class="description">logistic distribution probability density function (PDF).</span>
-   <span class="signature">[`quantile( p, mu, s )`][@stdlib/stats/base/dists/logistic/quantile]</span><span class="delimiter">: </span><span class="description">logistic distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( mu, s )`][@stdlib/stats/base/dists/logistic/entropy]</span><span class="delimiter">: </span><span class="description">logistic distribution differential entropy.</span>
-   <span class="signature">[`kurtosis( mu, s )`][@stdlib/stats/base/dists/logistic/kurtosis]</span><span class="delimiter">: </span><span class="description">logistic distribution excess kurtosis.</span>
-   <span class="signature">[`mean( mu, s )`][@stdlib/stats/base/dists/logistic/mean]</span><span class="delimiter">: </span><span class="description">logistic distribution expected value.</span>
-   <span class="signature">[`median( mu, s )`][@stdlib/stats/base/dists/logistic/median]</span><span class="delimiter">: </span><span class="description">logistic distribution median.</span>
-   <span class="signature">[`mode( mu, s )`][@stdlib/stats/base/dists/logistic/mode]</span><span class="delimiter">: </span><span class="description">logistic distribution mode.</span>
-   <span class="signature">[`skewness( mu, s )`][@stdlib/stats/base/dists/logistic/skewness]</span><span class="delimiter">: </span><span class="description">logistic distribution skewness.</span>
-   <span class="signature">[`stdev( mu, s )`][@stdlib/stats/base/dists/logistic/stdev]</span><span class="delimiter">: </span><span class="description">logistic distribution standard deviation.</span>
-   <span class="signature">[`variance( mu, s )`][@stdlib/stats/base/dists/logistic/variance]</span><span class="delimiter">: </span><span class="description">logistic distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [logistic][logistic-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Logistic( [mu, s] )`][@stdlib/stats/base/dists/logistic/ctor]</span><span class="delimiter">: </span><span class="description">logistic distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Logistic = require( '@stdlib/stats/base/dists/logistic' ).Logistic;

var dist = new Logistic( 2.0, 4.0 );

var y = dist.pdf( 2.0 );
// returns 0.0625
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var logistic = require( '@stdlib/stats/base/dists/logistic' );

console.log( objectKeys( logistic ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[logistic-distribution]: https://en.wikipedia.org/wiki/Logistic_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/logistic/ctor]: https://github.com/stdlib-js/stats/tree/main/base/dists/logistic/ctor

[@stdlib/stats/base/dists/logistic/entropy]: https://github.com/stdlib-js/stats/tree/main/base/dists/logistic/entropy

[@stdlib/stats/base/dists/logistic/kurtosis]: https://github.com/stdlib-js/stats/tree/main/base/dists/logistic/kurtosis

[@stdlib/stats/base/dists/logistic/mean]: https://github.com/stdlib-js/stats/tree/main/base/dists/logistic/mean

[@stdlib/stats/base/dists/logistic/median]: https://github.com/stdlib-js/stats/tree/main/base/dists/logistic/median

[@stdlib/stats/base/dists/logistic/mode]: https://github.com/stdlib-js/stats/tree/main/base/dists/logistic/mode

[@stdlib/stats/base/dists/logistic/skewness]: https://github.com/stdlib-js/stats/tree/main/base/dists/logistic/skewness

[@stdlib/stats/base/dists/logistic/stdev]: https://github.com/stdlib-js/stats/tree/main/base/dists/logistic/stdev

[@stdlib/stats/base/dists/logistic/variance]: https://github.com/stdlib-js/stats/tree/main/base/dists/logistic/variance

[@stdlib/stats/base/dists/logistic/cdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/logistic/cdf

[@stdlib/stats/base/dists/logistic/logcdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/logistic/logcdf

[@stdlib/stats/base/dists/logistic/logpdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/logistic/logpdf

[@stdlib/stats/base/dists/logistic/mgf]: https://github.com/stdlib-js/stats/tree/main/base/dists/logistic/mgf

[@stdlib/stats/base/dists/logistic/pdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/logistic/pdf

[@stdlib/stats/base/dists/logistic/quantile]: https://github.com/stdlib-js/stats/tree/main/base/dists/logistic/quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
