import React, { useContext } from 'react';

import { ThemeContext } from './ThemeContext'
import './Todo.css'


export default function Todo(props) {
    const { text, onClick } = props;
    const { theme } = useContext(ThemeContext)

    if (text === 'error') {
        throw new Error('Crashed because of error')
    }

    return (
        <div className="todo-container">
            <div className="todo-element" style={{ color: theme.textForeground }}>{text}</div>
            <input type="submit" value="X" onClick={() => onClick()} />
        </div>
    )
}
