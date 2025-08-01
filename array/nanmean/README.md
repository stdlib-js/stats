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

# nanmean

> Calculate the [arithmetic mean][arithmetic-mean] of an array, ignoring `NaN` values.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var nanmean = require( '@stdlib/stats/array/nanmean' );
```

#### nanmean( x )

Computes the [arithmetic mean][arithmetic-mean] of an array, ignoring `NaN` values.

```javascript
var x = [ 1.0, -2.0, NaN, 2.0 ];

var v = nanmean( x );
// returns ~0.3333
```

The function has the following parameters:

-   **x**: input array.

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
var uniform = require( '@stdlib/random/base/uniform' );
var bernoulli = require( '@stdlib/random/base/bernoulli' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var nanmean = require( '@stdlib/stats/array/nanmean' );

function rand() {
    if ( bernoulli( 0.8 ) < 1 ) {
        return NaN;
    }
    return uniform( -50.0, 50.0 );
}

var x = filledarrayBy( 10, 'float64', rand );
console.log( x );

var v = nanmean( x );
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

[arithmetic-mean]: https://en.wikipedia.org/wiki/Arithmetic_mean

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor

</section>

<!-- /.links -->
