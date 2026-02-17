import Proptypes from 'prop-types';
import { useState,useRef } from 'react';
import { PinItems } from './Pinitems';


export const InputBox = ({ setMainVal, perBox, length, style }) => {
    const [values, setValues] = useState(new Array(length).fill(""));
    const elements = useRef(new Array(length).fill(null));

    const handleChange = (v, i) => {
        const vals = [...values];
        vals[i] = v;
        setValues(vals);

        if (i < vals.length - 1) {
            elements.current[i + 1]?.focus();
        }
        setMainVal(vals.join(""));
    };

    const handleBackSpace = (i) => {
        const vals = [...values];
        vals[i] = "";
        setValues(vals);

        if (i === 0) return;
        elements.current[i - 1]?.focus();
        setMainVal(vals.join(""));
    };

    return (
        <>
            {values.map((items, index) => (
                <PinItems  
                    ref={(v) => (elements.current[index] = v)}
                    style={style}
                    key={index}
                    max={perBox}
                    handleChange={(dataVal) => handleChange(dataVal, index)}
                    handleBackSpace={() => handleBackSpace(index)}
                />
            ))}
        </>
    );
};

InputBox.propTypes = {
    label: Proptypes.string.isRequired,
    length: Proptypes.number.isRequired,
    perBox: Proptypes.number.isRequired,
    setMainVal: Proptypes.func,
    style: Proptypes.object
};

InputBox.defaultProps = {
    label: "hello",
    length: 3,
    perBox: 1
};