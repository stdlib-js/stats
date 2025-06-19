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

# Float32Results

> Create a one-sample Z-test single-precision floating-point results object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var Float32Results = require( '@stdlib/stats/base/ztest/one-sample/results/float32' );
```

#### Float32Results( \[arg\[, byteOffset\[, byteLength]]] )

Returns a one-sample Z-test single-precision floating-point results object.

```javascript
var results = new Float32Results();
// returns {...}
```

The function supports the following parameters:

-   **arg**: an [`ArrayBuffer`][@stdlib/array/buffer] or a data object (_optional_).
-   **byteOffset**: byte offset (_optional_).
-   **byteLength**: maximum byte length (_optional_).

A data object argument is an object having one or more of the following properties:

-   **rejected**: boolean indicating whether the null hypothesis was rejected.
-   **alternative**: the alternative hypothesis (e.g., `'two-sided'`, `'less'`, or `'greater'`).
-   **alpha**: significance level.
-   **pValue**: p-value.
-   **statistic**: test statistic.
-   **ci**: confidence interval as a [`Float32Array`][@stdlib/array/float32].
-   **nullValue**: mean under the null hypothesis.
-   **sd**: standard error of the mean.

#### Float32Results.prototype.rejected

Boolean indicating whether the null hypothesis was rejected.

```javascript
var results = new Float32Results();
// returns {...}

// ...

var v = results.rejected;
// returns <boolean>
```

#### Float32Results.prototype.alternative

The alternative hypothesis.

```javascript
var results = new Float32Results();
// returns {...}

// ...

var v = results.alternative;
// returns <string>
```

#### Float32Results.prototype.alpha

Significance level.

```javascript
var results = new Float32Results();
// returns {...}

// ...

var v = results.alpha;
// returns <number>
```

#### Float32Results.prototype.pValue

The test p-value.

```javascript
var results = new Float32Results();
// returns {...}

// ...

var v = results.pValue;
// returns <number>
```

#### Float32Results.prototype.statistic

The test statistic.

```javascript
var results = new Float32Results();
// returns {...}

// ...

var v = results.statistic;
// returns <number>
```

#### Float32Results.prototype.ci

Confidence interval.

```javascript
var results = new Float32Results();
// returns {...}

// ...

var v = results.ci;
// returns <Float32Array>
```

#### Float32Results.prototype.nullValue

Mean under the null hypothesis.

```javascript
var results = new Float32Results();
// returns {...}

// ...

var v = results.nullValue;
// returns <number>
```

#### Float32Results.prototype.sd

Standard error of the mean.

```javascript
var results = new Float32Results();
// returns {...}

// ...

var v = results.sd;
// returns <number>
```

#### Float32Results.prototype.toString( \[options] )

Serializes a results object to a formatted string.

```javascript
var results = new Float32Results();
// returns {...}

// ...

var v = results.toString();
// returns <string>
```

The method supports the following options:

-   **digits**: number of digits to display after decimal points. Default: `4`.
-   **decision**: boolean indicating whether to show the test decision. Default: `true`.

Example output:

```text

One-sample Z-test

Alternative hypothesis: True mean is less than 1.0

    pValue: 0.0406
    statistic: 9.9901
    95% confidence interval: [9.7821, 10.4451]

Test Decision: Reject null in favor of alternative at 5% significance level

```

#### Float32Results.prototype.toJSON( \[options] )

Serializes a results object as a JSON object.

```javascript
var results = new Float32Results();
// returns {...}

// ...

var v = results.toJSON();
// returns {...}
```

`JSON.stringify()` implicitly calls this method when stringifying a results instance.

#### Float32Results.prototype.toDataView()

Returns a [`DataView`][@stdlib/array/dataview] of a results object.

```javascript
var results = new Float32Results();
// returns {...}

// ...

var v = results.toDataView();
// returns <DataView>
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A results object is a [`struct`][@stdlib/dstructs/struct] providing a fixed-width composite data structure for storing one-sample Z-test results and providing an ABI-stable data layout for JavaScript-C interoperation.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var Results = require( '@stdlib/stats/base/ztest/one-sample/results/float32' );

var results = new Results({
    'rejected': true,
    'alpha': 0.05,
    'pValue': 0.3364,
    'statistic': 11.7586,
    'nullValue': 0.0,
    'sd': 0.4563,
    'ci': new Float32Array( [ 9.9983, 11.4123 ] ),
    'alternative': 'two-sided'
});

var str = results.toString({
    'format': 'linear'
});
console.log( str );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/stats/base/ztest/one-sample/results/float32.h"
```

#### stdlib_stats_ztest_one_sample_float32_results

Structure for holding single-precision floating-point test results.

```c
#include <stdbool.h>
#include <stdint.h>

struct stdlib_stats_ztest_one_sample_float32_results {
    // Boolean indicating whether the null hypothesis was rejected:
    bool rejected;

    // Alternative hypothesis:
    int8_t alternative;

    // Significance level:
    float alpha;

    // p-value:
    float pValue;

    // Test statistic:
    float statistic;

    // Confidence interval:
    float ci[ 2 ];

    // Mean value under the null hypothesis:
    float nullValue;

    // Standard error of the mean:
    float sd;
};
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/dstructs/struct]: https://github.com/stdlib-js/dstructs-struct

[@stdlib/array/dataview]: https://github.com/stdlib-js/array-dataview

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[@stdlib/array/buffer]: https://github.com/stdlib-js/array-buffer

</section>

<!-- /.links -->
