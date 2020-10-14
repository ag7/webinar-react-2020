import React, { Component } from 'react';

import api from './fetcher'
import Todo from './Todo'
import AddTodo from './AddTodo'
import TodoErrorBoundary from './TodoErrorBoundary'
import ThemeToggler from './ThemeToggler'
import { ThemeContext } from './ThemeContext'
import './TodoList.css'

export default class TodoList extends Component {
    constructor() {
        super()
        this.state = { todos: [] }
    }

    componentDidMount = async () => {
        this.setState({ todos: await api.get("/todos") });
    }

    onAddTodo = async (todoText) => {
        this.setState({ todos: await api.post('/todos', { todo: todoText }) });
    }

    onRemoveTodo = async (index) => {
        this.setState({ todos: await api.delete('/todos', { todo: index }) })
    }

    renderTodo = (text, idx) => <Todo key={idx} text={text} onClick={() => this.onRemoveTodo(idx)} />

    render() {
        const { todos } = this.state
        const { theme: { panelBackground, textForeground } } = this.context;

        return (
            <>
                <TodoErrorBoundary>
                    <div className="container" style={{ backgroundColor: panelBackground, color: textForeground }}>
                        {todos.length ? todos.map(this.renderTodo) : 'No todos to show'}
                    </div>
                </TodoErrorBoundary>
                <AddTodo onAddTodo={this.onAddTodo} />
                <ThemeToggler />
            </>
        )
    }
}

TodoList.contextType = ThemeContext;
