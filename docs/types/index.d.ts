/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import anova1 = require( './../../anova1' );
import bartlettTest = require( './../../bartlett-test' );
import base = require( './../../base' );
import binomialTest = require( './../../binomial-test' );
import chi2gof = require( './../../chi2gof' );
import chi2test = require( './../../chi2test' );
import flignerTest = require( './../../fligner-test' );
import incr = require( './../../incr' );
import iterators = require( './../../iter' );
import kde2d = require( './../../kde2d' );
import kruskalTest = require( './../../kruskal-test' );
import kstest = require( './../../kstest' );
import leveneTest = require( './../../levene-test' );
import lowess = require( './../../lowess' );
import padjust = require( './../../padjust' );
import pcorrtest = require( './../../pcorrtest' );
import ranks = require( './../../ranks' );
import ttest = require( './../../ttest' );
import ttest2 = require( './../../ttest2' );
import vartest = require( './../../vartest' );
import wilcoxon = require( './../../wilcoxon' );
import ztest = require( './../../ztest' );
import ztest2 = require( './../../ztest2' );

/**
* Interface describing the `stats` namespace.
*/
interface Namespace {
	/**
	* Perform a one-way analysis of variance (ANOVA).
	*
	* @param x - measured values
	* @param factor - array of treatments
	* @param options - function options
	* @param options.alpha - significance level (default: 0.05)
	* @throws must provide valid options
	* @throws `factor` must have at least two unique elements
	* @throws length of `x` must be greater than or equal to two
	* @throws `x` and `factor` must have the same length
	* @returns test results
	*
	* @example
	* var x = [ 1, 3, 5, 2, 4, 6, 8, 7, 10, 11, 12, 15 ];
	* var f = [ 'control', 'treatA', 'treatB', 'treatC', 'control', 'treatA', 'treatB', 'treatC', 'control', 'treatA', 'treatB', 'treatC' ];
	* var out = ns.anova1( x, f );
	* // returns {...}
	*/
	anova1: typeof anova1;

	/**
	* Compute Bartlett’s test for equal variances.
	*
	* @param arr0 - first numeric array
	* @param args - subsequent numeric arrays and an optional options object
	* @throws must provide valid options
	* @returns test results
	*/
	bartlettTest: typeof bartlettTest;

	/**
	* Base (i.e., lower-level) statistical functions.
	*/
	base: typeof base;

	/**
	* Computes an exact test for the success probability in a Bernoulli experiment.
	*
	* @param x - number of successes or two-element array with successes and failures
	* @param n - total number of observations
	* @param options - function options
	* @param options.alpha - significance level (default: 0.05)
	* @param options.alternative - alternative hypothesis (`two-sided`, `less`, or `greater`; default: 'two-sided')
	* @param options.p - success probability under H0 (default: 0.5)
	* @throws must provide valid options
	* @returns test results
	*
	* @example
	* var out = ns.binomialTest( 682, 925 );
	* // returns {...}
	*
	* @example
	* var out = ns.binomialTest( [ 682, 243 ] );
	* // returns {...}
	*/
	binomialTest: typeof binomialTest;

	/**
	* Performs a chi-square goodness-of-fit test.
	*
	* @param x - observation frequencies
	* @param y - expected frequencies or a discrete probability distribution name
	* @param args - probability mass function (PMF) arguments followed by an optional options object
	* @throws first argument must be an array-like object or a 1-dimensional array containing nonnegative integers
	* @throws second argument must be either an array-like object (or a 1-dimensional array) of nonnegative numbers, an array-like object (or a 1-dimensional array) of probabilities summing to one, or a discrete probability distribution name
	* @throws must provide valid options
	* @throws first and second arguments must have the same length
	* @throws first argument must contain at least one element greater than zero
	* @returns test results
	*
	* @example
	* var x = [ 89, 37, 30, 28, 2 ];
	* var p = [ 0.40, 0.20, 0.20, 0.15, 0.05 ];
	*
	* var out = ns.chi2gof( x, p );
	*
	* var o = out.toJSON();
	* // returns { 'pValue': ~0.0406, 'statistic': ~9.9901, ... }
	*/
	chi2gof: typeof chi2gof;

