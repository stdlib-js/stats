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

# Laplace

> Laplace distribution.

<section class="usage">

## Usage

```javascript
var laplace = require( '@stdlib/stats/base/dists/laplace' );
```

#### laplace

Laplace distribution.

```javascript
var dist = laplace;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, mu, b )`][@stdlib/stats/base/dists/laplace/cdf]</span><span class="delimiter">: </span><span class="description">Laplace distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, mu, b )`][@stdlib/stats/base/dists/laplace/logcdf]</span><span class="delimiter">: </span><span class="description">Laplace distribution logarithm of cumulative distribution function.</span>
-   <span class="signature">[`logpdf( x, mu, b )`][@stdlib/stats/base/dists/laplace/logpdf]</span><span class="delimiter">: </span><span class="description">Laplace distribution logarithm of probability density function (PDF).</span>
-   <span class="signature">[`mgf( t, mu, b )`][@stdlib/stats/base/dists/laplace/mgf]</span><span class="delimiter">: </span><span class="description">Laplace distribution moment-generating function (MGF).</span>
-   <span class="signature">[`pdf( x, mu, b )`][@stdlib/stats/base/dists/laplace/pdf]</span><span class="delimiter">: </span><span class="description">Laplace distribution probability density function (PDF).</span>
-   <span class="signature">[`quantile( p, mu, b )`][@stdlib/stats/base/dists/laplace/quantile]</span><span class="delimiter">: </span><span class="description">Laplace distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( mu, b )`][@stdlib/stats/base/dists/laplace/entropy]</span><span class="delimiter">: </span><span class="description">Laplace distribution differential entropy.</span>
-   <span class="signature">[`kurtosis( mu, b )`][@stdlib/stats/base/dists/laplace/kurtosis]</span><span class="delimiter">: </span><span class="description">Laplace distribution excess kurtosis.</span>
-   <span class="signature">[`mean( mu, b )`][@stdlib/stats/base/dists/laplace/mean]</span><span class="delimiter">: </span><span class="description">Laplace distribution expected value.</span>
-   <span class="signature">[`median( mu, b )`][@stdlib/stats/base/dists/laplace/median]</span><span class="delimiter">: </span><span class="description">Laplace distribution median.</span>
-   <span class="signature">[`mode( mu, b )`][@stdlib/stats/base/dists/laplace/mode]</span><span class="delimiter">: </span><span class="description">Laplace distribution mode.</span>
-   <span class="signature">[`skewness( mu, b )`][@stdlib/stats/base/dists/laplace/skewness]</span><span class="delimiter">: </span><span class="description">Laplace distribution skewness.</span>
-   <span class="signature">[`stdev( mu, b )`][@stdlib/stats/base/dists/laplace/stdev]</span><span class="delimiter">: </span><span class="description">Laplace distribution standard deviation.</span>
-   <span class="signature">[`variance( mu, b )`][@stdlib/stats/base/dists/laplace/variance]</span><span class="delimiter">: </span><span class="description">Laplace distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [Laplace][laplace-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Laplace( [mu, b] )`][@stdlib/stats/base/dists/laplace/ctor]</span><span class="delimiter">: </span><span class="description">Laplace distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Laplace = require( '@stdlib/stats/base/dists/laplace' ).Laplace;

var dist = new Laplace( 2.0, 4.0 );

var y = dist.cdf( 0.5 );
// returns ~0.344
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var laplace = require( '@stdlib/stats/base/dists/laplace' );

var dist = new laplace.Laplace( 4.0, 2.0 );

console.log( dist.mu );
// => 4.0

console.log( dist.b );
// => 2.0

dist.mu = 6.0;
dist.b = 3.0;

console.log( dist.mu );
// => 6.0

console.log( dist.b );
// => 3.0

console.log( dist.kurtosis );
// => 3.0

console.log( dist.median );
// => 6.0

console.log( dist.variance );
// => 18.0

var mu = 4.0;
var b = 2.0;

console.log( laplace.pdf( 2.0, mu, b ) );
// => ~0.092

console.log( laplace.cdf( 2.0, mu, b ) );
// => ~0.184

console.log( laplace.quantile( 0.5, mu, b ) );
// => 4.0

mu = 6.0;
b = 3.0;

console.log( laplace.entropy( mu, b ) );
// => ~ 2.7918

console.log( laplace.mean( mu, b ) );
// => 6.0

console.log( laplace.median( mu, b ) );
// => 6.0

console.log( laplace.mode( mu, b ) );
// => 6.0

console.log( laplace.variance( mu, b ) );
// => 18.0

console.log( laplace.skewness( mu, b ) );
// => 0.0

var myquantile = laplace.quantile.factory( 10.0, 2.0 );

console.log( myquantile( 0.2 ) );
// => ~8.167

console.log( myquantile( 0.8 ) );
// => ~11.833

var mylogpdf = laplace.logpdf.factory( 10.0, 2.0 );

console.log( mylogpdf( 10.0) );
// => ~-1.386

console.log( mylogpdf( 5.0 ) );
// => ~-3.886
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[laplace-distribution]: https://en.wikipedia.org/wiki/Laplace_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/laplace/ctor]: https://github.com/stdlib-js/stats/tree/main/base/dists/laplace/ctor

[@stdlib/stats/base/dists/laplace/entropy]: https://github.com/stdlib-js/stats/tree/main/base/dists/laplace/entropy

[@stdlib/stats/base/dists/laplace/kurtosis]: https://github.com/stdlib-js/stats/tree/main/base/dists/laplace/kurtosis

[@stdlib/stats/base/dists/laplace/mean]: https://github.com/stdlib-js/stats/tree/main/base/dists/laplace/mean

[@stdlib/stats/base/dists/laplace/median]: https://github.com/stdlib-js/stats/tree/main/base/dists/laplace/median

[@stdlib/stats/base/dists/laplace/mode]: https://github.com/stdlib-js/stats/tree/main/base/dists/laplace/mode

[@stdlib/stats/base/dists/laplace/skewness]: https://github.com/stdlib-js/stats/tree/main/base/dists/laplace/skewness

[@stdlib/stats/base/dists/laplace/stdev]: https://github.com/stdlib-js/stats/tree/main/base/dists/laplace/stdev

[@stdlib/stats/base/dists/laplace/variance]: https://github.com/stdlib-js/stats/tree/main/base/dists/laplace/variance

[@stdlib/stats/base/dists/laplace/cdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/laplace/cdf

[@stdlib/stats/base/dists/laplace/logcdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/laplace/logcdf

[@stdlib/stats/base/dists/laplace/logpdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/laplace/logpdf

[@stdlib/stats/base/dists/laplace/mgf]: https://github.com/stdlib-js/stats/tree/main/base/dists/laplace/mgf

[@stdlib/stats/base/dists/laplace/pdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/laplace/pdf

[@stdlib/stats/base/dists/laplace/quantile]: https://github.com/stdlib-js/stats/tree/main/base/dists/laplace/quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
