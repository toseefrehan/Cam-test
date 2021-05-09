import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Home from "./main/home/Home";
import Header from "./component/header/Header";
import Footer from "./component/footer/index";
import reportWebVitals from "./reportWebVitals";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// paths
const routing = (
  <Router>
    <div style={{ height: "100vh", position: "relative" }}>
      <Header />
      <Switch>
        <Route exact path="" component={Home} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
