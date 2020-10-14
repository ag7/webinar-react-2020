import React, { useState, useContext } from 'react';

import { ThemeContext } from './ThemeContext'
import './Todo.css'


export default function AddTodo({ onAddTodo }) {
    const [text, setText] = useState('');
    const { theme } = useContext(ThemeContext)

    const onAddClick = () => {
        if (!!text) {
            onAddTodo(text)
            setText('')
        }
    }

    return (
        <div className="container" style={{ backgroundColor: theme.panelBackground }}>
            <div className="add-todo-container">
                <input
                    className="input-todo"
                    type="text"
                    placeholder="Insert todo here"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <input type="submit" className="submit-todo" value="Add Todo" onClick={onAddClick} />
            </div>
        </div >
    )
}
