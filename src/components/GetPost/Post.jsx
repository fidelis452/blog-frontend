// import React from 'react'
import React, { Component } from 'react'
// import "bootstrap/dist/css/bootstrap.min.css"
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
import 'mdb-ui-kit/css/mdb.min.css'
import "./Post.css"
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function Post() {
    const [post, setPost] = useState([])

    useEffect(() => {

        axios.get("http://localhost:5000/addpost")
            .then(res => {
                setPost(res.data)
                //  console.log(post);
            })
            .catch(err => {
                console.log(err);
            })
    })
    return (
        <div>
            {
                post?.map((posts) => {
                    // { console.log(posts) }
                    return (
                        <>
                            <div class="projcard-container">
                                <div class="projcard projcard-blue">
                                    <div class="projcard-innerbox">
                                        <img class="projcard-img" src={posts.image} />
                                        <div class="projcard-textbox">
                                            <div class="projcard-title">{posts.category}</div>
                                            <div class="projcard-subtitle">{posts.title}</div>
                                            <div class="projcard-bar"></div>
                                            <div class="projcard-description">{posts.description}</div>
                                            <div class="projcard-tagbox">
                                                <span class="projcard-tag">HTML</span>
                                                <span class="projcard-tag">CSS</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}
