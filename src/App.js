import Layout from './Containers/Layout';
import Signin from './Component/Auth/Signin/Signin';
import Signup from './Component/Auth/Signup/Signup';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import React from 'react';
import { AuthProvider } from './Component/Auth/authcontext';
import Movie from './Component/Movies/Movie/Movie';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route exact path='/' component={Layout}></Route>
          <Route exact path='/signin' component={Signin}></Route>
          <Route exact path='/signup' component={Signup}></Route>
          <PrivateRoute path='/movie' component={Movie}/>
        </Switch>
      </AuthProvider>
    </BrowserRouter>    
  );
}

export default App;
