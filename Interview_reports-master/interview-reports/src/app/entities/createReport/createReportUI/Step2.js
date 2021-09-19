import React from 'react';

const Step2 = ({ handleOnChange, value }) => {
    return(
        <h1> <input onChange={ (e) => handleOnChange('company', e.target.value)} value={value} /></h1>
    )
}

export default Step2;