	/**
	* Performs a chi-square independence test.
	*
	* @param x - two-way table of observed frequencies
	* @param options - function options
	* @returns test results
	*
	* @example
	* var x = [ [ 20, 30 ], [ 30, 20 ] ];
	*
	* var out = ns.chi2test( x );
	*
	* var o = out.toJSON();
	* // returns { 'rejected': false, 'alpha': 0.05, 'pValue': ~0.072, ... }
	*/
	chi2test: typeof chi2test;

	/**
	* Computes the Fligner-Killeen test for equal variances.
	*
	* @param arr0 - first numeric array
	* @param args - subsequent numeric arrays and an optional options object
	* @throws must provide valid options
	* @returns test results
	*/
	flignerTest: typeof flignerTest;

	/**
	* Incremental statistics.
	*/
	incr: typeof incr;

	/**
	* Statistical function iterators.
	*/
	iterators: typeof iterators;

	/**
	* Computes two-dimensional kernel density estimates.
	*
	* @param x - array of x values
	* @param y - array of y values
	* @param options - function options
	* @param options.h - array of length two containing the bandwidth values for x and y
	* @param options.n - number of partitions on the x- and y-axes (default: 25)
	* @param options.xMin - lower limit of x
	* @param options.xMax - upper limit of x
	* @param options.yMin - lower limit of y
	* @param options.yMax - upper limit of y
	* @param options.kernel - a string or function to specifying the used kernel function (default: 'gaussian')
	* @throws first and second arguments must be of the same length
	* @throws must provide valid options
	* @returns object containing the density estimates (`z`) along grid points (`x` and `y` values)
	*
	* @example
	* var x = [ 0.6333, 0.8643, 1.0952, 1.3262, 1.5571, 1.7881, 2.019, 2.25, 2.481, 2.7119 ];
	* var y = [ -0.0468, 0.8012, 1.6492, 2.4973, 3.3454, 4.1934, 5.0415, 5.8896, 6.7376, 7.5857 ];
	* var out = ns.kde2d( x, y );
	*/
	kde2d: typeof kde2d;

	/**
	* Computes the Kruskal-Wallis test for equality of medians.
	*
	* @param arr0 - first numeric array
	* @param args - subsequent numeric arrays and an optional options object
	* @throws must provide valid options
	* @returns test results
	*/
	kruskalTest: typeof kruskalTest;

	/**
	* Computes a Kolmogorov-Smirnov goodness-of-fit test.
	*
	* @param x - input array holding numeric values
	* @param y - either a CDF function or a string denoting the name of a distribution
	* @param params - distribution parameters passed to reference CDF followed by an optional options object
	* @throws must provide valid options
	* @returns test result object
	*
	* @example
	* var out = ns.kstest( [ 2.0, 1.0, 5.0, -5.0, 3.0, 0.5, 6.0 ], 'normal', 0.0, 1.0 );
	* // returns { 'pValue': ~0.015, 'statistic': ~0.556, ... }
	*/
	kstest: typeof kstest;

	/**
	* Computes Levene's test for equal variances.
	*
	* @param x - first numeric array
	* @param y - second numeric array
	* @param args - subsequent numeric arrays and an optional options object
	* @throws must provide valid options
	* @returns test results
	*/
	leveneTest: typeof leveneTest;

	/**
	* Locally-weighted polynomial regression via the LOWESS algorithm.
	*
	* ## References
	*
	* -   Cleveland, William S. 1979. "Robust Locally and Smoothing Weighted Regression Scatterplots." _Journal of the American Statistical Association_ 74 (368): 829–36. doi:[10.1080/01621459.1979.10481038](https://doi.org/10.1080/01621459.1979.10481038).
	* -   Cleveland, William S. 1981. "Lowess: A program for smoothing scatterplots by robust locally weighted regression." _American Statistician_ 35 (1): 54–55. doi:[10.2307/2683591](https://doi.org/10.2307/2683591).
	*
	* @param x - ordered x-axis values (abscissa values)
	* @param y - corresponding y-axis values (ordinate values)
	* @param options - function options
	* @param options.f - smoother span (proportion of points which influence smoothing at each value)
	* @param options.nsteps - number of iterations in the robust fit (fewer iterations translates to faster function execution)
	* @param options.delta - nonnegative parameter which may be used to reduce the number of computations
	* @param options.sorted - boolean indicating if the input array `x` is already in sorted order
	* @throws arguments `x` and `y` must have the same length
	* @returns ordered x-values and fitted values
	*/
	lowess: typeof lowess;

