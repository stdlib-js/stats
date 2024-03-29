/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var tape = require( 'tape' );
var bernoulliPMF = require( './../../base/dists/bernoulli/pmf' );
var binomialPMF = require( './../../base/dists/binomial/pmf' );
var geometricPMF = require( './../../base/dists/geometric/pmf' );
var hypergeometricPMF = require( './../../base/dists/hypergeometric/pmf' );
var negativeBinomialPMF = require( './../../base/dists/negative-binomial/pmf' );
var discreteUniformPMF = require( './../../base/dists/discrete-uniform/pmf' );
var poissonPMF = require( './../../base/dists/poisson/pmf' );
var getPMF = require( './../lib/get_pmf.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof getPMF, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the correct PMF if provided a valid input string', function test( t ) {
	t.equal( getPMF( 'bernoulli' ), bernoulliPMF );
	t.equal( getPMF( 'binomial' ), binomialPMF );
	t.equal( getPMF( 'discrete-uniform' ), discreteUniformPMF );
	t.equal( getPMF( 'geometric' ), geometricPMF );
	t.equal( getPMF( 'hypergeometric' ), hypergeometricPMF );
	t.equal( getPMF( 'negative-binomial' ), negativeBinomialPMF );
	t.equal( getPMF( 'poisson' ), poissonPMF );
	t.end();
});

tape( 'the function returns an error if provided the name of a continuous distribution', function test( t ) {
	var values;
	var out;
	var i;

	values = [
		'beta',
		'cauchy',
		'chisquare',
		'erlang',
		'exponential',
		'f',
		'gamma',
		'gumbel',
		'invgamma',
		'laplace',
		'logistic',
		'lognormal',
		'normal',
		'pareto-type1',
		'rayleigh',
		't',
		'triangular',
		'uniform',
		'weibull'
	];

	for ( i = 0; i < values.length; i++ ) {
		out = getPMF( values[ i ] );
		t.equal( out instanceof Error, true, 'returns an error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided a name which does not match any distribution', function test( t ) {
	var values;
	var out;
	var i;

	values = [
		'not_a_distribution',
		'5',
		5,
		true,
		false,
		void 0,
		null,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		out = getPMF( values[ i ] );
		t.equal( out instanceof Error, true, 'returns an error when provided '+values[i] );
	}
	t.end();
});
