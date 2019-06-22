import React from 'react';
import { Link } from 'react-router-dom';

export default class Post extends React.Component {
    render() {
        return (
            <div className="post" id={this.props.id}>
                <div className="card mb-4">
                    <div className="card-body">
                        <h2 className="card-title">{this.props.title}</h2>
                        <p>{this.props.content}</p>
                        <Link
                            className="btn btn-primary"
                            to={`/posts/${this.props.id}`}
                        >
                            Read More &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
