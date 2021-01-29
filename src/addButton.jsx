import React from 'react';

export default function AddButton({text, onClick}){
    return (<button type="button" onClick={onClick}>{text}</button>);
}