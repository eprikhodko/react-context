import React, {Component} from "react"
import ThemeContext from "./themeContext"

class Header extends Component {
    static contextType = ThemeContext
    render() {
        const theme = this.context
        return (
            <header className={`${theme}-theme`}>
                {theme === "light" ? <h2>Light Theme</h2> : <h2>Dark Theme</h2> }
                
            </header>
        )    
    }
}

export default Header
