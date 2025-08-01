<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# nanvariancech

> Calculate the [variance][variance] of a strided array ignoring `NaN` values and using a one-pass trial mean algorithm.

<section class="intro">

The population [variance][variance] of a finite size population of size `N` is given by

<!-- <equation class="equation" label="eq:population_variance" align="center" raw="\sigma^2 = \frac{1}{N} \sum_{i=0}^{N-1} (x_i - \mu)^2" alt="Equation for the population variance."> -->

```math
\sigma^2 = \frac{1}{N} \sum_{i=0}^{N-1} (x_i - \mu)^2
```

<!-- <div class="equation" align="center" data-raw-text="\sigma^2 = \frac{1}{N} \sum_{i=0}^{N-1} (x_i - \mu)^2" data-equation="eq:population_variance">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@a42764beff9494374912d93a140da3491f12e2cc/lib/node_modules/@stdlib/stats/strided/nanvariancech/docs/img/equation_population_variance.svg" alt="Equation for the population variance.">
    <br>
</div> -->

<!-- </equation> -->

where the population mean is given by

<!-- <equation class="equation" label="eq:population_mean" align="center" raw="\mu = \frac{1}{N} \sum_{i=0}^{N-1} x_i" alt="Equation for the population mean."> -->

```math
\mu = \frac{1}{N} \sum_{i=0}^{N-1} x_i
```

<!-- <div class="equation" align="center" data-raw-text="\mu = \frac{1}{N} \sum_{i=0}^{N-1} x_i" data-equation="eq:population_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@a42764beff9494374912d93a140da3491f12e2cc/lib/node_modules/@stdlib/stats/strided/nanvariancech/docs/img/equation_population_mean.svg" alt="Equation for the population mean.">
    <br>
</div> -->

<!-- </equation> -->

Often in the analysis of data, the true population [variance][variance] is not known _a priori_ and must be estimated from a sample drawn from the population distribution. If one attempts to use the formula for the population [variance][variance], the result is biased and yields a **biased sample variance**. To compute an **unbiased sample variance** for a sample of size `n`,

<!-- <equation class="equation" label="eq:unbiased_sample_variance" align="center" raw="s^2 = \frac{1}{n-1} \sum_{i=0}^{n-1} (x_i - \bar{x})^2" alt="Equation for computing an unbiased sample variance."> -->

```math
s^2 = \frac{1}{n-1} \sum_{i=0}^{n-1} (x_i - \bar{x})^2
```

<!-- <div class="equation" align="center" data-raw-text="s^2 = \frac{1}{n-1} \sum_{i=0}^{n-1} (x_i - \bar{x})^2" data-equation="eq:unbiased_sample_variance">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@a42764beff9494374912d93a140da3491f12e2cc/lib/node_modules/@stdlib/stats/strided/nanvariancech/docs/img/equation_unbiased_sample_variance.svg" alt="Equation for computing an unbiased sample variance.">
    <br>
</div> -->

<!-- </equation> -->

where the sample mean is given by

<!-- <equation class="equation" label="eq:sample_mean" align="center" raw="\bar{x} = \frac{1}{n} \sum_{i=0}^{n-1} x_i" alt="Equation for the sample mean."> -->

```math
\bar{x} = \frac{1}{n} \sum_{i=0}^{n-1} x_i
```

<!-- <div class="equation" align="center" data-raw-text="\bar{x} = \frac{1}{n} \sum_{i=0}^{n-1} x_i" data-equation="eq:sample_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@a42764beff9494374912d93a140da3491f12e2cc/lib/node_modules/@stdlib/stats/strided/nanvariancech/docs/img/equation_sample_mean.svg" alt="Equation for the sample mean.">
    <br>
</div> -->

<!-- </equation> -->

The use of the term `n-1` is commonly referred to as Bessel's correction. Note, however, that applying Bessel's correction can increase the mean squared error between the sample variance and population variance. Depending on the characteristics of the population distribution, other correction factors (e.g., `n-1.5`, `n+1`, etc) can yield better estimators.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var nanvariancech = require( '@stdlib/stats/strided/nanvariancech' );
```

#### nanvariancech( N, correction, x, strideX )

Computes the [variance][variance] of a strided array ignoring `NaN` values and using a one-pass trial mean algorithm.

```javascript
var x = [ 1.0, -2.0, NaN, 2.0 ];

var v = nanvariancech( x.length, 1, x, 1 );
// returns ~4.3333
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **correction**: degrees of freedom adjustment. Setting this parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the [variance][variance] according to `n-c` where `c` corresponds to the provided degrees of freedom adjustment and `n` corresponds to the number of non-`NaN` indexed elements. When computing the [variance][variance] of a population, setting this parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the unbiased sample [variance][variance], setting this parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
-   **x**: input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **strideX**: stride length for `x`.

The `N` and stride parameters determine which elements in the stided array are accessed at runtime. For example, to compute the [variance][variance] of every other element in `x`,

```javascript
var x = [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0, NaN, NaN ];

var v = nanvariancech( 5, 1, x, 2 );
// returns 6.25
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments, max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = nanvariancech( 5, 1, x1, 2 );
// returns 6.25
```

#### nanvariancech.ndarray( N, correction, x, strideX, offsetX )

