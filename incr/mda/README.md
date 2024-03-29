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

# incrmda

> Compute the [mean directional accuracy][mean-directional-accuracy] (MDA) incrementally.

<section class="intro">

The [mean directional accuracy][mean-directional-accuracy] is defined as

<!-- <equation class="equation" label="eq:mean_directional_accuracy" align="center" raw="\operatorname{MDA} = \begin{cases} 1 & \textrm{if}\ N = 1 \\\frac{1}{N} \sum_{i=1}^{N} \delta_{\operatorname{sgn}(\Delta f_{i,i-1}),\ \operatorname{sgn}(\Delta a_{i,i-1})} & \textrm{if}\ N > 1 \end{cases}" alt="Equation for the mean directional accuracy."> -->

```math
\mathop{\mathrm{MDA}} = \begin{cases} 1 & \textrm{if}\ N = 1 \\\frac{1}{N} \sum_{i=1}^{N} \delta_{\mathop{\mathrm{sgn}}(\Delta f_{i,i-1}),\ \mathop{\mathrm{sgn}}(\Delta a_{i,i-1})} & \textrm{if}\ N > 1 \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{MDA} = \begin{cases} 1 & \textrm{if}\ N = 1 \\\frac{1}{N} \sum_{i=1}^{N} \delta_{\operatorname{sgn}(\Delta f_{i,i-1}),\ \operatorname{sgn}(\Delta a_{i,i-1})} & \textrm{if}\ N > 1 \end{cases}" data-equation="eq:mean_directional_accuracy">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@95b364439921fe28429acff89c5ba464a5a60caf/lib/node_modules/@stdlib/stats/incr/mda/docs/img/equation_mean_directional_accuracy.svg" alt="Equation for the mean directional accuracy.">
    <br>
</div> -->

<!-- </equation> -->

where `f_i` is the forecast value, `a_i` is the actual value, `sgn(x)` is the [signum][@stdlib/math/base/special/signum] function, and `δ` is the [Kronecker delta][@stdlib/math/base/special/kronecker-delta]. 

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrmda = require( '@stdlib/stats/incr/mda' );
```

#### incrmda()

Returns an accumulator `function` which incrementally computes the [mean directional accuracy][mean-directional-accuracy].

```javascript
var accumulator = incrmda();
```

#### accumulator( \[f, a] )

If provided input values `f` and `a`, the accumulator function returns an updated [mean directional accuracy][mean-directional-accuracy]. If not provided input values `f` and `a`, the accumulator function returns the current [mean directional accuracy][mean-directional-accuracy].

```javascript
var accumulator = incrmda();

var m = accumulator( 2.0, 3.0 );
// returns 1.0

m = accumulator( -1.0, 4.0 );
// returns 0.5

m = accumulator( -3.0, -2.0 );
// returns ~0.67

m = accumulator();
// returns ~0.67
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
var incrmda = require( '@stdlib/stats/incr/mda' );

var accumulator;
var v1;
var v2;
var i;

// Initialize an accumulator:
accumulator = incrmda();

// For each simulated datum, update the mean directional accuracy...
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

-   <span class="package-name">[`@stdlib/stats/incr/mape`][@stdlib/stats/incr/mape]</span><span class="delimiter">: </span><span class="description">compute the mean absolute percentage error (MAPE) incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mmda`][@stdlib/stats/incr/mmda]</span><span class="delimiter">: </span><span class="description">compute a moving mean directional accuracy (MDA) incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mean-directional-accuracy]: https://en.wikipedia.org/wiki/Mean_Directional_Accuracy_%28MDA%29

[@stdlib/math/base/special/signum]: https://github.com/stdlib-js/math-base-special-signum

[@stdlib/math/base/special/kronecker-delta]: https://github.com/stdlib-js/math-base-special-kronecker-delta

<!-- <related-links> -->

[@stdlib/stats/incr/mape]: https://github.com/stdlib-js/stats/tree/main/incr/mape

[@stdlib/stats/incr/mmda]: https://github.com/stdlib-js/stats/tree/main/incr/mmda

<!-- </related-links> -->

</section>

<!-- /.links -->
