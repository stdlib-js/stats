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

# incrmmda

> Compute a moving [mean directional accuracy][mean-directional-accuracy] (MDA) incrementally.

<section class="intro">

For a window of size `W`, the [mean directional accuracy][mean-directional-accuracy] is defined as

<!-- <equation class="equation" label="eq:mean_directional_accuracy" align="center" raw="\operatorname{MDA} = \begin{cases} 1 & \textrm{if}\ W = 1 \\ \frac{1}{W} \sum_{i=1}^{W} \delta_{\operatorname{sgn}(\Delta f_{i,i-1}),\ \operatorname{sgn}(\Delta a_{i,i-1})} & \textrm{if}\ W > 1 \end{cases}" alt="Equation for the mean directional accuracy."> -->

```math
\mathop{\mathrm{MDA}} = \begin{cases} 1 & \textrm{if}\ W = 1 \\ \frac{1}{W} \sum_{i=1}^{W} \delta_{\mathop{\mathrm{sgn}}(\Delta f_{i,i-1}),\ \mathop{\mathrm{sgn}}(\Delta a_{i,i-1})} & \textrm{if}\ W > 1 \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{MDA} = \begin{cases} 1 & \textrm{if}\ W = 1 \\\frac{1}{W} \sum_{i=1}^{W} \delta_{\operatorname{sgn}(\Delta f_{i,i-1}),\ \operatorname{sgn}(\Delta a_{i,i-1})} & \textrm{if}\ W > 1 \end{cases}" data-equation="eq:mean_directional_accuracy">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@99730afbace8256ce53cfbc0714c7f3cac92466a/lib/node_modules/@stdlib/stats/incr/mmda/docs/img/equation_mean_directional_accuracy.svg" alt="Equation for the mean directional accuracy.">
    <br>
</div> -->

<!-- </equation> -->

where `f_i` is the forecast value, `a_i` is the actual value, `sgn(x)` is the [signum][@stdlib/math/base/special/signum] function, and `δ` is the [Kronecker delta][@stdlib/math/base/special/kronecker-delta]. 

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrmmda = require( '@stdlib/stats/incr/mmda' );
```

#### incrmmda( window )

Returns an accumulator `function` which incrementally computes a moving [mean directional accuracy][mean-directional-accuracy]. The `window` parameter defines the number of values over which to compute the moving [mean directional accuracy][mean-directional-accuracy].

```javascript
var accumulator = incrmmda( 3 );
```

#### accumulator( \[f, a] )

If provided input values `f` and `a`, the accumulator function returns an updated [mean directional accuracy][mean-directional-accuracy]. If not provided input values `f` and `a`, the accumulator function returns the current [mean directional accuracy][mean-directional-accuracy].

```javascript
var accumulator = incrmmda( 3 );

var m = accumulator();
// returns null

// Fill the window...
m = accumulator( 2.0, 3.0 ); // [(+,+)]
// returns 1.0

m = accumulator( 1.0, 4.0 ); // [(+,+), (-,+)]
// returns 0.5

m = accumulator( 3.0, 9.0 ); // [(+,+), (-,+), (+,+)]
// returns ~0.67

// Window begins sliding...
m = accumulator( 7.0, 3.0 ); // [(-,+), (+,+), (+,-)]
// returns ~0.33

m = accumulator( 5.0, 3.0 ); // [(+,+), (+,-), (-,0)]
// returns ~0.33

m = accumulator();
// returns ~0.33
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **at least** `W-1` future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   As `W` (f,a) pairs are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values. 

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var incrmmda = require( '@stdlib/stats/incr/mmda' );

var accumulator;
var v1;
var v2;
var i;

// Initialize an accumulator:
accumulator = incrmmda( 5 );

// For each simulated datum, update the moving mean directional accuracy...
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

-   <span class="package-name">[`@stdlib/stats/incr/mda`][@stdlib/stats/incr/mda]</span><span class="delimiter">: </span><span class="description">compute the mean directional accuracy (MDA) incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mmape`][@stdlib/stats/incr/mmape]</span><span class="delimiter">: </span><span class="description">compute a moving mean absolute percentage error (MAPE) incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mean-directional-accuracy]: https://en.wikipedia.org/wiki/Mean_Directional_Accuracy_%28MDA%29

[@stdlib/math/base/special/signum]: https://github.com/stdlib-js/math-base-special-signum

[@stdlib/math/base/special/kronecker-delta]: https://github.com/stdlib-js/math-base-special-kronecker-delta

<!-- <related-links> -->

[@stdlib/stats/incr/mda]: https://github.com/stdlib-js/stats/tree/main/incr/mda

[@stdlib/stats/incr/mmape]: https://github.com/stdlib-js/stats/tree/main/incr/mmape

<!-- </related-links> -->

</section>

<!-- /.links -->
