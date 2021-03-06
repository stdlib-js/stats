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

# incrnancount

> Compute a count incrementally, ignoring `NaN` values.

<section class="usage">

## Usage

```javascript
var incrnancount = require( '@stdlib/stats/incr/nancount' );
```

#### incrnancount()

Returns an accumulator `function` which incrementally computes a count, ignoring `NaN` values.

```javascript
var accumulator = incrnancount();
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated count. If not provided an input value `x`, the accumulator function returns the current count.

```javascript
var accumulator = incrnancount();

var count = accumulator( 2.0 );
// returns 1

count = accumulator( 1.0 );
// returns 2

count = accumulator( NaN );
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
var incrnancount = require( '@stdlib/stats/incr/nancount' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrnancount();

// For each simulated datum, update the count...
for ( i = 0; i < 100; i++ ) {
    if ( randu() < 0.2 ) {
        v = NaN;
    } else {
        v = randu() * 100.0;
    }
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

-   <span class="package-name">[`@stdlib/stats/incr/nansum`][@stdlib/stats/incr/nansum]</span><span class="delimiter">: </span><span class="description">compute a sum incrementally, ignoring NaN values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/stats/incr/nansum]: https://github.com/stdlib-js/stats/tree/main/incr/nansum

<!-- </related-links> -->

</section>

<!-- /.links -->
