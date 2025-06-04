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

# Statistics

> Statistical operations for strided arrays.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/stats/strided' );
```

#### ns

Namespace containing APIs for performing statistical operations on strided arrays.

```javascript
var o = ns;
// returns {...}
```

The namespace exports the following:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`dcumax( N, x, strideX, y, strideY )`][@stdlib/stats/strided/dcumax]</span><span class="delimiter">: </span><span class="description">calculate the cumulative maximum of double-precision floating-point strided array elements.</span>
-   <span class="signature">[`dcumaxabs( N, x, strideX, y, strideY )`][@stdlib/stats/strided/dcumaxabs]</span><span class="delimiter">: </span><span class="description">calculate the cumulative maximum absolute value of double-precision floating-point strided array elements.</span>
-   <span class="signature">[`dcumin( N, x, strideX, y, strideY )`][@stdlib/stats/strided/dcumin]</span><span class="delimiter">: </span><span class="description">calculate the cumulative minimum of double-precision floating-point strided array elements.</span>
-   <span class="signature">[`dcuminabs( N, x, strideX, y, strideY )`][@stdlib/stats/strided/dcuminabs]</span><span class="delimiter">: </span><span class="description">calculate the cumulative minimum absolute value of double-precision floating-point strided array elements.</span>
-   <span class="signature">[`dmax( N, x, strideX )`][@stdlib/stats/strided/dmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dmaxabs( N, x, strideX )`][@stdlib/stats/strided/dmaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dmaxabssorted( N, x, strideX )`][@stdlib/stats/strided/dmaxabssorted]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a sorted double-precision floating-point strided array.</span>
-   <span class="signature">[`dmaxsorted( N, x, strideX )`][@stdlib/stats/strided/dmaxsorted]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a sorted double-precision floating-point strided array.</span>
-   <span class="signature">[`dmeankbn( N, x, strideX )`][@stdlib/stats/strided/dmeankbn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dmeankbn2( N, x, strideX )`][@stdlib/stats/strided/dmeankbn2]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dmeanli( N, x, strideX )`][@stdlib/stats/strided/dmeanli]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`dmeanlipw( N, x, strideX )`][@stdlib/stats/strided/dmeanlipw]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array using a one-pass trial mean algorithm with pairwise summation.</span>
-   <span class="signature">[`dmeanors( N, x, strideX )`][@stdlib/stats/strided/dmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array using ordinary recursive summation.</span>
-   <span class="signature">[`dmeanpw( N, x, strideX )`][@stdlib/stats/strided/dmeanpw]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array using pairwise summation.</span>
-   <span class="signature">[`dmeanwd( N, x, strideX )`][@stdlib/stats/strided/dmeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array using Welford's algorithm.</span>
-   <span class="signature">[`dmediansorted( N, x, strideX )`][@stdlib/stats/strided/dmediansorted]</span><span class="delimiter">: </span><span class="description">calculate the median value of a sorted double-precision floating-point strided array.</span>
-   <span class="signature">[`dmidrange( N, x, strideX )`][@stdlib/stats/strided/dmidrange]</span><span class="delimiter">: </span><span class="description">calculate the mid-range of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dmin( N, x, strideX )`][@stdlib/stats/strided/dmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dminabs( N, x, strideX )`][@stdlib/stats/strided/dminabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dminsorted( N, x, strideX )`][@stdlib/stats/strided/dminsorted]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a sorted double-precision floating-point strided array.</span>
-   <span class="signature">[`dmskmax( N, x, strideX, mask, strideMask )`][@stdlib/stats/strided/dmskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a double-precision floating-point strided array according to a mask.</span>
-   <span class="signature">[`dmskmin( N, x, strideX, mask, strideMask )`][@stdlib/stats/strided/dmskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a double-precision floating-point strided array according to a mask.</span>
-   <span class="signature">[`dmskrange( N, x, strideX, mask, strideMask )`][@stdlib/stats/strided/dmskrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a double-precision floating-point strided array according to a mask.</span>
-   <span class="signature">[`dnanmax( N, x, strideX )`][@stdlib/stats/strided/dnanmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a double-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanmaxabs( N, x, strideX )`][@stdlib/stats/strided/dnanmaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a double-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanmean( N, x, strideX )`][@stdlib/stats/strided/dnanmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanmeanors( N, x, strideX )`][@stdlib/stats/strided/dnanmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array, ignoring `NaN` values and using ordinary recursive summation.</span>
-   <span class="signature">[`dnanmeanpn( N, x, strideX )`][@stdlib/stats/strided/dnanmeanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array, ignoring `NaN` values and using a two-pass error correction algorithm.</span>
-   <span class="signature">[`dnanmeanpw( N, x, strideX )`][@stdlib/stats/strided/dnanmeanpw]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array, ignoring `NaN` values and using pairwise summation.</span>
-   <span class="signature">[`dnanmeanwd( N, x, strideX )`][@stdlib/stats/strided/dnanmeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array, using Welford's algorithm and ignoring `NaN` values.</span>
-   <span class="signature">[`dnanmin( N, x, strideX )`][@stdlib/stats/strided/dnanmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a double-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanminabs( N, x, strideX )`][@stdlib/stats/strided/dnanminabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of a double-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanrange( N, x, strideX )`][@stdlib/stats/strided/dnanrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a double-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanstdevch( N, correction, x, strideX )`][@stdlib/stats/strided/dnanstdevch]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`dnanstdevpn( N, correction, x, strideX )`][@stdlib/stats/strided/dnanstdevpn]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array, ignoring `NaN` values and using a two-pass algorithm.</span>
-   <span class="signature">[`dnanstdevtk( N, correction, x, strideX )`][@stdlib/stats/strided/dnanstdevtk]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass textbook algorithm.</span>
-   <span class="signature">[`dnanstdevwd( N, correction, x, strideX )`][@stdlib/stats/strided/dnanstdevwd]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array ignoring `NaN` values and using Welford's algorithm.</span>
-   <span class="signature">[`dnanstdevyc( N, correction, x, strideX )`][@stdlib/stats/strided/dnanstdevyc]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`dnanvariance( N, correction, x, strideX )`][@stdlib/stats/strided/dnanvariance]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array ignoring `NaN` values.</span>
-   <span class="signature">[`dnanvariancech( N, correction, x, strideX )`][@stdlib/stats/strided/dnanvariancech]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`dnanvariancepn( N, correction, x, strideX )`][@stdlib/stats/strided/dnanvariancepn]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array ignoring `NaN` values and using a two-pass algorithm.</span>
-   <span class="signature">[`dnanvariancetk( N, correction, x, strideX )`][@stdlib/stats/strided/dnanvariancetk]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass textbook algorithm.</span>
-   <span class="signature">[`dnanvariancewd( N, correction, x, strideX )`][@stdlib/stats/strided/dnanvariancewd]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array ignoring `NaN` values and using Welford's algorithm.</span>
-   <span class="signature">[`dnanvarianceyc( N, correction, x, strideX )`][@stdlib/stats/strided/dnanvarianceyc]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`drange( N, x, strideX )`][@stdlib/stats/strided/drange]</span><span class="delimiter">: </span><span class="description">calculate the range of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dsemch( N, correction, x, strideX )`][@stdlib/stats/strided/dsemch]</span><span class="delimiter">: </span><span class="description">calculate the standard error of the mean of a double-precision floating-point strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`dsemtk( N, correction, x, strideX )`][@stdlib/stats/strided/dsemtk]</span><span class="delimiter">: </span><span class="description">calculate the standard error of the mean of a double-precision floating-point strided array using a one-pass textbook algorithm.</span>
-   <span class="signature">[`dsemwd( N, correction, x, strideX )`][@stdlib/stats/strided/dsemwd]</span><span class="delimiter">: </span><span class="description">calculate the standard error of the mean of a double-precision floating-point strided array using Welford's algorithm.</span>
-   <span class="signature">[`dsemyc( N, correction, x, strideX )`][@stdlib/stats/strided/dsemyc]</span><span class="delimiter">: </span><span class="description">calculate the standard error of the mean of a double-precision floating-point strided array using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`dsmean( N, x, strideX )`][@stdlib/stats/strided/dsmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsmeanors( N, x, strideX )`][@stdlib/stats/strided/dsmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using ordinary recursive summation with extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsmeanpn( N, x, strideX )`][@stdlib/stats/strided/dsmeanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using a two-pass error correction algorithm with extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsmeanpw( N, x, strideX )`][@stdlib/stats/strided/dsmeanpw]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using pairwise summation with extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsmeanwd( N, x, strideX )`][@stdlib/stats/strided/dsmeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using Welford's algorithm with extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsnanmean( N, x, strideX )`][@stdlib/stats/strided/dsnanmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values, using extended accumulation, and returning an extended precision result.</span>
-   <span class="signature">[`dsnanmeanors( N, x, strideX )`][@stdlib/stats/strided/dsnanmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values, using ordinary recursive summation with extended accumulation, and returning an extended precision result.</span>
-   <span class="signature">[`dsnanmeanpn( N, x, strideX )`][@stdlib/stats/strided/dsnanmeanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values, using a two-pass error correction algorithm with extended accumulation, and returning an extended precision result.</span>
-   <span class="signature">[`dsnanmeanwd( N, x, strideX )`][@stdlib/stats/strided/dsnanmeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values, using Welford's algorithm with extended accumulation, and returning an extended precision result.</span>
-   <span class="signature">[`dstdevch( N, correction, x, strideX )`][@stdlib/stats/strided/dstdevch]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`dstdevpn( N, correction, x, strideX )`][@stdlib/stats/strided/dstdevpn]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array using a two-pass algorithm.</span>
-   <span class="signature">[`dstdevtk( N, correction, x, strideX )`][@stdlib/stats/strided/dstdevtk]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array using a one-pass textbook algorithm.</span>
-   <span class="signature">[`dstdevwd( N, correction, x, strideX )`][@stdlib/stats/strided/dstdevwd]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array using Welford's algorithm.</span>
-   <span class="signature">[`dstdevyc( N, correction, x, strideX )`][@stdlib/stats/strided/dstdevyc]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`dsvariance( N, correction, x, strideX )`][@stdlib/stats/strided/dsvariance]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array using extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsvariancepn( N, correction, x, strideX )`][@stdlib/stats/strided/dsvariancepn]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array using a two-pass algorithm with extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dvariance( N, correction, x, strideX )`][@stdlib/stats/strided/dvariance]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dvariancech( N, correction, x, strideX )`][@stdlib/stats/strided/dvariancech]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`dvariancepn( N, correction, x, strideX )`][@stdlib/stats/strided/dvariancepn]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array using a two-pass algorithm.</span>
-   <span class="signature">[`dvariancetk( N, correction, x, strideX )`][@stdlib/stats/strided/dvariancetk]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array using a one-pass textbook algorithm.</span>
-   <span class="signature">[`dvariancewd( N, correction, x, strideX )`][@stdlib/stats/strided/dvariancewd]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array using Welford's algorithm.</span>
-   <span class="signature">[`dvarianceyc( N, correction, x, strideX )`][@stdlib/stats/strided/dvarianceyc]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`dvarmtk( N, mean, correction, x, strideX )`][@stdlib/stats/strided/dvarmtk]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array provided a known mean and using a one-pass textbook algorithm.</span>
-   <span class="signature">[`scumax( N, x, strideX, y, strideY )`][@stdlib/stats/strided/scumax]</span><span class="delimiter">: </span><span class="description">calculate the cumulative maximum of single-precision floating-point strided array elements.</span>
-   <span class="signature">[`scumaxabs( N, x, strideX, y, strideY )`][@stdlib/stats/strided/scumaxabs]</span><span class="delimiter">: </span><span class="description">calculate the cumulative maximum absolute value of single-precision floating-point strided array elements.</span>
-   <span class="signature">[`scumin( N, x, strideX, y, strideY )`][@stdlib/stats/strided/scumin]</span><span class="delimiter">: </span><span class="description">calculate the cumulative minimum of single-precision floating-point strided array elements.</span>
-   <span class="signature">[`scuminabs( N, x, strideX, y, strideY )`][@stdlib/stats/strided/scuminabs]</span><span class="delimiter">: </span><span class="description">calculate the cumulative minimum absolute value of single-precision floating-point strided array elements.</span>
-   <span class="signature">[`sdsmean( N, x, strideX )`][@stdlib/stats/strided/sdsmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using extended accumulation.</span>
-   <span class="signature">[`sdsmeanors( N, x, strideX )`][@stdlib/stats/strided/sdsmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using ordinary recursive summation with extended accumulation.</span>
-   <span class="signature">[`smax( N, x, strideX )`][@stdlib/stats/strided/smax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a single-precision floating-point strided array.</span>
-   <span class="signature">[`smaxabs( N, x, strideX )`][@stdlib/stats/strided/smaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a single-precision floating-point strided array.</span>
-   <span class="signature">[`smaxabssorted( N, x, strideX )`][@stdlib/stats/strided/smaxabssorted]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a sorted single-precision floating-point strided array.</span>
-   <span class="signature">[`smaxsorted( N, x, stride )`][@stdlib/stats/strided/smaxsorted]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a sorted single-precision floating-point strided array.</span>
-   <span class="signature">[`smeanli( N, x, strideX )`][@stdlib/stats/strided/smeanli]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`smeanpw( N, x, strideX )`][@stdlib/stats/strided/smeanpw]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using pairwise summation.</span>
-   <span class="signature">[`smeanwd( N, x, strideX )`][@stdlib/stats/strided/smeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using Welford's algorithm.</span>
-   <span class="signature">[`smediansorted( N, x, strideX )`][@stdlib/stats/strided/smediansorted]</span><span class="delimiter">: </span><span class="description">calculate the median value of a sorted single-precision floating-point strided array.</span>
-   <span class="signature">[`smidrange( N, x, strideX )`][@stdlib/stats/strided/smidrange]</span><span class="delimiter">: </span><span class="description">calculate the mid-range of a single-precision floating-point strided array.</span>
-   <span class="signature">[`smin( N, x, strideX )`][@stdlib/stats/strided/smin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a single-precision floating-point strided array.</span>
-   <span class="signature">[`sminabs( N, x, strideX )`][@stdlib/stats/strided/sminabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of a single-precision floating-point strided array.</span>
-   <span class="signature">[`sminsorted( N, x, strideX )`][@stdlib/stats/strided/sminsorted]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a sorted single-precision floating-point strided array.</span>
-   <span class="signature">[`smskmax( N, x, strideX, mask, strideMask )`][@stdlib/stats/strided/smskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a single-precision floating-point strided array according to a mask.</span>
-   <span class="signature">[`smskmin( N, x, strideX, mask, strideMask )`][@stdlib/stats/strided/smskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a single-precision floating-point strided array according to a mask.</span>
-   <span class="signature">[`smskrange( N, x, strideX, mask, strideMask )`][@stdlib/stats/strided/smskrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a single-precision floating-point strided array according to a mask.</span>
-   <span class="signature">[`snanmax( N, x, strideX )`][@stdlib/stats/strided/snanmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a single-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`snanmaxabs( N, x, strideX )`][@stdlib/stats/strided/snanmaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a single-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`snanmeanors( N, x, strideX )`][@stdlib/stats/strided/snanmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using ordinary recursive summation.</span>
-   <span class="signature">[`snanmeanpn( N, x, strideX )`][@stdlib/stats/strided/snanmeanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using a two-pass error correction algorithm.</span>
-   <span class="signature">[`snanmeanwd( N, x, strideX )`][@stdlib/stats/strided/snanmeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using Welford's algorithm.</span>
-   <span class="signature">[`snanmin( N, x, strideX )`][@stdlib/stats/strided/snanmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a single-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`snanminabs( N, x, strideX )`][@stdlib/stats/strided/snanminabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of a single-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`snanrange( N, x, strideX )`][@stdlib/stats/strided/snanrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a single-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`srange( N, x, strideX )`][@stdlib/stats/strided/srange]</span><span class="delimiter">: </span><span class="description">calculate the range of a single-precision floating-point strided array.</span>
-   <span class="signature">[`sstdevch( N, correction, x, strideX )`][@stdlib/stats/strided/sstdevch]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`sstdevpn( N, correction, x, strideX )`][@stdlib/stats/strided/sstdevpn]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array using a two-pass algorithm.</span>
-   <span class="signature">[`sstdevtk( N, correction, x, strideX )`][@stdlib/stats/strided/sstdevtk]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array using a one-pass textbook algorithm.</span>
-   <span class="signature">[`sstdevyc( N, correction, x, strideX )`][@stdlib/stats/strided/sstdevyc]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`svariancech( N, correction, x, strideX )`][@stdlib/stats/strided/svariancech]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`svariancepn( N, correction, x, strideX )`][@stdlib/stats/strided/svariancepn]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array using a two-pass algorithm.</span>
-   <span class="signature">[`svariancetk( N, correction, x, strideX )`][@stdlib/stats/strided/svariancetk]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array using a one-pass textbook algorithm.</span>
-   <span class="signature">[`svarianceyc( N, correction, x, strideX )`][@stdlib/stats/strided/svarianceyc]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array using a one-pass algorithm proposed by Youngs and Cramer.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var ns = require( '@stdlib/stats/strided' );

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

[@stdlib/stats/strided/dcumax]: https://github.com/stdlib-js/stats/tree/main/strided/dcumax

[@stdlib/stats/strided/dcumaxabs]: https://github.com/stdlib-js/stats/tree/main/strided/dcumaxabs

[@stdlib/stats/strided/dcumin]: https://github.com/stdlib-js/stats/tree/main/strided/dcumin

[@stdlib/stats/strided/dcuminabs]: https://github.com/stdlib-js/stats/tree/main/strided/dcuminabs

[@stdlib/stats/strided/dmax]: https://github.com/stdlib-js/stats/tree/main/strided/dmax

[@stdlib/stats/strided/dmaxabs]: https://github.com/stdlib-js/stats/tree/main/strided/dmaxabs

[@stdlib/stats/strided/dmaxabssorted]: https://github.com/stdlib-js/stats/tree/main/strided/dmaxabssorted

[@stdlib/stats/strided/dmaxsorted]: https://github.com/stdlib-js/stats/tree/main/strided/dmaxsorted

[@stdlib/stats/strided/dmeankbn]: https://github.com/stdlib-js/stats/tree/main/strided/dmeankbn

[@stdlib/stats/strided/dmeankbn2]: https://github.com/stdlib-js/stats/tree/main/strided/dmeankbn2

[@stdlib/stats/strided/dmeanli]: https://github.com/stdlib-js/stats/tree/main/strided/dmeanli

[@stdlib/stats/strided/dmeanlipw]: https://github.com/stdlib-js/stats/tree/main/strided/dmeanlipw

[@stdlib/stats/strided/dmeanors]: https://github.com/stdlib-js/stats/tree/main/strided/dmeanors

[@stdlib/stats/strided/dmeanpw]: https://github.com/stdlib-js/stats/tree/main/strided/dmeanpw

[@stdlib/stats/strided/dmeanwd]: https://github.com/stdlib-js/stats/tree/main/strided/dmeanwd

[@stdlib/stats/strided/dmediansorted]: https://github.com/stdlib-js/stats/tree/main/strided/dmediansorted

[@stdlib/stats/strided/dmidrange]: https://github.com/stdlib-js/stats/tree/main/strided/dmidrange

[@stdlib/stats/strided/dmin]: https://github.com/stdlib-js/stats/tree/main/strided/dmin

[@stdlib/stats/strided/dminabs]: https://github.com/stdlib-js/stats/tree/main/strided/dminabs

[@stdlib/stats/strided/dminsorted]: https://github.com/stdlib-js/stats/tree/main/strided/dminsorted

[@stdlib/stats/strided/dmskmax]: https://github.com/stdlib-js/stats/tree/main/strided/dmskmax

[@stdlib/stats/strided/dmskmin]: https://github.com/stdlib-js/stats/tree/main/strided/dmskmin

[@stdlib/stats/strided/dmskrange]: https://github.com/stdlib-js/stats/tree/main/strided/dmskrange

[@stdlib/stats/strided/dnanmax]: https://github.com/stdlib-js/stats/tree/main/strided/dnanmax

[@stdlib/stats/strided/dnanmaxabs]: https://github.com/stdlib-js/stats/tree/main/strided/dnanmaxabs

[@stdlib/stats/strided/dnanmean]: https://github.com/stdlib-js/stats/tree/main/strided/dnanmean

[@stdlib/stats/strided/dnanmeanors]: https://github.com/stdlib-js/stats/tree/main/strided/dnanmeanors

[@stdlib/stats/strided/dnanmeanpn]: https://github.com/stdlib-js/stats/tree/main/strided/dnanmeanpn

[@stdlib/stats/strided/dnanmeanpw]: https://github.com/stdlib-js/stats/tree/main/strided/dnanmeanpw

[@stdlib/stats/strided/dnanmeanwd]: https://github.com/stdlib-js/stats/tree/main/strided/dnanmeanwd

[@stdlib/stats/strided/dnanmin]: https://github.com/stdlib-js/stats/tree/main/strided/dnanmin

[@stdlib/stats/strided/dnanminabs]: https://github.com/stdlib-js/stats/tree/main/strided/dnanminabs

[@stdlib/stats/strided/dnanrange]: https://github.com/stdlib-js/stats/tree/main/strided/dnanrange

[@stdlib/stats/strided/dnanstdevch]: https://github.com/stdlib-js/stats/tree/main/strided/dnanstdevch

[@stdlib/stats/strided/dnanstdevpn]: https://github.com/stdlib-js/stats/tree/main/strided/dnanstdevpn

[@stdlib/stats/strided/dnanstdevtk]: https://github.com/stdlib-js/stats/tree/main/strided/dnanstdevtk

[@stdlib/stats/strided/dnanstdevwd]: https://github.com/stdlib-js/stats/tree/main/strided/dnanstdevwd

[@stdlib/stats/strided/dnanstdevyc]: https://github.com/stdlib-js/stats/tree/main/strided/dnanstdevyc

[@stdlib/stats/strided/dnanvariance]: https://github.com/stdlib-js/stats/tree/main/strided/dnanvariance

[@stdlib/stats/strided/dnanvariancech]: https://github.com/stdlib-js/stats/tree/main/strided/dnanvariancech

[@stdlib/stats/strided/dnanvariancepn]: https://github.com/stdlib-js/stats/tree/main/strided/dnanvariancepn

[@stdlib/stats/strided/dnanvariancetk]: https://github.com/stdlib-js/stats/tree/main/strided/dnanvariancetk

[@stdlib/stats/strided/dnanvariancewd]: https://github.com/stdlib-js/stats/tree/main/strided/dnanvariancewd

[@stdlib/stats/strided/dnanvarianceyc]: https://github.com/stdlib-js/stats/tree/main/strided/dnanvarianceyc

[@stdlib/stats/strided/drange]: https://github.com/stdlib-js/stats/tree/main/strided/drange

[@stdlib/stats/strided/dsemch]: https://github.com/stdlib-js/stats/tree/main/strided/dsemch

[@stdlib/stats/strided/dsemtk]: https://github.com/stdlib-js/stats/tree/main/strided/dsemtk

[@stdlib/stats/strided/dsemwd]: https://github.com/stdlib-js/stats/tree/main/strided/dsemwd

[@stdlib/stats/strided/dsemyc]: https://github.com/stdlib-js/stats/tree/main/strided/dsemyc

[@stdlib/stats/strided/dsmean]: https://github.com/stdlib-js/stats/tree/main/strided/dsmean

[@stdlib/stats/strided/dsmeanors]: https://github.com/stdlib-js/stats/tree/main/strided/dsmeanors

[@stdlib/stats/strided/dsmeanpn]: https://github.com/stdlib-js/stats/tree/main/strided/dsmeanpn

[@stdlib/stats/strided/dsmeanpw]: https://github.com/stdlib-js/stats/tree/main/strided/dsmeanpw

[@stdlib/stats/strided/dsmeanwd]: https://github.com/stdlib-js/stats/tree/main/strided/dsmeanwd

[@stdlib/stats/strided/dsnanmean]: https://github.com/stdlib-js/stats/tree/main/strided/dsnanmean

[@stdlib/stats/strided/dsnanmeanors]: https://github.com/stdlib-js/stats/tree/main/strided/dsnanmeanors

[@stdlib/stats/strided/dsnanmeanpn]: https://github.com/stdlib-js/stats/tree/main/strided/dsnanmeanpn

[@stdlib/stats/strided/dsnanmeanwd]: https://github.com/stdlib-js/stats/tree/main/strided/dsnanmeanwd

[@stdlib/stats/strided/dstdevch]: https://github.com/stdlib-js/stats/tree/main/strided/dstdevch

[@stdlib/stats/strided/dstdevpn]: https://github.com/stdlib-js/stats/tree/main/strided/dstdevpn

[@stdlib/stats/strided/dstdevtk]: https://github.com/stdlib-js/stats/tree/main/strided/dstdevtk

[@stdlib/stats/strided/dstdevwd]: https://github.com/stdlib-js/stats/tree/main/strided/dstdevwd

[@stdlib/stats/strided/dstdevyc]: https://github.com/stdlib-js/stats/tree/main/strided/dstdevyc

[@stdlib/stats/strided/dsvariance]: https://github.com/stdlib-js/stats/tree/main/strided/dsvariance

[@stdlib/stats/strided/dsvariancepn]: https://github.com/stdlib-js/stats/tree/main/strided/dsvariancepn

[@stdlib/stats/strided/dvariance]: https://github.com/stdlib-js/stats/tree/main/strided/dvariance

[@stdlib/stats/strided/dvariancech]: https://github.com/stdlib-js/stats/tree/main/strided/dvariancech

[@stdlib/stats/strided/dvariancepn]: https://github.com/stdlib-js/stats/tree/main/strided/dvariancepn

[@stdlib/stats/strided/dvariancetk]: https://github.com/stdlib-js/stats/tree/main/strided/dvariancetk

[@stdlib/stats/strided/dvariancewd]: https://github.com/stdlib-js/stats/tree/main/strided/dvariancewd

[@stdlib/stats/strided/dvarianceyc]: https://github.com/stdlib-js/stats/tree/main/strided/dvarianceyc

[@stdlib/stats/strided/dvarmtk]: https://github.com/stdlib-js/stats/tree/main/strided/dvarmtk

[@stdlib/stats/strided/scumax]: https://github.com/stdlib-js/stats/tree/main/strided/scumax

[@stdlib/stats/strided/scumaxabs]: https://github.com/stdlib-js/stats/tree/main/strided/scumaxabs

[@stdlib/stats/strided/scumin]: https://github.com/stdlib-js/stats/tree/main/strided/scumin

[@stdlib/stats/strided/scuminabs]: https://github.com/stdlib-js/stats/tree/main/strided/scuminabs

[@stdlib/stats/strided/sdsmean]: https://github.com/stdlib-js/stats/tree/main/strided/sdsmean

[@stdlib/stats/strided/sdsmeanors]: https://github.com/stdlib-js/stats/tree/main/strided/sdsmeanors

[@stdlib/stats/strided/smax]: https://github.com/stdlib-js/stats/tree/main/strided/smax

[@stdlib/stats/strided/smaxabs]: https://github.com/stdlib-js/stats/tree/main/strided/smaxabs

[@stdlib/stats/strided/smaxabssorted]: https://github.com/stdlib-js/stats/tree/main/strided/smaxabssorted

[@stdlib/stats/strided/smaxsorted]: https://github.com/stdlib-js/stats/tree/main/strided/smaxsorted

[@stdlib/stats/strided/smeanli]: https://github.com/stdlib-js/stats/tree/main/strided/smeanli

[@stdlib/stats/strided/smeanpw]: https://github.com/stdlib-js/stats/tree/main/strided/smeanpw

[@stdlib/stats/strided/smeanwd]: https://github.com/stdlib-js/stats/tree/main/strided/smeanwd

[@stdlib/stats/strided/smediansorted]: https://github.com/stdlib-js/stats/tree/main/strided/smediansorted

[@stdlib/stats/strided/smidrange]: https://github.com/stdlib-js/stats/tree/main/strided/smidrange

[@stdlib/stats/strided/smin]: https://github.com/stdlib-js/stats/tree/main/strided/smin

[@stdlib/stats/strided/sminabs]: https://github.com/stdlib-js/stats/tree/main/strided/sminabs

[@stdlib/stats/strided/sminsorted]: https://github.com/stdlib-js/stats/tree/main/strided/sminsorted

[@stdlib/stats/strided/smskmax]: https://github.com/stdlib-js/stats/tree/main/strided/smskmax

[@stdlib/stats/strided/smskmin]: https://github.com/stdlib-js/stats/tree/main/strided/smskmin

[@stdlib/stats/strided/smskrange]: https://github.com/stdlib-js/stats/tree/main/strided/smskrange

[@stdlib/stats/strided/snanmax]: https://github.com/stdlib-js/stats/tree/main/strided/snanmax

[@stdlib/stats/strided/snanmaxabs]: https://github.com/stdlib-js/stats/tree/main/strided/snanmaxabs

[@stdlib/stats/strided/snanmeanors]: https://github.com/stdlib-js/stats/tree/main/strided/snanmeanors

[@stdlib/stats/strided/snanmeanpn]: https://github.com/stdlib-js/stats/tree/main/strided/snanmeanpn

[@stdlib/stats/strided/snanmeanwd]: https://github.com/stdlib-js/stats/tree/main/strided/snanmeanwd

[@stdlib/stats/strided/snanmin]: https://github.com/stdlib-js/stats/tree/main/strided/snanmin

[@stdlib/stats/strided/snanminabs]: https://github.com/stdlib-js/stats/tree/main/strided/snanminabs

[@stdlib/stats/strided/snanrange]: https://github.com/stdlib-js/stats/tree/main/strided/snanrange

[@stdlib/stats/strided/srange]: https://github.com/stdlib-js/stats/tree/main/strided/srange

[@stdlib/stats/strided/sstdevch]: https://github.com/stdlib-js/stats/tree/main/strided/sstdevch

[@stdlib/stats/strided/sstdevpn]: https://github.com/stdlib-js/stats/tree/main/strided/sstdevpn

[@stdlib/stats/strided/sstdevtk]: https://github.com/stdlib-js/stats/tree/main/strided/sstdevtk

[@stdlib/stats/strided/sstdevyc]: https://github.com/stdlib-js/stats/tree/main/strided/sstdevyc

[@stdlib/stats/strided/svariancech]: https://github.com/stdlib-js/stats/tree/main/strided/svariancech

[@stdlib/stats/strided/svariancepn]: https://github.com/stdlib-js/stats/tree/main/strided/svariancepn

[@stdlib/stats/strided/svariancetk]: https://github.com/stdlib-js/stats/tree/main/strided/svariancetk

[@stdlib/stats/strided/svarianceyc]: https://github.com/stdlib-js/stats/tree/main/strided/svarianceyc

<!-- </toc-links> -->

</section>

<!-- /.links -->
