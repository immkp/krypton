import './App.css';
import RocketImg from './assets/rocket.png';
import Signup from './components/Signup';
import Signin from './components/SignIn'
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className='container mt-3'>
        <div className='row'>
          <div className='col-md-5'>
            <ul>
              <li>
                <Link to='/Signup'>Sign Up</Link>
              </li>
              <li>
                <Link to='/Signin'>Sign In</Link>
              </li>
            </ul>
            <Switch>
              <Route path='/Signup'>
                <Signup />
              </Route>
              <Route exact path='/Signin'>
                <Signin />
              </Route>
            </Switch>
            {/* <Signup /> */}
          </div>
          <div className='col-md-7'>
            <img className='img-fluid w-100' src={RocketImg} alt='rocket-img' />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
