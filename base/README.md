<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# Base Statistics

> Base (i.e., lower-level) statistical functions.

<section class="usage">

## Usage

```javascript
var stats = require( '@stdlib/stats/base' );
```

#### stats

Namespace containing "base" (i.e., lower-level) statistical functions.

```javascript
var ns = stats;
// returns {...}
```

The namespace contains the following sub-namespaces:

<!-- <toc pattern="dists"> -->

<div class="namespace-toc">

-   <span class="signature">[`dists`][@stdlib/stats/base/dists]</span><span class="delimiter">: </span><span class="description">base (i.e., lower-level) probability distribution modules.</span>

</div>

<!-- </toc> -->

The namespace contains the following statistical functions:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cumax( N, x, strideX, y, strideY )`][@stdlib/stats/base/cumax]</span><span class="delimiter">: </span><span class="description">calculate the cumulative maximum of a strided array.</span>
-   <span class="signature">[`cumaxabs( N, x, strideX, y, strideY )`][@stdlib/stats/base/cumaxabs]</span><span class="delimiter">: </span><span class="description">calculate the cumulative maximum absolute value of a strided array.</span>
-   <span class="signature">[`cumin( N, x, strideX, y, strideY )`][@stdlib/stats/base/cumin]</span><span class="delimiter">: </span><span class="description">calculate the cumulative minimum of a strided array.</span>
-   <span class="signature">[`cuminabs( N, x, strideX, y, strideY )`][@stdlib/stats/base/cuminabs]</span><span class="delimiter">: </span><span class="description">calculate the cumulative minimum absolute value of a strided array.</span>
-   <span class="signature">[`dmeanstdev( N, correction, x, strideX, out, strideOut )`][@stdlib/stats/base/dmeanstdev]</span><span class="delimiter">: </span><span class="description">calculate the mean and standard deviation of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dmeanstdevpn( N, correction, x, strideX, out, strideOut )`][@stdlib/stats/base/dmeanstdevpn]</span><span class="delimiter">: </span><span class="description">calculate the mean and standard deviation of a double-precision floating-point strided array using a two-pass algorithm.</span>
-   <span class="signature">[`dmeanvar( N, correction, x, strideX, out, strideOut )`][@stdlib/stats/base/dmeanvar]</span><span class="delimiter">: </span><span class="description">calculate the mean and variance of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dmeanvarpn( N, correction, x, strideX, out, strideOut )`][@stdlib/stats/base/dmeanvarpn]</span><span class="delimiter">: </span><span class="description">calculate the mean and variance of a double-precision floating-point strided array using a two-pass algorithm.</span>
-   <span class="signature">[`dvarm( N, mean, correction, x, stride )`][@stdlib/stats/base/dvarm]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array provided a known mean.</span>
-   <span class="signature">[`dvarmpn( N, mean, correction, x, stride )`][@stdlib/stats/base/dvarmpn]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array provided a known mean and using Neely's correction algorithm.</span>
-   <span class="signature">[`meankbn( N, x, stride )`][@stdlib/stats/base/meankbn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`meankbn2( N, x, stride )`][@stdlib/stats/base/meankbn2]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`meanors( N, x, stride )`][@stdlib/stats/base/meanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array using ordinary recursive summation.</span>
-   <span class="signature">[`meanpn( N, x, strideX )`][@stdlib/stats/base/meanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array using a two-pass error correction algorithm.</span>
-   <span class="signature">[`meanpw( N, x, stride )`][@stdlib/stats/base/meanpw]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array using pairwise summation.</span>
-   <span class="signature">[`meanwd( N, x, strideX )`][@stdlib/stats/base/meanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array using Welford's algorithm.</span>
-   <span class="signature">[`nanmaxBy( N, x, strideX, clbk[, thisArg] )`][@stdlib/stats/base/nanmax-by]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array via a callback function, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmax( N, x, strideX )`][@stdlib/stats/base/nanmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmaxabs( N, x, strideX )`][@stdlib/stats/strided/nanmaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmean( N, x, stride )`][@stdlib/stats/base/nanmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmeanors( N, x, stride )`][@stdlib/stats/base/nanmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array, ignoring `NaN` values and using ordinary recursive summation.</span>
-   <span class="signature">[`nanmeanpn( N, x, strideX )`][@stdlib/stats/base/nanmeanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array, ignoring `NaN` values and using a two-pass error correction algorithm.</span>
-   <span class="signature">[`nanmeanwd( N, x, stride )`][@stdlib/stats/base/nanmeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array, ignoring `NaN` values and using Welford's algorithm.</span>
-   <span class="signature">[`nanminBy( N, x, strideX, clbk[, thisArg] )`][@stdlib/stats/base/nanmin-by]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a strided array via a callback function, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmin( N, x, strideX )`][@stdlib/stats/base/nanmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`nanminabs( N, x, strideX )`][@stdlib/stats/base/nanminabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of a strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmskmax( N, x, strideX, mask, strideMask )`][@stdlib/stats/base/nanmskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmskmin( N, x, strideX, mask, strideMask )`][@stdlib/stats/base/nanmskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a strided array according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmskrange( N, x, strideX, mask, strideMask )`][@stdlib/stats/base/nanmskrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a strided array according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`nanrangeBy( N, x, stride, clbk[, thisArg] )`][@stdlib/stats/base/nanrange-by]</span><span class="delimiter">: </span><span class="description">calculate the range of a strided array via a callback function, ignoring `NaN` values.</span>
-   <span class="signature">[`nanrange( N, x, strideX )`][@stdlib/stats/base/nanrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`nanstdev( N, correction, x, stride )`][@stdlib/stats/base/nanstdev]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array ignoring `NaN` values.</span>
-   <span class="signature">[`nanstdevch( N, correction, x, stride )`][@stdlib/stats/base/nanstdevch]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array ignoring `NaN` values and using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`nanstdevpn( N, correction, x, stride )`][@stdlib/stats/base/nanstdevpn]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array ignoring `NaN` values and using a two-pass algorithm.</span>
-   <span class="signature">[`nanstdevtk( N, correction, x, stride )`][@stdlib/stats/base/nanstdevtk]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array ignoring `NaN` values and using a one-pass textbook algorithm.</span>
-   <span class="signature">[`nanstdevwd( N, correction, x, stride )`][@stdlib/stats/base/nanstdevwd]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array ignoring `NaN` values and using Welford's algorithm.</span>
-   <span class="signature">[`nanstdevyc( N, correction, x, stride )`][@stdlib/stats/base/nanstdevyc]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`nanvariance( N, correction, x, stride )`][@stdlib/stats/base/nanvariance]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array ignoring `NaN` values.</span>
-   <span class="signature">[`nanvariancech( N, correction, x, stride )`][@stdlib/stats/base/nanvariancech]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array ignoring `NaN` values and using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`nanvariancepn( N, correction, x, stride )`][@stdlib/stats/base/nanvariancepn]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array ignoring `NaN` values and using a two-pass algorithm.</span>
-   <span class="signature">[`nanvariancetk( N, correction, x, strideX )`][@stdlib/stats/base/nanvariancetk]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array ignoring `NaN` values and using a one-pass textbook algorithm.</span>
-   <span class="signature">[`nanvariancewd( N, correction, x, strideX )`][@stdlib/stats/base/nanvariancewd]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array ignoring `NaN` values and using Welford's algorithm.</span>
-   <span class="signature">[`nanvarianceyc( N, correction, x, strideX )`][@stdlib/stats/base/nanvarianceyc]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`ndarray`][@stdlib/stats/base/ndarray]</span><span class="delimiter">: </span><span class="description">base ndarray statistical functions.</span>
-   <span class="signature">[`rangeBy( N, x, stride, clbk[, thisArg] )`][@stdlib/stats/base/range-by]</span><span class="delimiter">: </span><span class="description">calculate the range of a strided array via a callback function.</span>
-   <span class="signature">[`range( N, x, strideX )`][@stdlib/stats/base/range]</span><span class="delimiter">: </span><span class="description">calculate the range of a strided array.</span>
-   <span class="signature">[`sdsnanmean( N, x, stride )`][@stdlib/stats/base/sdsnanmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using extended accumulation.</span>
-   <span class="signature">[`sdsnanmeanors( N, x, stride )`][@stdlib/stats/base/sdsnanmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using ordinary recursive summation with extended accumulation.</span>
-   <span class="signature">[`smeankbn( N, x, stride )`][@stdlib/stats/base/smeankbn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`smeankbn2( N, x, stride )`][@stdlib/stats/base/smeankbn2]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`smeanlipw( N, x, stride )`][@stdlib/stats/base/smeanlipw]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using a one-pass trial mean algorithm with pairwise summation.</span>
-   <span class="signature">[`smeanors( N, x, stride )`][@stdlib/stats/base/smeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using ordinary recursive summation.</span>
-   <span class="signature">[`snanmean( N, x, stride )`][@stdlib/stats/base/snanmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`snanstdev( N, correction, x, stride )`][@stdlib/stats/base/snanstdev]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array ignoring `NaN` values.</span>
-   <span class="signature">[`snanstdevch( N, correction, x, stride )`][@stdlib/stats/base/snanstdevch]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array ignoring `NaN` values and using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`snanstdevpn( N, correction, x, stride )`][@stdlib/stats/base/snanstdevpn]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array ignoring `NaN` values and using a two-pass algorithm.</span>
-   <span class="signature">[`snanstdevtk( N, correction, x, stride )`][@stdlib/stats/base/snanstdevtk]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array ignoring `NaN` values and using a one-pass textbook algorithm.</span>
-   <span class="signature">[`snanstdevwd( N, correction, x, stride )`][@stdlib/stats/base/snanstdevwd]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array ignoring `NaN` values and using Welford's algorithm.</span>
-   <span class="signature">[`snanstdevyc( N, correction, x, stride )`][@stdlib/stats/base/snanstdevyc]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`snanvariance( N, correction, x, stride )`][@stdlib/stats/base/snanvariance]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array ignoring `NaN` values.</span>
-   <span class="signature">[`snanvariancech( N, correction, x, stride )`][@stdlib/stats/base/snanvariancech]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array ignoring `NaN` values and using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`snanvariancepn( N, correction, x, stride )`][@stdlib/stats/base/snanvariancepn]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array ignoring `NaN` values and using a two-pass algorithm.</span>
-   <span class="signature">[`snanvariancetk( N, correction, x, stride )`][@stdlib/stats/base/snanvariancetk]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array ignoring `NaN` values and using a one-pass textbook algorithm.</span>
-   <span class="signature">[`snanvariancewd( N, correction, x, stride )`][@stdlib/stats/base/snanvariancewd]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array ignoring `NaN` values and using Welford's algorithm.</span>
-   <span class="signature">[`snanvarianceyc( N, correction, x, stride )`][@stdlib/stats/base/snanvarianceyc]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`sstdevwd( N, correction, x, stride )`][@stdlib/stats/base/sstdevwd]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array using Welford's algorithm.</span>
-   <span class="signature">[`stdev( N, correction, x, stride )`][@stdlib/stats/base/stdev]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array.</span>
-   <span class="signature">[`stdevch( N, correction, x, stride )`][@stdlib/stats/base/stdevch]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`stdevpn( N, correction, x, stride )`][@stdlib/stats/base/stdevpn]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array using a two-pass algorithm.</span>
-   <span class="signature">[`stdevtk( N, correction, x, stride )`][@stdlib/stats/base/stdevtk]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array using a one-pass textbook algorithm.</span>
-   <span class="signature">[`stdevwd( N, correction, x, stride )`][@stdlib/stats/base/stdevwd]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array using Welford's algorithm.</span>
-   <span class="signature">[`stdevyc( N, correction, x, stride )`][@stdlib/stats/base/stdevyc]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`svariance( N, correction, x, stride )`][@stdlib/stats/base/svariance]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array.</span>
-   <span class="signature">[`svariancewd( N, correction, x, strideX )`][@stdlib/stats/base/svariancewd]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array using Welford's algorithm.</span>
-   <span class="signature">[`variance( N, correction, x, stride )`][@stdlib/stats/base/variance]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array.</span>
-   <span class="signature">[`variancech( N, correction, x, stride )`][@stdlib/stats/base/variancech]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`variancepn( N, correction, x, stride )`][@stdlib/stats/base/variancepn]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array using a two-pass algorithm.</span>
-   <span class="signature">[`variancetk( N, correction, x, stride )`][@stdlib/stats/base/variancetk]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array using a one-pass textbook algorithm.</span>
-   <span class="signature">[`variancewd( N, correction, x, stride )`][@stdlib/stats/base/variancewd]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array using Welford's algorithm.</span>
-   <span class="signature">[`varianceyc( N, correction, x, strideX )`][@stdlib/stats/base/varianceyc]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array using a one-pass algorithm proposed by Youngs and Cramer.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<!-- Package notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var ns = require( '@stdlib/stats/base' );

console.log( objectKeys( ns ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <toc-links> -->

[@stdlib/stats/base/cumax]: https://github.com/stdlib-js/stats/tree/main/base/cumax

[@stdlib/stats/base/cumaxabs]: https://github.com/stdlib-js/stats/tree/main/base/cumaxabs

[@stdlib/stats/base/cumin]: https://github.com/stdlib-js/stats/tree/main/base/cumin

[@stdlib/stats/base/cuminabs]: https://github.com/stdlib-js/stats/tree/main/base/cuminabs

[@stdlib/stats/base/dmeanstdev]: https://github.com/stdlib-js/stats/tree/main/base/dmeanstdev

[@stdlib/stats/base/dmeanstdevpn]: https://github.com/stdlib-js/stats/tree/main/base/dmeanstdevpn

[@stdlib/stats/base/dmeanvar]: https://github.com/stdlib-js/stats/tree/main/base/dmeanvar

[@stdlib/stats/base/dmeanvarpn]: https://github.com/stdlib-js/stats/tree/main/base/dmeanvarpn

[@stdlib/stats/base/dvarm]: https://github.com/stdlib-js/stats/tree/main/base/dvarm

[@stdlib/stats/base/dvarmpn]: https://github.com/stdlib-js/stats/tree/main/base/dvarmpn

[@stdlib/stats/base/meankbn]: https://github.com/stdlib-js/stats/tree/main/base/meankbn

[@stdlib/stats/base/meankbn2]: https://github.com/stdlib-js/stats/tree/main/base/meankbn2

[@stdlib/stats/base/meanors]: https://github.com/stdlib-js/stats/tree/main/base/meanors

[@stdlib/stats/base/meanpn]: https://github.com/stdlib-js/stats/tree/main/base/meanpn

[@stdlib/stats/base/meanpw]: https://github.com/stdlib-js/stats/tree/main/base/meanpw

[@stdlib/stats/base/meanwd]: https://github.com/stdlib-js/stats/tree/main/base/meanwd

[@stdlib/stats/base/nanmax-by]: https://github.com/stdlib-js/stats/tree/main/base/nanmax-by

[@stdlib/stats/base/nanmax]: https://github.com/stdlib-js/stats/tree/main/base/nanmax

[@stdlib/stats/strided/nanmaxabs]: https://github.com/stdlib-js/stats/tree/main/strided/nanmaxabs

[@stdlib/stats/base/nanmean]: https://github.com/stdlib-js/stats/tree/main/base/nanmean

[@stdlib/stats/base/nanmeanors]: https://github.com/stdlib-js/stats/tree/main/base/nanmeanors

[@stdlib/stats/base/nanmeanpn]: https://github.com/stdlib-js/stats/tree/main/base/nanmeanpn

[@stdlib/stats/base/nanmeanwd]: https://github.com/stdlib-js/stats/tree/main/base/nanmeanwd

[@stdlib/stats/base/nanmin-by]: https://github.com/stdlib-js/stats/tree/main/base/nanmin-by

[@stdlib/stats/base/nanmin]: https://github.com/stdlib-js/stats/tree/main/base/nanmin

[@stdlib/stats/base/nanminabs]: https://github.com/stdlib-js/stats/tree/main/base/nanminabs

[@stdlib/stats/base/nanmskmax]: https://github.com/stdlib-js/stats/tree/main/base/nanmskmax

[@stdlib/stats/base/nanmskmin]: https://github.com/stdlib-js/stats/tree/main/base/nanmskmin

[@stdlib/stats/base/nanmskrange]: https://github.com/stdlib-js/stats/tree/main/base/nanmskrange

[@stdlib/stats/base/nanrange-by]: https://github.com/stdlib-js/stats/tree/main/base/nanrange-by

[@stdlib/stats/base/nanrange]: https://github.com/stdlib-js/stats/tree/main/base/nanrange

[@stdlib/stats/base/nanstdev]: https://github.com/stdlib-js/stats/tree/main/base/nanstdev

[@stdlib/stats/base/nanstdevch]: https://github.com/stdlib-js/stats/tree/main/base/nanstdevch

[@stdlib/stats/base/nanstdevpn]: https://github.com/stdlib-js/stats/tree/main/base/nanstdevpn

[@stdlib/stats/base/nanstdevtk]: https://github.com/stdlib-js/stats/tree/main/base/nanstdevtk

[@stdlib/stats/base/nanstdevwd]: https://github.com/stdlib-js/stats/tree/main/base/nanstdevwd

[@stdlib/stats/base/nanstdevyc]: https://github.com/stdlib-js/stats/tree/main/base/nanstdevyc

[@stdlib/stats/base/nanvariance]: https://github.com/stdlib-js/stats/tree/main/base/nanvariance

[@stdlib/stats/base/nanvariancech]: https://github.com/stdlib-js/stats/tree/main/base/nanvariancech

[@stdlib/stats/base/nanvariancepn]: https://github.com/stdlib-js/stats/tree/main/base/nanvariancepn

[@stdlib/stats/base/nanvariancetk]: https://github.com/stdlib-js/stats/tree/main/base/nanvariancetk

[@stdlib/stats/base/nanvariancewd]: https://github.com/stdlib-js/stats/tree/main/base/nanvariancewd

[@stdlib/stats/base/nanvarianceyc]: https://github.com/stdlib-js/stats/tree/main/base/nanvarianceyc

[@stdlib/stats/base/ndarray]: https://github.com/stdlib-js/stats/tree/main/base/ndarray

[@stdlib/stats/base/range-by]: https://github.com/stdlib-js/stats/tree/main/base/range-by

[@stdlib/stats/base/range]: https://github.com/stdlib-js/stats/tree/main/base/range

[@stdlib/stats/base/sdsnanmean]: https://github.com/stdlib-js/stats/tree/main/base/sdsnanmean

[@stdlib/stats/base/sdsnanmeanors]: https://github.com/stdlib-js/stats/tree/main/base/sdsnanmeanors

[@stdlib/stats/base/smeankbn]: https://github.com/stdlib-js/stats/tree/main/base/smeankbn

[@stdlib/stats/base/smeankbn2]: https://github.com/stdlib-js/stats/tree/main/base/smeankbn2

[@stdlib/stats/base/smeanlipw]: https://github.com/stdlib-js/stats/tree/main/base/smeanlipw

[@stdlib/stats/base/smeanors]: https://github.com/stdlib-js/stats/tree/main/base/smeanors

[@stdlib/stats/base/snanmean]: https://github.com/stdlib-js/stats/tree/main/base/snanmean

[@stdlib/stats/base/snanstdev]: https://github.com/stdlib-js/stats/tree/main/base/snanstdev

[@stdlib/stats/base/snanstdevch]: https://github.com/stdlib-js/stats/tree/main/base/snanstdevch

[@stdlib/stats/base/snanstdevpn]: https://github.com/stdlib-js/stats/tree/main/base/snanstdevpn

[@stdlib/stats/base/snanstdevtk]: https://github.com/stdlib-js/stats/tree/main/base/snanstdevtk

[@stdlib/stats/base/snanstdevwd]: https://github.com/stdlib-js/stats/tree/main/base/snanstdevwd

[@stdlib/stats/base/snanstdevyc]: https://github.com/stdlib-js/stats/tree/main/base/snanstdevyc

[@stdlib/stats/base/snanvariance]: https://github.com/stdlib-js/stats/tree/main/base/snanvariance

[@stdlib/stats/base/snanvariancech]: https://github.com/stdlib-js/stats/tree/main/base/snanvariancech

[@stdlib/stats/base/snanvariancepn]: https://github.com/stdlib-js/stats/tree/main/base/snanvariancepn

[@stdlib/stats/base/snanvariancetk]: https://github.com/stdlib-js/stats/tree/main/base/snanvariancetk

[@stdlib/stats/base/snanvariancewd]: https://github.com/stdlib-js/stats/tree/main/base/snanvariancewd

[@stdlib/stats/base/snanvarianceyc]: https://github.com/stdlib-js/stats/tree/main/base/snanvarianceyc

[@stdlib/stats/base/sstdevwd]: https://github.com/stdlib-js/stats/tree/main/base/sstdevwd

[@stdlib/stats/base/stdev]: https://github.com/stdlib-js/stats/tree/main/base/stdev

[@stdlib/stats/base/stdevch]: https://github.com/stdlib-js/stats/tree/main/base/stdevch

[@stdlib/stats/base/stdevpn]: https://github.com/stdlib-js/stats/tree/main/base/stdevpn

[@stdlib/stats/base/stdevtk]: https://github.com/stdlib-js/stats/tree/main/base/stdevtk

[@stdlib/stats/base/stdevwd]: https://github.com/stdlib-js/stats/tree/main/base/stdevwd

[@stdlib/stats/base/stdevyc]: https://github.com/stdlib-js/stats/tree/main/base/stdevyc

[@stdlib/stats/base/svariance]: https://github.com/stdlib-js/stats/tree/main/base/svariance

[@stdlib/stats/base/svariancewd]: https://github.com/stdlib-js/stats/tree/main/base/svariancewd

[@stdlib/stats/base/variance]: https://github.com/stdlib-js/stats/tree/main/base/variance

[@stdlib/stats/base/variancech]: https://github.com/stdlib-js/stats/tree/main/base/variancech

[@stdlib/stats/base/variancepn]: https://github.com/stdlib-js/stats/tree/main/base/variancepn

[@stdlib/stats/base/variancetk]: https://github.com/stdlib-js/stats/tree/main/base/variancetk

[@stdlib/stats/base/variancewd]: https://github.com/stdlib-js/stats/tree/main/base/variancewd

[@stdlib/stats/base/varianceyc]: https://github.com/stdlib-js/stats/tree/main/base/varianceyc

[@stdlib/stats/base/dists]: https://github.com/stdlib-js/stats/tree/main/base/dists

<!-- </toc-links> -->

</section>

<!-- /.links -->
