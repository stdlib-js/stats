<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

<!-- lint disable max-heading-length -->

# ztest2

> Compute a two-sample Z-test.

<section class="intro">

A Z-test commonly refers to a two-sample location test which compares the means of two independent sets of measurements `X` and `Y` when the population standard deviations are known. A Z-test supports testing three different null hypotheses `H0`:

-   `H0: μX - μY ≥ Δ` versus the alternative hypothesis `H1: μX - μY < Δ`.
-   `H0: μX - μY ≤ Δ` versus the alternative hypothesis `H1: μX - μY > Δ`.
-   `H0: μX - μY = Δ` versus the alternative hypothesis `H1: μX - μY ≠ Δ`.

Here, `μX` and `μY` are the true population means of samples `X` and `Y`, respectively, and `Δ` is the hypothesized difference in means (typically `0` by default).

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var ztest2 = require( '@stdlib/stats/strided/ztest2' );
```

#### ztest2( NX, NY, alternative, alpha, diff, sigmax, x, strideX, sigmay, y, strideY, out )

Computes a two-sample Z-test.

```javascript
var Results = require( '@stdlib/stats/base/ztest/two-sample/results/float64' );

var x = [ 4.0, 4.0, 6.0, 6.0, 5.0 ];
var y = [ 3.0, 3.0, 5.0, 7.0, 7.0 ];

var results = new Results();
var out = ztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 2.0, y, 1, results );
// returns {...}

var bool = ( out === results );
// returns true
```

The function has the following parameters:

-   **NX**: number of indexed elements in `x`.
-   **NY**: number of indexed elements in `y`.
-   **alternative**: [alternative hypothesis][@stdlib/stats/base/ztest/alternatives].
-   **alpha**: significance level.
-   **diff**: difference in means under the null hypothesis.
-   **sigmax**: known standard deviation of `x`.
-   **x**: first input array.
-   **strideX**: stride length for `x`.
-   **sigmay**: known standard deviation of `y`.
-   **y**: second input array.
-   **strideY**: stride length for `y`.
-   **out**: output [results object][@stdlib/stats/base/ztest/two-sample/results/float64].

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to perform a two-sample Z-test over every other element in `x` and `y`,

```javascript
var Results = require( '@stdlib/stats/base/ztest/two-sample/results/float64' );

var x = [ 4.0, 0.0, 4.0, 0.0, 6.0, 0.0, 6.0, 0.0, 5.0, 0.0 ];
var y = [ 3.0, 0.0, 3.0, 0.0, 5.0, 0.0, 7.0, 0.0, 7.0, 0.0 ];

var results = new Results();
var out = ztest2( 5, 5, 'two-sided', 0.05, 0.0, 1.0, x, 2, 2.0, y, 2, results );
// returns {...}

var bool = ( out === results );
// returns true
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Results = require( '@stdlib/stats/base/ztest/two-sample/results/float64' );
var Float64Array = require( '@stdlib/array/float64' );

var x0 = new Float64Array( [ 0.0, 4.0, 4.0, 6.0, 6.0, 5.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var y0 = new Float64Array( [ 0.0, 3.0, 3.0, 5.0, 7.0, 7.0 ] );
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var results = new Results();
var out = ztest2( 5, 5, 'two-sided', 0.05, 0.0, 1.0, x1, 1, 2.0, y1, 1, results );
// returns {...}

var bool = ( out === results );
// returns true
```

#### ztest2.ndarray( NX, NY, alternative, alpha, diff, sigmax, x, strideX, offsetX, sigmay, y, strideY, offsetY, out )

Computes a two-sample Z-test using alternative indexing semantics.

```javascript
var Results = require( '@stdlib/stats/base/ztest/two-sample/results/float64' );

var x = [ 4.0, 4.0, 6.0, 6.0, 5.0 ];
var y = [ 3.0, 3.0, 5.0, 7.0, 7.0 ];

var results = new Results();
var out = ztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 2.0, y, 1, 0, results );
// returns {...}

var bool = ( out === results );
// returns true
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, offset parameters support indexing semantics based on starting indices. For example, to perform a two-sample Z-test over every other element in `x` and `y` starting from the second element

```javascript
var Results = require( '@stdlib/stats/base/ztest/two-sample/results/float64' );

var x = [ 0.0, 4.0, 0.0, 4.0, 0.0, 6.0, 0.0, 6.0, 0.0, 5.0 ];
var y = [ 0.0, 3.0, 0.0, 3.0, 0.0, 5.0, 0.0, 7.0, 0.0, 7.0 ];

var results = new Results();
var out = ztest2.ndarray( 5, 5, 'two-sided', 0.05, 0.0, 1.0, x, 2, 1, 2.0, y, 2, 1, results );
// returns {...}

var bool = ( out === results );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   As a general rule of thumb, a Z-test is most reliable when `N >= 50`. For smaller sample sizes or when the standard deviations are unknown, prefer a t-test.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/base/accessor`][@stdlib/array/base/accessor]).
-   Depending on the environment, the typed versions ([`dztest2`][@stdlib/stats/strided/dztest2], [`sztest2`][@stdlib/stats/strided/sztest2], etc.) are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Results = require( '@stdlib/stats/base/ztest/two-sample/results/float64' );
var normal = require( '@stdlib/random/array/normal' );
var ztest2 = require( '@stdlib/stats/strided/ztest2' );

var x = normal( 1000, 4.0, 2.0, {
    'dtype': 'generic'
});
var y = normal( 800, 3.0, 2.0, {
    'dtype': 'generic'
});

var results = new Results();
var out = ztest2( x.length, y.length, 'two-sided', 0.05, 1.0, 2.0, x, 1, 2.0, y, 1, results );
// returns {...}

console.log( out.toString() );
```

</section>

<!-- /.examples -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/stats/base/ztest/alternatives]: https://github.com/stdlib-js/stats/tree/main/base/ztest/alternatives

[@stdlib/stats/base/ztest/two-sample/results/float64]: https://github.com/stdlib-js/stats/tree/main/base/ztest/two-sample/results/float64

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor

[@stdlib/stats/strided/dztest2]: https://github.com/stdlib-js/stats/tree/main/strided/dztest2

[@stdlib/stats/strided/sztest2]: https://github.com/stdlib-js/stats/tree/main/strided/sztest2

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
