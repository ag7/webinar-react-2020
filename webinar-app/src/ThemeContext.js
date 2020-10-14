import {createContext} from 'react';

export const themes = {
  light: {panelBackground: '#DDDDDD', textForeground: '#555555'},
  dark: {panelBackground: '#555555', textForeground: '#DDDDDD'}
}

export const ThemeContext =
    createContext({name: 'dark', theme: themes.dark, toggleTheme: () => {}})
