import React, { useState } from "react";

import { addNotify } from '../Redux/ActionType';
import { useDispatch } from 'react-redux';

export const Login = () =>{
    const dispatch = useDispatch();
    const [form , setForm] = useState({
        email:'',
        pass: '',
    });

    const handleChange = (e) =>{
        const {name , value} = e.target;

        setForm({...form, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addNotify(form));
    };

    return (
        <form onSubmit={handleSubmit}
        style={{
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            margin: '100px auto',
            gap: '1rem',
            textTransform: 'capitalize',
        }}
        >
        <label htmlFor="email">Email</label>
        <input type= "text" id="email" name="email" onChange={handleChange}/>
        <label htmlFor="pass">Password</label>
        <input type= "text" id="pass" name="pass" onChange={handleChange}/>
        <button type="submit">Submit</button>
        </form>
    )
};