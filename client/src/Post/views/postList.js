import React from 'react';
import Post from './post';
import Base from '../../Template/containers/Base';

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
                            {this.props.fetchBlogPosts.map(post => (
                                <Post
                                    id={post.id}
                                    title={post.title}
                                    key={post.id}
                                />
                            ))}
                        </div>
                    </Base>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <Base>
                        <p>Loading...</p>
                    </Base>
                </React.Fragment>
            );
        }
    }
}

export default PostListView;
