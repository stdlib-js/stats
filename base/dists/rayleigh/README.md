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

# Rayleigh

> Rayleigh distribution.

<section class="usage">

## Usage

```javascript
var rayleigh = require( '@stdlib/stats/base/dists/rayleigh' );
```

#### rayleigh

Rayleigh distribution.

```javascript
var dist = rayleigh;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, sigma )`][@stdlib/stats/base/dists/rayleigh/cdf]</span><span class="delimiter">: </span><span class="description">Rayleigh distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, sigma )`][@stdlib/stats/base/dists/rayleigh/logcdf]</span><span class="delimiter">: </span><span class="description">Rayleigh distribution logarithm of cumulative distribution function.</span>
-   <span class="signature">[`logpdf( x, sigma )`][@stdlib/stats/base/dists/rayleigh/logpdf]</span><span class="delimiter">: </span><span class="description">Rayleigh distribution logarithm of probability density function (PDF).</span>
-   <span class="signature">[`mgf( t, sigma )`][@stdlib/stats/base/dists/rayleigh/mgf]</span><span class="delimiter">: </span><span class="description">Rayleigh distribution moment-generating function (MGF).</span>
-   <span class="signature">[`pdf( x, sigma )`][@stdlib/stats/base/dists/rayleigh/pdf]</span><span class="delimiter">: </span><span class="description">Rayleigh distribution probability density function (PDF).</span>
-   <span class="signature">[`quantile( p, sigma )`][@stdlib/stats/base/dists/rayleigh/quantile]</span><span class="delimiter">: </span><span class="description">Rayleigh distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( sigma )`][@stdlib/stats/base/dists/rayleigh/entropy]</span><span class="delimiter">: </span><span class="description">Rayleigh distribution differential entropy.</span>
-   <span class="signature">[`kurtosis( sigma )`][@stdlib/stats/base/dists/rayleigh/kurtosis]</span><span class="delimiter">: </span><span class="description">Rayleigh distribution excess kurtosis.</span>
-   <span class="signature">[`mean( sigma )`][@stdlib/stats/base/dists/rayleigh/mean]</span><span class="delimiter">: </span><span class="description">Rayleigh distribution expected value.</span>
-   <span class="signature">[`median( sigma )`][@stdlib/stats/base/dists/rayleigh/median]</span><span class="delimiter">: </span><span class="description">Rayleigh distribution median.</span>
-   <span class="signature">[`mode( sigma )`][@stdlib/stats/base/dists/rayleigh/mode]</span><span class="delimiter">: </span><span class="description">Rayleigh distribution mode.</span>
-   <span class="signature">[`skewness( sigma )`][@stdlib/stats/base/dists/rayleigh/skewness]</span><span class="delimiter">: </span><span class="description">Rayleigh distribution skewness.</span>
-   <span class="signature">[`stdev( sigma )`][@stdlib/stats/base/dists/rayleigh/stdev]</span><span class="delimiter">: </span><span class="description">Rayleigh distribution standard deviation.</span>
-   <span class="signature">[`variance( sigma )`][@stdlib/stats/base/dists/rayleigh/variance]</span><span class="delimiter">: </span><span class="description">Rayleigh distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [Rayleigh][rayleigh-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Rayleigh( [sigma] )`][@stdlib/stats/base/dists/rayleigh/ctor]</span><span class="delimiter">: </span><span class="description">Rayleigh distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Rayleigh = require( '@stdlib/stats/base/dists/rayleigh' ).Rayleigh;

var dist = new Rayleigh( 2.0 );

var y = dist.pdf( 0.8 );
// returns ~0.185
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var rayleigh = require( '@stdlib/stats/base/dists/rayleigh' );

/*
* The Rayleigh distribution can be used to model wind speeds.
* Let's consider a scenario where we want to estimate various properties related to wind speeds.
*/

// Set the Rayleigh distribution parameter (scale parameter):
var s = 10.0;

// Calculate mean, variance, and standard deviation of the Rayleigh distribution:
console.log( rayleigh.mean( s ) );
// => ~12.533

console.log( rayleigh.variance( s ) );
// => ~42.920

console.log( rayleigh.stdev( s ) );
// => ~6.551

// Evaluate the Probability Density Function (PDF) for a specific wind speed:
var w = 15.0;
console.log( rayleigh.pdf( w, s ) );
// => ~0.049

// Determine Cumulative Distribution Function (CDF) for wind speeds up to a certain value:
var t = 15.0;
console.log( rayleigh.cdf( t, s ) );
// => ~0.675

// Calculate the probability of wind speeds exceeding the threshold:
var p = 1.0 - rayleigh.cdf( t, s );
console.log( 'Probability of wind speeds exceeding ' + t + ' m/s:', p );

// Find the wind speed at which there's a 70% chance it won't exceed using the Quantile function:
var c = 0.7;
console.log( rayleigh.quantile( c, s ) );
// => ~15.518
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[rayleigh-distribution]: https://en.wikipedia.org/wiki/Rayleigh_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/rayleigh/ctor]: https://github.com/stdlib-js/stats/tree/main/base/dists/rayleigh/ctor

[@stdlib/stats/base/dists/rayleigh/entropy]: https://github.com/stdlib-js/stats/tree/main/base/dists/rayleigh/entropy

[@stdlib/stats/base/dists/rayleigh/kurtosis]: https://github.com/stdlib-js/stats/tree/main/base/dists/rayleigh/kurtosis

[@stdlib/stats/base/dists/rayleigh/mean]: https://github.com/stdlib-js/stats/tree/main/base/dists/rayleigh/mean

[@stdlib/stats/base/dists/rayleigh/median]: https://github.com/stdlib-js/stats/tree/main/base/dists/rayleigh/median

[@stdlib/stats/base/dists/rayleigh/mode]: https://github.com/stdlib-js/stats/tree/main/base/dists/rayleigh/mode

[@stdlib/stats/base/dists/rayleigh/skewness]: https://github.com/stdlib-js/stats/tree/main/base/dists/rayleigh/skewness

[@stdlib/stats/base/dists/rayleigh/stdev]: https://github.com/stdlib-js/stats/tree/main/base/dists/rayleigh/stdev

[@stdlib/stats/base/dists/rayleigh/variance]: https://github.com/stdlib-js/stats/tree/main/base/dists/rayleigh/variance

[@stdlib/stats/base/dists/rayleigh/cdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/rayleigh/cdf

[@stdlib/stats/base/dists/rayleigh/logcdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/rayleigh/logcdf

[@stdlib/stats/base/dists/rayleigh/logpdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/rayleigh/logpdf

[@stdlib/stats/base/dists/rayleigh/mgf]: https://github.com/stdlib-js/stats/tree/main/base/dists/rayleigh/mgf

[@stdlib/stats/base/dists/rayleigh/pdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/rayleigh/pdf

[@stdlib/stats/base/dists/rayleigh/quantile]: https://github.com/stdlib-js/stats/tree/main/base/dists/rayleigh/quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
