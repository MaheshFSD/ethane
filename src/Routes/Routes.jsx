import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { World } from "../Components/Pages/World";
const Routes = () => {
  return (
    <>
      <div>
        <Link to="/">
          <div>Home</div>
        </Link>
        {/* <Link to="/">
          <div>World</div>
        </Link> */}
      </div>
      <Switch>
        <Route path="/">
          <World></World>
        </Route>
      </Switch>
    </>
  );
};

export { Routes };
