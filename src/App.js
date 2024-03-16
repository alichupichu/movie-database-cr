import React, { Component } from "react";
import Header from "./components/Header";
import Interface from "./components/Interface";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <main>
          <Interface />
        </main>
        <footer>
          <Footer />
        </footer>
      </>
    );
  }
}

export default App;
