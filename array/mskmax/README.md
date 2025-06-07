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

# mskmax

> Calculate the maximum value of an array according to a mask.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var mskmax = require( '@stdlib/stats/array/mskmax' );
```

#### mskmax( x, mask )

Computes the maximum value of an array according to a mask.

```javascript
var x = [ 1.0, -2.0, 4.0, 2.0 ];
var mask = [ 0, 0, 1, 0 ];

var v = mskmax( x, mask );
// returns 2.0
```

The function has the following parameters:

-   **x**: input array.
-   **mask**: mask array. If a `mask` array element is `0`, the corresponding element in `x` is considered valid and **included** in computation. If a `mask` array element is `1`, the corresponding element in `x` is considered invalid/missing and **excluded** from computation.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If provided an empty array, the function returns `NaN`.
-   The function supports array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/base/accessor`][@stdlib/array/base/accessor]).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var bernoulli = require( '@stdlib/random/array/bernoulli' );
var mskmax = require( '@stdlib/stats/array/mskmax' );

var x = uniform( 10, -50.0, 50.0, {
    'dtype': 'float64'
});
console.log( x );

var mask = bernoulli( x.length, 0.2, {
    'dtype': 'uint8'
});
console.log( mask );

var v = mskmax( x, mask );
console.log( v );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor

</section>

<!-- /.links -->
