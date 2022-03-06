import React, { useEffect, useRef } from 'react';

function ComponentC(props) {

    const { aChecked, bChecked } = props;
    const box = useRef(null);

    useEffect(() => {
        if (aChecked && bChecked) {
            box.current.style.backgroundColor = 'green';
        } else if (aChecked) {
            box.current.style.backgroundColor = 'yellow';
        } else if (bChecked) {
            box.current.style.backgroundColor = 'blue';
        } else {
            box.current.style.backgroundColor = 'red';
        }
    })

    return (
        <div ref={box} style={{ height: '100px', width: '100px' }}>Hey There</div>
    );
}

export default ComponentC;