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

# incrmminmaxabs

> Compute moving minimum and maximum absolute values incrementally.

<section class="usage">

## Usage

```javascript
var incrmminmaxabs = require( '@stdlib/stats/incr/mminmaxabs' );
```

#### incrmminmaxabs( \[out,] window )

Returns an accumulator `function` which incrementally computes moving minimum and maximum absolute values. The `window` parameter defines the number of values over which to compute moving minimum and maximum absolute values.

```javascript
var accumulator = incrmminmaxabs( 3 );
```

By default, the returned accumulator `function` returns the minimum and maximum as a two-element `array`. To avoid unnecessary memory allocation, the function supports providing an output (destination) object.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var accumulator = incrmminmaxabs( new Float64Array( 2 ), 3 );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns updated minimum and maximum absolute values. If not provided an input value `x`, the accumulator function returns the current minimum and maximum absolute values.

```javascript
var accumulator = incrmminmaxabs( 3 );

var mm = accumulator();
// returns null

// Fill the window...
mm = accumulator( 2.0 ); // [2.0]
// returns [ 2.0, 2.0 ]

mm = accumulator( 1.0 ); // [2.0, 1.0]
// returns [ 1.0, 2.0 ]

mm = accumulator( 3.0 ); // [2.0, 1.0, 3.0]
// returns [ 1.0, 3.0 ]

// Window begins sliding...
mm = accumulator( -7.0 ); // [1.0, 3.0, -7.0]
// returns [ 1.0, 7.0 ]

mm = accumulator( -5.0 ); // [3.0, -7.0, -5.0]
// returns [ 3.0, 7.0 ]

mm = accumulator();
// returns [ 3.0, 7.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN`, the accumulated minimum and maximum values are `NaN` for **at least** `W-1` future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   As `W` values are needed to fill the window buffer, the first `W-1` returned minimum and maximum values are calculated from smaller sample sizes. Until the window is full, each returned minimum and maximum is calculated from all provided values.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var incrmminmaxabs = require( '@stdlib/stats/incr/mminmaxabs' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrmminmaxabs( 5 );

// For each simulated datum, update the moving minimum and maximum absolute values...
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

-   <span class="package-name">[`@stdlib/stats/incr/minmaxabs`][@stdlib/stats/incr/minmaxabs]</span><span class="delimiter">: </span><span class="description">compute minimum and maximum absolute values incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mmax`][@stdlib/stats/incr/mmax]</span><span class="delimiter">: </span><span class="description">compute a moving maximum incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mmaxabs`][@stdlib/stats/incr/mmaxabs]</span><span class="delimiter">: </span><span class="description">compute a moving maximum absolute value incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mmin`][@stdlib/stats/incr/mmin]</span><span class="delimiter">: </span><span class="description">compute a moving minimum incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mminabs`][@stdlib/stats/incr/mminabs]</span><span class="delimiter">: </span><span class="description">compute a moving minimum absolute value incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mminmax`][@stdlib/stats/incr/mminmax]</span><span class="delimiter">: </span><span class="description">compute a moving minimum and maximum incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/stats/incr/minmaxabs]: https://github.com/stdlib-js/stats/tree/main/incr/minmaxabs

[@stdlib/stats/incr/mmax]: https://github.com/stdlib-js/stats/tree/main/incr/mmax

[@stdlib/stats/incr/mmaxabs]: https://github.com/stdlib-js/stats/tree/main/incr/mmaxabs

[@stdlib/stats/incr/mmin]: https://github.com/stdlib-js/stats/tree/main/incr/mmin

[@stdlib/stats/incr/mminabs]: https://github.com/stdlib-js/stats/tree/main/incr/mminabs

[@stdlib/stats/incr/mminmax]: https://github.com/stdlib-js/stats/tree/main/incr/mminmax

<!-- </related-links> -->

</section>

<!-- /.links -->
