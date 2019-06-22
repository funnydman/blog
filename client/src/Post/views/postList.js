import React from 'react';
import Post from "./Post";
import Base from "../../Template/containers/Base";

class PostListView extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchPosts();
    }

    render() {
        if (this.props.fetchPostsStatus === 'FINISHED') {
            return (
                <React.Fragment>
                    <Base>
                        <div className="posts-list">

                            <p>Here we go!</p>
                            {this.props.fetchBlogPosts.map(post => (
                                <Post
                                    id={post.id}
                                    title={post.title}
                                    body={post.body}
                                    key={post.id}
                                />
                            ))}
                        </div>
                    </Base>
                </React.Fragment>
            );
        } else {
            return (
                <div className="no-posts">
                    <h1>Oops, we don't have any posts</h1>
                    <p>But we'll add soon</p>
                </div>
            )
        }
    }

}

export default PostListView;
