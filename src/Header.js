import React from "react"
import {ThemeContextConsumer} from "./themeContext"

const Header = () => {
    return (
        <ThemeContextConsumer>
            {theme => (
                <header className={`${theme}-theme`}>
                    {theme === "light" ? <h2>Light Theme</h2> : <h2>Dark Theme</h2> }
                </header>
            )}
        </ThemeContextConsumer>
        
    )    
}
       
export default Header
