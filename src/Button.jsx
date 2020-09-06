import React from 'react';

export default function Button({ value, onClick }){
    return <button type="button" onClick={onClick}>{value}</button>;
}
