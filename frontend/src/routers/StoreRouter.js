import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "../utils/routes/StoreRoutes";

// Components
import NavigationBar from "../components/NavigationBar";
import ScrollToTop from "../components/ScrollToTop";
import LoaderLogo from "../components/LoaderLogo";
import Footer from "../components/Footer";

export default function StoreRouter({ history }) {
  return (
    <>
      <ScrollToTop />
      <NavigationBar />
      <React.Suspense fallback={<LoaderLogo />}>
        <Switch>
          {routes?.map((route, idx) => {
            return route.component ? (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={(props) => <route.component {...props} />}
              />
            ) : null;
          })}
        </Switch>
      </React.Suspense>
      <Footer/>
    </>
  );
}
