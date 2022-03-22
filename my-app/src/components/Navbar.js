import React from "react"
import ReactIconSmall from "../images/react-icon-small.png"
import WindowWidthTracker from "./WindowWidthTracker"

export default function Navbar(props) {
    const [showWindowWidth, setShowWindowWidth] = React.useState(true)
    
    function toggleWindowWidth() {
        setShowWindowWidth(prevState => !prevState)
    }

    return (
         <nav className={props.darkMode ? "dark": ""}>
            <img className="nav--logo-icon" src={ReactIconSmall}/>
            <h3 className="nav--logo-text">ReactFacts</h3>
            <div className="nav-page-attributes">
                <div className="nav-page-attributes--window-width">
                    <button className="nav-page-attributes--window-width-button" onClick={toggleWindowWidth}>Toggle Window Tracker</button>
                    {showWindowWidth && <WindowWidthTracker />}                    
                </div>
                <div className="toggler">
                    <p className="toggler--light">Light</p>
                    <div className="toggler--slider" onClick={props.toggleDarkMode}>
                        <div className="toggler--slider--circle"></div>
                    </div>
                    <p className="toggler--dark">Dark</p>
                </div>
            </div>
        </nav>
    )
}