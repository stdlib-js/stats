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

# varianceyc

> Calculate the [variance][variance] of a strided array using a one-pass algorithm proposed by Youngs and Cramer.

<section class="intro">

The population [variance][variance] of a finite size population of size `N` is given by

<!-- <equation class="equation" label="eq:population_variance" align="center" raw="\sigma^2 = \frac{1}{N} \sum_{i=0}^{N-1} (x_i - \mu)^2" alt="Equation for the population variance."> -->

```math
\sigma^2 = \frac{1}{N} \sum_{i=0}^{N-1} (x_i - \mu)^2
```

<!-- <div class="equation" align="center" data-raw-text="\sigma^2 = \frac{1}{N} \sum_{i=0}^{N-1} (x_i - \mu)^2" data-equation="eq:population_variance">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@61c39bd88c266a31915779a744bd790199657eff/lib/node_modules/@stdlib/stats/strided/varianceyc/docs/img/equation_population_variance.svg" alt="Equation for the population variance.">
    <br>
</div> -->

<!-- </equation> -->

where the population mean is given by

<!-- <equation class="equation" label="eq:population_mean" align="center" raw="\mu = \frac{1}{N} \sum_{i=0}^{N-1} x_i" alt="Equation for the population mean."> -->

```math
\mu = \frac{1}{N} \sum_{i=0}^{N-1} x_i
```

<!-- <div class="equation" align="center" data-raw-text="\mu = \frac{1}{N} \sum_{i=0}^{N-1} x_i" data-equation="eq:population_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@61c39bd88c266a31915779a744bd790199657eff/lib/node_modules/@stdlib/stats/strided/varianceyc/docs/img/equation_population_mean.svg" alt="Equation for the population mean.">
    <br>
</div> -->

<!-- </equation> -->

Often in the analysis of data, the true population [variance][variance] is not known _a priori_ and must be estimated from a sample drawn from the population distribution. If one attempts to use the formula for the population [variance][variance], the result is biased and yields a **biased sample variance**. To compute an **unbiased sample variance** for a sample of size `n`,

<!-- <equation class="equation" label="eq:unbiased_sample_variance" align="center" raw="s^2 = \frac{1}{n-1} \sum_{i=0}^{n-1} (x_i - \bar{x})^2" alt="Equation for computing an unbiased sample variance."> -->

```math
s^2 = \frac{1}{n-1} \sum_{i=0}^{n-1} (x_i - \bar{x})^2
```

<!-- <div class="equation" align="center" data-raw-text="s^2 = \frac{1}{n-1} \sum_{i=0}^{n-1} (x_i - \bar{x})^2" data-equation="eq:unbiased_sample_variance">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@61c39bd88c266a31915779a744bd790199657eff/lib/node_modules/@stdlib/stats/strided/varianceyc/docs/img/equation_unbiased_sample_variance.svg" alt="Equation for computing an unbiased sample variance.">
    <br>
</div> -->

<!-- </equation> -->

where the sample mean is given by

<!-- <equation class="equation" label="eq:sample_mean" align="center" raw="\bar{x} = \frac{1}{n} \sum_{i=0}^{n-1} x_i" alt="Equation for the sample mean."> -->

```math
\bar{x} = \frac{1}{n} \sum_{i=0}^{n-1} x_i
```

<!-- <div class="equation" align="center" data-raw-text="\bar{x} = \frac{1}{n} \sum_{i=0}^{n-1} x_i" data-equation="eq:sample_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@61c39bd88c266a31915779a744bd790199657eff/lib/node_modules/@stdlib/stats/strided/varianceyc/docs/img/equation_sample_mean.svg" alt="Equation for the sample mean.">
    <br>
</div> -->

<!-- </equation> -->

The use of the term `n-1` is commonly referred to as Bessel's correction. Note, however, that applying Bessel's correction can increase the mean squared error between the sample variance and population variance. Depending on the characteristics of the population distribution, other correction factors (e.g., `n-1.5`, `n+1`, etc) can yield better estimators.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var varianceyc = require( '@stdlib/stats/strided/varianceyc' );
```

#### varianceyc( N, correction, x, strideX )

Computes the [variance][variance] of a strided array using a one-pass algorithm proposed by Youngs and Cramer.

```javascript
var x = [ 1.0, -2.0, 2.0 ];

