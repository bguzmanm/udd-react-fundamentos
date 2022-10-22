import React from "react";
import { Route, Routes } from "react-router-dom";

import { TodoContext } from './TodoContext';
import { Head } from './Head';
import { Footer } from './Footer';

import { Layout } from './Layout';
import { About } from './About';
import { Home } from './Home';
import { Uf } from './Uf';

function AppUI(){

  const {
    // Estos no los estaba usando, así que los comento.
    // searchValue, 
    // setSearchValue,
    // loading,
    // searchedTodos,
    //  completeTodo
    totalTodos,
    completedTodos,
  } = React.useContext(TodoContext);

    return (
      <React.Fragment>
        <Head 
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          />
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="about" element={<About/>}/>
              <Route path="uf" element={<Uf/>}/>
            </Route>
          </Routes>
        
        <Footer/>
      </React.Fragment>
    );
}

export {AppUI};