/*
 * Copyright (c) 2019-present, The Yumcoder Authors. All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */
/**
 * @param {string|symbol} propName
 * @param {Function} enhance
 * @returns {object}
 */
const namespace = (propName, enhance) => (props = {}) => ({
    ...props,
    [propName]: enhance(props)(),
});

export default namespace;
