/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

/**
* Alternative hypothesis.
*/
type Alternative = 'two-sided' | 'greater' | 'less';

/**
* Interface describing options when serializing a results object to a string.
*/
interface Options {
	/**
	* Number of digits to display after decimal points. Default: 4.
	*/
	digits?: number;

	/**
	* Boolean indicating whether to show the test decision. Default: true.
	*/
	decision?: boolean;
}

/**
* Serializes a results object as a string.
*
* @returns string representation
*/
type toString = ( options?: Options ) => string;

/**
* Serializes a results object as a JSON object.
*
* @returns JSON representation
*/
type toJSON = () => BaseResults;

/**
* Interface describing a "base" results object.
*/
interface BaseResults {
	/**
	* Boolean indicating whether the null hypothesis was rejected.
	*/
	rejected: boolean;

	/**
	* Alternative hypothesis.
	*/
	alternative: Alternative;

	/**
	* Significance level.
	*/
	alpha: number;

	/**
	* p-value.
	*/
	pValue: number;

	/**
	* Test statistic.
	*/
	statistic: number;

	/**
	* Confidence interval.
	*/
	ci: Float64Array;

	/**
	* Value of the mean under the null hypothesis
	*/
	nullValue: number;

	/**
	* Standard error of the mean.
	*/
	sd: number;
}

/**
* Interface describing a results object.
*/
interface Results extends BaseResults {
	/**
	* Serializes results as formatted test output.
	*/
	toString: toString;

	/**
	* Serializes results as JSON.
	*/
	toJSON: toJSON;
}

/**
* Interface describing `dztest`.
*/
interface Routine {
	/**
	* Computes a one-sample Z-test for a double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param alternative - alternative hypothesis
	* @param alpha - significance level
	* @param mu - mean under the null hypothesis
	* @param sigma - known standard deviation
	* @param x - input array
	* @param strideX - stride length
	* @param out - output results object
	* @returns results object
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Results = require( './../../../../base/ztest/one-sample/results/float64' );
	*
	* var x = new Float64Array( [ 4.0, 4.0, 6.0, 6.0, 5.0 ] );
	*
	* var results = new Results();
	* var out = dztest( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, results );
	* // returns {...}
	*
	* var bool = ( out === results );
	* // returns true
	*/
	<T extends BaseResults>( N: number, alternative: Alternative, alpha: number, mu: number, sigma: number, x: Float64Array, strideX: number, out: T ): Results;

	/**
	* Computes a one-sample Z-test for a double-precision floating-point strided array using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param alternative - alternative hypothesis
	* @param alpha - significance level
	* @param mu - mean under the null hypothesis
	* @param sigma - known standard deviation
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @param out - output results object
	* @returns results object
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Results = require( './../../../../base/ztest/one-sample/results/float64' );
	*
	* var x = new Float64Array( [ 4.0, 4.0, 6.0, 6.0, 5.0 ] );
	*
	* var results = new Results();
	* var out = dztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, results );
	* // returns {...}
	*
	* var bool = ( out === results );
	* // returns true
	*/
	ndarray<T extends BaseResults>( N: number, alternative: Alternative, alpha: number, mu: number, sigma: number, x: Float64Array, strideX: number, offsetX: number, out: T ): Results;
}

/**
* Computes a one-sample Z-test for a double-precision floating-point strided array.
*
* @param N - number of indexed elements
* @param alternative - alternative hypothesis
* @param alpha - significance level
* @param mu - mean under the null hypothesis
* @param sigma - known standard deviation
* @param x - input array
* @param strideX - stride length
* @param out - output results object
* @returns results object
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var Results = require( '@stdlib/stats/base/ztest/one-sample/results/float64' );
*
* var x = new Float64Array( [ 4.0, 4.0, 6.0, 6.0, 5.0 ] );
*
* var results = new Results();
* var out = dztest( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, results );
* // returns {...}
*
* var bool = ( out === results );
* // returns true
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var Results = require( '@stdlib/stats/base/ztest/one-sample/results/float64' );
*
* var x = new Float64Array( [ 4.0, 4.0, 6.0, 6.0, 5.0 ] );
*
* var results = new Results();
* var out = dztest.ndarray( x.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, results );
* // returns {...}
*
* var bool = ( out === results );
* // returns true
*/
declare var dztest: Routine;


// EXPORTS //

export = dztest;
