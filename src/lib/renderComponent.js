/*
 * Copyright (c) 2019-present, The Yumcoder Authors. All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */
/**
 * @param {any} comp
 * @returns {object}
 */
const renderComponent = comp => (props = {}) => {
    throw comp(props)
};

export default renderComponent
