import React from "react";

export default function PostDetail(props) {
    return (
        <div>{props.match.params.postId}</div>
    );
}