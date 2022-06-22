import React from "react"
import Register from "./Register"
import Login from "./Login";
import "./css/user.css"
const App = () => {
    return (
        <div className="app">
            <Register />
            <Login />
        </div>
    )
}
export default App;