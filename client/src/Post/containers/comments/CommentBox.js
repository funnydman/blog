import * as React from 'react';
import { Fragment } from 'react';
import CommentsList from './CommentsList';
import AddComment from './AddComment';

export default class CommentBox extends React.Component {
    render() {
        return (
            <Fragment>
                <CommentsList comments={this.props.comments} />
                <AddComment post={this.props.post} />
            </Fragment>
        );
    }
}
