import React, { useEffect, useState } from "react";

import { AutoComplete } from "antd";
const data = require("./data.json");

const lineData = (arr) => {
  // arr = JSON.stringify(arr);
  console.log(arr);
  const arrangedArray = arr.map((line, index) => {
    return {
      key: index,
      value: line["country"],
      region: line["region"],
      energy: line["Total energy supply"],
      iea: line["IEA member"],
    };
  });
  console.log(JSON.stringify(arrangedArray));
  return arrangedArray;

  //[{"country":"Albania","region":"Europe","Total energy supply":9507,"IEA member":false},
  // { key: 8, value: "Kiwi", price: 4.6 },
};

const SelectComponent = () => {
  const [country, setCountry] = useState(null);
  const [region, setRegion] = useState(null);

  const [total_energy_suply, setTotal_energy_suply] = useState(0);
  const [iea, setIea] = useState(false);
  const [countries, setCountries] = useState(null);

  const onSelect = (val, option) => {
    setCountry(option.country);
    setRegion(option.region);
    setIea(option.IEA);
    setTotal_energy_suply(option.energy);
  };
  useEffect(() => {
    setCountries(lineData(data));
  }, []);
  return (
    <>
      <div style={{ width: "90%" }}>
        {" "}
        <AutoComplete
          style={{ width: "90%" }}
          options={countries}
          onSelect={(val, option) => onSelect(val, option)}></AutoComplete>
        <p>Details :</p>
        <strong> Region - {region}</strong> <br />
        <strong> Energy - {total_energy_suply}</strong>
        <br />
        <strong> IEA member- {iea ? "YES" : "NO"}</strong>
      </div>{" "}
    </>
  );
};

export default SelectComponent;
