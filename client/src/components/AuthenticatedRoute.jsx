import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import NotFound from '../pages/NotFound';

export default ({ component: C, props: cProps, ...rest }) => {
  console.log('cProps', cProps);

  const adminCheck = (props, cProps) => (
    (cProps.isAdmin) ? (
      <C {...props} {...cProps} />
    ) : (
      <NotFound />
    )
  );

  return (
    <Route
      {...rest}
      // eslint-disable-next-line no-nested-ternary
      render={props => (cProps.isAuthenticated
        ? ((cProps.adminRequired)
          ? adminCheck(props, cProps)
          : <C {...props} {...cProps} />)
        : <Redirect to={`/login?redirect=${props.location.pathname}${props.location.search}`} />
      )}
    />
  );
};
