import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUserContext } from '../context/user_context';
import { useAuth0 } from '@auth0/auth0-react';
import { Loading } from '../components';
const PrivateRoute = ({ children, ...rest }) => {
  const { myUser } = useUserContext();
  const { isLoading } = useAuth0();
  console.log(myUser);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Route
      {...rest}
      render={() => {
        return myUser ? children : <Redirect to='/'></Redirect>;
      }}
    ></Route>
  );
};

export default PrivateRoute;
