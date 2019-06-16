import React from "react";
import CommentBox from "../comments/CommentBox";

export default function PostDetail(props) {
    return (
        <div className="post" id={props.id}>
            <div className="card mb-4">

                <div className="card-body">
                    <h2 className="card-title">{props.title}</h2>
                    <p className="card-text" dangerouslySetInnerHTML={{__html: props.content}}>
                    </p>
                </div>
            </div>
            <div>
                <h3>Comments</h3>
                <CommentBox comments={props.comments} post={props.id}/>
            </div>
        </div>
    );
}