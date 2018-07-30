import React from "react";
import getData from "../../utils/getData";
import Post from "./Post";
import NoPosts from './NoPosts';

export default class PostLists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            posts: []
        };
    }

    componentDidMount() {
        getData('api/posts').then((data) => {
                this.setState({
                    isLoaded: true,
                    posts: data
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
        const {error, isLoaded, posts} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else if (this.state.posts.length === 0) {
            return (<NoPosts/>);
        }
        else {
            return (
                <div className="posts-list">
                    {posts.map(post => (
                        <Post title={post.title} id={post.id} content={post.content}/>

                    ))}
                </div>

            );
        }
    }
}