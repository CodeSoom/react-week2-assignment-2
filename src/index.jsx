import React, {useState} from 'react';
import ReactDom from 'react-dom';
import Page from './Page';

function App() {

  const [state, setState]  = useState(
    {
      input: '',
      newId: 100000,
      list : []
    }
);

    function onChange(e){

      setState({
        ...state,
        input: e.target.value
      });
    }

  function onComplete(id){

    setState(
      { ...state,  
        list:list.filter(task => task.id !== id)
      }
      );

  }

  const {input,newId,list} = state;

  function onAdd(){

    setState({
      input : '', 
      newId : newId  + 1,
      list: [...list, 
        {
          id : newId,
          content:input
        }
      ]     
    }    
    );
  }

  return (
    <Page
      input={input}
      list={list}
      onAdd={onAdd}
      onComplete={onComplete}
      onChange={onChange}
    />
  );

  }

  function render(){
    ReactDom.render(
    <App/>,
    document.getElementById('app')
  );
}

render();