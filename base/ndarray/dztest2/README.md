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

# dztest2

> Compute a two-sample Z-test for two one-dimensional double-precision floating-point ndarrays.

<section class="intro">

A Z-test commonly refers to a two-sample location test which compares the means of two independent sets of measurements `X` and `Y` when the population standard deviations are known. A Z-test supports testing three different null hypotheses `H0`:

-   `H0: μX - μY ≥ Δ` versus the alternative hypothesis `H1: μX - μY < Δ`.
-   `H0: μX - μY ≤ Δ` versus the alternative hypothesis `H1: μX - μY > Δ`.
-   `H0: μX - μY = Δ` versus the alternative hypothesis `H1: μX - μY ≠ Δ`.

Here, `μX` and `μY` are the true population means of samples `X` and `Y`, respectively, and `Δ` is the hypothesized difference in means (typically `0` by default).

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dztest2 = require( '@stdlib/stats/base/ndarray/dztest2' );
```

#### dztest2( arrays )

Computes a two-sample Z-test for two one-dimensional double-precision floating-point ndarrays.

```javascript
var Float64Results = require( '@stdlib/stats/base/ztest/two-sample/results/float64' );
var resolveEnum = require( '@stdlib/stats/base/ztest/alternative-resolve-enum' );
var structFactory = require( '@stdlib/array/struct-factory' );
var Float64Array = require( '@stdlib/array/float64' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray = require( '@stdlib/ndarray/ctor' );

var opts = {
    'dtype': 'float64'
};

var xbuf = new Float64Array( [ 4.0, 4.0, 6.0, 6.0, 5.0 ] );
var x = new ndarray( opts.dtype, xbuf, [ 5 ], [ 1 ], 0, 'row-major' );

var ybuf = new Float64Array( [ 3.0, 3.0, 5.0, 7.0, 7.0 ] );
var y = new ndarray( opts.dtype, ybuf, [ 5 ], [ 1 ], 0, 'row-major' );

var alt = scalar2ndarray( resolveEnum( 'two-sided' ), {
    'dtype': 'int8'
});
var alpha = scalar2ndarray( 0.05, opts );
var diff = scalar2ndarray( 0.0, opts );
var sigmax = scalar2ndarray( 1.0, opts );
var sigmay = scalar2ndarray( 2.0, opts );

var ResultsArray = structFactory( Float64Results );
var out = new ndarray( Float64Results, new ResultsArray( 1 ), [], [ 0 ], 0, 'row-major' );

var v = dztest2( [ x, y, out, alt, alpha, diff, sigmax, sigmay ] );

var bool = ( v === out );
// returns true
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays in order:

    1.  first one-dimensional input ndarray.
    2.  second one-dimensional input ndarray.
    3.  a zero-dimensional output ndarray containing a [results object][@stdlib/stats/base/ztest/two-sample/results/float64].
    4.  a zero-dimensional ndarray specifying the alternative hypothesis.
    5.  a zero-dimensional ndarray specifying the significance level.
    6.  a zero-dimensional ndarray specifying the difference in means under the null hypothesis.
    7.  a zero-dimensional ndarray specifying the known standard deviation of the first one-dimensional input ndarray.
    8.  a zero-dimensional ndarray specifying the known standard deviation of the second one-dimensional input ndarray.

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
var Float64Results = require( '@stdlib/stats/base/ztest/two-sample/results/float64' );
var resolveEnum = require( '@stdlib/stats/base/ztest/alternative-resolve-enum' );
var structFactory = require( '@stdlib/array/struct-factory' );
var normal = require( '@stdlib/random/array/normal' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var dztest2 = require( '@stdlib/stats/base/ndarray/dztest2' );

var opts = {
    'dtype': 'float64'
};

// Create one-dimensional ndarrays containing pseudorandom numbers drawn from a normal distribution:
var xbuf = normal( 100, 0.0, 1.0, opts );
var x = new ndarray( opts.dtype, xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

var ybuf = normal( 100, 0.0, 1.0, opts );
var y = new ndarray( opts.dtype, ybuf, [ ybuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( y ) );

// Specify the alternative hypothesis:
var alt = scalar2ndarray( resolveEnum( 'two-sided' ), {
    'dtype': 'int8'
});

// Specify the significance level:
var alpha = scalar2ndarray( 0.05, opts );

// Specify the difference in means under the null hypothesis:
var diff = scalar2ndarray( 0.0, opts );

// Specify the known standard deviations:
var sigmax = scalar2ndarray( 1.0, opts );
var sigmay = scalar2ndarray( 1.0, opts );

// Create a zero-dimensional results ndarray:
var ResultsArray = structFactory( Float64Results );
var out = new ndarray( Float64Results, new ResultsArray( 1 ), [], [ 0 ], 0, 'row-major' );

// Perform a Z-test:
var v = dztest2( [ x, y, out, alt, alpha, diff, sigmax, sigmay ] );
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

[@stdlib/stats/base/ztest/two-sample/results/float64]: https://github.com/stdlib-js/stats/tree/main/base/ztest/two-sample/results/float64

</section>

<!-- /.links -->
