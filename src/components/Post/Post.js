import React from 'react';
import './Post.css';

const post = (props) => {
    return (
        <div className="Post">
            <h2>{props.title}</h2>
            <p>{props.body}</p>
        </div>
    );
}
 
export default post;