	/**
	* Adjusts supplied p-values for multiple comparisons via a specified method.
	*
	* ## Notes
	*
	* -   The `method` parameter can be one of the following values:
	*
	*     -   **bh**: Benjamini-Hochberg procedure controlling the False Discovery Rate (FDR).
	*     -   **bonferroni**: Bonferroni correction fixing the family-wise error rate by multiplying the p-values with the number of comparisons. The Bonferroni correction is usually a too conservative adjustment compared to the others.
	*     -   **by**: Procedure by Benjamini & Yekutieli for controlling the False Discovery Rate (FDR) under dependence.
	*     -   **holm**: Hommel's method controlling family-wise error rate. It is uniformly more powerful than the Bonferroni correction.
	*     -   **hommel**: Hommel's method, which is valid when hypothesis tests are independent. It is more expensive to compute than the other methods.
	*
	* -   By default, the number of comparisons for which the p-values should be corrected is equal to the number of provided p-values. Alternatively, it is possible to set `comparisons` to a number greater than the length of `pvals`. In that case, the methods assume `comparisons - pvals.length` unobserved p-values that are greater than all observed p-values (for Holm's method and the Bonferroni correction) or equal to `1` for the remaining methods.
	*
	* @param pvals - p-values to be adjusted
	* @param method - correction method
	* @param comparisons - number of comparisons (default: pvals.length)
	* @throws comparisons must be greater or equal to the number of elements in `pvals`
	* @returns array containing the corrected p-values
	*
	* @example
	* var pvalues = [ 0.008, 0.03, 0.123, 0.6, 0.2 ];
	* var out = ns.padjust( pvalues, 'bonferroni' );
	* // returns [ 0.04, 0.15, ..., 1, 1 ]
	*
	* @example
	* var pvalues = [ 0.008, 0.03, 0.123, 0.6, 0.2 ];
	* var out = ns.padjust( pvalues, 'by' );
	* // returns [ ~0.091, ~0.171, ..., 1, ~0.571 ]
	*
	* @example
	* var pvalues = [ 0.008, 0.03, 0.123, 0.6, 0.2 ];
	* var out = ns.padjust( pvalues, 'bh' );
	* // returns [ 0.04, 0.075, ..., 0.6, 0.25 ]
	*
	* @example
	* var pvalues = [ 0.008, 0.03, 0.123, 0.6, 0.2 ];
	* var out = ns.padjust( pvalues, 'holm' );
	* // returns [ 0.04, 0.12, ..., 0.6, 0.4 ]
	*
	* @example
	* var pvalues = [ 0.008, 0.03, 0.123, 0.6, 0.2 ];
	* var out = ns.padjust( pvalues, 'hommel' );
	* // returns [ 0.032, 0.12, ..., 0.6, 0.4 ]
	*/
	padjust: typeof padjust;

	/**
	* Computes a Pearson product-moment correlation test between paired samples.
	*
	* ## Notes
	*
	* -   By default, the function performs a t-test for the null hypothesis that the data in arrays or typed arrays `x` and `y` is not correlated. A test against a different population correlation can be carried out by supplying the `rho` option. In this case, a test using the Fisher's z transform is conducted.
	* -   The returned object comes with a `.print()` method which when invoked will print a formatted output of the results of the hypothesis test.
	*
	* @param x - first data array
	* @param y - second data array
	* @param options - function options
	* @param options.alpha - significance level (default: 0.05)
	* @param options.alternative - alternative hypothesis (`two-sided`, `less` or `greater`; default: 'two-sided')
	* @param options.rho - correlation under H0 (default: 0.0)
	* @throws x and y must be arrays of the same length
	* @throws x and y must contain at least four elements
	* @throws must provide valid options
	* @returns test result object
	*
	* @example
	* var x = [ 2, 4, 3, 1, 2, 3 ];
	* var y = [ 3, 2, 4, 1, 2, 4 ];
	* var out = ns.pcorrtest( x, y );
	*/
	pcorrtest: typeof pcorrtest;

