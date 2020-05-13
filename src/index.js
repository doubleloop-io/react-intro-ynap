import "bootstrap/dist/css/bootstrap.min.css"
import "./main.css"
import React from "react"
import ReactDOM from "react-dom"
import App from "./views/app.js"

console.log("Hello World!")

ReactDOM.render(<App name="World" />, document.getElementById("app-container"))
