import React from 'react';

export default function Input({text, onChange}){
    return (<input type="text" value={text} onChange={onChange}/>);
}
