import React from 'react';
import Base from '../../Template/containers/Base';

export default class PostDetailView extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchPosts(this.props.match.params.postId);
    }

    render() {
        if (this.props.fetchPostsStatus === 'FINISHED') {
            return (
                <Base>
                    <div className="post" id={this.props.id}>
                        <div className="card mb-4">
                            <div className="card-body">
                                <h2 className="card-title">
                                    {this.props.title}
                                </h2>
                                <p>{this.props.content}</p>
                            </div>
                        </div>
                        <div>
                            <p>There will be comment information</p>
                            <h3>{this.props.fetchBlogPosts.title}</h3>
                            <p>{this.props.fetchBlogPosts.body}</p>
                        </div>
                    </div>
                </Base>
            );
        } else {
            return <div>Wait</div>;
        }
    }
}
