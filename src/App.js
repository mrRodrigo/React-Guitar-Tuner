import React from "react";
import Tuner from "./pages/tuner";
import { Store } from "./store";
import { Provider } from "react-redux";

import { MainContainer } from "./global.js";

function App() {
  return (
    <Provider store={Store}>
      <MainContainer className="App">
        <Tuner />
      </MainContainer>
    </Provider>
  );
}

export default App;
