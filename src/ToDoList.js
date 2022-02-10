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
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const textDelete=()=>{}
  const textEdit=()=>{}
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

        {items.map((itemsValue) => {
          return (
            <div className="map">
              <textArea type="text" value={inputList}>
                {itemsValue}
              </textArea>
              <div className="mapButton">
                <i onClick={textDelete}>
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
