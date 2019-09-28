import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./components/pages/Discover";
// import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Discover} />
      </div>
    </Router>
  );
}

export default App;
