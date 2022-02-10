import React, { useState } from "react";
import { FcFullTrash } from "react-icons/fc";
// import { FcDownload } from "react-icons/fc";
import { FaPencilAlt } from "react-icons/fa";
import "./style.css";

const ToDoList = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const inputItems = (event) => {
    setInputList(event.target.value);
  };
  const itemSubmit = () => {
    if (!inputList) {
    } else {
      setItems([...items, inputList]);
      setInputList("");
    }
  };
  const textDelete = (id) => {
    const updatedtext = items.filter((elem, ind) => {
      return ind !== id;
    });
    setItems(updatedtext);
  };
  const textEdit = () => {};
  return (
    <>
      <div className="container">
        <h1 className="h1">ToDo List</h1>
        <input
          type="text"
          value={inputList}
          placeholder="Add Your Items"
          onChange={inputItems}
        />
        <button onClick={itemSubmit}>+ </button>

        {items.map((itemsValue, index) => {
          return (
            <div className="map" key={index}>
              <textArea type="text" value={inputList}>
                {itemsValue}
              </textArea>
              <div className="mapButton">
                <i onClick={() => textDelete(index)}>
                  <FcFullTrash />
                </i>
                {/* <i onClick={textDownload}>
                  <FcDownload />
                </i> */}
                <i onClick={textEdit}>
                  <FaPencilAlt />
                </i>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ToDoList;
