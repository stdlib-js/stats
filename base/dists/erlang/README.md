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

# Erlang

> Erlang distribution.

<section class="usage">

## Usage

```javascript
var erlang = require( '@stdlib/stats/base/dists/erlang' );
```

#### erlang

Erlang distribution.

```javascript
var dist = erlang;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, k, lambda )`][@stdlib/stats/base/dists/erlang/cdf]</span><span class="delimiter">: </span><span class="description">Erlang distribution cumulative distribution function.</span>
-   <span class="signature">[`logpdf( x, k, lambda )`][@stdlib/stats/base/dists/erlang/logpdf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the probability density function (PDF) for an Erlang distribution.</span>
-   <span class="signature">[`mgf( t, k, lambda )`][@stdlib/stats/base/dists/erlang/mgf]</span><span class="delimiter">: </span><span class="description">Erlang distribution moment-generating function (MGF).</span>
-   <span class="signature">[`pdf( x, k, lambda )`][@stdlib/stats/base/dists/erlang/pdf]</span><span class="delimiter">: </span><span class="description">Erlang distribution probability density function (PDF).</span>
-   <span class="signature">[`quantile( p, k, lambda )`][@stdlib/stats/base/dists/erlang/quantile]</span><span class="delimiter">: </span><span class="description">Erlang distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( k, lambda )`][@stdlib/stats/base/dists/erlang/entropy]</span><span class="delimiter">: </span><span class="description">Erlang distribution differential entropy.</span>
-   <span class="signature">[`kurtosis( k, lambda )`][@stdlib/stats/base/dists/erlang/kurtosis]</span><span class="delimiter">: </span><span class="description">Erlang distribution excess kurtosis.</span>
-   <span class="signature">[`mean( k, lambda )`][@stdlib/stats/base/dists/erlang/mean]</span><span class="delimiter">: </span><span class="description">Erlang distribution expected value.</span>
-   <span class="signature">[`mode( k, lambda )`][@stdlib/stats/base/dists/erlang/mode]</span><span class="delimiter">: </span><span class="description">Erlang distribution mode.</span>
-   <span class="signature">[`skewness( k, lambda )`][@stdlib/stats/base/dists/erlang/skewness]</span><span class="delimiter">: </span><span class="description">Erlang distribution skewness.</span>
-   <span class="signature">[`stdev( k, lambda )`][@stdlib/stats/base/dists/erlang/stdev]</span><span class="delimiter">: </span><span class="description">Erlang distribution standard deviation.</span>
-   <span class="signature">[`variance( k, lambda )`][@stdlib/stats/base/dists/erlang/variance]</span><span class="delimiter">: </span><span class="description">Erlang distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating an [Erlang][erlang-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Erlang( [k, lambda] )`][@stdlib/stats/base/dists/erlang/ctor]</span><span class="delimiter">: </span><span class="description">Erlang distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Erlang = require( '@stdlib/stats/base/dists/erlang' ).Erlang;

var dist = new Erlang( 2, 4.0 );

var y = dist.logpdf( 0.8 );
// returns ~-0.65
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var erlang = require( '@stdlib/stats/base/dists/erlang' );

console.log( objectKeys( erlang ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[erlang-distribution]: https://en.wikipedia.org/wiki/Erlang_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/erlang/ctor]: https://github.com/stdlib-js/stats/tree/main/base/dists/erlang/ctor

[@stdlib/stats/base/dists/erlang/entropy]: https://github.com/stdlib-js/stats/tree/main/base/dists/erlang/entropy

[@stdlib/stats/base/dists/erlang/kurtosis]: https://github.com/stdlib-js/stats/tree/main/base/dists/erlang/kurtosis

[@stdlib/stats/base/dists/erlang/mean]: https://github.com/stdlib-js/stats/tree/main/base/dists/erlang/mean

[@stdlib/stats/base/dists/erlang/mode]: https://github.com/stdlib-js/stats/tree/main/base/dists/erlang/mode

[@stdlib/stats/base/dists/erlang/skewness]: https://github.com/stdlib-js/stats/tree/main/base/dists/erlang/skewness

[@stdlib/stats/base/dists/erlang/stdev]: https://github.com/stdlib-js/stats/tree/main/base/dists/erlang/stdev

[@stdlib/stats/base/dists/erlang/variance]: https://github.com/stdlib-js/stats/tree/main/base/dists/erlang/variance

[@stdlib/stats/base/dists/erlang/cdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/erlang/cdf

[@stdlib/stats/base/dists/erlang/logpdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/erlang/logpdf

[@stdlib/stats/base/dists/erlang/mgf]: https://github.com/stdlib-js/stats/tree/main/base/dists/erlang/mgf

[@stdlib/stats/base/dists/erlang/pdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/erlang/pdf

[@stdlib/stats/base/dists/erlang/quantile]: https://github.com/stdlib-js/stats/tree/main/base/dists/erlang/quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
