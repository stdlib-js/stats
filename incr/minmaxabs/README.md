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

# incrminmaxabs

> Compute minimum and maximum absolute values incrementally.

<section class="usage">

## Usage

```javascript
var incrminmaxabs = require( '@stdlib/stats/incr/minmaxabs' );
```

#### incrminmaxabs( \[out] )

Returns an accumulator `function` which incrementally computes minimum and maximum absolute values.

```javascript
var accumulator = incrminmaxabs();
```

By default, the returned accumulator `function` returns the minimum and maximum absolute values as a two-element `array`. To avoid unnecessary memory allocation, the function supports providing an output (destination) object.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var accumulator = incrminmaxabs( new Float64Array( 2 ) );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns updated minimum and maximum absolute values. If not provided an input value `x`, the accumulator function returns the current minimum and maximum absolute values.

```javascript
var accumulator = incrminmaxabs();

var mm = accumulator();
// returns null

mm = accumulator( 2.0 );
// returns [ 2.0, 2.0 ]

mm = accumulator( 1.0 );
// returns [ 1.0, 2.0 ]

mm = accumulator( 3.0 );
// returns [ 1.0, 3.0 ]

mm = accumulator( -7.0 );
// returns [ 1.0, 7.0 ]

mm = accumulator( -5.0 );
// returns [ 1.0, 7.0 ]

mm = accumulator();
// returns [ 1.0, 7.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN`, the accumulated values are equal to `NaN` for **all** future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var incrminmaxabs = require( '@stdlib/stats/incr/minmaxabs' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrminmaxabs();

// For each simulated datum, update the minimum and maximum absolute values...
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

-   <span class="package-name">[`@stdlib/stats/incr/maxabs`][@stdlib/stats/incr/maxabs]</span><span class="delimiter">: </span><span class="description">compute a maximum absolute value incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/minabs`][@stdlib/stats/incr/minabs]</span><span class="delimiter">: </span><span class="description">compute a minimum absolute value incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/minmax`][@stdlib/stats/incr/minmax]</span><span class="delimiter">: </span><span class="description">compute a minimum and maximum incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mminmaxabs`][@stdlib/stats/incr/mminmaxabs]</span><span class="delimiter">: </span><span class="description">compute moving minimum and maximum absolute values incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/stats/incr/maxabs]: https://github.com/stdlib-js/stats/tree/main/incr/maxabs

[@stdlib/stats/incr/minabs]: https://github.com/stdlib-js/stats/tree/main/incr/minabs

[@stdlib/stats/incr/minmax]: https://github.com/stdlib-js/stats/tree/main/incr/minmax

[@stdlib/stats/incr/mminmaxabs]: https://github.com/stdlib-js/stats/tree/main/incr/mminmaxabs

<!-- </related-links> -->

</section>

<!-- /.links -->
