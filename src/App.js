import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from "./Components/Header";
import Home from "./pages/Home";
import Pages from "./pages/Pages";

import useWindowSize from "./utils/useWindowSize";


function App() {
  const size = useWindowSize();

  return (
    <Router>
      <Header size={size} />
      <Switch>
        <Route path="/:id" component={Pages} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
