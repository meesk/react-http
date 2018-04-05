import React from 'react';
import Post from './Post/Post';

const posts = (props) => props.posts.map( post => {
    return <Post 
    title={post.title}
    body={post.body}
    key={post.id}
    />
});
 
export default posts;