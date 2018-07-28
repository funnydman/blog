import React from "react";
import getData from "Utils";


class Posts extends React.Component {
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
        } else {
            return (
                <div>
                    {posts.map(post => (
                        <div key={post.id} id={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.content}</p>
                        </div>

                    ))}
                </div>

            );
        }
    }
}

export default Posts;