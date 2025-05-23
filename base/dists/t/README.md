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

# Student's T

> Student's t distribution.

<section class="usage">

## Usage

```javascript
var t = require( '@stdlib/stats/base/dists/t' );
```

#### t

Student's t distribution.

```javascript
var dist = t;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, v )`][@stdlib/stats/base/dists/t/cdf]</span><span class="delimiter">: </span><span class="description">Student's t distribution cumulative distribution function (CDF).</span>
-   <span class="signature">[`logcdf( x, v )`][@stdlib/stats/base/dists/t/logcdf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the cumulative distribution function (CDF) for a Student's t distribution.</span>
-   <span class="signature">[`logpdf( x, v )`][@stdlib/stats/base/dists/t/logpdf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the probability density function (PDF) for a Student's t distribution.</span>
-   <span class="signature">[`pdf( x, v )`][@stdlib/stats/base/dists/t/pdf]</span><span class="delimiter">: </span><span class="description">Student's t distribution probability density function (PDF).</span>
-   <span class="signature">[`quantile( p, v )`][@stdlib/stats/base/dists/t/quantile]</span><span class="delimiter">: </span><span class="description">Student's t distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( v )`][@stdlib/stats/base/dists/t/entropy]</span><span class="delimiter">: </span><span class="description">Student's t distribution differential entropy.</span>
-   <span class="signature">[`kurtosis( v )`][@stdlib/stats/base/dists/t/kurtosis]</span><span class="delimiter">: </span><span class="description">Student's t distribution excess kurtosis.</span>
-   <span class="signature">[`mean( v )`][@stdlib/stats/base/dists/t/mean]</span><span class="delimiter">: </span><span class="description">Student's t distribution expected value.</span>
-   <span class="signature">[`median( v )`][@stdlib/stats/base/dists/t/median]</span><span class="delimiter">: </span><span class="description">Student's t distribution median.</span>
-   <span class="signature">[`mode( v )`][@stdlib/stats/base/dists/t/mode]</span><span class="delimiter">: </span><span class="description">Student's t distribution mode.</span>
-   <span class="signature">[`skewness( v )`][@stdlib/stats/base/dists/t/skewness]</span><span class="delimiter">: </span><span class="description">Student's t distribution skewness.</span>
-   <span class="signature">[`stdev( v )`][@stdlib/stats/base/dists/t/stdev]</span><span class="delimiter">: </span><span class="description">Student's t distribution standard deviation.</span>
-   <span class="signature">[`variance( v )`][@stdlib/stats/base/dists/t/variance]</span><span class="delimiter">: </span><span class="description">Student's t distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [Student's t][t-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`T( [v] )`][@stdlib/stats/base/dists/t/ctor]</span><span class="delimiter">: </span><span class="description">Student's t distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var T = require( '@stdlib/stats/base/dists/t' ).T;

var dist = new T( 2.0 );

var y = dist.cdf( 0.5 );
// returns ~0.667
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var t = require( '@stdlib/stats/base/dists/t' );

var dof = 3;
var x = 1.5;

// Evaluate the probability density function (PDF) at a specific value:
var res = t.pdf( x, dof );
console.log( 'PDF at x = ' + x + ': ' + res );

// Evaluate the cumulative distribution function (CDF) at a specific value:
res = t.cdf( x, dof );
console.log( 'CDF at x = ' + x + ': ' + res );

// Get the mean and variance of the t distribution:
var mu = t.mean( dof );
var v = t.variance( dof );
console.log( 'Mean: ' + mu + ', Variance: ' + v );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[t-distribution]: https://en.wikipedia.org/wiki/Student%27s_t-distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/t/ctor]: https://github.com/stdlib-js/stats/tree/main/base/dists/t/ctor

[@stdlib/stats/base/dists/t/entropy]: https://github.com/stdlib-js/stats/tree/main/base/dists/t/entropy

[@stdlib/stats/base/dists/t/kurtosis]: https://github.com/stdlib-js/stats/tree/main/base/dists/t/kurtosis

[@stdlib/stats/base/dists/t/mean]: https://github.com/stdlib-js/stats/tree/main/base/dists/t/mean

[@stdlib/stats/base/dists/t/median]: https://github.com/stdlib-js/stats/tree/main/base/dists/t/median

[@stdlib/stats/base/dists/t/mode]: https://github.com/stdlib-js/stats/tree/main/base/dists/t/mode

[@stdlib/stats/base/dists/t/skewness]: https://github.com/stdlib-js/stats/tree/main/base/dists/t/skewness

[@stdlib/stats/base/dists/t/stdev]: https://github.com/stdlib-js/stats/tree/main/base/dists/t/stdev

[@stdlib/stats/base/dists/t/variance]: https://github.com/stdlib-js/stats/tree/main/base/dists/t/variance

[@stdlib/stats/base/dists/t/cdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/t/cdf

[@stdlib/stats/base/dists/t/logcdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/t/logcdf

[@stdlib/stats/base/dists/t/logpdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/t/logpdf

[@stdlib/stats/base/dists/t/pdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/t/pdf

[@stdlib/stats/base/dists/t/quantile]: https://github.com/stdlib-js/stats/tree/main/base/dists/t/quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
