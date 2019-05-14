/*
 * Copyright (c) 2019-present, The Yumcoder Authors. All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */
import testUtil from '../testUtils'
import flattenProp from '../flattenProp'

it('test_flattens_props', () => {
    const getProps = testUtil(flattenProp('obj'), {obj: {a: true, b: false}});

    expect(getProps().a).toBe(true);
    expect(getProps().b).toBe(false);
});
