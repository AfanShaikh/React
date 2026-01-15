import { Route, Routes } from 'react-router-dom';

import React from 'react';

import { Home } from '../Pages/Home';
import { Login } from '../Pages/Login';
import { SignUp } from '../Pages/SignUp';
import { Todo } from '../Pages/Todo';
import { Counter } from '../Components/Counter';

export const AllRoutes = () =>{
    return(
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<SignUp />}></Route>
            <Route path='/Todo' element={<Todo />}></Route>
            <Route path='/Counter' element={<Counter />}></Route>

        </Routes>
    );
};