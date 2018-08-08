import React from "react";
import {Link} from "react-router-dom";

export default function PostDetail(props) {
    return (
        <div className="post" id={props.id}>
            <div className="card mb-4">

                <div className="card-body">
                    <h2 className="card-title">{props.title}</h2>
                    <p className="card-text" dangerouslySetInnerHTML={{__html: props.content}}>
                    </p>
                </div>
                <div className="card-footer text-muted">
                    Posted on by
                    <a href="#">Lorem</a>
                </div>
            </div>
            <div>
                <h3>Comments</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Dignissimos laudantium non sint voluptatum!</p>
                <p>Cumque esse labore officia sit?</p>
                <p>Ab dicta fuga tempora tenetur.</p>
            </div>
        </div>
    );
}