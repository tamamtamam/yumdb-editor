/*
 * Copyright (c) 2019-present, The Yumcoder Authors. All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */
/**
 * @param {object} propMap
 * @returns {object}
 */
const renameProps = propMap => (props = {}) => ({
    // Remove renamed props
    ...Object.entries(props)
        .filter(([key]) => !(key in propMap))
        .reduce((obj, [k, v]) => Object.assign(obj, {[k]: v}), {}),
    // Rename props
    ...Object.entries(propMap)
        .map(([oldName, newName]) => [newName, props[oldName]])
        .reduce((obj, [k, v]) => Object.assign(obj, {[k]: v}), {}),
});

export default renameProps
