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

# incrvariance

> Compute an [unbiased sample variance][sample-variance] incrementally.

<section class="intro">

The [unbiased sample variance][sample-variance] is defined as

<!-- <equation class="equation" label="eq:unbiased_sample_variance" align="center" raw="s^2 = \frac{1}{n-1} \sum_{i=0}^{n-1} ( x_i - \bar{x} )^2" alt="Equation for the unbiased sample variance."> -->

```math
s^2 = \frac{1}{n-1} \sum_{i=0}^{n-1} ( x_i - \bar{x} )^2
```

<!-- <div class="equation" align="center" data-raw-text="s^2 = \frac{1}{n-1} \sum_{i=0}^{n-1} ( x_i - \bar{x} )^2" data-equation="eq:unbiased_sample_variance">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@49d8cabda84033d55d7b8069f19ee3dd8b8d1496/lib/node_modules/@stdlib/stats/incr/variance/docs/img/equation_unbiased_sample_variance.svg" alt="Equation for the unbiased sample variance.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrvariance = require( '@stdlib/stats/incr/variance' );
```

#### incrvariance( \[mean] )

Returns an accumulator `function` which incrementally computes an [unbiased sample variance][sample-variance].

```javascript
var accumulator = incrvariance();
```

If the mean is already known, provide a `mean` argument.

```javascript
var accumulator = incrvariance( 3.0 );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated [unbiased sample variance][sample-variance]. If not provided an input value `x`, the accumulator function returns the current [unbiased sample variance][sample-variance].

```javascript
var accumulator = incrvariance();

var s2 = accumulator( 2.0 );
// returns 0.0

s2 = accumulator( 1.0 ); // => ((2-1.5)^2+(1-1.5)^2) / (2-1)
// returns 0.5

s2 = accumulator( 3.0 ); // => ((2-2)^2+(1-2)^2+(3-2)^2) / (3-1)
// returns 1.0

s2 = accumulator();
// returns 1.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **all** future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var incrvariance = require( '@stdlib/stats/incr/variance' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrvariance();

// For each simulated datum, update the unbiased sample variance...
for ( i = 0; i < 100; i++ ) {
    v = randu() * 100.0;
    accumulator( v );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/incr/kurtosis`][@stdlib/stats/incr/kurtosis]</span><span class="delimiter">: </span><span class="description">compute a corrected sample excess kurtosis incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mean`][@stdlib/stats/incr/mean]</span><span class="delimiter">: </span><span class="description">compute an arithmetic mean incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mstdev`][@stdlib/stats/incr/mstdev]</span><span class="delimiter">: </span><span class="description">compute a moving corrected sample standard deviation incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/skewness`][@stdlib/stats/incr/skewness]</span><span class="delimiter">: </span><span class="description">compute a corrected sample skewness incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/stdev`][@stdlib/stats/incr/stdev]</span><span class="delimiter">: </span><span class="description">compute a corrected sample standard deviation incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/summary`][@stdlib/stats/incr/summary]</span><span class="delimiter">: </span><span class="description">compute a statistical summary incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[sample-variance]: https://en.wikipedia.org/wiki/Variance

<!-- <related-links> -->

[@stdlib/stats/incr/kurtosis]: https://github.com/stdlib-js/stats/tree/main/incr/kurtosis

[@stdlib/stats/incr/mean]: https://github.com/stdlib-js/stats/tree/main/incr/mean

[@stdlib/stats/incr/mstdev]: https://github.com/stdlib-js/stats/tree/main/incr/mstdev

[@stdlib/stats/incr/skewness]: https://github.com/stdlib-js/stats/tree/main/incr/skewness

[@stdlib/stats/incr/stdev]: https://github.com/stdlib-js/stats/tree/main/incr/stdev

[@stdlib/stats/incr/summary]: https://github.com/stdlib-js/stats/tree/main/incr/summary

<!-- </related-links> -->

</section>

<!-- /.links -->
