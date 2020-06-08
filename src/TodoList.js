import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import "./TodoList.css"
const shortid = require("shortid");

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: shortid.generate(), task: "Fold laundry", completed: false},
        { id: shortid.generate(), task: "Check insurance", completed: false },
      ],
    };
  }

  grabTodos = () => {
    return this.state.todos.map((todo) => (
      <Todo
        key={todo.id}
        id={todo.id}
        task={todo.task}
        completed={todo.completed}
        removeTask={this.removeTask}
        updateTask={this.updateTask}
        toggleCompletion={this.toggleCompletion}
      />
    ));
  };

  createTask = (newTask) => {
    this.setState({
      todos: [...this.state.todos, newTask],
    });
  };

  removeTask = (id) => {
    const updatedTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({
      todos: updatedTodos,
    });
  };

  updateTask = (id, updatedTask) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos,
    });
  };

  toggleCompletion = (id) => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed}
      }
      return todo
    })
    this.setState({
      todos: updatedTodos
    })
  }

  render() {
    return (
      <div className="TodoList">
        <h1>Things to Do: <span>a simple React app</span></h1>
        <br/>
        <NewTodoForm createTask={this.createTask} />
        <ul>{this.grabTodos()}</ul>
      </div>
    );
  }
}

export default TodoList;
