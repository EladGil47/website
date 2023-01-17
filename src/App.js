import React, { Component } from "react";
import PageWrapper from './components/PageWrapper';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Header from './components/Common/Header';

// Pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';


class App extends Component {
  render() {
    return (
      <Router>
        <PageWrapper>
          <Route
            exact={true}
            path="/"
            component={Home}
            /> 

          <Route
            path="/about"
            component={About}
            /> 
        </PageWrapper>
      </Router>
    );
  }
}

export default App;

   // <Router>


      //   <PageWrapper>
      //      <Route
      //         exact={true}
      //         path="/about"
      //         component={About}
      //       />


      //     {/* <Route
      //       exact={true}
      //       path="/"
      //       component={Home}
      //       /> 

      //     <Route
      //       exact={true}
      //       path="/about"
      //       component={About}
      //       />  */}

      //   </PageWrapper>


      // </Router>



      // <PageWrapper>
      // <Routes>
      //   <Route path="/about/*" element={<About />} />
      // </Routes>
      // </PageWrapper>