	/**
	* Computes the sample ranks for the values of an array-like object.
	*
	* ## Notes
	*
	* -   When all elements of the `array` are different, the ranks are uniquely determined. When there are equal elements (called *ties*), the `method` option determines how they are handled. The default, `'average'`, replaces the ranks of the ties by their mean. Other possible options are `'min'` and `'max'`, which replace the ranks of the ties by their minimum and maximum, respectively. `'dense'` works like `'min'`, with the difference that the next highest element after a tie is assigned the next smallest integer. Finally, `ordinal` gives each element in `arr` a distinct rank, according to the position they appear in.
	* -   The `missing` option is used to specify how to handle missing data. By default, `NaN` or `null` are treated as missing values. `'last'`specifies that missing values are placed last, `'first'` that the are assigned the lowest ranks and `'remove'` means that they are removed from the array before the ranks are calculated.
	*
	* @param x - data array
	* @param options - options object
	* @param options.method - method name determining how ties are treated (`average`, `min`, `max`, `dense`, or `ordinal`; default: 'average')
	* @param options.missing - determines where missing values go (`first`,`last`, or `remove`; default: 'last')
	* @param options.encoding - array of values encoding missing values
	* @throws must provide valid options
	* @returns array containing the computed ranks for the elements of x
	*
	* @example
	* var arr = [ 1.1, 2.0, 3.5, 0.0, 2.4 ];
	* var out = ns.ranks( arr );
	* // returns [ 2, 3, 5, 1, 4 ]
	*
	* @example
	* // Ties are averaged:
	* arr = [ 2, 2, 1, 4, 3 ];
	* out = ns.ranks( arr );
	* // returns [ 2.5, 2.5, 1, 5, 4 ]
	*
	* @example
	* // Missing values are placed last:
	* arr = [ null, 2, 2, 1, 4, 3, NaN, NaN ];
	* out = ns.ranks( arr );
	* // returns [ 6, 2.5, 2.5, 1, 5, 4, 7 ,8 ]
	*/
	ranks: typeof ranks;

	/**
	* Computes a one-sample or paired Student's t test.
	*
	* @param x - input array
	* @param y - optional paired array
	* @param options - function options
	* @param options.alpha - significance level (default: 0.05)
	* @param options.alternative - alternative hypothesis (`two-sided`, `less`, or `greater`; default: 'two-sided')
	* @param options.mu - mean under `H0` (default: 0)
	* @throws first argument must have at least two elements
	* @throws paired array must have the same length as the first argument
	* @throws second argument must be either a numeric array or an options object
	* @throws must provide valid options
	* @returns test results
	*
	* @example
	* var x = [ 4.0, 4.0, 6.0, 6.0, 5.0 ];
	* var opts = {
	*     'mu': 5.0
	* };
	* var out = ns.ttest( x, opts );
	* // returns {...}
	*
	* @example
	* var x = [ 4.0, 4.0, 6.0, 6.0, 5.0 ];
	* var y = [ 5.0, 5.0, 5.5, 7.0, 5.8 ];
	* var opts = {
	*     'alpha': 0.1
	* };
	* var out = ns.ttest( x, opts );
	* // returns {...}
	*/
	ttest: typeof ttest;

	/**
	* Computes a two-sample Student's t test.
	*
	* @param x - first data array
	* @param y - second data array
	* @param options - function options
	* @param options.alpha - significance level (default: 0.05)
	* @param options.alternative - alternative hypothesis (`two-sided`, `less` or `greater`; default: 'two-sided')
	* @param options.difference - difference in means under H0 (default: 0)
	* @param options.variance - whether variances are `equal` or `unequal` under H0 (default: 'unequal')
	* @throws must provide valid options
	* @returns test result object
	*
	* @example
	* var incrspace = require( '@stdlib/array/base/incrspace' );
	*
	* var a = incrspace( 1, 11, 1 );
	* var b = incrspace( 7, 21, 1 );
	*
	* var out = ns.ttest2( a, b );
	* var table = out.print();
	*/
	ttest2: typeof ttest2;

