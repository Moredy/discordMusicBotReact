
import logo from './logo.svg';
import AuthBox from './components/Auth/Auth'
import React, { useState, useEffect } from "react";
import './App.css';
import fire from './fire';
import MainPageHeader from './components/MainPage/Header/Header'

const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const haddleSignIn = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email , password)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disable":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  }

  const haddleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  }

  const handdleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearErrors();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);


  return (
    <div className="App">

      {user ? (
        <MainPageHeader handdleLogout={handdleLogout}></MainPageHeader>
      ) : (

          <AuthBox
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            haddleSignIn={haddleSignIn}
            haddleSignUp={haddleSignUp}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}>
          </AuthBox>
        )}


    </div>
  );
}

export default App;
