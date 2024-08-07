<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# Studentized Range

> Studentized range distribution.

<section class="usage">

## Usage

```javascript
var tukey = require( '@stdlib/stats/base/dists/studentized-range' );
```

#### tukey

[Studentized range][studentized-range] distribution.

```javascript
var dist = tukey;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, r, v[, nranges=1] )`][@stdlib/stats/base/dists/studentized-range/cdf]</span><span class="delimiter">: </span><span class="description">Studentized range distribution cumulative distribution function (CDF).</span>
-   <span class="signature">[`quantile( p, r, v[, nranges=1] )`][@stdlib/stats/base/dists/studentized-range/quantile]</span><span class="delimiter">: </span><span class="description">Studentized range distribution quantile function.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var tukey = require( '@stdlib/stats/base/dists/studentized-range' );

/*
* Let's consider an example where we are analyzing the test scores of students in a class.
* We're interested in using the Studentized Range Distribution to analyze the range of scores.
* The distribution has parameters: r (number of means), v (degrees of freedom), and n (number of ranges).
*/

var r = 5.0;
var v = 20.0;
var n = 3.0;

// CDF can be used to calculate the cumulative distribution function at a specific value:
var out = tukey.cdf( 2.0, r, v, n );
// returns ~0.074

// Quantile can also be used to calculate the quantile function at a specific probability:
out = tukey.quantile( 0.9, r, v, n );
// returns ~4.433
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[studentized-range]: https://en.wikipedia.org/wiki/Studentized_range_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/studentized-range/cdf]: https://github.com/stdlib-js/stats/tree/main/base/dists/studentized-range/cdf

[@stdlib/stats/base/dists/studentized-range/quantile]: https://github.com/stdlib-js/stats/tree/main/base/dists/studentized-range/quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
