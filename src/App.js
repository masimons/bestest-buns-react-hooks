import React from "react";
import { Switch, Route } from "react-router-dom";
import BunnyForm from "./BunnyForm";
import BunList from "./BunList";
import Bun from "./Bun";

import "./style.css";

export default function App() {
  return (
    <div>
      <BunnyForm />
      <Switch>
        <Route path="/buns" component={BunList} />
        <Route path="/buns/:bunName" component={Bun} />
      </Switch>
    </div>
  );
}
