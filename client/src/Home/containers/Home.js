import * as React from "react";
import Base from '../../Template/containers/Base';
import PostList from "../../Post/containers/posts/PostList";
import '../sass/main.sass'

class Home extends React.Component {
    render() {
        return (
            <Base>
                <PostList/>
            </Base>
        );
    }
}

export default Home;
