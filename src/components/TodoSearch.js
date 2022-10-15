import React from "react";
import { TodoContext } from "./TodoContext";


function TodoSearch(){
  
  const {searchValue, setSearchValue} = React.useContext(TodoContext);
  
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  }
  return (
    <input className="todoSearch" placeholder="filtrar..."
    onChange={onSearchValueChange}></input>
  );
}

export {TodoSearch}