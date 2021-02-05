import React from "react";
import { useSelector } from "react-redux";
import { Link, Route, useRouteMatch } from "react-router-dom";
import store from "./store";

import Bun from "./Bun";

function BunList() {
  console.log(store.getState().bunList);
  const bunList = useSelector(state => state.bunList);
  const { url } = useRouteMatch();
  console.log("url", useRouteMatch());

  return (
    <div>
      <div>
        <p>List of Best Buns:</p>
        <ul>
          {bunList.map(bun => (
            <li key={bun.bunName}>
              <Link to={`${url}/${bun.bunName}`}> {bun.bunName}</Link>
            </li>
          ))}
        </ul>
      </div>

      <Route path={`${url}/:bunName`}>
        <Bun data={bunList} />
      </Route>
      <Route exact path={url}>
        <p>Please select a bun.</p>
      </Route>
    </div>
  );
}

export default BunList;
