import React, { Component } from 'react';
import Http from '../components/Http/Http';
import Posts from '../components/Posts/Posts';
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
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>I send HTTP requests</h1>
          <button onClick={this.sendHTTPRequest}>Send GET HTTP request</button>
        </header>
        <NewPost />
      <Posts 
      posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
