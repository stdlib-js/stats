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

# itermmeanabs

> Create an [iterator][mdn-iterator-protocol] which iteratively computes a moving [arithmetic mean][arithmetic-mean] of absolute values.

<section class="intro">

For a window of size `W`, the [arithmetic mean][arithmetic-mean] of absolute values is defined as

<!-- <equation class="equation" label="eq:arithmetic_mean_absolute_values" align="center" raw="\bar{x} = \frac{1}{W} \sum_{i=0}^{W-1} |x_i|" alt="Equation for the arithmetic mean of absolute values."> -->

```math
\bar{x} = \frac{1}{W} \sum_{i=0}^{W-1} |x_i|
```

<!-- <div class="equation" align="center" data-raw-text="\bar{x} = \frac{1}{W} \sum_{i=0}^{W-1} |x_i|" data-equation="eq:arithmetic_mean_absolute_values">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@5861766629ac00280431b7afa773391cdfd116f1/lib/node_modules/@stdlib/stats/iter/mmeanabs/docs/img/equation_arithmetic_mean_absolute_values.svg" alt="Equation for the arithmetic mean of absolute values.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var itermmeanabs = require( '@stdlib/stats/iter/mmeanabs' );
```

#### itermmeanabs( iterator, W )

Returns an [iterator][mdn-iterator-protocol] which iteratively computes a moving [arithmetic mean][arithmetic-mean] of absolute values. The `W` parameter defines the number of iterated values over which to compute the moving mean.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var arr = array2iterator( [ 2.0, 1.0, 3.0, -7.0, -5.0 ] );
var it = itermmeanabs( arr, 3 );

// Fill the window...
var m = it.next().value; // [2.0]
// returns 2.0

m = it.next().value; // [2.0, 1.0]
// returns 1.5

m = it.next().value; // [2.0, 1.0, 3.0]
// returns 2.0

// Window begins sliding...
m = it.next().value; // [1.0, 3.0, -7.0]
// returns ~3.67

m = it.next().value; // [3.0, -7.0, -5.0]
// returns 5.0
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
var itermmeanabs = require( '@stdlib/stats/iter/mmeanabs' );

// Create an iterator for generating uniformly distributed pseudorandom numbers:
var rand = runif( -10.0, 10.0, {
    'seed': 1234,
    'iter': 100
});

// Create an iterator for iteratively computing a moving arithmetic mean of absolute values:
var it = itermmeanabs( rand, 3 );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    if ( typeof v.value === 'number' ) {
        console.log( 'meanabs: %d', v.value );
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

-   <span class="package-name">[`@stdlib/stats/iter/meanabs`][@stdlib/stats/iter/meanabs]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of absolute values for all iterated values.</span>
-   <span class="package-name">[`@stdlib/stats/iter/mmean`][@stdlib/stats/iter/mmean]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a moving arithmetic mean.</span>
-   <span class="package-name">[`@stdlib/stats/iter/msumabs`][@stdlib/stats/iter/msumabs]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a moving sum of absolute values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[arithmetic-mean]: https://en.wikipedia.org/wiki/Arithmetic_mean

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/stats/iter/meanabs]: https://github.com/stdlib-js/stats/tree/main/iter/meanabs

[@stdlib/stats/iter/mmean]: https://github.com/stdlib-js/stats/tree/main/iter/mmean

[@stdlib/stats/iter/msumabs]: https://github.com/stdlib-js/stats/tree/main/iter/msumabs

<!-- </related-links> -->

</section>

<!-- /.links -->
