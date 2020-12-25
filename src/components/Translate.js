import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

const languageOptions = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const Translate = (props) => {
  const [language, setLanguage] = useState(languageOptions[0]);
  const [text, setText] = useState('');
  return (
    <div>
        <div className="ui form">
            <div className="field">
                <label>Enter Text</label>
                <input value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
        </div>
        
      <Dropdown
        options={languageOptions}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text}/>
    </div>
  );
};

export default Translate;

