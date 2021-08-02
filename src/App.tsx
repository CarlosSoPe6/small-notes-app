import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import routes from './config/routes';
import NotFoundError from './navigation/NotFound';
import LogInContainer from './pages/Auth/LogIn/LogInContainer';
import SingUpContainer from './pages/Auth/SingUp/SingUpContainer';
import HomeContainer from './pages/Home/HomeContainer';
import RootPageContainer from './pages/Root/RootPageContainer';

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Switch>
          <Route path={routes.ROOT} exact component={RootPageContainer} />
          <Route path={routes.HOME} exact component={HomeContainer} />
          <Route path={routes.LOG_IN} exact component={LogInContainer} />
          <Route path={routes.SING_UP} exact component={SingUpContainer} />
          <Route path={routes.NOT_FOUND} component={NotFoundError} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
