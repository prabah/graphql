import React from 'react';

debugger;
const Course = ({props}) => (
    <div className="card" style={{'width': '100%', 'marginTop': '10px'}}>
        <div className="card-body">
        <h5 className="card-title">{props.author}</h5>
        <h6 className="card-subtitle mb-2 text-muted">by {props.author}</h6>
        <p className="card-text">{props.description}</p>
        <a href={props.url} className="card-link">Go to course ...</a>
        </div>
    </div>
);
export default Course;