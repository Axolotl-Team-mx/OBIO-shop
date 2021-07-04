import React from "react";
import { Switch, Route } from "react-router-dom";

// Components
import NavigationBar from "../components/NavigationBar";
import ScrollToTop from "../components/ScrollToTop";

export default function StoreRouter({ history }) {
  return (
    <>
      <ScrollToTop />
      <NavigationBar />
    </>
  );
}
