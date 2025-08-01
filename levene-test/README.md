<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# Levene's Test

> Compute Levene's test for equal variances.

<section class="intro">

Levene's test is used to test the null hypothesis that the variances of `k` groups are equal against the alternative that at least two of them are different.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var leveneTest = require( '@stdlib/stats/levene-test' );
```

#### leveneTest( x\[, y, ..., z]\[, opts] )

Calculates Levene's test for input arrays `x`, `y`, ..., `z` holding numeric observations.

```javascript
// Data from Hollander & Wolfe (1973), p. 116:
var x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
var y = [ 3.8, 2.7, 4.0, 2.4 ];
var z = [ 2.8, 3.4, 3.7, 2.2, 2.0 ];

var out = leveneTest( x, y, z );
/* returns
    {
        'rejected': false,
        'alpha': 0.05,
        'df': [ 2, 11 ],
        'pValue': ~0.1733,
        'statistic': ~2.0638,
        ...
    }
*/
```

The function accepts the following `options`:

-   **alpha**: `number` on the interval `[0,1]` giving the significance level of the hypothesis test. Default: `0.05`.
-   **groups**: an `array` of group indicators. Only applicable when providing a single numeric array holding all observations.

By default, the test is carried out at a significance level of `0.05`. To test at a different significance level, set the `alpha` option.

```javascript
var x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
var y = [ 3.8, 2.7, 4.0, 2.4 ];
var z = [ 2.8, 3.4, 3.7, 2.2, 2.0 ];

var out = leveneTest( x, y, z, {
    'alpha': 0.01
});
/* returns
    {
        'rejected': false,
        'alpha': 0.01,
        'df': [ 2, 11 ],
        'pValue': ~0.1733,
        'statistic': ~2.0638,
        ...
    }
*/
```

In addition to providing multiple arrays, the function supports providing a single numeric array holding all observations along with an array of group indicators.

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
var out = leveneTest( arr, {
    'groups': groups
});
```

The returned object comes with a `.print()` method which, when invoked, prints a formatted output of test results. The method accepts the following options:

-   **digits**: number of decimal digits displayed for the outputs. Default: `4`.
-   **decision**: `boolean` indicating whether to print the test decision. Default: `true`.

```javascript
var x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
var y = [ 3.8, 2.7, 4.0, 2.4 ];
var z = [ 2.8, 3.4, 3.7, 2.2, 2.0 ];

var out = leveneTest( x, y, z );
console.log( out.print() );
/* =>
    Levene's test for Homogeneity of Variance

    Null hypothesis: The variances in all groups are the same.

        df 1: 2
        df 2: 11
        F score: 2.0638
        P Value: 0.1733

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var leveneTest = require( '@stdlib/stats/levene-test' );

// Data from Hollander & Wolfe (1973), p. 116:
var x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
var y = [ 3.8, 2.7, 4.0, 2.4 ];
var z = [ 2.8, 3.4, 3.7, 2.2, 2.0 ];

var out = leveneTest( x, y, z );
/* returns
    {
        'rejected': false,
        'alpha': 0.05,
        'df': [ 2, 11 ],
        'pValue': ~0.1733,
        'statistic': ~2.0638,
        ...
    }
*/

var table = out.print();
/* returns
    Levene's test for Homogeneity of Variance

    Null hypothesis: The variances in all groups are the same.

        df 1: 2
        df 2: 11
        F score: 2.0638
        P Value: 0.1733

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
-   <span class="package-name">[`@stdlib/stats/bartlett-test`][@stdlib/stats/bartlett-test]</span><span class="delimiter">: </span><span class="description">Bartlett’s test for equal variances.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/stats/vartest]: https://github.com/stdlib-js/stats/tree/main/vartest

[@stdlib/stats/bartlett-test]: https://github.com/stdlib-js/stats/tree/main/bartlett-test

<!-- </related-links> -->

</section>

<!-- /.links -->