Computes the [variance][variance] of a strided array ignoring `NaN` values and using a one-pass trial mean algorithm and alternative indexing semantics.

```javascript
var x = [ 1.0, -2.0, NaN, 2.0 ];

var v = nanvariancech.ndarray( x.length, 1, x, 1, 0 );
// returns ~4.33333
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to calculate the [variance][variance] for every other element in the strided array starting from the second element

```javascript
var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ];

var v = nanvariancech.ndarray( 5, 1, x, 2, 1 );
// returns 6.25
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `NaN`.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/base/accessor`][@stdlib/array/base/accessor]).
-   If `n - c` is less than or equal to `0` (where `c` corresponds to the provided degrees of freedom adjustment and `n` corresponds to the number of non-`NaN` indexed elements), both functions return `NaN`.
-   The underlying algorithm is a specialized case of Neely's two-pass algorithm. As the variance is invariant with respect to changes in the location parameter, the underlying algorithm uses the first non-`NaN` strided array element as a trial mean to shift subsequent data values and thus mitigate catastrophic cancellation. Accordingly, the algorithm's accuracy is best when data is **unordered** (i.e., the data is **not** sorted in either ascending or descending order such that the first value is an "extreme" value).
-   Depending on the environment, the typed versions ([`dnanvariancech`][@stdlib/stats/strided/dnanvariancech], [`snanvariancech`][@stdlib/stats/base/snanvariancech], etc.) are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/base/uniform' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var bernoulli = require( '@stdlib/random/base/bernoulli' );
var nanvariancech = require( '@stdlib/stats/strided/nanvariancech' );

function rand() {
    if ( bernoulli( 0.8 ) < 1 ) {
        return NaN;
    }
    return uniform( -50.0, 50.0 );
}

var x = filledarrayBy( 10, 'generic', rand );
console.log( x );

var v = nanvariancech( x.length, 1, x, 1 );
console.log( v );
```

</section>

<!-- /.examples -->

* * *

<section class="references">

## References

-   Neely, Peter M. 1966. "Comparison of Several Algorithms for Computation of Means, Standard Deviations and Correlation Coefficients." _Communications of the ACM_ 9 (7). Association for Computing Machinery: 496–99. doi:[10.1145/365719.365958][@neely:1966a].
-   Ling, Robert F. 1974. "Comparison of Several Algorithms for Computing Sample Means and Variances." _Journal of the American Statistical Association_ 69 (348). American Statistical Association, Taylor & Francis, Ltd.: 859–66. doi:[10.2307/2286154][@ling:1974a].
-   Chan, Tony F., Gene H. Golub, and Randall J. LeVeque. 1983. "Algorithms for Computing the Sample Variance: Analysis and Recommendations." _The American Statistician_ 37 (3). American Statistical Association, Taylor & Francis, Ltd.: 242–47. doi:[10.1080/00031305.1983.10483115][@chan:1983a].
-   Schubert, Erich, and Michael Gertz. 2018. "Numerically Stable Parallel Computation of (Co-)Variance." In _Proceedings of the 30th International Conference on Scientific and Statistical Database Management_. New York, NY, USA: Association for Computing Machinery. doi:[10.1145/3221269.3223036][@schubert:2018a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/strided/dnanvariancech`][@stdlib/stats/strided/dnanvariancech]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array ignoring NaN values and using a one-pass trial mean algorithm.</span>
-   <span class="package-name">[`@stdlib/stats/strided/nanstdevch`][@stdlib/stats/strided/nanstdevch]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array ignoring NaN values and using a one-pass trial mean algorithm.</span>
-   <span class="package-name">[`@stdlib/stats/strided/nanvariance`][@stdlib/stats/strided/nanvariance]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats/base/snanvariancech`][@stdlib/stats/base/snanvariancech]</span><span class="delimiter">: </span><span class="description">calculate the variance of a single-precision floating-point strided array ignoring NaN values and using a one-pass trial mean algorithm.</span>
-   <span class="package-name">[`@stdlib/stats/strided/variancech`][@stdlib/stats/strided/variancech]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array using a one-pass trial mean algorithm.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[variance]: https://en.wikipedia.org/wiki/Variance

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@neely:1966a]: https://doi.org/10.1145/365719.365958

[@ling:1974a]: https://doi.org/10.2307/2286154

[@chan:1983a]: https://doi.org/10.1080/00031305.1983.10483115

[@schubert:2018a]: https://doi.org/10.1145/3221269.3223036

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor

<!-- <related-links> -->

[@stdlib/stats/strided/dnanvariancech]: https://github.com/stdlib-js/stats/tree/main/strided/dnanvariancech

[@stdlib/stats/strided/nanstdevch]: https://github.com/stdlib-js/stats/tree/main/strided/nanstdevch

[@stdlib/stats/strided/nanvariance]: https://github.com/stdlib-js/stats/tree/main/strided/nanvariance

[@stdlib/stats/base/snanvariancech]: https://github.com/stdlib-js/stats/tree/main/base/snanvariancech

[@stdlib/stats/strided/variancech]: https://github.com/stdlib-js/stats/tree/main/strided/variancech

<!-- </related-links> -->

</section>

<!-- /.links -->
