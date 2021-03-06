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

# Pareto (Type I)

> Pareto (Type I) distribution.

<section class="usage">

## Usage

```javascript
var pareto1 = require( '@stdlib/stats/base/dists/pareto-type1' );
```

#### pareto1

Pareto (Type I) distribution.

```javascript
var dist = pareto1;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, alpha, beta )`][@stdlib/stats/base/dists/pareto-type1/cdf]</span><span class="delimiter">: </span><span class="description">Pareto (Type I) distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, alpha, beta )`][@stdlib/stats/base/dists/pareto-type1/logcdf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the cumulative distribution function for a Pareto (Type I) distribution.</span>
-   <span class="signature">[`logpdf( x, alpha, beta )`][@stdlib/stats/base/dists/pareto-type1/logpdf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the probability density function (PDF) for a Pareto (Type I) distribution.</span>
-   <span class="signature">[`pdf( x, alpha, beta )`][@stdlib/stats/base/dists/pareto-type1/pdf]</span><span class="delimiter">: </span><span class="description">Pareto (Type I) distribution probability density function (PDF).</span>
-   <span class="signature">[`quantile( p, alpha, beta )`][@stdlib/stats/base/dists/pareto-type1/quantile]</span><span class="delimiter">: </span><span class="description">Pareto (Type I) distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( alpha, beta )`][@stdlib/stats/base/dists/pareto-type1/entropy]</span><span class="delimiter">: </span><span class="description">Pareto (Type I) distribution differential entropy.</span>
-   <span class="signature">[`kurtosis( alpha, beta )`][@stdlib/stats/base/dists/pareto-type1/kurtosis]</span><span class="delimiter">: </span><span class="description">Pareto (Type I) distribution excess kurtosis.</span>
-   <span class="signature">[`mean( alpha, beta )`][@stdlib/stats/base/dists/pareto-type1/mean]</span><span class="delimiter">: </span><span class="description">Pareto (Type I) distribution expected value.</span>
-   <span class="signature">[`median( alpha, beta )`][@stdlib/stats/base/dists/pareto-type1/median]</span><span class="delimiter">: </span><span class="description">Pareto (Type I) distribution median.</span>
-   <span class="signature">[`mode( alpha, beta )`][@stdlib/stats/base/dists/pareto-type1/mode]</span><span class="delimiter">: </span><span class="description">Pareto (Type I) distribution mode.</span>
-   <span class="signature">[`skewness( alpha, beta )`][@stdlib/stats/base/dists/pareto-type1/skewness]</span><span class="delimiter">: </span><span class="description">Pareto (Type I) distribution skewness.</span>
-   <span class="signature">[`stdev( alpha, beta )`][@stdlib/stats/base/dists/pareto-type1/stdev]</span><span class="delimiter">: </span><span class="description">Pareto (Type I) distribution standard deviation.</span>
-   <span class="signature">[`variance( alpha, beta )`][@stdlib/stats/base/dists/pareto-type1/variance]</span><span class="delimiter">: </span><span class="description">Pareto (Type I) distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [Pareto (Type I)][pareto-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Pareto1( [alpha, beta] )`][@stdlib/stats/base/dists/pareto-type1/ctor]</span><span class="delimiter">: </span><span class="description">Pareto (Type I) distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Pareto1 = require( '@stdlib/stats/base/dists/pareto-type1' ).Pareto1;

var dist = new Pareto1( 2.0, 4.0 );

var y = dist.cdf( 3.5 );
// returns 0.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var pareto1 = require( '@stdlib/stats/base/dists/pareto-type1' );

console.log( objectKeys( pareto1 ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[pareto-distribution]: https://en.wikipedia.org/wiki/Pareto_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/pareto-type1/ctor]: https://github.com/stdlib-js/stats/tree/main/base/dists/pareto-type1/ctor

[@stdlib/stats/base/dists/pareto-type1/entropy]: https://github.com/stdlib-js/stats/tree/main/base/dists/pareto-type1/entropy

[@stdlib/stats/base/dists/pareto-type1/kurtosis]: https://github.com/stdlib-js/stats/tree/main/base/dists/pareto-type1/kurtosis

[@stdlib/stats/base/dists/pareto-type1/mean]: https://github.com/stdlib-js/stats/tree/main/base/dists/pareto-type1/mean

[@stdlib/stats/base/dists/pareto-type1/median]: https://github.com/stdlib-js/stats/tree/main/base/dists/pareto-type1/median

[@stdlib/stats/base/dists/pareto-type1/mode]: https://github.com/stdlib-js/stats/tree/main/base/dists/pareto-type1/mode

[@stdlib/stats/base/dists/pareto-type1/skewness]: https://github.com/stdlib-js/stats/tree/main/base/dists/pareto-type1/skewness

[@stdlib/stats/base/dists/pareto-type1/stdev]: https://github.com/stdlib-js/stats/tree/main/base/dists/pareto-type1/stdev

[@stdlib/stats/base/dists/pareto-type1/variance]: https://github.com/stdlib-js/stats/tree/main/base/dists/pareto-type1/variance

[@stdlib/stats/base/dists/pareto-type1/cdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/pareto-type1/cdf

[@stdlib/stats/base/dists/pareto-type1/logcdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/pareto-type1/logcdf

[@stdlib/stats/base/dists/pareto-type1/logpdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/pareto-type1/logpdf

[@stdlib/stats/base/dists/pareto-type1/pdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/pareto-type1/pdf

[@stdlib/stats/base/dists/pareto-type1/quantile]: https://github.com/stdlib-js/stats/tree/main/base/dists/pareto-type1/quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
