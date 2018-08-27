import React, { Component } from 'react';

import TodoList from './TodoList';
import AddNewItem from './AddNewItem';

class App extends Component {
    state = {
        toDoList: []
    };

    addNewItem = item => {
        const oldToDoList = this.state.toDoList;
        const newToDoItem = { id: Date.now(), item: item };
        const newToDoList = [...oldToDoList, newToDoItem];
        this.setState({ toDoList: newToDoList });
    };

    handleMarkAsRead = id => {
        const oldToDoList = this.state.toDoList;
        const newToDoList = oldToDoList.filter(item => item.id !== id);
        this.setState({ toDoList: newToDoList });
    };

    render() {
        return (
            <div className="container">
                <h1>To Do</h1>
                <AddNewItem addNewItem={this.addNewItem} />
                <TodoList
                    toDoList={this.state.toDoList}
                    handleMarkAsRead={this.handleMarkAsRead}
                />
            </div>
        );
    }
}

export default App;
