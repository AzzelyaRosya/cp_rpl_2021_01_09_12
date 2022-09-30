import React from 'react';
import Navbar from './components/Navbar/index';
import HomePages from './pages/Homepages/index';
import About from './pages/About/index';
import Products from './pages/Products/index';
import Footer from './components/Footer/index';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route path="/">
            <Redirect exact to="/cp_rpl_2021_01_09_12/" />
            <Route exact path="/cp_rpl_2021_01_09_12/" component={HomePages} />
          </Route>
          <Route exact path="/about" component={About} />
          <Route exact path="/product" component={Products} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
