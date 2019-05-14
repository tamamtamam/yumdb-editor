/*
 * Copyright (c) 2019-present, The Yumcoder Authors. All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */
/**
 * @param {string|symbol} propName
 * @returns {object}
 */
const flattenProp = propName => (props = {}) => ({
    ...props,
    ...props[propName],
});

export default flattenProp
