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

# Bradford

> Bradford distribution.

<section class="usage">

## Usage

```javascript
var bradford = require( '@stdlib/stats/base/dists/bradford' );
```

#### bradford

[Bradford][bradford-distribution] distribution.

```javascript
var dist = bradford;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, c )`][@stdlib/stats/base/dists/bradford/cdf]</span><span class="delimiter">: </span><span class="description">Bradford distribution cumulative distribution function.</span>
-   <span class="signature">[`pdf( x, c )`][@stdlib/stats/base/dists/bradford/pdf]</span><span class="delimiter">: </span><span class="description">Bradford distribution probability density function (PDF).</span>
-   <span class="signature">[`quantile( p, c )`][@stdlib/stats/base/dists/bradford/quantile]</span><span class="delimiter">: </span><span class="description">Bradford distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( c )`][@stdlib/stats/base/dists/bradford/entropy]</span><span class="delimiter">: </span><span class="description">Bradford distribution differential entropy.</span>
-   <span class="signature">[`mean( c )`][@stdlib/stats/base/dists/bradford/mean]</span><span class="delimiter">: </span><span class="description">Bradford distribution expected value.</span>
-   <span class="signature">[`median( c )`][@stdlib/stats/base/dists/bradford/median]</span><span class="delimiter">: </span><span class="description">Bradford distribution median.</span>
-   <span class="signature">[`mode( c )`][@stdlib/stats/base/dists/bradford/mode]</span><span class="delimiter">: </span><span class="description">Bradford distribution mode.</span>
-   <span class="signature">[`skewness( c )`][@stdlib/stats/base/dists/bradford/skewness]</span><span class="delimiter">: </span><span class="description">Bradford distribution skewness.</span>
-   <span class="signature">[`stdev( c )`][@stdlib/stats/base/dists/bradford/stdev]</span><span class="delimiter">: </span><span class="description">Bradford distribution standard deviation.</span>
-   <span class="signature">[`variance( c )`][@stdlib/stats/base/dists/bradford/variance]</span><span class="delimiter">: </span><span class="description">Bradford distribution variance.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var bradford = require( '@stdlib/stats/base/dists/bradford' );

/*
* The Bradford distribution is defined over [0,1] with shape parameter c.
*/

var c = 2.0;

// Compute the mean:
var mu = bradford.mean( c );
// returns ~0.410

// Compute the median:
var median = bradford.median( c );
// returns ~0.366

// Compute the variance:
var s2 = bradford.variance( c );
// returns ~0.082

// Compute the standard deviation:
var sigma = bradford.stdev( c );
// returns ~0.286

// Evaluate the PDF at x = 0.5:
var y = bradford.pdf( 0.5, c );
// returns ~0.910

// Evaluate the CDF at x = 0.5:
var p = bradford.cdf( 0.5, c );
// returns ~0.631

// Compute the 50th percentile (median):
var q = bradford.quantile( 0.5, c );
// returns ~0.366

// Compute the entropy:
var h = bradford.entropy( c );
// returns ~-0.050

// Compute the skewness:
var skew = bradford.skewness( c );
// returns ~0.378

// Compute the mode:
var mode = bradford.mode( c );
// returns 0.0
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[bradford-distribution]: https://en.wikipedia.org/wiki/Bradford_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/bradford/cdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/bradford/cdf

[@stdlib/stats/base/dists/bradford/entropy]: https://github.com/stdlib-js/stats/tree/main/base/dists/bradford/entropy

[@stdlib/stats/base/dists/bradford/mean]: https://github.com/stdlib-js/stats/tree/main/base/dists/bradford/mean

[@stdlib/stats/base/dists/bradford/median]: https://github.com/stdlib-js/stats/tree/main/base/dists/bradford/median

[@stdlib/stats/base/dists/bradford/mode]: https://github.com/stdlib-js/stats/tree/main/base/dists/bradford/mode

[@stdlib/stats/base/dists/bradford/pdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/bradford/pdf

[@stdlib/stats/base/dists/bradford/quantile]: https://github.com/stdlib-js/stats/tree/main/base/dists/bradford/quantile

[@stdlib/stats/base/dists/bradford/skewness]: https://github.com/stdlib-js/stats/tree/main/base/dists/bradford/skewness

[@stdlib/stats/base/dists/bradford/stdev]: https://github.com/stdlib-js/stats/tree/main/base/dists/bradford/stdev

[@stdlib/stats/base/dists/bradford/variance]: https://github.com/stdlib-js/stats/tree/main/base/dists/bradford/variance

<!-- </toc-links> -->

</section>

<!-- /.links -->
