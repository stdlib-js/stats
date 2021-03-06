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

# incrcount

> Compute a count incrementally.

<section class="usage">

## Usage

```javascript
var incrcount = require( '@stdlib/stats/incr/count' );
```

#### incrcount()

Returns an accumulator `function` which incrementally computes a count.

```javascript
var accumulator = incrcount();
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated count. If not provided an input value `x`, the accumulator function returns the current count.

```javascript
var accumulator = incrcount();

var count = accumulator( 2.0 );
// returns 1

count = accumulator( 1.0 );
// returns 2

count = accumulator( 3.0 );
// returns 3

count = accumulator();
// returns 3
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var incrcount = require( '@stdlib/stats/incr/count' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrcount();

// For each simulated datum, update the count...
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
-   <span class="package-name">[`@stdlib/stats/incr/sum`][@stdlib/stats/incr/sum]</span><span class="delimiter">: </span><span class="description">compute a sum incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/summary`][@stdlib/stats/incr/summary]</span><span class="delimiter">: </span><span class="description">compute a statistical summary incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/stats/incr/mean]: https://github.com/stdlib-js/stats/tree/main/incr/mean

[@stdlib/stats/incr/sum]: https://github.com/stdlib-js/stats/tree/main/incr/sum

[@stdlib/stats/incr/summary]: https://github.com/stdlib-js/stats/tree/main/incr/summary

<!-- </related-links> -->

</section>

<!-- /.links -->
