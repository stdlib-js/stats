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

# incrmmin

> Compute a moving minimum value incrementally.

<section class="usage">

## Usage

```javascript
var incrmmin = require( '@stdlib/stats/incr/mmin' );
```

#### incrmmin( window )

Returns an accumulator `function` which incrementally computes a moving minimum value. The `window` parameter defines the number of values over which to compute the moving minimum.

```javascript
var accumulator = incrmmin( 3 );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated minimum value. If not provided an input value `x`, the accumulator function returns the current minimum value.

```javascript
var accumulator = incrmmin( 3 );

var m = accumulator();
// returns null

// Fill the window...
m = accumulator( 2.0 ); // [2.0]
// returns 2.0

m = accumulator( 1.0 ); // [2.0, 1.0]
// returns 1.0

m = accumulator( 3.0 ); // [2.0, 1.0, 3.0]
// returns 1.0

// Window begins sliding...
m = accumulator( -7.0 ); // [1.0, 3.0, -7.0]
// returns -7.0

m = accumulator( -5.0 ); // [3.0, -7.0, -5.0]
// returns -7.0

m = accumulator();
// returns -7.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN`, the accumulated value is `NaN` for **at least** `W-1` future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var incrmmin = require( '@stdlib/stats/incr/mmin' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrmmin( 5 );

// For each simulated datum, update the moving minimum...
for ( i = 0; i < 100; i++ ) {
    v = randu() * 100.0;
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

-   <span class="package-name">[`@stdlib/stats/incr/min`][@stdlib/stats/incr/min]</span><span class="delimiter">: </span><span class="description">compute a minimum value incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mmax`][@stdlib/stats/incr/mmax]</span><span class="delimiter">: </span><span class="description">compute a moving maximum incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mmidrange`][@stdlib/stats/incr/mmidrange]</span><span class="delimiter">: </span><span class="description">compute a moving mid-range incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mrange`][@stdlib/stats/incr/mrange]</span><span class="delimiter">: </span><span class="description">compute a moving range incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/msummary`][@stdlib/stats/incr/msummary]</span><span class="delimiter">: </span><span class="description">compute a moving statistical summary incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/stats/incr/min]: https://github.com/stdlib-js/stats/tree/main/incr/min

[@stdlib/stats/incr/mmax]: https://github.com/stdlib-js/stats/tree/main/incr/mmax

[@stdlib/stats/incr/mmidrange]: https://github.com/stdlib-js/stats/tree/main/incr/mmidrange

[@stdlib/stats/incr/mrange]: https://github.com/stdlib-js/stats/tree/main/incr/mrange

[@stdlib/stats/incr/msummary]: https://github.com/stdlib-js/stats/tree/main/incr/msummary

<!-- </related-links> -->

</section>

<!-- /.links -->
