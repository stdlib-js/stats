/**
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

'use strict';

// MODULES //

var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var objectInverse = require( '@stdlib/utils/object-inverse' );
var enumeration = require( './../../../../base/ztest/alternatives' ).enum;


// VARIABLES //

var hash = objectInverse( enumeration(), {
	'duplicates': false
});


// MAIN //

/**
* Returns the Z-test alternative hypothesis string associated with a Z-test alternative hypothesis enumeration constant.
*
* @param {integer} value - alternative hypothesis enumeration constant
* @returns {(string|null)} alternative hypothesis string or null
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
function enum2str( value ) {
	var v = hash[ value ];
	return ( isString( v ) ) ? v : null; // note: we include this guard to prevent walking the prototype chain
}


// EXPORTS //

module.exports = enum2str;
