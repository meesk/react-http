import React from 'react';

const http = (props) => {
    return (
        <div>
        <h1>I send HTTP requests</h1>
        <button onClick={props.clicked}>Send GET HTTP request</button>
        </div>
    );
}
 
export default http;