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

# ztest

> Compute a one-sample Z-test for a one-dimensional ndarray.

<section class="intro">

A Z-test commonly refers to a one-sample location test which compares the mean of a set of measurements `X` to a given constant when the standard deviation is known. A Z-test supports testing three different null hypotheses `H0`:

-   `H0: μ ≥ μ0` versus the alternative hypothesis `H1: μ < μ0`.
-   `H0: μ ≤ μ0` versus the alternative hypothesis `H1: μ > μ0`.
-   `H0: μ = μ0` versus the alternative hypothesis `H1: μ ≠ μ0`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var ztest = require( '@stdlib/stats/base/ndarray/ztest' );
```

#### ztest( arrays )

Computes a one-sample Z-test for a one-dimensional ndarray.

```javascript
var Float64Results = require( '@stdlib/stats/base/ztest/one-sample/results/float64' );
var resolveEnum = require( '@stdlib/stats/base/ztest/alternative-resolve-enum' );
var structFactory = require( '@stdlib/array/struct-factory' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray = require( '@stdlib/ndarray/ctor' );

var opts = {
    'dtype': 'generic'
};
var xbuf = [ 1.0, 3.0, 4.0, 2.0 ];
var x = new ndarray( opts.dtype, xbuf, [ 4 ], [ 1 ], 0, 'row-major' );

var alt = scalar2ndarray( resolveEnum( 'two-sided' ), {
    'dtype': 'int8'
});
var alpha = scalar2ndarray( 0.05, opts );
var mu = scalar2ndarray( 0.0, opts );
var sigma = scalar2ndarray( 1.0, opts );

var ResultsArray = structFactory( Float64Results );
var out = new ndarray( Float64Results, new ResultsArray( 1 ), [], [ 0 ], 0, 'row-major' );

var v = ztest( [ x, out, alt, alpha, mu, sigma ] );

var bool = ( v === out );
// returns true
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays in order:

    1.  a one-dimensional input ndarray.
    2.  a zero-dimensional output ndarray containing a [results object][@stdlib/stats/base/ztest/one-sample/results/float64].
    3.  a zero-dimensional ndarray specifying the alternative hypothesis.
    4.  a zero-dimensional ndarray specifying the significance level.
    5.  a zero-dimensional ndarray specifying the mean under the null hypothesis.
    6.  a zero-dimensional ndarray specifying the known standard deviation.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   As a general rule of thumb, a Z-test is most reliable for sample sizes greater than `50`. For smaller sample sizes or when the standard deviation is unknown, prefer a t-test.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Float64Results = require( '@stdlib/stats/base/ztest/one-sample/results/float64' );
var resolveEnum = require( '@stdlib/stats/base/ztest/alternative-resolve-enum' );
var structFactory = require( '@stdlib/array/struct-factory' );
var normal = require( '@stdlib/random/array/normal' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ztest = require( '@stdlib/stats/base/ndarray/ztest' );

var opts = {
    'dtype': 'generic'
};

// Create a one-dimensional ndarray containing pseudorandom numbers drawn from a normal distribution:
var xbuf = normal( 100, 0.0, 1.0, opts );
var x = new ndarray( opts.dtype, xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

// Specify the alternative hypothesis:
var alt = scalar2ndarray( resolveEnum( 'two-sided' ), {
    'dtype': 'int8'
});

// Specify the significance level:
var alpha = scalar2ndarray( 0.05, opts );

// Specify the mean under the null hypothesis:
var mu = scalar2ndarray( 0.0, opts );

// Specify the known standard deviation:
var sigma = scalar2ndarray( 1.0, opts );

// Create a zero-dimensional results ndarray:
var ResultsArray = structFactory( Float64Results );
var out = new ndarray( Float64Results, new ResultsArray( 1 ), [], [ 0 ], 0, 'row-major' );

// Perform a Z-test:
var v = ztest( [ x, out, alt, alpha, mu, sigma ] );
console.log( v.get().toString() );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/stats/base/ztest/one-sample/results/float64]: https://github.com/stdlib-js/stats/tree/main/base/ztest/one-sample/results/float64

</section>

<!-- /.links -->
