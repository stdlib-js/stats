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

# nanmeanors

> Calculate the [arithmetic mean][arithmetic-mean] of a strided array, ignoring `NaN` values and using ordinary recursive summation.

<section class="intro">

The [arithmetic mean][arithmetic-mean] is defined as

<!-- <equation class="equation" label="eq:arithmetic_mean" align="center" raw="\mu = \frac{1}{n} \sum_{i=0}^{n-1} x_i" alt="Equation for the arithmetic mean."> -->

```math
\mu = \frac{1}{n} \sum_{i=0}^{n-1} x_i
```

<!-- <div class="equation" align="center" data-raw-text="\mu = \frac{1}{n} \sum_{i=0}^{n-1} x_i" data-equation="eq:arithmetic_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@9175c13dbc0434906c9644e01a0c6d2f700fc087/lib/node_modules/@stdlib/stats/base/nanmeanors/docs/img/equation_arithmetic_mean.svg" alt="Equation for the arithmetic mean.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var nanmeanors = require( '@stdlib/stats/base/nanmeanors' );
```

#### nanmeanors( N, x, strideX )

Computes the [arithmetic mean][arithmetic-mean] of a strided array, ignoring `NaN` values and using ordinary recursive summation.

```javascript
var x = [ 1.0, -2.0, NaN, 2.0 ];

var v = nanmeanors( 4, x, 1 );
// returns ~0.3333
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **strideX**: stride length for `x`.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to compute the [arithmetic mean][arithmetic-mean] of every other element in `x`,

```javascript
var x = [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0, NaN, NaN ];

var v = nanmeanors( 5, x, 2 );
// returns 1.25
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments, max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = nanmeanors( 5, x1, 2 );
// returns 1.25
```

#### nanmeanors.ndarray( N, x, strideX, offsetX )

Computes the [arithmetic mean][arithmetic-mean] of a strided array, ignoring `NaN` values and using ordinary recursive summation and alternative indexing semantics.

```javascript
var x = [ 1.0, -2.0, NaN, 2.0 ];

var v = nanmeanors.ndarray( x.length, x, 1, 0 );
// returns ~0.33333
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to calculate the [arithmetic mean][arithmetic-mean] for every other value in `x` starting from the second value

```javascript
var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ];

var v = nanmeanors.ndarray( 5, x, 2, 1 );
// returns 1.25
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `NaN`.
-   If every indexed element is `NaN`, both functions return `NaN`.
-   Ordinary recursive summation (i.e., a "simple" sum) is performant, but can incur significant numerical error. If performance is paramount and error tolerated, using ordinary recursive summation to compute an arithmetic mean is acceptable; in all other cases, exercise due caution.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/base/accessor`][@stdlib/array/base/accessor]).
-   Depending on the environment, the typed versions ([`dnanmeanors`][@stdlib/stats/strided/dnanmeanors], [`snanmeanors`][@stdlib/stats/strided/snanmeanors], etc.) are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/base/uniform' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var bernoulli = require( '@stdlib/random/base/bernoulli' );
var nanmeanors = require( '@stdlib/stats/base/nanmeanors' );

function rand() {
    if ( bernoulli( 0.8 ) < 1 ) {
        return NaN;
    }
    return uniform( -50.0, 50.0 );
}

var x = filledarrayBy( 10, 'generic', rand );
console.log( x );

var v = nanmeanors( x.length, x, 1 );
console.log( v );
```

</section>

<!-- /.examples -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/strided/dnanmeanors`][@stdlib/stats/strided/dnanmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array, ignoring NaN values and using ordinary recursive summation.</span>
-   <span class="package-name">[`@stdlib/stats/strided/meanors`][@stdlib/stats/strided/meanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array using ordinary recursive summation.</span>
-   <span class="package-name">[`@stdlib/stats/base/nanmean`][@stdlib/stats/base/nanmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats/strided/snanmeanors`][@stdlib/stats/strided/snanmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring NaN values and using ordinary recursive summation.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[arithmetic-mean]: https://en.wikipedia.org/wiki/Arithmetic_mean

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor

<!-- <related-links> -->

[@stdlib/stats/strided/dnanmeanors]: https://github.com/stdlib-js/stats/tree/main/strided/dnanmeanors

[@stdlib/stats/strided/meanors]: https://github.com/stdlib-js/stats/tree/main/strided/meanors

[@stdlib/stats/base/nanmean]: https://github.com/stdlib-js/stats/tree/main/base/nanmean

[@stdlib/stats/strided/snanmeanors]: https://github.com/stdlib-js/stats/tree/main/strided/snanmeanors

<!-- </related-links> -->

</section>

<!-- /.links -->
