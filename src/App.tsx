import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LogInContainer from './pages/Auth/LogIn/LogInContainer';
import SingUpContainer from './pages/Auth/SingUp/SingUpContainer';
import HomeContainer from './pages/Home/HomeContainer';
import RootPageContainer from './pages/Root/RootPageContainer';
import UserContainer from './pages/User/UserContainer';

function App() {
  return (
    <div>
      <Navbar hasSidebar />
      <div>
        <Switch>
          <Route path="/" exact component={RootPageContainer} />
          <Route path="/home" exact component={HomeContainer} />
          <Route path="/login" exact component={LogInContainer} />
          <Route path="/singup" exact component={SingUpContainer} />
          <Route path="/user" exact component={UserContainer} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
