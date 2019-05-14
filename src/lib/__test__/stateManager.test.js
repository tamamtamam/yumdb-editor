/*
 * Copyright (c) 2019-present, The Yumcoder Authors. All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */
import * as StateManager from '../stateManager';
import {Map} from 'immutable';
import {act} from 'react-dom/test-utils'

it('test state manager get set app state', () => {
    expect(StateManager.getAppState('yumcoder', {applicationId: 1})).toEqual(Map());

    {
        let obj = Map({f1: "yum", f2: 1});
        StateManager.setAppState('yumcoder', {applicationId: 1}, obj);
        expect(StateManager.getAppState('yumcoder', {applicationId: 1})).toEqual(obj);
    }

    expect(StateManager.getAppState('yumcoder', {applicationId: 1})).toEqual(Map({f1: "yum", f2: 1}));
    expect(StateManager.getAppState('yumcoder', {applicationId: 2})).toEqual(Map());
});

it('test state manager get set global state', () => {
    expect(StateManager.getGlobalState('yumcoder')).toEqual(Map());

    {
        let obj = Map({f1: "yum", f2: 1});
        StateManager.setGlobalState('yumcoder', obj);
        expect(StateManager.getGlobalState('yumcoder')).toEqual(obj);
    }

    expect(StateManager.getGlobalState('yumcoder')).toEqual(Map({f1: "yum", f2: 1}));
});