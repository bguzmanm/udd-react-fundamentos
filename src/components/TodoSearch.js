import React from "react";
import { TodoContext } from "./TodoContext";

function TodoSearch() {

  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  }
  return (
    <div>

      <input className="todoSearch" placeholder="filtrar..."
        value={searchValue}
        onChange={onSearchValueChange}></input>
    </div>


  );
}

export { TodoSearch }