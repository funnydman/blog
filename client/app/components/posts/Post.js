import React from "react";
import {Link} from "react-router-dom";

function truncateHtml(content) {
    return content.substring(0, 1000);
}

export default function Post(props) {
    return (
        <div className="post" id={props.id}>
            <div className="card mb-4">

                <div className="card-body">
                    <h2 className="card-title">{props.title}</h2>
                    <p className="card-text" dangerouslySetInnerHTML={{__html: truncateHtml(props.content)}}>
                    </p>
                    <Link className="btn btn-primary" to={`/post/${props.id}`}>Read
                        More &rarr;</Link>
                </div>
                <div className="categories">
                    <p>Categories:
                        {props.categories.map(category => (
                            <span className="category">{category}</span>
                        ))}
                    </p>
                </div>
                <div className="card-footer text-muted">
                    Posted on by <span>{props.lastModified}</span>
                    <a href="#">Lorem</a>
                </div>
            </div>
        </div>
    );
}