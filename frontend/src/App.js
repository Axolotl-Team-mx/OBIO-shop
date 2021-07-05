import { HashRouter as Router, Route, Switch } from "react-router-dom";
import StoreRouter from "./routers/StoreRouter";
function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          name="store"
          render={(props) => <StoreRouter {...props} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
