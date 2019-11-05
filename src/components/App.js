import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer';
import Home from './Home';
import Detail from './Detail';
import List from './List';

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/list/:name" component={List}/>
          <Route exact path="/details" component={Detail}/>
        </Switch>
        <Footer />
      </>
    </Router>
  );
};

export default App;