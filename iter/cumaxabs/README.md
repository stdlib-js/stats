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

# itercumaxabs

> Create an [iterator][mdn-iterator-protocol] which iteratively computes a cumulative maximum absolute value.

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var itercumaxabs = require( '@stdlib/stats/iter/cumaxabs' );
```

#### itercumaxabs( iterator )

Returns an [iterator][mdn-iterator-protocol] which iteratively computes a cumulative maximum absolute value.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var arr = array2iterator( [ 2.0, 1.0, 3.0, -7.0, -5.0 ] );
var it = itercumaxabs( arr );

var m = it.next().value;
// returns 2.0

m = it.next().value;
// returns 2.0

m = it.next().value;
// returns 3.0

m = it.next().value;
// returns 7.0

m = it.next().value;
// returns 7.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an iterated value is non-numeric (including `NaN`), the function returns `NaN` for **all** future iterations. If non-numeric iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles non-numeric values accordingly.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var runif = require( '@stdlib/random/iter/uniform' );
var itercumaxabs = require( '@stdlib/stats/iter/cumaxabs' );

// Create an iterator for generating uniformly distributed pseudorandom numbers:
var rand = runif( -10.0, 10.0, {
    'seed': 1234,
    'iter': 100
});

// Create an iterator for iteratively computing a cumulative maximum absolute value:
var it = itercumaxabs( rand );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( typeof v.value === 'number' ) {
        console.log( 'maxabs: %d', v.value );
    }
    if ( v.done ) {
        break;
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

-   <span class="package-name">[`@stdlib/stats/iter/cumax`][@stdlib/stats/iter/cumax]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a cumulative maximum value.</span>
-   <span class="package-name">[`@stdlib/stats/iter/cuminabs`][@stdlib/stats/iter/cuminabs]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a cumulative minimum absolute value.</span>
-   <span class="package-name">[`@stdlib/stats/iter/maxabs`][@stdlib/stats/iter/maxabs]</span><span class="delimiter">: </span><span class="description">compute the maximum absolute value of all iterated values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/stats/iter/cumax]: https://github.com/stdlib-js/stats/tree/main/iter/cumax

[@stdlib/stats/iter/cuminabs]: https://github.com/stdlib-js/stats/tree/main/iter/cuminabs

[@stdlib/stats/iter/maxabs]: https://github.com/stdlib-js/stats/tree/main/iter/maxabs

<!-- </related-links> -->

</section>

<!-- /.links -->
