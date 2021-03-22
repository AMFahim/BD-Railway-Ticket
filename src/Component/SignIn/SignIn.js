import React from 'react';
import './SingIn.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useState } from 'react';


// firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}


const SignIn = () => {
  const [user, setUser] = useState({});
  var provider = new firebase.auth.GoogleAuthProvider();
  var fbProvider = new firebase.auth.FacebookAuthProvider();
  const handleGoogleSignIn = () => {
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
      });

  }

  const handleFacebookSignIn = () => {
    firebase
  .auth()
  .signInWithPopup(fbProvider)
  .then((result) => {
    var credential = result.credential;
    var user = result.user;
    var accessToken = credential.accessToken;
    console.log(user);
    setUser(user);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(errorCode, errorMessage, email, credential);
  });
  }


    const handleBlur = (e) => {
      let isFieldValid = true;
     if(e.target.name === 'email'){
        isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
     }
     if(e.target.name === 'password'){
       const isPasswordValid = e.target.value.length > 8;
       const passwordHasNumber = /\d{1}/.test(e.target.value);
       isFieldValid = isPasswordValid && passwordHasNumber;

     }
     if(isFieldValid){
       const newUserInfo ={...user};
     newUserInfo[e.target.name] = e.target.value;
     setUser(newUserInfo);
     }
    };

   const handleSubmit =(e) => {
    //  console.log(user.email, user.password);
     if(user.email && user.password){
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then( res => {
        const newUserInfo = {...user};
        newUserInfo.error = '';
        newUserInfo.success = true;
        setUser(newUserInfo);
      })
      .catch(error => {
        const newUserInfo = {...user};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setUser(newUserInfo);
      });
     }
      e.preventDefault();
   };
  return (
    <div>
      {/* <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p> */}
      <p style={{color:'red'}}>{user.error}</p>
      {user.success && <p style={{color: 'green'}}>User Created Successfully</p> }
      <form onSubmit={handleSubmit}  style={{marginLeft: '300px'}}>
        <div className="form">
          <div className="container" style={{ padding: '40px' }}>
            <h5>Name:</h5>
            <input className="form-control for-input" name="name" onBlur={handleBlur} type="text" placeholder="Write your name" required/>
            <h5>Email:</h5>
            <input className="form-control for-input" type="email" onBlur={handleBlur} name="email" id="" placeholder="Write your email address" required />
            <h5>Password:</h5>
            <input className="form-control for-input" onBlur={handleBlur} type="password" name="password" id="" placeholder="Enter your password" required />
            <br/>
            <input className="btn btn-warning for-btn" type="submit" value="Submit"/>
            <br/>
            <br/>
          </div>
        </div>
      </form>
      <br/>
      <div style={{textAlign: 'center'}}>
      <button className="btn btn-primary for-btn" onClick={handleGoogleSignIn}>Sign In Using Google</button>
      <br/>
      <br/>
      <button className="btn btn-primary for-btn" onClick={handleFacebookSignIn}>Sign In Using Facebook</button>
      {/* <h5>{user.displayName}</h5> */}
      </div>

    </div>
  );
};

export default SignIn;