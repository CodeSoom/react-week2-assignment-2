import React from 'react';

export default function CompleteButton({ index , text, onClick }){
    return (
        <button type="button" onClick={()=>onClick(index)}>{text}</button>
    );
}
