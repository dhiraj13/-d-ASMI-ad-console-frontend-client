import { history } from './helpers/history'
// import { PrivateRoute } from './common/components/PrivateRoute';
import EmailConfirmation from './common/features/Auth/EmailConfirmation'
import LoginPage from './common/features/Auth/Login'
import RegisterPage from './common/features/Auth/Register'
import LandingPage from './common/features/LandingPage'
import { Router, Route, Switch, Redirect } from 'react-router'
import NavBar from './common/components/NavBar'
import Dashboard from './common/features/Dashboard'

const App = () => {
  return (
    <div className='App'>
      <div>
        <NavBar />
      </div>
      <Router history={history}>
        <Switch>
          <Route path='/confirmation' component={EmailConfirmation} />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/dashboard' component={Dashboard} />
          <Route exact path='/' component={LandingPage} />
          <Redirect from='*' to='/' />
        </Switch>
      </Router>
    </div>
  )
}

export default App
