import React from "react"
import ReactDOM from "react-dom"
import "./main.css"
import App from "./views/app.js"

console.log("Hello World!")

ReactDOM.render(<App name="World" />, document.getElementById("app-container"))
