import * as React from "react";
import BasePage from './BasePage';
import PostDetail from "../components/posts/PostDetail";
import {getPostDetail} from "../actions/getPostMethods";

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

    componentDidMount() {
        getPostDetail(this.postId).then((data) => {
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
            <BasePage>
                <PostDetail title={post.title} id={post.id} content={post.content} comments={post.comments}
                            key={post.id}/>
            </BasePage>

        );
    }
}