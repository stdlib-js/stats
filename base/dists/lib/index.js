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

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace dist
*/
var dist = {};

/**
* @name arcsine
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/arcsine}
*/
setReadOnly( dist, 'arcsine', require( './../../../base/dists/arcsine' ) );

/**
* @name bernoulli
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/bernoulli}
*/
setReadOnly( dist, 'bernoulli', require( './../../../base/dists/bernoulli' ) );

/**
* @name beta
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/beta}
*/
setReadOnly( dist, 'beta', require( './../../../base/dists/beta' ) );

/**
* @name betaprime
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/betaprime}
*/
setReadOnly( dist, 'betaprime', require( './../../../base/dists/betaprime' ) );

/**
* @name binomial
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/binomial}
*/
setReadOnly( dist, 'binomial', require( './../../../base/dists/binomial' ) );

/**
* @name cauchy
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/cauchy}
*/
setReadOnly( dist, 'cauchy', require( './../../../base/dists/cauchy' ) );

/**
* @name chi
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/chi}
*/
setReadOnly( dist, 'chi', require( './../../../base/dists/chi' ) );

/**
* @name chisquare
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/chisquare}
*/
setReadOnly( dist, 'chisquare', require( './../../../base/dists/chisquare' ) );

/**
* @name cosine
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/cosine}
*/
setReadOnly( dist, 'cosine', require( './../../../base/dists/cosine' ) );

/**
* @name degenerate
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/degenerate}
*/
setReadOnly( dist, 'degenerate', require( './../../../base/dists/degenerate' ) );

/**
* @name discreteUniform
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/discrete-uniform}
*/
setReadOnly( dist, 'discreteUniform', require( './../../../base/dists/discrete-uniform' ) );

/**
* @name erlang
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/erlang}
*/
setReadOnly( dist, 'erlang', require( './../../../base/dists/erlang' ) );

/**
* @name exponential
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/exponential}
*/
setReadOnly( dist, 'exponential', require( './../../../base/dists/exponential' ) );

/**
* @name f
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/f}
*/
setReadOnly( dist, 'f', require( './../../../base/dists/f' ) );

/**
* @name frechet
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/frechet}
*/
setReadOnly( dist, 'frechet', require( './../../../base/dists/frechet' ) );

/**
* @name gamma
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/gamma}
*/
setReadOnly( dist, 'gamma', require( './../../../base/dists/gamma' ) );

/**
* @name geometric
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/geometric}
*/
setReadOnly( dist, 'geometric', require( './../../../base/dists/geometric' ) );

/**
* @name gumbel
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/gumbel}
*/
setReadOnly( dist, 'gumbel', require( './../../../base/dists/gumbel' ) );

/**
* @name hypergeometric
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/hypergeometric}
*/

setReadOnly( dist, 'hypergeometric', require( './../../../base/dists/hypergeometric' ) );

/**
* @name invgamma
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/invgamma}
*/
setReadOnly( dist, 'invgamma', require( './../../../base/dists/invgamma' ) );

/**
* @name kumaraswamy
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/kumaraswamy}
*/
setReadOnly( dist, 'kumaraswamy', require( './../../../base/dists/kumaraswamy' ) );

/**
* @name laplace
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/laplace}
*/
setReadOnly( dist, 'laplace', require( './../../../base/dists/laplace' ) );

/**
* @name levy
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/levy}
*/
setReadOnly( dist, 'levy', require( './../../../base/dists/levy' ) );

/**
* @name logistic
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/logistic}
*/
setReadOnly( dist, 'logistic', require( './../../../base/dists/logistic' ) );

/**
* @name lognormal
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/lognormal}
*/
setReadOnly( dist, 'lognormal', require( './../../../base/dists/lognormal' ) );

/**
* @name negativeBinomial
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/negative-binomial}
*/
setReadOnly( dist, 'negativeBinomial', require( './../../../base/dists/negative-binomial' ) );

/**
* @name normal
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/normal}
*/
setReadOnly( dist, 'normal', require( './../../../base/dists/normal' ) );

/**
* @name pareto1
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/pareto-type1}
*/
setReadOnly( dist, 'pareto1', require( './../../../base/dists/pareto-type1' ) );

/**
* @name poisson
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/poisson}
*/
setReadOnly( dist, 'poisson', require( './../../../base/dists/poisson' ) );

/**
* @name rayleigh
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/rayleigh}
*/
setReadOnly( dist, 'rayleigh', require( './../../../base/dists/rayleigh' ) );

/**
* @name signrank
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/signrank}
*/
setReadOnly( dist, 'signrank', require( './../../../base/dists/signrank' ) );

/**
* @name tukey
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/studentized-range}
*/
setReadOnly( dist, 'tukey', require( './../../../base/dists/studentized-range' ) );

/**
* @name t
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/t}
*/
setReadOnly( dist, 't', require( './../../../base/dists/t' ) );

/**
* @name triangular
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/triangular}
*/
setReadOnly( dist, 'triangular', require( './../../../base/dists/triangular' ) );

/**
* @name truncatedNormal
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/truncated-normal}
*/
setReadOnly( dist, 'truncatedNormal', require( './../../../base/dists/truncated-normal' ) );

/**
* @name uniform
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/uniform}
*/
setReadOnly( dist, 'uniform', require( './../../../base/dists/uniform' ) );

/**
* @name weibull
* @memberof dist
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats/base/dists/weibull}
*/
setReadOnly( dist, 'weibull', require( './../../../base/dists/weibull' ) );


// EXPORTS //

module.exports = dist;
