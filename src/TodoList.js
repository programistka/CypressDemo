import React, { Component } from 'react';

class TodoList extends Component {
    renderToDoList = () => {
        return this.props.toDoList.map(toDoItem => {
            return (
                <li className="list-group-item col-sm-12" key={toDoItem.id}>
                    <span className="col-sm-8">{toDoItem.item}</span>
                    <button
                        name="removeTodoButton"
                        className="btn btn-danger col-sm-2 float-right"
                        onClick={() => this.props.handleMarkAsRead(toDoItem.id)}
                    >
                        Mark as Done
                    </button>
                </li>
            );
        });
    };

    render() {
        return <ul className="list-group">{this.renderToDoList()}</ul>;
    }
}

export default TodoList;
