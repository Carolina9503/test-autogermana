import React, { useState } from "react";
import { getElementById, getElements } from "../../helpers/getElements";

const SearchElement = ({ setColeccionElements }) => {
  const [type, setType] = useState("All");

  const [inputValue, setInputValue] = useState("");

  const data = {
    All: (text) =>
      getElements().then((colection) =>
        setColeccionElements(
          colection.filter(
            (item) =>
              item.userId.toString().includes(text) ||
              item.id.toString().includes(text) ||
              item.title.toLowerCase().includes(text.toLowerCase())
          )
        )
      ),

    "User Id": (id) => {
      if (id !== "" && !isNaN(id)) {
        getElements().then((colection) =>
          setColeccionElements(
            colection.filter((item) => item.userId === Number(id))
          )
        );
      }
    },
    Id: (id) =>
      getElementById(id).then((colection) =>
        setColeccionElements(
          colection.id
            ? [
                {
                  userId: colection.userId,
                  id: colection.id,
                  title: colection.title,
                  completed: colection.completed,
                },
              ]
            : []
        )
      ),
    Title: (text) => {
      getElements().then((colection) =>
        setColeccionElements(
          colection.filter((item) =>
            item.title.toLowerCase().includes(text.toLowerCase())
          )
        )
      );
    },
  };

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data[type]) {
      data[type](inputValue);
    }
  };
  const onChangeType = (e) => {
    setType(e.target.value);
    setInputValue("");
  };
  return (
    <div>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col">
          <input
            type={type === "All" || type === "Title" ? "text" : "number"}
            className="form-control"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Search Criteria"
            autoComplete="off"
            aria-label="search-input"
          />
        </div>
        <div className="col">
          <select onChange={onChangeType} className="form-select">
            <option value="All">All</option>
            <option value="User Id">User Id</option>
            <option value="Id">Id</option>
            <option value="Title">Title</option>
          </select>
        </div>
        <div className="col-auto mt-3">
          <button
            type="submit"
            className="btn btn-primary mb-3"
            aria-label="search-button"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchElement;
