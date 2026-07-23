import React, { useMemo, useState } from "react";
import Card from "./card";

function Search({ data, display, setDisplay }) {
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    const text = query.trim().toLowerCase();

    return !query
      ? data
      : data
          ?.map((item) => item)
          .filter((item) =>
            item.title.toLowerCase().includes(text)
          );
  }, [query, data]);

  return (
    <div className="search-wrapper">
      <header
        className="search-header"
        style={{
          display: display ? "flex" : "none",
        }}
      >
        <div className="search-box">
          <span className="search-icon">⌕</span>

          <input
            type="text"
            value={query}
            onChange={(event) =>
              setQuery(event.target.value)
            }
            placeholder="Search recipes or languages"
            autoFocus
          />

          {query && (
            <button
              className="clear-search"
              onClick={() => setQuery("")}
            >
              ×
            </button>
          )}
        </div>
      </header>

      <Card
        display={display}
        setDisplay={setDisplay}
        title={filteredItems}
      />
    </div>
  );
}

export default Search;