<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

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

# itermmin

> Create an [iterator][mdn-iterator-protocol] which iteratively computes a moving minimum value.

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var itermmin = require( '@stdlib/stats/iter/mmin' );
```

#### itermmin( iterator, W )

Returns an [iterator][mdn-iterator-protocol] which iteratively computes a moving minimum value. The `W` parameter defines the number of iterated values over which to compute the moving minimum.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var arr = array2iterator( [ 2.0, 1.0, 3.0, -7.0, -5.0 ] );
var it = itermmin( arr, 3 );

// Fill the window...
var m = it.next().value; // [2.0]
// returns 2.0

m = it.next().value; // [2.0, 1.0]
// returns 1.0

m = it.next().value; // [2.0, 1.0, 3.0]
// returns 1.0

// Window begins sliding...
m = it.next().value; // [1.0, 3.0, -7.0]
// returns -7.0

m = it.next().value; // [3.0, -7.0, -5.0]
// returns -7.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an iterated value is non-numeric (including `NaN`), the function returns `NaN` for **at least** `W-1` future invocations. If non-numeric iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles non-numeric values accordingly.
-   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all previously iterated values.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var runif = require( '@stdlib/random/iter/uniform' );
var itermmin = require( '@stdlib/stats/iter/mmin' );

// Create an iterator for generating uniformly distributed pseudorandom numbers:
var rand = runif( -10.0, 10.0, {
    'seed': 1234,
    'iter': 100
});

// Create an iterator for iteratively computing a moving minimum value:
var it = itermmin( rand, 3 );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    if ( typeof v.value === 'number' ) {
        console.log( 'min: %d', v.value );
    }
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/iter/min`][@stdlib/stats/iter/min]</span><span class="delimiter">: </span><span class="description">compute the minimum value of all iterated values.</span>
-   <span class="package-name">[`@stdlib/stats/iter/mmax`][@stdlib/stats/iter/mmax]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a moving maximum value.</span>
-   <span class="package-name">[`@stdlib/stats/iter/mmidrange`][@stdlib/stats/iter/mmidrange]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a moving mid-range.</span>
-   <span class="package-name">[`@stdlib/stats/iter/mrange`][@stdlib/stats/iter/mrange]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a moving range.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/stats/iter/min]: https://github.com/stdlib-js/stats/tree/main/iter/min

[@stdlib/stats/iter/mmax]: https://github.com/stdlib-js/stats/tree/main/iter/mmax

[@stdlib/stats/iter/mmidrange]: https://github.com/stdlib-js/stats/tree/main/iter/mmidrange

[@stdlib/stats/iter/mrange]: https://github.com/stdlib-js/stats/tree/main/iter/mrange

<!-- </related-links> -->

</section>

<!-- /.links -->
