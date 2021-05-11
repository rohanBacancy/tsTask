import React, { Suspense, FC, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const AuthorisedApp: FC = () => {
  return (
    <div className="layout">
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
            {/* Enter Routes */}
          <Route />
        </Switch>
      </Suspense>
    </div>
  );
};

export default AuthorisedApp;
