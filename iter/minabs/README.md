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

# iterminabs

> Compute the minimum absolute value of all [iterated][mdn-iterator-protocol] values.

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterminabs = require( '@stdlib/stats/iter/minabs' );
```

#### iterminabs( iterator )

Computes the minimum absolute value of all [iterated][mdn-iterator-protocol] values.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var arr = array2iterator( [ 1.0, -2.0, 3.0, -4.0 ] );

var m = iterminabs( arr );
// returns 1.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an iterated value is non-numeric (including `NaN`), the returned [`iterator`][mdn-iterator-protocol] returns `NaN`. If non-numeric iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles non-numeric values accordingly.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var runif = require( '@stdlib/random/iter/uniform' );
var iterminabs = require( '@stdlib/stats/iter/minabs' );

// Create an iterator for generating uniformly distributed pseudorandom numbers:
var rand = runif( -10.0, 10.0, {
    'seed': 1234,
    'iter': 100
});

// Compute the minimum absolute value:
var m = iterminabs( rand );
// returns <number>

console.log( 'minabs: %d.', m );
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

-   <span class="package-name">[`@stdlib/stats/iter/maxabs`][@stdlib/stats/iter/maxabs]</span><span class="delimiter">: </span><span class="description">compute the maximum absolute value of all iterated values.</span>
-   <span class="package-name">[`@stdlib/stats/iter/min`][@stdlib/stats/iter/min]</span><span class="delimiter">: </span><span class="description">compute the minimum value of all iterated values.</span>
-   <span class="package-name">[`@stdlib/stats/iter/mminabs`][@stdlib/stats/iter/mminabs]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a moving minimum absolute value.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/stats/iter/maxabs]: https://github.com/stdlib-js/stats/tree/main/iter/maxabs

[@stdlib/stats/iter/min]: https://github.com/stdlib-js/stats/tree/main/iter/min

[@stdlib/stats/iter/mminabs]: https://github.com/stdlib-js/stats/tree/main/iter/mminabs

<!-- </related-links> -->

</section>

<!-- /.links -->
