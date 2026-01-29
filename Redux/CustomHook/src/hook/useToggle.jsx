import { useState } from 'react';

export const useToggle = (incomeVal = false) =>{
    const [value, setValue] = useState(incomeVal);

    function toggleValue(val) {
        if (typeof val === 'boolean') {
            setValue(val);
        } else{
            setValue(prev => !prev);
        }
       };
       return[value, toggleValue];
};