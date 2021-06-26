import classes from'./App.css';
import Layout from './Containers/Layout';
import Signin from './Component/Auth/Signin/Signin';
import Signup from './Component/Auth/Signup/Signup';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  withRouter
} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import getFirebase from './Component/Auth/Firebase';


function App() {

  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const firebase = getFirebase();

    if (firebase) {
      firebase.auth().onAuthStateChanged((authUser) => {
        if (authUser) {
          setCurrentUser(authUser.email);
        } else {
          setCurrentUser(null);
        }
      });
    }
  }, []);


  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={Layout} user={currentUser}></Route>
        <Route exact path='/signin' component={Signin}></Route>
        <Route exact path='/signup' component={Signup}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
