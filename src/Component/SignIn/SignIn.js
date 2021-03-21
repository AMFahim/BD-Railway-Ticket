import React from 'react';
import './SingIn.css';

const SignIn = () => {
  return (
    <div>
      <form action="">
        <div className="form">
          <div className="container" style={{ padding: '40px' }}>
            <h5>Email:</h5>
            <input className="form-control for-input" type="email" name="" id="" placeholder="Write your email address" />
            <h5>Password:</h5>
            <input className="form-control for-input" type="password" name="" id="" placeholder="Enter your password" />
            <br/>
            <button className="btn btn-warning for-btn">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;