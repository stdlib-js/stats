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

# Probability Distributions

> Base (i.e., lower-level) probability distribution modules.

<section class="usage">

## Usage

```javascript
var dists = require( '@stdlib/stats/base/dists' );
```

#### dists

Namespace containing "base" (i.e., lower-level) probability distribution modules.

```javascript
var distributions = dists;
// returns {...}
```

### Continuous Distributions

<!-- <toc keywords="+continuous, -discrete"> -->

<div class="namespace-toc">

-   <span class="signature">[`arcsine`][@stdlib/stats/base/dists/arcsine]</span><span class="delimiter">: </span><span class="description">arcsine distribution.</span>
-   <span class="signature">[`beta`][@stdlib/stats/base/dists/beta]</span><span class="delimiter">: </span><span class="description">beta distribution.</span>
-   <span class="signature">[`betaprime`][@stdlib/stats/base/dists/betaprime]</span><span class="delimiter">: </span><span class="description">beta prime distribution.</span>
-   <span class="signature">[`cauchy`][@stdlib/stats/base/dists/cauchy]</span><span class="delimiter">: </span><span class="description">Cauchy distribution.</span>
-   <span class="signature">[`chi`][@stdlib/stats/base/dists/chi]</span><span class="delimiter">: </span><span class="description">Chi distribution.</span>
-   <span class="signature">[`chisquare`][@stdlib/stats/base/dists/chisquare]</span><span class="delimiter">: </span><span class="description">Chi-squared distribution.</span>
-   <span class="signature">[`cosine`][@stdlib/stats/base/dists/cosine]</span><span class="delimiter">: </span><span class="description">raised cosine distribution.</span>
-   <span class="signature">[`erlang`][@stdlib/stats/base/dists/erlang]</span><span class="delimiter">: </span><span class="description">Erlang distribution.</span>
-   <span class="signature">[`exponential`][@stdlib/stats/base/dists/exponential]</span><span class="delimiter">: </span><span class="description">exponential distribution.</span>
-   <span class="signature">[`f`][@stdlib/stats/base/dists/f]</span><span class="delimiter">: </span><span class="description">fisher's F distribution.</span>
-   <span class="signature">[`frechet`][@stdlib/stats/base/dists/frechet]</span><span class="delimiter">: </span><span class="description">Fréchet distribution.</span>
-   <span class="signature">[`gamma`][@stdlib/stats/base/dists/gamma]</span><span class="delimiter">: </span><span class="description">gamma distribution.</span>
-   <span class="signature">[`gumbel`][@stdlib/stats/base/dists/gumbel]</span><span class="delimiter">: </span><span class="description">Gumbel distribution.</span>
-   <span class="signature">[`invgamma`][@stdlib/stats/base/dists/invgamma]</span><span class="delimiter">: </span><span class="description">inverse gamma distribution.</span>
-   <span class="signature">[`kumaraswamy`][@stdlib/stats/base/dists/kumaraswamy]</span><span class="delimiter">: </span><span class="description">Kumaraswamy's double bounded distribution.</span>
-   <span class="signature">[`laplace`][@stdlib/stats/base/dists/laplace]</span><span class="delimiter">: </span><span class="description">Laplace distribution.</span>
-   <span class="signature">[`levy`][@stdlib/stats/base/dists/levy]</span><span class="delimiter">: </span><span class="description">Lévy distribution.</span>
-   <span class="signature">[`logistic`][@stdlib/stats/base/dists/logistic]</span><span class="delimiter">: </span><span class="description">logistic distribution.</span>
-   <span class="signature">[`lognormal`][@stdlib/stats/base/dists/lognormal]</span><span class="delimiter">: </span><span class="description">lognormal distribution.</span>
-   <span class="signature">[`normal`][@stdlib/stats/base/dists/normal]</span><span class="delimiter">: </span><span class="description">normal distribution.</span>
-   <span class="signature">[`pareto1`][@stdlib/stats/base/dists/pareto-type1]</span><span class="delimiter">: </span><span class="description">Pareto (Type I) distribution.</span>
-   <span class="signature">[`rayleigh`][@stdlib/stats/base/dists/rayleigh]</span><span class="delimiter">: </span><span class="description">Rayleigh distribution.</span>
-   <span class="signature">[`signrank`][@stdlib/stats/base/dists/signrank]</span><span class="delimiter">: </span><span class="description">distribution of the Wilcoxon signed rank test statistic.</span>
-   <span class="signature">[`tukey`][@stdlib/stats/base/dists/studentized-range]</span><span class="delimiter">: </span><span class="description">Studentized range distribution.</span>
-   <span class="signature">[`t`][@stdlib/stats/base/dists/t]</span><span class="delimiter">: </span><span class="description">Student's t distribution.</span>
-   <span class="signature">[`triangular`][@stdlib/stats/base/dists/triangular]</span><span class="delimiter">: </span><span class="description">triangular distribution.</span>
-   <span class="signature">[`truncatedNormal`][@stdlib/stats/base/dists/truncated-normal]</span><span class="delimiter">: </span><span class="description">truncated normal distribution.</span>
-   <span class="signature">[`uniform`][@stdlib/stats/base/dists/uniform]</span><span class="delimiter">: </span><span class="description">continuous uniform distribution.</span>

