import React from "react";
import { Menu } from "antd";
import Select from "./SelectComponent";
import Title from "antd/es/skeleton/Title";
import logo from "./logo.png";

const App = () => {
  return (
    <div style={{ margin: "2vh" }}>
      <title>IEA Select Component Exercice</title>
      <img style={{ width: "10vh" }} src={logo}></img>

      <h1> IEA Select Component Exercice</h1>
      <Select />
    </div>
  );
};
export default App;
