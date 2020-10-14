import React from 'react'
import { ThemeContext } from './ThemeContext'


export default function ThemeToggler() {
    return (
        <ThemeContext.Consumer>
            {({ name, toggleTheme }) => (
                <input
                    type="submit"
                    className="submit-todo"
                    value={`Switch to ${name === 'light' ? 'dark' : 'light'} theme`}
                    onClick={toggleTheme}
                />
            )}
        </ThemeContext.Consumer>
    )
}
