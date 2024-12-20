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

# Exponential

> Exponential distribution.

<section class="usage">

## Usage

```javascript
var exponential = require( '@stdlib/stats/base/dists/exponential' );
```

#### exponential

Exponential distribution.

```javascript
var dist = exponential;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, lambda )`][@stdlib/stats/base/dists/exponential/cdf]</span><span class="delimiter">: </span><span class="description">exponential distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, lambda )`][@stdlib/stats/base/dists/exponential/logcdf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the cumulative distribution function for an exponential distribution.</span>
-   <span class="signature">[`logpdf( x, lambda )`][@stdlib/stats/base/dists/exponential/logpdf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the probability density function (PDF) for an exponential distribution.</span>
-   <span class="signature">[`mgf( t, lambda )`][@stdlib/stats/base/dists/exponential/mgf]</span><span class="delimiter">: </span><span class="description">exponential distribution moment-generating function (MGF).</span>
-   <span class="signature">[`pdf( x, lambda )`][@stdlib/stats/base/dists/exponential/pdf]</span><span class="delimiter">: </span><span class="description">exponential distribution probability density function (PDF).</span>
-   <span class="signature">[`quantile( p, lambda )`][@stdlib/stats/base/dists/exponential/quantile]</span><span class="delimiter">: </span><span class="description">exponential distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( lambda )`][@stdlib/stats/base/dists/exponential/entropy]</span><span class="delimiter">: </span><span class="description">exponential distribution differential entropy.</span>
-   <span class="signature">[`kurtosis( lambda )`][@stdlib/stats/base/dists/exponential/kurtosis]</span><span class="delimiter">: </span><span class="description">exponential distribution excess kurtosis.</span>
-   <span class="signature">[`mean( lambda )`][@stdlib/stats/base/dists/exponential/mean]</span><span class="delimiter">: </span><span class="description">exponential distribution expected value.</span>
-   <span class="signature">[`median( lambda )`][@stdlib/stats/base/dists/exponential/median]</span><span class="delimiter">: </span><span class="description">exponential distribution median.</span>
-   <span class="signature">[`mode( lambda )`][@stdlib/stats/base/dists/exponential/mode]</span><span class="delimiter">: </span><span class="description">exponential distribution mode.</span>
-   <span class="signature">[`skewness( lambda )`][@stdlib/stats/base/dists/exponential/skewness]</span><span class="delimiter">: </span><span class="description">exponential distribution skewness.</span>
-   <span class="signature">[`stdev( lambda )`][@stdlib/stats/base/dists/exponential/stdev]</span><span class="delimiter">: </span><span class="description">exponential distribution standard deviation.</span>
-   <span class="signature">[`variance( lambda )`][@stdlib/stats/base/dists/exponential/variance]</span><span class="delimiter">: </span><span class="description">exponential distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating an [exponential][exponential-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Exponential( [lambda] )`][@stdlib/stats/base/dists/exponential/ctor]</span><span class="delimiter">: </span><span class="description">exponential distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Exponential = require( '@stdlib/stats/base/dists/exponential' ).Exponential;

var dist = new Exponential( 2.0 );

var y = dist.logpdf( 0.8 );
// returns ~-0.907
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var randomExponential = require( '@stdlib/random/array/exponential' );
var dcusum = require( '@stdlib/blas/ext/base/dcusum' );
var exponential = require( '@stdlib/stats/base/dists/exponential' );

// Simulate interarrival times of customers entering a store:
var lambda = 0.5; // Average rate (customers per minute)
var numCustomers = 10;

// Generate interarrival times using the exponential distribution:
var interarrivalTimes = randomExponential( numCustomers, lambda, {
    'dtype': 'float64'
});

console.log( 'Simulated interarrival times for ' + numCustomers + ' customers: ' );
console.log( interarrivalTimes );

// Calculate cumulative arrival times by computing the cumulative sum of interarrival times:
var arrivalTimes = new Float64Array( interarrivalTimes.length );
dcusum( interarrivalTimes.length, 0.0, interarrivalTimes, 1, arrivalTimes, 1 );

console.log( '\nCustomer arrival times: ' );
console.log( arrivalTimes );

// Probability that a customer arrives within two minutes:
var x = 2.0;
var prob = exponential.cdf( x, lambda );
console.log( '\nProbability that a customer arrives within ' + x + ' minutes: ' + prob.toFixed(4) );

// Expected time until the next customer arrives:
var mean = exponential.mean( lambda );
console.log( 'Expected interarrival time: ' + mean + ' minutes' );

var dist = new exponential.Exponential( lambda );

var median = dist.median;
console.log( 'Median interarrival time: ' + median + ' minutes' );

// Evaluate the PDF at x = 1.0:
var out = dist.pdf( 1.0 );
console.log( 'PDF at x = 1: ' + out.toFixed(4) );

// Evaluate the MGF at t = 0.1:
out = dist.mgf( 0.1 );
console.log( 'MGF at t = 0.1: ' + out.toFixed(4) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[exponential-distribution]: https://en.wikipedia.org/wiki/Exponential_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/exponential/ctor]: https://github.com/stdlib-js/stats/tree/main/base/dists/exponential/ctor

[@stdlib/stats/base/dists/exponential/entropy]: https://github.com/stdlib-js/stats/tree/main/base/dists/exponential/entropy

[@stdlib/stats/base/dists/exponential/kurtosis]: https://github.com/stdlib-js/stats/tree/main/base/dists/exponential/kurtosis

[@stdlib/stats/base/dists/exponential/mean]: https://github.com/stdlib-js/stats/tree/main/base/dists/exponential/mean

[@stdlib/stats/base/dists/exponential/median]: https://github.com/stdlib-js/stats/tree/main/base/dists/exponential/median

[@stdlib/stats/base/dists/exponential/mode]: https://github.com/stdlib-js/stats/tree/main/base/dists/exponential/mode

[@stdlib/stats/base/dists/exponential/skewness]: https://github.com/stdlib-js/stats/tree/main/base/dists/exponential/skewness

[@stdlib/stats/base/dists/exponential/stdev]: https://github.com/stdlib-js/stats/tree/main/base/dists/exponential/stdev

[@stdlib/stats/base/dists/exponential/variance]: https://github.com/stdlib-js/stats/tree/main/base/dists/exponential/variance

[@stdlib/stats/base/dists/exponential/cdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/exponential/cdf

[@stdlib/stats/base/dists/exponential/logcdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/exponential/logcdf

[@stdlib/stats/base/dists/exponential/logpdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/exponential/logpdf

[@stdlib/stats/base/dists/exponential/mgf]: https://github.com/stdlib-js/stats/tree/main/base/dists/exponential/mgf

[@stdlib/stats/base/dists/exponential/pdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/exponential/pdf

[@stdlib/stats/base/dists/exponential/quantile]: https://github.com/stdlib-js/stats/tree/main/base/dists/exponential/quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
