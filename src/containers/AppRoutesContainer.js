import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PageNotFound from '../components/PageNotFound';
import LoginOptions from '../components/LoginOptions';
import SignUp from '../components/SignUp';
import LogIn from '../components/LogIn';
import DashboardContainer from './DashboardContainer'

const AppRoutesContainer = () => (
  <>
  <Switch>
    {/* <Route exact path='/' component={App} /> */}
    {/* <Route exact path='/sign-up' component={SignUp} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/expenses' component={ExpensesContainer} />
    <Route exact path='/bills' component={BillsContainer} />
    <Route exact path='/earnings' component={EarningsContainer} /> */}
    <Route exact path='/dashboard' component={DashboardContainer} />
    <Route exact path='/sign-up' component={SignUp} />
    <Route exact path='/login' component={LogIn} />
    <Route exact path='/' component={LoginOptions} />
    <Route component={PageNotFound} />
  </Switch>
  </>
);

export default AppRoutesContainer;
