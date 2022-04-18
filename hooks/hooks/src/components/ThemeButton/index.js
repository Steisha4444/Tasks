import { ThemeContext } from '../Theme'
import React, { useContext } from 'react'

export const ThemeButton = (props) => {

    const theme = useContext(ThemeContext);

    return (
        <button onClick={props.onClick}
            style={{
                foreground: theme.foreground,
                background: theme.background,
                padding: theme.padding,
                border: theme.border,
                cursore: theme.cursore,
                color: theme.color
            }}
        >
            {props.text}
        </button>
    )
}
