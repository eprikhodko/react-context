import React from "react"

import Header from "./Header"
import Button from "./Button"
import {ThemeContextConsumer} from "./themeContext"

function App() {
    return (
        <div>
            <Header />

            <ThemeContextConsumer>
                {theme => (
                  <Button theme={theme}/>
                )}
            </ThemeContextConsumer>

            <Button theme="dark"/>
        </div>
    )
}

export default App