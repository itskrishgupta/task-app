import './App.css';
import Home from "./MyComponents/Home";
import Setting from './MyComponents/Setting';
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/settings">
          <Setting />
        </Route>
        <Route>Not Found</Route>
      </Switch>
    </>
  );
}

export default App;
