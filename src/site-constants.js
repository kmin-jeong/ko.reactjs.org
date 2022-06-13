/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * @providesModule site-constants
 * @flow
 */

// NOTE: We can't just use `location.toString()` because when we are rendering
// the SSR part in node.js we won't have a proper location.
<<<<<<< HEAD
const urlRoot = 'https://ko.reactjs.org';
const version = '18.0.0';
=======
const urlRoot = 'https://reactjs.org';
const version = '18.1.0';
>>>>>>> 6d965422a4056bac5f93f92735364cb08bcffc6b
const babelURL = 'https://unpkg.com/babel-standalone@6.26.0/babel.min.js';

export {babelURL, urlRoot, version};
