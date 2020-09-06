import React from 'react';

function Add( {newTodo, onChange, onSubmit} ) {

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={newTodo} id="input" onChange={onChange}></input>
                <input type="submit" value="추가"></input>
            </form>    
        </div>
    );
}

export default Add;