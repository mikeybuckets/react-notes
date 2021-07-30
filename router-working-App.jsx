import "./styles.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SpringCards from "./components/SpringCards";
import HomePage from "./components/Home";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/<3:id"
          render={(props) => <HomePage {...props} />}
        />
        <Route exact path="/" component={SpringCards} />


        <Route
          exact
          path="/<3 :id"
          render={(props) => <SpringCards {...props} />}
        />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}
