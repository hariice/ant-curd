import React from "react";
import MenuComponent from "./components/menu";
import "./App.css";
import { BrowserRouter } from "react-router-dom"
import Router from "./router";
import 'antd/dist/antd.css';

const App = () => {
  return (
    <BrowserRouter><div className="App">
      <MenuComponent />
      <div className="main-container">
        <Router />
      </div>
    </div>
    </BrowserRouter>)

}
export default App;