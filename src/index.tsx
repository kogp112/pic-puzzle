import * as React from "react";
import { render } from "react-dom";
import Home from "./components/Home";

render(<Home />, document.getElementById("root"));

// Hot Module Replacement
declare let module: { hot: any };

if (module.hot) {
  module.hot.accept("./components/Home", () => {
    render(<Home />, document.getElementById("root"));
  });
}