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

# incrmme

> Compute a moving [mean error][mean-absolute-error] (ME) incrementally.

<section class="intro">

For a window of size `W`, the [mean error][mean-absolute-error] is defined as

<!-- <equation class="equation" label="eq:mean_error" align="center" raw="\operatorname{ME} = \frac{1}{W} \sum_{i=0}^{W-1} (y_i - x_i)" alt="Equation for the mean error."> -->

```math
\mathop{\mathrm{ME}} = \frac{1}{W} \sum_{i=0}^{W-1} (y_i - x_i)
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{ME} = \frac{1}{W} \sum_{i=0}^{W-1} (y_i - x_i)" data-equation="eq:mean_error">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@634ac3689760e2f57fd51085f387d8dc5bb3b927/lib/node_modules/@stdlib/stats/incr/mme/docs/img/equation_mean_error.svg" alt="Equation for the mean error.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrmme = require( '@stdlib/stats/incr/mme' );
```

#### incrmme( window )

Returns an accumulator `function` which incrementally computes a moving [mean error][mean-absolute-error]. The `window` parameter defines the number of values over which to compute the moving [mean error][mean-absolute-error].

```javascript
var accumulator = incrmme( 3 );
```

#### accumulator( \[x, y] )

If provided input values `x` and `y`, the accumulator function returns an updated [mean error][mean-absolute-error]. If not provided input values `x` and `y`, the accumulator function returns the current [mean error][mean-absolute-error].

```javascript
var accumulator = incrmme( 3 );

var m = accumulator();
// returns null

// Fill the window...
m = accumulator( 2.0, 3.0 ); // [(2.0,3.0)]
// returns 1.0

m = accumulator( -1.0, 4.0 ); // [(2.0,3.0), (-1.0,4.0)]
// returns 3.0

m = accumulator( 3.0, 9.0 ); // [(2.0,3.0), (-1.0,4.0), (3.0,9.0)]
// returns 4.0

// Window begins sliding...
m = accumulator( -7.0, 3.0 ); // [(-1.0,4.0), (3.0,9.0), (-7.0,3.0)]
// returns 7.0

m = accumulator( -5.0, -3.0 ); // [(3.0,9.0), (-7.0,3.0), (-5.0,-3.0)]
// returns 6.0

m = accumulator();
// returns 6.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **at least** `W-1` future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   As `W` (x,y) pairs are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
-   Be careful when interpreting the [mean error][mean-absolute-error] as errors can cancel. This stated, that errors can cancel makes the [mean error][mean-absolute-error] suitable for measuring the bias in forecasts.
-   **Warning**: the [mean error][mean-absolute-error] is scale-dependent and, thus, the measure should **not** be used to make comparisons between datasets having different scales.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var incrmme = require( '@stdlib/stats/incr/mme' );

var accumulator;
var v1;
var v2;
var i;

// Initialize an accumulator:
accumulator = incrmme( 5 );

// For each simulated datum, update the moving mean error...
for ( i = 0; i < 100; i++ ) {
    v1 = ( randu()*100.0 ) - 50.0;
    v2 = ( randu()*100.0 ) - 50.0;
    accumulator( v1, v2 );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/incr/me`][@stdlib/stats/incr/me]</span><span class="delimiter">: </span><span class="description">compute the mean error (ME) incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mmae`][@stdlib/stats/incr/mmae]</span><span class="delimiter">: </span><span class="description">compute a moving mean absolute error (MAE) incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mmean`][@stdlib/stats/incr/mmean]</span><span class="delimiter">: </span><span class="description">compute a moving arithmetic mean incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mean-absolute-error]: https://en.wikipedia.org/wiki/Mean_absolute_error

<!-- <related-links> -->

[@stdlib/stats/incr/me]: https://github.com/stdlib-js/stats/tree/main/incr/me

[@stdlib/stats/incr/mmae]: https://github.com/stdlib-js/stats/tree/main/incr/mmae

[@stdlib/stats/incr/mmean]: https://github.com/stdlib-js/stats/tree/main/incr/mmean

<!-- </related-links> -->

</section>

<!-- /.links -->
