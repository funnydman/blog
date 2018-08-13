import React, {Fragment} from "react";
import CommentItem from "./CommentItem";
import AddComment from "./AddComment";

export default function CommentsList(props) {

    if (props.comments === undefined) {
        return <div>Loading comments...</div>;
    } else if (props.comments.length === 0) {
        return (
            <Fragment>
                <div>No comments yet!</div>
                <AddComment post={props.post}/>
            </Fragment>
        );
    } else {
        return (
            <div className="comments-list">
                {props.comments.map((comment) => (
                    <CommentItem content={comment.content} key={comment.id}/>
                ))}
                <AddComment post={props.post}/>
            </div>
        );
    }
}