</div>

<!-- </toc> -->

### Discrete Distributions

<!-- <toc keywords="-continuous, +discrete"> -->

<div class="namespace-toc">

-   <span class="signature">[`bernoulli`][@stdlib/stats/base/dists/bernoulli]</span><span class="delimiter">: </span><span class="description">Bernoulli distribution.</span>
-   <span class="signature">[`binomial`][@stdlib/stats/base/dists/binomial]</span><span class="delimiter">: </span><span class="description">binomial distribution.</span>
-   <span class="signature">[`discreteUniform`][@stdlib/stats/base/dists/discrete-uniform]</span><span class="delimiter">: </span><span class="description">discrete uniform distribution.</span>
-   <span class="signature">[`geometric`][@stdlib/stats/base/dists/geometric]</span><span class="delimiter">: </span><span class="description">geometric distribution.</span>
-   <span class="signature">[`hypergeometric`][@stdlib/stats/base/dists/hypergeometric]</span><span class="delimiter">: </span><span class="description">hypergeometric distribution.</span>
-   <span class="signature">[`negativeBinomial`][@stdlib/stats/base/dists/negative-binomial]</span><span class="delimiter">: </span><span class="description">negative binomial distribution.</span>
-   <span class="signature">[`poisson`][@stdlib/stats/base/dists/poisson]</span><span class="delimiter">: </span><span class="description">Poisson distribution.</span>

</div>

<!-- </toc> -->

### Other

<!-- <toc keywords="+degenerate"> -->

<div class="namespace-toc">

-   <span class="signature">[`degenerate`][@stdlib/stats/base/dists/degenerate]</span><span class="delimiter">: </span><span class="description">degenerate distribution.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var dists = require( '@stdlib/stats/base/dists' );

