import React, { useState } from 'react';

const addList = (inputText) => {
    console.log("it was clicked : " + inputText);
}

export default function InputBtn({inputText}){
    return (
        <div>
        <button onClick={() =>addList(inputText)}>추가</button>
        </div>
    )
}