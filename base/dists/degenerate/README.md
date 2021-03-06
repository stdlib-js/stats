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

# Degenerate

> Degenerate distribution.

<section class="usage">

## Usage

```javascript
var degenerate = require( '@stdlib/stats/base/dists/degenerate' );
```

#### degenerate

Degenerate distribution.

```javascript
var dist = degenerate;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|pmf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, mu )`][@stdlib/stats/base/dists/degenerate/cdf]</span><span class="delimiter">: </span><span class="description">degenerate distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, mu )`][@stdlib/stats/base/dists/degenerate/logcdf]</span><span class="delimiter">: </span><span class="description">degenerate distribution logarithm of cumulative distribution function.</span>
-   <span class="signature">[`logpdf( x, mu )`][@stdlib/stats/base/dists/degenerate/logpdf]</span><span class="delimiter">: </span><span class="description">degenerate distribution logarithm of probability density function (logPDF).</span>
-   <span class="signature">[`logpmf( x, mu )`][@stdlib/stats/base/dists/degenerate/logpmf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the probability mass function (PMF) for a degenerate distribution.</span>
-   <span class="signature">[`mgf( t, mu )`][@stdlib/stats/base/dists/degenerate/mgf]</span><span class="delimiter">: </span><span class="description">degenerate distribution moment-generating function (MGF).</span>
-   <span class="signature">[`pdf( x, mu )`][@stdlib/stats/base/dists/degenerate/pdf]</span><span class="delimiter">: </span><span class="description">degenerate distribution probability density function (PDF).</span>
-   <span class="signature">[`pmf( x, mu )`][@stdlib/stats/base/dists/degenerate/pmf]</span><span class="delimiter">: </span><span class="description">degenerate distribution probability mass function (PMF).</span>
-   <span class="signature">[`quantile( p, mu )`][@stdlib/stats/base/dists/degenerate/quantile]</span><span class="delimiter">: </span><span class="description">degenerate distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( mu )`][@stdlib/stats/base/dists/degenerate/entropy]</span><span class="delimiter">: </span><span class="description">degenerate distribution entropy.</span>
-   <span class="signature">[`mean( mu )`][@stdlib/stats/base/dists/degenerate/mean]</span><span class="delimiter">: </span><span class="description">degenerate distribution expected value.</span>
-   <span class="signature">[`median( mu )`][@stdlib/stats/base/dists/degenerate/median]</span><span class="delimiter">: </span><span class="description">degenerate distribution median.</span>
-   <span class="signature">[`mode( mu )`][@stdlib/stats/base/dists/degenerate/mode]</span><span class="delimiter">: </span><span class="description">degenerate distribution mode.</span>
-   <span class="signature">[`stdev( mu )`][@stdlib/stats/base/dists/degenerate/stdev]</span><span class="delimiter">: </span><span class="description">degenerate distribution standard deviation.</span>
-   <span class="signature">[`variance( mu )`][@stdlib/stats/base/dists/degenerate/variance]</span><span class="delimiter">: </span><span class="description">degenerate distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a degenerate distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Degenerate( [mu] )`][@stdlib/stats/base/dists/degenerate/ctor]</span><span class="delimiter">: </span><span class="description">degenerate distribution constructor.</span>

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
var degenerate = require( '@stdlib/stats/base/dists/degenerate' );

console.log( objectKeys( degenerate ) );
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

[@stdlib/stats/base/dists/degenerate/ctor]: https://github.com/stdlib-js/stats/tree/main/base/dists/degenerate/ctor

[@stdlib/stats/base/dists/degenerate/entropy]: https://github.com/stdlib-js/stats/tree/main/base/dists/degenerate/entropy

[@stdlib/stats/base/dists/degenerate/mean]: https://github.com/stdlib-js/stats/tree/main/base/dists/degenerate/mean

[@stdlib/stats/base/dists/degenerate/median]: https://github.com/stdlib-js/stats/tree/main/base/dists/degenerate/median

[@stdlib/stats/base/dists/degenerate/mode]: https://github.com/stdlib-js/stats/tree/main/base/dists/degenerate/mode

[@stdlib/stats/base/dists/degenerate/stdev]: https://github.com/stdlib-js/stats/tree/main/base/dists/degenerate/stdev

[@stdlib/stats/base/dists/degenerate/variance]: https://github.com/stdlib-js/stats/tree/main/base/dists/degenerate/variance

[@stdlib/stats/base/dists/degenerate/cdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/degenerate/cdf

[@stdlib/stats/base/dists/degenerate/logcdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/degenerate/logcdf

[@stdlib/stats/base/dists/degenerate/logpdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/degenerate/logpdf

[@stdlib/stats/base/dists/degenerate/logpmf]: https://github.com/stdlib-js/stats/tree/main/base/dists/degenerate/logpmf

[@stdlib/stats/base/dists/degenerate/mgf]: https://github.com/stdlib-js/stats/tree/main/base/dists/degenerate/mgf

[@stdlib/stats/base/dists/degenerate/pdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/degenerate/pdf

[@stdlib/stats/base/dists/degenerate/pmf]: https://github.com/stdlib-js/stats/tree/main/base/dists/degenerate/pmf

[@stdlib/stats/base/dists/degenerate/quantile]: https://github.com/stdlib-js/stats/tree/main/base/dists/degenerate/quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
