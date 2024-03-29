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

# incrmsum

> Compute a moving sum incrementally.

<section class="intro">

For a window of size `W`, the moving sum is defined as

<!-- <equation class="equation" label="eq:moving_sum" align="center" raw="s = \sum_{i=0}^{W-1} x_i" alt="Equation for the moving sum."> -->

```math
s = \sum_{i=0}^{W-1} x_i
```

<!-- <div class="equation" align="center" data-raw-text="s = \sum_{i=0}^{W-1} x_i" data-equation="eq:moving_sum">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@49d8cabda84033d55d7b8069f19ee3dd8b8d1496/lib/node_modules/@stdlib/stats/incr/msum/docs/img/equation_moving_sum.svg" alt="Equation for the moving sum.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrmsum = require( '@stdlib/stats/incr/msum' );
```

#### incrmsum( window )

Returns an accumulator `function` which incrementally computes a moving sum. The `window` parameter defines the number of values over which to compute the moving sum.

```javascript
var accumulator = incrmsum( 3 );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated sum. If not provided an input value `x`, the accumulator function returns the current sum.

```javascript
var accumulator = incrmsum( 3 );

var sum = accumulator();
// returns null

// Fill the window...
sum = accumulator( 2.0 ); // [2.0]
// returns 2.0

sum = accumulator( 1.0 ); // [2.0, 1.0]
// returns 3.0

sum = accumulator( 3.0 ); // [2.0, 1.0, 3.0]
// returns 6.0

// Window begins sliding...
sum = accumulator( -7.0 ); // [1.0, 3.0, -7.0]
// returns -3.0

sum = accumulator( -5.0 ); // [3.0, -7.0, -5.0]
// returns -9.0

sum = accumulator();
// returns -9.0
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
var incrmsum = require( '@stdlib/stats/incr/msum' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrmsum( 5 );

// For each simulated datum, update the moving sum...
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

-   <span class="package-name">[`@stdlib/stats/incr/mmean`][@stdlib/stats/incr/mmean]</span><span class="delimiter">: </span><span class="description">compute a moving arithmetic mean incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/msummary`][@stdlib/stats/incr/msummary]</span><span class="delimiter">: </span><span class="description">compute a moving statistical summary incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/sum`][@stdlib/stats/incr/sum]</span><span class="delimiter">: </span><span class="description">compute a sum incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/stats/incr/mmean]: https://github.com/stdlib-js/stats/tree/main/incr/mmean

[@stdlib/stats/incr/msummary]: https://github.com/stdlib-js/stats/tree/main/incr/msummary

[@stdlib/stats/incr/sum]: https://github.com/stdlib-js/stats/tree/main/incr/sum

<!-- </related-links> -->

</section>

<!-- /.links -->
