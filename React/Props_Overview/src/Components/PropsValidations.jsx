import React from 'react';

import Proptypes from 'prop-types';

export const PropsValidations = ({ length, label }) =>{
 
    return(
        <>
        <h2>{label}</h2>
        <h3>{length}</h3>
        </>
    );
};

PropsValidations.prototypes = {
    length: Proptypes.oneOf([1,3]).isRequired,
};