console.log( objectKeys( dists ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <toc-links> -->

[@stdlib/stats/base/dists/degenerate]: https://github.com/stdlib-js/stats/tree/main/base/dists/degenerate

[@stdlib/stats/base/dists/bernoulli]: https://github.com/stdlib-js/stats/tree/main/base/dists/bernoulli

[@stdlib/stats/base/dists/binomial]: https://github.com/stdlib-js/stats/tree/main/base/dists/binomial

[@stdlib/stats/base/dists/discrete-uniform]: https://github.com/stdlib-js/stats/tree/main/base/dists/discrete-uniform

[@stdlib/stats/base/dists/geometric]: https://github.com/stdlib-js/stats/tree/main/base/dists/geometric

[@stdlib/stats/base/dists/hypergeometric]: https://github.com/stdlib-js/stats/tree/main/base/dists/hypergeometric

[@stdlib/stats/base/dists/negative-binomial]: https://github.com/stdlib-js/stats/tree/main/base/dists/negative-binomial

[@stdlib/stats/base/dists/poisson]: https://github.com/stdlib-js/stats/tree/main/base/dists/poisson

[@stdlib/stats/base/dists/arcsine]: https://github.com/stdlib-js/stats/tree/main/base/dists/arcsine

[@stdlib/stats/base/dists/beta]: https://github.com/stdlib-js/stats/tree/main/base/dists/beta

[@stdlib/stats/base/dists/betaprime]: https://github.com/stdlib-js/stats/tree/main/base/dists/betaprime

[@stdlib/stats/base/dists/cauchy]: https://github.com/stdlib-js/stats/tree/main/base/dists/cauchy

[@stdlib/stats/base/dists/chi]: https://github.com/stdlib-js/stats/tree/main/base/dists/chi

[@stdlib/stats/base/dists/chisquare]: https://github.com/stdlib-js/stats/tree/main/base/dists/chisquare

[@stdlib/stats/base/dists/cosine]: https://github.com/stdlib-js/stats/tree/main/base/dists/cosine

[@stdlib/stats/base/dists/erlang]: https://github.com/stdlib-js/stats/tree/main/base/dists/erlang

[@stdlib/stats/base/dists/exponential]: https://github.com/stdlib-js/stats/tree/main/base/dists/exponential

[@stdlib/stats/base/dists/f]: https://github.com/stdlib-js/stats/tree/main/base/dists/f

[@stdlib/stats/base/dists/frechet]: https://github.com/stdlib-js/stats/tree/main/base/dists/frechet

[@stdlib/stats/base/dists/gamma]: https://github.com/stdlib-js/stats/tree/main/base/dists/gamma

[@stdlib/stats/base/dists/gumbel]: https://github.com/stdlib-js/stats/tree/main/base/dists/gumbel

[@stdlib/stats/base/dists/invgamma]: https://github.com/stdlib-js/stats/tree/main/base/dists/invgamma

[@stdlib/stats/base/dists/kumaraswamy]: https://github.com/stdlib-js/stats/tree/main/base/dists/kumaraswamy

[@stdlib/stats/base/dists/laplace]: https://github.com/stdlib-js/stats/tree/main/base/dists/laplace

[@stdlib/stats/base/dists/levy]: https://github.com/stdlib-js/stats/tree/main/base/dists/levy

[@stdlib/stats/base/dists/logistic]: https://github.com/stdlib-js/stats/tree/main/base/dists/logistic

[@stdlib/stats/base/dists/lognormal]: https://github.com/stdlib-js/stats/tree/main/base/dists/lognormal

[@stdlib/stats/base/dists/normal]: https://github.com/stdlib-js/stats/tree/main/base/dists/normal

[@stdlib/stats/base/dists/pareto-type1]: https://github.com/stdlib-js/stats/tree/main/base/dists/pareto-type1

[@stdlib/stats/base/dists/rayleigh]: https://github.com/stdlib-js/stats/tree/main/base/dists/rayleigh

[@stdlib/stats/base/dists/signrank]: https://github.com/stdlib-js/stats/tree/main/base/dists/signrank

[@stdlib/stats/base/dists/studentized-range]: https://github.com/stdlib-js/stats/tree/main/base/dists/studentized-range

[@stdlib/stats/base/dists/t]: https://github.com/stdlib-js/stats/tree/main/base/dists/t

[@stdlib/stats/base/dists/triangular]: https://github.com/stdlib-js/stats/tree/main/base/dists/triangular

[@stdlib/stats/base/dists/truncated-normal]: https://github.com/stdlib-js/stats/tree/main/base/dists/truncated-normal

[@stdlib/stats/base/dists/uniform]: https://github.com/stdlib-js/stats/tree/main/base/dists/uniform

<!-- </toc-links> -->

</section>

<!-- /.links -->
