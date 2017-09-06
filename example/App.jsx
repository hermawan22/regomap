import React from "react";
import { render } from "react-dom";

import ReGoMap from "../src/ReGoMap";

// const mapStyle = {
//   width: "100%",
//   height: "500px",
// };

const renderApp = () => {
  render(<ReGoMap />, document.getElementById("app"));
};

renderApp();
