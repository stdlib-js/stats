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
var nanmaxabs = require( '@stdlib/stats/base/nanmaxabs' );
```

#### nanmaxabs( N, x, stride )

Computes the maximum absolute value of a strided array `x`, ignoring `NaN` values.

```javascript
var x = [ 1.0, -2.0, NaN, 2.0 ];
var N = x.length;

var v = nanmaxabs( N, x, 1 );
// returns 2.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **stride**: index increment for `x`.

The `N` and `stride` parameters determine which elements in `x` are accessed at runtime. For example, to compute the maximum absolute value of every other element in `x`,

```javascript
var floor = require( '@stdlib/math/base/special/floor' );

var x = [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0, NaN, NaN ];
var N = floor( x.length / 2 );

var v = nanmaxabs( N, x, 2 );
// returns 4.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var floor = require( '@stdlib/math/base/special/floor' );

var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, NaN, NaN, 4.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var N = floor( x0.length / 2 );

var v = nanmaxabs( N, x1, 2 );
// returns 4.0
```

#### nanmaxabs.ndarray( N, x, stride, offset )

Computes the maximum absolute value of a strided array, ignoring `NaN` values and using alternative indexing semantics.

```javascript
var x = [ 1.0, -2.0, NaN, 2.0 ];
var N = x.length;

var v = nanmaxabs.ndarray( N, x, 1, 0 );
// returns 2.0
```

The function has the following additional parameters:

-   **offset**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to calculate the maximum absolute value for every other value in `x` starting from the second value

```javascript
var floor = require( '@stdlib/math/base/special/floor' );

var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, NaN, NaN, 2.0, 3.0, 4.0 ];
var N = floor( x.length / 2 );

var v = nanmaxabs.ndarray( N, x, 2, 1 );
// returns 4.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `NaN`.
-   Depending on the environment, the typed versions ([`dnanmaxabs`][@stdlib/stats/strided/dnanmaxabs], [`snanmaxabs`][@stdlib/stats/strided/snanmaxabs], etc.) are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var Float64Array = require( '@stdlib/array/float64' );
var nanmaxabs = require( '@stdlib/stats/base/nanmaxabs' );

var x;
var i;

x = new Float64Array( 10 );
for ( i = 0; i < x.length; i++ ) {
    if ( randu() < 0.2 ) {
        x[ i ] = NaN;
    } else {
        x[ i ] = round( (randu()*100.0) - 50.0 );
    }
}
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
-   <span class="package-name">[`@stdlib/stats/base/maxabs`][@stdlib/stats/base/maxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a strided array.</span>
-   <span class="package-name">[`@stdlib/stats/base/nanmax`][@stdlib/stats/base/nanmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats/base/nanminabs`][@stdlib/stats/base/nanminabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of a strided array, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats/strided/snanmaxabs`][@stdlib/stats/strided/snanmaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a single-precision floating-point strided array, ignoring NaN values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/stats/strided/dnanmaxabs]: https://github.com/stdlib-js/stats/tree/main/strided/dnanmaxabs

[@stdlib/stats/base/maxabs]: https://github.com/stdlib-js/stats/tree/main/base/maxabs

[@stdlib/stats/base/nanmax]: https://github.com/stdlib-js/stats/tree/main/base/nanmax

[@stdlib/stats/base/nanminabs]: https://github.com/stdlib-js/stats/tree/main/base/nanminabs

[@stdlib/stats/strided/snanmaxabs]: https://github.com/stdlib-js/stats/tree/main/strided/snanmaxabs

<!-- </related-links> -->

</section>

<!-- /.links -->
