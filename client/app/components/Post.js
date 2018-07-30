import React from "react";

export default function Post(props) {
    return (
        <div className="post" id={props.id}>
            <div className="card mb-4">
                    <div className="card-body">
                        <h2 className="card-title">{props.title}</h2>
                        <p className="card-text" dangerouslySetInnerHTML={{__html: props.content}}>
                        </p>
                        <a
                            className="btn btn-primary">Read
                            More &rarr;</a>
                    </div>
                    <div className="card-footer text-muted">
                        Posted on by
                        <a href="#">Lorem</a>
                    </div>
            </div>
        </div>
    );
}