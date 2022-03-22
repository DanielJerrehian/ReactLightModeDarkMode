import React from "react"

export default function WindowWidthTracker() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {
        function listenWidth() {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener("resize", listenWidth)
        return () => { window.removeEventListener("resize", listenWidth) }
    }, [])

    return (
        <p className="nav-page-attributes--window">Window Width: {windowWidth}px</p>
    )
}