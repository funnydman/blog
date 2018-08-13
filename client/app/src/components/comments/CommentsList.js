import React, {Fragment} from "react";
import CommentItem from "./CommentItem";

export default function CommentsList(props) {

    if (props.comments === undefined) {
        return <div>Loading comments...</div>;
    } else if (props.comments.length === 0) {
        return (
            <Fragment>
                <div>No comments yet!</div>
            </Fragment>
        );
    } else {
        return (
            <div className="comments-list">
                {props.comments.map((comment) => (
                    <CommentItem content={comment.content} key={comment.id}/>
                ))}
            </div>
        );
    }
}