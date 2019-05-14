/*
 * Copyright (c) 2019-present, The Yumcoder Authors. All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */
import * as CSRFManager from '../csrfManager';
import {unescape} from "../stringEscaping";

it('test csrfManager getToken func', () => {
    const csrfToken = '{"token":"mocked-csrf-token"}';
    let input = document.createElement("input");
    input.setAttribute("id", "csrf");
    input.innerHTML = csrfToken;
    document.body.appendChild(input);
    expect(CSRFManager.getToken()).toEqual(JSON.parse(unescape(csrfToken)));
});
