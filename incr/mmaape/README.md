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

# incrmmaape

> Compute a moving [mean arctangent absolute percentage error][@kim:2016a] (MAAPE) incrementally.

<section class="intro">

For a window of size `W`, the [mean arctangent absolute percentage error][@kim:2016a] is defined as

<!-- <equation class="equation" label="eq:mean_arctangent_absolute_percentage_error" align="center" raw="\operatorname{MAAPE}  = \frac{1}{W} \sum_{i=0}^{W-1} \operatorname{arctan}\biggl( \biggl| \frac{a_i - f_i}{a_i} \biggr| \biggr)" alt="Equation for the mean arctangent absolute percentage error."> -->

```math
\mathop{\mathrm{MAAPE}}  = \frac{1}{W} \sum_{i=0}^{W-1} \mathop{\mathrm{arctan}}\biggl( \biggl| \frac{a_i - f_i}{a_i} \biggr| \biggr)
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{MAAPE}  = \frac{1}{W} \sum_{i=0}^{W-1} \operatorname{arctan} \biggl( \biggl| \frac{a_i - f_i}{a_i} \biggr| \biggr)" data-equation="eq:mean_arctangent_absolute_percentage_error">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@677f6828831c61cabc84859897a5ee7e079d6ddf/lib/node_modules/@stdlib/stats/incr/mmaape/docs/img/equation_mean_arctangent_absolute_percentage_error.svg" alt="Equation for the mean arctangent absolute percentage error.">
    <br>
</div> -->

<!-- </equation> -->

where `f_i` is the forecast value and `a_i` is the actual value.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrmmaape = require( '@stdlib/stats/incr/mmaape' );
```

#### incrmmaape( window )

Returns an accumulator `function` which incrementally computes a moving [mean arctangent absolute percentage error][@kim:2016a]. The `window` parameter defines the number of values over which to compute the moving [mean arctangent absolute percentage error][@kim:2016a].

```javascript
var accumulator = incrmmaape( 3 );
```

#### accumulator( \[f, a] )

If provided input values `f` and `a`, the accumulator function returns an updated [mean arctangent absolute percentage error][@kim:2016a]. If not provided input values `f` and `a`, the accumulator function returns the current [mean arctangent absolute percentage error][@kim:2016a].

```javascript
var accumulator = incrmmaape( 3 );

var m = accumulator();
// returns null

// Fill the window...
m = accumulator( 2.0, 3.0 ); // [(2.0,3.0)]
// returns ~0.32

m = accumulator( 1.0, 4.0 ); // [(2.0,3.0), (1.0,4.0)]
// returns ~0.48

m = accumulator( 3.0, 9.0 ); // [(2.0,3.0), (1.0,4.0), (3.0,9.0)]
// returns ~0.52

// Window begins sliding...
m = accumulator( 7.0, 3.0 ); // [(1.0,4.0), (3.0,9.0), (7.0,3.0)]
// returns ~0.72

m = accumulator( 5.0, 3.0 ); // [(3.0,9.0), (7.0,3.0), (5.0,3.0)]
// returns ~0.70

m = accumulator();
// returns ~0.70
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **at least** `W-1` future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   As `W` (f,a) pairs are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
-   Note that, unlike the [mean absolute percentage error][@stdlib/stats/incr/mape] (MAPE), the [mean arctangent absolute percentage error][@kim:2016a] is expressed in radians on the interval \[0,π/2].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var incrmmaape = require( '@stdlib/stats/incr/mmaape' );

var accumulator;
var v1;
var v2;
var i;

// Initialize an accumulator:
accumulator = incrmmaape( 5 );

// For each simulated datum, update the moving mean arctangent absolute percentage error...
for ( i = 0; i < 100; i++ ) {
    v1 = ( randu()*100.0 ) + 50.0;
    v2 = ( randu()*100.0 ) + 50.0;
    accumulator( v1, v2 );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<section class="references">

## References

-   Kim, Sungil, and Heeyoung Kim. 2016. "A new metric of absolute percentage error for intermittent demand forecasts." _International Journal of Forecasting_ 32 (3): 669–79. doi:[10.1016/j.ijforecast.2015.12.003][@kim:2016a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/incr/maape`][@stdlib/stats/incr/maape]</span><span class="delimiter">: </span><span class="description">compute the mean arctangent absolute percentage error (MAAPE) incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mmape`][@stdlib/stats/incr/mmape]</span><span class="delimiter">: </span><span class="description">compute a moving mean absolute percentage error (MAPE) incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mmpe`][@stdlib/stats/incr/mmpe]</span><span class="delimiter">: </span><span class="description">compute a moving mean percentage error (MPE) incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mmean`][@stdlib/stats/incr/mmean]</span><span class="delimiter">: </span><span class="description">compute a moving arithmetic mean incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@kim:2016a]: https://www.sciencedirect.com/science/article/pii/S0169207016000121

[@stdlib/stats/incr/mape]: https://github.com/stdlib-js/stats/tree/main/incr/mape

<!-- <related-links> -->

[@stdlib/stats/incr/maape]: https://github.com/stdlib-js/stats/tree/main/incr/maape

[@stdlib/stats/incr/mmape]: https://github.com/stdlib-js/stats/tree/main/incr/mmape

[@stdlib/stats/incr/mmpe]: https://github.com/stdlib-js/stats/tree/main/incr/mmpe

[@stdlib/stats/incr/mmean]: https://github.com/stdlib-js/stats/tree/main/incr/mmean

<!-- </related-links> -->

</section>

<!-- /.links -->
