import { Component } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import OurCoffee from "./pages/OurCoffee.jsx";
import OurCoffeeItem from "./pages/OurCoffeeItem.jsx";
import Pleasure from "./pages/Pleasure.jsx";

import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ourcoffee" element={<OurCoffee />} />
            <Route path="/ourcoffee/:id" element={<OurCoffeeItem />} />
            <Route path="/pleasure" element={<Pleasure />} />
          </Routes>

        </div>
      </Router >
    );
  }
}

export default App;
