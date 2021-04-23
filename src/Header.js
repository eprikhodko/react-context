import React from "react"
import ThemeContext from "./themeContext"

const Header = () => {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <header className={`${theme}-theme`}>
                    {theme === "light" ? <h2>Light Theme</h2> : <h2>Dark Theme</h2> }
                </header>
            )}
        </ThemeContext.Consumer>
        
    )    
}
       
export default Header