var v = varianceyc( x.length, 1.0, x, 1 );
// returns ~4.3333
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **correction**: degrees of freedom adjustment. Setting this parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the [variance][variance] according to `N-c` where `c` corresponds to the provided degrees of freedom adjustment. When computing the [variance][variance] of a population, setting this parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the unbiased sample [variance][variance], setting this parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
-   **x**: input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **strideX**: stride length for `x`.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to compute the [variance][variance] of every other element in `x`,

```javascript
var x = [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ];

var v = varianceyc( 4, 1.0, x, 2 );
// returns 6.25
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = varianceyc( 4, 1.0, x1, 2 );
// returns 6.25
```

#### varianceyc.ndarray( N, correction, x, strideX, offsetX )

Computes the [variance][variance] of a strided array using a one-pass algorithm proposed by Youngs and Cramer and alternative indexing semantics.

```javascript
var x = [ 1.0, -2.0, 2.0 ];

var v = varianceyc.ndarray( x.length, 1.0, x, 1, 0 );
// returns ~4.33333
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to calculate the [variance][variance] for every other element in `x` starting from the second element

```javascript
var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ];

var v = varianceyc.ndarray( 4, 1.0, x, 2, 1 );
// returns 6.25
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `NaN`.
-   If `N - c` is less than or equal to `0` (where `c` corresponds to the provided degrees of freedom adjustment), both functions return `NaN`.
-   Depending on the environment, the typed versions ([`dvarianceyc`][@stdlib/stats/strided/dvarianceyc], [`svarianceyc`][@stdlib/stats/strided/svarianceyc], etc.) are likely to be significantly more performant.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/base/accessor`][@stdlib/array/base/accessor]).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var varianceyc = require( '@stdlib/stats/strided/varianceyc' );

var x = uniform( 10, -50.0, 50.0, {
    'dtype': 'generic'
});
console.log( x );

var v = varianceyc( x.length, 1.0, x, 1 );
console.log( v );
```

</section>

<!-- /.examples -->

* * *

<section class="references">

## References

-   Youngs, Edward A., and Elliot M. Cramer. 1971. "Some Results Relevant to Choice of Sum and Sum-of-Product Algorithms." _Technometrics_ 13 (3): 657–65. doi:[10.1080/00401706.1971.10488826][@youngs:1971a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/strided/dvarianceyc`][@stdlib/stats/strided/dvarianceyc]</span><span class="delimiter">: </span><span class="description">calculate the variance of a double-precision floating-point strided array using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="package-name">[`@stdlib/stats/strided/nanvarianceyc`][@stdlib/stats/strided/nanvarianceyc]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array ignoring NaN values and using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="package-name">[`@stdlib/stats/strided/stdevyc`][@stdlib/stats/strided/stdevyc]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a strided array using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="package-name">[`@stdlib/stats/strided/variance`][@stdlib/stats/strided/variance]</span><span class="delimiter">: </span><span class="description">calculate the variance of a strided array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[variance]: https://en.wikipedia.org/wiki/Variance

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor

[@stdlib/stats/strided/svarianceyc]: https://github.com/stdlib-js/stats/tree/main/strided/svarianceyc

[@youngs:1971a]: https://doi.org/10.1080/00401706.1971.10488826

<!-- <related-links> -->

[@stdlib/stats/strided/dvarianceyc]: https://github.com/stdlib-js/stats/tree/main/strided/dvarianceyc

[@stdlib/stats/strided/nanvarianceyc]: https://github.com/stdlib-js/stats/tree/main/strided/nanvarianceyc

[@stdlib/stats/strided/stdevyc]: https://github.com/stdlib-js/stats/tree/main/strided/stdevyc

[@stdlib/stats/strided/variance]: https://github.com/stdlib-js/stats/tree/main/strided/variance

<!-- </related-links> -->

</section>

<!-- /.links -->
