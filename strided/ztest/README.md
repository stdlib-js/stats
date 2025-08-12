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

# ztest

> Compute a one-sample Z-test for a strided array.

<section class="intro">

A Z-test commonly refers to a one-sample location test which compares the mean of a set of measurements `X` to a given constant when the standard deviation is known. A Z-test supports testing three different null hypotheses `H0`:

-   `H0: μ ≥ μ0` versus the alternative hypothesis `H1: μ < μ0`.
-   `H0: μ ≤ μ0` versus the alternative hypothesis `H1: μ > μ0`.
-   `H0: μ = μ0` versus the alternative hypothesis `H1: μ ≠ μ0`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var ztest = require( '@stdlib/stats/strided/ztest' );
```

#### ztest( N, alternative, alpha, mu, sigma, x, strideX, out )

Computes a one-sample Z-test for a strided array.

```javascript
var Results = require( '@stdlib/stats/base/ztest/one-sample/results/float64' );

var x = [ 4.0, 4.0, 6.0, 6.0, 5.0 ];

var results = new Results();
var out = ztest( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, results );
// returns {...}

var bool = ( out === results );
// returns true
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **alternative**: [alternative hypothesis][@stdlib/stats/base/ztest/alternatives].
-   **alpha**: significance level.
-   **mu**: mean value under the null hypothesis.
-   **sigma**: known standard deviation.
-   **x**: input array.
-   **strideX**: stride length for `x`.
-   **out**: output [results object][@stdlib/stats/base/ztest/one-sample/results/float64].

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to perform a one-sample Z-test over every other element in `x`,

```javascript
var Results = require( '@stdlib/stats/base/ztest/one-sample/results/float64' );

var x = [ 4.0, 0.0, 4.0, 0.0, 6.0, 0.0, 6.0, 0.0, 5.0, 0.0 ];

var results = new Results();
var out = ztest( 5, 'two-sided', 0.05, 0.0, 1.0, x, 2, results );
// returns {...}

var bool = ( out === results );
// returns true
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Results = require( '@stdlib/stats/base/ztest/one-sample/results/float64' );
var Float64Array = require( '@stdlib/array/float64' );

var x0 = new Float64Array( [ 0.0, 4.0, 4.0, 6.0, 6.0, 5.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var results = new Results();
var out = ztest( x1.length, 'two-sided', 0.05, 0.0, 1.0, x1, 1, results );
// returns {...}

var bool = ( out === results );
// returns true
```

#### ztest.ndarray( N, alternative, alpha, mu, sigma, x, strideX, offsetX, out )

Computes a one-sample Z-test for a strided array using alternative indexing semantics.

```javascript
var Results = require( '@stdlib/stats/base/ztest/one-sample/results/float64' );

var x = [ 4.0, 4.0, 6.0, 6.0, 5.0 ];

var results = new Results();
var out = ztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, results );
// returns {...}

var bool = ( out === results );
// returns true
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to perform a one-sample Z-test over every other element in `x` starting from the second element

```javascript
var Results = require( '@stdlib/stats/base/ztest/one-sample/results/float64' );

var x = [ 0.0, 4.0, 0.0, 4.0, 0.0, 6.0, 0.0, 6.0, 0.0, 5.0 ];

var results = new Results();
var out = ztest.ndarray( 5, 'two-sided', 0.05, 0.0, 1.0, x, 2, 1, results );
// returns {...}

var bool = ( out === results );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   As a general rule of thumb, a Z-test is most reliable when `N >= 50`. For smaller sample sizes or when the standard deviation is unknown, prefer a t-test.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/base/accessor`][@stdlib/array/base/accessor]).
-   Depending on the environment, the typed versions ([`dztest`][@stdlib/stats/strided/dztest], [`sztest`][@stdlib/stats/strided/sztest], etc.) are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Results = require( '@stdlib/stats/base/ztest/one-sample/results/float64' );
var normal = require( '@stdlib/random/array/normal' );
var ztest = require( '@stdlib/stats/strided/ztest' );

var x = normal( 1000, 0.0, 1.0, {
    'dtype': 'generic'
});

var results = new Results();
var out = ztest( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, results );
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

[variance]: https://en.wikipedia.org/wiki/Variance

[@stdlib/stats/base/ztest/alternatives]: https://github.com/stdlib-js/stats/tree/main/base/ztest/alternatives

[@stdlib/stats/base/ztest/one-sample/results/float64]: https://github.com/stdlib-js/stats/tree/main/base/ztest/one-sample/results/float64

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor

[@stdlib/stats/strided/dztest]: https://github.com/stdlib-js/stats/tree/main/strided/dztest

[@stdlib/stats/strided/sztest]: https://github.com/stdlib-js/stats/tree/main/strided/sztest

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
