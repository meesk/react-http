import React, { Component } from 'react';
import Http from '../components/Http/Http';
import Post from '../components/Post/Post';
import NewPost from '../components/NewPost/NewPost';
import axios from 'axios';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  state = {
    posts:[]
  }

  sendHTTPRequest = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      this.setState({posts:response.data});
      console.log(response);
    })
  }

  render() {
    const posts = this.state.posts.map(post => {
      return <Post 
      title={post.title}
      body={post.body}
      key={post.id}
      />;
    });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Http
          clicked={this.sendHTTPRequest}
          />
        </header>
      <NewPost />
      {posts}
      </div>
    );
  }
}

export default App;
