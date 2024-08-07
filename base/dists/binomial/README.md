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

# Binomial

> Binomial distribution.

<section class="usage">

## Usage

```javascript
var binomial = require( '@stdlib/stats/base/dists/binomial' );
```

#### binomial

Binomial distribution.

```javascript
var dist = binomial;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pmf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, n, p )`][@stdlib/stats/base/dists/binomial/cdf]</span><span class="delimiter">: </span><span class="description">binomial distribution cumulative distribution function.</span>
-   <span class="signature">[`logpmf( x, n, p )`][@stdlib/stats/base/dists/binomial/logpmf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the probability mass function (PMF) for a binomial distribution.</span>
-   <span class="signature">[`mgf( t, n, p )`][@stdlib/stats/base/dists/binomial/mgf]</span><span class="delimiter">: </span><span class="description">binomial distribution moment-generating function (MGF).</span>
-   <span class="signature">[`pmf( x, n, p )`][@stdlib/stats/base/dists/binomial/pmf]</span><span class="delimiter">: </span><span class="description">binomial distribution probability mass function (PMF).</span>
-   <span class="signature">[`quantile( r, n, p )`][@stdlib/stats/base/dists/binomial/quantile]</span><span class="delimiter">: </span><span class="description">binomial distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( n, p )`][@stdlib/stats/base/dists/binomial/entropy]</span><span class="delimiter">: </span><span class="description">binomial distribution entropy.</span>
-   <span class="signature">[`kurtosis( n, p )`][@stdlib/stats/base/dists/binomial/kurtosis]</span><span class="delimiter">: </span><span class="description">binomial distribution excess kurtosis.</span>
-   <span class="signature">[`mean( n, p )`][@stdlib/stats/base/dists/binomial/mean]</span><span class="delimiter">: </span><span class="description">binomial distribution expected value.</span>
-   <span class="signature">[`median( n, p )`][@stdlib/stats/base/dists/binomial/median]</span><span class="delimiter">: </span><span class="description">binomial distribution median.</span>
-   <span class="signature">[`mode( n, p )`][@stdlib/stats/base/dists/binomial/mode]</span><span class="delimiter">: </span><span class="description">binomial distribution mode.</span>
-   <span class="signature">[`skewness( n, p )`][@stdlib/stats/base/dists/binomial/skewness]</span><span class="delimiter">: </span><span class="description">binomial distribution skewness.</span>
-   <span class="signature">[`stdev( n, p )`][@stdlib/stats/base/dists/binomial/stdev]</span><span class="delimiter">: </span><span class="description">binomial distribution standard deviation.</span>
-   <span class="signature">[`variance( n, p )`][@stdlib/stats/base/dists/binomial/variance]</span><span class="delimiter">: </span><span class="description">binomial distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [binomial][binomial-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Binomial( [n, p] )`][@stdlib/stats/base/dists/binomial/ctor]</span><span class="delimiter">: </span><span class="description">binomial distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Binomial = require( '@stdlib/stats/base/dists/binomial' ).Binomial;
var dist = new Binomial( 10, 0.4 );

var mu = dist.mean;
// returns 4
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var binomial = require( '@stdlib/stats/base/dists/binomial' );

/*
* Let's take an example of rolling a fair dice 10 times and counting the number of times a 6 is rolled.
* This situation can be modeled using a Binomial distribution with n = 10 and p = 1/6
*/

var n = 10;
var p = 1/6;

// Mean can be used to calculate the average number of times a 6 is rolled:
console.log( binomial.mean( n, p ) );
// => ~1.6667

// PMF can be used to calculate the probability of getting a certain number of 6s (say 3 sixes):
console.log( binomial.pmf( 3, n, p ) );
// => ~0.1550

// CDF can be used to calculate probability up to certain number of 6s (say up to 3 sixes):
console.log( binomial.cdf( 3, n, p ) );
// => ~0.9303

// Quantile can be used to calculate the number of 6s at which you can be 80% confident that the actual number will not exceed.
console.log( binomial.quantile( 0.8, n, p ) );
// => 3

// Standard deviation can be used to calculate the measure of the spread of 6s around the mean:
console.log( binomial.stdev( n, p ) );
// => ~1.1785

// Skewness can be used to calculate the asymmetry of the distribution of 6s:
console.log( binomial.skewness( n, p ) );
// => ~0.5657

// MGF can be used for more advanced statistical analyses and generating moments of the distribution:
console.log( binomial.mgf( 0.5, n, p ) );
// => ~2.7917
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[binomial-distribution]: https://en.wikipedia.org/wiki/Binomial_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/binomial/ctor]: https://github.com/stdlib-js/stats/tree/main/base/dists/binomial/ctor

[@stdlib/stats/base/dists/binomial/entropy]: https://github.com/stdlib-js/stats/tree/main/base/dists/binomial/entropy

[@stdlib/stats/base/dists/binomial/kurtosis]: https://github.com/stdlib-js/stats/tree/main/base/dists/binomial/kurtosis

[@stdlib/stats/base/dists/binomial/mean]: https://github.com/stdlib-js/stats/tree/main/base/dists/binomial/mean

[@stdlib/stats/base/dists/binomial/median]: https://github.com/stdlib-js/stats/tree/main/base/dists/binomial/median

[@stdlib/stats/base/dists/binomial/mode]: https://github.com/stdlib-js/stats/tree/main/base/dists/binomial/mode

[@stdlib/stats/base/dists/binomial/skewness]: https://github.com/stdlib-js/stats/tree/main/base/dists/binomial/skewness

[@stdlib/stats/base/dists/binomial/stdev]: https://github.com/stdlib-js/stats/tree/main/base/dists/binomial/stdev

[@stdlib/stats/base/dists/binomial/variance]: https://github.com/stdlib-js/stats/tree/main/base/dists/binomial/variance

[@stdlib/stats/base/dists/binomial/cdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/binomial/cdf

[@stdlib/stats/base/dists/binomial/logpmf]: https://github.com/stdlib-js/stats/tree/main/base/dists/binomial/logpmf

[@stdlib/stats/base/dists/binomial/mgf]: https://github.com/stdlib-js/stats/tree/main/base/dists/binomial/mgf

[@stdlib/stats/base/dists/binomial/pmf]: https://github.com/stdlib-js/stats/tree/main/base/dists/binomial/pmf

[@stdlib/stats/base/dists/binomial/quantile]: https://github.com/stdlib-js/stats/tree/main/base/dists/binomial/quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
