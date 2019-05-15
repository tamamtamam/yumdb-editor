import React from 'react';
import {Form, Select, InputNumber, DatePicker, Switch, Slider, Button} from 'antd';
import './App.less';

const {Option} = Select;

const App = () => (
    <Form className="cusform">
        <Form.Item
            label="Digital input box"
            labelCol={{span: 8}}
            wrapperCol={{span: 8}}
        >
            <InputNumber min={1} max={10} defaultValue={3}/>
            <span className="ant-form-text"> Machine</span>
            <a href="https://ant.design">Link text</a>
        </Form.Item>
        <Form.Item
            label="switch"
            labelCol={{span: 8}}
            wrapperCol={{span: 8}}
        >
            <Switch defaultChecked/>
        </Form.Item>
        <Form.Item
            label="Sliding input bar"
            labelCol={{span: 8}}
            wrapperCol={{span: 8}}
        >
            <Slider defaultValue={70}/>
        </Form.Item>
        <Form.Item
            label="Selector"
            labelCol={{span: 8}}
            wrapperCol={{span: 8}}
        >
            <Select defaultValue="lucy" style={{width: 192}}>
                <Option value="jack">jack</Option>
                <Option value="lucy">lucy</Option>
                <Option value="disabled" disabled>disabled</Option>
                <Option value="yiminghe">yiminghe</Option>
            </Select>
        </Form.Item>
        <Form.Item
            label="Date selection box"
            labelCol={{span: 8}}
            wrapperCol={{span: 8}}
        >
            <DatePicker/>
        </Form.Item>
        <Form.Item wrapperCol={{span: 8, offset: 8}}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            <Button style={{marginLeft: 8}}>
                Cancel
            </Button>
        </Form.Item>
    </Form>
);

export default App;