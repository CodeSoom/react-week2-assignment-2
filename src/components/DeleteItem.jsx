import React from 'react';

export default function DeleteItem(items) {
    const delItem = () => {
        console.log("it is deleted");
    };
    return(
        <button onClick={() => delItem(items)}>완료</button>
    )
}
