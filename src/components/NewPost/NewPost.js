import React, { Component } from 'react';
import './NewPost.css';
import axios from 'axios';

class NewPost extends Component {
    state = {
        title:'',
        body:''
    }

    onChangeHandler = (event) => {
        this.setState( {[event.target.name]:event.target.value })
    }
    
    postDataHandler = () => {
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        axios.post('https://jsonplaceholder.typicode.com/posts', post)
        .then(response => {
            console.log(response);
        });
    }
    
    render() { 
        return ( 
            <div className="NewPost">
                <label>Title</label>
                <input type="text" value={this.state.title} name="title" onChange={this.onChangeHandler} />
                <label>Body</label>
                <input type="text" value={this.state.body} name="body" onChange={this.onChangeHandler}/>
                <button onClick={this.postDataHandler}>Send POST HTTP Request</button>
            </div>
         );
    }
}
 

export default NewPost;