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

# incrhmean

> Compute a [harmonic mean][harmonic-mean] incrementally.

<section class="intro">

The [harmonic mean][harmonic-mean] of positive real numbers `x_0, x_1, ..., x_{n-1}` is defined as

<!-- <equation class="equation" label="eq:harmonic_mean" align="center" raw="\begin{align}H &= \frac{n}{\frac{1}{x_0} + \frac{1}{x_1} + \cdots + \frac{1}{x_{n-1}}} \\ &= \frac{\displaystyle n}{\displaystyle\sum_{i=0}^{n-1} \frac{1}{x_i}} \\ &= \biggl( \frac{\displaystyle\sum_{i=0}^{n-1} \frac{1}{x_i}}{\displaystyle n} \biggr)^{-1}\end{align}" alt="Equation for the harmonic mean."> -->

```math
\begin{align}H &= \frac{n}{\frac{1}{x_0} + \frac{1}{x_1} + \cdots + \frac{1}{x_{n-1}}} \\ &= \frac{\displaystyle n}{\displaystyle\sum_{i=0}^{n-1} \frac{1}{x_i}} \\ &= \biggl( \frac{\displaystyle\sum_{i=0}^{n-1} \frac{1}{x_i}}{\displaystyle n} \biggr)^{-1}\end{align}
```

<!-- <div class="equation" align="center" data-raw-text="\begin{align}H &amp;= \frac{n}{\frac{1}{x_0} + \frac{1}{x_1} + \cdots + \frac{1}{x_{n-1}}} \\ &amp;= \frac{\displaystyle n}{\displaystyle\sum_{i=0}^{n-1} \frac{1}{x_i}} \\ &amp;= \biggl( \frac{\displaystyle\sum_{i=0}^{n-1} \frac{1}{x_i}}{\displaystyle n} \biggr)^{-1}\end{align}" data-equation="eq:harmonic_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@2b632747053b9e357a4663369528fe62b29a6d55/lib/node_modules/@stdlib/stats/incr/hmean/docs/img/equation_harmonic_mean.svg" alt="Equation for the harmonic mean.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrhmean = require( '@stdlib/stats/incr/hmean' );
```

#### incrhmean()

Returns an accumulator `function` which incrementally computes a [harmonic mean][harmonic-mean].

```javascript
var accumulator = incrhmean();
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated [harmonic mean][harmonic-mean]. If not provided an input value `x`, the accumulator function returns the current [harmonic mean][harmonic-mean].

```javascript
var accumulator = incrhmean();

var v = accumulator( 2.0 );
// returns 2.0

v = accumulator( 1.0 );
// returns ~1.33

v = accumulator( 3.0 );
// returns ~1.64

v = accumulator();
// returns ~1.64
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
var incrhmean = require( '@stdlib/stats/incr/hmean' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrhmean();

// For each simulated datum, update the harmonic mean...
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

-   <span class="package-name">[`@stdlib/stats/incr/gmean`][@stdlib/stats/incr/gmean]</span><span class="delimiter">: </span><span class="description">compute a geometric mean incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mean`][@stdlib/stats/incr/mean]</span><span class="delimiter">: </span><span class="description">compute an arithmetic mean incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mhmean`][@stdlib/stats/incr/mhmean]</span><span class="delimiter">: </span><span class="description">compute a moving harmonic mean incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/summary`][@stdlib/stats/incr/summary]</span><span class="delimiter">: </span><span class="description">compute a statistical summary incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[harmonic-mean]: https://en.wikipedia.org/wiki/Harmonic_mean

<!-- <related-links> -->

[@stdlib/stats/incr/gmean]: https://github.com/stdlib-js/stats/tree/main/incr/gmean

[@stdlib/stats/incr/mean]: https://github.com/stdlib-js/stats/tree/main/incr/mean

[@stdlib/stats/incr/mhmean]: https://github.com/stdlib-js/stats/tree/main/incr/mhmean

[@stdlib/stats/incr/summary]: https://github.com/stdlib-js/stats/tree/main/incr/summary

<!-- </related-links> -->

</section>

<!-- /.links -->
