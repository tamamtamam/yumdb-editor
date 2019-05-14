/*
 * Copyright (c) 2019-present, The Yumcoder Authors. All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */
import withPropsOnChange from '../withPropsOnchange';
import testUtil from '../testUtils'
import pipe from '../pipe'
import withState from '../withState'
import {act} from 'react-dom/test-utils'

it('test_maps_props_using_func_true', () => {
    let called = 0;
    const getProps = testUtil(
        pipe(
            withState('b', 'setB', 0),
            withPropsOnChange(
                () => true,
                ({b}) => {
                    called += 1;
                    return {c: b}
                }
            )
        ),
        {
            a: true,
        }
    );

    expect(getProps().a).toBe(true);
    expect(getProps().b).toBe(0);
    expect(called).toBe(1);

    act(() => getProps().setB(1));

    expect(called).toBe(2);
    expect(getProps().a).toBe(true);
    expect(getProps().c).toBe(1);
});

it('test_maps_props_using_func_false', () => {
    let called = 0;
    const getProps = testUtil(
        pipe(
            withState('b', 'setB', 0),
            withPropsOnChange(
                () => false,
                ({b}) => {
                    called += 1;
                    return {c: b}
                }
            )
        ),
        {
            a: true,
        }
    );

    expect(getProps().a).toBe(true);
    expect(getProps().b).toBe(0);
    expect(called).toBe(1);
    act(() => getProps().setB(1));
    expect(called).toBe(1);
    expect(getProps().a).toBe(true);
    expect(getProps().c).toBe(0);
});

it('test_maps_props_using_keys', () => {
    let called = 0;
    const getProps = testUtil(
        pipe(
            withState('b', 'setB', 0),
            // when b changed call the func
            withPropsOnChange(['b'], ({b}) => {
                called += 1;
                return {b}
            })
        ),
        {
            a: true,
        }
    );

    expect(getProps().a).toBe(true);
    expect(getProps().b).toBe(0);
    expect(called).toBe(1);
    act(() => getProps().setB(1));
    expect(called).toBe(2);
    expect(getProps().a).toBe(true);
    expect(getProps().b).toBe(1);
});
