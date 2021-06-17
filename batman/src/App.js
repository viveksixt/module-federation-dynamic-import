import React from "react";
import {dynamicImport} from "./dynamicImport";

const RemoteButton = React.lazy(() => dynamicImport("joker/Button"));

const App = () => {
const [loadButton, setLoadButton] = React.useState(false)
return (
  <div>
    <h1>POC</h1>
    <h2>Batman</h2>
    {
      (
        loadButton? (
          <React.Suspense fallback="Loading Button">
            <RemoteButton />
          </React.Suspense>
        )
        : <button onClick={() => setLoadButton(true)}>Load Joker</button>
      )
    }
  </div>
);
}

export default App;
