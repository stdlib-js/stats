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

# bartlettTest

> Compute Bartlett’s test for equal variances.

<section class="intro">

Bartlett's test is used to test the null hypothesis that the variances of k groups are equal against the alternative that at least two of them are different.

For `k` groups each with `n_i` observations, the test statistic is

<!-- <equation class="equation" label="eq:bartlett-test-statistic" align="center" raw="\chi^2 = \frac{\displaystyle N\ln(S^2) - \sum_{i=0}^{k-1} n_i \ln(S_i^2)}{\displaystyle 1 + \frac{1}{3(k-1)}\left(\sum_{i=0}^{k-1} \frac{1}{n_i} - \frac{1}{N}\right)}" alt="Equation for Bartlett's test statistic."> -->

```math
\chi^2 = \frac{\displaystyle N\ln(S^2) - \sum_{i=0}^{k-1} n_i \ln(S_i^2)}{\displaystyle 1 + \frac{1}{3(k-1)}\left(\sum_{i=0}^{k-1} \frac{1}{n_i} - \frac{1}{N}\right)}
```

<!-- <div class="equation" align="center" data-raw-text="\chi^2 = \frac{\displaystyle N\ln(S^2) - \sum_{i=0}^{k-1} n_i \ln(S_i^2)}{\displaystyle 1 + \frac{1}{3(k-1)}\left(\sum_{i=0}^{k-1} \frac{1}{n_i} - \frac{1}{N}\right)}" data-equation="eq:bartlett-test-statistic">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@4b1db4ebd815eb54bf53a3fa132b992604743d9c/lib/node_modules/@stdlib/stats/bartlett-test/docs/img/equation_bartlett-test-statistic.svg" alt="Equation for Bartlett's test statistic.">
    <br>
</div> -->

<!-- </equation> -->

where `N` is the total number of observations, `S_i` are the biased group-level variances and `S^2` is a (biased) pooled estimate for the variance. Under the null hypothesis, the test statistic follows a _chi-square_ distribution with `df = k - 1` degrees of freedom.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var bartlettTest = require( '@stdlib/stats/bartlett-test' );
```

#### bartlettTest( a\[,b,...,k]\[, opts] )

For input arrays `a`, `b`, ... holding numeric observations, this function calculates Bartlett’s test, which tests the null hypothesis that the variances in all `k` groups are the same. 

```javascript
// Data from Hollander & Wolfe (1973), p. 116:
var x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
var y = [ 3.8, 2.7, 4.0, 2.4 ];
var z = [ 2.8, 3.4, 3.7, 2.2, 2.0 ];

var out = bartlettTest( x, y, z );
/* returns
    {
        'rejected': false,
        'alpha': 0.05,
        'df': 2,
        'pValue': ~0.573,
        'statistic': ~1.112,
        ...
    }
*/
```

The function accepts the following `options`:

-   **alpha**: `number` in the interval `[0,1]` giving the significance level of the hypothesis test. Default: `0.05`.
-   **groups**: an `array` of group indicators. If set, the function assumes that only a single numeric array is provided holding all observations.

By default, the test is carried out at a significance level of `0.05`. To choose a custom significance level, set the `alpha` option.

```javascript
var x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
var y = [ 3.8, 2.7, 4.0, 2.4 ];
var z = [ 2.8, 3.4, 3.7, 2.2, 2.0 ];

var out = bartlettTest( x, y, z, {
    'alpha': 0.01
});
/* returns
    {
        'rejected': false,
        'alpha': 0.01,
        'df': 2,
        'pValue': ~0.573,
        'statistic': ~1.112,
        ...
    }
*/
```

The function provides an alternate interface by supplying an array of group indicators to the `groups` option. In this case, it is assumed that only a single numeric array holding all observations is provided to the function.

<!-- eslint-disable array-element-newline -->

```javascript
var arr = [
    2.9, 3.0, 2.5, 2.6, 3.2,
    3.8, 2.7, 4.0, 2.4,
    2.8, 3.4, 3.7, 2.2, 2.0
];
var groups = [
    'a', 'a', 'a', 'a', 'a',
    'b', 'b', 'b', 'b',
    'c', 'c', 'c', 'c', 'c'
];
var out = bartlettTest( arr, {
    'groups': groups
});
```

The returned object comes with a `.print()` method which when invoked will print a formatted output of the results of the hypothesis test. `print` accepts a `digits` option that controls the number of decimal digits displayed for the outputs and a `decision` option, which when set to `false` will hide the test decision.

```javascript
var x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
var y = [ 3.8, 2.7, 4.0, 2.4 ];
var z = [ 2.8, 3.4, 3.7, 2.2, 2.0 ];

var out = bartlettTest( x, y, z );
console.log( out.print() );
/* =>
    Bartlett's test of equal variances

    Null hypothesis: The variances in all groups are the same.

        pValue: 0.5735
        statistic: 1.1122
        df: 2

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var bartlettTest = require( '@stdlib/stats/bartlett-test' );

// Data from Hollander & Wolfe (1973), p. 116:
var x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
var y = [ 3.8, 2.7, 4.0, 2.4 ];
var z = [ 2.8, 3.4, 3.7, 2.2, 2.0 ];

var out = bartlettTest( x, y, z );
/* returns
    {
        'rejected': false,
        'alpha': 0.05,
        'df': 2,
        'pValue': ~0.573,
        'statistic': ~1.112,
        ...
    }
*/

var table = out.print();
/* returns
    Bartlett's test of equal variances

    Null hypothesis: The variances in all groups are the same.

        pValue: 0.5735
        statistic: 1.1122
        df: 2

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/
```

</section>

<!-- /.examples -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/vartest`][@stdlib/stats/vartest]</span><span class="delimiter">: </span><span class="description">two-sample F-test for equal variances.</span>
-   <span class="package-name">[`@stdlib/stats/levene-test`][@stdlib/stats/levene-test]</span><span class="delimiter">: </span><span class="description">Levene's test for equal variances.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/stats/vartest]: https://github.com/stdlib-js/stats/tree/main/vartest

[@stdlib/stats/levene-test]: https://github.com/stdlib-js/stats/tree/main/levene-test

<!-- </related-links> -->

</section>

<!-- /.links -->
