/*
 * Copyright (c) 2019-present, The Yumcoder Authors. All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */
/**
 * @param {string|symbol} a
 * @param {string|symbol} b
 * @returns {object}
 */
const renameProp = (a, b) => ({[a]: prop, ...props} = {}) => ({
    ...props,
    [b]: prop,
});

export default renameProp;
