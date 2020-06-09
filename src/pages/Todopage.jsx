import React from 'react';
import Todoinput from '../components/Todoinput'
import Todolist from '../components/Todolist'

function Todopage() {
    return (
        <div>
            <h1>To-do</h1>
            <Todoinput />
            <Todolist />
        </div>
    );
}

export default Todopage;