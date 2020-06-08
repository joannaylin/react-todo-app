import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task,
    };
  }

  handleRemove = (event) => {
    const deletedId = this.props.id;
    this.props.removeTask(deletedId);
  };

  toggleEditForm = (event) => {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  };

  handleUpdate = (event) => {
    event.preventDefault();
    this.props.updateTask(this.props.id, this.state.task);
    this.setState({
      isEditing: false,
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleToggle = () => {
    this.props.toggleCompletion(this.props.id);
  };

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div className="Todo">
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
            <input
              type="text"
              name="task"
              value={this.state.task}
              onChange={this.handleChange}
            ></input>
            <div className="Todo-buttons">
              <button>
                <ion-icon name="save-outline"></ion-icon>
              </button>
            </div>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="Todo">
          <li
            className={
              this.props.completed ? "Todo-task completed" : "Todo-task"
            }
            onClick={this.handleToggle}
          >
            {this.props.task}
          </li>
          <div className="Todo-buttons">
            <button onClick={this.toggleEditForm}>
              <ion-icon name="create-outline"></ion-icon>
            </button>{" "}
            <button onClick={this.handleRemove}>
              <ion-icon name="trash-outline"></ion-icon>
            </button>
          </div>
        </div>
      );
    }

    return result;
  }
}

export default Todo;
