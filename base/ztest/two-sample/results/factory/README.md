<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# resultsFactory

> Create a new constructor for creating a two-sample Z-test results object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var resultsFactory = require( '@stdlib/stats/base/ztest/two-sample/results/factory' );
```

#### resultsFactory( dtype )

Returns a new constructor for creating a two-sample Z-test results object.

```javascript
var Results = resultsFactory( 'float64' );
// returns <Function>

var r = new Results();
// returns <Results>
```

The function supports the following parameters:

-   **dtype**: floating-point data type for storing floating-point results. Must be either `'float64'` or `'float32'`.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A results object is a [`struct`][@stdlib/dstructs/struct] providing a fixed-width composite data structure for storing two-sample Z-test results and providing an ABI-stable data layout for JavaScript-C interoperation.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Float32Array = require( '@stdlib/array/float32' );
var resultsFactory = require( '@stdlib/stats/base/ztest/two-sample/results/factory' );

var Results = resultsFactory( 'float64' );
var results = new Results({
    'rejected': true,
    'alpha': 0.05,
    'pValue': 0.0132,
    'statistic': 2.4773,
    'nullValue': 0.0,
    'xmean': 3.7561,
    'ymean': 3.0129,
    'ci': new Float64Array( [ 0.1552, 1.3311 ] ),
    'alternative': 'two-sided'
});

var str = results.toString({
    'format': 'linear'
});
console.log( str );

Results = resultsFactory( 'float32' );
results = new Results({
    'rejected': true,
    'alpha': 0.05,
    'pValue': 0.0132,
    'statistic': 2.4773,
    'nullValue': 0.0,
    'xmean': 3.7561,
    'ymean': 3.0129,
    'ci': new Float32Array( [ 0.1552, 1.3311 ] ),
    'alternative': 'two-sided'
});

str = results.toString({
    'format': 'linear'
});
console.log( str );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/dstructs/struct]: https://github.com/stdlib-js/dstructs-struct

</section>

<!-- /.links -->
