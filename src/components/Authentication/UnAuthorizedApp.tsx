import React, { FC, lazy } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

const UnAuthorisedApp: FC = () => {
  const location = useLocation();

  return (
    <Switch>
        {/* Enter routes */}
        <Route  />
     <Redirect
            to={{
            pathname: '/',
          state: { from: location },
        }}
      />
    </Switch>
  );
};

export default UnAuthorisedApp;
