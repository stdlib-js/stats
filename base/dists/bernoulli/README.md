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

# Bernoulli

> Bernoulli distribution.

<section class="usage">

## Usage

```javascript
var bernoulli = require( '@stdlib/stats/base/dists/bernoulli' );
```

#### bernoulli

Bernoulli distribution.

```javascript
var dist = bernoulli;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pmf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, p )`][@stdlib/stats/base/dists/bernoulli/cdf]</span><span class="delimiter">: </span><span class="description">Bernoulli distribution cumulative distribution function.</span>
-   <span class="signature">[`mgf( t, p )`][@stdlib/stats/base/dists/bernoulli/mgf]</span><span class="delimiter">: </span><span class="description">Bernoulli distribution moment-generating function (MGF).</span>
-   <span class="signature">[`pmf( x, p )`][@stdlib/stats/base/dists/bernoulli/pmf]</span><span class="delimiter">: </span><span class="description">Bernoulli distribution probability mass function (PMF).</span>
-   <span class="signature">[`quantile( r, p )`][@stdlib/stats/base/dists/bernoulli/quantile]</span><span class="delimiter">: </span><span class="description">Bernoulli distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( p )`][@stdlib/stats/base/dists/bernoulli/entropy]</span><span class="delimiter">: </span><span class="description">Bernoulli distribution entropy.</span>
-   <span class="signature">[`kurtosis( p )`][@stdlib/stats/base/dists/bernoulli/kurtosis]</span><span class="delimiter">: </span><span class="description">Bernoulli distribution excess kurtosis.</span>
-   <span class="signature">[`mean( p )`][@stdlib/stats/base/dists/bernoulli/mean]</span><span class="delimiter">: </span><span class="description">Bernoulli distribution expected value.</span>
-   <span class="signature">[`median( p )`][@stdlib/stats/base/dists/bernoulli/median]</span><span class="delimiter">: </span><span class="description">Bernoulli distribution median.</span>
-   <span class="signature">[`mode( p )`][@stdlib/stats/base/dists/bernoulli/mode]</span><span class="delimiter">: </span><span class="description">Bernoulli distribution mode.</span>
-   <span class="signature">[`skewness( p )`][@stdlib/stats/base/dists/bernoulli/skewness]</span><span class="delimiter">: </span><span class="description">Bernoulli distribution skewness.</span>
-   <span class="signature">[`stdev( p )`][@stdlib/stats/base/dists/bernoulli/stdev]</span><span class="delimiter">: </span><span class="description">Bernoulli distribution standard deviation.</span>
-   <span class="signature">[`variance( p )`][@stdlib/stats/base/dists/bernoulli/variance]</span><span class="delimiter">: </span><span class="description">Bernoulli distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [Bernoulli][bernoulli-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Bernoulli( [p] )`][@stdlib/stats/base/dists/bernoulli/ctor]</span><span class="delimiter">: </span><span class="description">Bernoulli distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Bernoulli = require( '@stdlib/stats/base/dists/bernoulli' ).Bernoulli;

var dist = new Bernoulli( 0.2 );

var y = dist.pmf( 0.0 );
// returns 0.8

y = dist.pmf( 1.0 );
// returns 0.2
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var bernoulli = require( '@stdlib/stats/base/dists/bernoulli' );

console.log( objectKeys( bernoulli ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[bernoulli-distribution]: https://en.wikipedia.org/wiki/Bernoulli_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/bernoulli/ctor]: https://github.com/stdlib-js/stats/tree/main/base/dists/bernoulli/ctor

[@stdlib/stats/base/dists/bernoulli/entropy]: https://github.com/stdlib-js/stats/tree/main/base/dists/bernoulli/entropy

[@stdlib/stats/base/dists/bernoulli/kurtosis]: https://github.com/stdlib-js/stats/tree/main/base/dists/bernoulli/kurtosis

[@stdlib/stats/base/dists/bernoulli/mean]: https://github.com/stdlib-js/stats/tree/main/base/dists/bernoulli/mean

[@stdlib/stats/base/dists/bernoulli/median]: https://github.com/stdlib-js/stats/tree/main/base/dists/bernoulli/median

[@stdlib/stats/base/dists/bernoulli/mode]: https://github.com/stdlib-js/stats/tree/main/base/dists/bernoulli/mode

[@stdlib/stats/base/dists/bernoulli/skewness]: https://github.com/stdlib-js/stats/tree/main/base/dists/bernoulli/skewness

[@stdlib/stats/base/dists/bernoulli/stdev]: https://github.com/stdlib-js/stats/tree/main/base/dists/bernoulli/stdev

[@stdlib/stats/base/dists/bernoulli/variance]: https://github.com/stdlib-js/stats/tree/main/base/dists/bernoulli/variance

[@stdlib/stats/base/dists/bernoulli/cdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/bernoulli/cdf

[@stdlib/stats/base/dists/bernoulli/mgf]: https://github.com/stdlib-js/stats/tree/main/base/dists/bernoulli/mgf

[@stdlib/stats/base/dists/bernoulli/pmf]: https://github.com/stdlib-js/stats/tree/main/base/dists/bernoulli/pmf

[@stdlib/stats/base/dists/bernoulli/quantile]: https://github.com/stdlib-js/stats/tree/main/base/dists/bernoulli/quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
