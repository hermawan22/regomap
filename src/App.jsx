import React from "react";
import { render } from "react-dom";

import ReGoMap from "./components/ReGoMap";

const renderApp = () => {
  render(<ReGoMap />, document.getElementById("app"));
};

renderApp();
