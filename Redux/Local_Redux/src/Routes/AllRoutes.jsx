import { Route, Routes } from 'react-router-dom';

import React from 'react';

import { Home } from '../Pages/Home';
import { Login } from '../Pages/Login';
import { Sign } from '../Pages/SignUp';
import { Todo } from '../Pages/Todo';
import { Counter } from '../Components/Counter';
import { PrivateRoutes } from '../Components/PrivateRoutes';
import { Navbaar } from '../Components/Navbar';

export const AllRoutes = () =>{
    return(
      <>
      
      
      <Navbaar />
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/todologin' element={<Login />}></Route>
            <Route path='/todosign' element={<Sign />}></Route>
           <Route
          path='/todo'
          element={
            <PrivateRoutes>
              <Todo />
            </PrivateRoutes>
          }
        ></Route>
            <Route path='/Counter' element={<Counter />}></Route>

        </Routes>
        </>
    );
};