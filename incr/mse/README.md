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

# incrmse

> Compute the [mean squared error][mean-squared-error] (MSE) incrementally.

<section class="intro">

The [mean squared error][mean-squared-error] is defined as

<!-- <equation class="equation" label="eq:mean_squared_error" align="center" raw="\operatorname{MSE} = \frac{1}{n} \sum_{i=0}^{n-1} (y_i - x_i)^2" alt="Equation for the mean squared error."> -->

```math
\mathop{\mathrm{MSE}} = \frac{1}{n} \sum_{i=0}^{n-1} (y_i - x_i)^2
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{MSE} = \frac{1}{n} \sum_{i=0}^{n-1} (y_i - x_i)^2" data-equation="eq:mean_squared_error">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@f5d4f0cac0a117ba1e0c70706a2fb284f69e7291/lib/node_modules/@stdlib/stats/incr/mse/docs/img/equation_mean_squared_error.svg" alt="Equation for the mean squared error.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrmse = require( '@stdlib/stats/incr/mse' );
```

#### incrmse()

Returns an accumulator `function` which incrementally computes the [mean squared error][mean-squared-error].

```javascript
var accumulator = incrmse();
```

#### accumulator( \[x, y] )

If provided input values `x` and `y`, the accumulator function returns an updated [mean squared error][mean-squared-error]. If not provided input values `x` and `y`, the accumulator function returns the current [mean squared error][mean-squared-error].

```javascript
var accumulator = incrmse();

var m = accumulator( 2.0, 3.0 );
// returns 1.0

m = accumulator( -1.0, -4.0 );
// returns 5.0

m = accumulator( -3.0, 5.0 );
// returns ~24.67

m = accumulator();
// returns ~24.67
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
var incrmse = require( '@stdlib/stats/incr/mse' );

var accumulator;
var v1;
var v2;
var i;

// Initialize an accumulator:
accumulator = incrmse();

// For each simulated datum, update the mean squared error...
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

-   <span class="package-name">[`@stdlib/stats/incr/mmse`][@stdlib/stats/incr/mmse]</span><span class="delimiter">: </span><span class="description">compute a moving mean squared error (MSE) incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/rmse`][@stdlib/stats/incr/rmse]</span><span class="delimiter">: </span><span class="description">compute the root mean squared error (RMSE) incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/rss`][@stdlib/stats/incr/rss]</span><span class="delimiter">: </span><span class="description">compute the residual sum of squares (RSS) incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mean-squared-error]: https://en.wikipedia.org/wiki/Mean_squared_error

<!-- <related-links> -->

[@stdlib/stats/incr/mmse]: https://github.com/stdlib-js/stats/tree/main/incr/mmse

[@stdlib/stats/incr/rmse]: https://github.com/stdlib-js/stats/tree/main/incr/rmse

[@stdlib/stats/incr/rss]: https://github.com/stdlib-js/stats/tree/main/incr/rss

<!-- </related-links> -->

</section>

<!-- /.links -->
