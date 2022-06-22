import React, { useReducer } from 'react'
import { useState } from 'react'
import "./Contact.css"
import axios from "axios"
export default function Contact() {
    const [message, setMessage] = useState('');
    const [user, setUser] = useState({
        lname: "",
        fname:"",
        to:  "",
        phoneNo: "",
        desc: ""
    })
    const {firstName, lastName,to, phoneNo,desc} = user;
    const onInputChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const onSubmit = async e => {
        // e.preventDefault()
        await axios.post("http://localhost:4000/users/", user)
        .then(response => setMessage(response.data.resp))
    }
  return (
    <div>
      <div class="contact">
      <h2>Contact Us</h2>
      <div class="row100">
        <div class="col">
          <div class="inputBox">
            <input type="text" name="fname"
            onChange={onInputChange} value={firstName} required="required"/>
            <span class="text">First Name</span>
            <span class="line"></span>
          </div>
        </div>
        <div class="col">
          <div class="inputBox">
            <input type="text" name="lname"
            onChange={onInputChange} value={lastName} required="required"/>
            <span class="text">Last Name</span>
            <span class="line"></span>
          </div>
        </div>
      </div>
      <div class="row100">
        <div class="col">
          <div class="inputBox">
            <input type="text" name="to"
            onChange={onInputChange} value={user.to} required="required"/>
            <span class="text">Email</span>
            <span class="line"></span>
          </div>
        </div>
        <div class="col">
          <div class="inputBox">
            <input type="text" name="phoneNo"
            onChange={onInputChange} value={phoneNo} required="required"/>
            <span class="text">Mobile</span>
            <span class="line"></span>
          </div>
        </div>
      </div>
      <div class="row100">
        <div class="col">
          <div class="inputBox textarea">
            <textarea type="text" name="desc"
            onChange={onInputChange} value={desc} required="required"/>
            <span class="text">Type your message Here...</span>
            <span class="line"></span>
          </div>
        </div>
      </div>
      
      <div class="row100">
        <div class="col">
          <input type="submit" onClick={onSubmit} value="Send"/>
        </div>
      </div>
    </div>
    </div>
  )
}
