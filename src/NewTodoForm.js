import React, { Component } from "react"
import "./NewTodoForm.css"
const shortid = require("shortid");

class NewTodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: shortid.generate(),
      task: event.target.task.value
    };
    this.props.createTask(newTask)
    this.setState({task: ""})
  };

  render() {
    return (
      <div> 
        <form className="NewTodoForm" onSubmit = {this.handleSubmit}>
          <h4>Enter a New Task</h4>
          <br/>
          <input type="text" name="task" placeholder="New Task" value={this.state.task} onChange={this.handleChange}></input>
          <button type="submit">Add Todo</button>
        </form>
        <br/>
      </div>
    )
  }
}

export default NewTodoForm