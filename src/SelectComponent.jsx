import React, { useEffect, useState } from "react";

import { AutoComplete, Input, Table } from "antd";
const data = require("./data.json");

const lineData = (arr) => {
  // arr = JSON.stringify(arr);
  console.log(arr);
  const arrangedArray = arr.map((line, index) => {
    return {
      label: line["country"],
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
  const mockVal = (str, repeat = 1) => {
    return {
      value: str.repeat(repeat),
    };
  };

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
  const onSearch = (val) => {
    let filtered = countries.filter(
      (obj) => obj.key !== 0 && obj.value.toString().toLowerCase().includes(val)
    );
    setCountries(filtered);
  };
  useEffect(() => {
    setCountries(lineData(data));
  }, []);
  return (
    <>
      <div style={{ width: "90%", margin: "6vh" }}>
        {" "}
        <AutoComplete
          style={{ width: "60%", marginBottom: "10vh" }}
          options={countries}
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
          placeholder="Select a country"
          onSelect={(val, option) => onSelect(val, option)}></AutoComplete>
        {region ? (
          <>
            <h2>Details </h2>
            <Table
              pagination={false}
              columns={[
                {
                  title: "Region",
                  dataIndex: "region",
                },
                {
                  title: "Total energy supply",
                  dataIndex: "energy",
                },
                {
                  title: "IEA member",
                  dataIndex: "member",
                },
              ]}
              dataSource={[
                {
                  region: region,
                  energy: total_energy_suply,
                  member: iea ? "Yes" : "No",
                },
              ]}
            />
          </>
        ) : (
          <>
            <br />
            Select a country to display its details
          </>
        )}
      </div>
    </>
  );
};

export default SelectComponent;
