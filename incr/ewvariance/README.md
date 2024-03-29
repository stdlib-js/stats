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

# increwvariance

> Compute an [exponentially weighted variance][moving-average] incrementally.

<section class="intro">

An [exponentially weighted variance][moving-average] can be defined recursively as

<!-- <equation class="equation" label="eq:exponentially_weighted_variance" align="center" raw="S_n = \begin{cases} 0 & \textrm{if}\ n = 0 \\ (1 - \alpha) (S_{n-1} + \alpha(x_n - \mu_{n-1})^2) & \textrm{if}\ n > 0 \end{cases}" alt="Recursive definition for computing an exponentially weighted variance."> -->

```math
S_n = \begin{cases} 0 & \textrm{if}\ n = 0 \\ (1 - \alpha) (S_{n-1} + \alpha(x_n - \mu_{n-1})^2) & \textrm{if}\ n > 0 \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="S_n = \begin{cases} 0 &amp; \textrm{if}\ n = 0 \\ (1 - \alpha) (S_{n-1} + \alpha(x_n - \mu_{n-1})^2) &amp; \textrm{if}\ n &gt; 0 \end{cases}" data-equation="eq:exponentially_weighted_variance">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@12be48682a7c25918504f886cbb80051c6ec8240/lib/node_modules/@stdlib/stats/incr/ewvariance/docs/img/equation_exponentially_weighted_variance.svg" alt="Recursive definition for computing an exponentially weighted variance.">
    <br>
</div> -->

<!-- </equation> -->

where `μ` is the [exponentially weighted mean][@stdlib/stats/incr/ewmean].

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var increwvariance = require( '@stdlib/stats/incr/ewvariance' );
```

#### increwvariance( alpha )

Returns an accumulator `function` which incrementally computes an [exponentially weighted variance][moving-average], where `alpha` is a smoothing factor between `0` and `1`.

```javascript
var accumulator = increwvariance( 0.5 );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated variance. If not provided an input value `x`, the accumulator function returns the current variance.

```javascript
var accumulator = increwvariance( 0.5 );

var v = accumulator();
// returns null

v = accumulator( 2.0 );
// returns 0.0

v = accumulator( 1.0 );
// returns 0.25

v = accumulator( 3.0 );
// returns 0.6875

v = accumulator();
// returns 0.6875
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
var increwvariance = require( '@stdlib/stats/incr/ewvariance' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = increwvariance( 0.5 );

// For each simulated datum, update the exponentially weighted variance...
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

-   <span class="package-name">[`@stdlib/stats/incr/ewmean`][@stdlib/stats/incr/ewmean]</span><span class="delimiter">: </span><span class="description">compute an exponentially weighted mean incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/ewstdev`][@stdlib/stats/incr/ewstdev]</span><span class="delimiter">: </span><span class="description">compute an exponentially weighted standard deviation incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/variance`][@stdlib/stats/incr/variance]</span><span class="delimiter">: </span><span class="description">compute an unbiased sample variance incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mvariance`][@stdlib/stats/incr/mvariance]</span><span class="delimiter">: </span><span class="description">compute a moving unbiased sample variance incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[moving-average]: https://en.wikipedia.org/wiki/Moving_average

<!-- <related-links> -->

[@stdlib/stats/incr/ewmean]: https://github.com/stdlib-js/stats/tree/main/incr/ewmean

[@stdlib/stats/incr/ewstdev]: https://github.com/stdlib-js/stats/tree/main/incr/ewstdev

[@stdlib/stats/incr/variance]: https://github.com/stdlib-js/stats/tree/main/incr/variance

[@stdlib/stats/incr/mvariance]: https://github.com/stdlib-js/stats/tree/main/incr/mvariance

<!-- </related-links> -->

</section>

<!-- /.links -->
