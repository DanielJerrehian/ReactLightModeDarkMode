import React from "react"

export default function Main(props) {
    return (
        <main className={props.darkMode ? "dark" : ""}>
            <div className="main-container">
                <h1 className="main--title">A little bit about me...</h1>
                <ul className="main--facts">
                    <li>Born in Atlanta, Georgia</li>
                    <li>Graduated from Penn State</li>
                    <li>Currently living in Germany</li>
                    <li>Hobbies include producing music, playing piano, coding, and working out</li>
                    <li>Favorite sports team is the Philadelphia Eagles</li>
                </ul>
            </div>
        </main>
    )
}