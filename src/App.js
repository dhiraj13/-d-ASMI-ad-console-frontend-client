import { history } from './helpers/history';
// import { PrivateRoute } from './common/components/PrivateRoute';
import LoginPage from './common/features/Auth/Login';
import RegisterPage from './common/features/Auth/Register';
import LandingPage from './common/features/LandingPage';
import { Router, Route, Switch, Redirect } from "react-router";
import NavBar from './common/components/NavBar';

const App = () => {
  return (
    <div className="App">
      <div><NavBar /></div>
      <Router history={history}>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route exact path="/" component={LandingPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  )
}


export default App;
