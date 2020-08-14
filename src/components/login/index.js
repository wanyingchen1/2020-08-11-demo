import React from 'react'
import {Form,Input} from 'antd'
// 登陆的组件
const FormItem=Form.Item
export default class Login extends React.Component{
    render(){
        return(
            <Form>
                <FormItem label='用户名'>
                    <Input/>
                </FormItem>
            </Form>
        )
    }
}