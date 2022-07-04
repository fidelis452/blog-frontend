import React from 'react'
import { useState } from 'react'
import axios from "axios"
import "./Contact.css"
const Contact = ({setNew}) => {
  const [msg, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    text: ""
  })
  const changeHandler = e => {
    const {name, value} = e.target
    setData({ ...msg, [name]:value 
    })
  }
  const submitHandler = e => {
    e.preventDefault()
    axios.post("https://wairimu.herokuapp.com/contact", msg)
    .then(res => 
      setNew(res.data.msg))
    .catch(res => res.err)
    console.log(msg);
  }
  return (
    <div className='contact'>
      <form onSubmit={submitHandler}>
        <div class="contact-title">Contact Me</div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputfname">First Name</label>
            <input
              type="fname"
              name='fname'
              class="form-control"
              id="inputname"
              onChange={changeHandler}
              value={msg.fname}
              placeholder="First Name" />
          </div>
          <div class="form-group col-md-6">
            <label for="inputlname">Last Name</label>
            <input
              type="lname"
              name='lname'
              class="form-control"
              id="inputfname"
              onChange={changeHandler}
              value={msg.lname}
              placeholder="Last Name" />
          </div>
        </div>
        <div class="form-group">
          <label for="inputEmail4">Email</label>
          <input
            type="email"
            name='email'
            class="form-control"
            id="inputEmail4"
            onChange={changeHandler}
            value={msg.email}
            placeholder="Email" />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea
            class="form-control"
            name="text"
            onChange={changeHandler}
            value={msg.text}
            placeholder="Enter Your  Message here....."
            id="exampleFormControlTextarea1"
            rows="3">
          </textarea>
        </div>
        <button type="submit" class="btn btn-primary">Send</button>
      </form>
    </div>
  )
}
export default Contact;
