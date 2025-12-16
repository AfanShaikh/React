import PropTypes from 'prop-types';

export const Form = ({ formData }) =>{
    console.log('🚀 ~ formData:', formData);

    return(
        <>
        <h1>Form</h1>
        <form></form>
        </>
    );
    
};

Form.propTypes = {
    formData: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            isRequired: PropTypes.bool.isRequired,
            placeholder: PropTypes.string.isRequired,
        }).isRequired
    ),
};