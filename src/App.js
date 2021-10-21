import './App.css';
import {Header} from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {Home} from "./MyComponents/Home";
import { Setting } from './MyComponents/Setting';
import {HashRouter as Router,Route} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header title="Task" searchBar={false} />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/setting">
            <Setting />
          </Route>

        <Footer />

      </Router>
    </>
  );
}

export default App;
