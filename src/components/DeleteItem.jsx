import React, { useState } from 'react';

export default function DeleteItem({items}) {
    const delItem = (it) => {
       setItems(items.filter(item =>item.id !== it))
    };
    return(
        <button onClick={() => delItem(items.id)}>완료</button>
    )
}
