import React from 'react';

export default class PostDetail extends React.Component {
    render() {
        return (
            <div className="post" id={this.props.id}>
                <div className="card mb-4">
                    <div className="card-body">
                        <h2 className="card-title">{this.props.title}</h2>
                        <p>{this.props.content}</p>
                    </div>
                </div>
                <div>
                    <h3>Comments</h3>
                    {/*<CommentBox comments={this.props.comments} post={this.props.id}/>*/}
                </div>
            </div>
        );
    }
}
