/*
 * Copyright (c) 2019-present, The Yumcoder Authors. All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */
const UNESCAPE_MAP = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&#x2F;': '/',
    '&#x27;': '\'',
    '&quot;': '"'
};
const ESCAPE_MAP = {};
for (let key in UNESCAPE_MAP) {
    ESCAPE_MAP[UNESCAPE_MAP[key]] = key;
}

let escapeMatcher = RegExp('(?:' + (Object.keys(ESCAPE_MAP).join('|')) + ')', 'g');
let unescapeMatcher = RegExp('(?:' + (Object.keys(UNESCAPE_MAP).join('|')) + ')', 'g');

export function escape(str) {
    return str.replace(escapeMatcher, function (ch) {
        return ESCAPE_MAP[ch];
    });
}

export function unescape(str) {
    return str.replace(unescapeMatcher, function (ch) {
        return UNESCAPE_MAP[ch];
    });
}