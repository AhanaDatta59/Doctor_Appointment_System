import React from 'react';
import { Form } from 'antd';
import '../styles/RegisterStyles.css';
import {Link} from 'react-router-dom'

const onfinishhandler=(values)=>{
  console.log(values)
}

const Login = () => {
  return (
    <div className="form-container">
      <Form layout="vertical" onFinish={onfinishhandler} className="register-form" align="center">
        <h3 className="text-center">Login Form</h3>
        <Form.Item label="Email" name="email">
              <input type="email" required/>
        </Form.Item>
        <Form.Item label="Password" name="password">
              <input type="password" required/>
        </Form.Item>
        <Link to="/register" classname="m-4">
          Not a user !
        </Link>
        <button classname="btn btn-primary" type="submit">Login</button>
      </Form>
    </div>
  );
};

export default Login;