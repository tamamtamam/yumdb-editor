/*
 * Copyright (c) 2019-present, The Yumcoder Authors. All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */
import React from "react";
import pipe from '../pipe';
import namespace from '../namespace';
import withHandlers from '../withHandlers';
import withState from '../withState';
import { mount } from 'enzyme';

const useForm = pipe(
    withState('value', 'updateValue', ''),
    withState('submitted', 'updateSubmitted', 0),
    namespace('handlers', parentProps =>
        pipe(
            withHandlers({
                onChange: props => event => {
                    parentProps.updateValue(event.target.value);
                },
                onSubmit: props => event => {
                    event.preventDefault();
                    parentProps.updateSubmitted(parentProps.submitted + 1);
                },
            })
        )
    )
);

const Form = () => {
    const {
        value, submitted,
        handlers: { onChange, onSubmit },
    } = useForm();

    return (
        <div>
            <p>value: {value}, submitted: {submitted}</p>
            <form onSubmit={onSubmit}>
                <label>
                    Value
                    <input type="text" value={value} onChange={onChange} />
                </label>
            </form>
        </div>
    );
};

it('test namespace', () => {
    const wrapper = mount(<Form />);

    expect(wrapper.find('p').text()).toEqual('value: , submitted: 0');

    wrapper.find('input').simulate('change', { target: { value: 'Hello' } });
    wrapper.find('form').simulate('submit');

    expect(wrapper.find('p').text()).toEqual('value: Hello, submitted: 1');
});