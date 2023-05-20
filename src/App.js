import React, { Component } from "react";
import PageWrapper from './components/PageWrapper';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Pages
import Home from './components/Pages/Home';
// import About from './components/Pages/About';
import Contact from "./components/Pages/Contact";

/**
 * Application
 *  <Router> makes it work with route and navigate to other pages
 *  <PageWrapper> 
 */
class App extends Component {
  render() {
    return (
      <Router>
        <PageWrapper>
          {/* Root Page */}
          <Route
            exact={true}
            path="/"
            component={Home}
          />
{/* 
          <Route
            path="/about"
            component={About}
          /> */}

          {/* Contact Page */}
          <Route
            path="/contact"
            component={Contact}
          />
          
        </PageWrapper>
      </Router>
    );
  }
}

export default App;
