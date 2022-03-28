import React from "react";
import ReactDom from "react-dom";
import TodoListPage from "./todoListPage";

function App() {
    return (
        <TodoListPage />
    )
}

ReactDom.render(
    <App/>,
    document.getElementById("app")
)