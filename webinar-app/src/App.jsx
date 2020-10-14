import React, { useState } from 'react';

import { ThemeContext, themes } from './ThemeContext'
import TodoList from './TodoList'
import './App.css'

export default function () {
  const [themeName, setThemeName] = useState('dark');
  const toggleTheme = () => setThemeName(themeName === 'light' ? 'dark' : 'light')

  return (
    <ThemeContext.Provider value={{ name: themeName, theme: themes[themeName], toggleTheme }}>
      <div className="background">
        <TodoList />
      </div>
    </ThemeContext.Provider>
  );
}
