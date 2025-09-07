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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Stats

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Statistical functions.



<section class="usage">

## Usage

```javascript
import statistics from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { anova1, array, bartlettTest, base, binomialTest, chi2gof, chi2test, cumax, cumin, flignerTest, incr, iterators, kde2d, kruskalTest, kstest, leveneTest, lowess, max, maxBy, maxabs, mean, min, minBy, minabs, nanmax, nanmean, nanmin, padjust, pcorrtest, range, ranks, strided, ttest, ttest2, vartest, wilcoxon, ztest, ztest2 } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats@deno/mod.js';
```

#### statistics

Namespace containing statistical functions.

```javascript
var stats = statistics;
// returns {...}
```

The namespace exposes the following statistical tests:

<!-- <toc pattern="+(*test*|chi2gof|anova1|wilcoxon)"> -->

<div class="namespace-toc">

-   <span class="signature">[`anova1( x, factor[, opts] )`][@stdlib/stats/anova1]</span><span class="delimiter">: </span><span class="description">perform a one-way analysis of variance.</span>
-   <span class="signature">[`bartlettTest( a[,b,...,k][, opts] )`][@stdlib/stats/bartlett-test]</span><span class="delimiter">: </span><span class="description">compute Bartlett’s test for equal variances.</span>
-   <span class="signature">[`binomialTest( x[, n][, opts] )`][@stdlib/stats/binomial-test]</span><span class="delimiter">: </span><span class="description">exact test for the success probability in a Bernoulli experiment.</span>
-   <span class="signature">[`chi2gof( x, y[, ...args][, options] )`][@stdlib/stats/chi2gof]</span><span class="delimiter">: </span><span class="description">perform a chi-square goodness-of-fit test.</span>
-   <span class="signature">[`chi2test( x[, options] )`][@stdlib/stats/chi2test]</span><span class="delimiter">: </span><span class="description">perform a chi-square independence test.</span>
-   <span class="signature">[`flignerTest( a[,b,...,k][, opts] )`][@stdlib/stats/fligner-test]</span><span class="delimiter">: </span><span class="description">compute the Fligner-Killeen test for equal variances.</span>
-   <span class="signature">[`kruskalTest( a[,b,...,k][, opts] )`][@stdlib/stats/kruskal-test]</span><span class="delimiter">: </span><span class="description">compute the Kruskal-Wallis test for equal medians.</span>
-   <span class="signature">[`kstest( x, y[, ...params][, opts] )`][@stdlib/stats/kstest]</span><span class="delimiter">: </span><span class="description">one-sample Kolmogorov-Smirnov goodness-of-fit test.</span>
-   <span class="signature">[`leveneTest( x[, y, ..., z][, opts] )`][@stdlib/stats/levene-test]</span><span class="delimiter">: </span><span class="description">compute Levene's test for equal variances.</span>
-   <span class="signature">[`pcorrtest( x, y[, opts] )`][@stdlib/stats/pcorrtest]</span><span class="delimiter">: </span><span class="description">compute a Pearson product-moment correlation test between paired samples.</span>
-   <span class="signature">[`ttest( x[, y][, opts] )`][@stdlib/stats/ttest]</span><span class="delimiter">: </span><span class="description">one-sample and paired Student's t-Test.</span>
-   <span class="signature">[`ttest2( x, y[, opts] )`][@stdlib/stats/ttest2]</span><span class="delimiter">: </span><span class="description">two-sample Student's t-Test.</span>
-   <span class="signature">[`vartest( x, y[, opts] )`][@stdlib/stats/vartest]</span><span class="delimiter">: </span><span class="description">two-sample F-test for equal variances.</span>
-   <span class="signature">[`wilcoxon( x[, y][, opts] )`][@stdlib/stats/wilcoxon]</span><span class="delimiter">: </span><span class="description">one-sample and paired Wilcoxon signed rank test.</span>
-   <span class="signature">[`ztest( x, sigma[, opts] )`][@stdlib/stats/ztest]</span><span class="delimiter">: </span><span class="description">one-sample z-Test.</span>
-   <span class="signature">[`ztest2( x, y, sigmax, sigmay[, opts] )`][@stdlib/stats/ztest2]</span><span class="delimiter">: </span><span class="description">two-sample z-Test.</span>

</div>

<!-- </toc> -->

In addition, it contains an assortment of functions for computing statistics incrementally as part of the `incr` sub-namespace and functions for computing statistics over iterators in the `iterators` namespace.

<!-- <toc pattern="+(incr|iter)"> -->

<div class="namespace-toc">

-   <span class="signature">[`incr`][@stdlib/stats/incr]</span><span class="delimiter">: </span><span class="description">incremental statistics.</span>
-   <span class="signature">[`iterators`][@stdlib/stats/iter]</span><span class="delimiter">: </span><span class="description">statistical function iterators.</span>

</div>

<!-- </toc> -->

The namespace further contains functions for computing statistics on arrays as part of the `array` sub-namespace and functions for computing statistics on strided arrays in the `strided` namespace.

<!-- <toc pattern="+(array|strided)"> -->

<div class="namespace-toc">

-   <span class="signature">[`array`][@stdlib/stats/array]</span><span class="delimiter">: </span><span class="description">statistical functions for arrays.</span>
-   <span class="signature">[`strided`][@stdlib/stats/strided]</span><span class="delimiter">: </span><span class="description">statistical operations for strided arrays.</span>

