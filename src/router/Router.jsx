import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../compnents/pages/Top";
import { Users } from "../compnents/pages/Users";
import { DefaultLayout } from "../compnents/templates/DefaultLayout";
import { HeaderOnly } from "../compnents/templates/HeaderOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route path="/users">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
