import * as React from "react";
import PageTemp from './PageTemp';
import PostDetail from "../components/posts/PostDetail";
import {getPostDetail} from "../actions/getPostMethods";

export default class PostDetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            postId: props.match.params.postId,
            post: []
        };
    }

    componentDidMount() {
        getPostDetail(this.state.postId).then((data) => {
                this.setState({
                    isLoaded: true,
                    post: data
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() {
        const {post} = this.state;
            return (
                <PageTemp>
                    <PostDetail title={post.title} id={post.id} content={post.content} key={post.id}/>
                </PageTemp>

            );
    }
}