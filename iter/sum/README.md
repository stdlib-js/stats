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

# itersum

> Compute the sum of all [iterated][mdn-iterator-protocol] values.

<section class="intro">

The sum is defined as

<!-- <equation class="equation" label="eq:sum" align="center" raw="s = \sum_{i=0}^{n-1} x_i" alt="Equation for the sum."> -->

```math
s = \sum_{i=0}^{n-1} x_i
```

<!-- <div class="equation" align="center" data-raw-text="s = \sum_{i=0}^{n-1} x_i" data-equation="eq:sum">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@e7ac225deb396ee6d2b4d5fc1a2faa645582349f/lib/node_modules/@stdlib/stats/iter/sum/docs/img/equation_sum.svg" alt="Equation for the sum.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var itersum = require( '@stdlib/stats/iter/sum' );
```

#### itersum( iterator )

Computes the sum of all [iterated][mdn-iterator-protocol] values.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var arr = array2iterator( [ 1.0, 2.0, -3.5, 4.0 ] );

var s = itersum( arr );
// returns 3.5
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
var itersum = require( '@stdlib/stats/iter/sum' );

// Create an iterator for generating uniformly distributed pseudorandom numbers:
var rand = runif( -10.0, 10.0, {
    'seed': 1234,
    'iter': 100
});

// Compute the sum:
var s = itersum( rand );
// returns <number>

console.log( 'Sum: %d.', s );
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

-   <span class="package-name">[`@stdlib/stats/iter/mean`][@stdlib/stats/iter/mean]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean over all iterated values.</span>
-   <span class="package-name">[`@stdlib/stats/iter/msum`][@stdlib/stats/iter/msum]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a moving sum.</span>
-   <span class="package-name">[`@stdlib/stats/iter/prod`][@stdlib/stats/iter/prod]</span><span class="delimiter">: </span><span class="description">compute the product of all iterated values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/stats/iter/mean]: https://github.com/stdlib-js/stats/tree/main/iter/mean

[@stdlib/stats/iter/msum]: https://github.com/stdlib-js/stats/tree/main/iter/msum

[@stdlib/stats/iter/prod]: https://github.com/stdlib-js/stats/tree/main/iter/prod

<!-- </related-links> -->

</section>

<!-- /.links -->
