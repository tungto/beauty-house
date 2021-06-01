import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUserContext } from '../context/user_context';

const PrivateRoute = ({ children, ...rest }) => {
  const { myUser } = useUserContext();
  if (myUser) {
    return (
      <Route
        {...rest}
        render={() => {
          return myUser ? children : <Redirect to='/' />;
        }}
      ></Route>
    );
  }
  return;
};

export default PrivateRoute;
