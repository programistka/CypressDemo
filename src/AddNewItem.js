import React, { Component } from 'react';

class AddNewItem extends Component {
    state = {
        toDoItem: ''
    };

    handleChange = event => {
        this.setState({ toDoItem: event.target.value });
    };

    handleSubmit = () => {
        this.props.addNewItem(this.state.toDoItem);
        this.setState({ toDoItem: '' });
    };

    render() {
        return (
            <form className="form-inline">
                <input
                    type="text"
                    name="addTodoInput"
                    className="form-control mb-2 mr-sm-2 w-50"
                    onChange={this.handleChange}
                    value={this.state.toDoItem}
                />
                <button
                    name="addTodoButton"
                    className="btn btn-primary mb-2"
                    onClick={this.handleSubmit}
                    disabled={!this.state.toDoItem}
                >
                    Add ToDo Item
                </button>
            </form>
        );
    }
}

export default AddNewItem;
