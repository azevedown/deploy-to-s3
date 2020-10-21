import React from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { routes } from '../constants';

const Routes: React.FC<any> = () => {
  const mapRoutes = () => {
    return routes.map((route: any, key) =>
      (<Route
        key={key}
        path={route.path}
        exact={true}
        //component={route.component}
        render={props =>
          <route.template>
            <route.component {...props} />
          </route.template>
        }
      />)
    )
  };

  return (
    <HashRouter>
      <Switch>{mapRoutes()}</Switch>
    </HashRouter>
  );
};

export { Routes };
