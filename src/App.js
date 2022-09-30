import React from 'react';
import Navbar from './components/Navbar/index';
import HomePages from './pages/Homepages/index';
import About from './pages/About/index';
import Products from './pages/Products/index';
import Footer from './components/Footer/index';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   justifyContent: "space-between",
      //   minHeight: "100vh",
      // }}
      >
        <Navbar />

        <Switch>
          <Route path="/cp_rpl_2021_01_09_12/" exact component={HomePages} />
          <Route path="/about" component={About} />
          <Route path="/product" component={Products} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
