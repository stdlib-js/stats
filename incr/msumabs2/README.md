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

# incrmsumabs2

> Compute a moving sum of squared absolute values incrementally.

<section class="intro">

For a window of size `W`, the moving sum of squared absolute values is defined as

<!-- <equation class="equation" label="eq:moving_sum_squared_absolute_values" align="center" raw="s = \sum_{i=0}^{W-1} x_i^2" alt="Equation for the moving sum of squared absolute values."> -->

```math
s = \sum_{i=0}^{W-1} x_i^2
```

<!-- <div class="equation" align="center" data-raw-text="s = \sum_{i=0}^{W-1} x_i^2" data-equation="eq:moving_sum_squared_absolute_values">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@8515adea8b81e123de2126c7c1dbba73892999b8/lib/node_modules/@stdlib/stats/incr/msumabs2/docs/img/equation_moving_sum_squared_absolute_values.svg" alt="Equation for the moving sum of squared absolute values.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrmsumabs2 = require( '@stdlib/stats/incr/msumabs2' );
```

#### incrmsumabs2( window )

Returns an accumulator `function` which incrementally computes a moving sum of squared absolute values. The `window` parameter defines the number of values over which to compute the moving sum.

```javascript
var accumulator = incrmsumabs2( 3 );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated sum. If not provided an input value `x`, the accumulator function returns the current sum.

```javascript
var accumulator = incrmsumabs2( 3 );

var sum = accumulator();
// returns null

// Fill the window...
sum = accumulator( 2.0 ); // [2.0]
// returns 4.0

sum = accumulator( -1.0 ); // [2.0, -1.0]
// returns 5.0

sum = accumulator( 3.0 ); // [2.0, -1.0, 3.0]
// returns 14.0

// Window begins sliding...
sum = accumulator( -7.0 ); // [-1.0, 3.0, -7.0]
// returns 59.0

sum = accumulator( -5.0 ); // [3.0, -7.0, -5.0]
// returns 83.0

sum = accumulator();
// returns 83.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **at least** `W-1` future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var incrmsumabs2 = require( '@stdlib/stats/incr/msumabs2' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrmsumabs2( 5 );

// For each simulated datum, update the moving sum...
for ( i = 0; i < 100; i++ ) {
    v = ( randu()*100.0 ) - 50.0;
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

-   <span class="package-name">[`@stdlib/stats/incr/mmeanabs2`][@stdlib/stats/incr/mmeanabs2]</span><span class="delimiter">: </span><span class="description">compute a moving arithmetic mean of squared absolute values incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/msumabs`][@stdlib/stats/incr/msumabs]</span><span class="delimiter">: </span><span class="description">compute a moving sum of absolute values incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/sumabs`][@stdlib/stats/incr/sumabs]</span><span class="delimiter">: </span><span class="description">compute a sum of absolute values incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/sumabs2`][@stdlib/stats/incr/sumabs2]</span><span class="delimiter">: </span><span class="description">compute a sum of squared absolute values incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/stats/incr/mmeanabs2]: https://github.com/stdlib-js/stats/tree/main/incr/mmeanabs2

[@stdlib/stats/incr/msumabs]: https://github.com/stdlib-js/stats/tree/main/incr/msumabs

[@stdlib/stats/incr/sumabs]: https://github.com/stdlib-js/stats/tree/main/incr/sumabs

[@stdlib/stats/incr/sumabs2]: https://github.com/stdlib-js/stats/tree/main/incr/sumabs2

<!-- </related-links> -->

</section>

<!-- /.links -->
