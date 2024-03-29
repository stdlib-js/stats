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

# increwstdev

> Compute an [exponentially weighted standard deviation][moving-average] incrementally.

<section class="intro">

An [exponentially weighted variance][moving-average] can be defined recursively as

<!-- <equation class="equation" label="eq:exponentially_weighted_variance" align="center" raw="S_n = \begin{cases} 0 & \textrm{if}\ n = 0 \\ (1 - \alpha) (S_{n-1} + \alpha(x_n - \mu_{n-1})^2) & \textrm{if}\ n > 0 \end{cases}" alt="Recursive definition for computing an exponentially weighted variance."> -->

```math
S_n = \begin{cases} 0 & \textrm{if}\ n = 0 \\ (1 - \alpha) (S_{n-1} + \alpha(x_n - \mu_{n-1})^2) & \textrm{if}\ n > 0 \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="S_n = \begin{cases} 0 &amp; \textrm{if}\ n = 0 \\ (1 - \alpha) (S_{n-1} + \alpha(x_n - \mu_{n-1})^2) &amp; \textrm{if}\ n &gt; 0 \end{cases}" data-equation="eq:exponentially_weighted_variance">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@b6bfc5be3086b5ddfeed2311afee7c9201fbdcbb/lib/node_modules/@stdlib/stats/incr/ewstdev/docs/img/equation_exponentially_weighted_variance.svg" alt="Recursive definition for computing an exponentially weighted variance.">
    <br>
</div> -->

<!-- </equation> -->

where `μ` is the [exponentially weighted mean][@stdlib/stats/incr/ewmean]. The [exponentially weighted standard deviation][moving-average] is the square root of the [exponentially weighted variance][moving-average].

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var increwstdev = require( '@stdlib/stats/incr/ewstdev' );
```

#### increwstdev( alpha )

Returns an accumulator `function` which incrementally computes an [exponentially weighted standard deviation][moving-average], where `alpha` is a smoothing factor between `0` and `1`.

```javascript
var accumulator = increwstdev( 0.5 );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated standard deviation. If not provided an input value `x`, the accumulator function returns the current standard deviation.

```javascript
var accumulator = increwstdev( 0.5 );

var s = accumulator();
// returns null

s = accumulator( 2.0 );
// returns 0.0

s = accumulator( 1.0 );
// returns 0.5

s = accumulator( 3.0 );
// returns ~0.83

s = accumulator();
// returns ~0.83
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
var increwstdev = require( '@stdlib/stats/incr/ewstdev' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = increwstdev( 0.5 );

// For each simulated datum, update the exponentially weighted standard deviation...
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

-   <span class="package-name">[`@stdlib/stats/incr/ewvariance`][@stdlib/stats/incr/ewvariance]</span><span class="delimiter">: </span><span class="description">compute an exponentially weighted variance incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mstdev`][@stdlib/stats/incr/mstdev]</span><span class="delimiter">: </span><span class="description">compute a moving corrected sample standard deviation incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/stdev`][@stdlib/stats/incr/stdev]</span><span class="delimiter">: </span><span class="description">compute a corrected sample standard deviation incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[moving-average]: https://en.wikipedia.org/wiki/Moving_average

[@stdlib/stats/incr/ewmean]: https://github.com/stdlib-js/stats/tree/main/incr/ewmean

<!-- <related-links> -->

[@stdlib/stats/incr/ewvariance]: https://github.com/stdlib-js/stats/tree/main/incr/ewvariance

[@stdlib/stats/incr/mstdev]: https://github.com/stdlib-js/stats/tree/main/incr/mstdev

[@stdlib/stats/incr/stdev]: https://github.com/stdlib-js/stats/tree/main/incr/stdev

<!-- </related-links> -->

</section>

<!-- /.links -->
