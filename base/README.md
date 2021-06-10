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

> Standard library base statistical functions.

<section class="usage">

## Usage

```javascript
var stats = require( '@stdlib/stats/base' );
```

#### stats

Standard library base statistical functions.

```javascript
var ns = stats;
// returns {...}
```

The namespace contains the following sub-namespaces:

<!-- <toc pattern="dists"> -->

<div class="namespace-toc">

-   <span class="signature">[`dists`][@stdlib/stats/base/dists]</span><span class="delimiter">: </span><span class="description">standard library probability distribution modules.</span>

</div>

<!-- </toc> -->

The namespace contains the following statistical functions:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cumax( N, x, strideX, y, strideY )`][@stdlib/stats/base/cumax]</span><span class="delimiter">: </span><span class="description">calculate the cumulative maximum of a strided array.</span>
-   <span class="signature">[`cumaxabs( N, x, strideX, y, strideY )`][@stdlib/stats/base/cumaxabs]</span><span class="delimiter">: </span><span class="description">calculate the cumulative maximum absolute value of a strided array.</span>
-   <span class="signature">[`cumin( N, x, strideX, y, strideY )`][@stdlib/stats/base/cumin]</span><span class="delimiter">: </span><span class="description">calculate the cumulative minimum of a strided array.</span>
-   <span class="signature">[`cuminabs( N, x, strideX, y, strideY )`][@stdlib/stats/base/cuminabs]</span><span class="delimiter">: </span><span class="description">calculate the cumulative minimum absolute value of a strided array.</span>
-   <span class="signature">[`dcumax( N, x, strideX, y, strideY )`][@stdlib/stats/base/dcumax]</span><span class="delimiter">: </span><span class="description">calculate the cumulative maximum of double-precision floating-point strided array elements.</span>
-   <span class="signature">[`dcumaxabs( N, x, strideX, y, strideY )`][@stdlib/stats/base/dcumaxabs]</span><span class="delimiter">: </span><span class="description">calculate the cumulative maximum absolute value of double-precision floating-point strided array elements.</span>
-   <span class="signature">[`dcumin( N, x, strideX, y, strideY )`][@stdlib/stats/base/dcumin]</span><span class="delimiter">: </span><span class="description">calculate the cumulative minimum of double-precision floating-point strided array elements.</span>
-   <span class="signature">[`dcuminabs( N, x, strideX, y, strideY )`][@stdlib/stats/base/dcuminabs]</span><span class="delimiter">: </span><span class="description">calculate the cumulative minimum absolute value of double-precision floating-point strided array elements.</span>
-   <span class="signature">[`dmax( N, x, stride )`][@stdlib/stats/base/dmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dmaxabs( N, x, stride )`][@stdlib/stats/base/dmaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dmaxsorted( N, x, stride )`][@stdlib/stats/base/dmaxsorted]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a sorted double-precision floating-point strided array.</span>
-   <span class="signature">[`dmean( N, x, stride )`][@stdlib/stats/base/dmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dmeankbn( N, x, stride )`][@stdlib/stats/base/dmeankbn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dmeankbn2( N, x, stride )`][@stdlib/stats/base/dmeankbn2]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dmeanli( N, x, stride )`][@stdlib/stats/base/dmeanli]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`dmeanlipw( N, x, stride )`][@stdlib/stats/base/dmeanlipw]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array using a one-pass trial mean algorithm with pairwise summation.</span>
-   <span class="signature">[`dmeanors( N, x, stride )`][@stdlib/stats/base/dmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array using ordinary recursive summation.</span>
-   <span class="signature">[`dmeanpn( N, x, stride )`][@stdlib/stats/base/dmeanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array using a two-pass error correction algorithm.</span>
-   <span class="signature">[`dmeanpw( N, x, stride )`][@stdlib/stats/base/dmeanpw]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array using pairwise summation.</span>
-   <span class="signature">[`dmeanwd( N, x, stride )`][@stdlib/stats/base/dmeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array using Welford's algorithm.</span>
-   <span class="signature">[`dmediansorted( N, x, stride )`][@stdlib/stats/base/dmediansorted]</span><span class="delimiter">: </span><span class="description">calculate the median value of a sorted double-precision floating-point strided array.</span>
-   <span class="signature">[`dmin( N, x, stride )`][@stdlib/stats/base/dmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dminabs( N, x, stride )`][@stdlib/stats/base/dminabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dminsorted( N, x, stride )`][@stdlib/stats/base/dminsorted]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a sorted double-precision floating-point strided array.</span>
-   <span class="signature">[`dnanmax( N, x, stride )`][@stdlib/stats/base/dnanmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a double-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanmaxabs( N, x, stride )`][@stdlib/stats/base/dnanmaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a double-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanmean( N, x, stride )`][@stdlib/stats/base/dnanmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanmeanors( N, x, stride )`][@stdlib/stats/base/dnanmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array, ignoring `NaN` values and using ordinary recursive summation.</span>
-   <span class="signature">[`dnanmeanpn( N, x, stride )`][@stdlib/stats/base/dnanmeanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array, ignoring `NaN` values and using a two-pass error correction algorithm.</span>
-   <span class="signature">[`dnanmeanwd( N, x, stride )`][@stdlib/stats/base/dnanmeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array, using Welford's algorithm and ignoring `NaN` values.</span>
-   <span class="signature">[`dnanmin( N, x, stride )`][@stdlib/stats/base/dnanmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a double-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanminabs( N, x, stride )`][@stdlib/stats/base/dnanminabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of a double-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanrange( N, x, stride )`][@stdlib/stats/base/dnanrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a double-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`drange( N, x, stride )`][@stdlib/stats/base/drange]</span><span class="delimiter">: </span><span class="description">calculate the range of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dsmean( N, x, stride )`][@stdlib/stats/base/dsmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsmeanors( N, x, stride )`][@stdlib/stats/base/dsmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using ordinary recursive summation with extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsmeanpn( N, x, stride )`][@stdlib/stats/base/dsmeanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using a two-pass error correction algorithm with extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsmeanpw( N, x, stride )`][@stdlib/stats/base/dsmeanpw]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using pairwise summation with extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsmeanwd( N, x, stride )`][@stdlib/stats/base/dsmeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using Welford's algorithm with extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsnanmean( N, x, stride )`][@stdlib/stats/base/dsnanmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values, using extended accumulation, and returning an extended precision result.</span>
-   <span class="signature">[`dsnanmeanors( N, x, stride )`][@stdlib/stats/base/dsnanmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values, using ordinary recursive summation with extended accumulation, and returning an extended precision result.</span>
-   <span class="signature">[`dsnanmeanpn( N, x, stride )`][@stdlib/stats/base/dsnanmeanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values, using a two-pass error correction algorithm with extended accumulation, and returning an extended precision result.</span>
-   <span class="signature">[`dsnanmeanwd( N, x, stride )`][@stdlib/stats/base/dsnanmeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values, using Welford's algorithm with extended accumulation, and returning an extended precision result.</span>
-   <span class="signature">[`dstdev( N, correction, x, stride )`][@stdlib/stats/base/dstdev]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dstdevpn( N, correction, x, stride )`][@stdlib/stats/base/dstdevpn]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array using a two-pass algorithm.</span>
-   <span class="signature">[`dstdevtk( N, correction, x, stride )`][@stdlib/stats/base/dstdevtk]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array using a one-pass textbook algorithm.</span>
-   <span class="signature">[`dstdevwd( N, correction, x, stride )`][@stdlib/stats/base/dstdevwd]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array using Welford's algorithm.</span>
-   <span class="signature">[`dstdevyc( N, correction, x, stride )`][@stdlib/stats/base/dstdevyc]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`dsvariance( N, correction, x, stride )`][@stdlib/stats/base/dsvariance]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array using extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsvariancepn( N, correction, x, stride )`][@stdlib/stats/base/dsvariancepn]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array using a two-pass algorithm with extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dvariance( N, correction, x, stride )`][@stdlib/stats/base/dvariance]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array.</span>
-   <span class="signature">[`dvariancepn( N, correction, x, stride )`][@stdlib/stats/base/dvariancepn]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array using a two-pass algorithm.</span>
-   <span class="signature">[`dvariancetk( N, correction, x, stride )`][@stdlib/stats/base/dvariancetk]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array using a one-pass textbook algorithm.</span>
-   <span class="signature">[`dvariancewd( N, correction, x, stride )`][@stdlib/stats/base/dvariancewd]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array using Welford's algorithm.</span>
-   <span class="signature">[`dvarianceyc( N, correction, x, stride )`][@stdlib/stats/base/dvarianceyc]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`max( N, x, stride )`][@stdlib/stats/base/max]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array.</span>
-   <span class="signature">[`maxabs( N, x, stride )`][@stdlib/stats/base/maxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a strided array.</span>
-   <span class="signature">[`maxsorted( N, x, stride )`][@stdlib/stats/base/maxsorted]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a sorted strided array.</span>
-   <span class="signature">[`mean( N, x, stride )`][@stdlib/stats/base/mean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array.</span>
-   <span class="signature">[`meankbn( N, x, stride )`][@stdlib/stats/base/meankbn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`meankbn2( N, x, stride )`][@stdlib/stats/base/meankbn2]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`meanors( N, x, stride )`][@stdlib/stats/base/meanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array using ordinary recursive summation.</span>
-   <span class="signature">[`meanpn( N, x, stride )`][@stdlib/stats/base/meanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array using a two-pass error correction algorithm.</span>
-   <span class="signature">[`meanpw( N, x, stride )`][@stdlib/stats/base/meanpw]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array using pairwise summation.</span>
-   <span class="signature">[`meanwd( N, x, stride )`][@stdlib/stats/base/meanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array using Welford's algorithm.</span>
-   <span class="signature">[`min( N, x, stride )`][@stdlib/stats/base/min]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a strided array.</span>
-   <span class="signature">[`minabs( N, x, stride )`][@stdlib/stats/base/minabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of a strided array.</span>
-   <span class="signature">[`minsorted( N, x, stride )`][@stdlib/stats/base/minsorted]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a sorted strided array.</span>
-   <span class="signature">[`nanmax( N, x, stride )`][@stdlib/stats/base/nanmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmaxabs( N, x, stride )`][@stdlib/stats/base/nanmaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmean( N, x, stride )`][@stdlib/stats/base/nanmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmeanors( N, x, stride )`][@stdlib/stats/base/nanmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array, ignoring `NaN` values and using ordinary recursive summation.</span>
-   <span class="signature">[`nanmeanpn( N, x, stride )`][@stdlib/stats/base/nanmeanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array, ignoring `NaN` values and using a two-pass error correction algorithm.</span>
-   <span class="signature">[`nanmeanwd( N, x, stride )`][@stdlib/stats/base/nanmeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a strided array, ignoring `NaN` values and using Welford's algorithm.</span>
-   <span class="signature">[`nanmin( N, x, stride )`][@stdlib/stats/base/nanmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`nanminabs( N, x, stride )`][@stdlib/stats/base/nanminabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of a strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`nanrange( N, x, stride )`][@stdlib/stats/base/nanrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`range( N, x, stride )`][@stdlib/stats/base/range]</span><span class="delimiter">: </span><span class="description">calculate the range of a strided array.</span>
-   <span class="signature">[`scumax( N, x, strideX, y, strideY )`][@stdlib/stats/base/scumax]</span><span class="delimiter">: </span><span class="description">calculate the cumulative maximum of single-precision floating-point strided array elements.</span>
-   <span class="signature">[`scumaxabs( N, x, strideX, y, strideY )`][@stdlib/stats/base/scumaxabs]</span><span class="delimiter">: </span><span class="description">calculate the cumulative maximum absolute value of single-precision floating-point strided array elements.</span>
-   <span class="signature">[`scumin( N, x, strideX, y, strideY )`][@stdlib/stats/base/scumin]</span><span class="delimiter">: </span><span class="description">calculate the cumulative minimum of single-precision floating-point strided array elements.</span>
-   <span class="signature">[`scuminabs( N, x, strideX, y, strideY )`][@stdlib/stats/base/scuminabs]</span><span class="delimiter">: </span><span class="description">calculate the cumulative minimum absolute value of single-precision floating-point strided array elements.</span>
-   <span class="signature">[`sdsmean( N, x, stride )`][@stdlib/stats/base/sdsmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using extended accumulation.</span>
-   <span class="signature">[`sdsmeanors( N, x, stride )`][@stdlib/stats/base/sdsmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using ordinary recursive summation with extended accumulation.</span>
-   <span class="signature">[`sdsnanmean( N, x, stride )`][@stdlib/stats/base/sdsnanmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using extended accumulation.</span>
-   <span class="signature">[`sdsnanmeanors( N, x, stride )`][@stdlib/stats/base/sdsnanmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using ordinary recursive summation with extended accumulation.</span>
-   <span class="signature">[`smax( N, x, stride )`][@stdlib/stats/base/smax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a single-precision floating-point strided array.</span>
-   <span class="signature">[`smaxabs( N, x, stride )`][@stdlib/stats/base/smaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a single-precision floating-point strided array.</span>
-   <span class="signature">[`smaxsorted( N, x, stride )`][@stdlib/stats/base/smaxsorted]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a sorted single-precision floating-point strided array.</span>
-   <span class="signature">[`smean( N, x, stride )`][@stdlib/stats/base/smean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array.</span>
-   <span class="signature">[`smeankbn( N, x, stride )`][@stdlib/stats/base/smeankbn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`smeankbn2( N, x, stride )`][@stdlib/stats/base/smeankbn2]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`smeanli( N, x, stride )`][@stdlib/stats/base/smeanli]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`smeanlipw( N, x, stride )`][@stdlib/stats/base/smeanlipw]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using a one-pass trial mean algorithm with pairwise summation.</span>
-   <span class="signature">[`smeanors( N, x, stride )`][@stdlib/stats/base/smeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using ordinary recursive summation.</span>
-   <span class="signature">[`smeanpn( N, x, stride )`][@stdlib/stats/base/smeanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using a two-pass error correction algorithm.</span>
-   <span class="signature">[`smeanpw( N, x, stride )`][@stdlib/stats/base/smeanpw]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using pairwise summation.</span>
-   <span class="signature">[`smeanwd( N, x, stride )`][@stdlib/stats/base/smeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array using Welford's algorithm.</span>
-   <span class="signature">[`smin( N, x, stride )`][@stdlib/stats/base/smin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a single-precision floating-point strided array.</span>
-   <span class="signature">[`sminabs( N, x, stride )`][@stdlib/stats/base/sminabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of a single-precision floating-point strided array.</span>
-   <span class="signature">[`sminsorted( N, x, stride )`][@stdlib/stats/base/sminsorted]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a sorted single-precision floating-point strided array.</span>
-   <span class="signature">[`snanmax( N, x, stride )`][@stdlib/stats/base/snanmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a single-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`snanmaxabs( N, x, stride )`][@stdlib/stats/base/snanmaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a single-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`snanmean( N, x, stride )`][@stdlib/stats/base/snanmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`snanmeanors( N, x, stride )`][@stdlib/stats/base/snanmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using ordinary recursive summation.</span>
-   <span class="signature">[`snanmeanpn( N, x, stride )`][@stdlib/stats/base/snanmeanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using a two-pass error correction algorithm.</span>
-   <span class="signature">[`snanmeanwd( N, x, stride )`][@stdlib/stats/base/snanmeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using Welford's algorithm.</span>
-   <span class="signature">[`snanmin( N, x, stride )`][@stdlib/stats/base/snanmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a single-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`snanminabs( N, x, stride )`][@stdlib/stats/base/snanminabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of a single-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`snanrange( N, x, stride )`][@stdlib/stats/base/snanrange]</span><span class="delimiter">: </span><span class="description">calculate the range of a single-precision floating-point strided array, ignoring `NaN` values.</span>
-   <span class="signature">[`srange( N, x, stride )`][@stdlib/stats/base/srange]</span><span class="delimiter">: </span><span class="description">calculate the range of a single-precision floating-point strided array.</span>
-   <span class="signature">[`sstdev( N, correction, x, stride )`][@stdlib/stats/base/sstdev]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array.</span>
-   <span class="signature">[`sstdevpn( N, correction, x, stride )`][@stdlib/stats/base/sstdevpn]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array using a two-pass algorithm.</span>
-   <span class="signature">[`sstdevtk( N, correction, x, stride )`][@stdlib/stats/base/sstdevtk]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array using a one-pass textbook algorithm.</span>
-   <span class="signature">[`sstdevwd( N, correction, x, stride )`][@stdlib/stats/base/sstdevwd]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array using Welford's algorithm.</span>
-   <span class="signature">[`sstdevyc( N, correction, x, stride )`][@stdlib/stats/base/sstdevyc]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a single-precision floating-point strided array using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`svariance( N, correction, x, stride )`][@stdlib/stats/base/svariance]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array.</span>
-   <span class="signature">[`svariancepn( N, correction, x, stride )`][@stdlib/stats/base/svariancepn]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array using a two-pass algorithm.</span>
-   <span class="signature">[`svariancetk( N, correction, x, stride )`][@stdlib/stats/base/svariancetk]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array using a one-pass textbook algorithm.</span>
-   <span class="signature">[`svariancewd( N, correction, x, stride )`][@stdlib/stats/base/svariancewd]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array using Welford's algorithm.</span>
-   <span class="signature">[`svarianceyc( N, correction, x, stride )`][@stdlib/stats/base/svarianceyc]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`variance( N, correction, x, stride )`][@stdlib/stats/base/variance]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array.</span>
-   <span class="signature">[`variancepn( N, correction, x, stride )`][@stdlib/stats/base/variancepn]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array using a two-pass algorithm.</span>

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

<section class="links">

<!-- <toc-links> -->

[@stdlib/stats/base/cumax]: https://github.com/stdlib-js/stats/tree/main/base/cumax

[@stdlib/stats/base/cumaxabs]: https://github.com/stdlib-js/stats/tree/main/base/cumaxabs

[@stdlib/stats/base/cumin]: https://github.com/stdlib-js/stats/tree/main/base/cumin

[@stdlib/stats/base/cuminabs]: https://github.com/stdlib-js/stats/tree/main/base/cuminabs

[@stdlib/stats/base/dcumax]: https://github.com/stdlib-js/stats/tree/main/base/dcumax

[@stdlib/stats/base/dcumaxabs]: https://github.com/stdlib-js/stats/tree/main/base/dcumaxabs

[@stdlib/stats/base/dcumin]: https://github.com/stdlib-js/stats/tree/main/base/dcumin

[@stdlib/stats/base/dcuminabs]: https://github.com/stdlib-js/stats/tree/main/base/dcuminabs

[@stdlib/stats/base/dmax]: https://github.com/stdlib-js/stats/tree/main/base/dmax

[@stdlib/stats/base/dmaxabs]: https://github.com/stdlib-js/stats/tree/main/base/dmaxabs

[@stdlib/stats/base/dmaxsorted]: https://github.com/stdlib-js/stats/tree/main/base/dmaxsorted

[@stdlib/stats/base/dmean]: https://github.com/stdlib-js/stats/tree/main/base/dmean

[@stdlib/stats/base/dmeankbn]: https://github.com/stdlib-js/stats/tree/main/base/dmeankbn

[@stdlib/stats/base/dmeankbn2]: https://github.com/stdlib-js/stats/tree/main/base/dmeankbn2

[@stdlib/stats/base/dmeanli]: https://github.com/stdlib-js/stats/tree/main/base/dmeanli

[@stdlib/stats/base/dmeanlipw]: https://github.com/stdlib-js/stats/tree/main/base/dmeanlipw

[@stdlib/stats/base/dmeanors]: https://github.com/stdlib-js/stats/tree/main/base/dmeanors

[@stdlib/stats/base/dmeanpn]: https://github.com/stdlib-js/stats/tree/main/base/dmeanpn

[@stdlib/stats/base/dmeanpw]: https://github.com/stdlib-js/stats/tree/main/base/dmeanpw

[@stdlib/stats/base/dmeanwd]: https://github.com/stdlib-js/stats/tree/main/base/dmeanwd

[@stdlib/stats/base/dmediansorted]: https://github.com/stdlib-js/stats/tree/main/base/dmediansorted

[@stdlib/stats/base/dmin]: https://github.com/stdlib-js/stats/tree/main/base/dmin

[@stdlib/stats/base/dminabs]: https://github.com/stdlib-js/stats/tree/main/base/dminabs

[@stdlib/stats/base/dminsorted]: https://github.com/stdlib-js/stats/tree/main/base/dminsorted

[@stdlib/stats/base/dnanmax]: https://github.com/stdlib-js/stats/tree/main/base/dnanmax

[@stdlib/stats/base/dnanmaxabs]: https://github.com/stdlib-js/stats/tree/main/base/dnanmaxabs

[@stdlib/stats/base/dnanmean]: https://github.com/stdlib-js/stats/tree/main/base/dnanmean

[@stdlib/stats/base/dnanmeanors]: https://github.com/stdlib-js/stats/tree/main/base/dnanmeanors

[@stdlib/stats/base/dnanmeanpn]: https://github.com/stdlib-js/stats/tree/main/base/dnanmeanpn

[@stdlib/stats/base/dnanmeanwd]: https://github.com/stdlib-js/stats/tree/main/base/dnanmeanwd

[@stdlib/stats/base/dnanmin]: https://github.com/stdlib-js/stats/tree/main/base/dnanmin

[@stdlib/stats/base/dnanminabs]: https://github.com/stdlib-js/stats/tree/main/base/dnanminabs

[@stdlib/stats/base/dnanrange]: https://github.com/stdlib-js/stats/tree/main/base/dnanrange

[@stdlib/stats/base/drange]: https://github.com/stdlib-js/stats/tree/main/base/drange

[@stdlib/stats/base/dsmean]: https://github.com/stdlib-js/stats/tree/main/base/dsmean

[@stdlib/stats/base/dsmeanors]: https://github.com/stdlib-js/stats/tree/main/base/dsmeanors

[@stdlib/stats/base/dsmeanpn]: https://github.com/stdlib-js/stats/tree/main/base/dsmeanpn

[@stdlib/stats/base/dsmeanpw]: https://github.com/stdlib-js/stats/tree/main/base/dsmeanpw

[@stdlib/stats/base/dsmeanwd]: https://github.com/stdlib-js/stats/tree/main/base/dsmeanwd

[@stdlib/stats/base/dsnanmean]: https://github.com/stdlib-js/stats/tree/main/base/dsnanmean

[@stdlib/stats/base/dsnanmeanors]: https://github.com/stdlib-js/stats/tree/main/base/dsnanmeanors

[@stdlib/stats/base/dsnanmeanpn]: https://github.com/stdlib-js/stats/tree/main/base/dsnanmeanpn

[@stdlib/stats/base/dsnanmeanwd]: https://github.com/stdlib-js/stats/tree/main/base/dsnanmeanwd

[@stdlib/stats/base/dstdev]: https://github.com/stdlib-js/stats/tree/main/base/dstdev

[@stdlib/stats/base/dstdevpn]: https://github.com/stdlib-js/stats/tree/main/base/dstdevpn

[@stdlib/stats/base/dstdevtk]: https://github.com/stdlib-js/stats/tree/main/base/dstdevtk

[@stdlib/stats/base/dstdevwd]: https://github.com/stdlib-js/stats/tree/main/base/dstdevwd

[@stdlib/stats/base/dstdevyc]: https://github.com/stdlib-js/stats/tree/main/base/dstdevyc

[@stdlib/stats/base/dsvariance]: https://github.com/stdlib-js/stats/tree/main/base/dsvariance

[@stdlib/stats/base/dsvariancepn]: https://github.com/stdlib-js/stats/tree/main/base/dsvariancepn

[@stdlib/stats/base/dvariance]: https://github.com/stdlib-js/stats/tree/main/base/dvariance

[@stdlib/stats/base/dvariancepn]: https://github.com/stdlib-js/stats/tree/main/base/dvariancepn

[@stdlib/stats/base/dvariancetk]: https://github.com/stdlib-js/stats/tree/main/base/dvariancetk

[@stdlib/stats/base/dvariancewd]: https://github.com/stdlib-js/stats/tree/main/base/dvariancewd

[@stdlib/stats/base/dvarianceyc]: https://github.com/stdlib-js/stats/tree/main/base/dvarianceyc

[@stdlib/stats/base/max]: https://github.com/stdlib-js/stats/tree/main/base/max

[@stdlib/stats/base/maxabs]: https://github.com/stdlib-js/stats/tree/main/base/maxabs

[@stdlib/stats/base/maxsorted]: https://github.com/stdlib-js/stats/tree/main/base/maxsorted

[@stdlib/stats/base/mean]: https://github.com/stdlib-js/stats/tree/main/base/mean

[@stdlib/stats/base/meankbn]: https://github.com/stdlib-js/stats/tree/main/base/meankbn

[@stdlib/stats/base/meankbn2]: https://github.com/stdlib-js/stats/tree/main/base/meankbn2

[@stdlib/stats/base/meanors]: https://github.com/stdlib-js/stats/tree/main/base/meanors

[@stdlib/stats/base/meanpn]: https://github.com/stdlib-js/stats/tree/main/base/meanpn

[@stdlib/stats/base/meanpw]: https://github.com/stdlib-js/stats/tree/main/base/meanpw

[@stdlib/stats/base/meanwd]: https://github.com/stdlib-js/stats/tree/main/base/meanwd

[@stdlib/stats/base/min]: https://github.com/stdlib-js/stats/tree/main/base/min

[@stdlib/stats/base/minabs]: https://github.com/stdlib-js/stats/tree/main/base/minabs

[@stdlib/stats/base/minsorted]: https://github.com/stdlib-js/stats/tree/main/base/minsorted

[@stdlib/stats/base/nanmax]: https://github.com/stdlib-js/stats/tree/main/base/nanmax

[@stdlib/stats/base/nanmaxabs]: https://github.com/stdlib-js/stats/tree/main/base/nanmaxabs

[@stdlib/stats/base/nanmean]: https://github.com/stdlib-js/stats/tree/main/base/nanmean

[@stdlib/stats/base/nanmeanors]: https://github.com/stdlib-js/stats/tree/main/base/nanmeanors

[@stdlib/stats/base/nanmeanpn]: https://github.com/stdlib-js/stats/tree/main/base/nanmeanpn

[@stdlib/stats/base/nanmeanwd]: https://github.com/stdlib-js/stats/tree/main/base/nanmeanwd

[@stdlib/stats/base/nanmin]: https://github.com/stdlib-js/stats/tree/main/base/nanmin

[@stdlib/stats/base/nanminabs]: https://github.com/stdlib-js/stats/tree/main/base/nanminabs

[@stdlib/stats/base/nanrange]: https://github.com/stdlib-js/stats/tree/main/base/nanrange

[@stdlib/stats/base/range]: https://github.com/stdlib-js/stats/tree/main/base/range

[@stdlib/stats/base/scumax]: https://github.com/stdlib-js/stats/tree/main/base/scumax

[@stdlib/stats/base/scumaxabs]: https://github.com/stdlib-js/stats/tree/main/base/scumaxabs

[@stdlib/stats/base/scumin]: https://github.com/stdlib-js/stats/tree/main/base/scumin

[@stdlib/stats/base/scuminabs]: https://github.com/stdlib-js/stats/tree/main/base/scuminabs

[@stdlib/stats/base/sdsmean]: https://github.com/stdlib-js/stats/tree/main/base/sdsmean

[@stdlib/stats/base/sdsmeanors]: https://github.com/stdlib-js/stats/tree/main/base/sdsmeanors

[@stdlib/stats/base/sdsnanmean]: https://github.com/stdlib-js/stats/tree/main/base/sdsnanmean

[@stdlib/stats/base/sdsnanmeanors]: https://github.com/stdlib-js/stats/tree/main/base/sdsnanmeanors

[@stdlib/stats/base/smax]: https://github.com/stdlib-js/stats/tree/main/base/smax

[@stdlib/stats/base/smaxabs]: https://github.com/stdlib-js/stats/tree/main/base/smaxabs

[@stdlib/stats/base/smaxsorted]: https://github.com/stdlib-js/stats/tree/main/base/smaxsorted

[@stdlib/stats/base/smean]: https://github.com/stdlib-js/stats/tree/main/base/smean

[@stdlib/stats/base/smeankbn]: https://github.com/stdlib-js/stats/tree/main/base/smeankbn

[@stdlib/stats/base/smeankbn2]: https://github.com/stdlib-js/stats/tree/main/base/smeankbn2

[@stdlib/stats/base/smeanli]: https://github.com/stdlib-js/stats/tree/main/base/smeanli

[@stdlib/stats/base/smeanlipw]: https://github.com/stdlib-js/stats/tree/main/base/smeanlipw

[@stdlib/stats/base/smeanors]: https://github.com/stdlib-js/stats/tree/main/base/smeanors

[@stdlib/stats/base/smeanpn]: https://github.com/stdlib-js/stats/tree/main/base/smeanpn

[@stdlib/stats/base/smeanpw]: https://github.com/stdlib-js/stats/tree/main/base/smeanpw

[@stdlib/stats/base/smeanwd]: https://github.com/stdlib-js/stats/tree/main/base/smeanwd

[@stdlib/stats/base/smin]: https://github.com/stdlib-js/stats/tree/main/base/smin

[@stdlib/stats/base/sminabs]: https://github.com/stdlib-js/stats/tree/main/base/sminabs

[@stdlib/stats/base/sminsorted]: https://github.com/stdlib-js/stats/tree/main/base/sminsorted

[@stdlib/stats/base/snanmax]: https://github.com/stdlib-js/stats/tree/main/base/snanmax

[@stdlib/stats/base/snanmaxabs]: https://github.com/stdlib-js/stats/tree/main/base/snanmaxabs

[@stdlib/stats/base/snanmean]: https://github.com/stdlib-js/stats/tree/main/base/snanmean

[@stdlib/stats/base/snanmeanors]: https://github.com/stdlib-js/stats/tree/main/base/snanmeanors

[@stdlib/stats/base/snanmeanpn]: https://github.com/stdlib-js/stats/tree/main/base/snanmeanpn

[@stdlib/stats/base/snanmeanwd]: https://github.com/stdlib-js/stats/tree/main/base/snanmeanwd

[@stdlib/stats/base/snanmin]: https://github.com/stdlib-js/stats/tree/main/base/snanmin

[@stdlib/stats/base/snanminabs]: https://github.com/stdlib-js/stats/tree/main/base/snanminabs

[@stdlib/stats/base/snanrange]: https://github.com/stdlib-js/stats/tree/main/base/snanrange

[@stdlib/stats/base/srange]: https://github.com/stdlib-js/stats/tree/main/base/srange

[@stdlib/stats/base/sstdev]: https://github.com/stdlib-js/stats/tree/main/base/sstdev

[@stdlib/stats/base/sstdevpn]: https://github.com/stdlib-js/stats/tree/main/base/sstdevpn

[@stdlib/stats/base/sstdevtk]: https://github.com/stdlib-js/stats/tree/main/base/sstdevtk

[@stdlib/stats/base/sstdevwd]: https://github.com/stdlib-js/stats/tree/main/base/sstdevwd

[@stdlib/stats/base/sstdevyc]: https://github.com/stdlib-js/stats/tree/main/base/sstdevyc

[@stdlib/stats/base/svariance]: https://github.com/stdlib-js/stats/tree/main/base/svariance

[@stdlib/stats/base/svariancepn]: https://github.com/stdlib-js/stats/tree/main/base/svariancepn

[@stdlib/stats/base/svariancetk]: https://github.com/stdlib-js/stats/tree/main/base/svariancetk

[@stdlib/stats/base/svariancewd]: https://github.com/stdlib-js/stats/tree/main/base/svariancewd

[@stdlib/stats/base/svarianceyc]: https://github.com/stdlib-js/stats/tree/main/base/svarianceyc

[@stdlib/stats/base/variance]: https://github.com/stdlib-js/stats/tree/main/base/variance

[@stdlib/stats/base/variancepn]: https://github.com/stdlib-js/stats/tree/main/base/variancepn

[@stdlib/stats/base/dists]: https://github.com/stdlib-js/stats/tree/main/base/dists

<!-- </toc-links> -->

</section>

<!-- /.links -->
