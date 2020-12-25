import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React ?",
    content: "React is a front-end js library.",
  },
  {
    title: "Why we use React ?",
    content: "React is a favourite js library among engineers.",
  },
  {
    title: "How do use React ?",
    content: "You use React by creating components.",
  },
];

const optionsDropdown = [
  {
    label: "The label color red",
    value: "red",
  },
  {
    label: "The label color green",
    value: "green",
  },
  {
    label: "The label color blue",
    value: "blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(optionsDropdown[0]);

  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <Header/>
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={optionsDropdown}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>

      {/*<button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      { showDropdown ? 
        <Dropdown
          options={optionsDropdown}
          selected={selected}
          onSelectedChange={setSelected}
        /> : null
      }*/}
    </div>
  );
};
