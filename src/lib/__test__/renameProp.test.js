/*
 * Copyright (c) 2019-present, The Yumcoder Authors. All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */
import testUtil from '../testUtils';
import renameProp from '../renameProp';

it('test rename prop', () => {
    const getProps = testUtil(renameProp('val', 'renamed'), {val: true});

    expect(getProps().renamed).toBe(true)
});
