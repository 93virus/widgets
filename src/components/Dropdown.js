import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
 
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = document.body.addEventListener('click', (event) => {
        if (ref.current && ref.current.contains(event.target)) {
            return;
        }
         setOpen(false);
     });  

     document.body.addEventListener('click', onBodyClick);

    return() => {
        document.body.addEventListener('click', onBodyClick);
    }
  }, [])

  const renderedOptions = options.map((options) => {
    if (options.value === selected.value) {
      return null;
    }
    return (
      <div
        key={options.value}
        className="item"
        onClick={() => onSelectedChange(options)}
      >
        {options.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a color</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}>
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
