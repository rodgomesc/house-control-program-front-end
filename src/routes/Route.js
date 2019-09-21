import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import DashboardLayout from '../pages/_layouts/dashboard';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = true;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = DashboardLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component />
        </Layout>
      )}
    />
  );
}
RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
};

RouteWrapper.defaultProps = {
  isPrivate: false
};
