import { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login } from 'presentation/pages';
import 'presentation/styles/global.module.scss';

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
};
