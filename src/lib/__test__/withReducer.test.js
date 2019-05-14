/*
 * Copyright (c) 2019-present, The Yumcoder Authors. All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */
import testUtil from '../testUtils';
import withReducer from '../withReducer';
import {act} from 'react-dom/test-utils';

it('test_with_reducer', () => {
    const getProps = testUtil(
        withReducer(
            'state',
            'dispatch',
            (state, action) => {
                switch (action.type) {
                    case 'INCREMENT':
                        return {count: state.count + 1};
                    default:
                        return state
                }
            },
            {count: 0}
        ),
        {}
    );

    expect(getProps().state).toEqual({count: 0});
    act(() => getProps().dispatch({type: 'INCREMENT'}));
    expect(getProps().state).toEqual({count: 1});
});

it('test_with_reducer_memo', () => {
    const getProps = testUtil(
        withReducer(
            'state',
            'dispatch',
            (state, action) => {
                switch (action.type) {
                    case 'INCREMENT':
                        return {count: state.count + 1};
                    default:
                        return state
                }
            },
            () => ({count: 0})
        ),
        {}
    );

    expect(getProps().state).toEqual({count: 0});
    act(() => getProps().dispatch({type: 'INCREMENT'}));
    expect(getProps().state).toEqual({count: 1});
});
