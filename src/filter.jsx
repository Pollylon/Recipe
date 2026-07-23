import { useState } from "react";
import Search from "./search";

function Filter({ data, display, setDisplay }) {
  const [query, setQuery] = useState("");
  const [menu, setMenu] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("contact");

    setQuery(
      name
        ? data.filter((item) => item.tags?.includes(name))
        : ""
    );
  }


  return (
    <div className="filter-wrapper">
      <header
        className="filter-header"
        style={{
          display: display ? "flex" : "none",
        }}
      >
      <button
  className={`filter-menu-btn ${menu ? "active" : ""}`}
  onClick={() => setMenu((prev) => !prev)}
>
  <span>☰</span>
  Filter
</button>
        {menu && (
          <form
            className="filter-form"
            onSubmit={handleSubmit}
          >
            <fieldset>
              <legend>Choose a category</legend>

              <div className="filter-options">
                <div className="filter-option">
                  <input
                    type="radio"
                    id="contactChoice1"
                    name="contact"
                    value="High Carb"
                  />

                  <label htmlFor="contactChoice1">
                    High Carb
                  </label>
                </div>

                <div className="filter-option">
                  <input
                    type="radio"
                    id="contactChoice2"
                    name="contact"
                    value="High Protein"
                  />

                  <label htmlFor="contactChoice2">
                    High Protein
                  </label>
                </div>

                <div className="filter-option">
                  <input
                    type="radio"
                    id="contactChoice3"
                    name="contact"
                    value="Gluten Free"
                  />

                  <label htmlFor="contactChoice3">
                    Gluten free
                  </label>
                </div>

                <div className="filter-option">
                  <input
                    type="radio"
                    id="contactChoice4"
                    name="contact"
                    value="Healthy Diet"
                  />

                  <label htmlFor="contactChoice4">
                    Healthy Diet
                  </label>
                </div>
              </div>

              <button
                className="submit-filter-btn"
                type="submit"
              >
                Submit
              </button>
            </fieldset>
          </form>
        )}
      </header>

      <Search
        display={display}
        setDisplay={setDisplay}
        data={query || data}
      />
    </div>
  );
}

export default Filter;