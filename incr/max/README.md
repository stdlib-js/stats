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

# incrmax

> Compute a maximum value incrementally.

<section class="usage">

## Usage

```javascript
var incrmax = require( '@stdlib/stats/incr/max' );
```

#### incrmax()

Returns an accumulator `function` which incrementally computes a maximum value.

```javascript
var accumulator = incrmax();
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated maximum value. If not provided an input value `x`, the accumulator function returns the current maximum value.

```javascript
var accumulator = incrmax();

var max = accumulator( 2.0 );
// returns 2.0

max = accumulator( 1.0 );
// returns 2.0

max = accumulator( 3.0 );
// returns 3.0

max = accumulator();
// returns 3.0
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
var incrmax = require( '@stdlib/stats/incr/max' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrmax();

// For each simulated datum, update the max...
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

-   <span class="package-name">[`@stdlib/stats/incr/midrange`][@stdlib/stats/incr/midrange]</span><span class="delimiter">: </span><span class="description">compute a mid-range incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/min`][@stdlib/stats/incr/min]</span><span class="delimiter">: </span><span class="description">compute a minimum value incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mmax`][@stdlib/stats/incr/mmax]</span><span class="delimiter">: </span><span class="description">compute a moving maximum incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/range`][@stdlib/stats/incr/range]</span><span class="delimiter">: </span><span class="description">compute a range incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/summary`][@stdlib/stats/incr/summary]</span><span class="delimiter">: </span><span class="description">compute a statistical summary incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/stats/incr/midrange]: https://github.com/stdlib-js/stats/tree/main/incr/midrange

[@stdlib/stats/incr/min]: https://github.com/stdlib-js/stats/tree/main/incr/min

[@stdlib/stats/incr/mmax]: https://github.com/stdlib-js/stats/tree/main/incr/mmax

[@stdlib/stats/incr/range]: https://github.com/stdlib-js/stats/tree/main/incr/range

[@stdlib/stats/incr/summary]: https://github.com/stdlib-js/stats/tree/main/incr/summary

<!-- </related-links> -->

</section>

<!-- /.links -->
