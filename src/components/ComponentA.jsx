import React from 'react';

function ComponentA(props) {

    const { boxChecked } = props;

    const handleChange = (event) => {
        boxChecked(event.target.checked);
    }

    return (
        <div>
            <input type="checkbox" onChange={handleChange} /> Yellow
        </div>
    );
}

export default ComponentA;