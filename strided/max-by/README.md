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

# maxBy

> Calculate the maximum value of a strided array via a callback function.

<section class="usage">

## Usage

```javascript
var maxBy = require( '@stdlib/stats/strided/max-by' );
```

#### maxBy( N, x, strideX, clbk\[, thisArg] )

Computes the maximum value of a strided array via a callback function.

```javascript
function accessor( v ) {
    return v * 2.0;
}

var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];

var v = maxBy( x.length, x, 1, accessor );
// returns 8.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Array`][mdn-array], [`typed array`][mdn-typed-array], or an array-like object (excluding strings and functions).
-   **strideX**: stride length for `x`.
-   **clbk**: callback function.
-   **thisArg**: execution context (_optional_).

The invoked callback is provided four arguments:

-   **value**: array element.
-   **aidx**: array index.
-   **sidx**: strided index (`offset + aidx*stride`).
-   **array**: input array/collection.

To set the callback execution context, provide a `thisArg`.

```javascript
function accessor( v ) {
    this.count += 1;
    return v * 2.0;
}

var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];

var context = {
    'count': 0
};

var v = maxBy( x.length, x, 1, accessor, context );
// returns 8.0

var cnt = context.count;
// returns 8
```

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to access every other element

```javascript
function accessor( v ) {
    return v * 2.0;
}

var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];

var v = maxBy( 4, x, 2, accessor );
// returns 8.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

function accessor( v ) {
    return v * 2.0;
}

// Initial array...
var x0 = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

// Create an offset view...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Access every other element...
var v = maxBy( 3, x1, 2, accessor );
// returns -4.0
```

#### maxBy.ndarray( N, x, strideX, offsetX, clbk\[, thisArg] )

Computes the maximum value of a strided array via a callback function and using alternative indexing semantics.

```javascript
function accessor( v ) {
    return v * 2.0;
}

var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];

var v = maxBy.ndarray( x.length, x, 1, 0, accessor );
// returns 8.0
```

The function has the following additional parameters:

-   **offsetX**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to access only the last three elements of `x`

```javascript
function accessor( v ) {
    return v * 2.0;
}

var x = [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ];

var v = maxBy.ndarray( 3, x, 1, x.length-3, accessor );
// returns 10.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `NaN`.
-   A provided callback function should return a numeric value.
-   If a provided callback function does not return any value (or equivalently, explicitly returns `undefined`), the value is **ignored**.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/base/accessor`][@stdlib/array/base/accessor]).
-   When possible, prefer using [`dmax`][@stdlib/stats/strided/dmax], [`smax`][@stdlib/stats/strided/smax], and/or [`max`][@stdlib/stats/strided/max], as, depending on the environment, these interfaces are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var maxBy = require( '@stdlib/stats/strided/max-by' );

function accessor( v ) {
    return v * 2.0;
}

var x = discreteUniform( 10, -50, 50, {
    'dtype': 'float64'
});
console.log( x );

var v = maxBy( x.length, x, 1, accessor );
console.log( v );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/strided/dmax`][@stdlib/stats/strided/dmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a double-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/stats/strided/max`][@stdlib/stats/strided/max]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array.</span>
-   <span class="package-name">[`@stdlib/stats/strided/min-by`][@stdlib/stats/strided/min-by]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a strided array via a callback function.</span>
-   <span class="package-name">[`@stdlib/stats/base/nanmax-by`][@stdlib/stats/base/nanmax-by]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array via a callback function, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats/strided/smax`][@stdlib/stats/strided/smax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a single-precision floating-point strided array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor

<!-- <related-links> -->

[@stdlib/stats/strided/dmax]: https://github.com/stdlib-js/stats/tree/main/strided/dmax

[@stdlib/stats/strided/max]: https://github.com/stdlib-js/stats/tree/main/strided/max

[@stdlib/stats/strided/min-by]: https://github.com/stdlib-js/stats/tree/main/strided/min-by

[@stdlib/stats/base/nanmax-by]: https://github.com/stdlib-js/stats/tree/main/base/nanmax-by

[@stdlib/stats/strided/smax]: https://github.com/stdlib-js/stats/tree/main/strided/smax

<!-- </related-links> -->

</section>

<!-- /.links -->
