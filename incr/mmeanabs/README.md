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

# incrmmeanabs

> Compute a moving [arithmetic mean][arithmetic-mean] of absolute values incrementally.

<section class="intro">

For a window of size `W`, the [arithmetic mean][arithmetic-mean] of absolute values is defined as

<!-- <equation class="equation" label="eq:arithmetic_mean_absolute_values" align="center" raw="\bar{x} = \frac{1}{W} \sum_{i=0}^{W-1} |x_i|" alt="Equation for the arithmetic mean of absolute values."> -->

```math
\bar{x} = \frac{1}{W} \sum_{i=0}^{W-1} |x_i|
```

<!-- <div class="equation" align="center" data-raw-text="\bar{x} = \frac{1}{W} \sum_{i=0}^{W-1} |x_i|" data-equation="eq:arithmetic_mean_absolute_values">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@320a89534d4f59b82d162f31e968222555dae2f7/lib/node_modules/@stdlib/stats/incr/mmeanabs/docs/img/equation_arithmetic_mean_absolute_values.svg" alt="Equation for the arithmetic mean of absolute values.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrmmeanabs = require( '@stdlib/stats/incr/mmeanabs' );
```

#### incrmmeanabs( window )

Returns an accumulator `function` which incrementally computes a moving [arithmetic mean][arithmetic-mean] of absolute values. The `window` parameter defines the number of values over which to compute the moving mean.

```javascript
var accumulator = incrmmeanabs( 3 );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated mean. If not provided an input value `x`, the accumulator function returns the current mean.

```javascript
var accumulator = incrmmeanabs( 3 );

var mu = accumulator();
// returns null

// Fill the window...
mu = accumulator( 2.0 ); // [2.0]
// returns 2.0

mu = accumulator( -1.0 ); // [2.0, -1.0]
// returns 1.5

mu = accumulator( 3.0 ); // [2.0, -1.0, 3.0]
// returns 2.0

// Window begins sliding...
mu = accumulator( -7.0 ); // [-1.0, 3.0, -7.0]
// returns ~3.67

mu = accumulator( -5.0 ); // [3.0, -7.0, -5.0]
// returns 5.0

mu = accumulator();
// returns 5.0
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
var incrmmeanabs = require( '@stdlib/stats/incr/mmeanabs' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrmmeanabs( 5 );

// For each simulated datum, update the moving mean...
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

-   <span class="package-name">[`@stdlib/stats/incr/meanabs`][@stdlib/stats/incr/meanabs]</span><span class="delimiter">: </span><span class="description">compute an arithmetic mean of absolute values incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mmean`][@stdlib/stats/incr/mmean]</span><span class="delimiter">: </span><span class="description">compute a moving arithmetic mean incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/msumabs`][@stdlib/stats/incr/msumabs]</span><span class="delimiter">: </span><span class="description">compute a moving sum of absolute values incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[arithmetic-mean]: https://en.wikipedia.org/wiki/Arithmetic_mean

<!-- <related-links> -->

[@stdlib/stats/incr/meanabs]: https://github.com/stdlib-js/stats/tree/main/incr/meanabs

[@stdlib/stats/incr/mmean]: https://github.com/stdlib-js/stats/tree/main/incr/mmean

[@stdlib/stats/incr/msumabs]: https://github.com/stdlib-js/stats/tree/main/incr/msumabs

<!-- </related-links> -->

</section>

<!-- /.links -->
