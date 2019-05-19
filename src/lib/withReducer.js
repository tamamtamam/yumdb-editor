/*
 * Copyright (c) 2019-present, The Yumcoder Authors. All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */
import { useReducer, useMemo } from 'react';

/**
 * @param {string|symbol} stateName
 * @param {string|symbol} dispatchName
 * @param {Function} reducer
 * @param {any} initialValue
 */
const withReducer = (stateName, dispatchName, reducer, initialValue) => props => {
  const [state, dispatch] = useReducer(
    reducer,
    typeof initialValue === 'function' ? useMemo(() => initialValue(props), []) : initialValue
  );

  return { ...props, [stateName]: state, [dispatchName]: dispatch };
};

export default withReducer;
