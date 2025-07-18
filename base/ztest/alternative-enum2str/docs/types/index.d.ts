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
* Returns the Z-test alternative hypothesis string associated with a Z-test alternative hypothesis enumeration constant.
*
* @param value - enumeration constant
* @returns alternative hypothesis string
*
* @example
* var str2enum = require( '@stdlib/stats/base/ztest/alternative-str2enum' );
*
* var v = str2enum( 'two-sided' );
* // returns <number>
*
* var s = enum2str( v );
* // returns 'two-sided'
*/
declare function enum2str( value: number ): string | null;


// EXPORTS //

export = enum2str;
