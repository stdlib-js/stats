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

# nanmaxabs

> Calculate the maximum absolute value of a strided array, ignoring `NaN` values.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var nanmaxabs = require( '@stdlib/stats/strided/nanmaxabs' );
```

#### nanmaxabs( N, x, strideX )

Computes the maximum absolute value of a strided array, ignoring `NaN` values.

```javascript
var x = [ 1.0, -2.0, NaN, 2.0 ];

var v = nanmaxabs( x.length, x, 1 );
// returns 2.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **strideX**: stride length for `x`.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to compute the maximum absolute value of every other element in `x`,

```javascript
var x = [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0, NaN, NaN ];

var v = nanmaxabs( 5, x, 2 );
// returns 4.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, NaN, NaN, 4.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = nanmaxabs( 4, x1, 2 );
// returns 4.0
```

#### nanmaxabs.ndarray( N, x, strideX, offsetX )

Computes the maximum absolute value of a strided array, ignoring `NaN` values and using alternative indexing semantics.

```javascript
var x = [ 1.0, -2.0, NaN, 2.0 ];

var v = nanmaxabs.ndarray( x.length, x, 1, 0 );
// returns 2.0
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to calculate the maximum absolute value for every other element in `x` starting from the second element

```javascript
var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, NaN, NaN, 2.0, 3.0, 4.0 ];

var v = nanmaxabs.ndarray( 5, x, 2, 1 );
// returns 4.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `NaN`.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/base/accessor`][@stdlib/array/base/accessor]).
-   Depending on the environment, the typed versions ([`dnanmaxabs`][@stdlib/stats/strided/dnanmaxabs], [`snanmaxabs`][@stdlib/stats/strided/snanmaxabs], etc.) are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/base/uniform' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var bernoulli = require( '@stdlib/random/base/bernoulli' );
var nanmaxabs = require( '@stdlib/stats/strided/nanmaxabs' );

function rand() {
    if ( bernoulli( 0.8 ) < 1 ) {
        return NaN;
    }
    return uniform( -50.0, 50.0 );
}

var x = filledarrayBy( 10, 'float64', rand );
console.log( x );

var v = nanmaxabs( x.length, x, 1 );
console.log( v );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/strided/dnanmaxabs`][@stdlib/stats/strided/dnanmaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a double-precision floating-point strided array, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats/strided/maxabs`][@stdlib/stats/strided/maxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a strided array.</span>
-   <span class="package-name">[`@stdlib/stats/strided/nanmax`][@stdlib/stats/strided/nanmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats/strided/nanminabs`][@stdlib/stats/strided/nanminabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of a strided array, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats/strided/snanmaxabs`][@stdlib/stats/strided/snanmaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a single-precision floating-point strided array, ignoring NaN values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor

<!-- <related-links> -->

[@stdlib/stats/strided/dnanmaxabs]: https://github.com/stdlib-js/stats/tree/main/strided/dnanmaxabs

[@stdlib/stats/strided/maxabs]: https://github.com/stdlib-js/stats/tree/main/strided/maxabs

[@stdlib/stats/strided/nanmax]: https://github.com/stdlib-js/stats/tree/main/strided/nanmax

[@stdlib/stats/strided/nanminabs]: https://github.com/stdlib-js/stats/tree/main/strided/nanminabs

[@stdlib/stats/strided/snanmaxabs]: https://github.com/stdlib-js/stats/tree/main/strided/snanmaxabs

<!-- </related-links> -->

</section>

<!-- /.links -->
