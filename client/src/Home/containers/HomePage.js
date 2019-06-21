import * as React from "react";
import Base from '../../Template/containers/Base';
import PostList from "../../Post/containers/posts/PostList";

class HomePage extends React.Component {
    render() {
        return (
            <Base>
                <PostList/>
            </Base>
        );
    }
}

export default HomePage;
