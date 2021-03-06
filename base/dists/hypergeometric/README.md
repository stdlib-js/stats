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

# Hypergeometric

> Hypergeometric distribution.

<section class="usage">

## Usage

```javascript
var hypergeometric = require( '@stdlib/stats/base/dists/hypergeometric' );
```

#### hypergeometric

Hypergeometric distribution.

```javascript
var dist = hypergeometric;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pmf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, N, K, n )`][@stdlib/stats/base/dists/hypergeometric/cdf]</span><span class="delimiter">: </span><span class="description">hypergeometric distribution cumulative distribution function.</span>
-   <span class="signature">[`logpmf( x, N, K, n )`][@stdlib/stats/base/dists/hypergeometric/logpmf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the probability mass function (PMF) for a hypergeometric distribution.</span>
-   <span class="signature">[`pmf( x, N, K, n )`][@stdlib/stats/base/dists/hypergeometric/pmf]</span><span class="delimiter">: </span><span class="description">hypergeometric distribution probability mass function (PMF).</span>
-   <span class="signature">[`quantile( p, N, K, n )`][@stdlib/stats/base/dists/hypergeometric/quantile]</span><span class="delimiter">: </span><span class="description">hypergeometric distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`kurtosis( N, K, n )`][@stdlib/stats/base/dists/hypergeometric/kurtosis]</span><span class="delimiter">: </span><span class="description">hypergeometric distribution excess kurtosis.</span>
-   <span class="signature">[`mean( N, K, n )`][@stdlib/stats/base/dists/hypergeometric/mean]</span><span class="delimiter">: </span><span class="description">hypergeometric distribution expected value.</span>
-   <span class="signature">[`mode( N, K, n )`][@stdlib/stats/base/dists/hypergeometric/mode]</span><span class="delimiter">: </span><span class="description">hypergeometric distribution mode.</span>
-   <span class="signature">[`skewness( N, K, n )`][@stdlib/stats/base/dists/hypergeometric/skewness]</span><span class="delimiter">: </span><span class="description">hypergeometric distribution skewness.</span>
-   <span class="signature">[`stdev( N, K, n )`][@stdlib/stats/base/dists/hypergeometric/stdev]</span><span class="delimiter">: </span><span class="description">hypergeometric distribution standard deviation.</span>
-   <span class="signature">[`variance( N, K, n )`][@stdlib/stats/base/dists/hypergeometric/variance]</span><span class="delimiter">: </span><span class="description">hypergeometric distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [hypergeometric][hypergeometric-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Hypergeometric( N, K, n )`][@stdlib/stats/base/dists/hypergeometric/ctor]</span><span class="delimiter">: </span><span class="description">hypergeometric distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Hypergeometric = require( '@stdlib/stats/base/dists/hypergeometric' ).Hypergeometric;

var dist = new Hypergeometric( 8, 2, 4 );

var y = dist.cdf( 0.5 );
// returns ~0.214
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var hypergeometric = require( '@stdlib/stats/base/dists/hypergeometric' );

console.log( objectKeys( hypergeometric ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[hypergeometric-distribution]: https://en.wikipedia.org/wiki/Hypergeometric_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/hypergeometric/ctor]: https://github.com/stdlib-js/stats/tree/main/base/dists/hypergeometric/ctor

[@stdlib/stats/base/dists/hypergeometric/kurtosis]: https://github.com/stdlib-js/stats/tree/main/base/dists/hypergeometric/kurtosis

[@stdlib/stats/base/dists/hypergeometric/mean]: https://github.com/stdlib-js/stats/tree/main/base/dists/hypergeometric/mean

[@stdlib/stats/base/dists/hypergeometric/mode]: https://github.com/stdlib-js/stats/tree/main/base/dists/hypergeometric/mode

[@stdlib/stats/base/dists/hypergeometric/skewness]: https://github.com/stdlib-js/stats/tree/main/base/dists/hypergeometric/skewness

[@stdlib/stats/base/dists/hypergeometric/stdev]: https://github.com/stdlib-js/stats/tree/main/base/dists/hypergeometric/stdev

[@stdlib/stats/base/dists/hypergeometric/variance]: https://github.com/stdlib-js/stats/tree/main/base/dists/hypergeometric/variance

[@stdlib/stats/base/dists/hypergeometric/cdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/hypergeometric/cdf

[@stdlib/stats/base/dists/hypergeometric/logpmf]: https://github.com/stdlib-js/stats/tree/main/base/dists/hypergeometric/logpmf

[@stdlib/stats/base/dists/hypergeometric/pmf]: https://github.com/stdlib-js/stats/tree/main/base/dists/hypergeometric/pmf

[@stdlib/stats/base/dists/hypergeometric/quantile]: https://github.com/stdlib-js/stats/tree/main/base/dists/hypergeometric/quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
