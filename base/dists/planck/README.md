<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# Planck

> Planck distribution.

<section class="usage">

## Usage

```javascript
var planck = require( '@stdlib/stats/base/dists/planck' );
```

#### planck

Planck distribution.

```javascript
var dist = planck;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pmf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, lambda )`][@stdlib/stats/base/dists/planck/cdf]</span><span class="delimiter">: </span><span class="description">Planck distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, lambda )`][@stdlib/stats/base/dists/planck/logcdf]</span><span class="delimiter">: </span><span class="description">Planck distribution logarithm of cumulative distribution function.</span>
-   <span class="signature">[`logpmf( x, lambda )`][@stdlib/stats/base/dists/planck/logpmf]</span><span class="delimiter">: </span><span class="description">Planck distribution logarithm of probability mass function (PMF).</span>
-   <span class="signature">[`mgf( t, lambda )`][@stdlib/stats/base/dists/planck/mgf]</span><span class="delimiter">: </span><span class="description">Planck distribution moment-generating function (MGF).</span>
-   <span class="signature">[`pmf( x, lambda )`][@stdlib/stats/base/dists/planck/pmf]</span><span class="delimiter">: </span><span class="description">Planck distribution probability mass function (PMF).</span>
-   <span class="signature">[`quantile( r, lambda )`][@stdlib/stats/base/dists/planck/quantile]</span><span class="delimiter">: </span><span class="description">Planck distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( lambda )`][@stdlib/stats/base/dists/planck/entropy]</span><span class="delimiter">: </span><span class="description">Planck distribution entropy.</span>
-   <span class="signature">[`kurtosis( lambda )`][@stdlib/stats/base/dists/planck/kurtosis]</span><span class="delimiter">: </span><span class="description">Planck distribution excess kurtosis.</span>
-   <span class="signature">[`mean( lambda )`][@stdlib/stats/base/dists/planck/mean]</span><span class="delimiter">: </span><span class="description">Planck distribution expected value.</span>
-   <span class="signature">[`median( lambda )`][@stdlib/stats/base/dists/planck/median]</span><span class="delimiter">: </span><span class="description">Planck distribution median.</span>
-   <span class="signature">[`mode( lambda )`][@stdlib/stats/base/dists/planck/mode]</span><span class="delimiter">: </span><span class="description">Planck distribution mode.</span>
-   <span class="signature">[`skewness( lambda )`][@stdlib/stats/base/dists/planck/skewness]</span><span class="delimiter">: </span><span class="description">Planck distribution skewness.</span>
-   <span class="signature">[`stdev( lambda )`][@stdlib/stats/base/dists/planck/stdev]</span><span class="delimiter">: </span><span class="description">Planck distribution standard deviation.</span>
-   <span class="signature">[`variance( lambda )`][@stdlib/stats/base/dists/planck/variance]</span><span class="delimiter">: </span><span class="description">Planck distribution variance.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var planck = require( '@stdlib/stats/base/dists/planck' );

console.log( objectKeys( planck ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/stats/base/dists/planck/cdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/planck/cdf

[@stdlib/stats/base/dists/planck/entropy]: https://github.com/stdlib-js/stats/tree/main/base/dists/planck/entropy

[@stdlib/stats/base/dists/planck/kurtosis]: https://github.com/stdlib-js/stats/tree/main/base/dists/planck/kurtosis

[@stdlib/stats/base/dists/planck/logcdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/planck/logcdf

[@stdlib/stats/base/dists/planck/logpmf]: https://github.com/stdlib-js/stats/tree/main/base/dists/planck/logpmf

[@stdlib/stats/base/dists/planck/mean]: https://github.com/stdlib-js/stats/tree/main/base/dists/planck/mean

[@stdlib/stats/base/dists/planck/median]: https://github.com/stdlib-js/stats/tree/main/base/dists/planck/median

[@stdlib/stats/base/dists/planck/mgf]: https://github.com/stdlib-js/stats/tree/main/base/dists/planck/mgf

[@stdlib/stats/base/dists/planck/mode]: https://github.com/stdlib-js/stats/tree/main/base/dists/planck/mode

[@stdlib/stats/base/dists/planck/pmf]: https://github.com/stdlib-js/stats/tree/main/base/dists/planck/pmf

[@stdlib/stats/base/dists/planck/quantile]: https://github.com/stdlib-js/stats/tree/main/base/dists/planck/quantile

[@stdlib/stats/base/dists/planck/skewness]: https://github.com/stdlib-js/stats/tree/main/base/dists/planck/skewness

[@stdlib/stats/base/dists/planck/stdev]: https://github.com/stdlib-js/stats/tree/main/base/dists/planck/stdev

[@stdlib/stats/base/dists/planck/variance]: https://github.com/stdlib-js/stats/tree/main/base/dists/planck/variance

</section>

<!-- /.links -->
