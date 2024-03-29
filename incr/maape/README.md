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

# incrmaape

> Compute the [mean arctangent absolute percentage error][@kim:2016a] (MAAPE) incrementally.

<section class="intro">

The [mean arctangent absolute percentage error][@kim:2016a] is defined as

<!-- <equation class="equation" label="eq:mean_arctangent_absolute_percentage_error" align="center" raw="\operatorname{MAAPE}  = \frac{1}{n} \sum_{i=0}^{n-1} \operatorname{arctan}\biggl( \biggl| \frac{a_i - f_i}{a_i} \biggr| \biggr)" alt="Equation for the mean arctangent absolute percentage error."> -->

```math
\mathop{\mathrm{MAAPE}}  = \frac{1}{n} \sum_{i=0}^{n-1} \mathop{\mathrm{arctan}}\biggl( \biggl| \frac{a_i - f_i}{a_i} \biggr| \biggr)
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{MAAPE}  = \frac{1}{n} \sum_{i=0}^{n-1} \operatorname{arctan} \biggl( \biggl| \frac{a_i - f_i}{a_i} \biggr| \biggr)" data-equation="eq:mean_arctangent_absolute_percentage_error">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@d40d38b97af0f02f0fcc47100c3ebaca25db7c0d/lib/node_modules/@stdlib/stats/incr/maape/docs/img/equation_mean_arctangent_absolute_percentage_error.svg" alt="Equation for the mean arctangent absolute percentage error.">
    <br>
</div> -->

<!-- </equation> -->

where `f_i` is the forecast value and `a_i` is the actual value.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrmaape = require( '@stdlib/stats/incr/maape' );
```

#### incrmaape()

Returns an accumulator `function` which incrementally computes the [mean arctangent absolute percentage error][@kim:2016a].

```javascript
var accumulator = incrmaape();
```

#### accumulator( \[f, a] )

If provided input values `f` and `a`, the accumulator function returns an updated [mean arctangent absolute percentage error][@kim:2016a]. If not provided input values `f` and `a`, the accumulator function returns the current [mean arctangent absolute percentage error][@kim:2016a].

```javascript
var accumulator = incrmaape();

var m = accumulator( 2.0, 3.0 );
// returns ~0.3218

m = accumulator( 1.0, 4.0 );
// returns ~0.4826

m = accumulator( 3.0, 5.0 );
// returns ~0.4486

m = accumulator();
// returns ~0.4486
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **all** future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   Note that, unlike the [mean absolute percentage error][@stdlib/stats/incr/mape] (MAPE), the [mean arctangent absolute percentage error][@kim:2016a] is expressed in radians on the interval \[0,π/2].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var incrmaape = require( '@stdlib/stats/incr/maape' );

var accumulator;
var v1;
var v2;
var i;

// Initialize an accumulator:
accumulator = incrmaape();

// For each simulated datum, update the mean arctangent absolute percentage error...
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

-   <span class="package-name">[`@stdlib/stats/incr/mae`][@stdlib/stats/incr/mae]</span><span class="delimiter">: </span><span class="description">compute the mean absolute error (MAE) incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mape`][@stdlib/stats/incr/mape]</span><span class="delimiter">: </span><span class="description">compute the mean absolute percentage error (MAPE) incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mean`][@stdlib/stats/incr/mean]</span><span class="delimiter">: </span><span class="description">compute an arithmetic mean incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mmaape`][@stdlib/stats/incr/mmaape]</span><span class="delimiter">: </span><span class="description">compute a moving arctangent mean absolute percentage error (MAAPE) incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@kim:2016a]: https://www.sciencedirect.com/science/article/pii/S0169207016000121

<!-- <related-links> -->

[@stdlib/stats/incr/mae]: https://github.com/stdlib-js/stats/tree/main/incr/mae

[@stdlib/stats/incr/mape]: https://github.com/stdlib-js/stats/tree/main/incr/mape

[@stdlib/stats/incr/mean]: https://github.com/stdlib-js/stats/tree/main/incr/mean

[@stdlib/stats/incr/mmaape]: https://github.com/stdlib-js/stats/tree/main/incr/mmaape

<!-- </related-links> -->

</section>

<!-- /.links -->
