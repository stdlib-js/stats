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

# snanrange

> Calculate the [range][range] of a single-precision floating-point strided array, ignoring `NaN` values.

<section class="intro">

The [**range**][range] is defined as the difference between the maximum and minimum values.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var snanrange = require( '@stdlib/stats/base/snanrange' );
```

#### snanrange( N, x, stride )

Computes the [range][range] of a single-precision floating-point strided array `x`, ignoring `NaN` values.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
var N = x.length;

var v = snanrange( N, x, 1 );
// returns 4.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **stride**: index increment for `x`.

The `N` and `stride` parameters determine which elements in `x` are accessed at runtime. For example, to compute the [range][range] of every other element in `x`,

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var floor = require( '@stdlib/math/base/special/floor' );

var x = new Float32Array( [ 1.0, 2.0, -7.0, -2.0, 4.0, 3.0, NaN, NaN ] );
var N = floor( x.length / 2 );

var v = snanrange( N, x, 2 );
// returns 11.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var floor = require( '@stdlib/math/base/special/floor' );

var x0 = new Float32Array( [ 2.0, 1.0, -2.0, -2.0, 3.0, 4.0, NaN, NaN ] );
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var N = floor( x0.length / 2 );

var v = snanrange( N, x1, 2 );
// returns 6.0
```

#### snanrange.ndarray( N, x, stride, offset )

Computes the [range][range] of a single-precision floating-point strided array, ignoring `NaN` values and using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
var N = x.length;

var v = snanrange.ndarray( N, x, 1, 0 );
// returns 4.0
```

The function has the following additional parameters:

-   **offset**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to calculate the [range][range] for every other value in `x` starting from the second value

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var floor = require( '@stdlib/math/base/special/floor' );

var x = new Float32Array( [ 2.0, 1.0, -2.0, -2.0, 3.0, 4.0, NaN, NaN ] );
var N = floor( x.length / 2 );

var v = snanrange.ndarray( N, x, 2, 1 );
// returns 6.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `NaN`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var Float32Array = require( '@stdlib/array/float32' );
var snanrange = require( '@stdlib/stats/base/snanrange' );

var x;
var i;

x = new Float32Array( 10 );
for ( i = 0; i < x.length; i++ ) {
    if ( randu() < 0.2 ) {
        x[ i ] = NaN;
    } else {
        x[ i ] = round( (randu()*100.0) - 50.0 );
    }
}
console.log( x );

var v = snanrange( x.length, x, 1 );
console.log( v );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/base/dnanrange`][@stdlib/stats/base/dnanrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a double-precision floating-point strided array, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats/base/nanrange`][@stdlib/stats/base/nanrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a strided array, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats/base/snanmax`][@stdlib/stats/base/snanmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a single-precision floating-point strided array, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats/base/snanmin`][@stdlib/stats/base/snanmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a single-precision floating-point strided array, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats/base/srange`][@stdlib/stats/base/srange]</span><span class="delimiter">: </span><span class="description">calculate the range of a single-precision floating-point strided array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[range]: https://en.wikipedia.org/wiki/Range_%28statistics%29

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/stats/base/dnanrange]: https://github.com/stdlib-js/stats/tree/main/base/dnanrange

[@stdlib/stats/base/nanrange]: https://github.com/stdlib-js/stats/tree/main/base/nanrange

[@stdlib/stats/base/snanmax]: https://github.com/stdlib-js/stats/tree/main/base/snanmax

[@stdlib/stats/base/snanmin]: https://github.com/stdlib-js/stats/tree/main/base/snanmin

[@stdlib/stats/base/srange]: https://github.com/stdlib-js/stats/tree/main/base/srange

<!-- </related-links> -->

</section>

<!-- /.links -->
