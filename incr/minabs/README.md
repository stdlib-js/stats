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

# incrminabs

> Compute a minimum absolute value incrementally.

<section class="usage">

## Usage

```javascript
var incrminabs = require( '@stdlib/stats/incr/minabs' );
```

#### incrminabs()

Returns an accumulator `function` which incrementally computes a minimum absolute value.

```javascript
var accumulator = incrminabs();
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated minimum absolute value. If not provided an input value `x`, the accumulator function returns the current minimum absolute value.

```javascript
var accumulator = incrminabs();

var min = accumulator( 2.0 );
// returns 2.0

min = accumulator( 1.0 );
// returns 1.0

min = accumulator( -3.0 );
// returns 1.0

min = accumulator();
// returns 1.0
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
var incrminabs = require( '@stdlib/stats/incr/minabs' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrminabs();

// For each simulated datum, update the minimum absolute value...
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
-   <span class="package-name">[`@stdlib/stats/incr/min`][@stdlib/stats/incr/min]</span><span class="delimiter">: </span><span class="description">compute a minimum value incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mminabs`][@stdlib/stats/incr/mminabs]</span><span class="delimiter">: </span><span class="description">compute a moving minimum absolute value incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/stats/incr/maxabs]: https://github.com/stdlib-js/stats/tree/main/incr/maxabs

[@stdlib/stats/incr/min]: https://github.com/stdlib-js/stats/tree/main/incr/min

[@stdlib/stats/incr/mminabs]: https://github.com/stdlib-js/stats/tree/main/incr/mminabs

<!-- </related-links> -->

</section>

<!-- /.links -->