</div>

<!-- </toc> -->

The `base` sub-namespace contains lower-level statistical functions, including a `dists` namespace containing functions related to a wide assortment of probability distributions.

<!-- <toc pattern="+(base)"> -->

<div class="namespace-toc">

-   <span class="signature">[`base`][@stdlib/stats/base]</span><span class="delimiter">: </span><span class="description">base (i.e., lower-level) statistical functions.</span>

</div>

<!-- </toc> -->

Other statistical functions included are:

<!-- <toc pattern="*" ignore="+(*test*|chi2gof|anova1)" ignore="incr" ignore="iterators" ignore="base" ignore="array" ignore="strided" > -->

<div class="namespace-toc">

-   <span class="signature">[`cumax( x[, options] )`][@stdlib/stats/cumax]</span><span class="delimiter">: </span><span class="description">compute the cumulative maximum value along one or more ndarray dimensions.</span>
-   <span class="signature">[`kde2d()`][@stdlib/stats/kde2d]</span><span class="delimiter">: </span><span class="description">two-dimensional kernel density estimation.</span>
-   <span class="signature">[`lowess( x, y[, opts] )`][@stdlib/stats/lowess]</span><span class="delimiter">: </span><span class="description">locally-weighted polynomial regression via the LOWESS algorithm.</span>
-   <span class="signature">[`maxBy( x[, options], clbk[, thisArg] )`][@stdlib/stats/max-by]</span><span class="delimiter">: </span><span class="description">compute the maximum value along one or more ndarray dimensions according to a callback function.</span>
-   <span class="signature">[`max( x[, options] )`][@stdlib/stats/max]</span><span class="delimiter">: </span><span class="description">compute the maximum value along one or more ndarray dimensions.</span>
-   <span class="signature">[`padjust( pvals, method[, comparisons] )`][@stdlib/stats/padjust]</span><span class="delimiter">: </span><span class="description">adjust supplied p-values for multiple comparisons.</span>
-   <span class="signature">[`ranks( arr[, opts] )`][@stdlib/stats/ranks]</span><span class="delimiter">: </span><span class="description">compute ranks for values of an array-like object.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils/keys@deno/mod.js';
import statistics from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats@deno/mod.js';

console.log( objectKeys( statistics ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats

[test-image]: https://github.com/stdlib-js/stats/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats/main/LICENSE

<!-- <toc-links> -->

[@stdlib/stats/cumax]: https://github.com/stdlib-js/stats/tree/main/cumax

[@stdlib/stats/kde2d]: https://github.com/stdlib-js/stats/tree/main/kde2d

[@stdlib/stats/lowess]: https://github.com/stdlib-js/stats/tree/main/lowess

[@stdlib/stats/max-by]: https://github.com/stdlib-js/stats/tree/main/max-by

[@stdlib/stats/max]: https://github.com/stdlib-js/stats/tree/main/max

[@stdlib/stats/padjust]: https://github.com/stdlib-js/stats/tree/main/padjust

[@stdlib/stats/ranks]: https://github.com/stdlib-js/stats/tree/main/ranks

[@stdlib/stats/base]: https://github.com/stdlib-js/stats/tree/main/base

[@stdlib/stats/array]: https://github.com/stdlib-js/stats/tree/main/array

[@stdlib/stats/strided]: https://github.com/stdlib-js/stats/tree/main/strided

[@stdlib/stats/incr]: https://github.com/stdlib-js/stats/tree/main/incr

[@stdlib/stats/iter]: https://github.com/stdlib-js/stats/tree/main/iter

[@stdlib/stats/anova1]: https://github.com/stdlib-js/stats/tree/main/anova1

[@stdlib/stats/bartlett-test]: https://github.com/stdlib-js/stats/tree/main/bartlett-test

[@stdlib/stats/binomial-test]: https://github.com/stdlib-js/stats/tree/main/binomial-test

[@stdlib/stats/chi2gof]: https://github.com/stdlib-js/stats/tree/main/chi2gof

[@stdlib/stats/chi2test]: https://github.com/stdlib-js/stats/tree/main/chi2test

[@stdlib/stats/fligner-test]: https://github.com/stdlib-js/stats/tree/main/fligner-test

[@stdlib/stats/kruskal-test]: https://github.com/stdlib-js/stats/tree/main/kruskal-test

[@stdlib/stats/kstest]: https://github.com/stdlib-js/stats/tree/main/kstest

[@stdlib/stats/levene-test]: https://github.com/stdlib-js/stats/tree/main/levene-test

[@stdlib/stats/pcorrtest]: https://github.com/stdlib-js/stats/tree/main/pcorrtest

[@stdlib/stats/ttest]: https://github.com/stdlib-js/stats/tree/main/ttest

[@stdlib/stats/ttest2]: https://github.com/stdlib-js/stats/tree/main/ttest2

[@stdlib/stats/vartest]: https://github.com/stdlib-js/stats/tree/main/vartest

[@stdlib/stats/wilcoxon]: https://github.com/stdlib-js/stats/tree/main/wilcoxon

[@stdlib/stats/ztest]: https://github.com/stdlib-js/stats/tree/main/ztest

[@stdlib/stats/ztest2]: https://github.com/stdlib-js/stats/tree/main/ztest2

<!-- </toc-links> -->

</section>

<!-- /.links -->
