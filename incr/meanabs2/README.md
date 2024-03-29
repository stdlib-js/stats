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

# incrmeanabs2

> Compute an [arithmetic mean][arithmetic-mean] of squared absolute values incrementally.

<section class="intro">

The [arithmetic mean][arithmetic-mean] of squared absolute values is defined as

<!-- <equation class="equation" label="eq:arithmetic_mean_squared_absolute_values" align="center" raw="m = \frac{1}{n} \sum_{i=0}^{n-1} x_i^2" alt="Equation for the arithmetic mean of squared absolute values."> -->

```math
m = \frac{1}{n} \sum_{i=0}^{n-1} x_i^2
```

<!-- <div class="equation" align="center" data-raw-text="m = \frac{1}{n} \sum_{i=0}^{n-1} x_i^2" data-equation="eq:arithmetic_mean_squared_absolute_values">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@d08c5f0a491ba12729c84e40455fb75cf8666874/lib/node_modules/@stdlib/stats/incr/meanabs2/docs/img/equation_arithmetic_mean_squared_absolute_values.svg" alt="Equation for the arithmetic mean of squared absolute values.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrmeanabs2 = require( '@stdlib/stats/incr/meanabs2' );
```

#### incrmeanabs2()

Returns an accumulator `function` which incrementally computes an [arithmetic mean][arithmetic-mean] of squared absolute values.

```javascript
var accumulator = incrmeanabs2();
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated mean. If not provided an input value `x`, the accumulator function returns the current mean.

```javascript
var accumulator = incrmeanabs2();

var m = accumulator( 2.0 );
// returns 4.0

m = accumulator( -1.0 );
// returns 2.5

m = accumulator( -3.0 );
// returns ~4.67

m = accumulator();
// returns ~4.67
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
var incrmeanabs2 = require( '@stdlib/stats/incr/meanabs2' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrmeanabs2();

// For each simulated datum, update the mean...
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

-   <span class="package-name">[`@stdlib/stats/incr/mean`][@stdlib/stats/incr/mean]</span><span class="delimiter">: </span><span class="description">compute an arithmetic mean incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/meanabs`][@stdlib/stats/incr/meanabs]</span><span class="delimiter">: </span><span class="description">compute an arithmetic mean of absolute values incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mmeanabs2`][@stdlib/stats/incr/mmeanabs2]</span><span class="delimiter">: </span><span class="description">compute a moving arithmetic mean of squared absolute values incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/sumabs2`][@stdlib/stats/incr/sumabs2]</span><span class="delimiter">: </span><span class="description">compute a sum of squared absolute values incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[arithmetic-mean]: https://en.wikipedia.org/wiki/Arithmetic_mean

<!-- <related-links> -->

[@stdlib/stats/incr/mean]: https://github.com/stdlib-js/stats/tree/main/incr/mean

[@stdlib/stats/incr/meanabs]: https://github.com/stdlib-js/stats/tree/main/incr/meanabs

[@stdlib/stats/incr/mmeanabs2]: https://github.com/stdlib-js/stats/tree/main/incr/mmeanabs2

[@stdlib/stats/incr/sumabs2]: https://github.com/stdlib-js/stats/tree/main/incr/sumabs2

<!-- </related-links> -->

</section>

<!-- /.links -->
