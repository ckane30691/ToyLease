import React from 'react';
import { Provider } from 'react-redux';
import Splash from './greeting/splash';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import ToyIndexContainer from './toys/toys_index_container';
import ToyFormContainer from './toys/toys_form_container';
import ToyShowContainer from './toys/toys_show_container';


import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <div className="home-container">
        <img className="icon" src="https://s3.amazonaws.com/toy-lease/lego-cube-or-square.png"/>
        <Link to='/' className="header-link"><h1>ToyLease</h1></Link>
      </div>

      <GreetingContainer />

    </header>



    <Switch>
      <AuthRoute exact path="/" component={Splash} />
      <AuthRoute exact path="/login" component={SessionFormContainer} />
      <AuthRoute exact path="/signup" component={() => <div className="solo-signup"><SessionFormContainer /></div>} />
      <ProtectedRoute exact path="/toys" component={ToyIndexContainer} />
      <ProtectedRoute exact path="/toys/new" component={ToyFormContainer} />
      <ProtectedRoute exact path="/toys/:toyId/edit" component={ToyFormContainer} />
      <ProtectedRoute exact path="/toys/:toyId" component={ToyShowContainer} />

    </Switch>
</div>
);

export default App;
