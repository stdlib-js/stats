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

# itersumabs2

> Compute the sum of squared absolute values for all [iterated][mdn-iterator-protocol] values.

<section class="intro">

The sum of squared absolute values is defined as

<!-- <equation class="equation" label="eq:sum_squared_absolute_values" align="center" raw="s = \sum_{i=0}^{n-1} x_i^2" alt="Equation for the sum of squared absolute values."> -->

```math
s = \sum_{i=0}^{n-1} x_i^2
```

<!-- <div class="equation" align="center" data-raw-text="s = \sum_{i=0}^{n-1} x_i^2" data-equation="eq:sum_squared_absolute_values">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@e7ac225deb396ee6d2b4d5fc1a2faa645582349f/lib/node_modules/@stdlib/stats/iter/sumabs2/docs/img/equation_sum_squared_absolute_values.svg" alt="Equation for the sum of squared absolute values.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var itersumabs2 = require( '@stdlib/stats/iter/sumabs2' );
```

#### itersumabs2( iterator )

Computes the sum of squared absolute values for all [iterated][mdn-iterator-protocol] values.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var arr = array2iterator( [ -1.0, 2.0, -3.0, 4.0 ] );

var s = itersumabs2( arr );
// returns 30.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an iterated value is non-numeric (including `NaN`), the returned [`iterator`][mdn-iterator-protocol] returns `NaN`. If non-numeric iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles non-numeric values accordingly.
-   For iterators which can generate many values or which may output large numbers, care should be taken to prevent overflow.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var runif = require( '@stdlib/random/iter/uniform' );
var itersumabs2 = require( '@stdlib/stats/iter/sumabs2' );

// Create an iterator for generating uniformly distributed pseudorandom numbers:
var rand = runif( -10.0, 10.0, {
    'seed': 1234,
    'iter': 100
});

// Compute the sum of squared absolute values:
var s = itersumabs2( rand );
// returns <number>

console.log( 'sumabs2: %d.', s );
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

-   <span class="package-name">[`@stdlib/stats/iter/meanabs2`][@stdlib/stats/iter/meanabs2]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of squared absolute values for all iterated values.</span>
-   <span class="package-name">[`@stdlib/stats/iter/msumabs2`][@stdlib/stats/iter/msumabs2]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a moving sum of squared absolute values.</span>
-   <span class="package-name">[`@stdlib/stats/iter/sumabs`][@stdlib/stats/iter/sumabs]</span><span class="delimiter">: </span><span class="description">compute the sum of absolute values for all iterated values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/stats/iter/meanabs2]: https://github.com/stdlib-js/stats/tree/main/iter/meanabs2

[@stdlib/stats/iter/msumabs2]: https://github.com/stdlib-js/stats/tree/main/iter/msumabs2

[@stdlib/stats/iter/sumabs]: https://github.com/stdlib-js/stats/tree/main/iter/sumabs

<!-- </related-links> -->

</section>

<!-- /.links -->
