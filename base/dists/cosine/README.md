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

# Cosine

> Raised cosine distribution.

<section class="usage">

## Usage

```javascript
var cosine = require( '@stdlib/stats/base/dists/cosine' );
```

#### cosine

Raised cosine distribution.

```javascript
var dist = cosine;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, mu, s )`][@stdlib/stats/base/dists/cosine/cdf]</span><span class="delimiter">: </span><span class="description">raised cosine distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, mu, s )`][@stdlib/stats/base/dists/cosine/logcdf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the cumulative distribution function (CDF) for a raised cosine distribution.</span>
-   <span class="signature">[`logpdf( x, mu, s )`][@stdlib/stats/base/dists/cosine/logpdf]</span><span class="delimiter">: </span><span class="description">raised cosine distribution logarithm of probability density function (PDF).</span>
-   <span class="signature">[`mgf( t, mu, s )`][@stdlib/stats/base/dists/cosine/mgf]</span><span class="delimiter">: </span><span class="description">raised cosine distribution moment-generating function.</span>
-   <span class="signature">[`pdf( x, mu, s )`][@stdlib/stats/base/dists/cosine/pdf]</span><span class="delimiter">: </span><span class="description">raised cosine distribution probability density function (PDF).</span>
-   <span class="signature">[`quantile( p, mu, s )`][@stdlib/stats/base/dists/cosine/quantile]</span><span class="delimiter">: </span><span class="description">raised cosine distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`kurtosis( mu, s )`][@stdlib/stats/base/dists/cosine/kurtosis]</span><span class="delimiter">: </span><span class="description">raised cosine distribution excess kurtosis.</span>
-   <span class="signature">[`mean( mu, s )`][@stdlib/stats/base/dists/cosine/mean]</span><span class="delimiter">: </span><span class="description">raised cosine distribution expected value.</span>
-   <span class="signature">[`median( mu, s )`][@stdlib/stats/base/dists/cosine/median]</span><span class="delimiter">: </span><span class="description">raised cosine distribution median.</span>
-   <span class="signature">[`mode( mu, s )`][@stdlib/stats/base/dists/cosine/mode]</span><span class="delimiter">: </span><span class="description">raised cosine distribution mode.</span>
-   <span class="signature">[`skewness( mu, s )`][@stdlib/stats/base/dists/cosine/skewness]</span><span class="delimiter">: </span><span class="description">raised cosine distribution skewness.</span>
-   <span class="signature">[`stdev( mu, s )`][@stdlib/stats/base/dists/cosine/stdev]</span><span class="delimiter">: </span><span class="description">raised cosine distribution standard deviation.</span>
-   <span class="signature">[`variance( mu, s )`][@stdlib/stats/base/dists/cosine/variance]</span><span class="delimiter">: </span><span class="description">raised cosine distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [raised cosine][cosine-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Cosine( [mu, s] )`][@stdlib/stats/base/dists/cosine/ctor]</span><span class="delimiter">: </span><span class="description">raised cosine distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Cosine = require( '@stdlib/stats/base/dists/cosine' ).Cosine;

var dist = new Cosine( 2.0, 4.0 );

var y = dist.cdf( 0.5 );
// returns ~0.165
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var cosine = require( '@stdlib/stats/base/dists/cosine' );

// Create a raised cosine distribution:
var mu = 2.0;
var s = 1.5;
var dist = new cosine.Cosine( mu, s );

// Calculate various distribution properties:
console.log( 'Mean: %d', dist.mean );
// => 'Mean: 2'

console.log( 'Median: %d', dist.median );
// => 'Median: 2'

console.log( 'Mode: %d', dist.mode );
// => 'Mode: 2'

console.log( 'Standard Deviation: %d', dist.stdev );
// => 'Standard Deviation: 0.5422680827869919'

console.log( 'Variance: %d', dist.variance );
// => 'Variance: 0.29405467360947996'

// Evaluate the probability density function (PDF):
var x = 1.5;
console.log( 'PDF( %d ): %d', x, dist.pdf( x ) );
// => 'PDF( 1.5 ): 0.5'

// Evaluate the cumulative distribution function (CDF):
console.log( 'CDF( %d ): %d', x, dist.cdf( x ) );
// => 'CDF( 1.5 ): 0.19550110947788535'

// Calculate distribution moments:
console.log( 'Skewness: %d', cosine.skewness( mu, s ) );
// => 'Skewness: 0'

console.log( 'Excess Kurtosis: %d', cosine.kurtosis( mu, s ) );
// => 'Excess Kurtosis: -0.5937628755982807'
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[cosine-distribution]: https://en.wikipedia.org/wiki/Raised_cosine_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/cosine/ctor]: https://github.com/stdlib-js/stats/tree/main/base/dists/cosine/ctor

[@stdlib/stats/base/dists/cosine/kurtosis]: https://github.com/stdlib-js/stats/tree/main/base/dists/cosine/kurtosis

[@stdlib/stats/base/dists/cosine/mean]: https://github.com/stdlib-js/stats/tree/main/base/dists/cosine/mean

[@stdlib/stats/base/dists/cosine/median]: https://github.com/stdlib-js/stats/tree/main/base/dists/cosine/median

[@stdlib/stats/base/dists/cosine/mode]: https://github.com/stdlib-js/stats/tree/main/base/dists/cosine/mode

[@stdlib/stats/base/dists/cosine/skewness]: https://github.com/stdlib-js/stats/tree/main/base/dists/cosine/skewness

[@stdlib/stats/base/dists/cosine/stdev]: https://github.com/stdlib-js/stats/tree/main/base/dists/cosine/stdev

[@stdlib/stats/base/dists/cosine/variance]: https://github.com/stdlib-js/stats/tree/main/base/dists/cosine/variance

[@stdlib/stats/base/dists/cosine/cdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/cosine/cdf

[@stdlib/stats/base/dists/cosine/logcdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/cosine/logcdf

[@stdlib/stats/base/dists/cosine/logpdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/cosine/logpdf

[@stdlib/stats/base/dists/cosine/mgf]: https://github.com/stdlib-js/stats/tree/main/base/dists/cosine/mgf

[@stdlib/stats/base/dists/cosine/pdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/cosine/pdf

[@stdlib/stats/base/dists/cosine/quantile]: https://github.com/stdlib-js/stats/tree/main/base/dists/cosine/quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
