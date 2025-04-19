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
* Evaluates the probability density function (PDF) for a Bradford distribution.
*
* @param x - input value
* @returns evaluated PDF
*/
type Unary = ( x: number ) => number;


/**
* Interface for the probability density function (PDF) of a Bradford distribution.
*/
interface PDF {
	/**
	* Evaluates the probability density function (PDF) for a Bradford distribution with shape parameter `c` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `c <= 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param c - shape parameter
	* @returns evaluated PDF
	*
	* @example
	* var v = pdf( 0.1, 0.1 );
	* // returns ~1.039
	*
	* @example
	* var v = pdf( 0.5, 5.0 );
	* // returns ~0.797
	*
	* @example
	* var v = pdf( 1.0, 10.0 );
	* // returns ~0.379
	*
	* @example
	* var y = pdf( 2.0, 0.5 );
	* // returns 0.0
	*
	* @example
	* var y = pdf( -1.0, 0.5 );
	* // returns 0.0
	*
	* @example
	* var y = pdf( 0.5, 0.0 );
	* // returns NaN
	*
	* @example
	* var y = pdf( 0.5, -5.0 );
	* // returns NaN
	*
	* @example
	* var y = pdf( NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = pdf( 1.0, NaN );
	* // returns NaN
	*/
	( x: number, c: number ): number;

	/**
	* Returns a function for evaluating the probability density function (PDF) for a Bradford distribution with shape parameter `c`.
	*
	* @param c - shape parameter
	* @returns PDF
	*
	* @example
	* var mypdf = pdf.factory( 5.0 );
	* var y = mypdf( 0.5 );
	* // returns ~0.797
	*
	* y = mypdf( 1.0 );
	* // returns ~0.465
	*/
	factory( c: number ): Unary;
}

/**
* Bradford distribution probability density function (PDF).
*
* @param x - input value
* @param c - shape parameter
* @returns evaluated PDF
*
* @example
* var y = pdf( 0.5, 5.0 );
* // returns ~0.797
*
* var mypdf = pdf.factory( 5.0 );
* y = mypdf( 0.5 );
* // returns ~0.797
*
* y = mypdf( 1.0 );
* // returns ~0.465
*/
declare var pdf: PDF;


// EXPORTS //

export = pdf;
