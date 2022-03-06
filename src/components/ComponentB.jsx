import React from 'react';

function ComponentB(props) {

    const { boxChecked } = props;

    const handleChange = (event) => {
        boxChecked(event.target.checked);
    }

    return (
        <div>
            <input type="checkbox" onChange={handleChange} /> Blue
        </div>
    );
}

export default ComponentB;