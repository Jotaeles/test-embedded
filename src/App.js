import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="app-content">
          <Sidebar />
          <div className="content">
            <Switch>
              <Route path="/performance">
                <iframe
                  title="Personal website"
                  src="https://jotaele.me/"
                ></iframe>
              </Route>
            </Switch>
            <Switch>
              <Route path="/aprendizaje">
                <iframe
                  title="Pokedex"
                  src="https://pokedex-five-red.vercel.app/"
                ></iframe>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
