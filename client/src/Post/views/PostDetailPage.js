import * as React from 'react';
import Base from '../../Template/containers/Base';
import PostDetail from './PostDetail';

export default class PostDetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            post: []
        };
        this.postId = props.match.params.postId;
    }

    componentDidMount() {}

    render() {
        const { post } = this.state;
        return (
            <Base>
                <PostDetail
                    title={post.title}
                    id={post.id}
                    content={post.content}
                    comments={post.comments}
                    key={post.id}
                />
            </Base>
        );
    }
}
