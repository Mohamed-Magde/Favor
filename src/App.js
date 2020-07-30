import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Landing from './containers/landing/Landing';
function App() {
	return( 
  <Router>
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />     
      </Switch>
      <Footer/>
    </Fragment>
  </Router>
  );
}

export default App;
