import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  const updateText = (event) => {
    setTerm(event.target.value);
  };

  useEffect(() => {
      const timerId = setTimeout(()=> {
        setDebouncedTerm(term);
      }, 500);
      return () => {
          clearTimeout(timerId);
      }
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("http://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };
    if (term)
    search();
  }, [debouncedTerm]);

  const renderedResults = results.map((result, index) => {
    return (
      <div
        key={result.pageid}
        className="item"
        onClick={() => redirectWiki(result.pageid)}
      >
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  const redirectWiki = (pageid) => {
    window.location.href = "https://en.wikipedia.org?curid=" + pageid;
  };

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search term</label>
          <input
            className="input"
            value={term}
            onChange={(event) => updateText(event)}
          />
        </div>
      </div>
      <div style={{ cursor: "pointer" }} className="ui celled list">
        {renderedResults}
      </div>
    </div>
  );
};

export default Search;
