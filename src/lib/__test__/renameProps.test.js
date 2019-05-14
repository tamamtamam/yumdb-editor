/*
 * Copyright (c) 2019-present, The Yumcoder Authors. All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */
import testUtil from '../testUtils'
import renameProps from '../renameProps'

test('test_rename_props', () => {
    const getProps = testUtil(renameProps({val: 'renamed', val2: 'renamed2'}), {
        val: true,
        val2: 0,
        other: false,
    });

    expect(getProps().renamed).toBe(true);
    expect(getProps().renamed2).toBe(0);
    expect(getProps().other).toBe(false);
});
