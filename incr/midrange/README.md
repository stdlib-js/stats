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

# incrmidrange

> Compute a [mid-range][mid-range] incrementally.

<section class="intro">

The [**mid-range**][mid-range], or **mid-extreme**, is the arithmetic mean of maximum and minimum values. Accordingly, the [mid-range][mid-range] is the midpoint of the [range][range] and a measure of central tendency.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrmidrange = require( '@stdlib/stats/incr/midrange' );
```

#### incrmidrange()

Returns an accumulator `function` which incrementally computes a [mid-range][mid-range].

```javascript
var accumulator = incrmidrange();
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated [mid-range][mid-range]. If not provided an input value `x`, the accumulator function returns the current [mid-range][mid-range].

```javascript
var accumulator = incrmidrange();

var midrange = accumulator();
// returns null

midrange = accumulator( -2.0 );
// returns -2.0

midrange = accumulator( 1.0 );
// returns -0.5

midrange = accumulator( 3.0 );
// returns 0.5

midrange = accumulator();
// returns 0.5
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN`, the accumulated value is `NaN` for **all** future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var incrmidrange = require( '@stdlib/stats/incr/midrange' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrmidrange();

// For each simulated datum, update the mid-range...
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

-   <span class="package-name">[`@stdlib/stats/incr/mean`][@stdlib/stats/incr/mean]</span><span class="delimiter">: </span><span class="description">compute an arithmetic mean incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/max`][@stdlib/stats/incr/max]</span><span class="delimiter">: </span><span class="description">compute a maximum value incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/min`][@stdlib/stats/incr/min]</span><span class="delimiter">: </span><span class="description">compute a minimum value incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/range`][@stdlib/stats/incr/range]</span><span class="delimiter">: </span><span class="description">compute a range incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/summary`][@stdlib/stats/incr/summary]</span><span class="delimiter">: </span><span class="description">compute a statistical summary incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[range]: https://en.wikipedia.org/wiki/Range_%28statistics%29

[mid-range]: https://en.wikipedia.org/wiki/Mid-range

<!-- <related-links> -->

[@stdlib/stats/incr/mean]: https://github.com/stdlib-js/stats/tree/main/incr/mean

[@stdlib/stats/incr/max]: https://github.com/stdlib-js/stats/tree/main/incr/max

[@stdlib/stats/incr/min]: https://github.com/stdlib-js/stats/tree/main/incr/min

[@stdlib/stats/incr/range]: https://github.com/stdlib-js/stats/tree/main/incr/range

[@stdlib/stats/incr/summary]: https://github.com/stdlib-js/stats/tree/main/incr/summary

<!-- </related-links> -->

</section>

<!-- /.links -->
