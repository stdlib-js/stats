<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# meanwd

> Calculate the [arithmetic mean][arithmetic-mean] of a strided array using Welford's algorithm.

<section class="intro">

The [arithmetic mean][arithmetic-mean] is defined as

<!-- <equation class="equation" label="eq:arithmetic_mean" align="center" raw="\mu = \frac{1}{n} \sum_{i=0}^{n-1} x_i" alt="Equation for the arithmetic mean."> -->

```math
\mu = \frac{1}{n} \sum_{i=0}^{n-1} x_i
```

<!-- <div class="equation" align="center" data-raw-text="\mu = \frac{1}{n} \sum_{i=0}^{n-1} x_i" data-equation="eq:arithmetic_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@fc6aab656f799b0f4440645b873f037d2c9718e6/lib/node_modules/@stdlib/stats/strided/meanwd/docs/img/equation_arithmetic_mean.svg" alt="Equation for the arithmetic mean.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var meanwd = require( '@stdlib/stats/strided/meanwd' );
```

#### meanwd( N, x, strideX )

Computes the [arithmetic mean][arithmetic-mean] of a strided array `x` using Welford's algorithm.

```javascript
var x = [ 1.0, -2.0, 2.0 ];
var N = x.length;

var v = meanwd( N, x, 1 );
// returns ~0.3333
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **strideX**: stride length for `x`.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to compute the [arithmetic mean][arithmetic-mean] of every other element in `x`,

```javascript
var x = [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ];

var v = meanwd( 4, x, 2 );
// returns 1.25
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = meanwd( 4, x1, 2 );
// returns 1.25
```

#### meanwd.ndarray( N, x, strideX, offsetX )

Computes the [arithmetic mean][arithmetic-mean] of a strided array using Welford's algorithm and alternative indexing semantics.

```javascript
var x = [ 1.0, -2.0, 2.0 ];

var v = meanwd.ndarray( 3, x, 1, 0 );
// returns ~0.33333
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to calculate the [arithmetic mean][arithmetic-mean] for every other element in the strided array starting from the second element

```javascript
var floor = require( '@stdlib/math/base/special/floor' );

var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ];

var v = meanwd.ndarray( 4, x, 2, 1 );
// returns 1.25
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `NaN`.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/base/accessor`][@stdlib/array/base/accessor]).
-   Depending on the environment, the typed versions ([`dmeanwd`][@stdlib/stats/strided/dmeanwd], [`smeanwd`][@stdlib/stats/strided/smeanwd], etc.) are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var meanwd = require( '@stdlib/stats/strided/meanwd' );

var x = discreteUniform( 10, -50, 50, {
    'dtype': 'float64'
});
console.log( x );

var v = meanwd( x.length, x, 1 );
console.log( v );
```

</section>

<!-- /.examples -->

* * *

<section class="references">

## References

-   Welford, B. P. 1962. "Note on a Method for Calculating Corrected Sums of Squares and Products." _Technometrics_ 4 (3). Taylor & Francis: 419–20. doi:[10.1080/00401706.1962.10490022][@welford:1962a].
-   van Reeken, A. J. 1968. "Letters to the Editor: Dealing with Neely's Algorithms." _Communications of the ACM_ 11 (3): 149–50. doi:[10.1145/362929.362961][@vanreeken:1968a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/strided/dmeanwd`][@stdlib/stats/strided/dmeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array using Welford's algorithm.</span>
-   <span class="package-name">[`@stdlib/stats/strided/mean`][@stdlib/stats/strided/mean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array.</span>
-   <span class="package-name">[`@stdlib/stats/strided/nanmeanwd`][@stdlib/stats/strided/nanmeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array, ignoring NaN values and using Welford's algorithm.</span>
-   <span class="package-name">[`@stdlib/stats/strided/smeanwd`][@stdlib/stats/strided/smeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using Welford's algorithm.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[arithmetic-mean]: https://en.wikipedia.org/wiki/Arithmetic_mean

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor

[@welford:1962a]: https://doi.org/10.1080/00401706.1962.10490022

[@vanreeken:1968a]: https://doi.org/10.1145/362929.362961

<!-- <related-links> -->

[@stdlib/stats/strided/dmeanwd]: https://github.com/stdlib-js/stats/tree/main/strided/dmeanwd

[@stdlib/stats/strided/mean]: https://github.com/stdlib-js/stats/tree/main/strided/mean

[@stdlib/stats/strided/nanmeanwd]: https://github.com/stdlib-js/stats/tree/main/strided/nanmeanwd

[@stdlib/stats/strided/smeanwd]: https://github.com/stdlib-js/stats/tree/main/strided/smeanwd

<!-- </related-links> -->

</section>

<!-- /.links -->
