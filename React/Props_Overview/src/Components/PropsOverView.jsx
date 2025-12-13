import React from 'react';

export const PropsOverView = ({
    Components = 'None',
    Name = 'Not Specify',
    Email = 'Not Provided',
    Phone = 'Not Given',
}) =>{
    return(
        <>
        <h1>Props OverView No: {Components}</h1>
        <h2>Name: {Name}</h2>
        <h3>Email: {Email}</h3>
        <h4>Phone: {Phone}</h4>
        </>
    )
};