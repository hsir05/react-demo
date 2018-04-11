import React, { Component } from 'react';
import './login.scss';
import { requestData } from '../../api/index'

import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class loginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username:'',
      avatar:'',
      loading: false,
    }
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.login(values)
      } else {
        console.log(values)
      }
    });
  }

  login (value) {
    requestData('/login','POST',value)
    .then(res => {
      console.log(res.data)
      if (res.data.status === 0) {
        sessionStorage.setItem('user',JSON.stringify(res.data.result))
        this.props.history.push('/')
      }
    }).catch(err => {
      console.log(err);
    })
  }


  enterLoading = () => {
   this.setState({ loading: true })
 }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='login'>
        <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入帐号' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>记住密码</Checkbox>
            )}
            <div>
              <Button type="primary"  htmlType="submit" loading={this.state.loading} onClick={this.enterLoading}>
               登录
             </Button>
            </div>

          </FormItem>
        </Form>
      </div>
    )
  }
}

const login = Form.create()(loginForm);
export default login;
