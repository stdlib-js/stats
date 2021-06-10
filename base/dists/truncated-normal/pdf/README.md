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

# Probability Density Function

> [Truncated normal][truncated-normal-distribution] distribution probability density function (PDF).

<section class="intro">

A normally distributed random variable `X` conditional on `a < X < b` is called a [truncated normal][truncated-normal-distribution] distribution.
The [probability density function][pdf] (PDF) for a [truncated normal][truncated-normal-distribution] random variable is

<!-- <equation class="equation" label="eq:truncated_normal_pdf" align="center" raw="f(x;\mu,\sigma,a,b) =  \begin{cases} \frac{\frac{1}{\sigma}\phi(\frac{x - \mu}{\sigma})}{\Phi(\frac{b - \mu}{\sigma}) - \Phi(\frac{a - \mu}{\sigma}) } & \text{ if } a < x < b \\ 0 & \text{ otherwise } \end{cases}" alt="Probability density function (PDF) for a truncated normal distribution."> -->

<div class="equation" align="center" data-raw-text="f(x;\mu,\sigma,a,b) =  \begin{cases} \frac{\frac{1}{\sigma}\phi(\frac{x - \mu}{\sigma})}{\Phi(\frac{b - \mu}{\sigma}) - \Phi(\frac{a - \mu}{\sigma}) } &amp; \text{ if } a &lt; x &lt; b \\ 0 &amp; \text{ otherwise } \end{cases}" data-equation="eq:truncated_normal_pdf">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/stats/base/dists/truncated-normal/pdf/docs/img/equation_truncated_normal_pdf.svg" alt="Probability density function (PDF) for a truncated normal distribution.">
    <br>
</div>

<!-- </equation> -->

where `Phi` and `phi` denote the [cumulative distribution function][cdf] and [density function][pdf] of the [normal][normal-distribution] distribution, respectively, `mu` is the location  and `sigma > 0` is the scale parameter of the distribution. `a` and `b` are the minimum and maximum support.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var pdf = require( '@stdlib/stats/base/dists/truncated-normal/pdf' );
```

#### pdf( x, a, b, mu, sigma )

#### pdf.factory( a, b, mu, sigma )

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript

```

</section>

<!-- /.examples -->

<section class="links">

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[normal-distribution]: https://en.wikipedia.org/wiki/Normal_distribution

[truncated-normal-distribution]: https://en.wikipedia.org/wiki/Truncated_normal_distribution

</section>

<!-- /.links -->
