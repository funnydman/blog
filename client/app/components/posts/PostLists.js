import React from "react";
import Post from "./Post";
import NoPosts from './NoPosts';
import {getPostLists} from '../../actions/getPostMethods';


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
        getPostLists().then((data) => {
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
                        <Post id={post.id} title={post.title} content={post.content} categories={post.categories}
                              lastModified={post.last_modified}
                              key={post.id}/>

                    ))}
                </div>

            );
        }
    }
}