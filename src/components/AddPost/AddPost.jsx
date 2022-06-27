import React, { Component } from 'react'
// import "bootstrap/dist/css/bootstrap.min.css"
import "./AddPost.css"
import axios from "axios"
class AddPost extends Component {
  constructor(){
    super()
    this.state = {
      category: "",
      title: "",
      image: "",
      description:""
    }
    this.changeCategory = this.changeCategory.bind(this)
    this.changeTitle = this.changeTitle.bind(this)
    this.changeImage = this.changeImage.bind(this)
    this.changeDescription = this.changeDescription.bind(this)
    this.addPosts = this.addPosts.bind(this)
  }
  changeCategory(event){
    this.setState({
      category: event.target.value
    })
  }
  changeTitle(event){
    this.setState({
      title: event.target.value
    })
  }
  changeImage(event){
    this.setState({
      image: event.target.value
    })
  }
  changeDescription(event){
    this.setState({
      description: event.target.value
    })
  }
  addPosts(event){
    event.preventDefault()
    const addedPost = {
      category:this.state.category,
      title:this.state.title,
      image:this.state.image,
      description:this.state.description
    }
    axios.post("https://localhost:5000/addpost", addedPost)
    .then(
      response =>
      console.log(response.data)
    )
    .catch(
      response => 
      console.log(response.error)
    )
    this.setState = {
      category: "",
      title: "",
      image: "",
      description:""
    }
  }
  render(){
  return (
    <div class="card text-left">
      <div class="card-header">Add Post</div>
      <div class="card-body">
        <form class="row g-3" onSubmit={this.addPosts}>
          <div class="col-md-12">
            <label for="exampleFormControlTextarea1" class="form-label">Category</label>
            <textarea class="form-control" 
            id="exampleFormControlTextarea1"
            onChange={this.changeCategory}
            value={this.state.category}
            rows="1">
            </textarea>
          </div>
          <div class="col-md-12">
            <label for="exampleFormControlTextarea1" class="form-label">Title</label>
            <textarea 
            class="form-control" 
            id="exampleFormControlTextarea1" 
            onChange={this.changeTitle}
            value={this.state.title}
            rows="1"></textarea>
          </div>
          <div class="col-12">
            {/* <label for="formFileSm" class="form-label"></label> */}
            <input 
            class="form-control form-control-sm" 
            id="formFileSm" 
            onChange={this.changeImage}
            value={this.state.image}
            type="file"/>
          </div>
          <div class="col-12">
            <label for="exampleFormControlTextarea1" class="form-label">Description</label>
            <textarea 
            class="form-control" 
            id="exampleFormControlTextarea1" 
            onChange={this.changeDescription}
            value={this.state.description}
            rows="3"></textarea>
          </div>
          <div class="bun">
            <button type="submit" class="btn btn-primary">Add Post</button>
          </div>
        </form>
      </div>
    </div>
  )
}
}
export default AddPost;
