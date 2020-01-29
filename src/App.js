import React, { Component } from "react";
import "./App.css";
import TodoItem from "./TodoItem";
import TodosData from "./Components/TodosData";
import todosData from "./Components/TodosData";

class App extends Component {
  constructor(){
    super();
    this.state= {
      todos: todosData,

    }
    this.handleChange = this.handleChange(this)
  }
  handleChange(id) {
    let idChange;
    if (this.handleChange === true) {
      idChange = completed;
    } else {
      idChange =
    }
  }
  render (){
const todoItems = this.state.map(item => <TodoItem key={item.id} item={item}/>)
    return (
    <div className="todo-list">{todoItems}</div>
  );
  }
  
}

export default App;
