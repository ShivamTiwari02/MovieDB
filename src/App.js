import classes from'./App.css';
import Layout from './Containers/Layout';
import Signin from './Component/Auth/Signin/Signin';
import Signup from './Component/Auth/Signup/Signup'
import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={Layout}></Route>
        <Route exact path='/signin' component={Signin}></Route>
        <Route exact path='/signup' component={Signup}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
