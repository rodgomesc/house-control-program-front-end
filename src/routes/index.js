import React from 'react';
import Route from './Route';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Main from '../pages/Dashboard/Main';
import Person from '../pages/Dashboard/Person';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" isPrivate component={Main} />
      <Route path="/person" exact isPrivate component={Person} />
    </Switch>
  );
}
