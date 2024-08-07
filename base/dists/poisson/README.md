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

# Poisson

> Poisson distribution.

<section class="usage">

## Usage

```javascript
var poisson = require( '@stdlib/stats/base/dists/poisson' );
```

#### poisson

Poisson distribution.

```javascript
var dist = poisson;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pmf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, lambda )`][@stdlib/stats/base/dists/poisson/cdf]</span><span class="delimiter">: </span><span class="description">Poisson distribution cumulative distribution function.</span>
-   <span class="signature">[`logpmf( x, lambda )`][@stdlib/stats/base/dists/poisson/logpmf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the probability mass function (PMF) for a Poisson distribution.</span>
-   <span class="signature">[`mgf( t, lambda )`][@stdlib/stats/base/dists/poisson/mgf]</span><span class="delimiter">: </span><span class="description">Poisson distribution moment-generating function (MGF).</span>
-   <span class="signature">[`pmf( x, lambda )`][@stdlib/stats/base/dists/poisson/pmf]</span><span class="delimiter">: </span><span class="description">Poisson distribution probability mass function (PMF).</span>
-   <span class="signature">[`quantile( p, lambda )`][@stdlib/stats/base/dists/poisson/quantile]</span><span class="delimiter">: </span><span class="description">Poisson distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( lambda )`][@stdlib/stats/base/dists/poisson/entropy]</span><span class="delimiter">: </span><span class="description">Poisson distribution entropy.</span>
-   <span class="signature">[`kurtosis( lambda )`][@stdlib/stats/base/dists/poisson/kurtosis]</span><span class="delimiter">: </span><span class="description">Poisson distribution excess kurtosis.</span>
-   <span class="signature">[`mean( lambda )`][@stdlib/stats/base/dists/poisson/mean]</span><span class="delimiter">: </span><span class="description">Poisson distribution expected value.</span>
-   <span class="signature">[`median( lambda )`][@stdlib/stats/base/dists/poisson/median]</span><span class="delimiter">: </span><span class="description">Poisson distribution median.</span>
-   <span class="signature">[`mode( lambda )`][@stdlib/stats/base/dists/poisson/mode]</span><span class="delimiter">: </span><span class="description">Poisson distribution mode.</span>
-   <span class="signature">[`skewness( lambda )`][@stdlib/stats/base/dists/poisson/skewness]</span><span class="delimiter">: </span><span class="description">Poisson distribution skewness.</span>
-   <span class="signature">[`stdev( lambda )`][@stdlib/stats/base/dists/poisson/stdev]</span><span class="delimiter">: </span><span class="description">Poisson distribution standard deviation.</span>
-   <span class="signature">[`variance( lambda )`][@stdlib/stats/base/dists/poisson/variance]</span><span class="delimiter">: </span><span class="description">Poisson distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [Poisson][poisson-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Poisson( [lambda] )`][@stdlib/stats/base/dists/poisson/ctor]</span><span class="delimiter">: </span><span class="description">Poisson distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Poisson = require( '@stdlib/stats/base/dists/poisson' ).Poisson;

var dist = new Poisson( 2.0 );

var y = dist.pmf( 3.0 );
// returns ~0.18

y = dist.pmf( 2.3 );
// returns 0.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var poisson = require( '@stdlib/stats/base/dists/poisson' );

/*
* Let's take a customer service center example: average rate of customer inquiries is 3 per hour.
* This situation can be modeled using a Poisson distribution with λ = 3
*/

var lambda = 3;

// Mean can be used to calculate the average number of inquiries per hour:
console.log( poisson.mean( lambda ) );
// => 3

// Standard deviation can be used to calculate the measure of the spread of inquiries around the mean:
console.log( poisson.stdev( lambda ) );
// => ~1.7321

// Variance can be used to calculate the variability of the number of inquiries:
console.log( poisson.variance( lambda ) );
// => 3

// PMF can be used to calculate specific number of inquiries in an hour:
console.log( poisson.pmf( 4, lambda ) );
// => ~0.1680

// CDF can be used to calculate probability up to certain number of inquiries in an hour:
console.log( poisson.cdf( 2, lambda ) );
// => ~0.4232

// Quantile can be used to calculate the number of inquiries at which you can be 80% confident that the actual number will not exceed.
console.log( poisson.quantile( 0.8, lambda ) );
// => 4

// MGF can be used for more advanced statistical analyses and generating moments of the distribution.
console.log( poisson.mgf( 1.0, lambda ) );
// => ~173.2690
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[poisson-distribution]: https://en.wikipedia.org/wiki/Poisson_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/poisson/ctor]: https://github.com/stdlib-js/stats/tree/main/base/dists/poisson/ctor

[@stdlib/stats/base/dists/poisson/entropy]: https://github.com/stdlib-js/stats/tree/main/base/dists/poisson/entropy

[@stdlib/stats/base/dists/poisson/kurtosis]: https://github.com/stdlib-js/stats/tree/main/base/dists/poisson/kurtosis

[@stdlib/stats/base/dists/poisson/mean]: https://github.com/stdlib-js/stats/tree/main/base/dists/poisson/mean

[@stdlib/stats/base/dists/poisson/median]: https://github.com/stdlib-js/stats/tree/main/base/dists/poisson/median

[@stdlib/stats/base/dists/poisson/mode]: https://github.com/stdlib-js/stats/tree/main/base/dists/poisson/mode

[@stdlib/stats/base/dists/poisson/skewness]: https://github.com/stdlib-js/stats/tree/main/base/dists/poisson/skewness

[@stdlib/stats/base/dists/poisson/stdev]: https://github.com/stdlib-js/stats/tree/main/base/dists/poisson/stdev

[@stdlib/stats/base/dists/poisson/variance]: https://github.com/stdlib-js/stats/tree/main/base/dists/poisson/variance

[@stdlib/stats/base/dists/poisson/cdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/poisson/cdf

[@stdlib/stats/base/dists/poisson/logpmf]: https://github.com/stdlib-js/stats/tree/main/base/dists/poisson/logpmf

[@stdlib/stats/base/dists/poisson/mgf]: https://github.com/stdlib-js/stats/tree/main/base/dists/poisson/mgf

[@stdlib/stats/base/dists/poisson/pmf]: https://github.com/stdlib-js/stats/tree/main/base/dists/poisson/pmf

[@stdlib/stats/base/dists/poisson/quantile]: https://github.com/stdlib-js/stats/tree/main/base/dists/poisson/quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
