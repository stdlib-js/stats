/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
* Evaluates the probability density function (PDF) for an arcsine distribution.
*
* @param x - input value
* @returns evaluated PDF
*/
type Unary = ( x: number ) => number;


/**
* Interface for the probability density function (PDF) of an arcsine distribution.
*/
interface PDF {
	/**
	* Evaluates the probability density function (PDF) for an arcsine distribution with minimum support `a` and maximum support `b` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `a >= b`, the function returns `NaN`.
	*
	* @param x - input value
	* @param a - minimum support
	* @param b - maximum support
	* @returns evaluated PDF
	*
	* @example
	* var y = pdf( 2.0, 0.0, 4.0 );
	* // returns ~0.159
	*
	* @example
	* var y = pdf( 5.0, 0.0, 4.0 );
	* // returns 0.0
	*
	* @example
	* var y = pdf( 0.25, 0.0, 1.0 );
	* // returns ~0.735
	*
	* @example
	* var y = pdf( NaN, 0.0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = pdf( 0.0, NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = pdf( 0.0, 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = pdf( 2.0, 3.0, 1.0 );
	* // returns NaN
	*/
	( x: number, a: number, b: number ): number;

	/**
	* Returns a function for evaluating the probability density function (PDF) for an arcsine distribution with minimum support `a` and maximum support `b`.
	*
	* @param a - minimum support
	* @param b - maximum support
	* @returns PDF
	*
	* @example
	* var mypdf = pdf.factory( 0.0, 10.0 );
	* var y = mypdf( 2.0 );
	* // returns ~0.08
	*
	* y = mypdf( 12.0 );
	* // returns 0.0
	*/
	factory( a: number, b: number ): Unary;
}

/**
* Arcsine distribution probability density function (PDF).
*
* @param x - input value
* @param a - minimum support
* @param b - maximum support
* @returns evaluated PDF
*
* @example
* var y = pdf( 3.0, 2.0, 6.0 );
* // returns ~0.184
*
* var mypdf = pdf.factory( 6.0, 7.0 );
* y = mypdf( 7.0 );
* // returns Infinity
*
* y = mypdf( 5.0 );
* // returns 0.0
*/
declare var pdf: PDF;


// EXPORTS //

export = pdf;
