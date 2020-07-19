import React from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Toolbar from "../Navigation/Toolbar/Toolbar";

import classes from "./Layout.module.css";

const layout = (props) => (
  <Auxiliary>
    <Toolbar />
    <main className={classes.content}>{props.children}</main>
  </Auxiliary>
);

export default layout;
