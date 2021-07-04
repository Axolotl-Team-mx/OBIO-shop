import { HashRouter as Router, Route, Switch } from "react-router-dom";
import StoreRouter from "./routers/StoreRouter";
import LoaderLogo from "./components/LoaderLogo";
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
      <LoaderLogo />
    </Router>
  );
}

export default App;
