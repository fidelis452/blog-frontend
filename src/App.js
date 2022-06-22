import React from "react"
import Register from "../src/components/Register"
import Home from "./components/Home/Home"
import Topbar from "./components/Topbar/Topbar"
import AddPost from "./components/AddPost/AddPost";
import GetPost from "./components/GetPost/Post"
import Footer from "./components/footer/Footer"
import "./App.css"
import Blog from "./components/Blogbtn/Blog";
import Login from "./components/Login";
import About from "./components/About/About."
import Experience from "./components/Experiene/Experience"
import Services from "./components/Services/Service"
import Contact from "./components/Contact/Contact";
import Testimonials from "./components/Testimonials/Testimonials"
const App = ()=>{
    return(
        <div>
            <Topbar />
            <div className="app">
                <Home />
                {/* <Login />
                <Register /> */}
            {/* <AddPost/> */}
            <About />
            <Services />
            <Experience />
            <Testimonials />
            {/* <Blog/> */}
            <Contact />
            {/* <GetPost />  */}
            </div>
            <Footer />
        </div>
    )
}
export default App;