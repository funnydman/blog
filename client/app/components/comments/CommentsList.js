import React from "react";
import Comment from "./Comment";

export default function CommentsList(props) {

    if (props.comments === undefined) {
        return <div>Loading comments...</div>;
    } else if (props.comments.length === 0) {
        return <div>No comments yet!</div>;
    }else {
        return (
            <div className="comments-list">
                {props.comments.map((comment) => (
                    <Comment content={comment.content} key={comment.id}/>
                ))}
            </div>
        );
    }
}