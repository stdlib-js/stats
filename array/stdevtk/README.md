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

# stdevtk

> Calculate the [standard deviation][standard-deviation] of an array using a one-pass textbook algorithm.

<section class="intro">

The population [standard deviation][standard-deviation] of a finite size population of size `N` is given by

<!-- <equation class="equation" label="eq:population_standard_deviation" align="center" raw="\sigma = \sqrt{\frac{1}{N} \sum_{i=0}^{N-1} (x_i - \mu)^2}" alt="Equation for the population standard deviation."> -->

```math
\sigma = \sqrt{\frac{1}{N} \sum_{i=0}^{N-1} (x_i - \mu)^2}
```

<!-- <div class="equation" align="center" data-raw-text="\sigma = \sqrt{\frac{1}{N} \sum_{i=0}^{N-1} (x_i - \mu)^2}" data-equation="eq:population_standard_deviation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@1685f915feee8c7d26b90643d00105b4b6803eb4/lib/node_modules/@stdlib/stats/strided/stdevtk/docs/img/equation_population_standard_deviation.svg" alt="Equation for the population standard deviation.">
    <br>
</div> -->

<!-- </equation> -->

where the population mean is given by

<!-- <equation class="equation" label="eq:population_mean" align="center" raw="\mu = \frac{1}{N} \sum_{i=0}^{N-1} x_i" alt="Equation for the population mean."> -->

```math
\mu = \frac{1}{N} \sum_{i=0}^{N-1} x_i
```

<!-- <div class="equation" align="center" data-raw-text="\mu = \frac{1}{N} \sum_{i=0}^{N-1} x_i" data-equation="eq:population_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@1685f915feee8c7d26b90643d00105b4b6803eb4/lib/node_modules/@stdlib/stats/strided/stdevtk/docs/img/equation_population_mean.svg" alt="Equation for the population mean.">
    <br>
</div> -->

<!-- </equation> -->

Often in the analysis of data, the true population [standard deviation][standard-deviation] is not known _a priori_ and must be estimated from a sample drawn from the population distribution. If one attempts to use the formula for the population [standard deviation][standard-deviation], the result is biased and yields an **uncorrected sample standard deviation**. To compute a **corrected sample standard deviation** for a sample of size `n`,

<!-- <equation class="equation" label="eq:corrected_sample_standard_deviation" align="center" raw="s = \sqrt{\frac{1}{n-1} \sum_{i=0}^{n-1} (x_i - \bar{x})^2}" alt="Equation for computing a corrected sample standard deviation."> -->

```math
s = \sqrt{\frac{1}{n-1} \sum_{i=0}^{n-1} (x_i - \bar{x})^2}
```

<!-- <div class="equation" align="center" data-raw-text="s = \sqrt{\frac{1}{n-1} \sum_{i=0}^{n-1} (x_i - \bar{x})^2}" data-equation="eq:corrected_sample_standard_deviation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@1685f915feee8c7d26b90643d00105b4b6803eb4/lib/node_modules/@stdlib/stats/strided/stdevtk/docs/img/equation_corrected_sample_standard_deviation.svg" alt="Equation for computing a corrected sample standard deviation.">
    <br>
</div> -->

<!-- </equation> -->

where the sample mean is given by

<!-- <equation class="equation" label="eq:sample_mean" align="center" raw="\bar{x} = \frac{1}{n} \sum_{i=0}^{n-1} x_i" alt="Equation for the sample mean."> -->

```math
\bar{x} = \frac{1}{n} \sum_{i=0}^{n-1} x_i
```

<!-- <div class="equation" align="center" data-raw-text="\bar{x} = \frac{1}{n} \sum_{i=0}^{n-1} x_i" data-equation="eq:sample_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@1685f915feee8c7d26b90643d00105b4b6803eb4/lib/node_modules/@stdlib/stats/strided/stdevtk/docs/img/equation_sample_mean.svg" alt="Equation for the sample mean.">
    <br>
</div> -->

<!-- </equation> -->

The use of the term `n-1` is commonly referred to as Bessel's correction. Note, however, that applying Bessel's correction can increase the mean squared error between the sample standard deviation and population standard deviation. Depending on the characteristics of the population distribution, other correction factors (e.g., `n-1.5`, `n+1`, etc) can yield better estimators.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var stdevtk = require( '@stdlib/stats/array/stdevtk' );
```

#### stdevtk( x\[, correction] )

Computes the [standard deviation][standard-deviation] of an array using a one-pass textbook algorithm.

```javascript
var x = [ 1.0, -2.0, 2.0 ];

var v = stdevtk( x );
// returns ~2.0817
```

The function has the following parameters:

-   **x**: input array.
-   **correction**: degrees of freedom adjustment. Setting this parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the [standard deviation][standard-deviation] according to `N-c` where `N` corresponds to the number of array elements and `c` corresponds to the provided degrees of freedom adjustment. When computing the [standard deviation][standard-deviation] of a population, setting this parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the unbiased sample [standard deviation][standard-deviation], setting this parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction). Default: `1.0`.

By default, the function computes the sample [standard deviation][standard-deviation]. To adjust the degrees of freedom when computing the [standard deviation][standard-deviation], provide a `correction` argument.

```javascript
var x = [ 1.0, -2.0, 2.0 ];

var v = stdevtk( x, 0.0 );
// returns ~1.6997
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If provided an empty array, the function returns `NaN`.
-   If `N - c` is less than or equal to `0` (where `c` corresponds to the provided degrees of freedom adjustment), the function returns `NaN`.
-   The function supports array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/base/accessor`][@stdlib/array/base/accessor]).
-   Some caution should be exercised when using the one-pass textbook algorithm. Literature overwhelmingly discourages the algorithm's use for two reasons: 1) the lack of safeguards against underflow and overflow and 2) the risk of catastrophic cancellation when subtracting the two sums if the sums are large and the variance small. These concerns have merit; however, the one-pass textbook algorithm should not be dismissed outright. For data distributions with a moderately large standard deviation to mean ratio (i.e., **coefficient of variation**), the one-pass textbook algorithm may be acceptable, especially when performance is paramount and some precision loss is acceptable (including a risk of computing a negative variance due to floating-point rounding errors!). In short, no single "best" algorithm for computing the standard deviation exists. The "best" algorithm depends on the underlying data distribution, your performance requirements, and your minimum precision requirements. When evaluating which algorithm to use, consider the relative pros and cons, and choose the algorithm which best serves your needs.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var stdevtk = require( '@stdlib/stats/array/stdevtk' );

var x = discreteUniform( 10, -50, 50, {
    'dtype': 'float64'
});
console.log( x );

var v = stdevtk( x );
console.log( v );
```

</section>

<!-- /.examples -->

* * *

<section class="references">

## References

-   Ling, Robert F. 1974. "Comparison of Several Algorithms for Computing Sample Means and Variances." _Journal of the American Statistical Association_ 69 (348). American Statistical Association, Taylor & Francis, Ltd.: 859–66. doi:[10.2307/2286154][@ling:1974a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor

[@ling:1974a]: https://doi.org/10.2307/2286154

</section>

<!-- /.links -->
