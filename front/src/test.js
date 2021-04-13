import React, { useState } from "react";
import Select from "react-select";

const Test = () => {
  const options = [
    { value: "Nantes",
        v: "Nantes" },
    { value: "Iron Islands", 
        v: "bjr"},
    { value: "The North",
        v:  "a"},
    { value: "The Reach" },
    { value: "The Riverlands" },
    { value: "The Vale" },
    { value: "The Westerlands" },
    { value: "The Stormlands" },
  ];
  const [region, setRegion] = useState(options[0]);
  const onchangeSelect = (item) => {
    setRegion(item.a);
    console.log(region);
  };
  return (
    <div className="App">
      <Select
        value={region}
        onChange={onchangeSelect}
        options={options}
        getOptionValue={(option) => option.a}
        getOptionLabel={(option) => option.value}
      />
    </div>
  );
};

export default Test;