	/**
	* Computes a two-sample F-test for equal variances.
	*
	* @param x - first data array
	* @param y - second data array
	* @param options - function options
	* @param options.alpha - significance level (default: 0.05)
	* @param options.alternative - alternative hypothesis (`two-sided`, `less`, or `greater`; default: 'two-sided')
	* @param options.ratio - ratio of population variances under H0 (default: 1)
	* @throws must provide valid options
	* @returns test result object
	*
	* @example
	* var x = [ 610, 610, 550, 590, 565, 570 ];
	* var y = [ 560, 550, 580, 550, 560, 590, 550, 590 ];
	*
	* var out = ns.vartest( x, y );
	*/
	vartest: typeof vartest;

	/**
	* Computes a Wilcoxon signed rank test.
	*
	* @param x - data array
	* @param y - optional paired data array
	* @param options - function options
	* @param options.alpha - significance level (default: 0.05)
	* @param options.alternative - alternative hypothesis (`two-sided`, `less`, or `greater`; default: 'two-sided')
	* @param options.zeroMethod - method governing how zero-differences are handled (`pratt`, `wilcox`, or `zsplit`; default: 'wilcox')
	* @param options.correction - continuity correction adjusting the Wilcoxon rank statistic by 0.5 towards the mean (default: true)
	* @param options.exact - whether to force using the exact distribution instead of a normal approximation when there are more than fifty data points (default: false)
	* @param options.mu - location parameter under H0 (default: 0)
	* @throws must provide valid options
	* @returns test result object
	*
	* @example
	* var x = [ 1.83, 0.50, 1.62, 2.48, 1.68, 1.88, 1.55, 3.06, 1.30 ];
	* var y = [ 0.878, 0.647, 0.598, 2.05, 1.06, 1.29, 1.06, 3.14, 1.29 ];
	* var out = ns.wilcoxon( x, y );
	*/
	wilcoxon: typeof wilcoxon;

	/**
	* Computes a one-sample z-test.
	*
	* @param x - data array
	* @param sigma - known standard deviation
	* @param options - function options
	* @param options.alpha - significance level (default: 0.05)
	* @param options.alternative - alternative hypothesis (`two-sided`, `less` or `greater`; default: 'two-sided')
	* @param options.mu - mean under H0 (default: 0)
	* @throws sigma argument must be a positive number
	* @throws must provide valid options
	* @returns test result object
	*
	* @example
	* var arr = [ 4, 4, 6, 6, 5 ];
	* var out = ns.ztest( arr, 1.0, {
	*     'mu': 5
	* });
	*
	* @example
	* var arr = [ 4, 4, 6, 6, 5 ];
	* var out = ns.ztest( arr, 1.0, {
	*     'alternative': 'greater'
	* });
	*/
	ztest: typeof ztest;

	/**
	* Computes a two-sample z-test.
	*
	* @param x - first data array
	* @param y - second data array
	* @param sigmax - known standard deviation of first group
	* @param sigmay - known standard deviation of second group
	* @param options - function options
	* @param options.alpha - significance level (default: 0.05)
	* @param options.alternative - alternative hypothesis (`two-sided`, `less` or `greater`; default: 'two-sided')
	* @param options.difference - difference in means under H0 (default: 0)
	* @throws sigmax argument must be a positive number
	* @throws sigmay argument must be a positive number
	* @throws must provide valid options
	* @returns test result object
	*
	* @example
	* var x = [ 2.66, 1.5, 3.25, 0.993, 2.31, 2.41, 1.76, 2.57, 2.62, 1.23 ]; // Drawn from N(2,1)
	* var y = [ 4.88, 2.93, 2.96, 4.5, -0.0603, 4.62, 3.35, 2.98 ]; // Drawn from N(3,2)
	*
	* var out = ns.ztest2( x, y, 1.0, 2.0 );
	* // returns {...}
	*
	* var table = out.print();
	*/
	ztest2: typeof ztest2;
}

/**
* Standard library statistical functions.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
