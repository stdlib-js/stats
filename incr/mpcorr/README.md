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

# incrmpcorr

> Compute a moving [sample Pearson product-moment correlation coefficient][pearson-correlation] incrementally.

<section class="intro">

The [Pearson product-moment correlation coefficient][pearson-correlation] between random variables `X` and `Y` is defined as

<!-- <equation class="equation" label="eq:pearson_correlation_coefficient" align="center" raw="\rho_{X,Y} = \frac{\operatorname{cov}(X,Y)}{\sigma_X \sigma_Y}" alt="Equation for the Pearson product-moment correlation coefficient."> -->

```math
\rho_{X,Y} = \frac{\mathop{\mathrm{cov}}(X,Y)}{\sigma_X \sigma_Y}
```

<!-- <div class="equation" align="center" data-raw-text="\rho_{X,Y} = \frac{\operatorname{cov}(X,Y)}{\sigma_X \sigma_Y}" data-equation="eq:pearson_correlation_coefficient">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@49d8cabda84033d55d7b8069f19ee3dd8b8d1496/lib/node_modules/@stdlib/stats/incr/mpcorr/docs/img/equation_pearson_correlation_coefficient.svg" alt="Equation for the Pearson product-moment correlation coefficient.">
    <br>
</div> -->

<!-- </equation> -->

where the numerator is the [covariance][covariance] and the denominator is the product of the respective standard deviations.

For a sample of size `W`, the [sample Pearson product-moment correlation coefficient][pearson-correlation] is defined as

<!-- <equation class="equation" label="eq:sample_pearson_correlation_coefficient" align="center" raw="r = \frac{\displaystyle\sum_{i=0}^{n-1} (x_i - \bar{x})(y_i - \bar{y})}{\displaystyle\sqrt{\displaystyle\sum_{i=0}^{n-1} (x_i - \bar{x})^2} \displaystyle\sqrt{\displaystyle\sum_{i=0}^{n-1} (y_i - \bar{y})^2}}" alt="Equation for the sample Pearson product-moment correlation coefficient."> -->

```math
r = \frac{\displaystyle\sum_{i=0}^{n-1} (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\displaystyle\sum_{i=0}^{n-1} (x_i - \bar{x})^2} \displaystyle\sqrt{\displaystyle\sum_{i=0}^{n-1} (y_i - \bar{y})^2}}
```

<!-- <div class="equation" align="center" data-raw-text="r = \frac{\displaystyle\sum_{i=0}^{n-1} (x_i - \bar{x})(y_i - \bar{y})}{\displaystyle\sqrt{\displaystyle\sum_{i=0}^{n-1} (x_i - \bar{x})^2} \displaystyle\sqrt{\displaystyle\sum_{i=0}^{n-1} (y_i - \bar{y})^2}}" data-equation="eq:sample_pearson_correlation_coefficient">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@49d8cabda84033d55d7b8069f19ee3dd8b8d1496/lib/node_modules/@stdlib/stats/incr/mpcorr/docs/img/equation_sample_pearson_correlation_coefficient.svg" alt="Equation for the sample Pearson product-moment correlation coefficient.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrmpcorr = require( '@stdlib/stats/incr/mpcorr' );
```

#### incrmpcorr( window\[, mx, my] )

Returns an accumulator `function` which incrementally computes a moving [sample Pearson product-moment correlation coefficient][pearson-correlation]. The `window` parameter defines the number of values over which to compute the moving [sample Pearson product-moment correlation coefficient][pearson-correlation].

```javascript
var accumulator = incrmpcorr( 3 );
```

If means are already known, provide `mx` and `my` arguments.

```javascript
var accumulator = incrmpcorr( 3, 5.0, -3.14 );
```

#### accumulator( \[x, y] )

If provided input values `x` and `y`, the accumulator function returns an updated [sample Pearson product-moment correlation coefficient][pearson-correlation]. If not provided input values `x` and `y`, the accumulator function returns the current [sample Pearson product-moment correlation coefficient][pearson-correlation].

```javascript
var accumulator = incrmpcorr( 3 );

var r = accumulator();
// returns null

// Fill the window...
r = accumulator( 2.0, 1.0 ); // [(2.0, 1.0)]
// returns 0.0

r = accumulator( -5.0, 3.14 ); // [(2.0, 1.0), (-5.0, 3.14)]
// returns ~-1.0

r = accumulator( 3.0, -1.0 ); // [(2.0, 1.0), (-5.0, 3.14), (3.0, -1.0)]
// returns ~-0.925

// Window begins sliding...
r = accumulator( 5.0, -9.5 ); // [(-5.0, 3.14), (3.0, -1.0), (5.0, -9.5)]
// returns ~-0.863

r = accumulator( -5.0, 1.5 ); // [(3.0, -1.0), (5.0, -9.5), (-5.0, 1.5)]
// returns ~-0.803

r = accumulator();
// returns ~-0.803
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **at least** `W-1` future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   As `W` (x,y) pairs are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var incrmpcorr = require( '@stdlib/stats/incr/mpcorr' );

var accumulator;
var x;
var y;
var i;

// Initialize an accumulator:
accumulator = incrmpcorr( 5 );

// For each simulated datum, update the moving sample correlation coefficient...
for ( i = 0; i < 100; i++ ) {
    x = randu() * 100.0;
    y = randu() * 100.0;
    accumulator( x, y );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/incr/mcovariance`][@stdlib/stats/incr/mcovariance]</span><span class="delimiter">: </span><span class="description">compute a moving unbiased sample covariance incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mpcorrdist`][@stdlib/stats/incr/mpcorrdist]</span><span class="delimiter">: </span><span class="description">compute a moving sample Pearson product-moment correlation distance incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/pcorr`][@stdlib/stats/incr/pcorr]</span><span class="delimiter">: </span><span class="description">compute a sample Pearson product-moment correlation coefficient.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[pearson-correlation]: https://en.wikipedia.org/wiki/Pearson_correlation_coefficient

[covariance]: https://en.wikipedia.org/wiki/Covariance

<!-- <related-links> -->

[@stdlib/stats/incr/mcovariance]: https://github.com/stdlib-js/stats/tree/main/incr/mcovariance

[@stdlib/stats/incr/mpcorrdist]: https://github.com/stdlib-js/stats/tree/main/incr/mpcorrdist

[@stdlib/stats/incr/pcorr]: https://github.com/stdlib-js/stats/tree/main/incr/pcorr

<!-- </related-links> -->

</section>

<!-- /.links -->
