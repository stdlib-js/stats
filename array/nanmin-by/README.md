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

# nanminBy

> Calculate the minimum value of an array via a callback function, ignoring `NaN` values.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var nanminBy = require( '@stdlib/stats/array/nanmin-by' );
```

#### nanminBy( x, clbk\[, thisArg] )

Computes the minimum value of an array via a callback function, ignoring `NaN` values.

```javascript
function accessor( v ) {
    return v * 2.0;
}

var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, NaN, 0.0, -1.0, -3.0, NaN ];

var v = nanminBy( x, accessor );
// returns -10.0
```

The function has the following parameters:

-   **x**: input array.
-   **clbk**: callback function.
-   **thisArg**: execution context (_optional_).

The invoked callback is provided three arguments:

-   **value**: current array element.
-   **index**: current array index.
-   **array**: input array.

To set the callback execution context, provide a `thisArg`.

```javascript
function accessor( v ) {
    this.count += 1;
    return v * 2.0;
}

var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, NaN, 0.0, -1.0, -3.0, NaN ];

var context = {
    'count': 0
};

var v = nanminBy( x, accessor, context );
// returns -10.0

var cnt = context.count;
// returns 10
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If provided an empty array, the function returns `NaN`.
-   A provided callback function should return a numeric value.
-   If a provided callback function returns `NaN`, the value is **ignored**.
-   If a provided callback function does not return any value (or equivalently, explicitly returns `undefined`), the value is **ignored**.
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
var nanminBy = require( '@stdlib/stats/array/nanmin-by' );

function rand() {
    if ( bernoulli( 0.8 ) < 1 ) {
        return NaN;
    }
    return uniform( -50.0, 50.0 );
}

function accessor( v ) {
    return v * 2.0;
}

var x = filledarrayBy( 10, 'float64', rand );
console.log( x );

var v = nanminBy( x, accessor );
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
