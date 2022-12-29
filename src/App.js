import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import "./App.css";

import Dashboard from "./components/dashboard/Dashboard";
import { base_url, query } from "./components/utility/utility";
import { setAnimeData } from "./store/actions/animeCAction";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Dashboard></Dashboard>
      </div>
    </Provider>
  );
}

export default App;
