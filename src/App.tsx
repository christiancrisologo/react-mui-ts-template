import React from "react";

import Home from "./pages/Home";
import WithTheme from "./WithTheme";

const App: React.FC = () => {
  return (
    <WithTheme>
      <Home />
    </WithTheme>
  );
};

export default App;
