import React, { useEffect, useState } from "react";
import { getElements } from "../../helpers/getElements";
import SearchElement from "../search/SearchElement";

const ListElements = () => {
  const [coleccionElements, setColeccionElements] = useState([]);

  useEffect(() => {
    getElements().then((colection) => setColeccionElements(colection));
  }, []);

  return (
    <div>
      <SearchElement
        setColeccionElements={setColeccionElements}
      ></SearchElement>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User Id</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {coleccionElements.map((element) => (
            <tr key={element.id}>
              <th>{element.id}</th>
              <td>{element.userId}</td>
              <td>{element.title}</td>
              <td>{element.completed ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {coleccionElements.length === 0 && (
        <p>Your search did not match any result</p>
      )}
    </div>
  );
};
export default ListElements;
