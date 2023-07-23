import React from 'react';
import { Form, message} from 'antd';
import '../styles/RegisterStyles.css';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
const Register = () => {

  const navigate = useNavigate()
   // const navigate = useNavigate()
  //from handler
  const onfinishhandler= async (values)=>{
    try{
      const res = await axios.post('/api/v1/user/register', values)
      if(res.data.success){
        message.success("Registration done successfully!")
        navigate('/login')
      }
      else{
        message.error(res.data.message)
      }

    }catch(error){
      console.log("Error", error)
      message.error('Something went Wrong')
    }
  };
  
  return (
    <div className="form-container">
      <Form layout="vertical" onFinish={onfinishhandler} className="register-form" align="center">
        <h3 className="text-center">Register Form</h3>
        <Form.Item label="Name" align="center" name="name" >
              <input type="text" required/>
        </Form.Item>
        <Form.Item label="Email" name="email">
              <input type="email" required/>
        </Form.Item>
        <Form.Item label="Password" name="password">
              <input type="password" required/>
        </Form.Item>
        <Link to="/login" classname="m-4">
          If you're already a user, Login here !
        </Link>
        <button classname="btn btn-primary" type="submit">Register</button>
      </Form>
    </div>
  );
};

export default Register;