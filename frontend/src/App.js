import { HashRouter as Router, Route, Switch } from "react-router-dom";
import StoreRouter from "./routers/StoreRouter";
import DashboardRouter from "./routers/DashboardRouter";
function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          name="store"
          render={(props) => <StoreRouter {...props} />}
        />
        <Route
          path="/dashboard"
          name="dashboard"
          render={(props) => <DashboardRouter {...props} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
