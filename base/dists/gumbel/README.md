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

# Gumbel

> Gumbel distribution.

<section class="usage">

## Usage

```javascript
var gumbel = require( '@stdlib/stats/base/dists/gumbel' );
```

#### gumbel

Gumbel distribution.

```javascript
var dist = gumbel;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, mu, beta )`][@stdlib/stats/base/dists/gumbel/cdf]</span><span class="delimiter">: </span><span class="description">Gumbel distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, mu, beta )`][@stdlib/stats/base/dists/gumbel/logcdf]</span><span class="delimiter">: </span><span class="description">Gumbel distribution logarithm of cumulative distribution function.</span>
-   <span class="signature">[`logpdf( x, mu, beta )`][@stdlib/stats/base/dists/gumbel/logpdf]</span><span class="delimiter">: </span><span class="description">Gumbel distribution logarithm of probability density function (PDF).</span>
-   <span class="signature">[`mgf( t, mu, beta )`][@stdlib/stats/base/dists/gumbel/mgf]</span><span class="delimiter">: </span><span class="description">Gumbel distribution moment-generating function (MGF).</span>
-   <span class="signature">[`pdf( x, mu, beta )`][@stdlib/stats/base/dists/gumbel/pdf]</span><span class="delimiter">: </span><span class="description">Gumbel distribution probability density function (PDF).</span>
-   <span class="signature">[`quantile( p, mu, beta )`][@stdlib/stats/base/dists/gumbel/quantile]</span><span class="delimiter">: </span><span class="description">Gumbel distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( mu, beta )`][@stdlib/stats/base/dists/gumbel/entropy]</span><span class="delimiter">: </span><span class="description">Gumbel distribution differential entropy.</span>
-   <span class="signature">[`kurtosis( mu, beta )`][@stdlib/stats/base/dists/gumbel/kurtosis]</span><span class="delimiter">: </span><span class="description">Gumbel distribution excess kurtosis.</span>
-   <span class="signature">[`mean( mu, beta )`][@stdlib/stats/base/dists/gumbel/mean]</span><span class="delimiter">: </span><span class="description">Gumbel distribution expected value.</span>
-   <span class="signature">[`median( mu, beta )`][@stdlib/stats/base/dists/gumbel/median]</span><span class="delimiter">: </span><span class="description">Gumbel distribution median.</span>
-   <span class="signature">[`mode( mu, beta )`][@stdlib/stats/base/dists/gumbel/mode]</span><span class="delimiter">: </span><span class="description">Gumbel distribution mode.</span>
-   <span class="signature">[`skewness( mu, beta )`][@stdlib/stats/base/dists/gumbel/skewness]</span><span class="delimiter">: </span><span class="description">Gumbel distribution skewness.</span>
-   <span class="signature">[`stdev( mu, beta )`][@stdlib/stats/base/dists/gumbel/stdev]</span><span class="delimiter">: </span><span class="description">Gumbel distribution standard deviation.</span>
-   <span class="signature">[`variance( mu, beta )`][@stdlib/stats/base/dists/gumbel/variance]</span><span class="delimiter">: </span><span class="description">Gumbel distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [Gumbel][gumbel-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Gumbel( [mu, beta] )`][@stdlib/stats/base/dists/gumbel/ctor]</span><span class="delimiter">: </span><span class="description">Gumbel distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Gumbel = require( '@stdlib/stats/base/dists/gumbel' ).Gumbel;

var dist = new Gumbel( 2.0, 4.0 );

var y = dist.pdf( 2.0 );
// returns ~0.092
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var mean = require( '@stdlib/stats/strided/mean' );
var variance = require( '@stdlib/stats/strided/variance' );
var stdev = require( '@stdlib/stats/strided/stdev' );
var randGumbel = require( '@stdlib/random/base/gumbel' ).factory;
var gumbel = require( '@stdlib/stats/base/dists/gumbel' );

// Set the parameters of the Gumbel distribution:
var mu = 30.0;   // Location parameter (e.g., average annual maximum temperature in °C)
var beta = 5.0;  // Scale parameter

// Simulate annual maximum daily temperatures over 1000 years:
var N = 1000;
var rgumbel = randGumbel( mu, beta );
var maxTemperatures = filledarrayBy( N, 'float64', rgumbel );

// Compute theoretical statistics of the Gumbel distribution:
var theoreticalMean = gumbel.mean( mu, beta);
var theoreticalVariance = gumbel.variance( mu, beta );
var theoreticalStdev = gumbel.stdev( mu, beta );

// Compute sample statistics of the simulated data:
var sampleMean = mean( N, maxTemperatures, 1 );
var sampleVariance = variance( N, 1, maxTemperatures, 1 ); // with Bessel's correction
var sampleStdev = stdev( N, 1, maxTemperatures, 1 ); // with Bessel's correction

// Display theoretical and sample statistics:
console.log( '--- Statistical Comparison ---\n' );
console.log( 'Mean:');
console.log( '  Theoretical: %d°C', theoreticalMean.toFixed(2) );
console.log( '  Sample:      %d°C\n', sampleMean.toFixed(2) );
console.log( 'Variance:');
console.log( '  Theoretical: %d°C²', theoreticalVariance.toFixed(2) );
console.log( '  Sample:      %d°C²\n', sampleVariance.toFixed(2) );
console.log( 'Standard Deviation:' );
console.log( '  Theoretical: %d°C', theoreticalStdev.toFixed(2) );
console.log( '  Sample:      %d°C\n', sampleStdev.toFixed(2) );

// Define quantile probabilities:
var p = new Float64Array( [ 0.25, 0.5, 0.75 ] );
var label = [ 'First Quartile', 'Median', 'Third Quartile' ];
var theoreticalQuantiles = new Float64Array([
    gumbel.quantile( p[0], mu, beta ),
    gumbel.quantile( p[1], mu, beta ),
    gumbel.quantile( p[2], mu, beta )
]);

console.log( 'Quantiles:' );
var i;
for ( i = 0; i < p.length; i++ ) {
    console.log( label[i] + ': %d°C', theoreticalQuantiles[i].toFixed(2) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[gumbel-distribution]: https://en.wikipedia.org/wiki/Gumbel_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/gumbel/ctor]: https://github.com/stdlib-js/stats/tree/main/base/dists/gumbel/ctor

[@stdlib/stats/base/dists/gumbel/entropy]: https://github.com/stdlib-js/stats/tree/main/base/dists/gumbel/entropy

[@stdlib/stats/base/dists/gumbel/kurtosis]: https://github.com/stdlib-js/stats/tree/main/base/dists/gumbel/kurtosis

[@stdlib/stats/base/dists/gumbel/mean]: https://github.com/stdlib-js/stats/tree/main/base/dists/gumbel/mean

[@stdlib/stats/base/dists/gumbel/median]: https://github.com/stdlib-js/stats/tree/main/base/dists/gumbel/median

[@stdlib/stats/base/dists/gumbel/mode]: https://github.com/stdlib-js/stats/tree/main/base/dists/gumbel/mode

[@stdlib/stats/base/dists/gumbel/skewness]: https://github.com/stdlib-js/stats/tree/main/base/dists/gumbel/skewness

[@stdlib/stats/base/dists/gumbel/stdev]: https://github.com/stdlib-js/stats/tree/main/base/dists/gumbel/stdev

[@stdlib/stats/base/dists/gumbel/variance]: https://github.com/stdlib-js/stats/tree/main/base/dists/gumbel/variance

[@stdlib/stats/base/dists/gumbel/cdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/gumbel/cdf

[@stdlib/stats/base/dists/gumbel/logcdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/gumbel/logcdf

[@stdlib/stats/base/dists/gumbel/logpdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/gumbel/logpdf

[@stdlib/stats/base/dists/gumbel/mgf]: https://github.com/stdlib-js/stats/tree/main/base/dists/gumbel/mgf

[@stdlib/stats/base/dists/gumbel/pdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/gumbel/pdf

[@stdlib/stats/base/dists/gumbel/quantile]: https://github.com/stdlib-js/stats/tree/main/base/dists/gumbel/quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
