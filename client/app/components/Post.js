import React from "react";

export default function Post(props) {
    return (
        <div className="post" id={props.id}>
            <h1 className="title">{props.title}</h1>
            <p dangerouslySetInnerHTML={{__html: props.content}}></p>
        </div>
    );
}