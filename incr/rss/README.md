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

# incrrss

> Compute the [residual sum of squares][residual-sum-of-squares] (RSS) incrementally.

<section class="intro">

The [**residual sum of squares**][residual-sum-of-squares] (also referred to as the **sum of squared residuals** (SSR) and the **sum of squared errors** (SSE)) is defined as

<!-- <equation class="equation" label="eq:residual_sum_of_squares" align="center" raw="\operatorname{RSS} = \sum_{i=0}^{n-1} (y_i - x_i)^2" alt="Equation for the residual sum of squares."> -->

```math
\mathop{\mathrm{RSS}} = \sum_{i=0}^{n-1} (y_i - x_i)^2
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{RSS} = \sum_{i=0}^{n-1} (y_i - x_i)^2" data-equation="eq:residual_sum_of_squares">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@78799028a150a44d463029bdb62ac870b1c1f9d4/lib/node_modules/@stdlib/stats/incr/rss/docs/img/equation_residual_sum_of_squares.svg" alt="Equation for the residual sum of squares.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrrss = require( '@stdlib/stats/incr/rss' );
```

#### incrrss()

Returns an accumulator `function` which incrementally computes the [residual sum of squares][residual-sum-of-squares].

```javascript
var accumulator = incrrss();
```

#### accumulator( \[x, y] )

If provided input values `x` and `y`, the accumulator function returns an updated [residual sum of squares][residual-sum-of-squares]. If not provided input values `x` and `y`, the accumulator function returns the current [residual sum of squares][residual-sum-of-squares].

```javascript
var accumulator = incrrss();

var r = accumulator( 2.0, 3.0 );
// returns 1.0

r = accumulator( -1.0, -4.0 );
// returns 10.0

r = accumulator( -3.0, 5.0 );
// returns 74.0

r = accumulator();
// returns 74.0
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
var incrrss = require( '@stdlib/stats/incr/rss' );

var accumulator;
var v1;
var v2;
var i;

// Initialize an accumulator:
accumulator = incrrss();

// For each simulated datum, update the residual sum of squares...
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

-   <span class="package-name">[`@stdlib/stats/incr/mrss`][@stdlib/stats/incr/mrss]</span><span class="delimiter">: </span><span class="description">compute a moving residual sum of squares (RSS) incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mse`][@stdlib/stats/incr/mse]</span><span class="delimiter">: </span><span class="description">compute the mean squared error (MSE) incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/rmse`][@stdlib/stats/incr/rmse]</span><span class="delimiter">: </span><span class="description">compute the root mean squared error (RMSE) incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[residual-sum-of-squares]: https://en.wikipedia.org/wiki/Residual_sum_of_squares

<!-- <related-links> -->

[@stdlib/stats/incr/mrss]: https://github.com/stdlib-js/stats/tree/main/incr/mrss

[@stdlib/stats/incr/mse]: https://github.com/stdlib-js/stats/tree/main/incr/mse

[@stdlib/stats/incr/rmse]: https://github.com/stdlib-js/stats/tree/main/incr/rmse

<!-- </related-links> -->

</section>

<!-- /.links -->
