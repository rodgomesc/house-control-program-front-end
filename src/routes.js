import { Switch, Route } from 'react-router-dom';
import React from 'react';
import SignIn from '../src/pages/SignIn';
import SignUp from '../src/pages/SignUp';
import Dashboard from './pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}
