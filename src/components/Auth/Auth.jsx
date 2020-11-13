import React from 'react'
import './Auth.css'


const Auth = (props) => {

  const {
    email,
    setEmail,
    password,
    setPassword,
    haddleSignIn,
    haddleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;


  
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form>
        <div className="user-box">
          <input type="text" name="" autoFocus required value={email} onChange={e => setEmail(e.target.value)}></input>
          <label>Email</label>
          <p classNameName="errorMsg">{emailError}</p>
        </div>
        <div className="user-box">
          <input type="password" name="" required value={password} onChange={e => setPassword(e.target.value)}></input>
          <label>Password</label>
          <p classNameName="errorMsg">{passwordError}</p>
        </div>

        {hasAccount ? (
            <>
            <a onClick={haddleSignIn} className="button" href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sign In
            </a>
            <p>Dont have a account? <a className="messageLink" onClick={() => setHasAccount (!hasAccount)} >Sign Up</a></p>
            
            </>

          ) : (
            <>
            <a onClick={haddleSignUp} className="button" href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sign Up
            </a>
            <p>Already have a account? <a className="messageLink" onClick={() => setHasAccount(!hasAccount)}>Sign In</a></p>
            
            </>

          )}

      </form>
    </div>
  );
}

export default Auth;