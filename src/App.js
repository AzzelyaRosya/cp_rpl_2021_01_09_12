import React from 'react';
import Navbar from './components/Navbar/index';
import HomePages from './pages/Homepages/index';
import About from './pages/About/index';
import Products from './pages/Products/index';
import Footer from './components/Footer/index';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route path="/cp_rpl_2021_01_09_12/">
            <Redirect exact to="/cp_rpl_2021_01_09_12/" />
            <Route path="/cp_rpl_2021_01_09_12/" component={HomePages} />
          </Route>
          <Route path="/about" component={About} />
          <Route path="/product" component={Products} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
